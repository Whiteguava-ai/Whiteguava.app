'use client';

import { m, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/cn';

/**
 * Aceternity "Spotlight": an ambient, softly drifting radial light behind hero
 * content. Pure CSS gradients + Framer Motion for the entrance/drift — no canvas,
 * no WebGL. Collapses to a static glow under prefers-reduced-motion.
 */
export function Spotlight({
  className,
  color = 'rgba(230,59,46,0.35)',
}: {
  className?: string;
  color?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <m.div
      aria-hidden="true"
      initial={{ opacity: 0 }}
      animate={
        reduced
          ? { opacity: 0.7 }
          : { opacity: [0.5, 0.85, 0.5], x: [0, 30, -20, 0], y: [0, -20, 15, 0] }
      }
      transition={
        reduced
          ? { duration: 0.8 }
          : { duration: 14, repeat: Infinity, ease: 'easeInOut' }
      }
      className={cn('pointer-events-none absolute -top-1/4 left-1/2 h-[60vw] w-[60vw] max-h-[720px] max-w-[720px] -translate-x-1/2 rounded-full blur-[110px]', className)}
      style={{
        background: `radial-gradient(circle at center, ${color} 0%, rgba(230,59,46,0.06) 45%, transparent 72%)`,
      }}
    />
  );
}

