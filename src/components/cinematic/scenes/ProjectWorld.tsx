'use client';

import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';
import { useSceneProgressRef } from '@/hooks/useSceneProgress';
import { PROJECTS_CONTENT } from '@/data/cinematic';

const COUNT = PROJECTS_CONTENT.length;

export default function ProjectWorld() {
  const progressRef = useSceneProgressRef('projects');
  const cardRefs = useRef<Array<THREE.Mesh | null>>([]);
  useFrame((state) => {
    const p = progressRef.current;
    const step = 1 / COUNT;
    cardRefs.current.forEach((mesh, i) => {
      if (!mesh) return;
      const center = (i + 0.5) * step;
      const dist = Math.abs(p - center);
      const eased = THREE.MathUtils.clamp(1 - dist / (step * 0.9), 0, 1);
      mesh.position.x = (i - (COUNT - 1) / 2) * 0.05 + (i % 2 === 0 ? -1 : 1) * (1 - eased) * 3.2;
      mesh.position.z = THREE.MathUtils.lerp(-3.6, -2.6, eased);
      mesh.scale.setScalar(THREE.MathUtils.lerp(0.5, 1, eased));
      const mat = mesh.material as THREE.MeshBasicMaterial;
      mat.opacity = eased * 0.2;
      mesh.rotation.y = Math.sin(state.clock.elapsedTime * 0.2 + i) * 0.1;
    });
  });

  return (
    <group>
      {PROJECTS_CONTENT.map((proj, i) => (
        <mesh
          key={proj.title}
          ref={(el) => { cardRefs.current[i] = el; }}
          position={[0, 0.2, -1.8]}
        >
          <boxGeometry args={[1.5, 0.95, 0.05]} />
          <meshBasicMaterial color="#e63b2e" wireframe transparent opacity={0} />
        </mesh>
      ))}
    </group>
  );
}
