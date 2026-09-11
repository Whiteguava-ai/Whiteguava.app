import { SITE_URL } from '@/lib/site';

/**
 * Guardrails shared by every public AI route (`/api/ask`, `/api/scope`).
 * None of this is billed to the model itself — it's cheap, synchronous
 * checks that run *before* an OpenAI call, so a blocked request never
 * spends a token.
 */

const ALLOWED_HOSTS = new Set([new URL(SITE_URL).host, 'localhost:3000', '127.0.0.1:3000']);

/**
 * Reject requests that didn't originate from a page on this site. Headers
 * can be spoofed by a determined caller, so this isn't real authentication —
 * it's a cheap filter that stops casual scraping, other sites embedding a
 * fetch to this endpoint, and API tools/browser extensions poking it
 * directly, without adding any login system to a public marketing feature.
 */
export function isSameOrigin(request: Request): boolean {
  const origin = request.headers.get('origin');
  const referer = request.headers.get('referer');
  const source = origin || referer;
  if (!source) return false;
  try {
    return ALLOWED_HOSTS.has(new URL(source).host);
  } catch {
    return false;
  }
}

/**
 * A hard, sitewide daily ceiling on top of the per-IP rate limit in
 * `rate-limit.ts` — a circuit breaker so a determined caller rotating IPs
 * (or a bug looping requests) can't run up an unbounded bill in one day.
 * In-memory: resets on deploy/restart in addition to the UTC-midnight
 * rollover, which is an acceptable trade for not needing a shared store for
 * a single small marketing site.
 */
const DAILY_BUDGET = 300;
let dayKey = '';
let dayCount = 0;

export function withinDailyBudget(): boolean {
  const today = new Date().toISOString().slice(0, 10);
  if (today !== dayKey) {
    dayKey = today;
    dayCount = 0;
  }
  dayCount += 1;
  return dayCount <= DAILY_BUDGET;
}
