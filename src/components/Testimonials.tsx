'use client';
import SectionStage from '@/components/visual/SectionStage';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <SectionStage>
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <div className="section-badge">
            <span className="section-badge-dot" />
            Work With Us
          </div>
          <h2 className={styles.headline}>Have a Problem Worth Solving?</h2>
        </div>

        <div className={`${styles.stage} reveal reveal-delay-2`}>
          <div className={styles.card}>
            <p className={styles.quote}>
              Tell us what you&apos;re trying to build, automate, or improve. We&apos;ll help you identify the right technical approach and turn it into a working solution.
            </p>
            <div className={styles.meta}>
              <strong>WhiteGuava</strong>
              <span>AI + Software + Automation · Bengaluru, India</span>
            </div>
            <div className={styles.counter}>
              <a href="#contact" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                background: '#1A1A1A',
                color: '#fff',
                borderRadius: '100px',
                fontWeight: 600,
                fontSize: '14px',
                textDecoration: 'none',
                letterSpacing: '0.01em',
              }}>
                Start a Project →
              </a>
            </div>
          </div>
          <div className={styles.nav}>
            <a href="#contact" className={styles.navBtn} aria-label="Start a project"><span>→</span></a>
          </div>
        </div>
      </div>
      </SectionStage>
    </section>
  );
}
