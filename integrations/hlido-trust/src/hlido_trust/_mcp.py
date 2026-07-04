# SPDX-License-Identifier: MIT
"""Async MCP client for Hlido's public endpoint — used by the optional NeMo
Agent Toolkit plugin (:mod:`hlido_trust.nat_plugin`).

The core :class:`hlido_trust.client.HlidoClient` is a sync, zero-dependency
REST client. The NeMo Agent Toolkit registers *async* tools and the richest
agent-to-agent surface is Hlido's JSON-RPC MCP server, so this module provides a
small async client over ``https://hlido.eu/mcp``. It is only imported when the
``nemo`` extra is installed (which pulls in ``httpx`` via ``nvidia-nat-core``).

No authentication is required — Hlido's trust data is public.
"""

from __future__ import annotations

import json
from typing import Any

import httpx

DEFAULT_MCP_URL = "https://hlido.eu/mcp"


class HlidoMCPError(RuntimeError):
    """Raised when the Hlido MCP endpoint returns a JSON-RPC error."""


class AsyncMCPClient:
    """Minimal async JSON-RPC MCP client for Hlido."""

    def __init__(
        self,
        base_url: str = DEFAULT_MCP_URL,
        timeout_seconds: float = 20.0,
        api_key: str | None = None,
    ) -> None:
        self._base_url = base_url.rstrip("/")
        self._timeout = timeout_seconds
        headers = {
            "content-type": "application/json",
            "accept": "application/json, text/event-stream",
            "user-agent": "hlido-trust-nemo/0.2.0",
        }
        # api_key is accepted for forward-compatibility; Hlido's public trust
        # surface needs no auth, so it is only sent when explicitly provided.
        if api_key:
            headers["authorization"] = f"Bearer {api_key}"
        self._headers = headers

    async def call_tool(self, name: str, arguments: dict[str, Any]) -> Any:
        """Invoke a Hlido MCP tool by name and return its parsed result."""
        payload = {
            "jsonrpc": "2.0",
            "id": 1,
            "method": "tools/call",
            "params": {"name": name, "arguments": arguments},
        }
        async with httpx.AsyncClient(timeout=self._timeout) as http:
            resp = await http.post(self._base_url, json=payload, headers=self._headers)
            resp.raise_for_status()
            data = _decode_body(resp)

        if data.get("error"):
            err = data["error"]
            raise HlidoMCPError(f"Hlido MCP error {err.get('code')}: {err.get('message')}")

        return _unwrap_result(data.get("result", {}))


def _decode_body(resp: "httpx.Response") -> dict[str, Any]:
    """Decode a JSON or SSE (text/event-stream) MCP response body."""
    ctype = resp.headers.get("content-type", "")
    if "text/event-stream" in ctype:
        for line in resp.text.splitlines():
            line = line.strip()
            if line.startswith("data:"):
                chunk = line[len("data:"):].strip()
                if chunk:
                    return json.loads(chunk)
        raise HlidoMCPError("Empty SSE response from Hlido MCP")
    return resp.json()


def _unwrap_result(result: Any) -> Any:
    """Normalize an MCP tools/call result into plain structured data."""
    if not isinstance(result, dict):
        return result
    if result.get("structuredContent") is not None:
        return result["structuredContent"]
    content = result.get("content")
    if isinstance(content, list) and content:
        first = content[0]
        if isinstance(first, dict) and first.get("type") == "text":
            text = first.get("text", "")
            try:
                return json.loads(text)
            except (ValueError, TypeError):
                return {"text": text}
    return result
