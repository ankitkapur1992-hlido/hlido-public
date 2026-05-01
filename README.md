# Hlido — the trust layer for AI agents

Independent, evidence-backed reviews of AI agents. C2PA-signed proof, machine-readable scorecards, and a Laddoo Score that's consistent across every reviewed agent — so buyers, teams, and other agents can tell which ones live up to their pitch.

This repository is the **public mirror** of [hlido.eu](https://hlido.eu). Every review pushed live on the canonical site is mirrored here automatically — sanitized, machine-readable, fork-friendly. Use it from your own scripts, agents, or analysis pipelines without scraping HTML.

---

## Why Hlido exists

Every week, dozens of new AI agents launch. Each one claims to write code, run workflows, handle support, or close deals. Some deliver. Most don't — at least not the way their landing page implies.

Until now, the only way to know was to sign up, burn a weekend, and find out yourself. That doesn't scale — not for procurement teams choosing vendors, not for builders wiring agents into production, and crucially not for **other agents** that will increasingly make those calls on our behalf.

Hlido is the independent party that actually tests every claim. We publish verdicts grounded in captured evidence, track them over time, and surface the patterns the market needs to see.

## What we provide

- **Independent reviews of AI agents** — public-surface tested for web tools, live CLI tested for terminal tools, claim-by-claim verification for everything
- **A consistent score** — every agent gets a Laddoo Score (0–100) derived from a fixed evaluation framework. Tier mapping: `VITAL` ≥ 90 · `STEADY` ≥ 70 · `FADING` ≥ 40 · `FLATLINE` < 40
- **C2PA-signed evidence** — screenshots and (where applicable) terminal casts are cryptographically signed, so the captured proof can be verified as un-tampered
- **A live MCP server** — 9 tools exposed at [`https://hlido.eu/mcp`](https://hlido.eu/mcp) for human and agent consumers. JSON-RPC 2.0, no auth required, free to call. Tools include `trust_check`, `find_similar_agents` (semantic search), `get_scorecard` (full claim table), `request_quick_audit`, `verify_claim`, `compare_agents`, and more
- **Structured machine-readable scorecards** — every review is also published as a JSON file in this repo (`scorecards/{slug}.json`) with the full claim-vs-evidence table, source-surface citations, and stable schema (`schema_version: 1.0`)
- **Distribution everywhere** — also indexed on [Smithery](https://smithery.ai/servers/ankitkapur1992/hlido), [HuggingFace dataset](https://huggingface.co/datasets/hlido-eu/agent-benchmark), and the [community awesome-mcp-servers list](https://github.com/punkpeye/awesome-mcp-servers)

## Reviewed agents (8)

| Slug | Name | Category | Laddoo | Tier |
|---|---|---|---|---|
| [`naoma-ai-demo-agent`](https://hlido.eu/reviews/naoma-ai-demo-agent/) | Naoma AI Demo Agent | Sales | 80 | — |
| [`workbeaver`](https://hlido.eu/reviews/workbeaver/) | WorkBeaver | Productivity | 63.4 | — |
| [`gumloop`](https://hlido.eu/reviews/gumloop/) | Gumloop | AI Workflow Builder | 80 | — |
| [`aider`](https://hlido.eu/reviews/aider/) | Aider | AI Coding CLI | 90 | — |
| [`jared-so`](https://hlido.eu/reviews/jared-so/) | jared-so | Productivity | 40 | — |
| [`raccoon-ai`](https://hlido.eu/reviews/raccoon-ai/) | raccoon-ai | Productivity | 70 | — |
| [`needle-2-0`](https://hlido.eu/reviews/needle-2-0/) | needle-2-0 | Productivity | 80 | — |
| [`zooclaw`](https://hlido.eu/reviews/zooclaw/) | zooclaw | Productivity | 40 | — |

## Files in this mirror

| File | What it contains |
|---|---|
| `review-registry-public.json` | Sanitized index of every published review — slug, name, category, score, tier, summary, review URL, reviewed_at. The single fastest way to load the corpus into your script |
| `scorecards/{slug}.json` | Per-agent structured claim-vs-evidence scorecard. Fields: claim · verdict · evidence quote · source surface (homepage / pricing / docs / cli / api). Same schema for every agent regardless of how it was tested |
| `mcp-server-card.json` | Hlido MCP server advertisement — endpoint, transports, available tools, auth scheme |
| `llms.txt` | LLM-friendly discovery hint (per the proposed [llms.txt](https://llmstxt.org) spec) |
| `llms-full.txt` | Full review corpus rendered as plaintext for AEO / answer-engine ingest |
| `feed.xml` | RSS 2.0 of recently published reviews |
| `sitemap-news.xml` | Google News-style sitemap of last 48h publishes |

## How to use this mirror

### Read the corpus

```bash
# Full sanitized index
curl -L https://raw.githubusercontent.com/ankitkapur1992-hlido/hlido-public/main/review-registry-public.json

# A specific scorecard
curl -L https://raw.githubusercontent.com/ankitkapur1992-hlido/hlido-public/main/scorecards/aider.json
```

### Call the MCP server

```bash
# trust_check
curl -X POST https://hlido.eu/mcp \
  -H 'Content-Type: application/json' \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"trust_check","arguments":{"agent_or_url":"aider"}}}'

# find_similar_agents (semantic search via OpenAI embeddings + Cloudflare Vectorize)
curl -X POST https://hlido.eu/mcp \
  -H 'Content-Type: application/json' \
  -d '{"jsonrpc":"2.0","id":2,"method":"tools/call","params":{"name":"find_similar_agents","arguments":{"description":"AI coding assistant that edits files in a git repo","top_k":5}}}'
```

### Connect from any MCP-aware client

Drop this into Claude Desktop, Cursor, Cline, Continue, or any MCP-aware app:

```json
{
  "mcpServers": {
    "hlido": {
      "type": "streamable-http",
      "url": "https://hlido.eu/mcp"
    }
  }
}
```

## What's NOT in this repo

We publish results, not the recipe. The following stay private and are intentionally not mirrored here:

- Scoring formula weights and the exact rubric mechanics
- Raw test artifacts (browser sessions, intermediate logs, internal screenshots)
- Pre-publication opinion drafts and dispute correspondence
- Operator credentials, dashboards, and internal automation state

If a vendor wants to dispute a published verdict, the [`report_review_issue`](https://hlido.eu/integrations/#mcp-tools) MCP tool routes that request through our re-test queue with the same rigor as the original review.

## License

Public review summaries and scorecards in this repo: **CC-BY-SA 4.0** — fork, redistribute, build on top, with attribution.

Hlido logo, brand, scoring methodology, and platform code: **All rights reserved**.

## Contact

- Founder: [Ankit Kapur](mailto:ankit@hlido.eu)
- Live site: [hlido.eu](https://hlido.eu)
- Submit an agent for review: [hlido.eu/integrations/#mcp-tools](https://hlido.eu/integrations/#mcp-tools) → `submit_agent` or `request_quick_audit`

---

_This README and the rest of this mirror are auto-regenerated on every publish via [scripts/public-repo-sync.mjs](https://github.com/ankitkapur1992-hlido/hlido-public#) in the upstream Hlido pipeline. Do not edit directly — changes will be overwritten on the next publish._