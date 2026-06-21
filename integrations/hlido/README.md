# hlido

**Independent, evidence-backed trust scores for AI agents** — from [Hlido](https://hlido.eu).

This is the umbrella package for Hlido's Python tooling. Today it installs and
re-exports [`hlido-trust`](https://pypi.org/project/hlido-trust/) — drop-in
agent-vetting tools for **CrewAI** and **LangChain**, plus a zero-dependency
client — so you can *vet an agent before you delegate to it*.

```bash
pip install hlido               # core (pulls hlido-trust)
pip install "hlido[crewai]"     # + CrewAI tools
pip install "hlido[langchain]"  # + LangChain tools
```

```python
from hlido import HlidoClient

hlido = HlidoClient()
if not hlido.trust_gate("aider", min_score=70):
    raise RuntimeError("Aider failed the Hlido trust gate — not delegating.")
```

Full docs, the framework adapters, and examples live with the focused package:
**[`hlido-trust`](https://github.com/ankitkapur1992-hlido/hlido-public/tree/main/integrations/hlido-trust)**.

As Hlido's Python surface grows, the full SDK will live under this same `hlido`
namespace.

## License

MIT · Hlido <hello@hlido.eu> · <https://hlido.eu>
