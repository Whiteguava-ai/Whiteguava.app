'use client';

import { useSceneProgressState } from '@/hooks/useSceneProgress';
import type { SceneId } from '@/lib/cinematic/timeline';
import styles from './SceneOverlay.module.css';

function edgeFade(progress: number, fadeInAtStart: boolean, fadeOutAtEnd: boolean, fadeIn = 0.16, fadeOut = 0.84) {
  if (fadeInAtStart && progress < fadeIn) return progress / fadeIn;
  if (fadeOutAtEnd && progress > fadeOut) return 1 - (progress - fadeOut) / (1 - fadeOut);
  return 1;
}

export default function SceneOverlay({
  rangeId,
  children,
  align = 'center',
  verticalAlign = 'center',
  fadeInAtStart = true,
  fadeOutAtEnd = true,
}: {
  rangeId: SceneId;
  children: React.ReactNode;
  align?: 'left' | 'center' | 'right';
  /** Content taller than the viewport (grids, lists) must use 'top' — centering an overflowing block pushes its top edge up behind the fixed navbar. */
  verticalAlign?: 'center' | 'top';
  /** Set false for the scene that opens the whole experience — there is no prior scene to fade in from, so content must be visible immediately on load. */
  fadeInAtStart?: boolean;
  /** Set false for the scene that closes the whole experience if it should stay fully visible until the pin releases. */
  fadeOutAtEnd?: boolean;
}) {
  const { progress, active } = useSceneProgressState(rangeId);
  const opacity = Math.max(0, Math.min(1, edgeFade(progress, fadeInAtStart, fadeOutAtEnd)));

  return (
    <div
      className={`${styles.overlay} ${styles[align]} ${verticalAlign === 'top' ? styles.top : ''}`}
      style={{
        opacity,
        transform: `translateY(${(1 - opacity) * 16}px)`,
        pointerEvents: active && opacity > 0.4 ? 'auto' : 'none',
        visibility: opacity > 0.01 ? 'visible' : 'hidden',
      }}
    >
      {children}
    </div>
  );
}
