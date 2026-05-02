---
name: hlido-batch-review
description: Run a Hlido N-agent batch review pipeline end-to-end (engine + publish + 4-destination verification). Use when the founder asks to "review N agents", "scale up to N more reviews", or "run another N through the pipeline". The skill orchestrates from this side using GH artifact-download access (bypassing the routine→Azure-blob constraint), keeps Buffer disabled by default, batches at concurrency 3, and reports throughput + ETA. Proven path that shipped 50 new reviews in ~3.6h on 2026-05-01.
when_to_invoke: User says "do another N reviews", "scale up to N", "run the pipeline for N more", "review N more agents". Also triggers on review count goals — "I want to be at 100 published".
do_not_invoke: When the user wants a single specific agent reviewed (use direct dispatch instead). When the engine itself is broken (diagnose first). When less than 5 candidates remain in Notion + on-disk preanalyses (do scout-enrich first).
---

# Hlido batch-review skill

This skill runs a parametric Hlido review batch end-to-end from a Claude Code
session, bypassing the Anthropic routine path (R1→R2→R3) which hits an
Azure-blob allowlist constraint when downloading GHA artifacts.

## Why this exists

The Anthropic routine pipeline (R1 hlido-intake → R2 hlido-process → R3
hlido-publish) is the production path for daily-cadence single-agent reviews.
But for **bulk batches** (20–100 reviews in one session), the routine path is:

- Slow (1 agent/hour cron cap on engine-cron.yml)
- Fragile (R2 can't download GH artifacts because Azure blob is not in the
  routine session network allowlist; routines fall back to "engine_unavailable"
  HALT)
- Throttled by Anthropic routine concurrency

A Claude Code session has GH artifact download access AND can drive the engine
locally via `scripts/batch-process-pending.mjs` at concurrency 3. That's the
fast path this skill encodes.

## Inputs

The user provides a target count N (e.g. "review 50 more agents"). If they
don't specify, default N=20 (a single afternoon's work).

## Preconditions to check first

Before starting, this skill MUST verify:

1. Founder is not asking during a deploy freeze or paused-pipeline state.
   Check `brain/pipeline-state/status.json` — if `status=HOLD`, ask before
   proceeding.
2. The Notion Hlido Agent Review Grid has untested rows or the on-disk
   `brain/pipeline-state/` has unconsumed preanalyses. If neither, run
   scout-enrichment first (or fall back to known-agent stubs).
3. Required env vars are accessible (in this session's shell or available via
   the founder's secrets):
   - `GH_TOKEN` (write on `ankitkapur1992-hlido/hlido-reviews`)
   - `OPENAI_API_KEY`
   - `HF_TOKEN`
   - `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`, `CLOUDFLARE_KV_NAMESPACE_ID`
   - `R2_ACCESS_KEY_ID`, `R2_SECRET_ACCESS_KEY`
   - `FIRECRAWL_API_KEY`
   - **NOT** `BUFFER_TOKEN` — keep social posting OFF during batch (1-per-day
     cadence, founder explicitly rejected dumping N posts in a row)

## High-level loop

```
1. Read site/data/review-registry.json — count current reviewed
2. Compute target = current + N
3. Search Notion grid for candidate slugs (queries: "agent", "AI",
   "automation", "code", "sales", "writer", "research", "build")
4. For each unique candidate:
   - Check brain/pipeline-state/{slug}/preanalysis.json — if missing,
     stub it (see stub format below)
   - Check brain/pipeline-state/{slug}/test-checklist.json — must use
     "checklist" key (not "claims") with [{id,task,required}] items
5. Dispatch in batches of 6-10 via:
     node scripts/batch-process-pending.mjs --slugs s1,s2,...,sN
   (concurrency 3 by default; bump only if quotas allow)
6. After each batch: commit + push + verify CF Pages deploy lands
7. Run scripts/check-50run-status.mjs for ETA + per-destination status
8. Loop until current_reviewed >= target
9. Report: throughput/h, ETA, completed slugs, failures + cause
```

## Stub format (when scout-enrichment isn't needed)

For slugs already on Notion with a known URL, write a minimal preanalysis +
checklist. The engine firecrawls the URL itself and produces the verdict.

```json
brain/pipeline-state/{slug}/preanalysis.json
{
  "slug": "{slug}",
  "name": "{display name}",
  "agent_url": "{verified URL}",
  "url": "{same as agent_url}",
  "category": "AI Agent",
  "access_type": "web_ui",
  "auth_required": false,
  "tier_hint": "T1",
  "candidate_score": 50,
  "scout_source": "Claude bulk batch",
  "scout_date": "{YYYY-MM-DD}",
  "enriched_at": "{ISO}",
  "cleaned_text": "{1-2 sentences from the agent's homepage}",
  "pricing_signals": "TBD",
  "scoring_hypothesis": "Public-surface review of {name}",
  "has_server_card": false,
  "server_card_contents": null
}
```

```json
brain/pipeline-state/{slug}/test-checklist.json
{
  "slug": "{slug}",
  "agent_url": "{URL}",
  "tier": "T1",
  "generated_at": "{ISO}",
  "checklist": [
    {"id":"C01","task":"Homepage publicly accessible and value proposition clearly stated","required":true},
    {"id":"C02","task":"Pricing page discoverable in 2 clicks from homepage","required":true},
    {"id":"C03","task":"Documentation or live demo accessible without login","required":true},
    {"id":"C04","task":"Integration list or supported frameworks documented","required":true},
    {"id":"C05","task":"Authentication / data handling claims publicly stated","required":false}
  ]
}
```

**CRITICAL field names**:
- `agent_url` (NOT `url` alone — batch-process script checks `agent_url`)
- `checklist` (NOT `claims` — public-surface engine looks for `checklist|checks|claims_to_verify`)

## Known failure patterns + fixes

| Pattern | Cause | Fix |
|---|---|---|
| `engine_fail (0.1s)` for entire batch | Wrong checklist key (probably `claims`) | Patch all to `checklist` and re-dispatch |
| `engine_fail (1-2s)` for one slug | Bad URL guess (DNS or 404) | Re-fetch the agent's Notion page for verified Agent URL, or skip |
| `engine_fail` Cloudflare bot | Site has aggressive bot protection (e.g. stanleyforx.com) | Mark as needs T2 path, skip in T1 batches |
| `auth_required=true` slugs | Login wall — public-surface can't verify | Skip in T1, queue for T2 batch |
| HF dataset stale | publish-everywhere `hf` step skipping | Verify HF_TOKEN env, re-run with `--steps hf` |
| Public repo missing scorecards | Legacy slug predates per-slug scorecard | Accept as legacy partial, don't try to backfill |
| Screenshots show as broken images | `screenshots-r2.json` manifest written AFTER page rebuilt | Verified fixed 2026-05-01: r2 step now runs BEFORE page in publish-everywhere main runner |

## Ethics + safety

- **No fabricated reviews**: if the engine can't reach the agent's URL or get
  meaningful evidence, the slug fails — never invent a scorecard.
- **No social posts during batch**: keep BUFFER_TOKEN unset. The deferred-queue
  builder (`scripts/build-buffer-deferred-queue.mjs`) generates drafts for
  manual review post-batch.
- **Notion writes are best-effort**: never halt a batch on a Notion API
  failure; log + continue.

## Reporting cadence (per memory feedback_ceo_mode)

Every 2-3 batches, report:
- N published this session / target
- Throughput (reviews/hour)
- ETA to target
- Latest 5 slugs published with score + tier
- Any new failure patterns

After completing N, run `scripts/check-50run-status.mjs` to confirm 4-destination
deployment (website, GitHub public, MCP, HuggingFace) for each new slug.

## Where the orchestration lives

- Engine: `scripts/batch-process-pending.mjs` (concurrency-3 looped publish)
- Status: `scripts/check-50run-status.mjs` (4-destination check + ETA)
- Generator: `scripts/regenerate-review-registry-js.mjs` (auto-runs in publish step)
- HF backfill: `scripts/hlido_hf_push.py` per slug; `scripts/hf-space-sync.py` for the leaderboard space
- Buffer deferred queue: `scripts/build-buffer-deferred-queue.mjs` (post-batch only)

## CEO log convention

Maintain `brain/audits/{N}-run-ceo-log.md` for each batch (e.g. `50-run-ceo-log.md`)
with: kickoff timestamp, baseline counts, batch-by-batch outcomes, failures,
final status. Commit it with `[skip ci]` so it doesn't churn deploys.
