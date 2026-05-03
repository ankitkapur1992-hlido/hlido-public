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

## Reviewed agents (329)

| Slug | Name | Category | Laddoo | Tier |
|---|---|---|---|---|
| [`naoma-ai-demo-agent`](https://hlido.eu/reviews/naoma-ai-demo-agent/) | Naoma AI Demo Agent | Sales | 80 | — |
| [`workbeaver`](https://hlido.eu/reviews/workbeaver/) | WorkBeaver | Productivity | 63.4 | — |
| [`gumloop`](https://hlido.eu/reviews/gumloop/) | Gumloop | AI Workflow Builder | 80 | — |
| [`aider`](https://hlido.eu/reviews/aider/) | Aider | Coding | 90 | — |
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
| [`windsurf`](https://hlido.eu/reviews/windsurf/) | Windsurf | Coding | 65 | — |
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
| [`augment-code`](https://hlido.eu/reviews/augment-code/) | Augment Code (Intent) | Coding | 78 | — |
| [`cursor`](https://hlido.eu/reviews/cursor/) | Cursor | Coding | 78 | — |
| [`cto-new`](https://hlido.eu/reviews/cto-new/) | cto.new | AI Agent | 90 | — |
| [`orange-slice`](https://hlido.eu/reviews/orange-slice/) | Orange Slice | AI Agent | 90 | — |
| [`claimcheck`](https://hlido.eu/reviews/claimcheck/) | ClaimCheck | Coding | 65 | — |
| [`kaily`](https://hlido.eu/reviews/kaily/) | Kaily | AI Agent | 78 | — |
| [`magine`](https://hlido.eu/reviews/magine/) | Magine | AI Agent | 65 | — |
| [`blink-ai`](https://hlido.eu/reviews/blink-ai/) | Blink | AI Agent | 65 | — |
| [`cosyra-2`](https://hlido.eu/reviews/cosyra-2/) | Cosyra | AI Agent | 78 | — |
| [`catdoes-v4`](https://hlido.eu/reviews/catdoes-v4/) | CatDoes v4 | AI Agent | 65 | — |
| [`denovo`](https://hlido.eu/reviews/denovo/) | Denovo | AI Agent | 78 | — |
| [`athena-intel`](https://hlido.eu/reviews/athena-intel/) | Athena Intelligence | Workflow | 53 | — |
| [`anthropic-computer-use`](https://hlido.eu/reviews/anthropic-computer-use/) | Anthropic Computer Use | Browser | 40 | — |
| [`anyword`](https://hlido.eu/reviews/anyword/) | Anyword | Writing | 90 | — |
| [`axe`](https://hlido.eu/reviews/axe/) | Axe | AI Agent | 40 | — |
| [`bolt-new`](https://hlido.eu/reviews/bolt-new/) | Bolt.new | Coding | 65 | — |
| [`braintrust`](https://hlido.eu/reviews/braintrust/) | Braintrust | Agent Framework | 90 | — |
| [`cerebras`](https://hlido.eu/reviews/cerebras/) | Cerebras | Infra | 65 | — |
| [`cassidy-ai`](https://hlido.eu/reviews/cassidy-ai/) | Cassidy | Workflow | 78 | — |
| [`chatgpt`](https://hlido.eu/reviews/chatgpt/) | ChatGPT | Chat | 65 | — |
| [`character-ai`](https://hlido.eu/reviews/character-ai/) | Character.AI | Chat | 53 | — |
| [`chatwithads`](https://hlido.eu/reviews/chatwithads/) | ChatWithAds | AI Agent | 78 | — |
| [`claude-ai`](https://hlido.eu/reviews/claude-ai/) | Claude.ai | Chat | 53 | — |
| [`cline-bot`](https://hlido.eu/reviews/cline-bot/) | Cline | Coding | 78 | — |
| [`codeium`](https://hlido.eu/reviews/codeium/) | Codeium | Coding | 65 | — |
| [`continue-dev`](https://hlido.eu/reviews/continue-dev/) | Continue | Coding | 78 | — |
| [`cohere`](https://hlido.eu/reviews/cohere/) | Cohere | Chat | 78 | — |
| [`copy-ai`](https://hlido.eu/reviews/copy-ai/) | Copy.ai | Writing | 78 | — |
| [`crewai`](https://hlido.eu/reviews/crewai/) | CrewAI | Agent Framework | 90 | — |
| [`datagrout`](https://hlido.eu/reviews/datagrout/) | DataGrout | AI Agent | 40 | — |
| [`dust-tt`](https://hlido.eu/reviews/dust-tt/) | Dust | Workflow | 90 | — |
| [`descript`](https://hlido.eu/reviews/descript/) | Descript | Voice | 65 | — |
| [`elevenlabs`](https://hlido.eu/reviews/elevenlabs/) | ElevenLabs | Voice | 78 | — |
| [`flux-bfl`](https://hlido.eu/reviews/flux-bfl/) | FLUX (Black Forest Labs) | Image | 65 | — |
| [`flowith`](https://hlido.eu/reviews/flowith/) | Flowith | Workflow | 78 | — |
| [`fireworks-ai`](https://hlido.eu/reviews/fireworks-ai/) | Fireworks AI | Infra | 90 | — |
| [`gemini`](https://hlido.eu/reviews/gemini/) | Gemini | Chat | 53 | — |
| [`granola`](https://hlido.eu/reviews/granola/) | Granola | Productivity | 65 | — |
| [`github-copilot`](https://hlido.eu/reviews/github-copilot/) | GitHub Copilot | Coding | 90 | — |
| [`glean`](https://hlido.eu/reviews/glean/) | Glean | Research | 65 | — |
| [`helicone`](https://hlido.eu/reviews/helicone/) | Helicone | Agent Framework | 90 | — |
| [`groq`](https://hlido.eu/reviews/groq/) | Groq | Infra | 78 | — |
| [`heygen`](https://hlido.eu/reviews/heygen/) | HeyGen | Voice | 78 | — |
| [`humanloop`](https://hlido.eu/reviews/humanloop/) | Humanloop | Agent Framework | 40 | — |
| [`ideogram`](https://hlido.eu/reviews/ideogram/) | Ideogram | Image | 40 | — |
| [`inflection-pi`](https://hlido.eu/reviews/inflection-pi/) | Inflection Pi | Chat | 53 | — |
| [`jasper`](https://hlido.eu/reviews/jasper/) | Jasper | Writing | 90 | — |
| [`krea`](https://hlido.eu/reviews/krea/) | Krea | Image | 78 | — |
| [`langchain`](https://hlido.eu/reviews/langchain/) | LangChain | Agent Framework | 90 | — |
| [`langsmith`](https://hlido.eu/reviews/langsmith/) | LangSmith | Agent Framework | 53 | — |
| [`leonardo-ai`](https://hlido.eu/reviews/leonardo-ai/) | Leonardo AI | Image | 78 | — |
| [`llamaindex`](https://hlido.eu/reviews/llamaindex/) | LlamaIndex | Agent Framework | 78 | — |
| [`lovable`](https://hlido.eu/reviews/lovable/) | Lovable | Coding | 78 | — |
| [`mem-ai`](https://hlido.eu/reviews/mem-ai/) | Mem | Productivity | 90 | — |
| [`microsoft-copilot`](https://hlido.eu/reviews/microsoft-copilot/) | Microsoft Copilot | Chat | 53 | — |
| [`midjourney`](https://hlido.eu/reviews/midjourney/) | Midjourney | Image | 53 | — |
| [`mendable`](https://hlido.eu/reviews/mendable/) | Mendable | Research | 78 | — |
| [`mistral-le-chat`](https://hlido.eu/reviews/mistral-le-chat/) | Mistral Le Chat | Chat | 40 | — |
| [`notion-ai`](https://hlido.eu/reviews/notion-ai/) | Notion AI | Research | 65 | — |
| [`murf-ai`](https://hlido.eu/reviews/murf-ai/) | Murf AI | Voice | 65 | — |
| [`nyx`](https://hlido.eu/reviews/nyx/) | Nyx | AI Agent | 40 | — |
| [`openai-operator`](https://hlido.eu/reviews/openai-operator/) | OpenAI Operator | Browser | 65 | — |
| [`openrouter`](https://hlido.eu/reviews/openrouter/) | OpenRouter | Infra | 78 | — |
| [`phind`](https://hlido.eu/reviews/phind/) | Phind | Chat | 40 | — |
| [`pika`](https://hlido.eu/reviews/pika/) | Pika | Image | 40 | — |
| [`otter-ai`](https://hlido.eu/reviews/otter-ai/) | Otter.ai | Productivity | 90 | — |
| [`pydantic-ai`](https://hlido.eu/reviews/pydantic-ai/) | Pydantic AI | Agent Framework | 78 | — |
| [`reflect-app`](https://hlido.eu/reviews/reflect-app/) | Reflect | Productivity | 65 | — |
| [`read-ai`](https://hlido.eu/reviews/read-ai/) | Read AI | Productivity | 78 | — |
| [`resemble-ai`](https://hlido.eu/reviews/resemble-ai/) | Resemble AI | Voice | 78 | — |
| [`replit-agent`](https://hlido.eu/reviews/replit-agent/) | Replit Agent | Coding | 90 | — |
| [`relevance-ai`](https://hlido.eu/reviews/relevance-ai/) | Relevance AI | Workflow | 90 | — |
| [`runway`](https://hlido.eu/reviews/runway/) | Runway | Image | 78 | — |
| [`sonarly`](https://hlido.eu/reviews/sonarly/) | Sonarly | AI Agent | 53 | — |
| [`retool-agents`](https://hlido.eu/reviews/retool-agents/) | Retool Agents | Workflow | 78 | — |
| [`stability-ai`](https://hlido.eu/reviews/stability-ai/) | Stability AI | Image | 90 | — |
| [`sourcegraph-cody`](https://hlido.eu/reviews/sourcegraph-cody/) | Sourcegraph Cody | Coding | 90 | — |
| [`stack-ai`](https://hlido.eu/reviews/stack-ai/) | Stack AI | Workflow | 78 | — |
| [`suno`](https://hlido.eu/reviews/suno/) | Suno | Voice | 53 | — |
| [`superhuman`](https://hlido.eu/reviews/superhuman/) | Superhuman | Productivity | 78 | — |
| [`synthesia`](https://hlido.eu/reviews/synthesia/) | Synthesia | Voice | 90 | — |
| [`tabnine`](https://hlido.eu/reviews/tabnine/) | Tabnine | Coding | 90 | — |
| [`tana`](https://hlido.eu/reviews/tana/) | Tana | Productivity | 65 | — |
| [`tavus`](https://hlido.eu/reviews/tavus/) | Tavus | Voice | 78 | — |
| [`v0`](https://hlido.eu/reviews/v0/) | v0 | Coding | 65 | — |
| [`together-ai`](https://hlido.eu/reviews/together-ai/) | Together AI | Infra | 65 | — |
| [`vercel-ai-sdk`](https://hlido.eu/reviews/vercel-ai-sdk/) | Vercel AI SDK | Agent Framework | 78 | — |
| [`vellum-ai`](https://hlido.eu/reviews/vellum-ai/) | Vellum | Agent Framework | 78 | — |
| [`you-com`](https://hlido.eu/reviews/you-com/) | You.com | Chat | 78 | — |
| [`writer-com`](https://hlido.eu/reviews/writer-com/) | Writer | Writing | 78 | — |
| [`zapier-central`](https://hlido.eu/reviews/zapier-central/) | Zapier Central | Workflow | 90 | — |
| [`bland-ai`](https://hlido.eu/reviews/bland-ai/) | Bland AI | Voice | 78 | — |
| [`retell-ai`](https://hlido.eu/reviews/retell-ai/) | Retell AI | Voice | 90 | — |
| [`vapi-ai`](https://hlido.eu/reviews/vapi-ai/) | Vapi | Voice | 90 | — |
| [`deepgram`](https://hlido.eu/reviews/deepgram/) | Deepgram | Voice | 90 | — |
| [`assemblyai`](https://hlido.eu/reviews/assemblyai/) | AssemblyAI | Voice | 90 | — |
| [`hume-ai`](https://hlido.eu/reviews/hume-ai/) | Hume AI | Voice | 65 | — |
| [`daily-co`](https://hlido.eu/reviews/daily-co/) | Daily | Voice | 90 | — |
| [`livekit`](https://hlido.eu/reviews/livekit/) | LiveKit | Voice | 78 | — |
| [`speechmatics`](https://hlido.eu/reviews/speechmatics/) | Speechmatics | Voice | 78 | — |
| [`rev-ai`](https://hlido.eu/reviews/rev-ai/) | Rev AI | Voice | 78 | — |
| [`salesloft`](https://hlido.eu/reviews/salesloft/) | Salesloft | Sales | 78 | — |
| [`chorus-ai`](https://hlido.eu/reviews/chorus-ai/) | Chorus | Sales | 65 | — |
| [`outreach-io`](https://hlido.eu/reviews/outreach-io/) | Outreach | Sales | 65 | — |
| [`gong-io`](https://hlido.eu/reviews/gong-io/) | Gong | Sales | 78 | — |
| [`apollo-io`](https://hlido.eu/reviews/apollo-io/) | Apollo.io | Sales | 40 | — |
| [`clay-com`](https://hlido.eu/reviews/clay-com/) | Clay | Sales | 90 | — |
| [`regie-ai`](https://hlido.eu/reviews/regie-ai/) | Regie AI | Sales | 78 | — |
| [`instantly-ai`](https://hlido.eu/reviews/instantly-ai/) | Instantly | Sales | 90 | — |
| [`smartlead`](https://hlido.eu/reviews/smartlead/) | Smartlead | Sales | 78 | — |
| [`lavender-ai`](https://hlido.eu/reviews/lavender-ai/) | Lavender | Sales | 78 | — |
| [`kore-ai`](https://hlido.eu/reviews/kore-ai/) | Kore.ai | Customer Support | 65 | — |
| [`ada-cx`](https://hlido.eu/reviews/ada-cx/) | Ada | Customer Support | 78 | — |
| [`decagon`](https://hlido.eu/reviews/decagon/) | Decagon | Customer Support | 65 | — |
| [`ultimate-ai`](https://hlido.eu/reviews/ultimate-ai/) | Ultimate | Customer Support | 65 | — |
| [`intercom-fin`](https://hlido.eu/reviews/intercom-fin/) | Intercom Fin | Customer Support | 65 | — |
| [`forethought`](https://hlido.eu/reviews/forethought/) | Forethought | Customer Support | 90 | — |
| [`cresta`](https://hlido.eu/reviews/cresta/) | Cresta | Customer Support | 65 | — |
| [`sierra-ai`](https://hlido.eu/reviews/sierra-ai/) | Sierra | Customer Support | 53 | — |
| [`netomi`](https://hlido.eu/reviews/netomi/) | Netomi | Customer Support | 53 | — |
| [`cognigy`](https://hlido.eu/reviews/cognigy/) | Cognigy | Customer Support | 78 | — |
| [`devin-cognition`](https://hlido.eu/reviews/devin-cognition/) | Devin (Cognition) | Coding | 65 | — |
| [`openhands`](https://hlido.eu/reviews/openhands/) | OpenHands | Coding | 90 | — |
| [`sweep-ai`](https://hlido.eu/reviews/sweep-ai/) | Sweep | Coding | 90 | — |
| [`openinterpreter`](https://hlido.eu/reviews/openinterpreter/) | Open Interpreter | Coding | 78 | — |
| [`metagpt`](https://hlido.eu/reviews/metagpt/) | MetaGPT | Coding | 65 | — |
| [`gpt-engineer`](https://hlido.eu/reviews/gpt-engineer/) | GPT Engineer | Coding | 78 | — |
| [`agentgpt`](https://hlido.eu/reviews/agentgpt/) | AgentGPT | Coding | 53 | — |
| [`autogen-studio`](https://hlido.eu/reviews/autogen-studio/) | AutoGen Studio | Coding | 78 | — |
| [`smol-ai`](https://hlido.eu/reviews/smol-ai/) | Smol Developer | Coding | 40 | — |
| [`superagi`](https://hlido.eu/reviews/superagi/) | SuperAGI | Coding | 78 | — |
| [`plandex`](https://hlido.eu/reviews/plandex/) | Plandex | Coding | 65 | — |
| [`warp-ai`](https://hlido.eu/reviews/warp-ai/) | Warp AI | Coding | 78 | — |
| [`elicit`](https://hlido.eu/reviews/elicit/) | Elicit | Research | 65 | — |
| [`zed-ai`](https://hlido.eu/reviews/zed-ai/) | Zed AI | Coding | 90 | — |
| [`scite-ai`](https://hlido.eu/reviews/scite-ai/) | Scite | Research | 78 | — |
| [`consensus-app`](https://hlido.eu/reviews/consensus-app/) | Consensus | Research | 53 | — |
| [`scholarcy`](https://hlido.eu/reviews/scholarcy/) | Scholarcy | Research | 78 | — |
| [`exa-ai`](https://hlido.eu/reviews/exa-ai/) | Exa | Research | 90 | — |
| [`kagi`](https://hlido.eu/reviews/kagi/) | Kagi | Research | 78 | — |
| [`andi-search`](https://hlido.eu/reviews/andi-search/) | Andi Search | Research | 53 | — |
| [`komo-ai`](https://hlido.eu/reviews/komo-ai/) | Komo | Research | 53 | — |
| [`notebooklm`](https://hlido.eu/reviews/notebooklm/) | NotebookLM | Research | 65 | — |
| [`hebbia`](https://hlido.eu/reviews/hebbia/) | Hebbia | Research | 78 | — |
| [`casetext`](https://hlido.eu/reviews/casetext/) | Casetext | Legal | 40 | — |
| [`ironclad`](https://hlido.eu/reviews/ironclad/) | Ironclad | Legal | 78 | — |
| [`harvey-ai`](https://hlido.eu/reviews/harvey-ai/) | Harvey | Legal | 53 | — |
| [`evisort`](https://hlido.eu/reviews/evisort/) | Evisort | Legal | 53 | — |
| [`spellbook-legal`](https://hlido.eu/reviews/spellbook-legal/) | Spellbook | Legal | 90 | — |
| [`luminance`](https://hlido.eu/reviews/luminance/) | Luminance | Legal | 65 | — |
| [`hippocratic-ai`](https://hlido.eu/reviews/hippocratic-ai/) | Hippocratic AI | Healthcare | 53 | — |
| [`suki-ai`](https://hlido.eu/reviews/suki-ai/) | Suki | Healthcare | 90 | — |
| [`glass-health`](https://hlido.eu/reviews/glass-health/) | Glass Health | Healthcare | 78 | — |
| [`abridge`](https://hlido.eu/reviews/abridge/) | Abridge | Healthcare | 53 | — |
| [`nabla`](https://hlido.eu/reviews/nabla/) | Nabla | Healthcare | 78 | — |
| [`mutiny`](https://hlido.eu/reviews/mutiny/) | Mutiny | Marketing | 65 | — |
| [`persado`](https://hlido.eu/reviews/persado/) | Persado | Marketing | 53 | — |
| [`optimizely-opal`](https://hlido.eu/reviews/optimizely-opal/) | Optimizely Opal | Marketing | 90 | — |
| [`smartwriter`](https://hlido.eu/reviews/smartwriter/) | Smartwriter | Marketing | 65 | — |
| [`rytr`](https://hlido.eu/reviews/rytr/) | Rytr | Marketing | 78 | — |
| [`hyperwrite`](https://hlido.eu/reviews/hyperwrite/) | HyperWrite | Marketing | 78 | — |
| [`simplified`](https://hlido.eu/reviews/simplified/) | Simplified | Marketing | 78 | — |
| [`khanmigo`](https://hlido.eu/reviews/khanmigo/) | Khanmigo | Education | 53 | — |
| [`quizizz`](https://hlido.eu/reviews/quizizz/) | Quizizz AI | Education | 65 | — |
| [`magic-school`](https://hlido.eu/reviews/magic-school/) | MagicSchool | Education | 78 | — |
| [`brisk-teaching`](https://hlido.eu/reviews/brisk-teaching/) | Brisk Teaching | Education | 78 | — |
| [`galileo-ai-design`](https://hlido.eu/reviews/galileo-ai-design/) | Galileo (Design) | Design | 40 | — |
| [`uizard`](https://hlido.eu/reviews/uizard/) | Uizard | Design | 78 | — |
| [`framer-ai`](https://hlido.eu/reviews/framer-ai/) | Framer AI | Design | 65 | — |
| [`browser-base`](https://hlido.eu/reviews/browser-base/) | Browserbase | Browser | 78 | — |
| [`recraft-ai`](https://hlido.eu/reviews/recraft-ai/) | Recraft | Design | 78 | — |
| [`figma-make`](https://hlido.eu/reviews/figma-make/) | Figma Make | Design | 65 | — |
| [`anchor-browser`](https://hlido.eu/reviews/anchor-browser/) | Anchor Browser | Browser | 78 | — |
| [`simular`](https://hlido.eu/reviews/simular/) | Simular | Browser | 78 | — |
| [`scrapybara`](https://hlido.eu/reviews/scrapybara/) | Scrapybara | Browser | 78 | — |
| [`multion`](https://hlido.eu/reviews/multion/) | MultiOn | Browser | 53 | — |
| [`browser-use`](https://hlido.eu/reviews/browser-use/) | Browser Use | Browser | 78 | — |
| [`pinecone`](https://hlido.eu/reviews/pinecone/) | Pinecone | Data | 90 | — |
| [`weaviate`](https://hlido.eu/reviews/weaviate/) | Weaviate | Data | 90 | — |
| [`voyage-ai`](https://hlido.eu/reviews/voyage-ai/) | Voyage AI | Data | 65 | — |
| [`jina-ai`](https://hlido.eu/reviews/jina-ai/) | Jina AI | Data | 65 | — |
| [`qdrant`](https://hlido.eu/reviews/qdrant/) | Qdrant | Data | 90 | — |
| [`hex-tech`](https://hlido.eu/reviews/hex-tech/) | Hex | Data | 78 | — |
| [`julius-ai`](https://hlido.eu/reviews/julius-ai/) | Julius | Data | 78 | — |
| [`n8n`](https://hlido.eu/reviews/n8n/) | n8n | Workflow | 90 | — |
| [`make-com`](https://hlido.eu/reviews/make-com/) | Make | Workflow | 90 | — |
| [`activepieces`](https://hlido.eu/reviews/activepieces/) | Activepieces | Workflow | 90 | — |
| [`zapier`](https://hlido.eu/reviews/zapier/) | Zapier | Workflow | 90 | — |
| [`integrately`](https://hlido.eu/reviews/integrately/) | Integrately | Workflow | 90 | — |
| [`langflow`](https://hlido.eu/reviews/langflow/) | Langflow | Workflow | 78 | — |
| [`flowiseai`](https://hlido.eu/reviews/flowiseai/) | Flowise | Workflow | 78 | — |
| [`pipedream`](https://hlido.eu/reviews/pipedream/) | Pipedream | Workflow | 90 | — |
| [`magic-dev`](https://hlido.eu/reviews/magic-dev/) | Magic | Coding | 53 | — |
| [`dify-ai`](https://hlido.eu/reviews/dify-ai/) | Dify | Workflow | 78 | — |
| [`poolside-ai`](https://hlido.eu/reviews/poolside-ai/) | Poolside | Coding | 65 | — |
| [`contextual-ai`](https://hlido.eu/reviews/contextual-ai/) | Contextual AI | Research | 78 | — |
| [`phoenix-arize`](https://hlido.eu/reviews/phoenix-arize/) | Phoenix (Arize) | Eval | 90 | — |
| [`langfuse`](https://hlido.eu/reviews/langfuse/) | Langfuse | Eval | 90 | — |
| [`traceloop`](https://hlido.eu/reviews/traceloop/) | Traceloop | Eval | 90 | — |
| [`promptlayer`](https://hlido.eu/reviews/promptlayer/) | PromptLayer | Eval | 65 | — |
| [`ragas`](https://hlido.eu/reviews/ragas/) | Ragas | Eval | 78 | — |
| [`trulens`](https://hlido.eu/reviews/trulens/) | TruLens | Eval | 65 | — |
| [`portkey-ai`](https://hlido.eu/reviews/portkey-ai/) | Portkey | Eval | 90 | — |
| [`inkeep`](https://hlido.eu/reviews/inkeep/) | Inkeep | Customer Support | 78 | — |
| [`kapa-ai`](https://hlido.eu/reviews/kapa-ai/) | Kapa AI | Customer Support | 90 | — |
| [`guru-ai`](https://hlido.eu/reviews/guru-ai/) | Guru | Productivity | 78 | — |
| [`self-operating-computer`](https://hlido.eu/reviews/self-operating-computer/) | Self-Operating Computer | Computer | 90 | — |
| [`skyvern-ai`](https://hlido.eu/reviews/skyvern-ai/) | Skyvern | Browser | 65 | — |
| [`fathom-video`](https://hlido.eu/reviews/fathom-video/) | Fathom | Productivity | 65 | — |
| [`fellow-app`](https://hlido.eu/reviews/fellow-app/) | Fellow | Productivity | 78 | — |
| [`clay-relationship`](https://hlido.eu/reviews/clay-relationship/) | Clay (relationships) | Productivity | 65 | — |
| [`spinach-ai`](https://hlido.eu/reviews/spinach-ai/) | Spinach | Productivity | 78 | — |
| [`anyscale`](https://hlido.eu/reviews/anyscale/) | Anyscale | Infra | 90 | — |
| [`baseten`](https://hlido.eu/reviews/baseten/) | Baseten | Infra | 78 | — |
| [`modal-com`](https://hlido.eu/reviews/modal-com/) | Modal | Infra | 90 | — |
| [`ollama`](https://hlido.eu/reviews/ollama/) | Ollama | Infra | 90 | — |
| [`replicate`](https://hlido.eu/reviews/replicate/) | Replicate | Infra | 78 | — |
| [`lmstudio`](https://hlido.eu/reviews/lmstudio/) | LM Studio | Infra | 65 | — |
| [`deepseek-chat`](https://hlido.eu/reviews/deepseek-chat/) | DeepSeek | Chat | 53 | — |
| [`xai-grok`](https://hlido.eu/reviews/xai-grok/) | Grok (xAI) | Chat | 65 | — |
| [`hugging-face`](https://hlido.eu/reviews/hugging-face/) | HuggingFace | Infra | 78 | — |
| [`qwen-chat`](https://hlido.eu/reviews/qwen-chat/) | Qwen Chat | Chat | 40 | — |
| [`kimi-moonshot`](https://hlido.eu/reviews/kimi-moonshot/) | Kimi (Moonshot) | Chat | 53 | — |
| [`replika`](https://hlido.eu/reviews/replika/) | Replika | Companion | 53 | — |
| [`yi-01ai`](https://hlido.eu/reviews/yi-01ai/) | Yi (01.AI) | Chat | 53 | — |
| [`scenario-gg`](https://hlido.eu/reviews/scenario-gg/) | Scenario | Image | 65 | — |
| [`playground-ai`](https://hlido.eu/reviews/playground-ai/) | Playground AI | Image | 78 | — |
| [`nightcafe`](https://hlido.eu/reviews/nightcafe/) | NightCafe | Image | 53 | — |
| [`luma-genie`](https://hlido.eu/reviews/luma-genie/) | Luma Genie | 3D | 65 | — |
| [`meshy-ai`](https://hlido.eu/reviews/meshy-ai/) | Meshy | 3D | 90 | — |
| [`clickup-ai`](https://hlido.eu/reviews/clickup-ai/) | ClickUp AI | Productivity | 78 | — |
| [`monday-ai`](https://hlido.eu/reviews/monday-ai/) | Monday AI | Productivity | 53 | — |
| [`smartsheet-ai`](https://hlido.eu/reviews/smartsheet-ai/) | Smartsheet AI | Productivity | 90 | — |
| [`openai-realtime`](https://hlido.eu/reviews/openai-realtime/) | OpenAI Realtime | API | 90 | — |
| [`perplexity-api`](https://hlido.eu/reviews/perplexity-api/) | Perplexity API | API | 90 | — |
| [`tavily-api`](https://hlido.eu/reviews/tavily-api/) | Tavily | API | 78 | — |
| [`airtable-ai`](https://hlido.eu/reviews/airtable-ai/) | Airtable AI | Productivity | 90 | — |
| [`dia-browser`](https://hlido.eu/reviews/dia-browser/) | Dia (The Browser Company) | Browser | 53 | — |
| [`arc-browser`](https://hlido.eu/reviews/arc-browser/) | Arc Browser | Browser | 78 | — |
| [`aria-opera`](https://hlido.eu/reviews/aria-opera/) | Aria (Opera) | Browser | 65 | — |
| [`serpapi`](https://hlido.eu/reviews/serpapi/) | SerpAPI | API | 78 | — |
| [`brave-leo`](https://hlido.eu/reviews/brave-leo/) | Brave Leo | Browser | 78 | — |
| [`kensho`](https://hlido.eu/reviews/kensho/) | Kensho | Finance | 53 | — |
| [`ravenpack`](https://hlido.eu/reviews/ravenpack/) | RavenPack | Finance | 65 | — |
| [`alphasense`](https://hlido.eu/reviews/alphasense/) | AlphaSense | Finance | 90 | — |
| [`paradigm-ai`](https://hlido.eu/reviews/paradigm-ai/) | Paradigm | Productivity | 78 | — |
| [`lutra`](https://hlido.eu/reviews/lutra/) | Lutra | Workflow | 78 | — |
| [`you-com-search`](https://hlido.eu/reviews/you-com-search/) | You.com Search | Search | 40 | — |
| [`perplexity-shopping`](https://hlido.eu/reviews/perplexity-shopping/) | Perplexity Shopping | Shopping | 40 | — |
| [`elastic-quote`](https://hlido.eu/reviews/elastic-quote/) | Elastic Quote | Search | 78 | — |
| [`seek-ai`](https://hlido.eu/reviews/seek-ai/) | Seek AI | Data | 53 | — |
| [`rabbit-r1`](https://hlido.eu/reviews/rabbit-r1/) | Rabbit R1 | AI Agent | 65 | — |
| [`humane-ai-pin`](https://hlido.eu/reviews/humane-ai-pin/) | Humane AI Pin | AI Agent | 53 | — |
| [`chai-research`](https://hlido.eu/reviews/chai-research/) | Chai | Companion | 53 | — |
| [`janitor-ai`](https://hlido.eu/reviews/janitor-ai/) | Janitor AI | Companion | 53 | — |
| [`snorkel-ai`](https://hlido.eu/reviews/snorkel-ai/) | Snorkel AI | Data | 65 | — |
| [`botpress`](https://hlido.eu/reviews/botpress/) | Botpress | Customer Support | 90 | — |
| [`rasa`](https://hlido.eu/reviews/rasa/) | Rasa | Customer Support | 78 | — |
| [`voiceflow`](https://hlido.eu/reviews/voiceflow/) | Voiceflow | Voice | 90 | — |
| [`automa-app`](https://hlido.eu/reviews/automa-app/) | Automa | Browser | 78 | — |
| [`nebius`](https://hlido.eu/reviews/nebius/) | Nebius | Infra | 40 | — |
| [`openrouter-models`](https://hlido.eu/reviews/openrouter-models/) | OpenRouter Models | API | 78 | — |
| [`lambda-labs`](https://hlido.eu/reviews/lambda-labs/) | Lambda Labs | Infra | 78 | — |
| [`recogni`](https://hlido.eu/reviews/recogni/) | Recogni | Infra | 53 | — |
| [`deepinfra`](https://hlido.eu/reviews/deepinfra/) | DeepInfra | Infra | 78 | — |
| [`haystack-deepset`](https://hlido.eu/reviews/haystack-deepset/) | Haystack | Workflow | 78 | — |
| [`agno`](https://hlido.eu/reviews/agno/) | Agno | Workflow | 78 | — |
| [`griptape`](https://hlido.eu/reviews/griptape/) | Griptape | Workflow | 78 | — |
| [`livekit-agents`](https://hlido.eu/reviews/livekit-agents/) | LiveKit Agents | Voice | 78 | — |
| [`swiggy-ai`](https://hlido.eu/reviews/swiggy-ai/) | Swiggy AI | AI Agent | 53 | — |
| [`zebrium`](https://hlido.eu/reviews/zebrium/) | Zebrium | Eval | 65 | — |
| [`openai-agent-sdk`](https://hlido.eu/reviews/openai-agent-sdk/) | OpenAI Agent SDK | Workflow | 65 | — |
| [`kling-ai`](https://hlido.eu/reviews/kling-ai/) | Kling | Image | 53 | — |
| [`hailuo-ai`](https://hlido.eu/reviews/hailuo-ai/) | Hailuo AI | Image | 53 | — |
| [`vidu-ai`](https://hlido.eu/reviews/vidu-ai/) | Vidu | Image | 65 | — |
| [`pixverse`](https://hlido.eu/reviews/pixverse/) | Pixverse | Image | 65 | — |
| [`playphone-ai`](https://hlido.eu/reviews/playphone-ai/) | PlayPhone AI | Voice | 40 | — |
| [`camb-ai`](https://hlido.eu/reviews/camb-ai/) | Camb AI | Voice | 78 | — |
| [`warmly-ai`](https://hlido.eu/reviews/warmly-ai/) | Warmly | Sales | 78 | — |
| [`hubspot-clearbit`](https://hlido.eu/reviews/hubspot-clearbit/) | HubSpot Clearbit | Sales | 65 | — |
| [`clari`](https://hlido.eu/reviews/clari/) | Clari | Sales | 78 | — |
| [`opal-ai`](https://hlido.eu/reviews/opal-ai/) | Opal | Productivity | 40 | — |

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