'use client';

import { useEffect, useRef, useState } from 'react';
import { getProgress, subscribe } from '@/lib/cinematic/scrollStore';
import { getLocalProgress, isSceneActive, type SceneId } from '@/lib/cinematic/timeline';

/** Ref-based local progress (0-1) for one scene, for use inside R3F useFrame without re-renders. */
export function useSceneProgressRef(id: SceneId) {
  const ref = useRef(getLocalProgress(id, getProgress()));
  useEffect(() => {
    return subscribe((global) => {
      ref.current = getLocalProgress(id, global);
    });
  }, [id]);
  return ref;
}

/** React-state local progress for one scene, for DOM overlay components (cheap: one scene's range only). */
export function useSceneProgressState(id: SceneId) {
  const [progress, setProgress] = useState(() => getLocalProgress(id, getProgress()));
  const [active, setActive] = useState(() => isSceneActive(id, getProgress()));
  useEffect(() => {
    return subscribe((global) => {
      setProgress(getLocalProgress(id, global));
      setActive(isSceneActive(id, global));
    });
  }, [id]);
  return { progress, active };
}
