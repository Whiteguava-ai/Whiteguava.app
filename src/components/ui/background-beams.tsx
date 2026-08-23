'use client';

import { m, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/cn';

const PATHS = [
  'M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875',
  'M-373 -197C-373 -197 -305 208 159 335C623 462 691 867 691 867',
  'M-366 -205C-366 -205 -298 200 166 327C630 454 698 859 698 859',
  'M-359 -213C-359 -213 -291 192 173 319C637 446 705 851 705 851',
  'M-352 -221C-352 -221 -284 184 180 311C644 438 712 843 712 843',
  'M-345 -229C-345 -229 -277 176 187 303C651 430 719 835 719 835',
  'M-338 -237C-338 -237 -270 168 194 295C658 422 726 827 726 827',
];

/**
 * Aceternity "Background Beams": faint animated light trails drifting through a
 * dark section, used behind CTA / contact panels. Static SVG paths (no data
 * dependency) with a looping gradient sweep along each — collapses to a single
 * still frame under prefers-reduced-motion.
 */
export function BackgroundBeams({ className }: { className?: string }) {
  const reduced = useReducedMotion();

  return (
    <div className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)} aria-hidden="true">
      <svg
        className="absolute inset-0 h-full w-full opacity-40"
        viewBox="0 0 696 316"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="beam-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E63B2E" stopOpacity="0" />
            <stop offset="45%" stopColor="#E63B2E" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#E63B2E" stopOpacity="0" />
          </linearGradient>
        </defs>
        {PATHS.map((d) => (
          <path key={d} d={d} stroke="url(#beam-gradient)" strokeOpacity="0.35" strokeWidth="0.6" />
        ))}
        {!reduced &&
          PATHS.map((d, i) => (
            <m.path
              key={`${d}-glow`}
              d={d}
              stroke="url(#beam-gradient)"
              strokeWidth="1.4"
              strokeLinecap="round"
              initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }}
              animate={{ pathLength: [0, 0.35, 0], pathOffset: [0, 0.7, 1], opacity: [0, 1, 0] }}
              transition={{
                duration: 7 + (i % 4),
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.6,
              }}
            />
          ))}
      </svg>
    </div>
  );
}
