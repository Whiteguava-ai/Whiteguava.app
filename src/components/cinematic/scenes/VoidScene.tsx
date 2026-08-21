'use client';

import { Line } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';
import { useSceneProgressRef } from '@/hooks/useSceneProgress';
import OrganicCore from '../OrganicCore';
import ParticleWorld from '../ParticleWorld';

const AXIS_LEN = 2.4;
const AXES: Array<[[number, number, number], [number, number, number]]> = [
  [[-AXIS_LEN, 0, 0], [AXIS_LEN, 0, 0]],
  [[0, -AXIS_LEN, 0], [0, AXIS_LEN, 0]],
  [[0, 0, -AXIS_LEN], [0, 0, AXIS_LEN]],
];

export default function VoidScene() {
  const progressRef = useSceneProgressRef('void');
  const coreRef = useRef<THREE.Group>(null);
  const axisGroupRef = useRef<THREE.Group>(null);
  useFrame((state) => {
    const p = progressRef.current;
    const pulse = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.15;
    if (coreRef.current) {
      const s = THREE.MathUtils.lerp(0.06, 0.16, p) * pulse;
      coreRef.current.scale.setScalar(s);
    }
    if (axisGroupRef.current) {
      const s = THREE.MathUtils.lerp(0.05, 1, THREE.MathUtils.smoothstep(p, 0, 0.7));
      axisGroupRef.current.scale.setScalar(s);
      axisGroupRef.current.rotation.y = p * 0.6;
    }
  });

  return (
    <group>
      {/* A tiny spark of the same living energy core that recurs through the
          whole story — not a static point, a flickering organic ember — with
          axis guide lines drawing outward to establish the schematic language. */}
      <group ref={coreRef}>
        <OrganicCore
          progressRef={progressRef}
          radius={1}
          detail={3}
          freq={2.6}
          maxAmp={0.4}
          revealStart={0}
          revealEnd={1}
          rotationSpeed={0.5}
          colorA="#2a0a08"
          colorB="#e63b2e"
        />
      </group>
      <group ref={axisGroupRef}>
        {AXES.map((pts, i) => (
          <Line key={i} points={pts} color="#e63b2e" lineWidth={1} transparent opacity={0.5} />
        ))}
      </group>
      <ParticleWorld
        count={900}
        radius={3.4}
        color="#ffffff"
        formation="sphere"
        progressRef={progressRef}
        rotationSpeed={0.015}
      />
    </group>
  );
}
