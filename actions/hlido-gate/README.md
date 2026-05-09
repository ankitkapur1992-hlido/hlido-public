# Hlido Gate

A drop-in GitHub Action that fails (or warns on) pull requests when an AI agent vendor's [Hlido](https://hlido.eu) trust score drops below a configured threshold. Wire the gate into your CI once and every PR gets a sticky comment with the latest signed Trust Attestation — score, tier, evidence count, last-tested date, links to the review and scorecard.

It's the deepest Hlido integration available: the trust signal lives inside your release cycle, not on a marketing page.

## Why use this

Hlido publishes [signed Trust Attestations](https://hlido.eu/data/attestations/) for every reviewed AI agent. The attestation is a small JSON document that mirrors fields already published on hlido.eu (slug, score, tier, evidence count, last-tested) plus an HMAC-SHA256 signature. Any consumer can verify integrity locally.

The action is a thin client over that endpoint:

1. Fetches the latest attestation for your slug.
2. Compares score against your configured `min-score`.
3. Posts a sticky comment on the PR with the current state.
4. Optionally fails the build (`mode: fail`) so a regression below threshold blocks merges.

No internal Hlido APIs, no auth, no signup beyond having a published Hlido review.

## Quick start

```yaml
# .github/workflows/hlido-gate.yml
name: Hlido Gate
on:
  pull_request:
    types: [opened, synchronize, reopened]
permissions:
  pull-requests: write   # needed to post the sticky comment
  contents: read
jobs:
  hlido-gate:
    runs-on: ubuntu-latest
    steps:
      - uses: ankitkapur1992-hlido/hlido-public/actions/hlido-gate@main
        with:
          slug: cursor          # YOUR Hlido slug (replace)
          min-score: 70
          mode: warn            # change to 'fail' once you trust the signal
```

The action runs in seconds. No checkout step needed (it doesn't read your repo).

## Inputs

| Name | Required | Default | Description |
|---|---|---|---|
| `slug` | yes | — | Your Hlido slug. Must be a published review at `hlido.eu/reviews/{slug}/`. Submit at <https://hlido.eu/submit/>. |
| `min-score` | no | `70` | Minimum allowed Hlido score (0–100). Below this, the action warns or fails depending on `mode`. |
| `max-regression` | no | `5` | **Advisory only in v1.** Reserved for v2 history-aware checks. Always passes today; vendors track regressions themselves via the score output. |
| `mode` | no | `warn` | `warn` (post comment, exit 0) or `fail` (post comment, exit 1 on threshold breach). Use `warn` to roll out, switch to `fail` once you trust the signal. |
| `comment-pr` | no | `true` | When `true` and the event is `pull_request`, post a sticky comment that updates on subsequent runs (no duplicates). |
| `attestation-base-url` | no | `https://hlido.eu/data/attestations` | Override the attestation base URL. Only useful for testing. |

## Outputs

| Name | Description |
|---|---|
| `score` | Score from the latest signed attestation (integer 0–100). |
| `tier` | Tier — one of `VITAL` / `STEADY` / `FADING` / `FLATLINE`. |
| `last-tested` | ISO date the attestation was last refreshed. |
| `decision` | `pass`, `warn`, or `fail`. |

Use the outputs to drive downstream steps — for example, post the score to your release notes, or block deploys at a stricter threshold:

```yaml
- uses: ankitkapur1992-hlido/hlido-public/actions/hlido-gate@main
  id: hlido
  with:
    slug: cursor
    min-score: 70
    mode: warn
- name: Block deploy below 80
  if: ${{ fromJSON(steps.hlido.outputs.score) < 80 }}
  run: |
    echo "::error::Hlido score ${{ steps.hlido.outputs.score }} below deploy threshold 80"
    exit 1
```

## Tier mapping

| Tier | Range | Meaning |
|---|---|---|
| `VITAL` | 90–100 | Living up to its pitch with depth |
| `STEADY` | 70–89 | Solid; defensible claims |
| `FADING` | 40–69 | Significant gaps between claim and evidence |
| `FLATLINE` | 0–39 | Pitch and reality mostly disconnected |

Recommended `min-score` defaults: `70` (block FADING and below) for general use, `80` for procurement-grade gates, `90` for safety-critical deployments.

## How thresholds work

The gate is intentionally simple in v1:

- **`mode: warn`** — emits a `::warning::` annotation, posts the comment, exits `0`. Nothing breaks. Recommended for the first 1–2 weeks while you watch the signal.
- **`mode: fail`** — same comment, but exits `1` if score < `min-score`. PR checks go red; merges are blocked if your branch protection requires this check.

Soft-pass on transient errors: if the attestation endpoint is unreachable (HTTP != 200), the action emits a `::warning::` and exits `0` — your CI doesn't break on a Hlido-side outage. The comment surfaces the error so you know the gate didn't actually evaluate.

## What the gate measures

The gate reads the *latest published attestation*. That JSON is regenerated on every Hlido publish (typical cadence: weekly to monthly per agent depending on category). Fields:

```json
{
  "schema_version": "1.0",
  "slug": "cursor",
  "name": "Cursor",
  "score": 78,
  "tier": "STEADY",
  "category": "Coding",
  "evidence_count": 5,
  "last_tested": "2026-05-01",
  "review_url": "https://hlido.eu/reviews/cursor/",
  "scorecard_url": "https://hlido.eu/data/scorecards/cursor.json",
  "signature": "<hmac-sha256>",
  "signed_at": "2026-05-09T16:52:34.423Z"
}
```

The action verifies the JSON shape and uses `score` for the threshold decision. The `signature` field stays available for downstream verification if you want to integrity-check the attestation in your own pipeline.

## Permissions

The action needs:

- `pull-requests: write` — to post the sticky PR comment via the pre-installed `gh` CLI.
- `contents: read` — default for public repos; required if you also do `actions/checkout` in the same workflow.

If `pull-requests: write` is omitted, the comment step soft-fails (the score still appears in the step summary).

## Don't have a Hlido review yet?

Submit your agent at <https://hlido.eu/submit/>. Free public review. Most reviews turn around in 1–7 days. The attestation endpoint becomes live the moment your review publishes.

## Frequently asked

**Does this gate change my Hlido score?** No. The score is set by independent review only. The gate is read-only.

**Can I run it on `push` instead of `pull_request`?** Yes — the action works on any event. PR comments only post on `pull_request` events.

**What happens on the first run?** The gate fetches the current attestation and posts a fresh comment. There's no historical state stored in your repo.

**What if the attestation endpoint is down?** The action soft-passes with a warning and writes a fetch-error block to the step summary. Your CI doesn't break.

**Does this share my repo data with Hlido?** No. The action only fetches a public JSON file; it doesn't transmit anything from your repo back to Hlido.

**How do I dispute a score?** Use the [`report_review_issue`](https://hlido.eu/integrations/#mcp-tools) MCP tool or email <ankit@hlido.eu>.

## License

MIT — see the LICENSE file at the root of this repo.

## Links

- Hlido home: <https://hlido.eu>
- Submit your agent: <https://hlido.eu/submit/>
- All published attestations: <https://hlido.eu/data/attestations/>
- Action landing page (install snippet): <https://hlido.eu/integrations/github-action/>
