'use client';

import { Canvas } from '@react-three/fiber';
import { PerformanceMonitor, Preload } from '@react-three/drei';
import { Suspense, useState } from 'react';
import CameraRig from './CameraRig';
import GridFloor from './GridFloor';
import Lighting from './Lighting';
import PostProcessing, { type Quality } from './PostProcessing';
import SceneVisibility from './SceneVisibility';
import VoidScene from './scenes/VoidScene';
import WorldFormsScene from './scenes/WorldFormsScene';
import TechnologyCoreScene from './scenes/TechnologyCoreScene';
import ServiceWorld from './scenes/ServiceWorld';
import PipelineWorld from './scenes/PipelineWorld';
import ProjectWorld from './scenes/ProjectWorld';
import FinalCTAScene from './scenes/FinalCTAScene';

interface CanvasRootProps {
  initialQuality: Quality;
}

export default function CanvasRoot({ initialQuality }: CanvasRootProps) {
  const [quality, setQuality] = useState<Quality>(initialQuality);

  return (
    <Canvas
      dpr={quality === 'full' ? [1, 2] : [1, 1.4]}
      gl={{ antialias: false, powerPreference: 'high-performance' }}
      camera={{ position: [0, 0, 9], fov: 42, near: 0.1, far: 60 }}
    >
      <color attach="background" args={['#05050a']} />
      <PerformanceMonitor
        onDecline={() => setQuality((q) => (q === 'full' ? 'light' : 'off'))}
        onIncline={() => setQuality((q) => (q === 'off' ? 'light' : 'full'))}
      >
        <Suspense fallback={null}>
          <Lighting />
          <GridFloor />
          <CameraRig />

          <SceneVisibility rangeId="void"><VoidScene /></SceneVisibility>
          <SceneVisibility rangeId="worldForms"><WorldFormsScene /></SceneVisibility>
          <SceneVisibility rangeId="techCore"><TechnologyCoreScene /></SceneVisibility>
          <SceneVisibility rangeId="services"><ServiceWorld /></SceneVisibility>
          <SceneVisibility rangeId="pipeline"><PipelineWorld /></SceneVisibility>
          <SceneVisibility rangeId="projects"><ProjectWorld /></SceneVisibility>
          <SceneVisibility rangeId="finalCta"><FinalCTAScene /></SceneVisibility>

          {quality !== 'off' && <PostProcessing quality={quality} />}
          <Preload all />
        </Suspense>
      </PerformanceMonitor>
    </Canvas>
  );
}
