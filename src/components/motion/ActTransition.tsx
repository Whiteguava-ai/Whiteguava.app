'use client';

import { useRef } from 'react';
import { m, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useMounted } from '@/lib/motion/useMounted';

/**
 * A chapter marker between two homepage "acts". Not a full-screen curtain
 * (the sections sit in rounded stage cards, a bleed wipe would fight the
 * seams) — instead a short scroll band: a large ghost label drifts through,
 * an accent rule draws across, and the background carries a faint wash in the
 * tone of the act you're entering. Purely decorative. Structure is identical
 * server/client/reduced-motion; the drift only attaches after mount.
 */
export function ActTransition({
  label,
  tone = 'light',
}: {
  /** e.g. "II · Process". Also the aria landmark text. */
  label: string;
  tone?: 'light' | 'dark';
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const mounted = useMounted();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['35%', '-35%']);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);
  const rule = useTransform(scrollYProgress, [0.15, 0.85], [0, 1]);

  const active = mounted && !reduced;
  const dark = tone === 'dark';

  return (
    <div
      ref={ref}
      role="separator"
      aria-label={label}
      className="relative flex h-[34vh] items-center justify-center overflow-hidden"
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 ${
          dark
            ? 'bg-[radial-gradient(60%_50%_at_50%_50%,rgba(13,13,13,0.5),transparent_70%)]'
            : 'bg-[radial-gradient(60%_50%_at_50%_50%,rgba(230,59,46,0.06),transparent_70%)]'
        }`}
      />
      <m.span
        aria-hidden="true"
        style={active ? { y, opacity } : { opacity: 0.5 }}
        className={`select-none whitespace-nowrap text-[13vw] font-black leading-none tracking-tight ${
          dark ? 'text-white/[0.05]' : 'text-black/[0.05]'
        }`}
      >
        {label}
      </m.span>
      <m.span
        aria-hidden="true"
        style={active ? { scaleX: rule } : { scaleX: 1 }}
        className="absolute h-px w-[min(420px,60vw)] origin-center bg-[var(--accent)]/50"
      />
    </div>
  );
}
