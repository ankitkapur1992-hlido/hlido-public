"""LangChain adapters for Hlido trust checks.

Gives a LangChain/LangGraph agent two structured tools so it can vet tools or
sub-agents against Hlido's independent reviews *before* delegating:

* ``hlido_trust_check`` — verdict for a known agent slug.
* ``hlido_recommend``  — find a Hlido-vetted agent for a free-text need.

Requires ``langchain-core`` installed::

    pip install "hlido-trust[langchain]"

Usage::

    from hlido_trust.langchain_tool import hlido_langchain_tools
    llm_with_tools = llm.bind_tools(hlido_langchain_tools())
"""

from __future__ import annotations

from typing import List, Optional

from .client import HlidoClient

try:
    from langchain_core.tools import StructuredTool
except ImportError as e:  # pragma: no cover - exercised only without langchain
    raise ImportError(
        "hlido_trust.langchain_tool requires langchain-core. "
        "Install with: pip install 'hlido-trust[langchain]'"
    ) from e


def hlido_langchain_tools(client: Optional[HlidoClient] = None) -> List["StructuredTool"]:
    """Return both Hlido LangChain tools (``hlido_trust_check`` + ``hlido_recommend``)."""
    client = client or HlidoClient(framework="langchain")

    def trust_check(slug: str, min_score: float = 70.0) -> str:
        """Look up an AI agent's independent Hlido trust verdict by slug before
        delegating. Returns a PASS/FAIL gate plus score, tier, red flags, and an
        evidence URL.

        Args:
            slug: Hlido agent slug, e.g. 'aider' or 'crewai'.
            min_score: Minimum acceptable Hlido score (0-100); 70 = STEADY tier.
        """
        v = client.trust_check(slug)
        gate = "PASS" if v.recommended(min_score=min_score) else "FAIL"
        return f"[{gate} @ min_score={min_score}] {v.summary()}"

    def recommend(need: str, k: int = 1) -> str:
        """Given a free-text need (e.g. 'reliable AI coding agent'), return
        Hlido-vetted agents ranked by an independent trust score, with evidence
        URLs.

        Args:
            need: Plain-English description of the capability you need.
            k: How many to return (needs a Hlido API key for k>1).
        """
        recs = client.recommend(need, k=k)
        if not recs:
            return f"No Hlido-vetted agent found for: {need}"
        return "\n".join(
            f"{i + 1}. {r.name} — {r.tier} ({r.score}/100): {r.rationale or ''} [{r.evidence_url}]"
            for i, r in enumerate(recs)
        )

    return [
        StructuredTool.from_function(
            func=trust_check,
            name="hlido_trust_check",
            description=(
                "Vet an AI agent against its independent Hlido review by slug before relying on it. "
                "Returns PASS/FAIL plus score, tier, red flags, and evidence URL."
            ),
        ),
        StructuredTool.from_function(
            func=recommend,
            name="hlido_recommend",
            description=(
                "Find a Hlido-vetted, independently-scored AI agent for a free-text need, "
                "ranked best-first with evidence URLs."
            ),
        ),
    ]
