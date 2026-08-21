export type SceneId =
  | 'void'
  | 'worldForms'
  | 'techCore'
  | 'services'
  | 'pipeline'
  | 'projects'
  | 'finalCta';

interface SceneWeight {
  id: SceneId;
  weightVh: number;
}

export const SCENES: SceneWeight[] = [
  { id: 'void', weightVh: 1.4 },
  { id: 'worldForms', weightVh: 1.6 },
  { id: 'techCore', weightVh: 2.6 },
  { id: 'services', weightVh: 2.2 },
  { id: 'pipeline', weightVh: 1.6 },
  { id: 'projects', weightVh: 2.0 },
  { id: 'finalCta', weightVh: 1.6 },
];

const totalWeight = SCENES.reduce((sum, s) => sum + s.weightVh, 0);

export const TOTAL_VH = totalWeight;

interface SceneRange {
  start: number;
  end: number;
}

const ranges = new Map<SceneId, SceneRange>();
let cursor = 0;
for (const scene of SCENES) {
  const start = cursor / totalWeight;
  cursor += scene.weightVh;
  const end = cursor / totalWeight;
  ranges.set(scene.id, { start, end });
}

export function getSceneRange(id: SceneId): SceneRange {
  const range = ranges.get(id);
  if (!range) throw new Error(`Unknown cinematic scene id: ${id}`);
  return range;
}

export function getLocalProgress(id: SceneId, globalProgress: number) {
  const { start, end } = getSceneRange(id);
  if (end <= start) return 0;
  return Math.min(1, Math.max(0, (globalProgress - start) / (end - start)));
}

export function isSceneActive(id: SceneId, globalProgress: number, bleed = 0.04) {
  const { start, end } = getSceneRange(id);
  return globalProgress >= start - bleed && globalProgress <= end + bleed;
}

function smoothstep(edge0: number, edge1: number, x: number) {
  const t = Math.min(1, Math.max(0, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

/**
 * A symmetric 0→1→0 envelope over a scene's own local progress (0-1): ramps
 * up over [0, fadeInEnd], holds at 1, then ramps back down over
 * [fadeOutStart, 1]. Every scene needs this on its outer group so an outgoing
 * scene has visibly shrunk away before the next scene's crossfade window
 * begins — without it, two adjacent scenes both render at full strength
 * during the transition and visually collide.
 */
export function sceneEnvelope(localProgress: number, fadeInEnd = 0.12, fadeOutStart = 0.88) {
  const fadeIn = smoothstep(0, fadeInEnd, localProgress);
  const fadeOut = 1 - smoothstep(fadeOutStart, 1, localProgress);
  return Math.min(fadeIn, fadeOut);
}
