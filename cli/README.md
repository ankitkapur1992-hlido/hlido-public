# hlido

**Independent, evidence-backed scorecards for AI agents — in your terminal.**

Hlido tests AI agents against their own claims and publishes signed scorecards. This CLI fetches them live from [hlido.eu](https://hlido.eu) so you can sanity-check an agent before you adopt it, compare two side-by-side, or browse the current top tier.

Zero runtime dependencies. Public data only. No login.

## Install

```sh
npx @hlido/cli check aider
```

Or install globally:

```sh
npm install -g @hlido/cli
hlido check aider
```

Requires Node 18+.

## Commands

```sh
hlido check <slug>                  # full scorecard, top claims, links to evidence
hlido search <text>                 # top 5 matches by name / category / summary
hlido compare <slug1> <slug2>       # side-by-side dimensions + per-claim verdicts
hlido tier <tier>                   # top 20 in VITAL | STEADY | FADING | FLATLINE
hlido recommend <need>              # constraint-driven shortlist via /v1/recommend
hlido scan <mcp-server>             # on-demand safety scan of an MCP server
hlido help                          # this menu
hlido --version
```

Add `--json` to any command for machine-readable output. Add `--no-color` (or set `NO_COLOR=1`) to disable ANSI colors. Output auto-detects when stdout is not a TTY.

## Examples

```sh
$ hlido check aider
Aider  [VITAL]  score 90
category Coding    reviewed 2026-04-26
…top 5 claims with PASS/FAIL/PART verdicts, plus links to the live review and signed attestation.

$ hlido search voice
[VITAL] retell-ai      Voice            Retell AI — programmatic phone agents…

$ hlido compare cursor aider
…score, tier, category, engine, per-claim verdicts side-by-side.

$ hlido tier VITAL
…top 20 agents currently in VITAL.

$ hlido check aider --json | jq .scorecard.score
90

$ hlido recommend "code review tool" --category Coding --k 3
…top 3 ranked Coding agents matching your need, with rationale + evidence URL.

$ HLIDO_API_KEY=hlk_live_… hlido recommend "voice agent" --json
…paid-tier response with full top-k results.
```

### `hlido recommend` — Recommendation API (Wave 4.0)

Calls `https://hlido.eu/v1/recommend`. Anonymous calls are free-tier (top-1
result, 100 calls/day per IP). Paid tiers expose top-k via API key in the
`HLIDO_API_KEY` env var.

```sh
hlido recommend <need> [--category <name>] [--k <int>] [--json]

# Override base URL (staging, self-hosted):
HLIDO_API_BASE=https://staging.hlido.eu/v1 hlido recommend "code review tool"
```

Pricing tiers and signup: <https://hlido.eu/api/>

## Tiers

| Tier      | Score range | Meaning                                  |
| --------- | ----------- | ---------------------------------------- |
| VITAL     | 90–100      | Live-verified, broad coverage, high confidence |
| STEADY    | 70–89       | Solid evidence, some gaps                |
| FADING    | 40–69       | Partial coverage or aging tests          |
| FLATLINE  | 0–39        | Sparse evidence or failing key claims    |

## Data source

- Registry: `https://hlido.eu/data/review-registry.json`
- Per-slug scorecard: `https://hlido.eu/data/scorecards/<slug>.json`
- Per-slug signed attestation: `https://hlido.eu/data/attestations/<slug>.json`

The CLI caches the registry to `~/.hlido/cache/registry.json` for one hour. Per-slug scorecards and attestations are fetched live each call. Delete the cache directory to force a refetch.

## License

MIT. See [LICENSE](./LICENSE).

## Project

- Website & full reviews: <https://hlido.eu>
- Methodology: <https://hlido.eu/methodology/>
- Issues / contact: hello@hlido.eu

This CLI is a thin reader over Hlido's public data. The scoring methodology, evidence pipeline, and signed attestations are the product — this CLI is the most frictionless way to read them.

### `hlido audit` — npm audit for AI agents (v0.3.0)

```
npx @hlido/cli audit
```

Scans your project (`package.json`, `requirements.txt`, MCP client configs) for AI-agent/MCP dependencies and prints an independent trust table — score, tier, stale-review flags, and free-submit pointers for unreviewed agents. Non-zero exit when something is flagged (CI-friendly). `--json` for machine output.

### `hlido scan` — on-demand MCP-server safety scan (v0.4.0)

```
npx @hlido/cli scan @modelcontextprotocol/server-filesystem
npx @hlido/cli scan https://mcp.example.com/mcp
npx @hlido/cli scan <target> --fail-on risky     # CI gate: exit 3 at/above tier or on tool-poisoning
```

Ask **before you install**: independent safety verdict for any MCP server — tier (`SAFE`/`CAUTION`/`RISKY`/`DANGEROUS`), **tool-poisoning detection** (hidden instructions in tool descriptions — the malice signal), dangerous-capability red-flags (shell/code-eval/fs-write/egress/secrets) with per-tool evidence, and auth posture.

How it answers: a server already in the [Hlido MCP register](https://hlido.eu/mcp/) returns instantly with full sandbox-scan evidence; an HTTP(S) endpoint we haven't seen is statically scanned live in seconds; a local (stdio) npm/PyPI package we haven't seen is **never executed on your machine or ours outside an isolated sandbox** — it's queued, and the verdict lands in the public register (typically <24h). An unscanned server is always reported `NOT_SCANNED`, never assumed safe. Tier = blast radius if hijacked, not maintainer trustworthiness.
