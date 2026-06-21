"""CrewAI adapters for Hlido trust checks.

Gives a CrewAI agent two tools so it can vet collaborators/tools against
Hlido's independent reviews *before* delegating:

* ``Hlido Trust Check`` — verdict for a known agent slug.
* ``Hlido Recommend``  — find a Hlido-vetted agent for a free-text need.

Requires ``crewai`` (and its ``crewai-tools`` BaseTool) installed::

    pip install "hlido-trust[crewai]"

Usage::

    from hlido_trust.crewai_tool import hlido_crewai_tools
    agent = Agent(role="Router", tools=hlido_crewai_tools(), ...)
"""

from __future__ import annotations

from typing import List, Optional, Type

from .client import HlidoClient

try:
    from crewai.tools import BaseTool  # crewai >= 0.51
    from pydantic import BaseModel, Field
except ImportError as e:  # pragma: no cover - exercised only without crewai
    raise ImportError(
        "hlido_trust.crewai_tool requires crewai. Install with: pip install 'hlido-trust[crewai]'"
    ) from e


class _TrustCheckInput(BaseModel):
    slug: str = Field(..., description="Hlido agent slug to check, e.g. 'aider' or 'crewai'.")
    min_score: float = Field(70.0, description="Minimum acceptable Hlido score (0-100). 70 = STEADY tier.")


class HlidoTrustCheckTool(BaseTool):
    name: str = "Hlido Trust Check"
    description: str = (
        "Look up an AI agent's independent Hlido trust verdict by slug before delegating to it. "
        "Returns score, tier, what it fails at, red flags, and an evidence URL. "
        "Use this to vet a tool or sub-agent you are about to rely on."
    )
    args_schema: Type[BaseModel] = _TrustCheckInput
    _client: HlidoClient

    def __init__(self, client: Optional[HlidoClient] = None, **kwargs):
        super().__init__(**kwargs)
        self._client = client or HlidoClient(framework="crewai")

    def _run(self, slug: str, min_score: float = 70.0) -> str:
        v = self._client.trust_check(slug)
        gate = "PASS" if v.recommended(min_score=min_score) else "FAIL"
        return f"[{gate} @ min_score={min_score}] {v.summary()}"


class _RecommendInput(BaseModel):
    need: str = Field(..., description="Plain-English description of the agent capability you need.")
    k: int = Field(1, description="How many recommendations to return (needs a Hlido API key for k>1).")


class HlidoRecommendTool(BaseTool):
    name: str = "Hlido Recommend"
    description: str = (
        "Given a free-text need (e.g. 'reliable AI coding agent'), return Hlido-vetted agents "
        "ranked by an independent trust score, with evidence URLs. Use this to pick a trustworthy "
        "agent or tool instead of guessing."
    )
    args_schema: Type[BaseModel] = _RecommendInput
    _client: HlidoClient

    def __init__(self, client: Optional[HlidoClient] = None, **kwargs):
        super().__init__(**kwargs)
        self._client = client or HlidoClient(framework="crewai")

    def _run(self, need: str, k: int = 1) -> str:
        recs = self._client.recommend(need, k=k)
        if not recs:
            return f"No Hlido-vetted agent found for: {need}"
        lines = [
            f"{i + 1}. {r.name} — {r.tier} ({r.score}/100): {r.rationale or ''} [{r.evidence_url}]"
            for i, r in enumerate(recs)
        ]
        return "\n".join(lines)


def hlido_crewai_tools(client: Optional[HlidoClient] = None) -> List[BaseTool]:
    """Return both Hlido CrewAI tools, sharing one client."""
    client = client or HlidoClient(framework="crewai")
    return [HlidoTrustCheckTool(client=client), HlidoRecommendTool(client=client)]
