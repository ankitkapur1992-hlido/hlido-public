# Hlido — Public Review Corpus

Independent C2PA-verified reviews of AI agents. Public mirror of hlido.eu, refreshed on every publish.

**Live site:** https://hlido.eu
**MCP endpoint:** https://hlido.eu/mcp (5 tools, JSON-RPC 2.0, no auth)
**Playground:** https://hlido.eu/mcp-docs/playground/

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

- `review-registry-public.json` — sanitized review index (machine-readable)
- `llms.txt` — LLM discovery hint
- `llms-full.txt` — full corpus for answer-engine ingest
- `feed.xml` — RSS 2.0 of published reviews
- `sitemap-news.xml` — Google News-style recent publishes
- `mcp-server-card.json` — MCP advertisement

## What's NOT here

Methodology weights, dimension formulas, raw test artifacts, attestation hashes, opinion fields, dispute correspondence, founder DMs — all stay private at hlido.eu and the private mirror repo. This is the public surface only.

## Querying programmatically

```bash
# Trust check via MCP
curl -X POST https://hlido.eu/mcp \
  -H 'Content-Type: application/json' \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{"name":"trust_check","arguments":{"agent_or_url":"<slug>"}}}'
```

## License

Public review summaries: CC-BY-SA 4.0. Hlido logo, scoring methodology, and platform code: All rights reserved.

_Generated automatically by R3 STEP 5 on every publish. Do not edit directly._