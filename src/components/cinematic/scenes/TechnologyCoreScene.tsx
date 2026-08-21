'use client';

import { Line } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useSceneProgressRef } from '@/hooks/useSceneProgress';
import { TECH_CORE_CONTENT } from '@/data/cinematic';
import OrganicCore from '../OrganicCore';

const ORBITER_COUNT = Math.min(10, TECH_CORE_CONTENT.techs.length);
const dummy = new THREE.Object3D();

function circlePoints(radius: number, segments = 128): Array<[number, number, number]> {
  return Array.from({ length: segments + 1 }, (_, i) => {
    const a = (i / segments) * Math.PI * 2;
    return [Math.cos(a) * radius, 0, Math.sin(a) * radius];
  });
}

export default function TechnologyCoreScene() {
  const progressRef = useSceneProgressRef('techCore');
  const ringGroupRef = useRef<THREE.Group>(null);
  const orbitersRef = useRef<THREE.InstancedMesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const ringPts = useMemo(() => circlePoints(2.6), []);

  const orbitData = useMemo(() => {
    return Array.from({ length: ORBITER_COUNT }, (_, i) => {
      const ring = i % 2;
      const radius = 2.0 + ring * 0.7;
      const speed = 0.09 + ring * 0.025;
      const offset = (i / ORBITER_COUNT) * Math.PI * 2;
      const tilt = (ring - 0.5) * 0.6;
      return { radius, speed, offset, tilt };
    });
  }, []);

  useFrame((state, delta) => {
    const p = progressRef.current;
    const reveal = THREE.MathUtils.smoothstep(p, 0, 0.35);
    const t = state.clock.elapsedTime;

    if (groupRef.current) {
      groupRef.current.scale.setScalar(THREE.MathUtils.lerp(0.4, 1, reveal));
      groupRef.current.rotation.y += delta * 0.05;
    }

    if (ringGroupRef.current) {
      ringGroupRef.current.rotation.z += delta * 0.03;
      const s = THREE.MathUtils.lerp(0.6, 1, reveal);
      ringGroupRef.current.scale.setScalar(s);
    }

    if (orbitersRef.current) {
      const activation = THREE.MathUtils.smoothstep(p, 0.15, 0.85);
      const activeCount = Math.floor(activation * ORBITER_COUNT);
      orbitData.forEach((o, i) => {
        const angle = t * o.speed + o.offset;
        const visible = i <= activeCount ? 1 : 0;
        const r = o.radius * THREE.MathUtils.lerp(0.3, 1, reveal);
        dummy.position.set(
          Math.cos(angle) * r,
          Math.sin(angle * 0.6) * r * 0.3 + o.tilt,
          Math.sin(angle) * r
        );
        const s = visible * THREE.MathUtils.lerp(0.06, 0.09, reveal);
        dummy.scale.setScalar(s || 0.0001);
        dummy.updateMatrix();
        orbitersRef.current!.setMatrixAt(i, dummy.matrix);
      });
      orbitersRef.current.instanceMatrix.needsUpdate = true;
    }
  });

  return (
    <group ref={groupRef}>
      {/* The recurring living core, now the full "engine" — held inside a thin
          drafted ring rather than a wireframe cage. */}
      <OrganicCore
        progressRef={progressRef}
        radius={0.85}
        detail={6}
        freq={1}
        maxAmp={0.16}
        revealStart={0}
        revealEnd={0.35}
        rotationSpeed={0.08}
        colorA="#161616"
        colorB="#e63b2e"
      />
      <group ref={ringGroupRef} rotation={[Math.PI / 2.2, 0.3, 0]}>
        <Line points={ringPts} color="#ffffff" lineWidth={1} transparent opacity={0.3} />
      </group>
      <instancedMesh ref={orbitersRef} args={[undefined, undefined, ORBITER_COUNT]}>
        <octahedronGeometry args={[1, 0]} />
        <meshBasicMaterial color="#ffffff" wireframe toneMapped={false} />
      </instancedMesh>
    </group>
  );
}
