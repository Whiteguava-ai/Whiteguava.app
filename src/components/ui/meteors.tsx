'use client';

import { useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/cn';

/**
 * Deterministic pseudo-random in [0, 1), seeded by an integer. Used instead of
 * `Math.random()` so meteor positions are a pure function of `number` — stable
 * across server and client renders (no hydration mismatch) and across
 * re-renders (satisfies the "no impure calls during render" rule).
 */
function seededRandom(seed: number) {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

/**
 * Aceternity "Meteors": diagonal light streaks drifting across a dark surface.
 * Pure CSS keyframe animation, staggered per-meteor — cheap enough to leave
 * running continuously. Renders nothing under prefers-reduced-motion.
 */
export function Meteors({ number = 16, className }: { number?: number; className?: string }) {
  const reduced = useReducedMotion();

  if (reduced) return null;

  const meteors = Array.from({ length: number }, (_, i) => ({
    left: `${Math.round(seededRandom(i + 1) * 100)}%`,
    delay: `${(seededRandom(i + 101) * 6).toFixed(2)}s`,
    duration: `${(5 + seededRandom(i + 201) * 4).toFixed(2)}s`,
  }));

  return (
    <div className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)} aria-hidden="true">
      {meteors.map((m, i) => (
        <span
          key={i}
          className="absolute top-[-10%] h-0.5 w-0.5 animate-[meteor_var(--meteor-duration)_linear_infinite] rounded-full bg-white/80 shadow-[0_0_0_1px_rgba(255,255,255,0.1)] before:absolute before:top-1/2 before:h-px before:w-[70px] before:-translate-y-1/2 before:bg-gradient-to-r before:from-white/70 before:to-transparent"
          style={{
            left: m.left,
            animationDelay: m.delay,
            // @ts-expect-error custom property for the animation duration
            '--meteor-duration': m.duration,
          }}
        />
      ))}
    </div>
  );
}
