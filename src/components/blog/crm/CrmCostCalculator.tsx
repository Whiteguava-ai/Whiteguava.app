'use client';

import { useMemo, useState } from 'react';
import { m, useReducedMotion } from 'framer-motion';
import { CRM_PLANS, planCost } from './data';
import styles from './crm.module.css';

const YEAR_OPTIONS = [1, 3, 5] as const;

function money(n: number): string {
  return '$' + Math.round(n).toLocaleString('en-US');
}

/**
 * The centrepiece: pick a team size and a horizon, and every subscription CRM's
 * bill stacks up against GuavaCRM's flat server cost. Numbers are list price
 * from the September 2026 comparison doc.
 */
export function CrmCostCalculator() {
  const [users, setUsers] = useState(10);
  const [years, setYears] = useState<(typeof YEAR_OPTIONS)[number]>(5);
  const reduced = useReducedMotion();

  const rows = useMemo(() => {
    const costs = CRM_PLANS.map((plan) => ({
      plan,
      total: planCost(plan, users, years),
    }));
    const max = Math.max(...costs.map((c) => c.total));
    const guava = costs.find((c) => c.plan.key === 'guava')!.total;
    return costs.map((c) => ({
      ...c,
      pct: max > 0 ? Math.max((c.total / max) * 100, c.plan.key === 'guava' ? 1.5 : 4) : 0,
      mult: c.plan.key === 'guava' ? null : c.total / guava,
    }));
  }, [users, years]);

  const guavaTotal = rows.find((r) => r.plan.key === 'guava')!.total;
  const sfEnt = rows.find((r) => r.plan.key === 'sf-ent')!.total;
  const saving = sfEnt - guavaTotal;
  const usersPct = ((users - 3) / (100 - 3)) * 100;

  return (
    <div className={styles.widget}>
      <div className={styles.widgetHead}>
        <span className={styles.kicker}>Cost calculator</span>
        <h3 className={styles.wTitle}>What each CRM costs your team</h3>
        <p className={styles.wNote}>
          List price, annual billing, before tax. GuavaCRM is a one-time setup, then ~$28/month for the
          server it runs on — the bar below is that server cost only.
        </p>
      </div>

      <div className={styles.controls}>
        <div className={styles.control}>
          <label className={styles.controlLabel} htmlFor="crm-users">
            <span>Team size</span>
            <b>{users} {users === 1 ? 'person' : 'people'}</b>
          </label>
          <input
            id="crm-users"
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
        {rows.map(({ plan, total, pct, mult }) => {
          const ours = plan.key === 'guava';
          return (
            <div key={plan.key} className={styles.barRow}>
              <div className={styles.barLabel}>
                <span className={`${styles.barName} ${ours ? styles.ours : ''}`}>
                  {plan.name}
                  {ours && ' · AI included'}
                </span>
                <span className={styles.barAmount}>{money(total)}</span>
              </div>
              <div className={styles.barTrack}>
                <m.div
                  className={`${styles.barFill} ${ours ? styles.ours : ''}`}
                  initial={false}
                  animate={{ width: `${pct}%` }}
                  transition={reduced ? { duration: 0 } : { type: 'spring', stiffness: 120, damping: 20 }}
                />
              </div>
              {mult != null && (
                <span className={styles.barMult}>
                  {mult >= 10 ? Math.round(mult) : mult.toFixed(1)}× more than GuavaCRM
                </span>
              )}
            </div>
          );
        })}
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
          saved over {years} {years === 1 ? 'year' : 'years'} versus Salesforce Enterprise, for a{' '}
          {users}-person team — before the AI add-on Salesforce charges on top.
        </p>
      </div>
    </div>
  );
}
