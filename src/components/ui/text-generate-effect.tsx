'use client';

import { useEffect } from 'react';
import { m, stagger, useAnimate, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/cn';

/**
 * Aceternity "Text Generate Effect": headline words fade + un-blur in one at a
 * time as the section enters view. Renders the full text immediately (no
 * animation) under prefers-reduced-motion.
 *
 * Words render fully visible by default — the hidden-then-reveal state is
 * applied imperatively client-side in the effect below, never baked into the
 * server-rendered HTML. That keeps the headline readable for anything that
 * doesn't execute JS (crawlers, first paint, no-JS clients) while still
 * playing the reveal for real users. The per-word spans are aria-hidden and
 * the wrapper carries an aria-label with the plain, correctly-spaced string
 * so assistive tech and text extraction never see it split mid-word.
 */
export function TextGenerateEffect({
  words,
  className,
  wordClassName,
  highlightWords,
  highlightClassName = 'text-[var(--accent)]',
}: {
  words: string;
  className?: string;
  wordClassName?: string;
  /** Words (matched case-sensitively, ignoring trailing punctuation) to render in the accent color. */
  highlightWords?: string[];
  highlightClassName?: string;
}) {
  const [scope, animate] = useAnimate();
  const reduced = useReducedMotion();
  const wordsArray = words.split(' ');

  useEffect(() => {
    if (reduced) return;
    animate('span', { opacity: 0, filter: 'blur(8px)' }, { duration: 0 });
    animate('span', { opacity: 1, filter: 'blur(0px)' }, { duration: 0.6, delay: stagger(0.12) });
  }, [animate, reduced]);

  return (
    <m.span ref={scope} aria-label={words} className={cn('inline', className)}>
      {wordsArray.map((word, idx) => {
        const bare = word.replace(/[.,!?]+$/, '');
        const isHighlight = highlightWords?.includes(bare);
        return (
          <span
            key={word + idx}
            aria-hidden="true"
            className={cn(isHighlight && highlightClassName, wordClassName)}
          >
            {word}
            {idx < wordsArray.length - 1 ? ' ' : ''}
          </span>
        );
      })}
    </m.span>
  );
}
