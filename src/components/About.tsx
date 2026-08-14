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
            <span className={styles.headlineDark}>Human-Centered AI,</span>
            <br />
            <span className={styles.headlineGrey}>Built for Production</span>
          </h2>
        </div>

        <div className={`${styles.darkCard} reveal reveal-delay-1`}>
          <div className={styles.darkCardInner}>
            <div className={styles.availablePill}>
              <span className={styles.liveDot} />
              Available for worldwide project
            </div>
            <h3 className={styles.locationTitle}>
              Based in <span className={styles.red}>Karnataka, India</span>
            </h3>
            <a href="#contact" className={styles.startBtn}><span>Start a Project</span></a>
          </div>
          <div className={styles.globeArea}>
            <Globe3D />
          </div>
        </div>

        <div className={styles.bottomGrid}>
          <div className={`${styles.statsCard} reveal reveal-delay-2`}>
            <div className={styles.statsLeft}>
              <p className={styles.statsText}>
                Trusted by 120+ clients across 4 industries –<br />
                shipping AI from idea to production in 8–10 weeks
              </p>
              <div className={styles.trustpilotRow}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#00B67A"><path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z"/></svg>
                <span className={styles.trustpilotLabel}>Trustpilot</span>
              </div>
              <div className={styles.stars}>
                {[1,2,3,4,5].map(i => (
                  <svg key={i} width="22" height="22" viewBox="0 0 24 24" fill="#00B67A">
                    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
                  </svg>
                ))}
              </div>
            </div>
            <div className={styles.bigStat}>85+</div>
          </div>

          <div className={`${styles.quoteCard} reveal reveal-delay-3`}>
            <img
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&q=80"
              alt="Ava Collins"
              className={styles.quoteAvatar}
            />
            <div className={styles.quoteContent}>
              <div className={styles.quoteMark}>&ldquo;&rdquo;</div>
              <p className={styles.quoteText}>Good AI feels obvious—because the hard work is hidden.</p>
              <p className={styles.quoteAuthor}>
                Ava Collins
                <span className={styles.quoteDivider}> | </span>
                <span className={styles.quoteRole}>AgenAI&apos;s Design Lead</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
