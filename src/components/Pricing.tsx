'use client';
import { useState } from 'react';
import SectionStage from '@/components/visual/SectionStage';
import styles from './Pricing.module.css';

const starterFeatures = [
  'Discovery workshop',
  'Opportunity brief',
  'Clickable UX',
  '1 data source & 1 integration',
  'LLM prototype',
  'Evaluation report',
];

const enterpriseFeatures = [
  'Everything in Starter',
  'CI/CD, tracing, alerts, guardrails',
  'Full eval dashboard',
  '3 data sources & 3 integrations',
  'Custom agent framework',
  'Dedicated ML engineer',
  'Priority support & SLA',
];

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  const starterPrice  = annual ? '$9,900'  : '$990';
  const enterprisePrice = annual ? '$19,900' : '$1,990';
  const period = annual ? '/ year' : '/ month';

  return (
    <section id="pricing" className={styles.pricing}>
      <SectionStage>
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <div className="section-badge">
            <span className="section-badge-dot" />
            Pricing Plans
          </div>
          <h2 className={styles.headline}>
            From pilot to enterprise
            <br />
            clear scope, transparent costs
          </h2>
          <div className={styles.toggleRow}>
            <button
              className={`${styles.toggle} ${annual ? styles.toggleOn : ''}`}
              onClick={() => setAnnual(a => !a)}
              aria-label="Toggle billing period"
            >
              <span className={styles.toggleThumb} />
            </button>
            <span className={styles.toggleLabel}>{annual ? 'annually' : 'monthly'}</span>
          </div>
        </div>

        <div className={`${styles.plans} reveal reveal-delay-2`}>
          {/* Starter */}
          <div className={styles.planLight}>
            <div className={styles.planHeader}>
              <div className={styles.planIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <span className={styles.planName}>Starter Plan</span>
              <span className={styles.planFor}>For startups</span>
            </div>
            <div className={styles.planPrice}>
              <span className={styles.priceAmt}>{starterPrice}</span>
              <span className={styles.pricePeriod}>{period}</span>
            </div>
            <a href="#contact" className={`${styles.planBtn} btn-dark`}><span>Get Started</span></a>
            <div className={styles.included}>
              <p className={styles.includedLabel}>What&apos;s included</p>
              <p className={styles.includedDesc}>Prove value in two weeks with a clickable UX, tech spike, and a clear go/no-go roadmap.</p>
            </div>
            <ul className={styles.featureList}>
              {starterFeatures.map((f, i) => (
                <li key={i} className={styles.featureItem}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2.5"><path d="M5 12l5 5L20 7"/></svg>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Enterprise */}
          <div className={styles.planDark}>
            <div className={styles.planHeader}>
              <div className={`${styles.planIcon} ${styles.planIconDark}`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <span className={styles.planNameDark}>Enterprise Plan</span>
              <span className={styles.planForDark}>For organisations</span>
            </div>
            <div className={styles.planPrice}>
              <span className={`${styles.priceAmt} ${styles.priceAmtDark}`}>{enterprisePrice}</span>
              <span className={`${styles.pricePeriod} ${styles.pricePeriodDark}`}>{period}</span>
            </div>
            <a href="#contact" className={`${styles.planBtnDark}`}><span>Get Started</span></a>
            <div className={styles.includedDark}>
              <p className={styles.includedLabelDark}>What&apos;s included</p>
              <p className={styles.includedDescDark}>Compliance-ready delivery for complex orgs—multi-env releases, canaries, and change management.</p>
            </div>
            <ul className={styles.featureListDark}>
              {enterpriseFeatures.map((f, i) => (
                <li key={i} className={styles.featureItemDark}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2.5"><path d="M5 12l5 5L20 7"/></svg>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      </SectionStage>
    </section>
  );
}
