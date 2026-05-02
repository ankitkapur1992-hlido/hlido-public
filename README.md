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

## Reviewed agents (144)

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
| [`agentpulse-by-rectify`](https://hlido.eu/reviews/agentpulse-by-rectify/) | agentpulse-by-rectify | DevOps | 40 | — |
| [`genspark`](https://hlido.eu/reviews/genspark/) | genspark | Research | 40 | — |
| [`askiva`](https://hlido.eu/reviews/askiva/) | askiva | Research | 40 | — |
| [`influcio`](https://hlido.eu/reviews/influcio/) | influcio | AI Agent | 65 | — |
| [`lindy-ai`](https://hlido.eu/reviews/lindy-ai/) | lindy-ai | AI Agent | 50 | — |
| [`ovren`](https://hlido.eu/reviews/ovren/) | ovren | AI Agent | 40 | — |
| [`panorama`](https://hlido.eu/reviews/panorama/) | panorama | AI Agent | 40 | — |
| [`poke`](https://hlido.eu/reviews/poke/) | poke | AI Agent | 60 | — |
| [`spine-ai`](https://hlido.eu/reviews/spine-ai/) | spine-ai | AI Agent | 65 | — |
| [`synthflow-ai`](https://hlido.eu/reviews/synthflow-ai/) | synthflow-ai | AI Agent | 80 | — |
| [`flux`](https://hlido.eu/reviews/flux/) | flux | AI Agent | 40 | — |
| [`agentmail`](https://hlido.eu/reviews/agentmail/) | agentmail | AI Agent | 53 | — |
| [`lmarena`](https://hlido.eu/reviews/lmarena/) | Chatbot Arena (LMArena) | ai-evaluation | 40 | — |
| [`perplexity`](https://hlido.eu/reviews/perplexity/) | Perplexity | ai-search | 53 | — |
| [`happycapy`](https://hlido.eu/reviews/happycapy/) | happycapy | AI Agent | 90 | — |
| [`back4app-ai-agent`](https://hlido.eu/reviews/back4app-ai-agent/) | Back4app AI Agent | AI Agent | 40 | — |
| [`luma-ai-agents`](https://hlido.eu/reviews/luma-ai-agents/) | Luma AI Agents | AI Agent | 65 | — |
| [`agent-ai`](https://hlido.eu/reviews/agent-ai/) | Agent.ai | AI Agent | 78 | — |
| [`windsurf`](https://hlido.eu/reviews/windsurf/) | Windsurf | AI Agent | 65 | — |
| [`cal-com-ai-agents`](https://hlido.eu/reviews/cal-com-ai-agents/) | Cal.com AI Agents | AI Agent | 78 | — |
| [`usercall`](https://hlido.eu/reviews/usercall/) | UserCall | AI Agent | 40 | — |
| [`mindstudio`](https://hlido.eu/reviews/mindstudio/) | MindStudio | AI Agent | 78 | — |
| [`foyer`](https://hlido.eu/reviews/foyer/) | Foyer | AI Agent | 40 | — |
| [`hubspot-breeze`](https://hlido.eu/reviews/hubspot-breeze/) | HubSpot Breeze | AI Agent | 53 | — |
| [`octoclaw`](https://hlido.eu/reviews/octoclaw/) | OctoClaw | AI Agent | 40 | — |
| [`molmoweb`](https://hlido.eu/reviews/molmoweb/) | MolmoWeb | AI Agent | 40 | — |
| [`guide-ai`](https://hlido.eu/reviews/guide-ai/) | Guide | AI Agent | 53 | — |
| [`adobe-firefly`](https://hlido.eu/reviews/adobe-firefly/) | Adobe Firefly | AI Agent | 53 | — |
| [`tad-ai`](https://hlido.eu/reviews/tad-ai/) | Tad AI | AI Agent | 65 | — |
| [`genfuse-ai`](https://hlido.eu/reviews/genfuse-ai/) | GenFuse AI | AI Agent | 78 | — |
| [`outset-ai`](https://hlido.eu/reviews/outset-ai/) | Outset AI | AI Agent | 65 | — |
| [`autonoly`](https://hlido.eu/reviews/autonoly/) | Autonoly | AI Agent | 78 | — |
| [`cockpit-ai`](https://hlido.eu/reviews/cockpit-ai/) | Cockpit AI | AI Agent | 53 | — |
| [`lessie-ai`](https://hlido.eu/reviews/lessie-ai/) | Lessie AI | AI Agent | 78 | — |
| [`aiagent-app`](https://hlido.eu/reviews/aiagent-app/) | AiAgent.app | AI Agent | 65 | — |
| [`klipy`](https://hlido.eu/reviews/klipy/) | Klipy | AI Agent | 40 | — |
| [`fuseai`](https://hlido.eu/reviews/fuseai/) | FuseAI | AI Agent | 53 | — |
| [`relay-app`](https://hlido.eu/reviews/relay-app/) | Relay.app | AI Agent | 78 | — |
| [`canary-ai`](https://hlido.eu/reviews/canary-ai/) | Canary | AI Agent | 53 | — |
| [`augment-code`](https://hlido.eu/reviews/augment-code/) | Augment Code (Intent) | AI Agent | 78 | — |
| [`cursor`](https://hlido.eu/reviews/cursor/) | Cursor | AI Agent | 78 | — |
| [`cto-new`](https://hlido.eu/reviews/cto-new/) | cto.new | AI Agent | 90 | — |
| [`orange-slice`](https://hlido.eu/reviews/orange-slice/) | Orange Slice | AI Agent | 90 | — |
| [`claimcheck`](https://hlido.eu/reviews/claimcheck/) | ClaimCheck | AI Agent | 65 | — |
| [`kaily`](https://hlido.eu/reviews/kaily/) | Kaily | AI Agent | 78 | — |
| [`magine`](https://hlido.eu/reviews/magine/) | Magine | AI Agent | 65 | — |
| [`blink-ai`](https://hlido.eu/reviews/blink-ai/) | Blink | AI Agent | 65 | — |
| [`cosyra-2`](https://hlido.eu/reviews/cosyra-2/) | Cosyra | AI Agent | 78 | — |
| [`catdoes-v4`](https://hlido.eu/reviews/catdoes-v4/) | CatDoes v4 | AI Agent | 65 | — |
| [`denovo`](https://hlido.eu/reviews/denovo/) | Denovo | AI Agent | 78 | — |
| [`athena-intel`](https://hlido.eu/reviews/athena-intel/) | Athena Intelligence | AI Agent | 53 | — |
| [`anthropic-computer-use`](https://hlido.eu/reviews/anthropic-computer-use/) | Anthropic Computer Use | AI Agent | 40 | — |
| [`anyword`](https://hlido.eu/reviews/anyword/) | Anyword | AI Agent | 90 | — |
| [`axe`](https://hlido.eu/reviews/axe/) | Axe | AI Agent | 40 | — |
| [`bolt-new`](https://hlido.eu/reviews/bolt-new/) | Bolt.new | AI Agent | 65 | — |
| [`braintrust`](https://hlido.eu/reviews/braintrust/) | Braintrust | AI Agent | 90 | — |
| [`cerebras`](https://hlido.eu/reviews/cerebras/) | Cerebras | AI Agent | 65 | — |
| [`cassidy-ai`](https://hlido.eu/reviews/cassidy-ai/) | Cassidy | AI Agent | 78 | — |
| [`chatgpt`](https://hlido.eu/reviews/chatgpt/) | ChatGPT | AI Agent | 65 | — |
| [`character-ai`](https://hlido.eu/reviews/character-ai/) | Character.AI | AI Agent | 53 | — |
| [`chatwithads`](https://hlido.eu/reviews/chatwithads/) | ChatWithAds | AI Agent | 78 | — |
| [`claude-ai`](https://hlido.eu/reviews/claude-ai/) | Claude.ai | AI Agent | 53 | — |
| [`cline-bot`](https://hlido.eu/reviews/cline-bot/) | Cline | AI Agent | 78 | — |
| [`codeium`](https://hlido.eu/reviews/codeium/) | Codeium | AI Agent | 65 | — |
| [`continue-dev`](https://hlido.eu/reviews/continue-dev/) | Continue | AI Agent | 78 | — |
| [`cohere`](https://hlido.eu/reviews/cohere/) | Cohere | AI Agent | 78 | — |
| [`copy-ai`](https://hlido.eu/reviews/copy-ai/) | Copy.ai | AI Agent | 78 | — |
| [`crewai`](https://hlido.eu/reviews/crewai/) | CrewAI | AI Agent | 90 | — |
| [`datagrout`](https://hlido.eu/reviews/datagrout/) | DataGrout | AI Agent | 40 | — |
| [`dust-tt`](https://hlido.eu/reviews/dust-tt/) | Dust | AI Agent | 90 | — |
| [`descript`](https://hlido.eu/reviews/descript/) | Descript | AI Agent | 65 | — |
| [`elevenlabs`](https://hlido.eu/reviews/elevenlabs/) | ElevenLabs | AI Agent | 78 | — |
| [`flux-bfl`](https://hlido.eu/reviews/flux-bfl/) | FLUX (Black Forest Labs) | AI Agent | 65 | — |
| [`flowith`](https://hlido.eu/reviews/flowith/) | Flowith | AI Agent | 78 | — |
| [`fireworks-ai`](https://hlido.eu/reviews/fireworks-ai/) | Fireworks AI | AI Agent | 90 | — |
| [`gemini`](https://hlido.eu/reviews/gemini/) | Gemini | AI Agent | 53 | — |
| [`granola`](https://hlido.eu/reviews/granola/) | Granola | AI Agent | 65 | — |
| [`github-copilot`](https://hlido.eu/reviews/github-copilot/) | GitHub Copilot | AI Agent | 90 | — |
| [`glean`](https://hlido.eu/reviews/glean/) | Glean | AI Agent | 65 | — |
| [`helicone`](https://hlido.eu/reviews/helicone/) | Helicone | AI Agent | 90 | — |
| [`groq`](https://hlido.eu/reviews/groq/) | Groq | AI Agent | 78 | — |
| [`heygen`](https://hlido.eu/reviews/heygen/) | HeyGen | AI Agent | 78 | — |
| [`humanloop`](https://hlido.eu/reviews/humanloop/) | Humanloop | AI Agent | 40 | — |
| [`ideogram`](https://hlido.eu/reviews/ideogram/) | Ideogram | AI Agent | 40 | — |
| [`inflection-pi`](https://hlido.eu/reviews/inflection-pi/) | Inflection Pi | AI Agent | 53 | — |
| [`jasper`](https://hlido.eu/reviews/jasper/) | Jasper | AI Agent | 90 | — |
| [`krea`](https://hlido.eu/reviews/krea/) | Krea | AI Agent | 78 | — |
| [`langchain`](https://hlido.eu/reviews/langchain/) | LangChain | AI Agent | 90 | — |
| [`langsmith`](https://hlido.eu/reviews/langsmith/) | LangSmith | AI Agent | 53 | — |
| [`leonardo-ai`](https://hlido.eu/reviews/leonardo-ai/) | Leonardo AI | AI Agent | 78 | — |
| [`llamaindex`](https://hlido.eu/reviews/llamaindex/) | LlamaIndex | AI Agent | 78 | — |
| [`lovable`](https://hlido.eu/reviews/lovable/) | Lovable | AI Agent | 78 | — |
| [`mem-ai`](https://hlido.eu/reviews/mem-ai/) | Mem | AI Agent | 90 | — |
| [`microsoft-copilot`](https://hlido.eu/reviews/microsoft-copilot/) | Microsoft Copilot | AI Agent | 53 | — |
| [`midjourney`](https://hlido.eu/reviews/midjourney/) | Midjourney | AI Agent | 53 | — |
| [`mendable`](https://hlido.eu/reviews/mendable/) | Mendable | AI Agent | 78 | — |
| [`mistral-le-chat`](https://hlido.eu/reviews/mistral-le-chat/) | Mistral Le Chat | AI Agent | 40 | — |
| [`notion-ai`](https://hlido.eu/reviews/notion-ai/) | Notion AI | AI Agent | 65 | — |
| [`murf-ai`](https://hlido.eu/reviews/murf-ai/) | Murf AI | AI Agent | 65 | — |
| [`nyx`](https://hlido.eu/reviews/nyx/) | Nyx | AI Agent | 40 | — |
| [`openai-operator`](https://hlido.eu/reviews/openai-operator/) | OpenAI Operator | AI Agent | 65 | — |
| [`openrouter`](https://hlido.eu/reviews/openrouter/) | OpenRouter | AI Agent | 78 | — |
| [`phind`](https://hlido.eu/reviews/phind/) | Phind | AI Agent | 40 | — |
| [`pika`](https://hlido.eu/reviews/pika/) | Pika | AI Agent | 40 | — |
| [`otter-ai`](https://hlido.eu/reviews/otter-ai/) | Otter.ai | AI Agent | 90 | — |
| [`pydantic-ai`](https://hlido.eu/reviews/pydantic-ai/) | Pydantic AI | AI Agent | 78 | — |
| [`reflect-app`](https://hlido.eu/reviews/reflect-app/) | Reflect | AI Agent | 65 | — |
| [`read-ai`](https://hlido.eu/reviews/read-ai/) | Read AI | AI Agent | 78 | — |
| [`resemble-ai`](https://hlido.eu/reviews/resemble-ai/) | Resemble AI | AI Agent | 78 | — |
| [`replit-agent`](https://hlido.eu/reviews/replit-agent/) | Replit Agent | AI Agent | 90 | — |
| [`relevance-ai`](https://hlido.eu/reviews/relevance-ai/) | Relevance AI | AI Agent | 90 | — |
| [`runway`](https://hlido.eu/reviews/runway/) | Runway | AI Agent | 78 | — |
| [`sonarly`](https://hlido.eu/reviews/sonarly/) | Sonarly | AI Agent | 53 | — |
| [`retool-agents`](https://hlido.eu/reviews/retool-agents/) | Retool Agents | AI Agent | 78 | — |
| [`stability-ai`](https://hlido.eu/reviews/stability-ai/) | Stability AI | AI Agent | 90 | — |
| [`sourcegraph-cody`](https://hlido.eu/reviews/sourcegraph-cody/) | Sourcegraph Cody | AI Agent | 90 | — |
| [`stack-ai`](https://hlido.eu/reviews/stack-ai/) | Stack AI | AI Agent | 78 | — |
| [`suno`](https://hlido.eu/reviews/suno/) | Suno | AI Agent | 53 | — |
| [`superhuman`](https://hlido.eu/reviews/superhuman/) | Superhuman | AI Agent | 78 | — |
| [`synthesia`](https://hlido.eu/reviews/synthesia/) | Synthesia | AI Agent | 90 | — |
| [`tabnine`](https://hlido.eu/reviews/tabnine/) | Tabnine | AI Agent | 90 | — |
| [`tana`](https://hlido.eu/reviews/tana/) | Tana | AI Agent | 65 | — |
| [`tavus`](https://hlido.eu/reviews/tavus/) | Tavus | AI Agent | 78 | — |
| [`v0`](https://hlido.eu/reviews/v0/) | v0 | AI Agent | 65 | — |
| [`together-ai`](https://hlido.eu/reviews/together-ai/) | Together AI | AI Agent | 65 | — |
| [`vercel-ai-sdk`](https://hlido.eu/reviews/vercel-ai-sdk/) | Vercel AI SDK | AI Agent | 78 | — |
| [`vellum-ai`](https://hlido.eu/reviews/vellum-ai/) | Vellum | AI Agent | 78 | — |
| [`you-com`](https://hlido.eu/reviews/you-com/) | You.com | AI Agent | 78 | — |
| [`writer-com`](https://hlido.eu/reviews/writer-com/) | Writer | AI Agent | 78 | — |
| [`zapier-central`](https://hlido.eu/reviews/zapier-central/) | Zapier Central | AI Agent | 90 | — |
| [`bland-ai`](https://hlido.eu/reviews/bland-ai/) | Bland AI | Voice | 78 | — |
| [`retell-ai`](https://hlido.eu/reviews/retell-ai/) | Retell AI | Voice | 90 | — |
| [`vapi-ai`](https://hlido.eu/reviews/vapi-ai/) | Vapi | Voice | 90 | — |
| [`deepgram`](https://hlido.eu/reviews/deepgram/) | Deepgram | Voice | 90 | — |
| [`assemblyai`](https://hlido.eu/reviews/assemblyai/) | AssemblyAI | Voice | 90 | — |
| [`hume-ai`](https://hlido.eu/reviews/hume-ai/) | Hume AI | Voice | 65 | — |

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