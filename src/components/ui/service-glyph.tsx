'use client';

import type { LucideIcon } from 'lucide-react';
import { m, useReducedMotion } from 'framer-motion';

/**
 * A per-service animated icon: a slow-rotating dashed ring, a pair of pinging
 * signal rings (see `@keyframes pulseRing` in globals.css), and a softly
 * floating glow core holding the icon. Gives each panel in the services
 * sticky-scroll its own distinct visual instead of one generic dot.
 *
 * `dark` (default `true`) picks the ring/core colors for a dark backdrop —
 * pass `dark={false}` to use it on a light card instead (dark dashed ring,
 * white core, accent-colored icon rather than white-on-glass).
 */
export function ServiceGlyph({ icon: Icon, dark = true }: { icon: LucideIcon; dark?: boolean }) {
  const reduced = useReducedMotion();

  return (
    <div className="relative flex h-28 w-28 items-center justify-center" aria-hidden="true">
      {!reduced && (
        <m.span
          className={`absolute inset-0 rounded-full border border-dashed ${dark ? 'border-white/15' : 'border-black/10'}`}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
      )}

      {reduced ? (
        <span className="absolute inset-3 rounded-full border border-[var(--accent)]/30" />
      ) : (
        [0, 1].map((i) => (
          <span
            key={i}
            className="absolute inset-3 rounded-full border border-[var(--accent)]/40 [animation:pulseRing_3s_ease-out_infinite]"
            style={{ animationDelay: `${i * 1.2}s` }}
          />
        ))
      )}

      <m.div
        className={
          dark
            ? 'relative flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-gradient-to-b from-[var(--accent)]/25 via-white/[0.04] to-transparent shadow-[0_0_30px_rgba(230,59,46,0.25)]'
            : 'relative flex h-16 w-16 items-center justify-center rounded-full border border-black/[0.06] bg-gradient-to-b from-[var(--accent)]/15 via-white to-white shadow-[0_0_30px_rgba(230,59,46,0.15)]'
        }
        animate={reduced ? undefined : { y: [0, -6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Icon className={dark ? 'h-7 w-7 text-white' : 'h-7 w-7 text-[var(--accent)]'} strokeWidth={1.6} />
      </m.div>
    </div>
  );
}
