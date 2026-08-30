'use client';

import { useRef, type ReactNode } from 'react';
import { gsap, useGSAP } from '@/lib/motion/gsap';

/**
 * A link/button that leans toward the cursor while hovered and springs back on
 * leave — reserved for a single focal CTA per view (the motion contract caps
 * magnetic elements at 1–2 per screen). Pull is clamped so the element never
 * leaves its own hit box. Pointer-driven only: no-op on touch and under
 * reduced motion, where it renders as a plain anchor.
 */
export function MagneticButton({
  children,
  href,
  className,
  strength = 0.3,
}: {
  children: ReactNode;
  href: string;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const mm = gsap.matchMedia();
      mm.add(
        '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)',
        () => {
          const xTo = gsap.quickTo(el, 'x', { duration: 0.4, ease: 'power3.out' });
          const yTo = gsap.quickTo(el, 'y', { duration: 0.4, ease: 'power3.out' });

          const onMove = (e: PointerEvent) => {
            const r = el.getBoundingClientRect();
            xTo((e.clientX - r.left - r.width / 2) * strength);
            yTo((e.clientY - r.top - r.height / 2) * strength);
          };
          const reset = () => {
            xTo(0);
            yTo(0);
          };

          el.addEventListener('pointermove', onMove);
          el.addEventListener('pointerleave', reset);
          return () => {
            el.removeEventListener('pointermove', onMove);
            el.removeEventListener('pointerleave', reset);
          };
        }
      );
    },
    { scope: ref }
  );

  return (
    <a ref={ref} href={href} className={className}>
      {children}
    </a>
  );
}
