'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';
import { accentVars } from './accent';
import { getProduct } from './registry';
import styles from './product.module.css';

/**
 * A meter that runs while you read: a subscription bills whether or not anyone
 * logs in that day; a product you own is already paid for. Under reduced
 * motion the meter is replaced with the plain daily / 5-year figures.
 */
export function ProductRentVsOwn({ product }: { product?: string }) {
  const def = getProduct(product);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduced = useReducedMotion();
  const [spent, setSpent] = useState(0);

  const perYear = def?.refPerYear10 ?? 0;
  const perSecond = perYear / (365 * 24 * 60 * 60);
  const perDay = perYear / 365;

  useEffect(() => {
    if (!inView || reduced || !def) return;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      setSpent(((now - start) / 1000) * perSecond);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduced, def, perSecond]);

  if (!def) return null;

  return (
    <div className={styles.widget} ref={ref} style={accentVars(def.accent)}>
      <div className={styles.widgetHead}>
        <span className={styles.kicker}>Rent vs own</span>
        <h3 className={styles.wTitle}>A subscription bills whether you use it or not</h3>
        <p className={styles.wNote}>
          At {def.refName} list price, a 10-person team pays <b>${perDay.toFixed(2)} every day</b>, $
          {perYear.toLocaleString('en-US')} a year, ${def.refFiveYear.toLocaleString('en-US')} over five
          years, and it never stops.
        </p>
      </div>

      <div className={styles.ticker}>
        <div className={`${styles.tickerCard} ${styles.rent}`}>
          <span className={styles.tickerTag}>{def.refName} · since you opened this page</span>
          <div className={styles.tickerAmount}>
            {reduced ? `$${perDay.toFixed(2)} / day` : `$${spent.toFixed(4)}`}
          </div>
          <p className={styles.tickerSub}>and every day after, for as long as you keep the software.</p>
        </div>
        <div className={`${styles.tickerCard} ${styles.own}`}>
          <span className={styles.tickerTag}>{def.name} · since you opened this page</span>
          <div className={styles.tickerAmount}>$0.00</div>
          <p className={styles.tickerSub}>
            You paid once to set it up. The server is about ${def.serverMo}/month and the software is
            yours.
          </p>
        </div>
      </div>

      <p className={styles.tickerFoot}>
        Five years on {def.refName}: <b>${def.refFiveYear.toLocaleString('en-US')}</b>. Five years of{' '}
        {def.name}: about <b>${(def.serverMo * 12 * 5).toLocaleString('en-US')}</b> in server cost. Same
        records, same workflows, same AI.
      </p>
    </div>
  );
}
