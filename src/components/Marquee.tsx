'use client';
import styles from './Marquee.module.css';

const logos = [
  { name: 'LOGOIPSUM', icon: 'L' },
  { name: 'Brandify', icon: 'B' },
  { name: 'NexGen', icon: 'N' },
  { name: 'Logoipsum', icon: 'G' },
  { name: 'TechStack', icon: 'T' },
  { name: 'CloudBase', icon: 'C' },
  { name: 'DataFlow', icon: 'D' },
  { name: 'QuantAI', icon: 'Q' },
  { name: 'SyncOps', icon: 'S' },
  { name: 'VentureX', icon: 'V' },
];

export default function Marquee() {
  const items = [...logos, ...logos];
  return (
    <div className={styles.section}>
      <div className={styles.labelCol}>
        <p className={styles.label}>Trusted by 100+<br />top-tier brands</p>
      </div>
      <div className={styles.track}>
        <div className={styles.inner}>
          {items.map((logo, i) => (
            <div key={i} className={styles.logoItem}>
              <LogoMark name={logo.name} icon={logo.icon} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LogoMark({ name, icon }: { name: string; icon: string }) {
  return (
    <span className={styles.logoInner}>
      <span className={styles.logoIcon}>{icon}</span>
      <span className={styles.logoText}>{name}</span>
    </span>
  );
}
