'use client';

import { useState } from 'react';
import { AnimatePresence, m, useReducedMotion } from 'framer-motion';
import { accentVars } from './accent';
import { getProduct } from './registry';
import styles from './product.module.css';

/**
 * A clickable map of everything that ships in the box. Pick a module on the
 * left, read what it actually does on the right.
 */
export function ProductModuleExplorer({ product }: { product?: string }) {
  const def = getProduct(product);
  const reduced = useReducedMotion();
  const [idx, setIdx] = useState(0);

  if (!def) return null;
  const modules = def.modules;
  const active = modules[Math.min(idx, modules.length - 1)];

  return (
    <div className={styles.widget} style={accentVars(def.accent)}>
      <div className={styles.widgetHead}>
        <span className={styles.kicker}>What ships in the box</span>
        <h3 className={styles.wTitle}>{modules.length} modules, one setup fee</h3>
        <p className={styles.wNote}>
          Every module below is part of {def.name} from day one — no tier to unlock it, no add-on to
          buy. Pick one to see what it covers.
        </p>
      </div>

      <div className={styles.modLayout}>
        <div className={styles.modList}>
          {modules.map((mod, i) => (
            <button
              key={mod.name}
              type="button"
              className={styles.modItem}
              aria-pressed={i === idx}
              onClick={() => setIdx(i)}
            >
              <div className={styles.modItemName}>{mod.name}</div>
              <div className={styles.modItemTag}>{mod.tag}</div>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <m.div
            key={active.name}
            className={styles.modPanel}
            initial={reduced ? false : { opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, x: -10 }}
            transition={{ duration: 0.22 }}
          >
            <p className={styles.modPanelName}>{active.name}</p>
            <p className={styles.modPanelBlurb}>{active.blurb}</p>
            <ul className={styles.modPanelPoints}>
              {active.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </m.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
