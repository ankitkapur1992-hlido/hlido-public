"""Hlido — independent, evidence-backed trust scores for AI agents.

This is the **umbrella** package. Today it re-exports `hlido-trust` so that::

    pip install hlido

gives you the agent-vetting tools directly::

    from hlido import HlidoClient
    if not HlidoClient().trust_gate("aider", min_score=70):
        raise RuntimeError("failed Hlido trust check")

Framework adapters live in `hlido_trust.crewai_tool` / `hlido_trust.langchain_tool`
(install `hlido[crewai]` or `hlido[langchain]`). As Hlido's Python surface grows,
the full SDK will live under this same `hlido` namespace.
"""

from hlido_trust import (  # noqa: F401  (re-exported for convenience)
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
