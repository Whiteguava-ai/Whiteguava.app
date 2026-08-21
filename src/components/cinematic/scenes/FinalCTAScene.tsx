'use client';

import { Line } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useSceneProgressRef } from '@/hooks/useSceneProgress';
import OrganicCore from '../OrganicCore';
import ParticleWorld from '../ParticleWorld';

const RING_COUNT = 3;

function unitCircle(segments = 80): Array<[number, number, number]> {
  return Array.from({ length: segments + 1 }, (_, i) => {
    const a = (i / segments) * Math.PI * 2;
    return [Math.cos(a), Math.sin(a), 0];
  });
}

export default function FinalCTAScene() {
  const progressRef = useSceneProgressRef('finalCta');
  const ringRefs = useRef<Array<THREE.Group | null>>([]);
  const pts = useMemo(() => unitCircle(), []);

  useFrame((state) => {
    const p = progressRef.current;
    const converge = THREE.MathUtils.smoothstep(p, 0.3, 1);

    if (converge > 0.02) {
      const t = state.clock.elapsedTime;
      ringRefs.current.forEach((ring, i) => {
        if (!ring) return;
        const phase = ((t * 0.35 + i / RING_COUNT) % 1);
        const scale = THREE.MathUtils.lerp(0.3, 2.6, phase) * (0.4 + converge * 0.6);
        ring.scale.setScalar(scale);
        const line = ring.children[0] as unknown as { material: THREE.Material & { opacity: number } };
        if (line?.material) line.material.opacity = (1 - phase) * 0.4 * converge;
      });
    }
  });

  return (
    <group>
      <ParticleWorld
        count={1100}
        radius={3.2}
        color="#e63b2e"
        formation="collapse"
        progressRef={progressRef}
        rotationSpeed={0.03}
      />
      {/* Radiating wireframe pulse rings on convergence — a schematic "signal
          lock" — around the same living core from every prior scene, now at
          its most intense, right before the handoff to the real contact form. */}
      {Array.from({ length: RING_COUNT }).map((_, i) => (
        <group key={i} ref={(el) => { ringRefs.current[i] = el; }} rotation={[Math.PI / 2, 0, 0]}>
          <Line points={pts} color="#e63b2e" lineWidth={1} transparent opacity={0} />
        </group>
      ))}
      <OrganicCore
        progressRef={progressRef}
        radius={1}
        detail={6}
        freq={1.6}
        maxAmp={0.3}
        revealStart={0.25}
        revealEnd={1}
        rotationSpeed={0.3}
        colorA="#3a0f0c"
        colorB="#ff6b52"
      />
    </group>
  );
}
