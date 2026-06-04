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

## Reviewed agents (624)

| Slug | Name | Category | Laddoo | Tier |
|---|---|---|---|---|
| [`klariqo`](https://hlido.eu/reviews/klariqo/) | Klariqo | Voice | 58 | FADING |
| [`baton`](https://hlido.eu/reviews/baton/) | Baton | Frameworks & Eval | 64 | FADING |
| [`openowl`](https://hlido.eu/reviews/openowl/) | OpenOwl | Workflow & Automation | 50 | FADING |
| [`naoma-ai-demo-agent`](https://hlido.eu/reviews/naoma-ai-demo-agent/) | Naoma AI Demo Agent | Customer Experience | 80 | — |
| [`holo`](https://hlido.eu/reviews/holo/) | Holo | Marketing & Content | 50 | FADING |
| [`workbeaver`](https://hlido.eu/reviews/workbeaver/) | WorkBeaver | Productivity | 63.4 | — |
| [`gumloop`](https://hlido.eu/reviews/gumloop/) | Gumloop | Workflow & Automation | 80 | — |
| [`aider`](https://hlido.eu/reviews/aider/) | Aider | Coding | 90 | — |
| [`jared-so`](https://hlido.eu/reviews/jared-so/) | jared-so | Productivity | 40 | — |
| [`raccoon-ai`](https://hlido.eu/reviews/raccoon-ai/) | raccoon-ai | Productivity | 70 | — |
| [`needle-2-0`](https://hlido.eu/reviews/needle-2-0/) | needle-2-0 | Productivity | 80 | — |
| [`zooclaw`](https://hlido.eu/reviews/zooclaw/) | zooclaw | Productivity | 40 | — |
| [`agentpulse-by-rectify`](https://hlido.eu/reviews/agentpulse-by-rectify/) | agentpulse-by-rectify | Workflow & Automation | 40 | — |
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
| [`lmarena`](https://hlido.eu/reviews/lmarena/) | Chatbot Arena (LMArena) | Frameworks & Eval | 40 | — |
| [`perplexity`](https://hlido.eu/reviews/perplexity/) | Perplexity | Research | 53 | — |
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
| [`athena-intel`](https://hlido.eu/reviews/athena-intel/) | Athena Intelligence | Workflow & Automation | 53 | — |
| [`anthropic-computer-use`](https://hlido.eu/reviews/anthropic-computer-use/) | Anthropic Computer Use | Infrastructure | 40 | — |
| [`anyword`](https://hlido.eu/reviews/anyword/) | Anyword | Marketing & Content | 90 | — |
| [`axe`](https://hlido.eu/reviews/axe/) | Axe | AI Agent | 40 | — |
| [`bolt-new`](https://hlido.eu/reviews/bolt-new/) | Bolt.new | Coding | 65 | — |
| [`braintrust`](https://hlido.eu/reviews/braintrust/) | Braintrust | Frameworks & Eval | 90 | — |
| [`cerebras`](https://hlido.eu/reviews/cerebras/) | Cerebras | Infrastructure | 65 | — |
| [`cassidy-ai`](https://hlido.eu/reviews/cassidy-ai/) | Cassidy | Workflow & Automation | 78 | — |
| [`chatgpt`](https://hlido.eu/reviews/chatgpt/) | ChatGPT | Chat & Companion | 65 | — |
| [`character-ai`](https://hlido.eu/reviews/character-ai/) | Character.AI | Chat & Companion | 53 | — |
| [`chatwithads`](https://hlido.eu/reviews/chatwithads/) | ChatWithAds | AI Agent | 78 | — |
| [`claude-ai`](https://hlido.eu/reviews/claude-ai/) | Claude.ai | Chat & Companion | 53 | — |
| [`cline-bot`](https://hlido.eu/reviews/cline-bot/) | Cline | Coding | 78 | — |
| [`codeium`](https://hlido.eu/reviews/codeium/) | Codeium | Coding | 65 | — |
| [`continue-dev`](https://hlido.eu/reviews/continue-dev/) | Continue | Coding | 78 | — |
| [`cohere`](https://hlido.eu/reviews/cohere/) | Cohere | Chat & Companion | 78 | — |
| [`copy-ai`](https://hlido.eu/reviews/copy-ai/) | Copy.ai | Marketing & Content | 78 | — |
| [`crewai`](https://hlido.eu/reviews/crewai/) | CrewAI | Frameworks & Eval | 90 | — |
| [`datagrout`](https://hlido.eu/reviews/datagrout/) | DataGrout | AI Agent | 40 | — |
| [`dust-tt`](https://hlido.eu/reviews/dust-tt/) | Dust | Workflow & Automation | 90 | — |
| [`descript`](https://hlido.eu/reviews/descript/) | Descript | Voice | 65 | — |
| [`elevenlabs`](https://hlido.eu/reviews/elevenlabs/) | ElevenLabs | Voice | 78 | — |
| [`flux-bfl`](https://hlido.eu/reviews/flux-bfl/) | FLUX (Black Forest Labs) | Image & Design | 65 | — |
| [`flowith`](https://hlido.eu/reviews/flowith/) | Flowith | Workflow & Automation | 78 | — |
| [`fireworks-ai`](https://hlido.eu/reviews/fireworks-ai/) | Fireworks AI | Infrastructure | 90 | — |
| [`gemini`](https://hlido.eu/reviews/gemini/) | Gemini | Chat & Companion | 53 | — |
| [`granola`](https://hlido.eu/reviews/granola/) | Granola | Productivity | 65 | — |
| [`github-copilot`](https://hlido.eu/reviews/github-copilot/) | GitHub Copilot | Coding | 90 | — |
| [`glean`](https://hlido.eu/reviews/glean/) | Glean | Research | 65 | — |
| [`helicone`](https://hlido.eu/reviews/helicone/) | Helicone | Frameworks & Eval | 90 | — |
| [`groq`](https://hlido.eu/reviews/groq/) | Groq | Infrastructure | 78 | — |
| [`heygen`](https://hlido.eu/reviews/heygen/) | HeyGen | Voice | 78 | — |
| [`humanloop`](https://hlido.eu/reviews/humanloop/) | Humanloop | Frameworks & Eval | 40 | — |
| [`ideogram`](https://hlido.eu/reviews/ideogram/) | Ideogram | Image & Design | 40 | — |
| [`inflection-pi`](https://hlido.eu/reviews/inflection-pi/) | Inflection Pi | Chat & Companion | 53 | — |
| [`jasper`](https://hlido.eu/reviews/jasper/) | Jasper | Marketing & Content | 90 | — |
| [`krea`](https://hlido.eu/reviews/krea/) | Krea | Image & Design | 78 | — |
| [`langchain`](https://hlido.eu/reviews/langchain/) | LangChain | Frameworks & Eval | 90 | — |
| [`langsmith`](https://hlido.eu/reviews/langsmith/) | LangSmith | Frameworks & Eval | 53 | — |
| [`leonardo-ai`](https://hlido.eu/reviews/leonardo-ai/) | Leonardo AI | Image & Design | 78 | — |
| [`llamaindex`](https://hlido.eu/reviews/llamaindex/) | LlamaIndex | Frameworks & Eval | 78 | — |
| [`lovable`](https://hlido.eu/reviews/lovable/) | Lovable | Coding | 78 | — |
| [`mem-ai`](https://hlido.eu/reviews/mem-ai/) | Mem | Productivity | 90 | — |
| [`microsoft-copilot`](https://hlido.eu/reviews/microsoft-copilot/) | Microsoft Copilot | Chat & Companion | 53 | — |
| [`midjourney`](https://hlido.eu/reviews/midjourney/) | Midjourney | Image & Design | 53 | — |
| [`mendable`](https://hlido.eu/reviews/mendable/) | Mendable | Research | 78 | — |
| [`mistral-le-chat`](https://hlido.eu/reviews/mistral-le-chat/) | Mistral Le Chat | Chat & Companion | 40 | — |
| [`notion-ai`](https://hlido.eu/reviews/notion-ai/) | Notion AI | Research | 65 | — |
| [`murf-ai`](https://hlido.eu/reviews/murf-ai/) | Murf AI | Voice | 65 | — |
| [`nyx`](https://hlido.eu/reviews/nyx/) | Nyx | AI Agent | 40 | — |
| [`openai-operator`](https://hlido.eu/reviews/openai-operator/) | OpenAI Operator | Infrastructure | 65 | — |
| [`openrouter`](https://hlido.eu/reviews/openrouter/) | OpenRouter | Infrastructure | 78 | — |
| [`phind`](https://hlido.eu/reviews/phind/) | Phind | Chat & Companion | 40 | — |
| [`pika`](https://hlido.eu/reviews/pika/) | Pika | Image & Design | 40 | — |
| [`otter-ai`](https://hlido.eu/reviews/otter-ai/) | Otter.ai | Productivity | 90 | — |
| [`pydantic-ai`](https://hlido.eu/reviews/pydantic-ai/) | Pydantic AI | Frameworks & Eval | 78 | — |
| [`reflect-app`](https://hlido.eu/reviews/reflect-app/) | Reflect | Productivity | 65 | — |
| [`read-ai`](https://hlido.eu/reviews/read-ai/) | Read AI | Productivity | 78 | — |
| [`resemble-ai`](https://hlido.eu/reviews/resemble-ai/) | Resemble AI | Voice | 78 | — |
| [`replit-agent`](https://hlido.eu/reviews/replit-agent/) | Replit Agent | Coding | 90 | — |
| [`relevance-ai`](https://hlido.eu/reviews/relevance-ai/) | Relevance AI | Workflow & Automation | 90 | — |
| [`runway`](https://hlido.eu/reviews/runway/) | Runway | Image & Design | 78 | — |
| [`sonarly`](https://hlido.eu/reviews/sonarly/) | Sonarly | AI Agent | 53 | — |
| [`retool-agents`](https://hlido.eu/reviews/retool-agents/) | Retool Agents | Workflow & Automation | 78 | — |
| [`stability-ai`](https://hlido.eu/reviews/stability-ai/) | Stability AI | Image & Design | 90 | — |
| [`sourcegraph-cody`](https://hlido.eu/reviews/sourcegraph-cody/) | Sourcegraph Cody | Coding | 90 | — |
| [`stack-ai`](https://hlido.eu/reviews/stack-ai/) | Stack AI | Workflow & Automation | 78 | — |
| [`suno`](https://hlido.eu/reviews/suno/) | Suno | Voice | 53 | — |
| [`superhuman`](https://hlido.eu/reviews/superhuman/) | Superhuman | Productivity | 78 | — |
| [`synthesia`](https://hlido.eu/reviews/synthesia/) | Synthesia | Voice | 90 | — |
| [`tabnine`](https://hlido.eu/reviews/tabnine/) | Tabnine | Coding | 90 | — |
| [`tana`](https://hlido.eu/reviews/tana/) | Tana | Productivity | 65 | — |
| [`tavus`](https://hlido.eu/reviews/tavus/) | Tavus | Voice | 78 | — |
| [`v0`](https://hlido.eu/reviews/v0/) | v0 | Coding | 65 | — |
| [`together-ai`](https://hlido.eu/reviews/together-ai/) | Together AI | Infrastructure | 65 | — |
| [`vercel-ai-sdk`](https://hlido.eu/reviews/vercel-ai-sdk/) | Vercel AI SDK | Frameworks & Eval | 78 | — |
| [`vellum-ai`](https://hlido.eu/reviews/vellum-ai/) | Vellum | Frameworks & Eval | 78 | — |
| [`you-com`](https://hlido.eu/reviews/you-com/) | You.com | Chat & Companion | 78 | — |
| [`writer-com`](https://hlido.eu/reviews/writer-com/) | Writer | Marketing & Content | 78 | — |
| [`zapier-central`](https://hlido.eu/reviews/zapier-central/) | Zapier Central | Workflow & Automation | 90 | — |
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
| [`salesloft`](https://hlido.eu/reviews/salesloft/) | Salesloft | Customer Experience | 78 | — |
| [`chorus-ai`](https://hlido.eu/reviews/chorus-ai/) | Chorus | Customer Experience | 65 | — |
| [`outreach-io`](https://hlido.eu/reviews/outreach-io/) | Outreach | Customer Experience | 65 | — |
| [`gong-io`](https://hlido.eu/reviews/gong-io/) | Gong | Customer Experience | 78 | — |
| [`apollo-io`](https://hlido.eu/reviews/apollo-io/) | Apollo.io | Customer Experience | 40 | — |
| [`clay-com`](https://hlido.eu/reviews/clay-com/) | Clay | Customer Experience | 90 | — |
| [`regie-ai`](https://hlido.eu/reviews/regie-ai/) | Regie AI | Customer Experience | 78 | — |
| [`instantly-ai`](https://hlido.eu/reviews/instantly-ai/) | Instantly | Customer Experience | 90 | — |
| [`smartlead`](https://hlido.eu/reviews/smartlead/) | Smartlead | Customer Experience | 78 | — |
| [`lavender-ai`](https://hlido.eu/reviews/lavender-ai/) | Lavender | Customer Experience | 78 | — |
| [`kore-ai`](https://hlido.eu/reviews/kore-ai/) | Kore.ai | Customer Experience | 65 | — |
| [`ada-cx`](https://hlido.eu/reviews/ada-cx/) | Ada | Customer Experience | 78 | — |
| [`decagon`](https://hlido.eu/reviews/decagon/) | Decagon | Customer Experience | 65 | — |
| [`ultimate-ai`](https://hlido.eu/reviews/ultimate-ai/) | Ultimate | Customer Experience | 65 | — |
| [`intercom-fin`](https://hlido.eu/reviews/intercom-fin/) | Intercom Fin | Customer Experience | 65 | — |
| [`forethought`](https://hlido.eu/reviews/forethought/) | Forethought | Customer Experience | 90 | — |
| [`cresta`](https://hlido.eu/reviews/cresta/) | Cresta | Customer Experience | 65 | — |
| [`sierra-ai`](https://hlido.eu/reviews/sierra-ai/) | Sierra | Customer Experience | 53 | — |
| [`netomi`](https://hlido.eu/reviews/netomi/) | Netomi | Customer Experience | 53 | — |
| [`cognigy`](https://hlido.eu/reviews/cognigy/) | Cognigy | Customer Experience | 78 | — |
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
| [`casetext`](https://hlido.eu/reviews/casetext/) | Casetext | Specialized verticals | 40 | — |
| [`ironclad`](https://hlido.eu/reviews/ironclad/) | Ironclad | Specialized verticals | 78 | — |
| [`harvey-ai`](https://hlido.eu/reviews/harvey-ai/) | Harvey | Specialized verticals | 53 | — |
| [`evisort`](https://hlido.eu/reviews/evisort/) | Evisort | Specialized verticals | 53 | — |
| [`spellbook-legal`](https://hlido.eu/reviews/spellbook-legal/) | Spellbook | Specialized verticals | 90 | — |
| [`luminance`](https://hlido.eu/reviews/luminance/) | Luminance | Specialized verticals | 65 | — |
| [`hippocratic-ai`](https://hlido.eu/reviews/hippocratic-ai/) | Hippocratic AI | Specialized verticals | 53 | — |
| [`suki-ai`](https://hlido.eu/reviews/suki-ai/) | Suki | Specialized verticals | 90 | — |
| [`glass-health`](https://hlido.eu/reviews/glass-health/) | Glass Health | Specialized verticals | 78 | — |
| [`abridge`](https://hlido.eu/reviews/abridge/) | Abridge | Specialized verticals | 53 | — |
| [`nabla`](https://hlido.eu/reviews/nabla/) | Nabla | Specialized verticals | 78 | — |
| [`mutiny`](https://hlido.eu/reviews/mutiny/) | Mutiny | Marketing & Content | 65 | — |
| [`persado`](https://hlido.eu/reviews/persado/) | Persado | Marketing & Content | 53 | — |
| [`optimizely-opal`](https://hlido.eu/reviews/optimizely-opal/) | Optimizely Opal | Marketing & Content | 90 | — |
| [`smartwriter`](https://hlido.eu/reviews/smartwriter/) | Smartwriter | Marketing & Content | 65 | — |
| [`rytr`](https://hlido.eu/reviews/rytr/) | Rytr | Marketing & Content | 78 | — |
| [`hyperwrite`](https://hlido.eu/reviews/hyperwrite/) | HyperWrite | Marketing & Content | 78 | — |
| [`simplified`](https://hlido.eu/reviews/simplified/) | Simplified | Marketing & Content | 78 | — |
| [`khanmigo`](https://hlido.eu/reviews/khanmigo/) | Khanmigo | Specialized verticals | 53 | — |
| [`quizizz`](https://hlido.eu/reviews/quizizz/) | Quizizz AI | Specialized verticals | 65 | — |
| [`magic-school`](https://hlido.eu/reviews/magic-school/) | MagicSchool | Specialized verticals | 78 | — |
| [`brisk-teaching`](https://hlido.eu/reviews/brisk-teaching/) | Brisk Teaching | Specialized verticals | 78 | — |
| [`galileo-ai-design`](https://hlido.eu/reviews/galileo-ai-design/) | Galileo (Design) | Image & Design | 40 | — |
| [`uizard`](https://hlido.eu/reviews/uizard/) | Uizard | Image & Design | 78 | — |
| [`framer-ai`](https://hlido.eu/reviews/framer-ai/) | Framer AI | Image & Design | 65 | — |
| [`browser-base`](https://hlido.eu/reviews/browser-base/) | Browserbase | Infrastructure | 78 | — |
| [`recraft-ai`](https://hlido.eu/reviews/recraft-ai/) | Recraft | Image & Design | 78 | — |
| [`figma-make`](https://hlido.eu/reviews/figma-make/) | Figma Make | Image & Design | 65 | — |
| [`anchor-browser`](https://hlido.eu/reviews/anchor-browser/) | Anchor Browser | Infrastructure | 78 | — |
| [`simular`](https://hlido.eu/reviews/simular/) | Simular | Infrastructure | 78 | — |
| [`scrapybara`](https://hlido.eu/reviews/scrapybara/) | Scrapybara | Infrastructure | 78 | — |
| [`multion`](https://hlido.eu/reviews/multion/) | MultiOn | Infrastructure | 53 | — |
| [`browser-use`](https://hlido.eu/reviews/browser-use/) | Browser Use | Infrastructure | 78 | — |
| [`pinecone`](https://hlido.eu/reviews/pinecone/) | Pinecone | Infrastructure | 90 | — |
| [`weaviate`](https://hlido.eu/reviews/weaviate/) | Weaviate | Infrastructure | 90 | — |
| [`voyage-ai`](https://hlido.eu/reviews/voyage-ai/) | Voyage AI | Infrastructure | 65 | — |
| [`jina-ai`](https://hlido.eu/reviews/jina-ai/) | Jina AI | Infrastructure | 65 | — |
| [`qdrant`](https://hlido.eu/reviews/qdrant/) | Qdrant | Infrastructure | 90 | — |
| [`hex-tech`](https://hlido.eu/reviews/hex-tech/) | Hex | Infrastructure | 78 | — |
| [`julius-ai`](https://hlido.eu/reviews/julius-ai/) | Julius | Infrastructure | 78 | — |
| [`n8n`](https://hlido.eu/reviews/n8n/) | n8n | Workflow & Automation | 90 | — |
| [`make-com`](https://hlido.eu/reviews/make-com/) | Make | Workflow & Automation | 90 | — |
| [`activepieces`](https://hlido.eu/reviews/activepieces/) | Activepieces | Workflow & Automation | 90 | — |
| [`zapier`](https://hlido.eu/reviews/zapier/) | Zapier | Workflow & Automation | 90 | — |
| [`integrately`](https://hlido.eu/reviews/integrately/) | Integrately | Workflow & Automation | 90 | — |
| [`langflow`](https://hlido.eu/reviews/langflow/) | Langflow | Workflow & Automation | 78 | — |
| [`flowiseai`](https://hlido.eu/reviews/flowiseai/) | Flowise | Workflow & Automation | 78 | — |
| [`pipedream`](https://hlido.eu/reviews/pipedream/) | Pipedream | Workflow & Automation | 90 | — |
| [`magic-dev`](https://hlido.eu/reviews/magic-dev/) | Magic | Coding | 53 | — |
| [`dify-ai`](https://hlido.eu/reviews/dify-ai/) | Dify | Workflow & Automation | 78 | — |
| [`poolside-ai`](https://hlido.eu/reviews/poolside-ai/) | Poolside | Coding | 65 | — |
| [`contextual-ai`](https://hlido.eu/reviews/contextual-ai/) | Contextual AI | Research | 78 | — |
| [`phoenix-arize`](https://hlido.eu/reviews/phoenix-arize/) | Phoenix (Arize) | Frameworks & Eval | 90 | — |
| [`langfuse`](https://hlido.eu/reviews/langfuse/) | Langfuse | Frameworks & Eval | 90 | — |
| [`traceloop`](https://hlido.eu/reviews/traceloop/) | Traceloop | Frameworks & Eval | 90 | — |
| [`promptlayer`](https://hlido.eu/reviews/promptlayer/) | PromptLayer | Frameworks & Eval | 65 | — |
| [`ragas`](https://hlido.eu/reviews/ragas/) | Ragas | Frameworks & Eval | 78 | — |
| [`trulens`](https://hlido.eu/reviews/trulens/) | TruLens | Frameworks & Eval | 65 | — |
| [`portkey-ai`](https://hlido.eu/reviews/portkey-ai/) | Portkey | Frameworks & Eval | 90 | — |
| [`inkeep`](https://hlido.eu/reviews/inkeep/) | Inkeep | Customer Experience | 78 | — |
| [`kapa-ai`](https://hlido.eu/reviews/kapa-ai/) | Kapa AI | Customer Experience | 90 | — |
| [`guru-ai`](https://hlido.eu/reviews/guru-ai/) | Guru | Productivity | 78 | — |
| [`self-operating-computer`](https://hlido.eu/reviews/self-operating-computer/) | Self-Operating Computer | Workflow & Automation | 90 | — |
| [`skyvern-ai`](https://hlido.eu/reviews/skyvern-ai/) | Skyvern | Infrastructure | 65 | — |
| [`fathom-video`](https://hlido.eu/reviews/fathom-video/) | Fathom | Productivity | 65 | — |
| [`fellow-app`](https://hlido.eu/reviews/fellow-app/) | Fellow | Productivity | 78 | — |
| [`clay-relationship`](https://hlido.eu/reviews/clay-relationship/) | Clay (relationships) | Productivity | 65 | — |
| [`spinach-ai`](https://hlido.eu/reviews/spinach-ai/) | Spinach | Productivity | 78 | — |
| [`anyscale`](https://hlido.eu/reviews/anyscale/) | Anyscale | Infrastructure | 90 | — |
| [`baseten`](https://hlido.eu/reviews/baseten/) | Baseten | Infrastructure | 78 | — |
| [`modal-com`](https://hlido.eu/reviews/modal-com/) | Modal | Infrastructure | 90 | — |
| [`ollama`](https://hlido.eu/reviews/ollama/) | Ollama | Infrastructure | 90 | — |
| [`replicate`](https://hlido.eu/reviews/replicate/) | Replicate | Infrastructure | 78 | — |
| [`lmstudio`](https://hlido.eu/reviews/lmstudio/) | LM Studio | Infrastructure | 65 | — |
| [`deepseek-chat`](https://hlido.eu/reviews/deepseek-chat/) | DeepSeek | Chat & Companion | 53 | — |
| [`xai-grok`](https://hlido.eu/reviews/xai-grok/) | Grok (xAI) | Chat & Companion | 65 | — |
| [`hugging-face`](https://hlido.eu/reviews/hugging-face/) | HuggingFace | Infrastructure | 78 | — |
| [`qwen-chat`](https://hlido.eu/reviews/qwen-chat/) | Qwen Chat | Chat & Companion | 40 | — |
| [`kimi-moonshot`](https://hlido.eu/reviews/kimi-moonshot/) | Kimi (Moonshot) | Chat & Companion | 53 | — |
| [`replika`](https://hlido.eu/reviews/replika/) | Replika | Chat & Companion | 53 | — |
| [`yi-01ai`](https://hlido.eu/reviews/yi-01ai/) | Yi (01.AI) | Chat & Companion | 53 | — |
| [`scenario-gg`](https://hlido.eu/reviews/scenario-gg/) | Scenario | Image & Design | 65 | — |
| [`playground-ai`](https://hlido.eu/reviews/playground-ai/) | Playground AI | Image & Design | 78 | — |
| [`nightcafe`](https://hlido.eu/reviews/nightcafe/) | NightCafe | Image & Design | 53 | — |
| [`luma-genie`](https://hlido.eu/reviews/luma-genie/) | Luma Genie | Image & Design | 65 | — |
| [`meshy-ai`](https://hlido.eu/reviews/meshy-ai/) | Meshy | Image & Design | 90 | — |
| [`clickup-ai`](https://hlido.eu/reviews/clickup-ai/) | ClickUp AI | Productivity | 78 | — |
| [`monday-ai`](https://hlido.eu/reviews/monday-ai/) | Monday AI | Productivity | 53 | — |
| [`smartsheet-ai`](https://hlido.eu/reviews/smartsheet-ai/) | Smartsheet AI | Productivity | 90 | — |
| [`openai-realtime`](https://hlido.eu/reviews/openai-realtime/) | OpenAI Realtime | Infrastructure | 90 | — |
| [`perplexity-api`](https://hlido.eu/reviews/perplexity-api/) | Perplexity API | Infrastructure | 90 | — |
| [`tavily-api`](https://hlido.eu/reviews/tavily-api/) | Tavily | Infrastructure | 78 | — |
| [`airtable-ai`](https://hlido.eu/reviews/airtable-ai/) | Airtable AI | Productivity | 90 | — |
| [`dia-browser`](https://hlido.eu/reviews/dia-browser/) | Dia (The Browser Company) | Infrastructure | 53 | — |
| [`arc-browser`](https://hlido.eu/reviews/arc-browser/) | Arc Browser | Infrastructure | 78 | — |
| [`aria-opera`](https://hlido.eu/reviews/aria-opera/) | Aria (Opera) | Infrastructure | 65 | — |
| [`serpapi`](https://hlido.eu/reviews/serpapi/) | SerpAPI | Infrastructure | 78 | — |
| [`brave-leo`](https://hlido.eu/reviews/brave-leo/) | Brave Leo | Infrastructure | 78 | — |
| [`kensho`](https://hlido.eu/reviews/kensho/) | Kensho | Specialized verticals | 53 | — |
| [`ravenpack`](https://hlido.eu/reviews/ravenpack/) | RavenPack | Specialized verticals | 65 | — |
| [`alphasense`](https://hlido.eu/reviews/alphasense/) | AlphaSense | Specialized verticals | 90 | — |
| [`paradigm-ai`](https://hlido.eu/reviews/paradigm-ai/) | Paradigm | Productivity | 78 | — |
| [`lutra`](https://hlido.eu/reviews/lutra/) | Lutra | Workflow & Automation | 78 | — |
| [`you-com-search`](https://hlido.eu/reviews/you-com-search/) | You.com Search | Research | 40 | — |
| [`perplexity-shopping`](https://hlido.eu/reviews/perplexity-shopping/) | Perplexity Shopping | Customer Experience | 40 | — |
| [`elastic-quote`](https://hlido.eu/reviews/elastic-quote/) | Elastic Quote | Research | 78 | — |
| [`seek-ai`](https://hlido.eu/reviews/seek-ai/) | Seek AI | Infrastructure | 53 | — |
| [`rabbit-r1`](https://hlido.eu/reviews/rabbit-r1/) | Rabbit R1 | AI Agent | 65 | — |
| [`humane-ai-pin`](https://hlido.eu/reviews/humane-ai-pin/) | Humane AI Pin | AI Agent | 53 | — |
| [`chai-research`](https://hlido.eu/reviews/chai-research/) | Chai | Chat & Companion | 53 | — |
| [`janitor-ai`](https://hlido.eu/reviews/janitor-ai/) | Janitor AI | Chat & Companion | 53 | — |
| [`snorkel-ai`](https://hlido.eu/reviews/snorkel-ai/) | Snorkel AI | Infrastructure | 65 | — |
| [`botpress`](https://hlido.eu/reviews/botpress/) | Botpress | Customer Experience | 90 | — |
| [`rasa`](https://hlido.eu/reviews/rasa/) | Rasa | Customer Experience | 78 | — |
| [`voiceflow`](https://hlido.eu/reviews/voiceflow/) | Voiceflow | Voice | 90 | — |
| [`automa-app`](https://hlido.eu/reviews/automa-app/) | Automa | Infrastructure | 78 | — |
| [`nebius`](https://hlido.eu/reviews/nebius/) | Nebius | Infrastructure | 40 | — |
| [`openrouter-models`](https://hlido.eu/reviews/openrouter-models/) | OpenRouter Models | Infrastructure | 78 | — |
| [`lambda-labs`](https://hlido.eu/reviews/lambda-labs/) | Lambda Labs | Infrastructure | 78 | — |
| [`recogni`](https://hlido.eu/reviews/recogni/) | Recogni | Infrastructure | 53 | — |
| [`deepinfra`](https://hlido.eu/reviews/deepinfra/) | DeepInfra | Infrastructure | 78 | — |
| [`haystack-deepset`](https://hlido.eu/reviews/haystack-deepset/) | Haystack | Workflow & Automation | 78 | — |
| [`agno`](https://hlido.eu/reviews/agno/) | Agno | Workflow & Automation | 78 | — |
| [`griptape`](https://hlido.eu/reviews/griptape/) | Griptape | Workflow & Automation | 78 | — |
| [`livekit-agents`](https://hlido.eu/reviews/livekit-agents/) | LiveKit Agents | Voice | 78 | — |
| [`swiggy-ai`](https://hlido.eu/reviews/swiggy-ai/) | Swiggy AI | AI Agent | 53 | — |
| [`zebrium`](https://hlido.eu/reviews/zebrium/) | Zebrium | Frameworks & Eval | 65 | — |
| [`openai-agent-sdk`](https://hlido.eu/reviews/openai-agent-sdk/) | OpenAI Agent SDK | Workflow & Automation | 65 | — |
| [`kling-ai`](https://hlido.eu/reviews/kling-ai/) | Kling | Image & Design | 53 | — |
| [`hailuo-ai`](https://hlido.eu/reviews/hailuo-ai/) | Hailuo AI | Image & Design | 53 | — |
| [`vidu-ai`](https://hlido.eu/reviews/vidu-ai/) | Vidu | Image & Design | 65 | — |
| [`pixverse`](https://hlido.eu/reviews/pixverse/) | Pixverse | Image & Design | 65 | — |
| [`playphone-ai`](https://hlido.eu/reviews/playphone-ai/) | PlayPhone AI | Voice | 40 | — |
| [`camb-ai`](https://hlido.eu/reviews/camb-ai/) | Camb AI | Voice | 78 | — |
| [`warmly-ai`](https://hlido.eu/reviews/warmly-ai/) | Warmly | Customer Experience | 78 | — |
| [`hubspot-clearbit`](https://hlido.eu/reviews/hubspot-clearbit/) | HubSpot Clearbit | Customer Experience | 65 | — |
| [`clari`](https://hlido.eu/reviews/clari/) | Clari | Customer Experience | 78 | — |
| [`opal-ai`](https://hlido.eu/reviews/opal-ai/) | Opal | Productivity | 40 | — |
| [`swebench`](https://hlido.eu/reviews/swebench/) | SWE-bench Leaderboards | AI Agent | 65 | — |
| [`bondai`](https://hlido.eu/reviews/bondai/) | Meet BondAI | BondAI | AI Agent | 78 | — |
| [`agentrunner`](https://hlido.eu/reviews/agentrunner/) | AgentRunner | Productivity | 50 | — |
| [`base44-superagents`](https://hlido.eu/reviews/base44-superagents/) | Base44 Superagents | Productivity | 70 | — |
| [`cursor-3`](https://hlido.eu/reviews/cursor-3/) | Cursor 3 | Coding | 70 | — |
| [`emergent-wingman`](https://hlido.eu/reviews/emergent-wingman/) | Emergent Wingman | Productivity | 40 | — |
| [`gauge`](https://hlido.eu/reviews/gauge/) | Gauge | Marketing | 60 | — |
| [`goose`](https://hlido.eu/reviews/goose/) | GooseAI | AI Agent | 78 | — |
| [`intent-augment-code`](https://hlido.eu/reviews/intent-augment-code/) | Intent (Augment Code) | Coding | 40 | — |
| [`openfang`](https://hlido.eu/reviews/openfang/) | OpenFang | Productivity | 40 | — |
| [`pensieve`](https://hlido.eu/reviews/pensieve/) | Pensieve | Research | 60 | — |
| [`workflow-machine`](https://hlido.eu/reviews/workflow-machine/) | Workflow Machine | Productivity | 60 | — |
| [`heightsplatform`](https://hlido.eu/reviews/heightsplatform/) | AI Online Course Creation Platform - Heights AI 2 Features | AI Agent | 65 | — |
| [`writesonic`](https://hlido.eu/reviews/writesonic/) | Writesonic | Marketing & Content | 90 | — |
| [`flux-imessage-agents`](https://hlido.eu/reviews/flux-imessage-agents/) | Flux | Productivity | 90 | — |
| [`ai2sql`](https://hlido.eu/reviews/ai2sql/) | SQL Query Builder & Generator - AI Powered Database Assistant | AI Agent | 50 | FADING |
| [`headlinesai-pro`](https://hlido.eu/reviews/headlinesai-pro/) | Free AI Title Generator ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ Get Catchy & SEO-Friendly Titles | NetusAI | Marketing & Content | 50 | FADING |
| [`canary`](https://hlido.eu/reviews/canary/) | Canary | Coding | 90 | — |
| [`cal-com`](https://hlido.eu/reviews/cal-com/) | Cal.com AI | Productivity | 90 | — |
| [`aiforgoogleslides`](https://hlido.eu/reviews/aiforgoogleslides/) | AI for Google Slides - Free Google Slides AI tool | Coding | 50 | FADING |
| [`app-rapidtextai`](https://hlido.eu/reviews/app-rapidtextai/) | RapidTextAI - Advanced AI article generator, Content, and Image Generation Tools | Image & Design | 65 | — |
| [`avatarai-me`](https://hlido.eu/reviews/avatarai-me/) | AI Avatar Generator - Create Custom AI Avatars of Yourself | Professional Photo Shoots with AI | Image & Design | 65 | — |
| [`aws-amazon`](https://hlido.eu/reviews/aws-amazon/) | Agentic Coding Experience - Amazon Q Developer - AWS | Coding | 90 | — |
| [`chatwithcloud`](https://hlido.eu/reviews/chatwithcloud/) | ChatWithCloud - Chat with your AWS Cloud from Terminal | Chat & Companion | 78 | — |
| [`astra`](https://hlido.eu/reviews/astra/) | Astra | Productivity | 40 | — |
| [`civitai`](https://hlido.eu/reviews/civitai/) | Civitai | Share your models | AI Agent | 65 | — |
| [`enact`](https://hlido.eu/reviews/enact/) | Enact | Productivity | 90 | — |
| [`crossnode`](https://hlido.eu/reviews/crossnode/) | Crossnode | Productivity | 90 | — |
| [`fathom-3-0`](https://hlido.eu/reviews/fathom-3-0/) | Fathom 3.0 | Productivity | 40 | — |
| [`d-id`](https://hlido.eu/reviews/d-id/) | D-ID | The #1 Choice for AI Generated Video Creation Platform | Image & Design | 78 | — |
| [`imgcmd`](https://hlido.eu/reviews/imgcmd/) | imgcmd | Image & Design | 73 | — |
| [`far-site`](https://hlido.eu/reviews/far-site/) | FARSITE - Government Contract Compliance Software | AI Agent | 53 | — |
| [`leap`](https://hlido.eu/reviews/leap/) | Leap | Coding | 73 | — |
| [`editgpt`](https://hlido.eu/reviews/editgpt/) | Proofread, edit and track changes to your content using ChatGPT. | editGPT | Chat & Companion | 78 | — |
| [`hubspot-breeze-prospecting-agent`](https://hlido.eu/reviews/hubspot-breeze-prospecting-agent/) | HubSpot Breeze Prospecting Agent | Productivity | 57 | — |
| [`flexapp`](https://hlido.eu/reviews/flexapp/) | AI Mobile App Designer ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ¢ÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂÃÂ Beautiful UI in Minutes | GenDesigns | Image & Design | 65 | — |
| [`get-meetgeek`](https://hlido.eu/reviews/get-meetgeek/) | MeetGeek | AI Note Taker and Meeting Assistant | Workflow & Automation | 50 | FADING |
| [`get-murf`](https://hlido.eu/reviews/get-murf/) | Free AI Voice Generator & Text to Speech Online | Murf AI | Voice | 65 | — |
| [`rewind-ai`](https://hlido.eu/reviews/rewind-ai/) | Rewind AI | AI Agent | 40 | — |
| [`adobe-firefly-ai-assistant`](https://hlido.eu/reviews/adobe-firefly-ai-assistant/) | Adobe Firefly AI Assistant | Image & Design | 73 | — |
| [`clide`](https://hlido.eu/reviews/clide/) | Clide | Coding | 40 | — |
| [`mercury`](https://hlido.eu/reviews/mercury/) | Mercury | Productivity | 90 | — |
| [`nelly`](https://hlido.eu/reviews/nelly/) | Nelly | Productivity | 90 | — |
| [`opencode`](https://hlido.eu/reviews/opencode/) | OpenCode | Coding | 90 | — |
| [`openagents`](https://hlido.eu/reviews/openagents/) | OpenAgents | Productivity | 73 | — |
| [`origami`](https://hlido.eu/reviews/origami/) | Origami | Productivity | 90 | — |
| [`raydian`](https://hlido.eu/reviews/raydian/) | Raydian | Coding | 90 | — |
| [`smooth-cli`](https://hlido.eu/reviews/smooth-cli/) | Smooth CLI | Coding | 73 | — |
| [`startfa-st`](https://hlido.eu/reviews/startfa-st/) | Startfa.st | AI Agent | 90 | — |
| [`stackai-auto-agents`](https://hlido.eu/reviews/stackai-auto-agents/) | StackAI Auto-Agents | Productivity | 73 | — |
| [`tracium`](https://hlido.eu/reviews/tracium/) | Tracium | Infrastructure | 90 | — |
| [`verdent`](https://hlido.eu/reviews/verdent/) | Verdent | Coding | 90 | — |
| [`cleocode-lafs`](https://hlido.eu/reviews/cleocode-lafs/) | @cleocode/lafs | Coding | 57 | — |
| [`tencent-ai-agent-server`](https://hlido.eu/reviews/tencent-ai-agent-server/) | @tencent-ai/agent-server | Coding | 73 | — |
| [`beeai-framework`](https://hlido.eu/reviews/beeai-framework/) | beeai-framework | Coding | 73 | — |
| [`contextgraph-agent`](https://hlido.eu/reviews/contextgraph-agent/) | @contextgraph/agent | AI Agent | 73 | — |
| [`voltagent-core`](https://hlido.eu/reviews/voltagent-core/) | @voltagent/core | Coding | 73 | — |
| [`build-skill`](https://hlido.eu/reviews/build-skill/) | build-skill | Coding | 73 | — |
| [`oci-generativeaiagent`](https://hlido.eu/reviews/oci-generativeaiagent/) | oci-generativeaiagent | Coding | 90 | — |
| [`ai-agent-test`](https://hlido.eu/reviews/ai-agent-test/) | ai-agent-test | Coding | 90 | — |
| [`21st-extension-toolbar`](https://hlido.eu/reviews/21st-extension-toolbar/) | @21st-extension/toolbar | Coding | 73 | — |
| [`paperclipai`](https://hlido.eu/reviews/paperclipai/) | paperclipai | Coding | 73 | — |
| [`winsznx-lend402`](https://hlido.eu/reviews/winsznx-lend402/) | @winsznx/lend402 | Coding | 90 | — |
| [`lleverage-ai-agent-threads`](https://hlido.eu/reviews/lleverage-ai-agent-threads/) | @lleverage-ai/agent-threads | Coding | 73 | — |
| [`openkrew`](https://hlido.eu/reviews/openkrew/) | openkrew | Coding | 90 | — |
| [`clipboard-health-ai-rules`](https://hlido.eu/reviews/clipboard-health-ai-rules/) | @clipboard-health/ai-rules | Coding | 57 | — |
| [`jay-ai-agent`](https://hlido.eu/reviews/jay-ai-agent/) | @jay-ai/agent | Coding | 73 | — |
| [`alice-space-alice`](https://hlido.eu/reviews/alice-space-alice/) | @alice_space/alice | Coding | 73 | — |
| [`contractspec-lib-ai-agent`](https://hlido.eu/reviews/contractspec-lib-ai-agent/) | @contractspec/lib.ai-agent | Coding | 90 | — |
| [`pocketflow`](https://hlido.eu/reviews/pocketflow/) | pocketflow | Frameworks & Eval | 90 | — |
| [`neoagent`](https://hlido.eu/reviews/neoagent/) | neoagent | Coding | 73 | — |
| [`frumu-tandem-client`](https://hlido.eu/reviews/frumu-tandem-client/) | @frumu/tandem-client | AI Agent | 90 | — |
| [`create-bubblelab-app`](https://hlido.eu/reviews/create-bubblelab-app/) | create-bubblelab-app | Coding | 73 | — |
| [`nori-ai-cli`](https://hlido.eu/reviews/nori-ai-cli/) | nori-ai-cli | Coding | 73 | — |
| [`ff-labs-fff-bun`](https://hlido.eu/reviews/ff-labs-fff-bun/) | @ff-labs/fff-bun | Coding | 73 | — |
| [`mypensieve`](https://hlido.eu/reviews/mypensieve/) | mypensieve | AI Agent | 73 | — |
| [`openduo-duoduo`](https://hlido.eu/reviews/openduo-duoduo/) | @openduo/duoduo | AI Agent | 90 | — |
| [`compilr-dev-agents`](https://hlido.eu/reviews/compilr-dev-agents/) | @compilr-dev/agents | Coding | 90 | — |
| [`beav3r-sdk`](https://hlido.eu/reviews/beav3r-sdk/) | @beav3r/sdk | AI Agent | 73 | — |
| [`leaper-agent`](https://hlido.eu/reviews/leaper-agent/) | leaper-agent | AI Agent | 90 | — |
| [`mcp-abap-adt-openai-llm`](https://hlido.eu/reviews/mcp-abap-adt-openai-llm/) | @mcp-abap-adt/openai-llm | Coding | 73 | — |
| [`mcp-abap-adt-anthropic-llm`](https://hlido.eu/reviews/mcp-abap-adt-anthropic-llm/) | @mcp-abap-adt/anthropic-llm | Coding | 73 | — |
| [`donobu`](https://hlido.eu/reviews/donobu/) | donobu | Coding | 90 | — |
| [`mcp-abap-adt-deepseek-llm`](https://hlido.eu/reviews/mcp-abap-adt-deepseek-llm/) | @mcp-abap-adt/deepseek-llm | Coding | 73 | — |
| [`higgsfield-cli`](https://hlido.eu/reviews/higgsfield-cli/) | @higgsfield/cli | Coding | 90 | — |
| [`mcp-abap-adt-sap-aicore-llm`](https://hlido.eu/reviews/mcp-abap-adt-sap-aicore-llm/) | @mcp-abap-adt/sap-aicore-llm | Coding | 73 | — |
| [`mcp-abap-adt-qdrant-rag`](https://hlido.eu/reviews/mcp-abap-adt-qdrant-rag/) | @mcp-abap-adt/qdrant-rag | Coding | 73 | — |
| [`mcp-abap-adt-openai-embedder`](https://hlido.eu/reviews/mcp-abap-adt-openai-embedder/) | @mcp-abap-adt/openai-embedder | Coding | 73 | — |
| [`elvatis-com-aahp-runner`](https://hlido.eu/reviews/elvatis-com-aahp-runner/) | @elvatis_com/aahp-runner | AI Agent | 73 | — |
| [`pathcourse-langchain`](https://hlido.eu/reviews/pathcourse-langchain/) | @pathcourse/langchain | AI Agent | 73 | — |
| [`nopeek`](https://hlido.eu/reviews/nopeek/) | nopeek | Coding | 90 | — |
| [`sym-bot-xmesh-agent`](https://hlido.eu/reviews/sym-bot-xmesh-agent/) | @sym-bot/xmesh-agent | AI Agent | 73 | — |
| [`mcp-abap-adt-pg-vector-rag`](https://hlido.eu/reviews/mcp-abap-adt-pg-vector-rag/) | @mcp-abap-adt/pg-vector-rag | Coding | 73 | — |
| [`studio-foundation-runner`](https://hlido.eu/reviews/studio-foundation-runner/) | @studio-foundation/runner | Coding | 90 | — |
| [`ipads-skvm-skvm`](https://hlido.eu/reviews/ipads-skvm-skvm/) | @ipads-skvm/skvm | Coding | 90 | — |
| [`mcp-abap-adt-ollama-embedder`](https://hlido.eu/reviews/mcp-abap-adt-ollama-embedder/) | @mcp-abap-adt/ollama-embedder | Coding | 73 | — |
| [`luxyie-ai-cli`](https://hlido.eu/reviews/luxyie-ai-cli/) | luxyie.ai-cli | Coding | 90 | — |
| [`alpha-cli-toolkit`](https://hlido.eu/reviews/alpha-cli-toolkit/) | alpha-cli-toolkit | AI Agent | 90 | — |
| [`possumtech-antlrmap`](https://hlido.eu/reviews/possumtech-antlrmap/) | @possumtech/antlrmap | Coding | 90 | — |
| [`llmtxt`](https://hlido.eu/reviews/llmtxt/) | llmtxt | Coding | 73 | — |
| [`wu529778790-open-im`](https://hlido.eu/reviews/wu529778790-open-im/) | @wu529778790/open-im | Coding | 73 | — |
| [`herdctl`](https://hlido.eu/reviews/herdctl/) | herdctl | AI Agent | 73 | — |
| [`claude-gombwe`](https://hlido.eu/reviews/claude-gombwe/) | claude-gombwe | AI Agent | 73 | — |
| [`create-lancelot`](https://hlido.eu/reviews/create-lancelot/) | create-lancelot | AI Agent | 73 | — |
| [`pdh-ai-cli`](https://hlido.eu/reviews/pdh-ai-cli/) | pdh-ai-cli | Coding | 90 | — |
| [`orion-ai`](https://hlido.eu/reviews/orion-ai/) | orion-ai | Coding | 73 | — |
| [`benjam16-umbrella`](https://hlido.eu/reviews/benjam16-umbrella/) | @benjam16/umbrella | AI Agent | 73 | — |
| [`leixusam-foundry`](https://hlido.eu/reviews/leixusam-foundry/) | @leixusam/foundry | AI Agent | 90 | — |
| [`fireqa-agent`](https://hlido.eu/reviews/fireqa-agent/) | fireqa-agent | Coding | 90 | — |
| [`postbridge-langchain`](https://hlido.eu/reviews/postbridge-langchain/) | postbridge-langchain | Frameworks & Eval | 90 | — |
| [`aliasjeff-acli`](https://hlido.eu/reviews/aliasjeff-acli/) | @aliasjeff/acli | Coding | 90 | — |
| [`extend-ai-cli-darwin-arm64`](https://hlido.eu/reviews/extend-ai-cli-darwin-arm64/) | @extend-ai/cli-darwin-arm64 | Coding | 73 | — |
| [`extend-ai-cli-win32-x64`](https://hlido.eu/reviews/extend-ai-cli-win32-x64/) | @extend-ai/cli-win32-x64 | Coding | 73 | — |
| [`eetr-agent-streemr`](https://hlido.eu/reviews/eetr-agent-streemr/) | @eetr/agent-streemr | Frameworks & Eval | 90 | — |
| [`u0z-zero-graph`](https://hlido.eu/reviews/u0z-zero-graph/) | @u0z/zero-graph | Frameworks & Eval | 90 | — |
| [`langchain-langgraph-supervisor`](https://hlido.eu/reviews/langchain-langgraph-supervisor/) | @langchain/langgraph-supervisor | Frameworks & Eval | 73 | — |
| [`deepagents`](https://hlido.eu/reviews/deepagents/) | deepagents | Frameworks & Eval | 73 | — |
| [`create-langgraph`](https://hlido.eu/reviews/create-langgraph/) | create-langgraph | Frameworks & Eval | 73 | — |
| [`langchain-langgraph-sdk`](https://hlido.eu/reviews/langchain-langgraph-sdk/) | @langchain/langgraph-sdk | Frameworks & Eval | 73 | — |
| [`langchain-openai`](https://hlido.eu/reviews/langchain-openai/) | @langchain/openai | Frameworks & Eval | 57 | — |
| [`langchain-mcp-adapters`](https://hlido.eu/reviews/langchain-mcp-adapters/) | @langchain/mcp-adapters | Frameworks & Eval | 57 | — |
| [`langchain-community`](https://hlido.eu/reviews/langchain-community/) | @langchain/community | Frameworks & Eval | 73 | — |
| [`langchain-agentfolio`](https://hlido.eu/reviews/langchain-agentfolio/) | langchain-agentfolio | Frameworks & Eval | 90 | — |
| [`langchain-google-genai`](https://hlido.eu/reviews/langchain-google-genai/) | @langchain/google-genai | Frameworks & Eval | 57 | — |
| [`langchain-langgraph-swarm`](https://hlido.eu/reviews/langchain-langgraph-swarm/) | @langchain/langgraph-swarm | Frameworks & Eval | 73 | — |
| [`elelem`](https://hlido.eu/reviews/elelem/) | elelem | Frameworks & Eval | 90 | — |
| [`stripe-agent-toolkit`](https://hlido.eu/reviews/stripe-agent-toolkit/) | @stripe/agent-toolkit | Frameworks & Eval | 73 | — |
| [`langchain-anthropic`](https://hlido.eu/reviews/langchain-anthropic/) | @langchain/anthropic | Frameworks & Eval | 57 | — |
| [`osohq-langchain`](https://hlido.eu/reviews/osohq-langchain/) | @osohq/langchain | Frameworks & Eval | 90 | — |
| [`langchain-aws`](https://hlido.eu/reviews/langchain-aws/) | @langchain/aws | Frameworks & Eval | 57 | — |
| [`langchain-copilotkit`](https://hlido.eu/reviews/langchain-copilotkit/) | langchain-copilotkit | Frameworks & Eval | 90 | — |
| [`langchain-textsplitters`](https://hlido.eu/reviews/langchain-textsplitters/) | @langchain/textsplitters | Frameworks & Eval | 57 | — |
| [`langchainhub`](https://hlido.eu/reviews/langchainhub/) | langchainhub | Frameworks & Eval | 73 | — |
| [`pocketflow-js`](https://hlido.eu/reviews/pocketflow-js/) | pocketflow-js | Frameworks & Eval | 90 | — |
| [`serverless`](https://hlido.eu/reviews/serverless/) | serverless | Frameworks & Eval | 90 | — |
| [`livekit-agents-plugin-openai`](https://hlido.eu/reviews/livekit-agents-plugin-openai/) | @livekit/agents-plugin-openai | Frameworks & Eval | 73 | — |
| [`backpackflow`](https://hlido.eu/reviews/backpackflow/) | backpackflow | Frameworks & Eval | 73 | — |
| [`pocketflow-core`](https://hlido.eu/reviews/pocketflow-core/) | @pocketflow/core | Frameworks & Eval | 90 | — |
| [`llm-dev-ops-llm-schema-registry-integrations`](https://hlido.eu/reviews/llm-dev-ops-llm-schema-registry-integrations/) | @llm-dev-ops/llm-schema-registry-integrations | Frameworks & Eval | 73 | — |
| [`open-mercato-ai-assistant`](https://hlido.eu/reviews/open-mercato-ai-assistant/) | @open-mercato/ai-assistant | Frameworks & Eval | 73 | — |
| [`litechain`](https://hlido.eu/reviews/litechain/) | litechain | Frameworks & Eval | 90 | — |
| [`ax-llm-ax`](https://hlido.eu/reviews/ax-llm-ax/) | @ax-llm/ax | Frameworks & Eval | 73 | — |
| [`llm-spend-guard`](https://hlido.eu/reviews/llm-spend-guard/) | llm-spend-guard | Frameworks & Eval | 90 | — |
| [`hopfield`](https://hlido.eu/reviews/hopfield/) | hopfield | Frameworks & Eval | 73 | — |
| [`outputai-llm`](https://hlido.eu/reviews/outputai-llm/) | @outputai/llm | Frameworks & Eval | 90 | — |
| [`mastra-core`](https://hlido.eu/reviews/mastra-core/) | @mastra/core | Frameworks & Eval | 90 | — |
| [`claude-skills-library`](https://hlido.eu/reviews/claude-skills-library/) | claude-skills-library | Frameworks & Eval | 90 | — |
| [`nlux-react`](https://hlido.eu/reviews/nlux-react/) | @nlux/react | Frameworks & Eval | 90 | — |
| [`vulnbuster`](https://hlido.eu/reviews/vulnbuster/) | VulnBuster | AI Agent | 40 | — |
| [`gradio-agentchatbot`](https://hlido.eu/reviews/gradio-agentchatbot/) | gradio_agentchatbot | Chat & Companion | 57 | — |
| [`site-agent`](https://hlido.eu/reviews/site-agent/) | site-agent | AI Agent | 57 | — |
| [`cs-agent`](https://hlido.eu/reviews/cs-agent/) | cs-agent | Chat & Companion | 57 | — |
| [`referatai`](https://hlido.eu/reviews/referatai/) | referatai | Chat & Companion | 57 | — |
| [`openai-chatgpt-turbo-ui`](https://hlido.eu/reviews/openai-chatgpt-turbo-ui/) | OpenAI_chatgpt-turbo-UI | Chat & Companion | 40 | — |
| [`xylaria`](https://hlido.eu/reviews/xylaria/) | Xylaria | Chat & Companion | 40 | — |
| [`fara-browseruse`](https://hlido.eu/reviews/fara-browseruse/) | Fara-BrowserUse | AI Agent | 57 | — |
| [`fleetmind-in-action`](https://hlido.eu/reviews/fleetmind-in-action/) | fleetmind-in-action | AI Agent | 40 | — |
| [`ai-recruiting-agent`](https://hlido.eu/reviews/ai-recruiting-agent/) | AI_Recruiting_Agent | AI Agent | 57 | — |
| [`chatgpt-assistant`](https://hlido.eu/reviews/chatgpt-assistant/) | ChatGPT-Assistant | Chat & Companion | 57 | — |
| [`hy-embodied-0-5`](https://hlido.eu/reviews/hy-embodied-0-5/) | HY-Embodied-0.5 | Chat & Companion | 57 | — |
| [`pixdiet`](https://hlido.eu/reviews/pixdiet/) | PixDiet | Chat & Companion | 40 | — |
| [`self-chat`](https://hlido.eu/reviews/self-chat/) | self-chat | Chat & Companion | 57 | — |
| [`graphstrike`](https://hlido.eu/reviews/graphstrike/) | graphstrike | AI Agent | 57 | — |
| [`shillrank-agent`](https://hlido.eu/reviews/shillrank-agent/) | shillrank-agent | AI Agent | 40 | — |
| [`finario-ai-agent-and-mcp`](https://hlido.eu/reviews/finario-ai-agent-and-mcp/) | Finario-AI-Agent-and-MCP | AI Agent | 57 | — |
| [`orynxml-backend`](https://hlido.eu/reviews/orynxml-backend/) | orynxml-backend | Chat & Companion | 57 | — |
| [`synergy-ai`](https://hlido.eu/reviews/synergy-ai/) | Synergy-ai | Chat & Companion | 57 | — |
| [`huggingface-chatbot-cascade`](https://hlido.eu/reviews/huggingface-chatbot-cascade/) | Huggingface_Chatbot_Cascade | Chat & Companion | 57 | — |
| [`babel-1-world-engine`](https://hlido.eu/reviews/babel-1-world-engine/) | Babel-1-World-Engine | AI Agent | 57 | — |
| [`api`](https://hlido.eu/reviews/api/) | API | Chat & Companion | 57 | — |
| [`paper-survey-agent`](https://hlido.eu/reviews/paper-survey-agent/) | paper-survey-agent | AI Agent | 40 | — |
| [`metaenv`](https://hlido.eu/reviews/metaenv/) | MetaEnv | AI Agent | 57 | — |
| [`admissions-env`](https://hlido.eu/reviews/admissions-env/) | admissions_env | AI Agent | 57 | — |
| [`flight-rebooking`](https://hlido.eu/reviews/flight-rebooking/) | flight-rebooking | AI Agent | 40 | — |
| [`meeting-scheduler-openenv`](https://hlido.eu/reviews/meeting-scheduler-openenv/) | meeting-scheduler-openenv | AI Agent | 57 | — |
| [`itil-reflexion-agent`](https://hlido.eu/reviews/itil-reflexion-agent/) | itil-reflexion-agent | AI Agent | 57 | — |
| [`champion-council-private`](https://hlido.eu/reviews/champion-council-private/) | Champion_Council_private | AI Agent | 57 | — |
| [`siteagent`](https://hlido.eu/reviews/siteagent/) | siteagent | AI Agent | 57 | — |
| [`pixdiet-old-mistral`](https://hlido.eu/reviews/pixdiet-old-mistral/) | PixDiet-Old-Mistral | Chat & Companion | 40 | — |
| [`pubmed-rag`](https://hlido.eu/reviews/pubmed-rag/) | pubmed_rag | Chat & Companion | 40 | — |
| [`trip-planner-v1-tools`](https://hlido.eu/reviews/trip-planner-v1-tools/) | trip_planner_v1_tools | Chat & Companion | 57 | — |
| [`finflow`](https://hlido.eu/reviews/finflow/) | FinFLow | Chat & Companion | 57 | — |
| [`insurellmrag`](https://hlido.eu/reviews/insurellmrag/) | insurellmrag | Chat & Companion | 40 | — |
| [`gpt`](https://hlido.eu/reviews/gpt/) | gpt | Chat & Companion | 40 | — |
| [`linguaicoach`](https://hlido.eu/reviews/linguaicoach/) | linguAIcoach | Chat & Companion | 57 | — |
| [`scholarbot`](https://hlido.eu/reviews/scholarbot/) | ScholarBot | Chat & Companion | 57 | — |
| [`irtaza`](https://hlido.eu/reviews/irtaza/) | irtaza | Chat & Companion | 57 | — |
| [`sentiment-chat-app`](https://hlido.eu/reviews/sentiment-chat-app/) | sentiment-chat-app | Chat & Companion | 57 | — |
| [`chatgks`](https://hlido.eu/reviews/chatgks/) | chatGKS | Chat & Companion | 57 | — |
| [`research-ai-assistant`](https://hlido.eu/reviews/research-ai-assistant/) | Research_AI_Assistant | Chat & Companion | 57 | — |
| [`dataengenv`](https://hlido.eu/reviews/dataengenv/) | DataEngEnv | AI Agent | 57 | — |
| [`multi-cloud-optimizer`](https://hlido.eu/reviews/multi-cloud-optimizer/) | multi_cloud_optimizer | AI Agent | 57 | — |
| [`customer-support-env`](https://hlido.eu/reviews/customer-support-env/) | customer-support-env | AI Agent | 57 | — |
| [`clinical-trial-optimizer`](https://hlido.eu/reviews/clinical-trial-optimizer/) | clinical-trial-optimizer | AI Agent | 57 | — |
| [`macro-signal-env`](https://hlido.eu/reviews/macro-signal-env/) | macro-signal-env | AI Agent | 57 | — |
| [`data-cleaning-env`](https://hlido.eu/reviews/data-cleaning-env/) | data-cleaning-env | AI Agent | 57 | — |
| [`agentic-customer-experience-simulation`](https://hlido.eu/reviews/agentic-customer-experience-simulation/) | Agentic_Customer_Experience_Simulation | AI Agent | 57 | — |
| [`devops-incident-response`](https://hlido.eu/reviews/devops-incident-response/) | devops-incident-response | AI Agent | 57 | — |
| [`auditrix`](https://hlido.eu/reviews/auditrix/) | Auditrix | AI Agent | 57 | — |
| [`my-env`](https://hlido.eu/reviews/my-env/) | my-env | AI Agent | 57 | — |
| [`adaptive-backend-traffic-controller`](https://hlido.eu/reviews/adaptive-backend-traffic-controller/) | adaptive-backend-traffic-controller | AI Agent | 57 | — |
| [`messy-data-triage-gym`](https://hlido.eu/reviews/messy-data-triage-gym/) | messy-data-triage-gym | AI Agent | 57 | — |
| [`smartgrid-rl-env-backup`](https://hlido.eu/reviews/smartgrid-rl-env-backup/) | smartgrid-rl-env-backup | AI Agent | 57 | — |
| [`incidentops-openenv`](https://hlido.eu/reviews/incidentops-openenv/) | incidentops-openenv | AI Agent | 57 | — |
| [`last-mile-logistics-env-v1`](https://hlido.eu/reviews/last-mile-logistics-env-v1/) | last-mile-logistics-env-v1 | AI Agent | 57 | — |
| [`code-review-env`](https://hlido.eu/reviews/code-review-env/) | code-review-env | AI Agent | 57 | — |
| [`shopeasy-support-gym`](https://hlido.eu/reviews/shopeasy-support-gym/) | shopeasy-support-gym | AI Agent | 57 | — |
| [`cybersoc-arena`](https://hlido.eu/reviews/cybersoc-arena/) | cybersoc-arena | AI Agent | 57 | — |
| [`graphstrike-model-training`](https://hlido.eu/reviews/graphstrike-model-training/) | graphstrike-model-training | AI Agent | 57 | — |
| [`training-space`](https://hlido.eu/reviews/training-space/) | training-space | AI Agent | 57 | — |
| [`compliance-gym-lending`](https://hlido.eu/reviews/compliance-gym-lending/) | compliance-gym-lending | AI Agent | 57 | — |
| [`saas-audit-env`](https://hlido.eu/reviews/saas-audit-env/) | saas-audit-env | AI Agent | 57 | — |
| [`policyqa-commandrplus-rag-agent`](https://hlido.eu/reviews/policyqa-commandrplus-rag-agent/) | PolicyQA-CommandRPlus-RAG-Agent | AI Agent | 57 | — |
| [`radify`](https://hlido.eu/reviews/radify/) | radify | AI Agent | 57 | — |
| [`osogritvoice`](https://hlido.eu/reviews/osogritvoice/) | OSOGRITVOICE | AI Agent | 40 | — |
| [`gritvoice45`](https://hlido.eu/reviews/gritvoice45/) | GRITVOICE45 | AI Agent | 57 | — |
| [`atharva`](https://hlido.eu/reviews/atharva/) | atharva | AI Agent | 57 | — |
| [`gaia-eval-l1-20`](https://hlido.eu/reviews/gaia-eval-l1-20/) | gaia-eval-l1-20 | AI Agent | 57 | — |
| [`basic-agent-training`](https://hlido.eu/reviews/basic-agent-training/) | Basic_Agent_Training | AI Agent | 57 | — |
| [`voice-ocr-agent`](https://hlido.eu/reviews/voice-ocr-agent/) | Voice_OCR_Agent | AI Agent | 40 | — |
| [`dynamic-function-calling-agent`](https://hlido.eu/reviews/dynamic-function-calling-agent/) | Dynamic-Function-Calling-Agent | AI Agent | 57 | — |
| [`home-assistant-diagnostics-agent`](https://hlido.eu/reviews/home-assistant-diagnostics-agent/) | Home-Assistant-Diagnostics-Agent | AI Agent | 57 | — |
| [`localspark-ai`](https://hlido.eu/reviews/localspark-ai/) | localspark-ai | AI Agent | 57 | — |
| [`quiz-agent4`](https://hlido.eu/reviews/quiz-agent4/) | quiz-agent4 | AI Agent | 57 | — |
| [`quiz-agent3`](https://hlido.eu/reviews/quiz-agent3/) | quiz-agent3 | AI Agent | 40 | — |
| [`tdsfinal`](https://hlido.eu/reviews/tdsfinal/) | tdsfinal | AI Agent | 57 | — |
| [`lavent-marketing-agent`](https://hlido.eu/reviews/lavent-marketing-agent/) | lavent-marketing-agent | AI Agent | 57 | — |
| [`quiz-agent1`](https://hlido.eu/reviews/quiz-agent1/) | quiz-agent1 | AI Agent | 40 | — |
| [`tdsproject2`](https://hlido.eu/reviews/tdsproject2/) | TDSPROJECT2 | AI Agent | 57 | — |
| [`hs-unit4-agent`](https://hlido.eu/reviews/hs-unit4-agent/) | hs-unit4-agent | AI Agent | 57 | — |
| [`voice-agent`](https://hlido.eu/reviews/voice-agent/) | Voice_Agent | AI Agent | 57 | — |
| [`magic-patterns`](https://hlido.eu/reviews/magic-patterns/) | Magic Patterns | Image & Design | 90 | — |
| [`bolt-new-v2`](https://hlido.eu/reviews/bolt-new-v2/) | Bolt.new (StackBlitz) | Coding | 90 | — |
| [`coplay`](https://hlido.eu/reviews/coplay/) | Coplay | Coding | 90 | — |
| [`sema4-ai`](https://hlido.eu/reviews/sema4-ai/) | Sema4.ai | Workflow & Automation | 90 | — |
| [`runner-h-h-company`](https://hlido.eu/reviews/runner-h-h-company/) | Runner H (H Company) | AI Agent | 90 | — |
| [`proxy-convergence`](https://hlido.eu/reviews/proxy-convergence/) | Proxy (Convergence AI) | AI Agent | 40 | — |
| [`replit-ai-agent`](https://hlido.eu/reviews/replit-ai-agent/) | Replit AI (Ghostwriter) | Coding | 90 | — |
| [`genie-cosine`](https://hlido.eu/reviews/genie-cosine/) | Genie (Cosine AI) | Coding | 90 | — |
| [`vapi-voice-agents`](https://hlido.eu/reviews/vapi-voice-agents/) | Vapi Voice Agents Platform | Voice | 90 | — |
| [`retell-voice`](https://hlido.eu/reviews/retell-voice/) | Retell Voice | Voice | 90 | — |
| [`phonely`](https://hlido.eu/reviews/phonely/) | Phonely | Voice | 90 | — |
| [`sierra-platform`](https://hlido.eu/reviews/sierra-platform/) | Sierra (CX agent platform) | Customer Experience | 90 | — |
| [`parloa`](https://hlido.eu/reviews/parloa/) | Parloa | Customer Experience | 90 | — |
| [`decagon-platform`](https://hlido.eu/reviews/decagon-platform/) | Decagon AI Agent | Customer Experience | 90 | — |
| [`11x-ai`](https://hlido.eu/reviews/11x-ai/) | 11x.ai | Productivity | 90 | — |
| [`artisan-ai`](https://hlido.eu/reviews/artisan-ai/) | Artisan AI | Productivity | 73 | — |
| [`rox-ai`](https://hlido.eu/reviews/rox-ai/) | Rox | Productivity | 90 | — |
| [`elicit-research`](https://hlido.eu/reviews/elicit-research/) | Elicit | Research | 90 | — |
| [`granola-ai`](https://hlido.eu/reviews/granola-ai/) | Granola AI | Productivity | 90 | — |
| [`exa-search-api`](https://hlido.eu/reviews/exa-search-api/) | Exa Search | Research | 90 | — |
| [`autogen-microsoft`](https://hlido.eu/reviews/autogen-microsoft/) | Microsoft AutoGen | Frameworks & Eval | 90 | — |
| [`arize-phoenix`](https://hlido.eu/reviews/arize-phoenix/) | Arize Phoenix | Frameworks & Eval | 90 | — |
| [`agentops-ai`](https://hlido.eu/reviews/agentops-ai/) | AgentOps | Frameworks & Eval | 90 | — |
| [`hyperbolic-ai`](https://hlido.eu/reviews/hyperbolic-ai/) | Hyperbolic | Infrastructure | 90 | — |
| [`mem-0-ai`](https://hlido.eu/reviews/mem-0-ai/) | Mem0 AI | Infrastructure | 90 | — |
| [`langgraph-platform`](https://hlido.eu/reviews/langgraph-platform/) | LangGraph Platform | Frameworks & Eval | 90 | — |
| [`weaviate-platform`](https://hlido.eu/reviews/weaviate-platform/) | Weaviate Cloud | Infrastructure | 90 | — |
| [`clay-platform`](https://hlido.eu/reviews/clay-platform/) | Clay (data enrichment AI) | Productivity | 90 | — |
| [`cline-2`](https://hlido.eu/reviews/cline-2/) | Cline (latest) | Coding | 90 | — |
| [`warp-ai-terminal`](https://hlido.eu/reviews/warp-ai-terminal/) | Warp AI Terminal | Coding | 90 | — |
| [`roocode`](https://hlido.eu/reviews/roocode/) | Roo Code | Coding | 73 | — |
| [`ampcode`](https://hlido.eu/reviews/ampcode/) | AmpCode by Sourcegraph | Coding | 90 | — |
| [`zed-industries-ai`](https://hlido.eu/reviews/zed-industries-ai/) | Zed AI | Coding | 90 | — |
| [`lex-page`](https://hlido.eu/reviews/lex-page/) | Lex | Image & Design | 85 | STEADY |
| [`openai`](https://hlido.eu/reviews/openai/) | API Platform | OpenAI | Coding | 90 | VITAL |
| [`getnudgeai`](https://hlido.eu/reviews/getnudgeai/) | Best AI Scribe and Coding Platform for Clinical AI Solutions - Nudge AI | Productivity | 90 | VITAL |
| [`photoguruai`](https://hlido.eu/reviews/photoguruai/) | The Best AI Headshots Generator | Chat & Companion | 75 | STEADY |
| [`nurgo-software`](https://hlido.eu/reviews/nurgo-software/) | BrainSoup: build an AI team that works for you | Workflow & Automation | 70 | STEADY |
| [`plantphotoai`](https://hlido.eu/reviews/plantphotoai/) | Best free AI-crafted plant photos | PlantPhotoAI | AI Agent | 70 | STEADY |
| [`hyperwriteai`](https://hlido.eu/reviews/hyperwriteai/) | HyperWrite | AI Writing Assistant | Voice | 85 | STEADY |
| [`magicstudio`](https://hlido.eu/reviews/magicstudio/) | Create images from text | AI Image Generator by Magic Studio | Image & Design | 90 | VITAL |
| [`chatgptwriter`](https://hlido.eu/reviews/chatgptwriter/) | Jetwriter AI: Personalized AI Writing Assistant for Chrome, Desktop & Mobile. Free to Try. | Research | 50 | FADING |
| [`airkit`](https://hlido.eu/reviews/airkit/) | Agentforce: The AI Agent Platform | Salesforce | Customer Experience | 50 | FADING |
| [`try-sanebox`](https://hlido.eu/reviews/try-sanebox/) | SaneBox | Email Management for Any Inbox | Productivity | 90 | VITAL |
| [`theunwindai`](https://hlido.eu/reviews/theunwindai/) | unwind ai | AI Agent | 70 | STEADY |
| [`spellapp`](https://hlido.eu/reviews/spellapp/) | AI Document Generator | Spell AI | AI Agent | 90 | VITAL |
| [`sitegpt`](https://hlido.eu/reviews/sitegpt/) | SiteGPT - Make AI your expert customer support agent | Chat & Companion | 90 | VITAL |
| [`planttattoosai`](https://hlido.eu/reviews/planttattoosai/) | AI Plant Tattoo Generator | PlantTattoosAI | Image & Design | 70 | STEADY |
| [`republiclabs`](https://hlido.eu/reviews/republiclabs/) | RepublicLabs.ai | Generate images and videos from AI Generative models | Image & Design | 80 | STEADY |
| [`text2infographic`](https://hlido.eu/reviews/text2infographic/) | Text to Infographic — AI Infographic Generator | AI Agent | 85 | STEADY |
| [`publicprompts-art`](https://hlido.eu/reviews/publicprompts-art/) | Public Prompts - Free AI Prompts, Models & Resources | Workflow & Automation | 70 | STEADY |
| [`playgroundai`](https://hlido.eu/reviews/playgroundai/) | Free AI Design Tool: Logos, T-Shirts, Social Media - Playground | Image & Design | 75 | STEADY |
| [`prisma-ai`](https://hlido.eu/reviews/prisma-ai/) | Lensa - Prisma Labs | Image & Design | 70 | STEADY |
| [`robin-ai`](https://hlido.eu/reviews/robin-ai/) | Robin AI | Legal | 50 | FADING |
| [`browser-use-browser-harness`](https://hlido.eu/reviews/browser-use-browser-harness/) | browser-use/browser-harness | AI Agent | 40 | — |
| [`avadsa25-codec`](https://hlido.eu/reviews/avadsa25-codec/) | AVADSA25/codec | Coding | 40 | — |
| [`bitterbot-ai-bitterbot-desktop`](https://hlido.eu/reviews/bitterbot-ai-bitterbot-desktop/) | Bitterbot-AI/bitterbot-desktop | AI Agent | 40 | — |
| [`blockrunai-franklin`](https://hlido.eu/reviews/blockrunai-franklin/) | BlockRunAI/Franklin | AI Agent | 40 | — |
| [`cosmicstack-labs-mercury-agent`](https://hlido.eu/reviews/cosmicstack-labs-mercury-agent/) | cosmicstack-labs/mercury-agent | AI Agent | 40 | — |
| [`crisandrews-clawcode`](https://hlido.eu/reviews/crisandrews-clawcode/) | crisandrews/ClawCode | Coding | 40 | — |

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
| `open-data/manifest.json` | Manifest for the CC-BY-4.0 open data dump on hlido.eu — generated_at, item count, SHA-256, license. The dump itself is at <https://hlido.eu/data/open/hlido-corpus.jsonl> |
| `open-data/LICENSE.md` | CC-BY-4.0 license + citation guidance for the open data dump (more permissive than the HF dataset's CC-BY-NC) |

## Open data dump (CC-BY-4.0)

The full review corpus is published as a single JSONL file under a permissive **CC-BY-4.0** license — academic citation and AI-training-corpus inclusion are explicitly welcome. The dump lives at:

- **Dump:** <https://hlido.eu/data/open/hlido-corpus.jsonl>
- **Manifest:** <https://hlido.eu/data/open/manifest.json>
- **Checksum:** <https://hlido.eu/data/open/hlido-corpus.jsonl.sha256>
- **Landing page + schema:** <https://hlido.eu/data/open/>

Refresh cadence: quarterly. Verify integrity with `sha256sum -c hlido-corpus.jsonl.sha256`.

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