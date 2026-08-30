'use client';

import { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'framer-motion';

/**
 * A number that rolls up from 0 to `value` the first time it scrolls into
 * view. The server (and any no-JS / reduced-motion client) renders the final
 * value outright; the roll only runs after mount, driven by a rAF loop rather
 * than React state churn on every frame. Wrap non-numeric flavour in
 * `prefix` / `suffix` (`"+"`, `"ms"`, `" / 08"`).
 */
export function CountUp({
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 1.6,
  className,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState<number | null>(null);

  useEffect(() => {
    if (!inView || reduced) return;
    const controls = animate(0, value, {
      duration,
      ease: 'easeOut',
      onUpdate: (v) => setDisplay(v),
      onComplete: () => setDisplay(null),
    });
    return () => controls.stop();
  }, [inView, reduced, value, duration]);

  const shown = display == null ? value : display;

  return (
    <span ref={ref} className={className}>
      {prefix}
      {shown.toFixed(decimals)}
      {suffix}
    </span>
  );
}
