<!--
SPDX-FileCopyrightText: Copyright (c) 2026, Hlido. All rights reserved.
SPDX-License-Identifier: Apache-2.0
-->

# NeMo Agent Toolkit — Hlido Integration

[Hlido](https://hlido.eu) is an independent review platform for AI agents — *"Rotten
Tomatoes for AI agents."* This package adds Hlido's **independent agent-trust** tools to
[NVIDIA NeMo Agent Toolkit](https://github.com/NVIDIA/NeMo-Agent-Toolkit) workflows, so an
agent can vet **another** agent — its trust score, claim verification, and known incidents
— *before* delegating to, installing, or relying on it.

All tools call Hlido's public MCP endpoint (`https://hlido.eu/mcp`). **No API key is
required** — Hlido's trust data (scores + evidence) is public; only the scoring weights are
private.

## Installation

```bash
# uv
uv pip install hlido-nat

# pip
pip install hlido-nat
```

The distribution is named **`hlido-nat`**; it installs the `nat.plugins.hlido` import
package, shares the `nat` namespace, and is discovered automatically through the
`nat.plugins` entry point once installed in the same environment as `nvidia-nat-core`.

## Minimal workflow configuration

```yaml
function_groups:
  hlido:
    _type: hlido
    # All fields optional — Hlido's trust surface is public, no key needed.
    # base_url: https://hlido.eu/mcp
    # timeout_seconds: 20

workflow:
  _type: react_agent
  tool_names:
    - hlido__trust_check
    - hlido__find_trusted
    - hlido__verify_claim
    - hlido__get_scorecard
  llm_name: default_llm
```

## Configuration fields

| Field | Default | Description |
| --- | --- | --- |
| `base_url` | `https://hlido.eu/mcp` | Hlido MCP endpoint. Override only for self-host/test. |
| `timeout_seconds` | `20` | Per-request timeout. |
| `api_key` | `""` (none) | Not required for the public trust surface. Reserved for future authenticated endpoints; falls back to no auth when empty. |

## Registered type and generated tools

Registered function group `_type`: **`hlido`**. With the default instance name, it exposes:

| Tool | Purpose |
| --- | --- |
| `hlido__trust_check` | Is a specific agent trustworthy? Score (0-100), tier, verdict, incidents. **Call first.** |
| `hlido__find_trusted` | Discover Hlido-reviewed agents matching a free-text need, ranked by trust. |
| `hlido__verify_claim` | Fact-check one specific vendor claim against Hlido's independent testing. |
| `hlido__get_scorecard` | Full claim-vs-evidence scorecard for one reviewed agent. |

### Example: gate a delegation on trust

```
User: "Use Aider to refactor this module."
Agent → hlido__trust_check(agent_or_url="aider")
      ← { score: 90, tier: "VITAL", verdict: "...live-tested CLI...", incidents: {published_count: 0} }
Agent: "Aider is Hlido-VITAL (90/100, no incidents) — proceeding."
```

## Supported NeMo Agent Toolkit versions

Depends on `nvidia-nat-core>=1.8`. CI validates against supported toolkit releases; the
upper bound is intentionally omitted so compatible future releases satisfy the dependency.

## Local testing

```bash
uv pip install -e ".[test]"
pytest
```

## Bug routing

- **Hlido data / tool behavior** (a score looks wrong, a tool errors, a missing review):
  email `ankit@hlido.eu`, or use the `report_review_issue` tool on the Hlido MCP
  server (`https://hlido.eu/mcp`). This package is mirrored from the Hlido monorepo
  into [hlido-public/integrations/hlido-nat](https://github.com/ankitkapur1992-hlido/hlido-public/tree/main/integrations/hlido-nat).
- **Toolkit runtime / discovery** (`nvidia-nat-core` itself): open an issue on
  [NVIDIA/NeMo-Agent-Toolkit](https://github.com/NVIDIA/NeMo-Agent-Toolkit/issues).

## License

Apache-2.0. See [LICENSE](./LICENSE).
