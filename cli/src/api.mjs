// api.mjs — fetches public Hlido data with a 1-hour on-disk cache.
// Zero runtime dependencies. Uses Node 18+ built-in fetch + node:fs/path/os.
import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { fileURLToPath } from "node:url";

const REGISTRY_URL = "https://hlido.eu/data/review-registry.json";
const SCORECARD_URL = (slug) => `https://hlido.eu/data/scorecards/${slug}.json`;
const ATTESTATION_URL = (slug) => `https://hlido.eu/data/attestations/${slug}.json`;
const TELEMETRY_URL = "https://hlido.eu/v1/telemetry/event";

const CACHE_DIR = path.join(os.homedir(), ".hlido", "cache");
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour
const HTTP_TIMEOUT_MS = 15000;

// Read CLI version from package.json so the User-Agent stays in sync with
// `hlido --version`. Wave 4 Item #2 — distribution-surface attribution.
function readCliVersion() {
  try {
    const here = path.dirname(fileURLToPath(import.meta.url));
    const pkgPath = path.join(here, "..", "package.json");
    const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
    return pkg.version || "0.0.0";
  } catch {
    return "0.0.0";
  }
}

const CLI_VERSION = readCliVersion();
const USER_AGENT = `hlido-cli/${CLI_VERSION} (node; +https://hlido.eu)`;

function ensureCacheDir() {
  try {
    fs.mkdirSync(CACHE_DIR, { recursive: true });
  } catch {
    // best-effort; we'll fall back to network if we can't write
  }
}

function cachePath(name) {
  return path.join(CACHE_DIR, name);
}

function readCache(name, ttlMs = CACHE_TTL_MS) {
  try {
    const p = cachePath(name);
    const stat = fs.statSync(p);
    if (Date.now() - stat.mtimeMs > ttlMs) return null;
    return JSON.parse(fs.readFileSync(p, "utf8"));
  } catch {
    return null;
  }
}

function writeCache(name, data) {
  try {
    ensureCacheDir();
    fs.writeFileSync(cachePath(name), JSON.stringify(data));
  } catch {
    // best-effort
  }
}

async function fetchJSON(url, { timeoutMs = HTTP_TIMEOUT_MS } = {}) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(url, {
      signal: ctrl.signal,
      headers: { "user-agent": USER_AGENT, accept: "application/json" },
    });
    if (!res.ok) {
      const err = new Error(`HTTP ${res.status} for ${url}`);
      err.status = res.status;
      throw err;
    }
    // hlido.eu serves an HTML SPA fallback (HTTP 200) for missing JSON files.
    // Detect that and treat it as a 404 so the caller can recover gracefully.
    const ctype = res.headers.get("content-type") || "";
    const text = await res.text();
    if (!ctype.includes("json") && /^\s*<!DOCTYPE/i.test(text)) {
      const err = new Error(`Not JSON (HTML fallback) for ${url}`);
      err.status = 404;
      throw err;
    }
    try {
      return JSON.parse(text);
    } catch (parseErr) {
      const err = new Error(`Invalid JSON from ${url}: ${parseErr.message}`);
      err.status = 502;
      throw err;
    }
  } finally {
    clearTimeout(timer);
  }
}

export async function getRegistry({ force = false } = {}) {
  if (!force) {
    const cached = readCache("registry.json");
    if (cached) return cached;
  }
  const data = await fetchJSON(REGISTRY_URL);
  writeCache("registry.json", data);
  return data;
}

export async function getScorecard(slug) {
  return fetchJSON(SCORECARD_URL(slug));
}

export async function getAttestation(slug) {
  try {
    return await fetchJSON(ATTESTATION_URL(slug));
  } catch (err) {
    if (err.status === 404) return null;
    throw err;
  }
}

// Tier derivation per Hlido canonical taxonomy: 90/70/40 thresholds.
// VITAL >= 90, STEADY 70-89, FADING 40-69, FLATLINE < 40.
export function tierForScore(score) {
  if (typeof score !== "number" || Number.isNaN(score)) return "UNRANKED";
  if (score >= 90) return "VITAL";
  if (score >= 70) return "STEADY";
  if (score >= 40) return "FADING";
  return "FLATLINE";
}

// Token-similarity for fuzzy slug suggestions and search.
// Splits both sides on non-alphanumerics, lowercases, returns Jaccard-ish overlap.
function tokenize(s) {
  return String(s || "")
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter(Boolean);
}

export function similarity(a, b) {
  const ta = new Set(tokenize(a));
  const tb = new Set(tokenize(b));
  if (ta.size === 0 || tb.size === 0) return 0;
  let overlap = 0;
  for (const t of ta) if (tb.has(t)) overlap += 1;
  // Bias towards substring containment too — helps single-token queries.
  const aStr = tokenize(a).join(" ");
  const bStr = tokenize(b).join(" ");
  let bonus = 0;
  if (aStr && bStr) {
    if (bStr.includes(aStr) || aStr.includes(bStr)) bonus = 0.5;
  }
  return overlap / Math.max(ta.size, tb.size) + bonus;
}

export function suggestSlugs(registry, query, n = 3) {
  const items = Array.isArray(registry?.items) ? registry.items : [];
  const scored = items
    .map((it) => ({
      slug: it.slug,
      name: it.name,
      score: similarity(query, it.slug) + similarity(query, it.name) * 0.7,
    }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score);
  return scored.slice(0, n);
}

export function findItem(registry, slug) {
  const items = Array.isArray(registry?.items) ? registry.items : [];
  return items.find((it) => it.slug === slug) || null;
}

// Wave 4 Item #2 — exported for callers that build their own fetch headers
// (e.g. cmdRecommend hits the recommend API directly, not via fetchJSON).
export function getUserAgent() {
  return USER_AGENT;
}

// MCP Trust Phase 2 (2026-07-04) — `hlido scan` calls the public scan_mcp MCP
// tool rather than scanning locally: ONE canonical analyzer (server-side), and
// every scan invocation is instrumented as real demand. No cache — a scan is a
// point-of-use safety question; the server does its own return-fast caching.
const MCP_ENDPOINT = "https://hlido.eu/mcp";

export async function scanMcp(server, { timeoutMs = 30000 } = {}) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(MCP_ENDPOINT, {
      method: "POST",
      signal: ctrl.signal,
      headers: { "content-type": "application/json", accept: "application/json", "user-agent": USER_AGENT },
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: 1,
        method: "tools/call",
        params: { name: "scan_mcp", arguments: { server, requester: "hlido-cli" } },
      }),
    });
    if (!res.ok) {
      const err = new Error(`HTTP ${res.status} from ${MCP_ENDPOINT}`);
      err.status = res.status;
      throw err;
    }
    const rpc = await res.json();
    if (rpc.error) throw new Error(`scan_mcp error: ${rpc.error.message || JSON.stringify(rpc.error)}`);
    const text = rpc.result?.content?.[0]?.text;
    if (!text) throw new Error("scan_mcp returned no content");
    return JSON.parse(text);
  } finally {
    clearTimeout(timer);
  }
}

// Wave 4 Item #2 — anonymous fire-and-forget distribution-surface event.
// Never throws, never blocks the main command. Server is rate-limited to
// 60/min per IP-hash; we don't await the response. Disable entirely by
// setting HLIDO_TELEMETRY=0 in the environment.
export function emitTelemetry(event, { slug, ok = true, durationMs } = {}) {
  if (process.env.HLIDO_TELEMETRY === "0") return;
  const body = JSON.stringify({
    surface: "cli",
    version: CLI_VERSION,
    event: event || "other",
    slug: slug || undefined,
    ok: !!ok,
    duration_ms: typeof durationMs === "number" ? Math.max(0, Math.floor(durationMs)) : undefined,
  });
  // Fire-and-forget. Never await. AbortController gives us a 1s ceiling so a
  // slow network never delays CLI exit. Errors swallowed.
  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 1000);
    fetch(TELEMETRY_URL, {
      method: "POST",
      headers: { "content-type": "application/json", "user-agent": USER_AGENT },
      body,
      signal: ctrl.signal,
    })
      .catch(() => {})
      .finally(() => clearTimeout(timer));
  } catch {
    // never break CLI on telemetry
  }
}

export const _internal = {
  REGISTRY_URL,
  SCORECARD_URL,
  ATTESTATION_URL,
  TELEMETRY_URL,
  CLI_VERSION,
  USER_AGENT,
  CACHE_DIR,
  CACHE_TTL_MS,
};
