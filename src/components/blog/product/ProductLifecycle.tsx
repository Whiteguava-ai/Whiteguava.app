'use client';

import { useState } from 'react';
import { AnimatePresence, m, useReducedMotion } from 'framer-motion';
import { accentVars } from './accent';
import { getProduct } from './registry';
import styles from './product.module.css';

/**
 * The core business process the product runs, as a stepper you can click
 * through. Each step shows what happens and the number that moves.
 */
export function ProductLifecycle({ product }: { product?: string }) {
  const def = getProduct(product);
  const reduced = useReducedMotion();
  const [step, setStep] = useState(0);

  if (!def) return null;
  const { steps, title, caption } = def.lifecycle;
  const current = steps[Math.min(step, steps.length - 1)];

  return (
    <div className={styles.widget} style={accentVars(def.accent)}>
      <div className={styles.widgetHead}>
        <span className={styles.kicker}>The process, working</span>
        <h3 className={styles.wTitle}>{title}</h3>
        <p className={styles.wNote}>{caption}</p>
      </div>

      <div className={styles.lcTrack}>
        {steps.map((s, i) => (
          <button
            key={s.label}
            type="button"
            className={styles.lcStepBtn}
            aria-label={`Go to step ${i + 1}: ${s.label}`}
            onClick={() => setStep(i)}
          >
            <m.span
              initial={false}
              animate={{ scaleX: i <= step ? 1 : 0 }}
              transition={reduced ? { duration: 0 } : { duration: 0.3, ease: 'easeOut' }}
            />
          </button>
        ))}
      </div>

      <div className={styles.lcStepRow}>
        {steps.map((s, i) => (
          <button
            key={s.label}
            type="button"
            className={styles.lcPill}
            aria-pressed={i === step}
            onClick={() => setStep(i)}
          >
            <span className={styles.lcPillNum}>{i + 1}</span>
            {s.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <m.div
          key={current.label}
          className={styles.lcPanel}
          initial={reduced ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduced ? { opacity: 0 } : { opacity: 0, y: -8 }}
          transition={{ duration: 0.22 }}
        >
          <div className={styles.lcPanelHead}>
            <p className={styles.lcPanelName}>
              {step + 1}. {current.label}
            </p>
            {current.metric && <span className={styles.lcPanelMetric}>{current.metric}</span>}
          </div>
          <p className={styles.lcPanelDetail}>{current.detail}</p>
        </m.div>
      </AnimatePresence>

      <div className={styles.lcNav}>
        <button type="button" onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0}>
          ← Back
        </button>
        <button
          type="button"
          onClick={() => setStep((s) => Math.min(steps.length - 1, s + 1))}
          disabled={step === steps.length - 1}
        >
          Next →
        </button>
      </div>
    </div>
  );
}
