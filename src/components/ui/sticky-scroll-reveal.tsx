'use client';

import { useRef, useState, type ReactNode } from 'react';
import { m, useMotionValueEvent, useScroll, useSpring } from 'framer-motion';
import { CardBody, CardContainer } from '@/components/ui/card-3d';
import { GradientFlow } from '@/components/ui/gradient-flow';
import { cn } from '@/lib/cn';

export interface StickyScrollItem {
  eyebrow?: string;
  title: string;
  description: string;
  content?: ReactNode;
}

/**
 * Aceternity "Sticky Scroll Reveal", adapted for whole-page scroll (rather than
 * an internal overflow container): the section grows tall enough for one
 * viewport per item, a panel stays pinned via `position: sticky`, and the
 * active item is driven by how far the reader has scrolled through the section.
 *
 * Unlike the original (which stacks every item's full text in a fixed-height
 * `overflow-y-auto` box and lets the user scroll *inside* it), this version has
 * no internal scroll container — so both the step list and the detail panel
 * show only the active item, cross-fading between items, keeping the sticky
 * block short enough to actually stay pinned for the section's full scroll range.
 */
export function StickyScrollReveal({
  items,
  className,
  dark = true,
  vhPerItem = 85,
  ambient = false,
}: {
  items: StickyScrollItem[];
  className?: string;
  dark?: boolean;
  vhPerItem?: number;
  /** Renders a slow-drifting gradient/streak backdrop behind the sticky panel. */
  ambient?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const railScale = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const idx = Math.min(items.length - 1, Math.floor(latest * items.length));
    setActive(Math.max(0, idx));
  });

  return (
    <div ref={ref} className={cn('relative', className)} style={{ height: `${items.length * vhPerItem}vh` }}>
      <div className="sticky top-20 mx-auto flex max-w-6xl flex-col gap-8 px-6 py-10 lg:top-28 lg:flex-row lg:items-center lg:gap-16">
        {ambient && <GradientFlow className="-z-10 opacity-70" />}

        <div
          aria-hidden="true"
          className={cn(
            'absolute left-1 top-10 hidden w-px overflow-hidden rounded lg:block',
            'h-[calc(100%-5rem)]',
            dark ? 'bg-white/10' : 'bg-black/10'
          )}
        >
          <m.span
            style={{ scaleY: railScale }}
            className="absolute inset-x-0 top-0 block h-full origin-top bg-[var(--accent)]"
          />
        </div>

        <div className="relative z-10 flex-1">
          <div className="flex flex-wrap gap-2">
            {items.map((item, i) => (
              <button
                key={item.title}
                type="button"
                tabIndex={-1}
                aria-hidden="true"
                className={cn(
                  'rounded-full border px-3 py-1.5 text-xs font-semibold tracking-[0.05em] transition-colors',
                  active === i
                    ? dark
                      ? 'border-[var(--accent)] bg-[var(--accent)] text-white'
                      : 'border-[var(--accent)] bg-[var(--accent)] text-white'
                    : dark
                      ? 'border-white/10 text-white/40'
                      : 'border-black/10 text-[var(--text-secondary)]'
                )}
              >
                {String(i + 1).padStart(2, '0')}
              </button>
            ))}
          </div>

          <div className="relative mt-8 min-h-[180px]">
            {items.map((item, i) => (
              <m.div
                key={item.title}
                animate={{ opacity: active === i ? 1 : 0, y: active === i ? 0 : 8 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-x-0 top-0"
                style={{ pointerEvents: active === i ? 'auto' : 'none' }}
              >
                {item.eyebrow && (
                  <span className={cn('text-xs font-semibold tracking-[0.08em]', dark ? 'text-[#ff8c7f]' : 'text-[var(--accent)]')}>
                    {item.eyebrow}
                  </span>
                )}
                <h3 className={cn('mt-2 text-2xl font-bold lg:text-3xl', dark ? 'text-white' : 'text-[var(--text-primary)]')}>
                  {item.title}
                </h3>
                <p className={cn('mt-3 max-w-md text-[15px] leading-relaxed', dark ? 'text-white/60' : 'text-[var(--text-secondary)]')}>
                  {item.description}
                </p>
              </m.div>
            ))}
          </div>
        </div>

        <CardContainer containerClassName="relative z-10 min-h-[320px] flex-1 lg:min-h-[420px]">
          <CardBody className="relative h-full min-h-[320px] w-full lg:min-h-[420px]">
            {items.map((item, i) => (
              <m.div
                key={item.title}
                animate={{ opacity: active === i ? 1 : 0, scale: active === i ? 1 : 0.97 }}
                transition={{ duration: 0.4 }}
                className={cn(
                  'absolute inset-0 flex items-center justify-center overflow-hidden rounded-3xl border p-8 backdrop-blur',
                  dark ? 'border-white/10 bg-white/[0.04]' : 'border-black/[0.06] bg-black/[0.02]'
                )}
                style={{ pointerEvents: active === i ? 'auto' : 'none' }}
              >
                {item.content}
              </m.div>
            ))}
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
}
