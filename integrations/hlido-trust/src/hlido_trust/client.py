"""Hlido trust client — zero-dependency access to Hlido's independent AI-agent
trust scores and reliability reviews.

Hlido (https://hlido.eu) publishes independent, evidence-backed scorecards for
AI agents. This client lets an agent framework call Hlido as a *trust step*
inside its own loop — "vet before you delegate" — using only the Python
standard library (urllib). No third-party runtime dependencies.

Two capabilities:

* :meth:`HlidoClient.recommend` — given a free-text need, return Hlido-vetted
  agent(s), ranked. Hits the live, metered ``POST /v1/recommend`` endpoint.
* :meth:`HlidoClient.trust_check` — given an agent slug, return its trust
  verdict (score, tier, what it fails at, red flags, evidence URL).

:meth:`HlidoClient.trust_gate` is a convenience boolean for guard clauses.
"""

from __future__ import annotations

import json
import os
import urllib.error
import urllib.parse
import urllib.request
from dataclasses import dataclass, field
from typing import Any, Dict, List, Optional

__all__ = [
    "HlidoClient",
    "HlidoError",
    "TrustVerdict",
    "Recommendation",
    "tier_for_score",
]

DEFAULT_BASE_URL = "https://hlido.eu"
DEFAULT_TIMEOUT = 15.0
_VERSION = "0.1.0"


class HlidoError(RuntimeError):
    """Raised when the Hlido API returns an error or is unreachable."""


def _is_stale(due_at: Optional[str]) -> bool:
    """True if a review's next-due timestamp is in the past. Best-effort: any
    parse failure returns False (don't flag what we can't read)."""
    if not due_at or not isinstance(due_at, str):
        return False
    import datetime as _dt

    try:
        ts = due_at.replace("Z", "+00:00")
        due = _dt.datetime.fromisoformat(ts)
        if due.tzinfo is None:
            due = due.replace(tzinfo=_dt.timezone.utc)
        return due < _dt.datetime.now(_dt.timezone.utc)
    except (ValueError, TypeError):
        return False


def tier_for_score(score: Optional[float]) -> str:
    """Hlido canonical tier taxonomy (VITAL >=90, STEADY >=70, FADING >=40,
    else FLATLINE). The registry ``tier`` field is sparse/unreliable, so always
    derive from the numeric score."""
    if not isinstance(score, (int, float)):
        return "UNRANKED"
    if score >= 90:
        return "VITAL"
    if score >= 70:
        return "STEADY"
    if score >= 40:
        return "FADING"
    return "FLATLINE"


@dataclass
class Recommendation:
    """One Hlido-vetted agent returned by :meth:`HlidoClient.recommend`."""

    slug: str
    name: str
    score: Optional[float]
    tier: str
    category: Optional[str] = None
    rationale: Optional[str] = None
    evidence_url: Optional[str] = None
    raw: Dict[str, Any] = field(default_factory=dict)

    @classmethod
    def _from_api(cls, d: Dict[str, Any]) -> "Recommendation":
        score = d.get("score")
        return cls(
            slug=d.get("slug", ""),
            name=d.get("name", d.get("slug", "")),
            score=score,
            tier=d.get("tier") or tier_for_score(score),
            category=d.get("category"),
            rationale=d.get("rationale"),
            evidence_url=d.get("evidence_url"),
            raw=d,
        )


@dataclass
class TrustVerdict:
    """A trust verdict for one agent, normalized from its Hlido scorecard."""

    slug: str
    name: str
    score: Optional[float]
    tier: str
    confidence: Optional[str] = None
    best_for: List[str] = field(default_factory=list)
    not_recommended_for: List[str] = field(default_factory=list)
    what_it_fails_at: List[str] = field(default_factory=list)
    red_flags: List[str] = field(default_factory=list)
    evidence_url: Optional[str] = None
    stale: bool = False
    found: bool = True
    raw: Dict[str, Any] = field(default_factory=dict)

    def recommended(self, min_score: float = 70.0) -> bool:
        """True if the agent meets ``min_score`` (default 70 = STEADY+) and has
        no recorded red flags. Use this as the gate before delegating."""
        if not self.found or not isinstance(self.score, (int, float)):
            return False
        return self.score >= min_score and not self.red_flags

    def summary(self) -> str:
        """One-line human/agent-readable verdict."""
        if not self.found:
            return f"{self.slug}: no Hlido review found (not vetted)."
        flags = f" — red flags: {'; '.join(self.red_flags)}" if self.red_flags else ""
        return f"{self.name} — {self.tier} ({self.score}/100), confidence {self.confidence or 'n/a'}{flags}. Evidence: {self.evidence_url}"

    @classmethod
    def _not_found(cls, slug: str) -> "TrustVerdict":
        return cls(slug=slug, name=slug, score=None, tier="UNRANKED", found=False)

    @classmethod
    def _from_scorecard(cls, slug: str, d: Dict[str, Any]) -> "TrustVerdict":
        def _aslist(v: Any) -> List[str]:
            if v is None:
                return []
            if isinstance(v, list):
                return [str(x) for x in v if x]
            return [str(v)]

        score = d.get("score", d.get("laddoo_score"))
        return cls(
            slug=d.get("slug", slug),
            name=d.get("name", slug),
            score=score,
            tier=d.get("tier") or tier_for_score(score),
            confidence=d.get("confidence"),
            best_for=_aslist(d.get("best_for")),
            not_recommended_for=_aslist(d.get("not_recommended_for")),
            what_it_fails_at=_aslist(d.get("what_it_fails_at")),
            red_flags=_aslist(d.get("red_flags")),
            evidence_url=f"{DEFAULT_BASE_URL}/reviews/{d.get('slug', slug)}/",
            stale=_is_stale(d.get("next_review_due_at") or d.get("staleness_after")),
            found=True,
            raw=d,
        )


class HlidoClient:
    """Client for Hlido's public trust API.

    Parameters
    ----------
    api_key:
        Optional Hlido API key (``hlk_live_*``). Without it, ``recommend``
        returns the single top match (free tier). With it, ``k`` > 1 works.
        Falls back to the ``HLIDO_API_KEY`` environment variable.
    base_url:
        Override the API base (default ``https://hlido.eu``).
    timeout:
        Per-request timeout in seconds.
    framework:
        Tag identifying the calling framework (``"crewai"``, ``"langchain"``,
        or ``"core"``). Sent in the User-Agent so Hlido can attribute real
        caller traffic. Set automatically by the framework adapters.
    """

    def __init__(
        self,
        api_key: Optional[str] = None,
        base_url: str = DEFAULT_BASE_URL,
        timeout: float = DEFAULT_TIMEOUT,
        framework: str = "core",
    ) -> None:
        self.api_key = api_key or os.environ.get("HLIDO_API_KEY")
        self.base_url = base_url.rstrip("/")
        self.timeout = timeout
        self.framework = framework
        self.user_agent = f"hlido-trust/{_VERSION} (python; framework={framework}; +https://hlido.eu)"

    # -- HTTP ---------------------------------------------------------------

    def _request(self, method: str, path: str, body: Optional[Dict[str, Any]] = None) -> Any:
        url = f"{self.base_url}{path}"
        data = json.dumps(body).encode("utf-8") if body is not None else None
        headers = {
            "user-agent": self.user_agent,
            "accept": "application/json",
        }
        if data is not None:
            headers["content-type"] = "application/json"
        if self.api_key:
            headers["authorization"] = f"Bearer {self.api_key}"
        req = urllib.request.Request(url, data=data, headers=headers, method=method)
        try:
            with urllib.request.urlopen(req, timeout=self.timeout) as resp:
                ctype = resp.headers.get("content-type", "")
                raw = resp.read().decode("utf-8", "replace")
                if "json" not in ctype and raw.lstrip().startswith("<"):
                    # hlido.eu serves an HTML SPA fallback (200) for missing JSON.
                    raise HlidoError(f"{path}: not found (HTML fallback)")
                return json.loads(raw)
        except urllib.error.HTTPError as e:  # 4xx/5xx
            raise HlidoError(f"{path}: HTTP {e.code}") from e
        except urllib.error.URLError as e:  # network/DNS/timeout
            raise HlidoError(f"{path}: unreachable ({e.reason})") from e
        except json.JSONDecodeError as e:
            raise HlidoError(f"{path}: invalid JSON ({e})") from e

    # -- Public API ---------------------------------------------------------

    def recommend(self, need: str, k: int = 1) -> List[Recommendation]:
        """Return Hlido-vetted agents for a free-text ``need``, best first.

        Hits the live, metered ``POST /v1/recommend``. Without an API key the
        free tier returns the single top match regardless of ``k``.
        """
        if not need or not need.strip():
            raise ValueError("need must be a non-empty string")
        payload = self._request("POST", "/v1/recommend", {"need": need.strip(), "k": int(k)})
        results = payload.get("results", []) if isinstance(payload, dict) else []
        return [Recommendation._from_api(r) for r in results]

    def trust_check(self, slug: str) -> TrustVerdict:
        """Return the trust verdict for an agent by its Hlido ``slug``.

        Reads the agent's published scorecard. If no review exists, returns a
        :class:`TrustVerdict` with ``found=False`` (treat as un-vetted).
        """
        if not slug or not slug.strip():
            raise ValueError("slug must be a non-empty string")
        safe = urllib.parse.quote(slug.strip(), safe="")
        try:
            card = self._request("GET", f"/data/scorecards/{safe}.json")
        except HlidoError:
            return TrustVerdict._not_found(slug)
        if not isinstance(card, dict) or card.get("error"):
            return TrustVerdict._not_found(slug)
        return TrustVerdict._from_scorecard(slug, card)

    def trust_gate(self, slug: str, min_score: float = 70.0) -> bool:
        """Convenience boolean: is this agent safe to delegate to?

        ``True`` only if the agent has a Hlido review meeting ``min_score`` and
        carries no red flags. Unreviewed agents return ``False`` (fail closed).
        """
        return self.trust_check(slug).recommended(min_score=min_score)
