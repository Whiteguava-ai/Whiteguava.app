'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';
import styles from './crm.module.css';

/** Salesforce Sales Cloud Enterprise, 10 seats, list price. */
const SF_ENTERPRISE_PER_YEAR = 21_000;
const PER_SECOND = SF_ENTERPRISE_PER_YEAR / (365 * 24 * 60 * 60);
const PER_DAY = SF_ENTERPRISE_PER_YEAR / 365;

/**
 * A meter that runs while you read. Every subscription CRM bills whether or not
 * you log in that day; GuavaCRM is already paid for. Under reduced motion the
 * meter is replaced with the plain daily / 5-year figures.
 */
export function CrmRentVsOwn() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduced = useReducedMotion();
  const [spent, setSpent] = useState(0);

  useEffect(() => {
    if (!inView || reduced) return;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      setSpent(((now - start) / 1000) * PER_SECOND);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduced]);

  return (
    <div className={styles.widget} ref={ref}>
      <div className={styles.widgetHead}>
        <span className={styles.kicker}>Rent vs own</span>
        <h3 className={styles.wTitle}>A subscription bills whether you use it or not</h3>
        <p className={styles.wNote}>
          At Salesforce Sales Cloud Enterprise list price, a 10-person team pays{' '}
          <b>${PER_DAY.toFixed(2)} every day</b>, ${SF_ENTERPRISE_PER_YEAR.toLocaleString('en-US')} a year,
          $105,000 over five years, and it never stops.
        </p>
      </div>

      <div className={styles.ticker}>
        <div className={`${styles.tickerCard} ${styles.rent}`}>
          <span className={styles.tickerTag}>Salesforce Enterprise · since you opened this page</span>
          <div className={styles.tickerAmount}>
            {reduced ? `$${PER_DAY.toFixed(2)} / day` : `$${spent.toFixed(4)}`}
          </div>
          <p className={styles.tickerSub}>
            and every day after, for as long as you keep the CRM.
          </p>
        </div>
        <div className={`${styles.tickerCard} ${styles.own}`}>
          <span className={styles.tickerTag}>GuavaCRM · since you opened this page</span>
          <div className={styles.tickerAmount}>$0.00</div>
          <p className={styles.tickerSub}>
            You paid once to set it up. The server is ~$28/month and the software is yours.
          </p>
        </div>
      </div>

      <p className={styles.tickerFoot}>
        Five years on Salesforce Enterprise: <b>$105,000</b>. Five years of GuavaCRM: about{' '}
        <b>$1,700</b> in server cost. Same leads, deals, pipeline and email.
      </p>
    </div>
  );
}
