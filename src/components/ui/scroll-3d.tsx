'use client';

import { useRef, type CSSProperties, type ReactNode } from 'react';
import { m, useReducedMotion, useScroll, useTransform } from 'framer-motion';

/**
 * Wraps children in a continuous scroll-linked 3D tilt: as the element
 * scrolls up from just below the viewport into its resting reading
 * position, it rotates in from a slight 3D tilt to flat.
 *
 * Only `transform` is animated — never opacity — so content stays fully
 * visible at every scroll position, including for anything that doesn't
 * execute JS (which just sees whichever transform state scroll position 0
 * computes to: a static, still fully-readable tilt, never a hidden/blank
 * element). And because the rotation is driven by scroll position rather
 * than a timer or a mount-triggered reveal, it falls inside the browser's
 * "recent input" exclusion for layout-shift scoring the way a delayed
 * reveal-after-paint animation (the bug fixed in the hero) would not.
 */
export function Scroll3D({
  children,
  className,
  style,
  direction = 'up',
  intensity = 1,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Which axis the tilt rotates in from. */
  direction?: 'up' | 'left' | 'right';
  /** Multiplier on the rotation/lift amount — use <1 for subtler sections. */
  intensity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 100%', 'start 35%'] });

  const rotateX = useTransform(scrollYProgress, [0, 1], direction === 'up' ? [55 * intensity, 0] : [0, 0]);
  const rotateY = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'left' ? [-45 * intensity, 0] : direction === 'right' ? [45 * intensity, 0] : [0, 0]
  );
  const y = useTransform(scrollYProgress, [0, 1], [120 * intensity, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1 - 0.25 * intensity, 1]);

  if (reduced) {
    return (
      <div ref={ref} className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <div ref={ref} style={{ ...style, perspective: 1000 }} className={className}>
      <m.div style={{ rotateX, rotateY, y, scale, transformStyle: 'preserve-3d' }}>{children}</m.div>
    </div>
  );
}
