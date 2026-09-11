import SectionStage from '@/components/visual/SectionStage';
import { GUAVA_PRODUCTS } from '@/data/guava';
import styles from './Guava.module.css';

/**
 * The homepage's dedicated spotlight on the Guava Product Suite — WhiteGuava's
 * most important line of business, so it gets its own full section (all 10
 * products, real cards) rather than being one tile among nine in `Services`.
 * Reuses `Guava.module.css` and `GUAVA_PRODUCTS` directly from the `/guava`
 * pillar page so the two never drift out of sync.
 */
export default function GuavaShowcase() {
  return (
    <section id="guava-suite">
      <SectionStage>
        <div className="container">
          <div className={styles.wrap}>
            <div className={`${styles.header} reveal`}>
              <div className="section-badge">
                <span className="section-badge-dot" />
                Guava Product Suite
              </div>
              <h2 className={styles.headline}>Ten products. Own every one.</h2>
            </div>
            <div className={`${styles.lede} reveal reveal-delay-1`} style={{ marginBottom: 32 }}>
              <p>
                CRM, ERP, HR, LMS, BI, helpdesk, website builder, lending, project work and the
                low-code platform behind them all — deployed on your own cloud, bought once, with
                AI built in. No per-user licences, no renewals, no growth penalty.
              </p>
            </div>
            <div className={styles.grid}>
              {GUAVA_PRODUCTS.map((p, i) => (
                <a
                  key={p.name}
                  href={p.href}
                  className={`${styles.card} reveal reveal-delay-${Math.min((i % 3) + 1, 6)}`}
                >
                  <span className={styles.cardCat}>{p.category}</span>
                  <span className={styles.cardName}>{p.name}</span>
                  <span className={styles.cardDoes}>{p.does}</span>
                  <span className={styles.cardReplaces}>
                    Instead of <b>{p.replaces}</b>
                  </span>
                  <span className={styles.cardFoot}>
                    <span className={styles.cardPrice}>~${p.serverMo}/mo server</span>
                    <span className={styles.cardMore}>Read the breakdown →</span>
                  </span>
                </a>
              ))}
            </div>
            <div className={`${styles.ctaRow} reveal reveal-delay-2`}>
              <a href="/guava" className="btn-dark">
                <span>Explore the full Guava Product Suite</span>
              </a>
            </div>
          </div>
        </div>
      </SectionStage>
    </section>
  );
}
