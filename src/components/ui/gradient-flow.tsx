'use client';

import { useMemo } from 'react';
import { m, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/cn';

/** Deterministic pseudo-random in [0, 1) — a pure function of `seed`, so it's
 * stable across server/client renders and re-renders (no hydration mismatch,
 * no "impure call during render" issue the way `Math.random()` would cause). */
function seededRandom(seed: number) {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

/**
 * An ambient backdrop for dark sections: a large, saturated aurora-style wash
 * slowly breathes behind two bigger drifting color blobs, with light streaks
 * continuously flowing top to bottom over the top — enough color and motion
 * that a big dark panel reads as a living surface, not empty black.
 */
export function GradientFlow({ className, streaks = 9 }: { className?: string; streaks?: number }) {
  const reduced = useReducedMotion();

  const streakSpecs = useMemo(
    () =>
      Array.from({ length: streaks }, (_, i) => ({
        left: `${Math.round(seededRandom(i + 1) * 100)}%`,
        duration: 6 + seededRandom(i + 51) * 5,
        delay: seededRandom(i + 101) * 7,
      })),
    [streaks]
  );

  return (
    <div className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)} aria-hidden="true">
      <m.div
        className="absolute -inset-x-1/4 -top-1/3 h-[170%]"
        style={{
          background:
            'radial-gradient(55% 45% at 28% 22%, rgba(230,59,46,0.4), transparent 62%), radial-gradient(45% 40% at 78% 55%, rgba(255,140,127,0.22), transparent 65%), radial-gradient(50% 40% at 45% 88%, rgba(230,59,46,0.32), transparent 62%)',
          filter: 'blur(50px)',
        }}
        animate={reduced ? undefined : { y: ['-4%', '4%', '-4%'] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      <m.div
        className="absolute left-[8%] h-[64vh] w-[64vh] rounded-full bg-[var(--accent)]/25 blur-[95px]"
        initial={{ top: '-30%' }}
        animate={reduced ? undefined : { top: ['-30%', '120%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
      <m.div
        className="absolute right-[6%] h-[50vh] w-[50vh] rounded-full bg-white/[0.09] blur-[100px]"
        initial={{ top: '115%' }}
        animate={reduced ? undefined : { top: ['115%', '-30%'] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'linear', delay: 2 }}
      />

      {!reduced &&
        streakSpecs.map((s, i) => (
          <m.span
            key={i}
            className="absolute top-[-20%] h-[35%] w-px bg-gradient-to-b from-transparent via-white/40 to-transparent"
            style={{ left: s.left }}
            initial={{ top: '-35%' }}
            animate={{ top: ['-35%', '135%'] }}
            transition={{ duration: s.duration, repeat: Infinity, ease: 'linear', delay: s.delay }}
          />
        ))}

      <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/40 via-transparent to-[#0D0D0D]/60" />
    </div>
  );
}
