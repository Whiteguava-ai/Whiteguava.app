'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { m, useScroll, useSpring, useTransform } from 'framer-motion';
import { cn } from '@/lib/cn';

/**
 * Aceternity "Tracing Beam": a glowing line that runs alongside long-form
 * content, its gradient sliding down as the reader scrolls. Used for blog
 * posts and service pages.
 */
export function TracingBeam({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(400);

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  useEffect(() => {
    if (!contentRef.current) return;
    const measure = () => setSvgHeight(contentRef.current?.offsetHeight ?? 400);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(contentRef.current);
    return () => ro.disconnect();
  }, []);

  const y1 = useSpring(useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]), { stiffness: 400, damping: 90 });
  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]), { stiffness: 400, damping: 90 });

  return (
    <div ref={ref} className={cn('relative mx-auto w-full max-w-4xl', className)}>
      <div className="absolute -left-6 top-3 hidden md:-left-14 md:block">
        <svg viewBox={`0 0 20 ${svgHeight}`} width="20" height={svgHeight} className="block" aria-hidden="true">
          <path
            d={`M 1 0V ${svgHeight}`}
            fill="none"
            stroke="var(--border-dark, rgba(0,0,0,0.08))"
            strokeOpacity="0.16"
          />
          <m.path d={`M 1 0V ${svgHeight}`} fill="none" stroke="url(#tracing-beam-gradient)" strokeWidth="2" />
          <defs>
            <m.linearGradient id="tracing-beam-gradient" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1={y1} y2={y2}>
              <stop stopColor="#f15a4e" stopOpacity="0" />
              <stop stopColor="#f15a4e" />
              <stop offset="0.6" stopColor="var(--accent)" />
              <stop offset="1" stopColor="var(--accent)" stopOpacity="0" />
            </m.linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef}>{children}</div>
    </div>
  );
}
