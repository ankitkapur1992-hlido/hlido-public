# SPDX-FileCopyrightText: Copyright (c) 2026, Hlido. All rights reserved.
# SPDX-License-Identifier: Apache-2.0
"""Tests for the Hlido NeMo Agent Toolkit plugin client + response normalization.

These tests exercise the MCP envelope handling (the fiddly part) without a
network call. The ``call_tool`` round-trip is mocked with ``respx``.
"""

import json

import httpx
import pytest

from nat.plugins.hlido.client import (
    HlidoClient,
    HlidoError,
    _decode_body,
    _unwrap_result,
)


def test_unwrap_structured_content_preferred():
    result = {
        "structuredContent": {"slug": "aider", "score": 90},
        "content": [{"type": "text", "text": "ignored"}],
    }
    assert _unwrap_result(result) == {"slug": "aider", "score": 90}


def test_unwrap_text_json_block():
    result = {"content": [{"type": "text", "text": json.dumps({"ok": True, "score": 90})}]}
    assert _unwrap_result(result) == {"ok": True, "score": 90}


def test_unwrap_text_non_json_falls_back():
    result = {"content": [{"type": "text", "text": "no_review_found"}]}
    assert _unwrap_result(result) == {"text": "no_review_found"}


def test_unwrap_passthrough_plain_dict():
    assert _unwrap_result({"ok": True}) == {"ok": True}


def test_decode_sse_body():
    body = "event: message\ndata: " + json.dumps({"result": {"ok": True}}) + "\n\n"
    resp = httpx.Response(
        200, headers={"content-type": "text/event-stream"}, text=body
    )
    assert _decode_body(resp) == {"result": {"ok": True}}


@pytest.mark.asyncio
async def test_call_tool_unwraps_text(respx_mock):
    payload = {
        "jsonrpc": "2.0",
        "id": 1,
        "result": {
            "content": [
                {"type": "text", "text": json.dumps({"ok": True, "slug": "aider", "score": 90})}
            ]
        },
    }
    respx_mock.post("https://hlido.eu/mcp").mock(
        return_value=httpx.Response(200, json=payload)
    )
    client = HlidoClient()
    out = await client.call_tool("trust_check", {"agent_or_url": "aider"})
    assert out["slug"] == "aider"
    assert out["score"] == 90


@pytest.mark.asyncio
async def test_call_tool_raises_on_jsonrpc_error(respx_mock):
    payload = {"jsonrpc": "2.0", "id": 1, "error": {"code": -32601, "message": "no such tool"}}
    respx_mock.post("https://hlido.eu/mcp").mock(
        return_value=httpx.Response(200, json=payload)
    )
    client = HlidoClient()
    with pytest.raises(HlidoError):
        await client.call_tool("nope", {})


def test_register_imports_and_registers():
    # Importing the plugin should not raise; the decorator runs at import time.
    import nat.plugins.hlido.register as reg  # noqa: F401
    from nat.plugins.hlido.tools import HlidoToolsGroupConfig

    cfg = HlidoToolsGroupConfig()
    assert cfg.base_url == "https://hlido.eu/mcp"
