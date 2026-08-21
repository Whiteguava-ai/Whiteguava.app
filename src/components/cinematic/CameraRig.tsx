'use client';

import { useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';
import { getProgress, subscribe } from '@/lib/cinematic/scrollStore';
import { getSceneRange } from '@/lib/cinematic/timeline';

interface Keyframe {
  at: number;
  position: [number, number, number];
  lookAt: [number, number, number];
  fov: number;
}

const KEYFRAMES: Keyframe[] = [
  { at: getSceneRange('void').start, position: [0, 0, 9], lookAt: [0, 0, 0], fov: 42 },
  { at: getSceneRange('void').end, position: [0, 0.2, 6.5], lookAt: [0, 0, 0], fov: 42 },
  { at: getSceneRange('worldForms').end, position: [1.2, 0.4, 5.5], lookAt: [0, 0, 0], fov: 45 },
  { at: getSceneRange('techCore').start, position: [0, 0.5, 8], lookAt: [0, 0, 0], fov: 50 },
  { at: getSceneRange('techCore').end, position: [0, 0.8, 6.2], lookAt: [0, 0, 0], fov: 46 },
  { at: getSceneRange('services').end, position: [-1, 0.6, 6.8], lookAt: [0, 0, -1], fov: 46 },
  { at: getSceneRange('pipeline').end, position: [0.6, 0.3, 7], lookAt: [0, 0, -1], fov: 44 },
  { at: getSceneRange('projects').end, position: [0, 0.4, 6.5], lookAt: [0, 0, 0], fov: 42 },
  { at: getSceneRange('finalCta').end, position: [0, 0, 3.5], lookAt: [0, 0, 0], fov: 38 },
];

function sampleKeyframes(progress: number) {
  let lower = KEYFRAMES[0];
  let upper = KEYFRAMES[KEYFRAMES.length - 1];
  for (let i = 0; i < KEYFRAMES.length - 1; i++) {
    if (progress >= KEYFRAMES[i].at && progress <= KEYFRAMES[i + 1].at) {
      lower = KEYFRAMES[i];
      upper = KEYFRAMES[i + 1];
      break;
    }
  }
  const span = upper.at - lower.at;
  const t = span <= 0 ? 0 : Math.min(1, Math.max(0, (progress - lower.at) / span));
  return { lower, upper, t };
}

const tmpPos = new THREE.Vector3();
const tmpLook = new THREE.Vector3();

export default function CameraRig() {
  const { camera } = useThree();
  const progressRef = useRef(getProgress());
  const mouseRef = useRef({ x: 0, y: 0 });

  // Mutating `camera`/typed arrays imperatively inside useFrame is the
  // standard react-three-fiber render pattern (updating on every frame via
  // setState would be far too expensive); the React Compiler purity/immutability
  // rules don't have an escape hatch for this yet, so they're disabled below.
  /* eslint-disable react-hooks/immutability */
  useFrame(() => {
    const { lower, upper, t } = sampleKeyframes(progressRef.current);

    tmpPos.set(
      THREE.MathUtils.lerp(lower.position[0], upper.position[0], t) + mouseRef.current.x * 0.18,
      THREE.MathUtils.lerp(lower.position[1], upper.position[1], t) + mouseRef.current.y * 0.1,
      THREE.MathUtils.lerp(lower.position[2], upper.position[2], t)
    );
    camera.position.lerp(tmpPos, 0.06);

    tmpLook.set(
      THREE.MathUtils.lerp(lower.lookAt[0], upper.lookAt[0], t),
      THREE.MathUtils.lerp(lower.lookAt[1], upper.lookAt[1], t),
      THREE.MathUtils.lerp(lower.lookAt[2], upper.lookAt[2], t)
    );
    camera.lookAt(tmpLook);

    if (camera instanceof THREE.PerspectiveCamera) {
      const fov = THREE.MathUtils.lerp(lower.fov, upper.fov, t);
      if (Math.abs(camera.fov - fov) > 0.01) {
        camera.fov = THREE.MathUtils.lerp(camera.fov, fov, 0.08);
        camera.updateProjectionMatrix();
      }
    }
  });
  /* eslint-enable react-hooks/immutability */

  useFrame(() => {
    progressRef.current = getProgress();
  });

  return <CameraMouseTracker mouseRef={mouseRef} />;
}

function CameraMouseTracker({ mouseRef }: { mouseRef: React.MutableRefObject<{ x: number; y: number }> }) {
  useFrame(({ pointer }) => {
    mouseRef.current.x = pointer.x;
    mouseRef.current.y = pointer.y;
  });
  return null;
}

export function useGlobalProgressSubscription(cb: (p: number) => void) {
  return subscribe(cb);
}
