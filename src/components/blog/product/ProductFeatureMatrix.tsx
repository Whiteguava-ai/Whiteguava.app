'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, m, useReducedMotion } from 'framer-motion';
import { accentVars } from './accent';
import { getProduct } from './registry';
import styles from './product.module.css';

/**
 * Every capability the product ships out of the box, with the tier or add-on
 * you'd pay for the same thing elsewhere. Filter by area, search, tap a row.
 */
export function ProductFeatureMatrix({ product }: { product?: string }) {
  const def = getProduct(product);
  const reduced = useReducedMotion();
  const [active, setActive] = useState<string>('All');
  const [q, setQ] = useState('');
  const [open, setOpen] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return (def?.matrix ?? [])
      .filter((g) => active === 'All' || g.group === active)
      .map((g) => ({
        ...g,
        rows: g.rows.filter(
          (r) =>
            !needle ||
            r.capability.toLowerCase().includes(needle) ||
            r.elsewhere.toLowerCase().includes(needle),
        ),
      }))
      .filter((g) => g.rows.length > 0);
  }, [def, active, q]);

  if (!def) return null;
  const allGroups = def.matrix;
  const total = allGroups.reduce((n, g) => n + g.rows.length, 0);

  return (
    <div className={styles.widget} style={accentVars(def.accent)}>
      <div className={styles.widgetHead}>
        <span className={styles.kicker}>Feature matrix</span>
        <h3 className={styles.wTitle}>{total} capabilities, included from day one</h3>
        <p className={styles.wNote}>
          Each row is standard in {def.name}. The badge shows the cheapest competitor plan (or paid
          add-on) that unlocks the same thing.
        </p>
      </div>

      <div className={styles.matrixControls}>
        {['All', ...allGroups.map((g) => g.group)].map((name) => (
          <button
            key={name}
            type="button"
            className={styles.chip}
            aria-pressed={active === name}
            onClick={() => setActive(name)}
          >
            {name}
          </button>
        ))}
        <input
          className={styles.search}
          type="search"
          placeholder="Search capabilities…"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          aria-label="Search capabilities"
        />
      </div>

      <div className={styles.matrixCard}>
        {filtered.map((g) => (
          <div key={g.group}>
            <div className={styles.matrixGroup}>{g.group}</div>
            {g.rows.map((r) => {
              const id = `${g.group}::${r.capability}`;
              const isOpen = open === id;
              return (
                <div key={id}>
                  <button
                    type="button"
                    className={styles.mRow}
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : id)}
                  >
                    <span className={styles.mCap}>{r.capability}</span>
                    <span className={styles.mOurs} aria-label={`Included in ${def.name}`}>
                      ✓
                    </span>
                  </button>
                  {reduced ? (
                    isOpen && (
                      <div className={styles.mDetail}>
                        {r.note && <p style={{ margin: 0 }}>{r.note}</p>}
                        <span className={styles.mElse}>Elsewhere: {r.elsewhere}</span>
                      </div>
                    )
                  ) : (
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <m.div
                          key="d"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                          style={{ overflow: 'hidden' }}
                        >
                          <div className={styles.mDetail}>
                            {r.note && <p style={{ margin: 0 }}>{r.note}</p>}
                            <span className={styles.mElse}>Elsewhere: {r.elsewhere}</span>
                          </div>
                        </m.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </div>
        ))}
        {filtered.length === 0 && (
          <div className={styles.mDetail} style={{ borderTop: 'none' }}>
            No capability matches “{q}”.
          </div>
        )}
      </div>
    </div>
  );
}
