'use client';

import { Grid } from '@react-three/drei';

/**
 * A persistent CAD-style grid plane, always present (not scene-gated) — the
 * one continuous surface that ties every scene together as "one engineered
 * world," per the blueprint/technical-drawing visual language.
 */
export default function GridFloor() {
  return (
    <Grid
      position={[0, -1.9, 0]}
      args={[40, 40]}
      cellSize={0.5}
      cellThickness={0.5}
      cellColor="#2a2a30"
      sectionSize={2.5}
      sectionThickness={1}
      sectionColor="#e63b2e"
      fadeDistance={16}
      fadeStrength={1.4}
      infiniteGrid
      followCamera={false}
    />
  );
}
