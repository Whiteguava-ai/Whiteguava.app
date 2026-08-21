'use client';

import { Line } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useSceneProgressRef } from '@/hooks/useSceneProgress';
import OrganicCore from '../OrganicCore';
import ParticleWorld from '../ParticleWorld';

function circlePoints(radius: number, segments = 96): Array<[number, number, number]> {
  return Array.from({ length: segments + 1 }, (_, i) => {
    const a = (i / segments) * Math.PI * 2;
    return [Math.cos(a) * radius, 0, Math.sin(a) * radius];
  });
}

export default function WorldFormsScene() {
  const progressRef = useSceneProgressRef('worldForms');
  const ringRef = useRef<THREE.Group>(null);
  const ringPts = useMemo(() => circlePoints(2.1), []);

  useFrame((_, delta) => {
    const p = progressRef.current;
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.08;
      ringRef.current.scale.setScalar(THREE.MathUtils.lerp(0.001, 1, THREE.MathUtils.smoothstep(p, 0, 0.6)));
    }
  });

  return (
    <group>
      <ParticleWorld
        count={700}
        radius={3.8}
        color="#ffffff"
        formation="sphere"
        progressRef={progressRef}
        rotationSpeed={0.02}
      />
      {/* The same living core from the Void, now stabilizing into a larger,
          steadier form — held inside a thin drafted ring, not a static polyhedron. */}
      <OrganicCore
        progressRef={progressRef}
        radius={1.1}
        detail={5}
        freq={1.3}
        maxAmp={0.24}
        revealStart={0}
        revealEnd={0.65}
        rotationSpeed={0.15}
        colorA="#161616"
        colorB="#e63b2e"
      />
      <group ref={ringRef} rotation={[Math.PI / 2.4, 0, 0]}>
        <Line points={ringPts} color="#e63b2e" lineWidth={1} transparent opacity={0.45} />
      </group>
    </group>
  );
}
