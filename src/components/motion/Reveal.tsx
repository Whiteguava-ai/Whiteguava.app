'use client';

import { Children, type CSSProperties, type ReactNode } from 'react';
import {
  m,
  useReducedMotion,
  type MotionProps,
  type Variants,
} from 'framer-motion';
import { useMounted } from '@/lib/motion/useMounted';

/**
 * Standard-tier scroll entrance. A section wraps its heading block, a card, or
 * a grid item in `<Reveal>` and it travels in once as it enters the viewport.
 *
 * This is the Framer-Motion replacement for the old CSS `.reveal` /
 * `RevealObserver` pattern and for a bare `<Scroll3D>` used purely as a
 * fade-in. Continuous scrub-linked motion (pin, parallax, scene transitions)
 * lives in `ScrollScene` / `Parallax` instead.
 *
 * `direction` names the edge the content enters from. `stagger` makes each
 * direct child come in on its own beat — it wraps every child in a block, so
 * use it for stacked/flowing content (a heading block, a button row), not for
 * grid/flex layouts where a card must stay the direct child; there, give each
 * card its own `<Reveal delay={i * 0.06}>`.
 *
 * The DOM is identical on the server, the first client render, and under
 * `prefers-reduced-motion` — only the animation props switch on, and only
 * after mount — so hydration never diverges.
 */

type Tag = 'div' | 'section' | 'header' | 'article' | 'span' | 'p' | 'ul' | 'li' | 'figure';
type Direction = 'up' | 'down' | 'left' | 'right' | 'scale' | 'none';

function offsetFor(direction: Direction, distance: number): Record<string, number> {
  switch (direction) {
    case 'up':
      return { y: distance };
    case 'down':
      return { y: -distance };
    case 'left':
      return { x: -distance };
    case 'right':
      return { x: distance };
    case 'scale':
      return { scale: 0.92 };
    default:
      return {};
  }
}

export interface RevealProps {
  children: ReactNode;
  as?: Tag;
  className?: string;
  style?: CSSProperties;
  /** Edge the content enters from. */
  direction?: Direction;
  /** Travel distance in px for slide directions. */
  distance?: number;
  delay?: number;
  duration?: number;
  /** How much of the element must be visible before it fires (0–1). */
  amount?: number;
  once?: boolean;
  /** Animate each direct child on a staggered beat instead of the block as one. */
  stagger?: boolean;
  staggerDelay?: number;
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function MotionEl({
  tag,
  props,
  children,
}: {
  tag: Tag;
  props: MotionProps & { className?: string; style?: CSSProperties };
  children: ReactNode;
}) {
  switch (tag) {
    case 'section':
      return <m.section {...props}>{children}</m.section>;
    case 'header':
      return <m.header {...props}>{children}</m.header>;
    case 'article':
      return <m.article {...props}>{children}</m.article>;
    case 'span':
      return <m.span {...props}>{children}</m.span>;
    case 'p':
      return <m.p {...props}>{children}</m.p>;
    case 'ul':
      return <m.ul {...props}>{children}</m.ul>;
    case 'li':
      return <m.li {...props}>{children}</m.li>;
    case 'figure':
      return <m.figure {...props}>{children}</m.figure>;
    default:
      return <m.div {...props}>{children}</m.div>;
  }
}

export function Reveal({
  children,
  as = 'div',
  className,
  style,
  direction = 'up',
  distance = 40,
  delay = 0,
  duration = 0.7,
  amount = 0.25,
  once = true,
  stagger = false,
  staggerDelay = 0.08,
}: RevealProps) {
  const reduced = useReducedMotion();
  const mounted = useMounted();
  const animate = mounted && !reduced;

  const hidden = { opacity: 0, ...offsetFor(direction, distance) };
  const shown = { opacity: 1, x: 0, y: 0, scale: 1 };
  const viewport = { once, amount, margin: '0px 0px -12% 0px' } as const;

  if (!stagger) {
    return (
      <MotionEl
        tag={as}
        props={
          animate
            ? {
                className,
                style,
                initial: hidden,
                whileInView: shown,
                viewport,
                transition: { duration, delay, ease: EASE },
              }
            : { className, style, initial: false }
        }
      >
        {children}
      </MotionEl>
    );
  }

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: staggerDelay, delayChildren: delay } },
  };
  const item: Variants = {
    hidden,
    visible: { ...shown, transition: { duration, ease: EASE } },
  };

  return (
    <MotionEl
      tag={as}
      props={
        animate
          ? { className, style, variants: container, initial: 'hidden', whileInView: 'visible', viewport }
          : { className, style, initial: false }
      }
    >
      {Children.map(children, (child, i) =>
        child == null || child === false ? child : (
          <m.div key={i} variants={animate ? item : undefined} initial={false}>
            {child}
          </m.div>
        )
      )}
    </MotionEl>
  );
}
