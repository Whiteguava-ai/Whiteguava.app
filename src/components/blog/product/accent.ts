import type { CSSProperties } from 'react';

function clamp(n: number): number {
  return Math.max(0, Math.min(255, Math.round(n)));
}

function parseHex(hex: string): [number, number, number] {
  const h = hex.replace('#', '');
  const full = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
  return [
    parseInt(full.slice(0, 2), 16),
    parseInt(full.slice(2, 4), 16),
    parseInt(full.slice(4, 6), 16),
  ];
}

function toHex([r, g, b]: [number, number, number]): string {
  return '#' + [r, g, b].map((c) => clamp(c).toString(16).padStart(2, '0')).join('');
}

function mix(a: [number, number, number], b: [number, number, number], t: number): [number, number, number] {
  return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
}

/**
 * Derives the four accent CSS variables every product widget needs from a
 * single brand hex, so the CSS never has to rely on `color-mix()` (which the
 * project's browserslist targets do not all support).
 */
export function accentVars(hex: string): CSSProperties {
  const rgb = parseHex(hex);
  const ink = toHex(mix(rgb, [0, 0, 0], 0.28));
  const wash = toHex(mix(rgb, [255, 255, 255], 0.92));
  const line = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0.24)`;
  return {
    ['--accent' as string]: hex,
    ['--accent-ink' as string]: ink,
    ['--accent-wash' as string]: wash,
    ['--accent-line' as string]: line,
  };
}
