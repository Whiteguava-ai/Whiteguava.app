'use client';

import { Bloom, EffectComposer, Vignette } from '@react-three/postprocessing';

export type Quality = 'full' | 'light' | 'off';

export default function PostProcessing({ quality }: { quality: Quality }) {
  if (quality === 'off') return null;
  return (
    <EffectComposer enableNormalPass={false} multisampling={quality === 'full' ? 4 : 0}>
      {/* High threshold + modest intensity: only the bright red accent lines and
          convergence core should glow, not every thin wireframe edge — a
          blueprint stays crisp, it doesn't smear. */}
      <Bloom
        intensity={quality === 'full' ? 0.5 : 0.28}
        luminanceThreshold={0.35}
        luminanceSmoothing={0.25}
        mipmapBlur
      />
      <Vignette eskil={false} offset={0.3} darkness={0.6} />
    </EffectComposer>
  );
}
