'use client';

import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import type { Group } from 'three';
import * as THREE from 'three';
import { getProgress } from '@/lib/cinematic/scrollStore';
import { getLocalProgress, isSceneActive, sceneEnvelope, type SceneId } from '@/lib/cinematic/timeline';

/**
 * Wraps a scene so it both (a) turns off rendering when far out of range, and
 * (b) scales itself down to nothing at the start/end of its own local
 * progress — a symmetric fade envelope. Without (b), a scene that only fades
 * IN (as every scene here does internally) stays at full size right up until
 * this component's visibility boolean flips, so during the brief crossfade
 * bleed window the outgoing and incoming scenes both render at full strength
 * and visually collide. The envelope fixes that at a single, shared choke
 * point instead of requiring fade-out logic in every scene file.
 */
export default function SceneVisibility({
  rangeId,
  children,
}: {
  rangeId: SceneId;
  children: React.ReactNode;
}) {
  const groupRef = useRef<Group>(null);

  useFrame(() => {
    if (!groupRef.current) return;
    const progress = getProgress();
    const active = isSceneActive(rangeId, progress);
    if (groupRef.current.visible !== active) {
      groupRef.current.visible = active;
    }
    if (active) {
      const local = getLocalProgress(rangeId, progress);
      const envelope = sceneEnvelope(local);
      groupRef.current.scale.setScalar(THREE.MathUtils.lerp(0.001, 1, envelope));
    }
  });

  return <group ref={groupRef}>{children}</group>;
}
