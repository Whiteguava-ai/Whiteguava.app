'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import styles from './Globe3D.module.css';

const Globe3D = dynamic(() => import('./Globe3D'), { ssr: false });

export default function LazyGlobe() {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setReady(true);
          io.disconnect();
        }
      },
      { rootMargin: '280px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={styles.wrap}>
      {ready ? <Globe3D /> : <div className={styles.halo} aria-hidden="true" />}
    </div>
  );
}
