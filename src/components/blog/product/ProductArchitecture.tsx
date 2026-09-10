'use client';

import { useMemo, useState } from 'react';
import { m, useReducedMotion } from 'framer-motion';
import { accentVars } from './accent';
import { getProduct } from './registry';
import type { ArchKind, ArchNode } from './types';
import styles from './product.module.css';

const KIND_FILL: Record<ArchKind, string> = {
  channel: '#f1f2f4',
  module: 'var(--accent-wash)',
  core: '#eceef1',
  automation: 'var(--accent-wash)',
  cloud: '#eef3ef',
};
const KIND_STROKE: Record<ArchKind, string> = {
  channel: '#c9ccd1',
  module: 'var(--accent)',
  core: '#b7bcc4',
  automation: 'var(--accent)',
  cloud: '#bcd3c2',
};
const KIND_LABEL: Record<ArchKind, string> = {
  channel: 'Where people work',
  module: 'App modules',
  core: 'Core records & engine',
  automation: 'Automation & AI',
  cloud: 'Your cloud',
};

const NODE_W = 158;
const NODE_H = 46;
const COL_GAP = 92;
const ROW_GAP = 20;
const PAD_X = 16;
const PAD_TOP = 34;
const PAD_BOTTOM = 16;

/**
 * A data-driven system diagram: columns are layers (left = where people work,
 * right = your cloud), boxes are components, lines are data flow. Hover or
 * focus a box to trace what connects to it.
 */
export function ProductArchitecture({ product }: { product?: string }) {
  const def = getProduct(product);
  const reduced = useReducedMotion();
  const [hot, setHot] = useState<string | null>(null);

  const layout = useMemo(() => {
    if (!def) return null;
    const { nodes, layers } = def.architecture;
    const byCol: ArchNode[][] = layers.map((_, c) => nodes.filter((n) => n.col === c));
    const maxRows = Math.max(...byCol.map((col) => col.length));
    const height = PAD_TOP + maxRows * NODE_H + (maxRows - 1) * ROW_GAP + PAD_BOTTOM;
    const width = PAD_X * 2 + layers.length * NODE_W + (layers.length - 1) * COL_GAP;

    const pos: Record<string, { x: number; y: number; cx: number; cy: number }> = {};
    byCol.forEach((col, c) => {
      const colH = col.length * NODE_H + (col.length - 1) * ROW_GAP;
      const startY = PAD_TOP + (height - PAD_TOP - PAD_BOTTOM - colH) / 2;
      const x = PAD_X + c * (NODE_W + COL_GAP);
      col.forEach((n, r) => {
        const y = startY + r * (NODE_H + ROW_GAP);
        pos[n.id] = { x, y, cx: x + NODE_W, cy: y + NODE_H / 2 };
      });
    });

    return { width, height, pos, byCol };
  }, [def]);

  if (!def || !layout) return null;
  const { architecture } = def;
  const { width, height, pos } = layout;

  const connected = new Set<string>();
  if (hot) {
    connected.add(hot);
    architecture.edges.forEach((e) => {
      if (e.from === hot) connected.add(e.to);
      if (e.to === hot) connected.add(e.from);
    });
  }

  const usedKinds = Array.from(new Set(architecture.nodes.map((n) => n.kind)));

  return (
    <div className={styles.widget} style={accentVars(def.accent)}>
      <div className={styles.widgetHead}>
        <span className={styles.kicker}>Architecture</span>
        <h3 className={styles.wTitle}>{architecture.title}</h3>
        <p className={styles.wNote}>{architecture.caption}</p>
      </div>

      <div className={styles.archScroll}>
        <svg
          className={styles.archSvg}
          viewBox={`0 0 ${width} ${height}`}
          role="img"
          aria-label={`${def.name} architecture diagram`}
        >
          {architecture.layers.map((label, c) => (
            <text
              key={label}
              className={styles.archLayerLabel}
              x={PAD_X + c * (NODE_W + COL_GAP) + NODE_W / 2}
              y={18}
              textAnchor="middle"
            >
              {label}
            </text>
          ))}

          {architecture.edges.map((e, i) => {
            const a = pos[e.from];
            const b = pos[e.to];
            if (!a || !b) return null;
            const mx = (a.cx + b.x) / 2;
            const d = `M ${a.cx} ${a.cy} C ${mx} ${a.cy}, ${mx} ${b.cy}, ${b.x} ${b.cy}`;
            const lit = hot != null && (e.from === hot || e.to === hot);
            const dim = hot != null && !lit;
            return (
              <m.path
                key={i}
                d={d}
                className={`${styles.archEdge} ${lit ? styles.lit : ''} ${dim ? styles.dim : ''}`}
                initial={reduced ? false : { pathLength: 0, opacity: 0 }}
                whileInView={reduced ? undefined : { pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.03 }}
              />
            );
          })}

          {architecture.nodes.map((n, i) => {
            const p = pos[n.id];
            if (!p) return null;
            const dim = hot != null && !connected.has(n.id);
            return (
              <m.g
                key={n.id}
                className={`${styles.archNode} ${dim ? styles.dim : ''}`}
                tabIndex={0}
                onMouseEnter={() => setHot(n.id)}
                onMouseLeave={() => setHot(null)}
                onFocus={() => setHot(n.id)}
                onBlur={() => setHot(null)}
                initial={reduced ? false : { opacity: 0, y: 8 }}
                whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
              >
                <rect
                  x={p.x}
                  y={p.y}
                  width={NODE_W}
                  height={NODE_H}
                  rx={11}
                  fill={KIND_FILL[n.kind]}
                  stroke={hot === n.id ? 'var(--accent)' : KIND_STROKE[n.kind]}
                  strokeWidth={hot === n.id ? 2.4 : 1.4}
                />
                <text
                  className={styles.archNodeLabel}
                  x={p.x + NODE_W / 2}
                  y={p.y + NODE_H / 2 + 4}
                  textAnchor="middle"
                >
                  {n.label}
                </text>
              </m.g>
            );
          })}
        </svg>
      </div>

      <div className={styles.archLegend}>
        {usedKinds.map((k) => (
          <span key={k}>
            <span
              className={styles.archSwatch}
              style={{ background: KIND_FILL[k], borderColor: KIND_STROKE[k] }}
            />
            {KIND_LABEL[k]}
          </span>
        ))}
      </div>
    </div>
  );
}
