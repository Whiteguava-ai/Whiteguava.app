'use client';
import SectionStage from '@/components/visual/SectionStage';
import styles from './Pricing.module.css';

const discoveryFeatures = [
  'Business problem discovery',
  'Use-case identification',
  'AI opportunity mapping',
  'Technical recommendation',
  'Project roadmap',
];

const buildFeatures = [
  'Custom AI systems',
  'Application development',
  'Automation workflows',
  'System integrations',
  'Cloud deployment',
  'Testing & QA',
];

const enterpriseFeatures = [
  'Custom architecture design',
  'Advanced AI systems',
  'Multiple system integrations',
  'Cloud infrastructure setup',
  'Ongoing development support',
  'Priority engagement',
];

export default function Pricing() {
  return (
    <section id="pricing" className={styles.pricing}>
      <SectionStage>
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <div className="section-badge">
            <span className="section-badge-dot" />
            Solutions
          </div>
          <h2 className={styles.headline}>
            Solutions That Fit
            <br />
            Your Needs
          </h2>
        </div>

        <div className={`${styles.plans} reveal reveal-delay-2`}>
          {/* AI Discovery */}
          <div className={styles.planLight}>
            <div className={styles.planHeader}>
              <div className={styles.planIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
                </svg>
              </div>
              <span className={styles.planName}>AI Discovery</span>
              <span className={styles.planFor}>Explore where AI creates value</span>
            </div>
            <div className={styles.planPrice}>
              <span className={styles.priceAmt}>Let&apos;s Talk</span>
            </div>
            <a href="#contact" className={`${styles.planBtn} btn-dark`}><span>Discuss Your Project</span></a>
            <div className={styles.included}>
              <p className={styles.includedLabel}>What&apos;s included</p>
              <p className={styles.includedDesc}>For businesses exploring where AI can create real, measurable value in their operations.</p>
            </div>
            <ul className={styles.featureList}>
              {discoveryFeatures.map((f, i) => (
                <li key={i} className={styles.featureItem}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2.5"><path d="M5 12l5 5L20 7"/></svg>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Custom Build */}
          <div className={styles.planDark}>
            <div className={styles.planHeader}>
              <div className={`${styles.planIcon} ${styles.planIconDark}`}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                </svg>
              </div>
              <span className={styles.planNameDark}>Custom Build</span>
              <span className={styles.planForDark}>For businesses ready to build</span>
            </div>
            <div className={styles.planPrice}>
              <span className={`${styles.priceAmt} ${styles.priceAmtDark}`}>Let&apos;s Talk</span>
            </div>
            <a href="#contact" className={`${styles.planBtnDark}`}><span>Discuss Your Project</span></a>
            <div className={styles.includedDark}>
              <p className={styles.includedLabelDark}>What&apos;s included</p>
              <p className={styles.includedDescDark}>Full-cycle development — AI systems, applications, automation, integrations, and deployment.</p>
            </div>
            <ul className={styles.featureListDark}>
              {buildFeatures.map((f, i) => (
                <li key={i} className={styles.featureItemDark}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2.5"><path d="M5 12l5 5L20 7"/></svg>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Enterprise card below */}
        <div className={`reveal reveal-delay-3`} style={{ marginTop: '16px' }}>
          <div className={styles.planLight} style={{ maxWidth: '100%' }}>
            <div className={styles.planHeader}>
              <div className={styles.planIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <span className={styles.planName}>Enterprise / Custom</span>
              <span className={styles.planFor}>For complex business requirements</span>
            </div>
            <div className={styles.planPrice}>
              <span className={styles.priceAmt}>Let&apos;s Talk</span>
            </div>
            <a href="#contact" className={`${styles.planBtn} btn-dark`}><span>Discuss Your Project</span></a>
            <ul className={styles.featureList} style={{ marginTop: '16px' }}>
              {enterpriseFeatures.map((f, i) => (
                <li key={i} className={styles.featureItem}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="2.5"><path d="M5 12l5 5L20 7"/></svg>
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
