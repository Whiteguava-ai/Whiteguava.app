'use client';

import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useSceneProgressRef } from '@/hooks/useSceneProgress';
import { SERVICES_CONTENT } from '@/data/cinematic';

const COUNT = SERVICES_CONTENT.length;

export default function ServiceWorld() {
  const progressRef = useSceneProgressRef('services');
  const groupRef = useRef<THREE.Group>(null);
  const panelRefs = useRef<Array<THREE.Mesh | null>>([]);

  // Spread wide of center and pushed well back — this sits behind the DOM
  // text grid as faint atmosphere, not laid out to mirror/collide with it.
  const layout = useMemo(() => {
    const cols = 4;
    return SERVICES_CONTENT.map((_, i) => {
      const col = i % cols;
      const row = Math.floor(i / cols);
      return {
        x: (col - (cols - 1) / 2) * 2.1,
        y: (0.5 - row) * 1.9,
      };
    });
  }, []);

  useFrame((state) => {
    const p = progressRef.current;
    const step = 1 / COUNT;
    panelRefs.current.forEach((mesh, i) => {
      if (!mesh) return;
      const local = THREE.MathUtils.clamp((p - i * step * 0.6) / (step * 1.4), 0, 1);
      const eased = THREE.MathUtils.smoothstep(local, 0, 1);
      mesh.scale.setScalar(THREE.MathUtils.lerp(0.001, 1, eased));
      const mat = mesh.material as THREE.MeshBasicMaterial;
      mat.opacity = eased * 0.18;
      mesh.position.z = THREE.MathUtils.lerp(-4.6, -3.4, eased) + Math.sin(state.clock.elapsedTime * 0.4 + i) * 0.05;
      mesh.rotation.y = Math.sin(state.clock.elapsedTime * 0.3 + i) * 0.12;
    });
    if (groupRef.current) {
      groupRef.current.position.z = THREE.MathUtils.lerp(-1.4, 0, THREE.MathUtils.smoothstep(p, 0, 0.15));
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, -1]}>
      {/* Faint distant markers, one per service — depth and atmosphere behind
          the readable text grid, not a competing foreground diagram. */}
      {layout.map((pos, i) => (
        <mesh
          key={SERVICES_CONTENT[i].num}
          ref={(el) => { panelRefs.current[i] = el; }}
          position={[pos.x, pos.y, 0]}
        >
          <boxGeometry args={[0.55, 0.46, 0.04]} />
          <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0} />
        </mesh>
      ))}
    </group>
  );
}
