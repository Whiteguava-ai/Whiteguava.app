'use client';

import { useRef, type CSSProperties, type ReactNode } from 'react';
import {
  m,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useMounted } from '@/lib/motion/useMounted';

/**
 * Continuous scroll-linked drift for a *decorative* layer — a gradient wash, a
 * blurred blob field, a background numeral, an image inside its frame. Never
 * wrap body copy or interactive controls in this (reading against a moving
 * background is uncomfortable and the motion contract forbids it).
 *
 * The scroll position is measured on a static outer wrapper while the
 * transform rides an inner `m.div` (same split as `Scroll3D`) so the moving
 * layer never feeds its own displacement back into the measurement. The
 * wrapper structure is identical on the server, the first client render, and
 * under `prefers-reduced-motion`; the transform is only attached after mount.
 *
 * By default the inner layer fills the wrapper (`position: absolute; inset:
 * 0`) — right for a full-bleed backdrop whose own children are absolutely
 * positioned. Pass `flow` for content that must lay itself out normally.
 *
 * `speed` > 0 lags behind the scroll ("further away"); `speed` < 0 leads.
 */
export function Parallax({
  children,
  className,
  style,
  speed = 0.2,
  rotate = 0,
  scaleTo,
  flow = false,
}: {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** -1 … 1. Positive lags, negative leads. */
  speed?: number;
  /** Degrees of rotation across the scroll span. */
  rotate?: number;
  /** Scale reached at the end of the scroll span (e.g. 1.15). */
  scaleTo?: number;
  /** Let the moving layer lay out in normal flow instead of filling the wrapper. */
  flow?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const mounted = useMounted();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const range = Math.max(-1, Math.min(1, speed)) * 140;
  const yRaw = useTransform(scrollYProgress, [0, 1], [range, -range]);
  const y = useSpring(yRaw, { stiffness: 120, damping: 40, mass: 0.4 });
  const rotateMv = useTransform(scrollYProgress, [0, 1], [0, rotate]);
  const scaleMv = useTransform(scrollYProgress, [0, 1], [1, scaleTo ?? 1]);

  const active = mounted && !reduced;
  const layerStyle: CSSProperties = flow
    ? { display: 'inline-block' }
    : { position: 'absolute', inset: 0 };

  return (
    <div ref={ref} className={className} style={style}>
      <m.div
        style={
          active
            ? {
                ...layerStyle,
                y,
                rotate: rotate ? rotateMv : undefined,
                scale: scaleTo ? scaleMv : undefined,
                willChange: 'transform',
              }
            : layerStyle
        }
      >
        {children}
      </m.div>
    </div>
  );
}
