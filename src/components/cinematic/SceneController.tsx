'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import { getSceneRange, TOTAL_VH } from '@/lib/cinematic/timeline';
import { setProgress } from '@/lib/cinematic/scrollStore';
import styles from './SceneController.module.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Legacy homepage nav anchors (#home/#about/#services/#works/#process) now
// point into scene ranges within the pinned scroll region instead of separate
// sections, so Navbar/Footer links keep working.
const NAV_ANCHORS: Array<{ id: string; at: number }> = [
  { id: 'home', at: 0 },
  { id: 'about', at: getSceneRange('techCore').start },
  { id: 'services', at: getSceneRange('services').start },
  { id: 'process', at: getSceneRange('pipeline').start },
  { id: 'works', at: getSceneRange('projects').start },
];

export default function SceneController({ children }: { children: React.ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const pinnedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const pinned = pinnedRef.current;
    if (!wrapper || !pinned) return;

    const trigger = ScrollTrigger.create({
      trigger: wrapper,
      start: 'top top',
      end: 'bottom bottom',
      pin: pinned,
      pinSpacing: false,
      scrub: 1,
      onUpdate: (self) => setProgress(self.progress),
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <div ref={wrapperRef} className={styles.wrapper} style={{ height: `${TOTAL_VH * 100}vh` }}>
      {NAV_ANCHORS.map((anchor) => (
        <span
          key={anchor.id}
          id={anchor.id}
          aria-hidden="true"
          className={styles.anchor}
          style={{ top: `${anchor.at * 100}%` }}
        />
      ))}
      <div ref={pinnedRef} className={styles.pinned}>
        {children}
      </div>
    </div>
  );
}
