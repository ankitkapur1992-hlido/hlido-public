# hlido-trust

**Vet AI agents before you delegate to them.** `hlido-trust` lets your agent
call [Hlido](https://hlido.eu) — independent, evidence-backed trust scores for
AI agents — as a trust step *inside its own loop*. Drop-in tools for
**CrewAI** and **LangChain**, plus a framework-agnostic client with **zero
runtime dependencies** (standard-library `urllib` only).

Hlido is independent (we don't take money to rank anyone), evidence-backed
(every score links to verifiable proof), longitudinal (re-tested over time),
and machine-readable. That's exactly the material an agent should check before
trusting another agent or tool.

## Install

```bash
pip install hlido-trust                 # core, zero deps
pip install "hlido-trust[crewai]"       # + CrewAI tools
pip install "hlido-trust[langchain]"    # + LangChain tools
```

> Before the PyPI release, install straight from source:
> `pip install "git+https://github.com/ankitkapur1992-hlido/hlido-public#subdirectory=integrations/hlido-trust"`

## 30-second use — a plain guard clause (no framework)

```python
from hlido_trust import HlidoClient

hlido = HlidoClient()
if not hlido.trust_gate("aider", min_score=70):
    raise RuntimeError("Aider failed the Hlido trust gate — not delegating.")
```

`trust_gate` fails **closed**: an agent with no Hlido review, or one carrying a
red flag, returns `False`.

## CrewAI

```python
from crewai import Agent
from hlido_trust.crewai_tool import hlido_crewai_tools

router = Agent(
    role="Delegation Router",
    goal="Only delegate to agents that pass an independent Hlido trust check.",
    tools=hlido_crewai_tools(),     # Hlido Trust Check + Hlido Recommend
)
```

## LangChain

```python
from hlido_trust.langchain_tool import hlido_langchain_tools

tools = hlido_langchain_tools()     # hlido_trust_check + hlido_recommend
llm_with_tools = llm.bind_tools(tools)
```

See [`examples/`](examples/) for full "vet before you delegate" agents.

## API

| Call | What it does | Endpoint |
|------|--------------|----------|
| `HlidoClient().recommend(need, k=1)` | Hlido-vetted agents for a free-text need, ranked | `POST /v1/recommend` |
| `HlidoClient().trust_check(slug)` | Full trust verdict for one agent (score, tier, red flags, evidence) | scorecard JSON |
| `HlidoClient().trust_gate(slug, min_score=70)` | Boolean go/no-go (fails closed) | scorecard JSON |

`recommend` returns the single top match on the free tier. Set
`HLIDO_API_KEY` (a `hlk_live_*` key from <https://hlido.eu/api/>) to unlock
`k > 1`.

```python
HlidoClient(api_key="hlk_live_...")   # or export HLIDO_API_KEY
```

### `TrustVerdict` fields

`slug`, `name`, `score`, `tier` (VITAL ≥90 / STEADY ≥70 / FADING ≥40 /
FLATLINE), `confidence`, `best_for`, `not_recommended_for`, `what_it_fails_at`,
`red_flags`, `evidence_url`, `stale`, `found`. Helpers: `.recommended(min_score)`
and `.summary()`.

## Why

One agent that checks trust before delegating beats a thousand passive
listings. Embedding Hlido as a callable step is how independent agent reviews
actually get used — by humans *and* by agents.

## License

MIT · Hlido <hello@hlido.eu> · <https://hlido.eu>
