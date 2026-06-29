# SPDX-FileCopyrightText: Copyright (c) 2026, Hlido. All rights reserved.
# SPDX-License-Identifier: Apache-2.0
"""Hlido function group for NVIDIA NeMo Agent Toolkit.

Registers the ``hlido`` function group, exposing Hlido's independent
agent-trust tools so a NeMo Agent Toolkit workflow can vet another agent
*before* delegating to, installing, or relying on it.

Generated tool names (with the default ``hlido`` instance):
  - hlido__trust_check
  - hlido__find_trusted
  - hlido__verify_claim
  - hlido__get_scorecard
"""

from __future__ import annotations

from typing import Any

from pydantic import Field

from nat.plugin_api import Builder
from nat.plugin_api import FunctionGroup
from nat.plugin_api import FunctionGroupBaseConfig
from nat.plugin_api import SerializableSecretStr
from nat.plugin_api import register_function_group

from .client import HlidoClient


class HlidoToolsGroupConfig(FunctionGroupBaseConfig, name="hlido"):
    """Hlido independent agent-trust tools group.

    Hlido's trust data is public, so no credential is required. ``base_url`` and
    ``timeout_seconds`` are provided for self-hosted or test overrides.
    """

    base_url: str = Field(
        default="https://hlido.eu/mcp",
        description="Hlido MCP endpoint. Defaults to the public production server.",
    )
    timeout_seconds: float = Field(
        default=20.0,
        description="Per-request timeout in seconds.",
    )
    api_key: SerializableSecretStr = Field(
        default_factory=lambda: SerializableSecretStr(""),
        description=(
            "Optional. Not required for Hlido's public trust surface; reserved "
            "for future authenticated endpoints. Falls back to no auth when empty."
        ),
    )


@register_function_group(config_type=HlidoToolsGroupConfig)
async def hlido_tools(config: HlidoToolsGroupConfig, _builder: Builder):
    api_key = config.api_key.get_secret_value() if config.api_key else ""
    client = HlidoClient(
        base_url=config.base_url,
        timeout_seconds=config.timeout_seconds,
        api_key=api_key or None,
    )
    group = FunctionGroup(config=config)

    async def trust_check(agent_or_url: str, use_case: str | None = None) -> dict[str, Any]:
        """Is a specific AI agent trustworthy? Returns Hlido's independent trust
        score (0-100), tier (VITAL/STEADY/FADING/FLATLINE), a one-line verdict,
        claim-verification summary, and known incidents. Call this FIRST before
        delegating to, installing, or relying on another agent. Accepts a Hlido
        slug (e.g. 'aider', 'cursor') or a product/homepage URL."""
        args: dict[str, Any] = {"agent_or_url": agent_or_url}
        if use_case:
            args["use_case"] = use_case
        return await client.call_tool("trust_check", args)

    async def find_trusted(
        need: str, min_tier: str = "STEADY", limit: int = 10
    ) -> dict[str, Any]:
        """Discover Hlido-reviewed agents that match a free-text need, ranked by
        trust. Returns reviewed agents at or above ``min_tier``
        (VITAL/STEADY/FADING/FLATLINE), each with its score, tier, and review
        URL. Use before choosing which agent to adopt for a task."""
        return await client.call_tool(
            "find_trusted",
            {"need": need, "min_tier": min_tier, "limit": limit},
        )

    async def verify_claim(agent: str, claim: str) -> dict[str, Any]:
        """Fact-check one specific marketing or capability claim about an agent
        against Hlido's independent testing. Returns a verdict
        (PASS/FAIL/PARTIAL/UNKNOWN) with an evidence snippet and its source — or
        an honest null when that exact claim was not tested. Use to validate a
        vendor promise before relying on it."""
        return await client.call_tool("verify_claim", {"agent": agent, "claim": claim})

    async def get_scorecard(slug: str) -> dict[str, Any]:
        """Fetch the full sanitized claim-vs-evidence scorecard for one
        Hlido-reviewed agent: every claim, verdict, evidence quote, source
        surface, and (for CLI/API tests) the captured command, exit_code, and
        duration. Use for thorough agent-to-agent pre-flight evaluation."""
        return await client.call_tool("get_scorecard", {"slug": slug})

    group.add_function("trust_check", trust_check, description=trust_check.__doc__)
    group.add_function("find_trusted", find_trusted, description=find_trusted.__doc__)
    group.add_function("verify_claim", verify_claim, description=verify_claim.__doc__)
    group.add_function("get_scorecard", get_scorecard, description=get_scorecard.__doc__)

    yield group
