'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { m, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/cn';

export interface TimelineEntry {
  label: string;
  title: string;
  content: ReactNode;
}

/**
 * Aceternity "Timeline": a vertical line whose fill grows with scroll progress,
 * alongside a stack of entries. Used for step-by-step / process narratives
 * (replaces the old cinematic "Pipeline" scene).
 *
 * Below `md`, the label/title collapse into a single stacked column above
 * each entry's content — a fixed side column at phone widths would either
 * force "DEVELOPMENT" to wrap onto three lines or squeeze the content column
 * down to almost nothing. From `md` up, label/title become a column that
 * sticks alongside the content as the reader scrolls past it, matching the
 * original desktop layout.
 */
export function Timeline({ data, dark = false, className }: { data: TimelineEntry[]; dark?: boolean; className?: string }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!contentRef.current) return;
    const measure = () => setHeight(contentRef.current?.getBoundingClientRect().height ?? 0);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(contentRef.current);
    return () => ro.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start 15%', 'end 60%'] });
  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div ref={containerRef} className={cn('w-full', className)}>
      <div ref={contentRef} className="relative mx-auto max-w-5xl">
        {data.map((item) => (
          <div
            key={item.title}
            className="pl-10 pt-12 first:pt-0 sm:pl-12 md:flex md:items-start md:gap-10 md:pl-0 md:pt-16"
          >
            <div className="relative flex flex-col items-start md:sticky md:top-32 md:z-10 md:w-56 md:shrink-0">
              <div
                className={cn(
                  'absolute -left-10 top-0 flex h-7 w-7 items-center justify-center rounded-full border sm:-left-12 sm:h-8 sm:w-8 md:-left-[3px] md:h-8 md:w-8',
                  dark ? 'border-white/15 bg-[#141414]' : 'border-black/10 bg-white'
                )}
              >
                <div className="h-2 w-2 rounded-full bg-[var(--accent)] sm:h-2.5 sm:w-2.5" />
              </div>
              <span
                className={cn(
                  'text-xs font-semibold tracking-[0.08em] md:pl-12',
                  dark ? 'text-white/40' : 'text-[var(--text-secondary)]'
                )}
              >
                {item.label}
              </span>
              <h3
                className={cn(
                  'mt-1 text-xl font-bold md:mt-2 md:pl-12 md:text-2xl',
                  dark ? 'text-white' : 'text-[var(--text-primary)]'
                )}
              >
                {item.title}
              </h3>
            </div>
            <div className="mt-4 min-w-0 md:mt-0 md:flex-1 md:pl-6">{item.content}</div>
          </div>
        ))}

        <div
          style={{ height: `${height}px` }}
          className={cn(
            'absolute left-[13px] top-0 w-[2px] overflow-hidden sm:left-[15px] md:left-[12.5px]',
            dark
              ? 'bg-gradient-to-b from-transparent via-white/10 to-transparent'
              : 'bg-gradient-to-b from-transparent via-black/10 to-transparent'
          )}
        >
          <m.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-b from-[var(--accent)] via-[var(--accent)] to-transparent"
          />
        </div>
      </div>
    </div>
  );
}
