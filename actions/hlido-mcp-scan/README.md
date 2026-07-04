# Hlido MCP Scan

A drop-in GitHub Action that safety-scans **the MCP servers your repo configures** — before they reach your agents. Every server in `.mcp.json` (or Cursor / VS Code / Claude Desktop configs) gets an independent verdict from [Hlido](https://hlido.eu/mcp/): safety tier, **tool-poisoning detection** (hidden instructions in tool descriptions — the malice signal), dangerous-capability red-flags (shell / code-eval / fs-write / egress / secrets), and auth posture.

This is `npm audit` for your MCP supply chain.

## Quick start

```yaml
# .github/workflows/hlido-mcp-scan.yml
name: Hlido MCP Scan
on:
  pull_request:
    types: [opened, synchronize, reopened]
permissions:
  pull-requests: write   # sticky comment
  contents: read
jobs:
  mcp-scan:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: ankitkapur1992-hlido/hlido-public/actions/hlido-mcp-scan@main
        with:
          fail-on: risky        # or: dangerous · caution · poisoning (default)
```

## What it does

1. Finds MCP server configs (`.mcp.json`, `.cursor/mcp.json`, `.vscode/mcp.json`, `claude_desktop_config.json` — override with `config-paths`).
2. Asks Hlido's public `scan_mcp` tool for each server: a server already in the [register](https://hlido.eu/mcp/) answers instantly with full sandbox-scan evidence; an unseen HTTP endpoint is statically scanned live; an unseen stdio package is queued for an isolated sandbox scan (reported honestly as `NOT_SCANNED` — never assumed safe).
3. Writes a step-summary table + a sticky PR comment (auto-replaced on repeat runs).
4. Gates the build: `fail-on: poisoning` (default) fails only on detected tool-poisoning; `caution`/`risky`/`dangerous` fail at/above that tier.

## Inputs

| Input | Default | Description |
|---|---|---|
| `config-paths` | the 4 common locations | Space-separated MCP config files to scan |
| `fail-on` | `poisoning` | `poisoning` · `dangerous` · `risky` · `caution` |
| `comment-pr` | `true` | Sticky PR comment on pull_request events |

## Outputs

`scanned` (servers found), `flagged` (gate trips), `decision` (`pass`/`fail`).

## How to read a tier

Tier = **blast radius if hijacked**, not maintainer trustworthiness — a file-writing or shell server is powerful AND risky by nature. `tool_poisoning_detected` is the one flag signalling possible malice. Evidence for every finding is published per server in the register.

No auth, no signup, no internal APIs — the scan endpoint is Hlido's public MCP server (`https://hlido.eu/mcp`). Also available inline: `npx @hlido/cli scan <server>`.

_Independent, evidence-first. Hlido is never paid by vendors for scores._
