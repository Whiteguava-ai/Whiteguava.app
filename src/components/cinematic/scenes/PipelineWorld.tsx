'use client';

import { Line } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import type { Line2, LineSegments2 } from 'three-stdlib';
import * as THREE from 'three';
import { useSceneProgressRef } from '@/hooks/useSceneProgress';
import { PIPELINE_CONTENT } from '@/data/cinematic';

const COUNT = PIPELINE_CONTENT.length;
const SEGMENTS = 128;

export default function PipelineWorld() {
  const progressRef = useSceneProgressRef('pipeline');
  const lineRef = useRef<Line2 | LineSegments2>(null);
  const nodeRefs = useRef<Array<THREE.Mesh | null>>([]);

  const curve = useMemo(() => {
    const points = Array.from({ length: COUNT }, (_, i) => {
      const t = i / (COUNT - 1);
      return new THREE.Vector3(
        (t - 0.5) * 5.5,
        Math.sin(t * Math.PI * 1.4) * 0.6,
        Math.cos(t * Math.PI * 2) * 0.4
      );
    });
    return new THREE.CatmullRomCurve3(points);
  }, []);

  const pathPoints = useMemo(
    () => curve.getPoints(SEGMENTS).map((v) => [v.x, v.y, v.z] as [number, number, number]),
    [curve]
  );

  const nodePositions = useMemo(
    () => Array.from({ length: COUNT }, (_, i) => curve.getPointAt(i / (COUNT - 1))),
    [curve]
  );
  useFrame(() => {
    const p = progressRef.current;
    if (lineRef.current) {
      const mat = lineRef.current.material as THREE.Material & { opacity: number };
      mat.opacity = THREE.MathUtils.lerp(0.15, 0.55, THREE.MathUtils.smoothstep(p, 0, 0.3));
    }
    const step = 1 / COUNT;
    nodeRefs.current.forEach((mesh, i) => {
      if (!mesh) return;
      const local = THREE.MathUtils.clamp((p - i * step) / step, 0, 1);
      const eased = THREE.MathUtils.smoothstep(local, 0, 1);
      mesh.scale.setScalar(THREE.MathUtils.lerp(0.001, 1, eased));
      const mat = mesh.material as THREE.MeshBasicMaterial;
      mat.opacity = THREE.MathUtils.lerp(0.2, 1, eased);
      mat.color.set(eased > 0.5 ? '#e63b2e' : '#ffffff');
    });
  });

  return (
    <group>
      {/* A thin drafted path with nodes lighting up in sequence — a process
          flow diagram, not a rendered pipe. */}
      <Line ref={lineRef} points={pathPoints} color="#ffffff" lineWidth={1} transparent opacity={0.15} />
      {nodePositions.map((pos, i) => (
        <mesh
          key={PIPELINE_CONTENT[i].num}
          ref={(el) => { nodeRefs.current[i] = el; }}
          position={pos}
        >
          <octahedronGeometry args={[0.12, 0]} />
          <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.2} />
        </mesh>
      ))}
    </group>
  );
}
