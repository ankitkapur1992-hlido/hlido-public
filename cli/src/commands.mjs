// commands.mjs — command handlers for the Hlido CLI.
// Each handler returns either a printable string (TTY mode) or a JSON-serializable
// object (when --json is set).

import {
  getRegistry,
  getScorecard,
  getAttestation,
  tierForScore,
  similarity,
  suggestSlugs,
  findItem,
  emitTelemetry,
  getUserAgent,
  scanMcp,
} from "./api.mjs";
import {
  renderCheck,
  renderSearch,
  renderCompare,
  renderTier,
  renderUnknown,
  renderRecommend,
  renderScan,
} from "./render.mjs";

// Wave 4.0 — recommendation API base. Override via HLIDO_API_BASE for staging.
const HLIDO_API_BASE = process.env.HLIDO_API_BASE || "https://hlido.eu/v1";

const VALID_TIERS = ["VITAL", "STEADY", "FADING", "FLATLINE"];

function deriveTier(scorecard, item) {
  const explicit = scorecard?.tier;
  if (explicit && VALID_TIERS.includes(String(explicit).toUpperCase())) {
    return String(explicit).toUpperCase();
  }
  const score = scorecard?.score ?? item?.score;
  return tierForScore(score);
}

export async function cmdCheck({ slug, json }) {
  const t0 = Date.now();
  if (!slug) {
    return { exitCode: 2, output: "hlido check: missing <slug> argument. Try `hlido help`." };
  }
  const registry = await getRegistry().catch(() => null);
  const item = registry ? findItem(registry, slug) : null;

  let scorecard = null;
  let attestation = null;
  let scorecardErr = null;

  try {
    scorecard = await getScorecard(slug);
  } catch (err) {
    scorecardErr = err;
  }

  if (!scorecard && !item) {
    emitTelemetry("check", { slug, ok: false, durationMs: Date.now() - t0 });
    const suggestions = registry ? suggestSlugs(registry, slug, 3) : [];
    if (json) {
      return {
        exitCode: 1,
        output: JSON.stringify(
          { ok: false, error: "not_found", slug, suggestions: suggestions.map((s) => s.slug) },
          null,
          2,
        ),
      };
    }
    return { exitCode: 1, output: renderUnknown({ slug, suggestions }) };
  }
  emitTelemetry("check", { slug, ok: true, durationMs: Date.now() - t0 });

  // We have at least registry data even if scorecard 404'd.
  if (scorecard) {
    try {
      attestation = await getAttestation(slug);
    } catch {
      attestation = null;
    }
    if (!scorecard.tier) scorecard.tier = deriveTier(scorecard, item);
  }

  if (json) {
    return {
      exitCode: 0,
      output: JSON.stringify(
        {
          ok: true,
          slug,
          item: item || null,
          scorecard: scorecard || null,
          scorecard_error: scorecardErr ? String(scorecardErr.message || scorecardErr) : null,
          attestation: attestation || null,
        },
        null,
        2,
      ),
    };
  }

  if (!scorecard) {
    // We have registry but no detail JSON yet — surface a useful summary.
    const lines = [];
    lines.push("");
    lines.push(`${item.name}  score ${item.score ?? "—"}  category ${item.category || "—"}`);
    if (item.summary) lines.push(item.summary);
    lines.push("");
    lines.push(`Detailed scorecard not yet published for "${slug}".`);
    lines.push(`Browse: https://hlido.eu${item.detailUrl || `/reviews/${slug}/`}`);
    lines.push("");
    return { exitCode: 0, output: lines.join("\n") };
  }

  return {
    exitCode: 0,
    output: renderCheck({ item, scorecard, attestation, slug }),
  };
}

export async function cmdSearch({ query, json }) {
  const t0 = Date.now();
  if (!query) {
    return { exitCode: 2, output: "hlido search: missing <text> argument. Try `hlido help`." };
  }
  const registry = await getRegistry();
  emitTelemetry("search", { ok: true, durationMs: Date.now() - t0 });
  const items = Array.isArray(registry?.items) ? registry.items : [];

  const scored = items
    .filter((it) => it.lane === "reviewed" || it.lane === "scoring")
    .map((it) => {
      const s =
        similarity(query, it.slug) * 1.2 +
        similarity(query, it.name) * 1.0 +
        similarity(query, it.category || "") * 0.6 +
        similarity(query, it.summary || "") * 0.4;
      return { ...it, _searchScore: s };
    })
    .filter((it) => it._searchScore > 0)
    .sort((a, b) => b._searchScore - a._searchScore || (b.score || 0) - (a.score || 0))
    .slice(0, 5)
    .map((it) => ({
      slug: it.slug,
      name: it.name,
      category: it.category,
      score: it.score,
      tier: tierForScore(it.score),
      summary: it.summary,
      reviewUrl: `https://hlido.eu${it.detailUrl || `/reviews/${it.slug}/`}`,
    }));

  if (json) {
    return {
      exitCode: 0,
      output: JSON.stringify({ ok: true, query, matches: scored }, null, 2),
    };
  }
  return { exitCode: 0, output: renderSearch({ query, matches: scored }) };
}

export async function cmdCompare({ slug1, slug2, json }) {
  const t0 = Date.now();
  emitTelemetry("compare", { slug: slug1 || null, ok: !!(slug1 && slug2), durationMs: Date.now() - t0 });
  if (!slug1 || !slug2) {
    return {
      exitCode: 2,
      output: "hlido compare: needs two slugs. Example: `hlido compare cursor aider`",
    };
  }
  const registry = await getRegistry().catch(() => null);
  const itemA = registry ? findItem(registry, slug1) : null;
  const itemB = registry ? findItem(registry, slug2) : null;

  const [scA, scB] = await Promise.all([
    getScorecard(slug1).catch(() => null),
    getScorecard(slug2).catch(() => null),
  ]);

  const missing = [];
  if (!scA && !itemA) missing.push(slug1);
  if (!scB && !itemB) missing.push(slug2);
  if (missing.length > 0) {
    if (json) {
      return {
        exitCode: 1,
        output: JSON.stringify({ ok: false, error: "not_found", missing }, null, 2),
      };
    }
    const sug = registry
      ? missing.flatMap((s) => suggestSlugs(registry, s, 2).map((x) => `${s} → ${x.slug}`))
      : [];
    return {
      exitCode: 1,
      output:
        `\nNo data for: ${missing.join(", ")}` +
        (sug.length ? `\nDid you mean: ${sug.join(", ")}` : "") +
        "\n",
    };
  }

  if (scA && !scA.tier) scA.tier = deriveTier(scA, itemA);
  if (scB && !scB.tier) scB.tier = deriveTier(scB, itemB);

  if (json) {
    return {
      exitCode: 0,
      output: JSON.stringify(
        {
          ok: true,
          a: { slug: slug1, item: itemA, scorecard: scA },
          b: { slug: slug2, item: itemB, scorecard: scB },
        },
        null,
        2,
      ),
    };
  }

  return {
    exitCode: 0,
    output: renderCompare({
      a: { slug: slug1, item: itemA, scorecard: scA },
      b: { slug: slug2, item: itemB, scorecard: scB },
    }),
  };
}

export async function cmdTier({ tier, json }) {
  const t0 = Date.now();
  emitTelemetry("search", { ok: true, durationMs: Date.now() - t0 });
  const t = String(tier || "").toUpperCase();
  if (!VALID_TIERS.includes(t)) {
    return {
      exitCode: 2,
      output: `hlido tier: tier must be one of ${VALID_TIERS.join(", ")}.`,
    };
  }
  const registry = await getRegistry();
  const items = Array.isArray(registry?.items) ? registry.items : [];

  const inTier = items
    .filter((it) => it.lane === "reviewed" && tierForScore(it.score) === t)
    .sort((a, b) => (b.score || 0) - (a.score || 0))
    .slice(0, 20)
    .map((it) => ({
      slug: it.slug,
      name: it.name,
      category: it.category,
      score: it.score,
      summary: it.summary,
      reviewUrl: `https://hlido.eu${it.detailUrl || `/reviews/${it.slug}/`}`,
    }));

  if (json) {
    return {
      exitCode: 0,
      output: JSON.stringify({ ok: true, tier: t, count: inTier.length, items: inTier }, null, 2),
    };
  }
  return { exitCode: 0, output: renderTier({ tier: t, items: inTier }) };
}

// ----- Wave 4.0 — `hlido recommend` --------------------------------------
//
// Calls the public /v1/recommend REST endpoint. Auth: HLIDO_API_KEY env var
// (optional — anonymous calls return top-1 free-tier results). The CLI is
// the SAME wire format any other agent would use, so this is also a smoke
// test for the public API.
//
// Usage:
//   hlido recommend "code review tool" --category Coding --k 5
//   HLIDO_API_KEY=hlk_live_... hlido recommend "voice agent" --json
export async function cmdRecommend({ need, category, k, json }) {
  const t0 = Date.now();
  if (!need) {
    return {
      exitCode: 2,
      output: "hlido recommend: missing <need> argument. Try `hlido help`.",
    };
  }
  const body = { need };
  const constraints = {};
  if (category) constraints.category = category;
  if (Object.keys(constraints).length) body.constraints = constraints;
  if (Number.isFinite(k) && k > 0) body.k = k;

  const headers = {
    "Content-Type": "application/json",
    // Wave 4 Item #2 — stable, attributable User-Agent so the recommend-API
    // rollup can split CLI traffic from generic node-fetch traffic.
    "User-Agent": getUserAgent(),
  };
  const apiKey = process.env.HLIDO_API_KEY;
  if (apiKey) headers["Authorization"] = `Bearer ${apiKey}`;

  let res;
  try {
    res = await fetch(`${HLIDO_API_BASE}/recommend`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });
  } catch (err) {
    if (json) {
      return {
        exitCode: 1,
        output: JSON.stringify({ ok: false, error: "network_error", detail: String(err.message || err) }, null, 2),
      };
    }
    return { exitCode: 1, output: `hlido recommend: network error (${err.message || err})` };
  }

  let payload;
  try {
    payload = await res.json();
  } catch {
    if (json) {
      return { exitCode: 1, output: JSON.stringify({ ok: false, error: "invalid_response" }, null, 2) };
    }
    return { exitCode: 1, output: "hlido recommend: invalid response from server" };
  }

  if (!res.ok) {
    if (json) {
      return { exitCode: 1, output: JSON.stringify({ ok: false, ...payload }, null, 2) };
    }
    const msg = payload?.error || `HTTP ${res.status}`;
    return { exitCode: 1, output: `hlido recommend: ${msg}` };
  }

  // Wave 4 Item #2 — emit AFTER the upstream recommend call so duration_ms
  // captures the full client-perceived latency. The /v1/recommend handler
  // already logs its own row; this row tracks CLI-side success.
  emitTelemetry("recommend", {
    slug: Array.isArray(payload?.results) && payload.results[0]?.slug ? payload.results[0].slug : null,
    ok: !!res.ok,
    durationMs: Date.now() - t0,
  });

  if (json) {
    return { exitCode: 0, output: JSON.stringify({ ok: true, ...payload }, null, 2) };
  }
  return { exitCode: 0, output: renderRecommend({ need, payload }) };
}

// ── audit — "npm audit for AI agents" (S1 hero play, 2026-07-02) ─────────────
// Scans the current project for AI-agent / MCP-server dependencies (package.json,
// MCP client configs, requirements.txt), matches them against the Hlido registry,
// and prints a trust table. Unrecognized entries are surfaced with a free-submit
// pointer (every miss is demand signal). Read-only; one registry fetch; no auth.

import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { homedir } from "node:os";

const MCP_CONFIG_PATHS = [
  ".mcp.json",
  ".cursor/mcp.json",
  ".vscode/mcp.json",
  ".gemini/settings.json",
  join(homedir(), ".claude.json"),
  join(homedir(), "Library/Application Support/Claude/claude_desktop_config.json"),
  join(homedir(), ".config/Claude/claude_desktop_config.json"),
];

function readJsonSafe(path) {
  try { return JSON.parse(readFileSync(path, "utf-8")); } catch { return null; }
}

// Heuristic: which package.json deps are agent/MCP-ish (vs ordinary libs)?
const AGENTISH = /(mcp|agent|copilot|llm|claude|openai|anthropic|autogen|crew|langchain|langgraph|aider|llama|gpt)/i;

export function collectAuditTargets(cwd = process.cwd()) {
  const targets = new Map(); // name -> { name, source }
  const add = (name, source) => {
    const key = String(name).toLowerCase();
    if (key && !targets.has(key)) targets.set(key, { name, source });
  };

  const pkg = readJsonSafe(join(cwd, "package.json"));
  for (const depType of ["dependencies", "devDependencies"]) {
    for (const dep of Object.keys(pkg?.[depType] || {})) {
      if (AGENTISH.test(dep)) add(dep, "package.json");
    }
  }

  const reqPath = join(cwd, "requirements.txt");
  if (existsSync(reqPath)) {
    try {
      for (const line of readFileSync(reqPath, "utf-8").split("\n")) {
        const name = line.split(/[=<>#\[ ]/)[0].trim();
        if (name && AGENTISH.test(name)) add(name, "requirements.txt");
      }
    } catch {}
  }

  for (const cfgPath of MCP_CONFIG_PATHS) {
    const full = cfgPath.startsWith("/") ? cfgPath : join(cwd, cfgPath);
    const cfg = readJsonSafe(full);
    if (!cfg) continue;
    const servers = cfg.mcpServers || cfg.servers || {};
    const label = cfgPath.replace(homedir(), "~");
    for (const [name, spec] of Object.entries(servers)) {
      add(name, label);
      // npx-launched servers: the package name is often more identifiable
      const args = Array.isArray(spec?.args) ? spec.args : [];
      const pkgArg = args.find((a) => typeof a === "string" && /^(@?[a-z0-9-]+\/)?[a-z0-9._-]+$/i.test(a) && !a.startsWith("-"));
      if (spec?.command === "npx" && pkgArg) add(pkgArg, label);
    }
    // claude.json nests per-project servers
    for (const proj of Object.values(cfg.projects || {})) {
      for (const name of Object.keys(proj?.mcpServers || {})) add(name, label);
    }
  }
  return [...targets.values()];
}

export function matchAuditTarget(registry, name) {
  const bare = name.replace(/^@/, "").replace(/\//g, "-");
  const exact = registry.items.find(
    (it) => it.slug === name || it.slug === bare || (it.name || "").toLowerCase() === name.toLowerCase(),
  );
  if (exact) return { item: exact, confidence: "exact" };
  let best = null;
  for (const it of registry.items) {
    const score = Math.max(similarity(bare, it.slug), similarity(bare, it.name || ""));
    if (!best || score > best.score) best = { it, score };
  }
  if (best && best.score >= 0.75) return { item: best.it, confidence: "fuzzy" };
  return null;
}

export async function cmdAudit({ json }) {
  const t0 = Date.now();
  const targets = collectAuditTargets();
  if (!targets.length) {
    const msg = "hlido audit: no AI-agent or MCP-server dependencies found (scanned package.json, requirements.txt, MCP client configs).";
    return { exitCode: 0, output: json ? JSON.stringify({ ok: true, targets: [] }, null, 2) : msg };
  }
  const registry = await getRegistry().catch(() => null);
  if (!registry) {
    return { exitCode: 1, output: json ? JSON.stringify({ ok: false, error: "registry_unreachable" }) : "hlido audit: could not reach the Hlido registry." };
  }

  const rows = [];
  let flagged = 0;
  for (const t of targets) {
    const m = matchAuditTarget(registry, t.name);
    if (!m) {
      rows.push({ name: t.name, source: t.source, status: "unreviewed" });
      continue;
    }
    const { item } = m;
    const tier = item.tier || tierForScore(item.score);
    const stale = item.staleness_after && item.staleness_after < new Date().toISOString().slice(0, 10);
    const flag = (item.score != null && item.score < 40) || stale;
    if (flag) flagged += 1;
    rows.push({
      name: t.name,
      source: t.source,
      status: "reviewed",
      slug: item.slug,
      score: item.score,
      tier,
      confidence: m.confidence,
      stale: !!stale,
      review: item.detailUrl ? `https://hlido.eu${item.detailUrl}` : `https://hlido.eu/check/?agent=${item.slug}`,
    });
  }
  emitTelemetry("audit", { ok: true, durationMs: Date.now() - t0 });

  if (json) {
    return { exitCode: flagged ? 1 : 0, output: JSON.stringify({ ok: true, flagged, targets: rows }, null, 2) };
  }

  const { c, tierBadge } = await import("./render.mjs");
  const lines = [];
  lines.push(c.bold(`hlido audit — ${rows.length} AI-agent/MCP dependencies found`));
  lines.push("");
  for (const r of rows) {
    if (r.status === "unreviewed") {
      lines.push(`  ${c.dim("○")} ${r.name} ${c.dim(`(${r.source})`)} — ${c.dim("unreviewed")} → submit free: https://hlido.eu/submit/`);
    } else {
      const mark = r.score >= 70 ? c.green("●") : r.score >= 40 ? c.yellow("●") : c.red("●");
      const staleNote = r.stale ? c.yellow(" [review stale — re-test due]") : "";
      const fuzzyNote = r.confidence === "fuzzy" ? c.dim(` (matched: ${r.slug})`) : "";
      lines.push(`  ${mark} ${r.name} ${c.dim(`(${r.source})`)} — ${tierBadge(r.tier)} ${r.score}${staleNote}${fuzzyNote}`);
      lines.push(`     ${c.dim(r.review)}`);
    }
  }
  lines.push("");
  const unreviewed = rows.filter((r) => r.status === "unreviewed").length;
  lines.push(c.dim(`${rows.length - unreviewed} reviewed · ${unreviewed} unreviewed · ${flagged} flagged`));
  lines.push(c.dim("Independent, evidence-backed scores — https://hlido.eu · add a badge: https://hlido.eu/docs/badges/"));
  return { exitCode: flagged ? 1 : 0, output: lines.join("\n") };
}

// MCP Trust Phase 2 (2026-07-04) — on-demand safety scan of ONE named MCP server,
// at the install moment. Calls the public scan_mcp MCP tool (server-side canonical
// analyzer + instrumentation): register hit → instant · HTTP endpoint → live static
// scan · stdio package → honest not_scanned + sandbox queue. failOn makes it a CI
// gate: exit 3 when the tier is at/above the threshold OR tool-poisoning is found.
const SEC_TIER_RANK = { CAUTION: 1, RISKY: 2, DANGEROUS: 3 };

export function scanGateTripped(result, failOn) {
  if (!failOn || !result) return false;
  if (result.tool_poisoning_detected) return true;
  const threshold = SEC_TIER_RANK[String(failOn).toUpperCase()];
  const got = SEC_TIER_RANK[String(result.security_tier || "").toUpperCase()];
  return !!(threshold && got && got >= threshold);
}

export async function cmdScan({ target, failOn, json }) {
  const t0 = Date.now();
  if (!target || !String(target).trim()) {
    const msg = "hlido scan: pass the MCP server to scan — an HTTP(S) MCP endpoint URL, an npm/PyPI package (e.g. '@modelcontextprotocol/server-filesystem'), or a GitHub repo URL.";
    return { exitCode: 2, output: json ? JSON.stringify({ ok: false, error: msg }) : msg };
  }
  if (failOn && !SEC_TIER_RANK[String(failOn).toUpperCase()]) {
    const msg = `hlido scan: invalid --fail-on '${failOn}' (use dangerous, risky, or caution).`;
    return { exitCode: 2, output: json ? JSON.stringify({ ok: false, error: msg }) : msg };
  }

  let result;
  try {
    result = await scanMcp(String(target).trim());
  } catch (err) {
    emitTelemetry("scan", { ok: false, durationMs: Date.now() - t0 });
    const msg = `hlido scan: ${err.message || err}`;
    return { exitCode: 1, output: json ? JSON.stringify({ ok: false, error: String(err.message || err) }) : msg };
  }
  emitTelemetry("scan", { ok: !!result.ok, durationMs: Date.now() - t0 });

  const tripped = scanGateTripped(result, failOn);
  const exitCode = result.malformed ? 2 : tripped ? 3 : 0;
  if (json) {
    return { exitCode, output: JSON.stringify({ ...result, gate_tripped: tripped }, null, 2) };
  }
  let output = renderScan({ target, result });
  if (tripped) output += `\n${`--fail-on ${failOn}`}: gate TRIPPED (${result.tool_poisoning_detected ? "tool-poisoning" : result.security_tier}) — exiting non-zero.\n`;
  return { exitCode, output };
}
