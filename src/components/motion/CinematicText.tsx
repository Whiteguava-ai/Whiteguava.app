'use client';

import { useRef, type ElementType } from 'react';
import { gsap, SplitText, useGSAP } from '@/lib/motion/gsap';

/**
 * Headline reveal built on GSAP SplitText: the line breaks into words (or
 * characters) that rise, un-blur and un-rotate into place — on mount for an
 * above-the-fold hero (`trigger="load"`) or as it scrolls into view
 * (`trigger="scroll"`, optionally `scrub`bed to the scrollbar).
 *
 * `children` must be a plain string. It is rendered verbatim in the server
 * HTML and stays the accessible text (SplitText's `aria: 'auto'` restores an
 * `aria-label` with the original string and hides the fragments); the split is
 * applied imperatively only after hydration, and only when motion is allowed,
 * so crawlers / no-JS / reduced-motion users always get clean, visible copy.
 *
 * `lines` splitting is deliberately unsupported — it needs fonts fully loaded
 * to measure correctly. Use `words` for a line-style cascade.
 */
export function CinematicText({
  children,
  as: Tag = 'span',
  className,
  splitBy = 'words',
  trigger = 'scroll',
  scrub = false,
  start = 'top 80%',
  stagger = 0.045,
  duration = 0.7,
  delay = 0,
}: {
  children: string;
  as?: ElementType;
  className?: string;
  splitBy?: 'words' | 'chars';
  trigger?: 'load' | 'scroll';
  /** Scroll-mode only: tie the cascade to scroll position. */
  scrub?: boolean;
  start?: string;
  stagger?: number;
  duration?: number;
  delay?: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const text = String(children ?? '');

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const split = new SplitText(el, { type: splitBy, aria: 'auto' });
        const targets = splitBy === 'chars' ? split.chars : split.words;

        if (targets.length) {
          // Constant perspective (never animated 500→0, which distorts wildly
          // near the end); clearProps hands the final, untransformed state back
          // to CSS so nothing is ever left mid-rotation.
          gsap.set(targets, { transformPerspective: 600, transformOrigin: '50% 100%' });
          gsap.from(targets, {
            yPercent: 110,
            opacity: 0,
            rotateX: -70,
            filter: 'blur(6px)',
            duration,
            ease: 'expo.out',
            stagger,
            delay: trigger === 'load' ? delay : 0,
            clearProps: scrub ? undefined : 'transform,filter,opacity',
            scrollTrigger:
              trigger === 'scroll'
                ? {
                    trigger: el,
                    start,
                    end: scrub ? 'top 45%' : undefined,
                    scrub: scrub ? 1 : false,
                    toggleActions: scrub ? undefined : 'play none none reverse',
                  }
                : undefined,
          });
        }

        return () => split.revert();
      });
    },
    { scope: ref }
  );

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {text}
    </Tag>
  );
}
