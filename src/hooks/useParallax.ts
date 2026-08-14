'use client';
import { useEffect, useRef } from 'react';

export function useParallax(strength = 24) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      el.style.setProperty('--mx', x.toFixed(3));
      el.style.setProperty('--my', y.toFixed(3));
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [strength]);

  return ref;
}

export function useTilt(max = 10) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1100px) rotateY(${x * max}deg) rotateX(${-y * max}deg) translateZ(8px)`;
  };

  const onLeave = () => {
    if (ref.current) ref.current.style.transform = 'perspective(1100px) rotateY(0deg) rotateX(0deg) translateZ(0)';
  };

  return { ref, onMove, onLeave };
}
