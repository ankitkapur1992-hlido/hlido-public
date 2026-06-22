# hlido-langchain

LangChain tools for [Hlido](https://hlido.eu) — independent, evidence-backed trust
scores for AI agents. Vet an agent or tool against its independent review **before
delegating to it**.

```bash
pip install hlido-langchain
```

```python
from hlido_langchain import get_tools

tools = get_tools()          # [hlido_trust_check, hlido_recommend]
llm_with_tools = llm.bind_tools(tools)
```

No API key is required for trust checks.

- `hlido_trust_check(slug, min_score=70)` — PASS/FAIL gate + score, tier, red flags, evidence URL.
- `hlido_recommend(need, k=1)` — Hlido-vetted agents for a free-text need, ranked.

Thin wrapper over [`hlido-trust`](https://pypi.org/project/hlido-trust/); the tools live
in `hlido_trust.langchain_tool`. MIT.
