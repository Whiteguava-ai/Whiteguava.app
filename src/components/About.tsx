'use client';
import Globe3D from '@/components/visual/Globe3D';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <div className="section-badge">
            <span className="section-badge-dot" />
            About Us
          </div>
          <h2 className={styles.headline}>
            <span className={styles.headlineDark}>From Business Problem</span>
            <br />
            <span className={styles.headlineGrey}>To Working Product</span>
          </h2>
        </div>

        <div className={`${styles.darkCard} reveal reveal-delay-1`}>
          <div className={styles.darkCardInner}>
            <div className={styles.availablePill}>
              <span className={styles.liveDot} />
              Available for worldwide projects
            </div>
            <h3 className={styles.locationTitle}>
              Based in <span className={styles.red}>Bengaluru, Karnataka, India</span>
            </h3>
            <a href="/#contact" className={styles.startBtn}><span>Start a Project</span></a>
          </div>
          <div className={styles.globeArea}>
            <Globe3D />
          </div>
        </div>

        <div className={styles.bottomGrid}>
          <div className={`${styles.statsCard} reveal reveal-delay-2`}>
            <div className={styles.statsLeft}>
              <p className={styles.statsText}>
                WhiteGuava is an AI software development company in Bengaluru, India. We combine AI, software engineering, automation,<br />
                data, and cloud to build solutions that actually work in production.
              </p>
              <div className={styles.trustpilotRow}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#1A1A1A"><path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z"/></svg>
                <span className={styles.trustpilotLabel}>WhiteGuava</span>
              </div>
              <div className={styles.stars}>
                {['AI','SW','AUTO','DATA','CLOUD'].map(tag => (
                  <span key={tag} style={{
                    display: 'inline-block',
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    padding: '3px 8px',
                    border: '1px solid #1A1A1A',
                    borderRadius: '4px',
                    marginRight: '4px',
                  }}>{tag}</span>
                ))}
              </div>
            </div>
            <div className={styles.bigStat}>5+</div>
          </div>

          <div className={`${styles.quoteCard} reveal reveal-delay-3`}>
            <div className={styles.quoteContent}>
              <div className={styles.quoteMark}>&ldquo;&rdquo;</div>
              <p className={styles.quoteText}>Good AI feels obvious — because the hard work is hidden.</p>
              <p className={styles.quoteAuthor}>
                WhiteGuava
                <span className={styles.quoteDivider}> | </span>
                <span className={styles.quoteRole}>AI + Software + Automation</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
