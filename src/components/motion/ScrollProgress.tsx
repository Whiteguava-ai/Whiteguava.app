'use client';

import { m, useScroll, useSpring } from 'framer-motion';

/**
 * A thin accent bar pinned to the top of the viewport that fills as the page
 * scrolls — the "you are here in the film" cue. Driven by document scroll
 * progress through a spring so it eases rather than tracks 1:1. It reads as
 * direct scroll feedback (like a scrollbar) so it stays on under reduced
 * motion, just without the spring overshoot mattering.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <m.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[1000] h-[3px] origin-left bg-[var(--accent)]"
    />
  );
}
