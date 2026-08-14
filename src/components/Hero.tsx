'use client';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.card}>
        <div className={styles.blobs} aria-hidden="true">
          <span className={styles.blobGrey} />
          <span className={styles.blobSoft} />
          <span className={styles.ribbon} />
          <span className={styles.ribbonBlur} />
        </div>

        <div className={styles.inner}>
          <div className={`${styles.badge} reveal`}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M12 2l2.2 6.8H22l-6.2 4.5 2.4 7.2L12 16.2 5.8 20.5l2.4-7.2L2 8.8h7.8L12 2z" fill="#E63B2E"/>
            </svg>
            AI-Driven Agency
          </div>

          <h1 className={`${styles.headline} reveal reveal-delay-1`}>
            Your AI Sprint Team
            <br />
            on <span className={styles.demand}>Demand</span>
          </h1>

          <p className={`${styles.sub} reveal reveal-delay-2`}>
            From discovery to deployment, we plug into your stack to prototype,
            <br />
            validate, and launch AI experiences your users actually love.
          </p>

          <div className={`${styles.ctas} reveal reveal-delay-3`}>
            <a href="#services" className={styles.btnDark}><span>Explore Services</span></a>
            <a href="#pricing" className={styles.btnLight}><span>View Pricing Plans</span></a>
          </div>
        </div>

        <a href="#about" className={styles.scrollCue}>
          Scroll for more
          <span className={styles.scrollArrow}>↓</span>
        </a>
      </div>
    </section>
  );
}
