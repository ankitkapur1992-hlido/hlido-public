# SPDX-FileCopyrightText: Copyright (c) 2026, Hlido. All rights reserved.
# SPDX-License-Identifier: Apache-2.0
"""Thin async client for Hlido's public MCP endpoint.

Hlido exposes its independent agent-trust tools as a JSON-RPC 2.0 MCP server at
https://hlido.eu/mcp. This client issues ``tools/call`` requests and normalizes
the MCP response envelope (which wraps tool output as text content) back into a
plain dict, so the NeMo Agent Toolkit function group can return structured data.

No authentication is required — Hlido's trust data is public.
"""

from __future__ import annotations

import json
from typing import Any

import httpx

DEFAULT_BASE_URL = "https://hlido.eu/mcp"


class HlidoError(RuntimeError):
    """Raised when the Hlido MCP endpoint returns a JSON-RPC error."""


class HlidoClient:
    """Minimal JSON-RPC MCP client for Hlido."""

    def __init__(
        self,
        base_url: str = DEFAULT_BASE_URL,
        timeout_seconds: float = 20.0,
        api_key: str | None = None,
    ) -> None:
        self._base_url = base_url.rstrip("/")
        self._timeout = timeout_seconds
        headers = {
            "content-type": "application/json",
            "accept": "application/json, text/event-stream",
            "user-agent": "nemo-agent-toolkit-hlido/0.1.0",
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

        if "error" in data and data["error"]:
            err = data["error"]
            raise HlidoError(f"Hlido MCP error {err.get('code')}: {err.get('message')}")

        return _unwrap_result(data.get("result", {}))


def _decode_body(resp: httpx.Response) -> dict[str, Any]:
    """Decode a JSON or SSE (text/event-stream) MCP response body."""
    ctype = resp.headers.get("content-type", "")
    if "text/event-stream" in ctype:
        # Streamable-HTTP transport: pull the JSON out of the `data:` lines.
        for line in resp.text.splitlines():
            line = line.strip()
            if line.startswith("data:"):
                chunk = line[len("data:"):].strip()
                if chunk:
                    return json.loads(chunk)
        raise HlidoError("Empty SSE response from Hlido MCP")
    return resp.json()


def _unwrap_result(result: Any) -> Any:
    """Normalize an MCP tools/call result into plain structured data.

    MCP wraps tool output as ``{"content": [{"type": "text", "text": "..."}]}``
    and may also include ``structuredContent``. Prefer structured content; fall
    back to JSON-decoding the first text block; otherwise return as-is.
    """
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
