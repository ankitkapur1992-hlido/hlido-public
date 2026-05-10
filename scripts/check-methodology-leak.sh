#!/usr/bin/env bash
# scripts/check-methodology-leak.sh
#
# Defensive guard: fail when public-facing files leak Hlido methodology
# weights, the scoring formula, or rubric internals.
#
# Hlido's IP moat (per memory: feedback_methodology_private.md +
# feedback_huggingface_disclosure.md) requires that scoring weights, the
# Laddoo formula, and tier_skill_recipe internals stay PRIVATE. Public
# surfaces may reference high-level pillars and the public tier band names
# (VITAL/STEADY/FADING/FLATLINE with thresholds 90/70/40), but never the
# weights or the formula composition.
#
# This script is run both locally (`bash scripts/check-methodology-leak.sh`)
# and from the methodology-leak-guard GitHub Actions workflow.
#
# Exit codes:
#   0 — no leak found
#   1 — leak found (file:line printed to stdout)
#   2 — usage / setup error

set -u
set -o pipefail

# ---------------------------------------------------------------------------
# 0. Optional flags
#
# --quick: scan only a single review-page surface (used by publish-everywhere
#          per-slug fan-out). When set, the caller must pass --slug <slug>.
#          Falls back to a full scan if --slug missing.
# ---------------------------------------------------------------------------
QUICK_MODE=0
QUICK_SLUG=""
while [[ $# -gt 0 ]]; do
  case "$1" in
    --quick) QUICK_MODE=1; shift ;;
    --slug) QUICK_SLUG="${2:-}"; shift 2 ;;
    *) shift ;;
  esac
done

# ---------------------------------------------------------------------------
# 1. Resolve repo root (works whether invoked from repo root or from scripts/)
# ---------------------------------------------------------------------------
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"
cd "${REPO_ROOT}" || { echo "FATAL: cannot cd to repo root" >&2; exit 2; }

# ---------------------------------------------------------------------------
# 2. Public-facing surfaces to scan
#
# Anything served to a browser, npm, an MCP client, a 3rd-party Claude
# config, or a public attestation feed.
#
# Wave 4 surfaces explicitly in scope (defense-in-depth):
#   site/api/**                — public API landing
#   site/incidents/**          — public incident registry pages
#   site/vendor/**             — vendor portal (auth-gated, scanned anyway
#                                in case anything ever syncs to public)
#   attestations/incidents/**  — Wave 4.5 signed incident attestations
#                                (covered by the top-level "attestations"
#                                INCLUDE_PATHS entry)
# ---------------------------------------------------------------------------
INCLUDE_PATHS=(
  "site"
  "cli"
  "actions"
  "extension"
  "workers/mcp"
  "workers/recommend"
  "workers/incidents"
  "workers/auth"
  "workers/watchlists"
  "workers/vendor-portal"
  "workers/user-reviews"
  "attestations"
)

# Single-file public surfaces (loaded explicitly because they live at root)
INCLUDE_FILES=(
  "agents.json"
  "llms.txt"
  "agent-manifest.json"
)

# ---------------------------------------------------------------------------
# 3. Skip patterns (excluded even when nested under an INCLUDE path)
#
# site/internal/** is the local-only command center per CLAUDE.md.
# Tests and archives are not deployed.
# ---------------------------------------------------------------------------
EXCLUDE_DIRS=(
  "site/internal"
  "_archive"
  "brain"
  "proof-output"
  "tests"
  "test"
  "__tests__"
  "node_modules"
  ".git"
  "dist"
  "build"
  ".next"
  ".cache"
)

# ---------------------------------------------------------------------------
# 4. Forbidden token patterns (case-insensitive ERE)
#
# Each pattern is paired with a short label for the failure message.
# ---------------------------------------------------------------------------
PATTERNS=(
  "STRATEGIC_ALPHA_WEIGHT|CRAFT_SOUL_WEIGHT|EXECUTION_GRIT_WEIGHT|VALUE_SIGNAL_WEIGHT"
  "weight\\s*[:=]\\s*0?\\.[0-9]"
  "dimension_weights|dimensionWeights|DIMENSION_WEIGHTS"
  "rubric_internal|rubricInternal|RUBRIC_INTERNAL"
  "\\bSA\\s*[*x]\\s*0\\.35\\b|\\bC&S\\s*[*x]\\s*0\\.25\\b|\\bEG\\s*[*x]\\s*0\\.25\\b|\\bVS\\s*[*x]\\s*0\\.15\\b"
  "Laddoo\\s*=.*[*x]\\s*0\\.[0-9]"
  "tier_skill_recipe|tierSkillRecipe"
)

PATTERN_LABELS=(
  "named scoring weight constant"
  "numeric weight literal (e.g. 'weight: 0.35')"
  "dimension_weights map"
  "rubric_internal reference"
  "scoring formula factor (SA*0.35 / C&S*0.25 / EG*0.25 / VS*0.15)"
  "Laddoo formula in narrative form"
  "tier_skill_recipe reference"
)

# ---------------------------------------------------------------------------
# 5. Build grep --include / --exclude-dir argument arrays
# ---------------------------------------------------------------------------
GREP_EXCLUDES=()
for d in "${EXCLUDE_DIRS[@]}"; do
  GREP_EXCLUDES+=("--exclude-dir=${d##*/}")
done
# Exclude test files (they assert internal shapes do NOT leak — false positives)
GREP_EXCLUDES+=(
  "--exclude=*.test.*"
  "--exclude=*.spec.*"
  "--exclude=*_test.*"
  "--exclude=*_spec.*"
)
# Also exclude common binary file types that produce noise
GREP_EXCLUDES+=(
  "--exclude=*.png" "--exclude=*.jpg" "--exclude=*.jpeg" "--exclude=*.gif"
  "--exclude=*.webp" "--exclude=*.ico" "--exclude=*.svg"
  "--exclude=*.woff" "--exclude=*.woff2" "--exclude=*.ttf" "--exclude=*.eot"
  "--exclude=*.zip" "--exclude=*.gz" "--exclude=*.tgz"
  "--exclude=*.pdf"
  "--exclude=*.lock" "--exclude=package-lock.json" "--exclude=pnpm-lock.yaml"
)

# Build list of paths that actually exist on disk (don't pass missing dirs to grep)
SCAN_TARGETS=()
if [[ ${QUICK_MODE} -eq 1 && -n "${QUICK_SLUG}" ]]; then
  # --quick: scan only the just-rendered review page + its sanitized scorecard.
  # This is the per-slug fan-out path called from publish-everywhere.mjs.
  REVIEW_PAGE="site/reviews/${QUICK_SLUG}/index.html"
  SCORECARD_JSON="site/data/scorecards/${QUICK_SLUG}.json"
  if [[ -f "${REVIEW_PAGE}" ]]; then SCAN_TARGETS+=("${REVIEW_PAGE}"); fi
  if [[ -f "${SCORECARD_JSON}" ]]; then SCAN_TARGETS+=("${SCORECARD_JSON}"); fi
  if [[ ${#SCAN_TARGETS[@]} -eq 0 ]]; then
    echo "methodology-leak-guard: --quick --slug ${QUICK_SLUG} found no review surfaces (page or scorecard)" >&2
    exit 2
  fi
else
  for p in "${INCLUDE_PATHS[@]}"; do
    if [[ -d "${p}" ]]; then
      SCAN_TARGETS+=("${p}")
    fi
  done
  for f in "${INCLUDE_FILES[@]}"; do
    if [[ -f "${f}" ]]; then
      SCAN_TARGETS+=("${f}")
    fi
  done
fi

if [[ ${#SCAN_TARGETS[@]} -eq 0 ]]; then
  echo "methodology-leak-guard: no public surfaces found to scan (repo layout?)" >&2
  exit 2
fi

# ---------------------------------------------------------------------------
# 6. Allowlist post-filter
#
# Some intentional public references would otherwise match. We post-filter
# grep output through this allowlist before deciding fail/pass.
# ---------------------------------------------------------------------------
ALLOWLIST_REGEX='Methodology proprietary\. Independently verified\.|claim accuracy, feature delivery, reliability, pricing clarity|tier band: VITAL\|STEADY\|FADING\|FLATLINE'

# ---------------------------------------------------------------------------
# 7. Run grep for each pattern, collect matches, drop allowlisted lines
# ---------------------------------------------------------------------------
TMP_HITS="$(mktemp 2>/dev/null || mktemp -t methleak)"
trap 'rm -f "${TMP_HITS}"' EXIT

TOTAL_HITS=0
for i in "${!PATTERNS[@]}"; do
  pat="${PATTERNS[$i]}"
  label="${PATTERN_LABELS[$i]}"

  # -r recursive, -E extended regex, -n line numbers, -i case-insensitive,
  # -I skip binaries, -H always print filename
  matches="$(grep -rEniIH \
    "${GREP_EXCLUDES[@]}" \
    "${pat}" \
    "${SCAN_TARGETS[@]}" 2>/dev/null || true)"

  if [[ -z "${matches}" ]]; then
    continue
  fi

  # Drop allowlisted lines
  filtered="$(printf '%s\n' "${matches}" | grep -Ev "${ALLOWLIST_REGEX}" || true)"

  if [[ -z "${filtered}" ]]; then
    continue
  fi

  count="$(printf '%s\n' "${filtered}" | wc -l | tr -d ' ')"
  TOTAL_HITS=$((TOTAL_HITS + count))

  {
    echo ""
    echo "FORBIDDEN: ${label}"
    echo "  pattern: ${pat}"
    printf '%s\n' "${filtered}" | sed 's/^/  /'
  } >> "${TMP_HITS}"
done

# ---------------------------------------------------------------------------
# 8. Report
# ---------------------------------------------------------------------------
if [[ ${TOTAL_HITS} -eq 0 ]]; then
  echo "methodology-leak-guard: OK (scanned ${#SCAN_TARGETS[@]} target(s); no forbidden tokens found)"
  exit 0
fi

echo "methodology-leak-guard: FAILED — ${TOTAL_HITS} forbidden match(es) on public surfaces"
echo ""
cat "${TMP_HITS}"
echo ""
echo "Hlido methodology weights, the Laddoo formula, and rubric internals must"
echo "stay in private surfaces only (brain/, proof-output/, site/internal/)."
echo "See feedback_methodology_private.md + feedback_huggingface_disclosure.md."
exit 1
