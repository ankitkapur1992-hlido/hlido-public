# SPDX-License-Identifier: MIT
"""Tests for the async MCP client behind the optional NeMo plugin.

Network-free: the MCP envelope handling (the fiddly part) is unit-tested, and the
``call_tool`` round-trip is mocked with ``respx``. Skipped entirely if the
``nemo`` extra (httpx) is not installed.
"""

import json

import pytest

httpx = pytest.importorskip("httpx")
pytest.importorskip("respx")

from hlido_trust._mcp import (  # noqa: E402
    AsyncMCPClient,
    HlidoMCPError,
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


def test_decode_sse_body():
    body = "event: message\ndata: " + json.dumps({"result": {"ok": True}}) + "\n\n"
    resp = httpx.Response(200, headers={"content-type": "text/event-stream"}, text=body)
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
    respx_mock.post("https://hlido.eu/mcp").mock(return_value=httpx.Response(200, json=payload))
    out = await AsyncMCPClient().call_tool("trust_check", {"agent_or_url": "aider"})
    assert out["slug"] == "aider" and out["score"] == 90


@pytest.mark.asyncio
async def test_call_tool_raises_on_jsonrpc_error(respx_mock):
    payload = {"jsonrpc": "2.0", "id": 1, "error": {"code": -32601, "message": "no such tool"}}
    respx_mock.post("https://hlido.eu/mcp").mock(return_value=httpx.Response(200, json=payload))
    with pytest.raises(HlidoMCPError):
        await AsyncMCPClient().call_tool("nope", {})
