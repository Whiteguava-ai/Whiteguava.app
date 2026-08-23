'use client';

import type { LucideIcon } from 'lucide-react';
import { m, useReducedMotion } from 'framer-motion';

/**
 * A per-service animated icon: a slow-rotating dashed ring, a pair of pinging
 * signal rings (see `@keyframes pulseRing` in globals.css), and a softly
 * floating glow core holding the icon. Gives each panel in the services
 * sticky-scroll its own distinct visual instead of one generic dot.
 */
export function ServiceGlyph({ icon: Icon }: { icon: LucideIcon }) {
  const reduced = useReducedMotion();

  return (
    <div className="relative flex h-28 w-28 items-center justify-center" aria-hidden="true">
      {!reduced && (
        <m.span
          className="absolute inset-0 rounded-full border border-dashed border-white/15"
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
        className="relative flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-gradient-to-b from-[var(--accent)]/25 via-white/[0.04] to-transparent shadow-[0_0_30px_rgba(230,59,46,0.25)]"
        animate={reduced ? undefined : { y: [0, -6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Icon className="h-7 w-7 text-white" strokeWidth={1.6} />
      </m.div>
    </div>
  );
}
