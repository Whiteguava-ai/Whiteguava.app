/**
 * Minimal in-memory, per-IP rate limit for the public AI endpoints. Resets on
 * server restart and doesn't share state across instances — fine for a
 * marketing site's traffic; swap for a shared store (Upstash Redis, etc.) if
 * this ever runs on more than one instance behind a load balancer.
 */
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 8;

const hits = new Map<string, number[]>();

export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(key, recent);

  // Opportunistically forget keys that have gone quiet so this map doesn't
  // grow unbounded over a long-running process.
  if (hits.size > 5000) {
    for (const [k, times] of hits) {
      if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(k);
    }
  }

  return recent.length > MAX_PER_WINDOW;
}

export function clientKey(req: Request): string {
  const fwd = req.headers.get('x-forwarded-for');
  return fwd?.split(',')[0].trim() || 'unknown';
}
