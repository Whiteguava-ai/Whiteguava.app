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
          <div className={styles.badge}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M12 2l2.2 6.8H22l-6.2 4.5 2.4 7.2L12 16.2 5.8 20.5l2.4-7.2L2 8.8h7.8L12 2z" fill="#E63B2E"/>
            </svg>
            AI + SOFTWARE + AUTOMATION
          </div>

          <h1 className={styles.headline}>
            Build Smarter.
            <br />
            With <span className={styles.demand}>AI.</span>
          </h1>

          <p className={styles.sub}>
            WhiteGuava builds AI agents, intelligent software, automation systems,
            <br />
            and custom digital solutions that turn real business problems into working products.
          </p>

          <div className={styles.ctas}>
            <a href="/#contact" className={styles.btnDark}><span>Start a Project</span></a>
            <a href="/#works" className={styles.btnLight}><span>Explore Our Work</span></a>
          </div>
        </div>

        <a href="/#about" className={styles.scrollCue}>
          Scroll for more
          <span className={styles.scrollArrow}>↓</span>
        </a>
      </div>
    </section>
  );
}
