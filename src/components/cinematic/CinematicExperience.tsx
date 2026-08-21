'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import SceneController from './SceneController';
import StaticFallback from './fallback/StaticFallback';
import useReducedMotionOrNoWebGL from './useReducedMotionOrNoWebGL';
import VoidOverlay from './overlay/VoidOverlay';
import WorldFormsOverlay from './overlay/WorldFormsOverlay';
import TechCoreOverlay from './overlay/TechCoreOverlay';
import ServicesOverlay from './overlay/ServicesOverlay';
import PipelineOverlay from './overlay/PipelineOverlay';
import ProjectsOverlay from './overlay/ProjectsOverlay';
import FinalCTAOverlay from './overlay/FinalCTAOverlay';
import styles from './CinematicExperience.module.css';
import type { Quality } from './PostProcessing';

const CanvasRoot = dynamic(() => import('./CanvasRoot'), { ssr: false });

function getInitialQuality(): Quality {
  if (typeof window === 'undefined') return 'full';
  return window.innerWidth <= 768 ? 'light' : 'full';
}

/**
 * True once the browser is idle after first paint. The three.js/R3F/postprocessing
 * bundle is hundreds of KB and its synchronous module evaluation cost blocks the
 * main thread — mounting the Canvas immediately delays painting the (much
 * cheaper) text overlay, which is what should actually count as the page's
 * meaningful first paint. Deferring to idle lets the text render first and the
 * 3D layer load in as a progressive enhancement right after.
 */
function useIdle() {
  const [idle, setIdle] = useState(false);
  useEffect(() => {
    if (typeof window.requestIdleCallback === 'function') {
      const id = window.requestIdleCallback(() => setIdle(true), { timeout: 1200 });
      return () => window.cancelIdleCallback(id);
    }
    const id = window.setTimeout(() => setIdle(true), 1);
    return () => window.clearTimeout(id);
  }, []);
  return idle;
}

export default function CinematicExperience() {
  const shouldFallback = useReducedMotionOrNoWebGL();
  const canvasReady = useIdle();

  // Renders this cinematic tree by default (matching SSR) for the common
  // case; only the minority who need StaticFallback (reduced motion / no
  // WebGL) pay a one-time swap once the client confirms that after mount.
  if (shouldFallback) {
    return <StaticFallback />;
  }

  return (
    <SceneController>
      <div className={styles.canvasLayer}>
        {canvasReady && <CanvasRoot initialQuality={getInitialQuality()} />}
      </div>
      <div className={styles.overlayLayer}>
        <VoidOverlay />
        <WorldFormsOverlay />
        <TechCoreOverlay />
        <ServicesOverlay />
        <PipelineOverlay />
        <ProjectsOverlay />
        <FinalCTAOverlay />
      </div>
    </SceneController>
  );
}
