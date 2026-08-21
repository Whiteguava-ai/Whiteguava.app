'use client';

import { Points, PointMaterial } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

export type Formation = 'cloud' | 'sphere' | 'point' | 'collapse';

// Deterministic PRNG (mulberry32) so particle layout generation is a pure
// function of its inputs, not a call to the impure global Math.random.
function makeRng(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

interface ParticleWorldProps {
  count: number;
  radius?: number;
  color?: string;
  formation: Formation;
  /** 0-1 progress driving the formation's shape (e.g. cloud -> sphere, sphere -> point) */
  progressRef: React.MutableRefObject<number>;
  rotationSpeed?: number;
}

export default function ParticleWorld({
  count,
  radius = 4,
  color = '#e63b2e',
  formation,
  progressRef,
  rotationSpeed = 0.02,
}: ParticleWorldProps) {
  const pointsRef = useRef<THREE.Points>(null);

  const { cloudPositions, spherePositions } = useMemo(() => {
    const rng = makeRng(count * 1000 + Math.round(radius * 100));
    const cloud = new Float32Array(count * 3);
    const sphere = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      cloud[i * 3] = (rng() - 0.5) * radius * 4;
      cloud[i * 3 + 1] = (rng() - 0.5) * radius * 4;
      cloud[i * 3 + 2] = (rng() - 0.5) * radius * 4;

      const theta = rng() * Math.PI * 2;
      const phi = Math.acos(2 * rng() - 1);
      const r = radius * (0.85 + rng() * 0.15);
      sphere[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      sphere[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      sphere[i * 3 + 2] = r * Math.cos(phi);
    }
    return { cloudPositions: cloud, spherePositions: sphere };
  }, [count, radius]);

  const live = useMemo(() => new Float32Array(cloudPositions), [cloudPositions]);

  // Mutating the `live` typed array in place every frame is required here:
  // it's the backing buffer for the GPU-uploaded point cloud, and replacing it
  // via setState every frame would defeat the purpose (allocate + re-upload
  // thousands of floats at 60fps instead of one flagged BufferAttribute update).
  /* eslint-disable react-hooks/immutability */
  useFrame((_, delta) => {
    const p = progressRef.current;
    let mix = 0;
    if (formation === 'cloud') mix = 0;
    else if (formation === 'sphere') mix = THREE.MathUtils.clamp(p * 1.4, 0, 1);
    else if (formation === 'point') mix = 1;
    else if (formation === 'collapse') mix = THREE.MathUtils.clamp(p, 0, 1);

    const collapseToPoint = formation === 'collapse';

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const cx = cloudPositions[i3];
      const cy = cloudPositions[i3 + 1];
      const cz = cloudPositions[i3 + 2];
      const sx = spherePositions[i3];
      const sy = spherePositions[i3 + 1];
      const sz = spherePositions[i3 + 2];

      let tx = THREE.MathUtils.lerp(cx, sx, mix);
      let ty = THREE.MathUtils.lerp(cy, sy, mix);
      let tz = THREE.MathUtils.lerp(cz, sz, mix);

      if (collapseToPoint) {
        tx = THREE.MathUtils.lerp(sx, 0, mix);
        ty = THREE.MathUtils.lerp(sy, 0, mix);
        tz = THREE.MathUtils.lerp(sz, 0, mix);
      }

      live[i3] = THREE.MathUtils.lerp(live[i3], tx, 0.06);
      live[i3 + 1] = THREE.MathUtils.lerp(live[i3 + 1], ty, 0.06);
      live[i3 + 2] = THREE.MathUtils.lerp(live[i3 + 2], tz, 0.06);
    }

    if (pointsRef.current) {
      const attr = pointsRef.current.geometry.attributes.position as THREE.BufferAttribute;
      attr.array = live;
      attr.needsUpdate = true;
      pointsRef.current.rotation.y += delta * rotationSpeed;
    }
  });
  /* eslint-enable react-hooks/immutability */

  return (
    <Points ref={pointsRef} positions={live} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={color}
        size={0.022}
        sizeAttenuation
        depthWrite={false}
        opacity={0.55}
      />
    </Points>
  );
}
