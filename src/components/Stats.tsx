'use client';
import SectionStage from '@/components/visual/SectionStage';
import styles from './Stats.module.css';

const items = [
  { label: 'OUR GROWTH', value: '230', suffix: 'K' },
  { label: 'UPTIME FOR KEY FLOWS', value: '95', suffix: '%' },
  { label: 'ON TIME DELIVERY', value: '99', suffix: '%' },
];

export default function Stats() {
  const loop = [...items, ...items, ...items, ...items];
  return (
    <section className={styles.stats}>
      <SectionStage dark>
      <div className="container">
        <div className={`${styles.top} reveal`}>
          <div className="section-badge section-badge-dark">
            <span className="section-badge-dot" />
            Statistic
          </div>
          <h2 className={styles.headline}>Human-centered AI, built for production</h2>
          <p className={styles.sub}>
            We shipped our first copilot in 7 weeks and cut support tickets by 31%. The eval dashboards made every decision obvious.
          </p>
        </div>
      </div>
      <div className={styles.marquee}>
        <div className={styles.track}>
          {loop.map((item, i) => (
            <div key={i} className={styles.item}>
              <span className={styles.label}>{item.label}</span>
              <span className={styles.value}>
                {item.value}
                <em>{item.suffix}</em>
              </span>
            </div>
          ))}
        </div>
      </div>
      </SectionStage>
    </section>
  );
}
