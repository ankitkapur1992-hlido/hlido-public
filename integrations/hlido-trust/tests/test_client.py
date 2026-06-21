"""Offline tests for the Hlido trust client. No network — urlopen is mocked.

Run: python -m unittest discover -s tests
"""

import io
import json
import sys
import unittest
from pathlib import Path
from unittest import mock

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "src"))

from hlido_trust import HlidoClient, HlidoError, tier_for_score  # noqa: E402


class _FakeResp(io.BytesIO):
    """Minimal stand-in for the urlopen context-manager response."""

    def __init__(self, payload, content_type="application/json"):
        super().__init__(payload.encode("utf-8"))
        self.headers = {"content-type": content_type}

    def __enter__(self):
        return self

    def __exit__(self, *a):
        self.close()
        return False


def _capture(payload, ctype="application/json"):
    """Return (mock_urlopen, captured_requests_list)."""
    captured = []

    def fake_urlopen(req, timeout=None):
        captured.append(req)
        return _FakeResp(payload, ctype)

    return fake_urlopen, captured


class TestTierForScore(unittest.TestCase):
    def test_thresholds(self):
        self.assertEqual(tier_for_score(95), "VITAL")
        self.assertEqual(tier_for_score(70), "STEADY")
        self.assertEqual(tier_for_score(40), "FADING")
        self.assertEqual(tier_for_score(10), "FLATLINE")
        self.assertEqual(tier_for_score(None), "UNRANKED")


class TestRecommend(unittest.TestCase):
    def test_recommend_parses_and_shapes_request(self):
        payload = json.dumps(
            {"results": [{"slug": "aider", "name": "Aider", "score": 92, "tier": "VITAL",
                          "category": "Coding", "rationale": "Top match", "evidence_url": "https://hlido.eu/reviews/aider/"}]}
        )
        fake, captured = _capture(payload)
        with mock.patch("urllib.request.urlopen", fake):
            recs = HlidoClient().recommend("reliable AI coding agent", k=1)
        self.assertEqual(len(recs), 1)
        self.assertEqual(recs[0].slug, "aider")
        self.assertEqual(recs[0].tier, "VITAL")
        # request shape
        req = captured[0]
        self.assertEqual(req.method, "POST")
        self.assertTrue(req.full_url.endswith("/v1/recommend"))
        body = json.loads(req.data.decode())
        self.assertEqual(body, {"need": "reliable AI coding agent", "k": 1})
        self.assertIn("framework=core", req.headers["User-agent"])

    def test_empty_need_rejected(self):
        with self.assertRaises(ValueError):
            HlidoClient().recommend("  ")

    def test_api_key_sets_bearer(self):
        fake, captured = _capture(json.dumps({"results": []}))
        with mock.patch("urllib.request.urlopen", fake):
            HlidoClient(api_key="hlk_live_test").recommend("x", k=3)
        self.assertEqual(captured[0].headers["Authorization"], "Bearer hlk_live_test")


class TestTrustCheck(unittest.TestCase):
    def test_trust_check_parses_scorecard(self):
        card = json.dumps(
            {"slug": "aider", "name": "Aider", "score": 92, "tier": "VITAL",
             "confidence": "high", "red_flags": [], "what_it_fails_at": ["large refactors"],
             "best_for": ["pair programming"]}
        )
        fake, _ = _capture(card)
        with mock.patch("urllib.request.urlopen", fake):
            v = HlidoClient().trust_check("aider")
        self.assertTrue(v.found)
        self.assertEqual(v.score, 92)
        self.assertTrue(v.recommended(min_score=70))
        self.assertIn("Aider", v.summary())

    def test_red_flag_fails_gate(self):
        card = json.dumps({"slug": "x", "name": "X", "score": 95, "red_flags": ["hallucinates deletions"]})
        fake, _ = _capture(card)
        with mock.patch("urllib.request.urlopen", fake):
            v = HlidoClient().trust_check("x")
        self.assertFalse(v.recommended())  # high score but red-flagged

    def test_missing_review_fails_closed(self):
        import urllib.error

        def fake_urlopen(req, timeout=None):
            raise urllib.error.HTTPError(req.full_url, 404, "nf", {}, None)

        with mock.patch("urllib.request.urlopen", fake_urlopen):
            client = HlidoClient()
            self.assertFalse(client.trust_check("nope").found)
            self.assertFalse(client.trust_gate("nope"))  # un-reviewed = fail closed

    def test_html_fallback_treated_as_not_found(self):
        fake, _ = _capture("<!DOCTYPE html><html></html>", ctype="text/html")
        with mock.patch("urllib.request.urlopen", fake):
            self.assertFalse(HlidoClient().trust_check("ghost").found)


if __name__ == "__main__":
    unittest.main()
