'use client';

import { useMemo, useState } from 'react';
import { m, useReducedMotion } from 'framer-motion';
import { accentVars } from './accent';
import { getProduct } from './registry';
import type { ProductPlan } from './types';
import styles from './product.module.css';

const YEAR_OPTIONS = [1, 3, 5] as const;

function money(n: number): string {
  return '$' + Math.round(n).toLocaleString('en-US');
}

function planCost(plan: ProductPlan, users: number, years: number): number {
  if (plan.flatYr != null) return plan.flatYr * years;
  return plan.perUserMo * users * 12 * years;
}

/**
 * Pick a team size and a horizon; every subscription plan's bill stacks up
 * against the flat Guava server cost. List price, September 2026.
 */
export function ProductCostCalculator({ product }: { product?: string }) {
  const def = getProduct(product);
  const [users, setUsers] = useState(10);
  const [years, setYears] = useState<(typeof YEAR_OPTIONS)[number]>(5);
  const reduced = useReducedMotion();

  const rows = useMemo(() => {
    if (!def) return [];
    const costs = def.plans.map((plan) => ({ plan, total: planCost(plan, users, years) }));
    const max = Math.max(...costs.map((c) => c.total));
    const ours = costs.find((c) => c.plan.ours)?.total ?? 1;
    return costs.map((c) => ({
      ...c,
      pct: max > 0 ? Math.max((c.total / max) * 100, c.plan.ours ? 1.5 : 4) : 0,
      mult: c.plan.ours ? null : c.total / ours,
    }));
  }, [def, users, years]);

  if (!def) return null;

  const ourTotal = rows.find((r) => r.plan.ours)?.total ?? 0;
  const refRow = rows.find((r) => !r.plan.ours && r.total === Math.max(...rows.filter((x) => !x.plan.ours).map((x) => x.total)));
  const saving = (refRow?.total ?? 0) - ourTotal;
  const usersPct = ((users - 3) / (100 - 3)) * 100;

  return (
    <div className={styles.widget} style={accentVars(def.accent)}>
      <div className={styles.widgetHead}>
        <span className={styles.kicker}>Cost calculator</span>
        <h3 className={styles.wTitle}>What each option costs your team</h3>
        <p className={styles.wNote}>
          List price, annual billing, before tax. {def.name} is a one-time setup, then about $
          {def.serverMo}/month for the server it runs on — the bar below is that server cost only.
        </p>
      </div>

      <div className={styles.controls}>
        <div className={styles.control}>
          <label className={styles.controlLabel} htmlFor={`cc-${def.key}`}>
            <span>Team size</span>
            <b>
              {users} {users === 1 ? 'person' : 'people'}
            </b>
          </label>
          <input
            id={`cc-${def.key}`}
            className={styles.range}
            style={{ ['--pct' as string]: `${usersPct}%` }}
            type="range"
            min={3}
            max={100}
            value={users}
            onChange={(e) => setUsers(Number(e.target.value))}
          />
        </div>
        <div className={styles.control} style={{ flexGrow: 0 }}>
          <span className={styles.controlLabel}>Over</span>
          <div className={styles.segmented} role="group" aria-label="Time horizon">
            {YEAR_OPTIONS.map((y) => (
              <button
                key={y}
                type="button"
                className={styles.segBtn}
                aria-pressed={years === y}
                onClick={() => setYears(y)}
              >
                {y} {y === 1 ? 'year' : 'years'}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.bars}>
        {rows.map(({ plan, total, pct, mult }) => (
          <div key={plan.key} className={styles.barRow}>
            <div className={styles.barLabel}>
              <span className={`${styles.barName} ${plan.ours ? styles.ours : ''}`}>
                {plan.name}
                {plan.ours && ' · AI included'}
              </span>
              <span className={styles.barAmount}>{money(total)}</span>
            </div>
            <div className={styles.barTrack}>
              <m.div
                className={`${styles.barFill} ${plan.ours ? styles.ours : ''}`}
                initial={false}
                animate={{ width: `${pct}%` }}
                transition={reduced ? { duration: 0 } : { type: 'spring', stiffness: 120, damping: 20 }}
              />
            </div>
            {mult != null && (
              <span className={styles.barMult}>
                {mult >= 10 ? Math.round(mult) : mult.toFixed(1)}× more than {def.name}
              </span>
            )}
          </div>
        ))}
      </div>

      <div className={styles.savings}>
        <m.span
          key={Math.round(saving)}
          className={styles.savingsNum}
          initial={reduced ? false : { opacity: 0.4, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {money(saving)}
        </m.span>
        <p className={styles.savingsCaption}>
          saved over {years} {years === 1 ? 'year' : 'years'} versus {refRow?.plan.name ?? def.refName}, for a{' '}
          {users}-person team — with the AI assistant already included on {def.name}.
        </p>
      </div>
    </div>
  );
}
