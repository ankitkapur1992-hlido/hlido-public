"""hlido-trust — call Hlido's independent AI-agent trust scores from your agent.

Quick start (no framework, zero deps)::

    from hlido_trust import HlidoClient

    hlido = HlidoClient()
    if not hlido.trust_gate("aider", min_score=70):
        raise RuntimeError("agent failed Hlido trust check")

Framework adapters are optional imports (require the framework installed)::

    from hlido_trust.crewai_tool import hlido_crewai_tools
    from hlido_trust.langchain_tool import hlido_langchain_tools
"""

from .client import (
    HlidoClient,
    HlidoError,
    Recommendation,
    TrustVerdict,
    tier_for_score,
)

__all__ = [
    "HlidoClient",
    "HlidoError",
    "Recommendation",
    "TrustVerdict",
    "tier_for_score",
    "__version__",
]

__version__ = "0.1.0"
