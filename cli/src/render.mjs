// render.mjs — TTY-aware ANSI rendering for the Hlido CLI.
// Zero deps. Color disabled when stdout is not a TTY, when NO_COLOR is set,
// or when --no-color is passed.

const TTY = !!process.stdout.isTTY && !process.env.NO_COLOR;

function wrap(open, close) {
  return (s) => (TTY ? `\x1b[${open}m${s}\x1b[${close}m` : String(s));
}

// Inline ANSI codes — 4 base colors + bold/dim, per spec.
export const c = {
  red: wrap(31, 39),
  green: wrap(32, 39),
  yellow: wrap(33, 39),
  blue: wrap(34, 39),
  bold: wrap(1, 22),
  dim: wrap(2, 22),
};

export function tierBadge(tier) {
  const t = String(tier || "").toUpperCase();
  switch (t) {
    case "VITAL":
      return c.green(c.bold("[VITAL]"));
    case "STEADY":
      return c.blue(c.bold("[STEADY]"));
    case "FADING":
      return c.yellow(c.bold("[FADING]"));
    case "FLATLINE":
      return c.red(c.bold("[FLATLINE]"));
    case "UNRANKED":
      return c.dim("[UNRANKED]");
    default:
      return c.dim(`[${t || "UNRANKED"}]`);
  }
}

export function verdictGlyph(verdict) {
  const v = String(verdict || "").toLowerCase();
  if (v === "pass") return c.green("PASS");
  if (v === "fail") return c.red("FAIL");
  if (v === "partial_pass" || v === "partial") return c.yellow("PART");
  if (v === "skipped" || v === "skip") return c.dim("SKIP");
  return c.dim((v || "?").toUpperCase().slice(0, 4));
}

export function formatScore(score) {
  if (typeof score !== "number" || Number.isNaN(score)) return c.dim("--");
  if (score >= 90) return c.green(c.bold(String(score)));
  if (score >= 70) return c.blue(c.bold(String(score)));
  if (score >= 40) return c.yellow(c.bold(String(score)));
  return c.red(c.bold(String(score)));
}

// Coerce a possibly-non-string field (registry summary may be string OR dict
// per Hlido's documented field-shape gotchas). Strings pass through; objects
// are stringified by joining their string-typed values; everything else falls
// back to "".
function coerceText(v) {
  if (v == null) return "";
  if (typeof v === "string") return v;
  if (typeof v === "number" || typeof v === "boolean") return String(v);
  if (Array.isArray(v)) return v.filter((x) => typeof x === "string").join(" ");
  if (typeof v === "object") {
    const parts = [];
    for (const val of Object.values(v)) {
      if (typeof val === "string") parts.push(val);
    }
    return parts.join(" ");
  }
  return "";
}

// Truncate to n chars, single-line, ellipsis if cut. Tolerates dict summaries.
export function truncate(s, n) {
  const str = coerceText(s).replace(/\s+/g, " ").trim();
  if (str.length <= n) return str;
  return str.slice(0, Math.max(0, n - 1)) + "…";
}

// Render the `check` command output.
export function renderCheck({ item, scorecard, attestation, slug }) {
  const lines = [];
  const name = scorecard?.name || item?.name || slug;
  const score = scorecard?.score ?? item?.score;
  const tier = scorecard?.tier; // tier derivation done in commands.mjs if missing
  const category = scorecard?.category || item?.category || "—";
  const reviewedAt = scorecard?.reviewed_at || item?.publishedAt || item?.updatedAt || "—";
  const reviewUrl = scorecard?.review_url || `https://hlido.eu/reviews/${slug}/`;
  const summary = scorecard?.summary || item?.summary || "";

  lines.push("");
  lines.push(`${c.bold(name)}  ${tierBadge(tier)}  ${c.dim("score")} ${formatScore(score)}`);
  lines.push(`${c.dim("category")} ${category}    ${c.dim("reviewed")} ${reviewedAt}`);
  if (summary) lines.push(c.dim(truncate(summary, 200)));
  lines.push("");

  const claims = Array.isArray(scorecard?.claims) ? scorecard.claims.slice(0, 5) : [];
  if (claims.length > 0) {
    lines.push(c.bold(`Top ${claims.length} claim${claims.length === 1 ? "" : "s"}`));
    for (const claim of claims) {
      const id = c.dim(truncate(claim.id || "—", 28).padEnd(28));
      const v = verdictGlyph(claim.verdict);
      const text = truncate(claim.claim || "", 90);
      lines.push(`  ${v}  ${id} ${text}`);
    }
    lines.push("");
  }

  const passing = scorecard?.required_items_passing;
  const total = scorecard?.required_items_total;
  if (typeof passing === "number" && typeof total === "number") {
    lines.push(`${c.dim("required passing")} ${passing}/${total}`);
  }
  lines.push(`${c.dim("review")} ${c.blue(reviewUrl)}`);
  if (attestation) {
    const attUrl = `https://hlido.eu/data/attestations/${slug}.json`;
    const sig = attestation.signature ? truncate(attestation.signature, 16) : "—";
    lines.push(`${c.dim("attestation")} ${c.blue(attUrl)}  ${c.dim("sig")} ${sig}`);
  } else {
    lines.push(c.dim("attestation  not available for this slug"));
  }
  lines.push("");
  return lines.join("\n");
}

// Render `search` results.
export function renderSearch({ query, matches }) {
  const lines = [];
  lines.push("");
  lines.push(`${c.bold("hlido search")}  ${c.dim("query")} ${query}`);
  if (matches.length === 0) {
    lines.push("");
    lines.push(c.yellow("No matches."));
    lines.push("");
    return lines.join("\n");
  }
  lines.push("");
  for (const m of matches) {
    const score = formatScore(m.score);
    const tier = tierBadge(m.tier);
    const cat = c.dim(truncate(m.category || "—", 14).padEnd(14));
    const slug = c.bold(truncate(m.slug, 22).padEnd(22));
    const summary = truncate(m.summary || m.name || "", 70);
    lines.push(`  ${score.padStart ? "" : ""}${tier}  ${slug} ${cat} ${summary}`);
  }
  lines.push("");
  return lines.join("\n");
}

// Render `compare` between two slugs.
export function renderCompare({ a, b }) {
  const lines = [];
  lines.push("");
  lines.push(`${c.bold("hlido compare")}  ${a.scorecard?.name || a.slug}  vs  ${b.scorecard?.name || b.slug}`);
  lines.push("");

  const aScore = a.scorecard?.score ?? a.item?.score;
  const bScore = b.scorecard?.score ?? b.item?.score;
  const aTier = a.scorecard?.tier;
  const bTier = b.scorecard?.tier;

  // Header row
  const colA = (a.scorecard?.name || a.slug);
  const colB = (b.scorecard?.name || b.slug);
  const padCol = 28;
  lines.push(`  ${c.dim("dimension".padEnd(20))}  ${truncate(colA, padCol).padEnd(padCol)}  ${truncate(colB, padCol)}`);
  lines.push(`  ${c.dim("─".repeat(20))}  ${c.dim("─".repeat(padCol))}  ${c.dim("─".repeat(padCol))}`);

  // Score
  lines.push(`  ${"score".padEnd(20)}  ${String(aScore ?? "—").padEnd(padCol)}  ${bScore ?? "—"}`);
  lines.push(`  ${"tier".padEnd(20)}  ${tierBadge(aTier).padEnd(padCol + 9)}  ${tierBadge(bTier)}`);
  lines.push(`  ${"category".padEnd(20)}  ${truncate(a.scorecard?.category || a.item?.category || "—", padCol).padEnd(padCol)}  ${truncate(b.scorecard?.category || b.item?.category || "—", padCol)}`);
  lines.push(`  ${"engine".padEnd(20)}  ${truncate(a.scorecard?.engine || "—", padCol).padEnd(padCol)}  ${truncate(b.scorecard?.engine || "—", padCol)}`);
  lines.push(`  ${"reviewed".padEnd(20)}  ${truncate(a.scorecard?.reviewed_at || a.item?.publishedAt || "—", padCol).padEnd(padCol)}  ${truncate(b.scorecard?.reviewed_at || b.item?.publishedAt || "—", padCol)}`);

  // required passing
  const aReq = (typeof a.scorecard?.required_items_passing === "number" && typeof a.scorecard?.required_items_total === "number")
    ? `${a.scorecard.required_items_passing}/${a.scorecard.required_items_total}` : "—";
  const bReq = (typeof b.scorecard?.required_items_passing === "number" && typeof b.scorecard?.required_items_total === "number")
    ? `${b.scorecard.required_items_passing}/${b.scorecard.required_items_total}` : "—";
  lines.push(`  ${"required passing".padEnd(20)}  ${aReq.padEnd(padCol)}  ${bReq}`);

  // Per-claim verdicts (matched by claim.id)
  const aClaims = Array.isArray(a.scorecard?.claims) ? a.scorecard.claims : [];
  const bClaims = Array.isArray(b.scorecard?.claims) ? b.scorecard.claims : [];
  const ids = new Set([...aClaims.map((cl) => cl.id), ...bClaims.map((cl) => cl.id)]);
  if (ids.size > 0) {
    lines.push("");
    lines.push(c.bold("  per-claim verdicts (matched by id)"));
    for (const id of ids) {
      const av = aClaims.find((cl) => cl.id === id);
      const bv = bClaims.find((cl) => cl.id === id);
      const idCol = c.dim(truncate(id, 20).padEnd(20));
      lines.push(`  ${idCol}  ${verdictGlyph(av?.verdict).padEnd(padCol + 9)}  ${verdictGlyph(bv?.verdict)}`);
    }
  }

  lines.push("");
  return lines.join("\n");
}

// Render `tier` results.
export function renderTier({ tier, items }) {
  const lines = [];
  lines.push("");
  lines.push(`${c.bold("hlido tier")}  ${tierBadge(tier)}  ${c.dim("top")} ${items.length}`);
  lines.push("");
  if (items.length === 0) {
    lines.push(c.yellow(`No reviews currently in ${tier}.`));
    lines.push("");
    return lines.join("\n");
  }
  for (const it of items) {
    const score = formatScore(it.score);
    const cat = c.dim(truncate(it.category || "—", 14).padEnd(14));
    const slug = c.bold(truncate(it.slug, 24).padEnd(24));
    const summary = truncate(it.summary || it.name || "", 70);
    lines.push(`  ${score}  ${slug} ${cat} ${summary}`);
  }
  lines.push("");
  return lines.join("\n");
}

export function renderUnknown({ slug, suggestions }) {
  const lines = [];
  lines.push("");
  lines.push(c.yellow(`No review found for slug "${slug}".`));
  if (suggestions.length > 0) {
    lines.push("");
    lines.push(c.dim("Did you mean:"));
    for (const s of suggestions) {
      lines.push(`  • ${c.bold(s.slug)}  ${c.dim(s.name || "")}`);
    }
  }
  lines.push("");
  lines.push(c.dim(`Browse all reviews at https://hlido.eu/reviews/`));
  lines.push("");
  return lines.join("\n");
}

export function renderRecommend({ need, payload }) {
  const lines = [];
  const results = Array.isArray(payload?.results) ? payload.results : [];
  lines.push("");
  lines.push(`${c.bold("hlido recommend")}  ${c.dim("need:")} ${truncate(need, 60)}`);
  if (payload?.tier_note) {
    lines.push(c.dim(payload.tier_note));
  }
  lines.push("");
  if (results.length === 0) {
    lines.push(c.yellow("No matches under your constraints."));
    lines.push(c.dim("Try a broader query, or `hlido tier STEADY` to browse."));
    lines.push("");
    return lines.join("\n");
  }
  for (const r of results) {
    const score = formatScore(r.score);
    const tier = tierBadge(r.tier);
    const slug = c.bold(truncate(r.slug || "", 24).padEnd(24));
    const cat = c.dim(truncate(r.category || "—", 14).padEnd(14));
    lines.push(`  ${score}  ${tier}  ${slug} ${cat}`);
    if (r.rationale) {
      lines.push(`        ${c.dim(truncate(r.rationale, 100))}`);
    }
    if (r.evidence_url) {
      lines.push(`        ${c.dim("→")} ${r.evidence_url}`);
    }
  }
  lines.push("");
  if (payload?.request_id) {
    lines.push(c.dim(`request_id: ${payload.request_id}  model: ${payload.model_version || "wave4-v1"}`));
    lines.push("");
  }
  return lines.join("\n");
}

// MCP Trust Phase 2 — safety-tier badge for `hlido scan` (distinct taxonomy
// from review tiers: blast radius if hijacked, not overall quality).
export function securityTierBadge(tier) {
  const t = String(tier || "").toUpperCase();
  switch (t) {
    case "SAFE":
      return c.green(c.bold("[SAFE]"));
    case "CAUTION":
      return c.yellow(c.bold("[CAUTION]"));
    case "RISKY":
      return c.red(c.bold("[RISKY]"));
    case "DANGEROUS":
      return c.red(c.bold("[DANGEROUS]"));
    case "NOT_SCANNED":
      return c.dim("[NOT SCANNED]");
    default:
      return c.dim(`[${t || "UNKNOWN"}]`);
  }
}

export function renderScan({ target, result }) {
  const r = result || {};
  const out = [""];
  const title = r.name || r.slug || target;

  if (r.status === "not_scanned_queued") {
    out.push(`${securityTierBadge("NOT_SCANNED")} ${c.bold(title)}`);
    out.push("");
    out.push(`  ${c.yellow("This is a local (stdio) MCP server — installing it executes its code.")}`);
    out.push(`  Hlido scans these only in an isolated sandbox. ${c.bold("Queued")} — the verdict`);
    out.push(`  lands in the public register, typically within 24h.`);
    out.push("");
    out.push(`  ${c.dim("Until then treat it as UNKNOWN — never assume an unscanned server is safe.")}`);
    out.push(`  ${c.dim("Check back:")} ${r.register_url || "https://hlido.eu/mcp/"}`);
    out.push("");
    return out.join("\n");
  }

  if (r.status === "unreachable" || r.ok === false) {
    out.push(`${securityTierBadge("UNKNOWN")} ${c.bold(title)}`);
    out.push("");
    out.push(`  ${c.red(r.error || "scan failed")}`);
    if (r.queued) out.push(`  Queued for a full sandbox scan — check ${r.register_url || "https://hlido.eu/mcp/"} later.`);
    out.push("");
    return out.join("\n");
  }

  const src =
    r.source === "register" ? "Hlido register (full sandbox scan)" :
    r.source === "live_scan_cached" ? "live scan (cached <24h)" : "live scan (just now)";
  out.push(`${securityTierBadge(r.security_tier)} ${c.bold(title)}  ${formatScore(r.security_score)}${c.dim("/100 safety")}`);
  out.push(`  ${c.dim("source:")} ${src}${r.as_of ? c.dim(`  ·  as of ${String(r.as_of).slice(0, 10)}`) : ""}`);
  out.push("");

  if (r.tool_poisoning_detected) {
    out.push(`  ${c.red(c.bold("⚠ TOOL-POISONING DETECTED"))} — hidden instructions in tool descriptions. ${c.bold("Do not install.")}`);
    out.push("");
  }

  const caps = r.dangerous_capabilities || [];
  if (caps.length) {
    out.push(`  ${c.bold("Dangerous capabilities:")} ${caps.join(", ")}`);
  }
  // no_auth only matters when dangerous tools exist (the analyzer's own rule) —
  // an unauthenticated read-only server is not a red line.
  if (r.no_auth && caps.length) {
    out.push(`  ${c.red("No authentication")} — dangerous tools reachable by anyone.`);
  }
  if (typeof r.tools_advertised === "number") {
    const rel = typeof r.tool_error_rate === "number" ? `  ·  tool error rate ${(r.tool_error_rate * 100).toFixed(0)}%` : "";
    out.push(`  ${c.dim(`${r.tools_advertised} tools advertised${rel}`)}`);
  }

  const findings = (r.findings || []).slice(0, 8);
  if (findings.length) {
    out.push("");
    out.push(`  ${c.dim("Red-flags (evidence):")}`);
    for (const f of findings) {
      const sev = f.sev === "critical" ? c.red(f.sev) : f.sev === "high" ? c.yellow(f.sev) : c.dim(f.sev);
      out.push(`    ${sev}  ${f.tool ? `${c.bold(f.tool)}: ` : ""}${f.why}`);
    }
    if ((r.findings || []).length > 8) out.push(`    ${c.dim(`… ${(r.findings || []).length - 8} more (see evidence URL)`)}`);
  } else if (r.security_tier === "SAFE") {
    out.push(`  ${c.green("No red-flags across advertised tools.")}`);
  }

  out.push("");
  out.push(`  ${c.dim("How to read this: tier = blast radius if hijacked, not maintainer trust.")}`);
  if (r.evidence_url) out.push(`  ${c.dim("Evidence:")} ${r.evidence_url.startsWith("http") ? r.evidence_url : `https://hlido.eu${r.evidence_url}`}`);
  out.push(`  ${c.dim("Register:")} ${r.register_url || "https://hlido.eu/mcp/"}`);
  out.push("");
  return out.join("\n");
}

export function renderHelp() {
  const lines = [
    "",
    `${c.bold("hlido")}  independent, evidence-backed scorecards for AI agents`,
    "",
    `${c.dim("Usage:")} hlido <command> [args] [--json] [--no-color]`,
    "",
    `${c.dim("Commands:")}`,
    `  ${c.bold("check <slug>")}                scorecard, top claims, links`,
    `  ${c.bold("search <text>")}               top 5 matches by name/category/summary`,
    `  ${c.bold("compare <slug1> <slug2>")}     side-by-side dimensions + verdicts`,
    `  ${c.bold("tier <VITAL|STEADY|FADING|FLATLINE>")}   top 20 in tier`,
    `  ${c.bold("recommend <need>")}            constraint-driven shortlist via REST`,
    `  ${c.bold("audit")}                       scan project agent/MCP deps for trust issues`,
    `  ${c.bold("scan <mcp-server>")}           on-demand safety scan of an MCP server (URL,`,
    `                              npm/PyPI package, or repo) BEFORE you install it`,
    `  ${c.bold("help")}                        this message`,
    "",
    `${c.dim("Flags:")}`,
    `  --json        machine-readable output`,
    `  --fail-on <dangerous|risky|caution>   scan: non-zero exit at/above this`,
    `                tier or on tool-poisoning (CI gate; default: report only)`,
    `  --no-color    disable ANSI colors`,
    `  --version     print version and exit`,
    `  --help        this message`,
    "",
    `${c.dim("Data source:")} https://hlido.eu  (1-hour local cache in ~/.hlido/cache/)`,
    `${c.dim("License:")} MIT`,
    "",
  ];
  return lines.join("\n");
}
