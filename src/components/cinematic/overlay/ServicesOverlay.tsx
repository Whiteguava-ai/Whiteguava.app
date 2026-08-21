import SceneOverlay from './SceneOverlay';
import { SERVICES_CONTENT } from '@/data/cinematic';
import styles from './OverlayContent.module.css';

export default function ServicesOverlay() {
  return (
    <SceneOverlay rangeId="services" verticalAlign="top">
      <div className={styles.inner} style={{ maxWidth: 880 }}>
        <p className={styles.eyebrow}>What We Build</p>
        <h2 className={styles.headlineSmall}>AI software, agents, and automation — built around your business.</h2>
        <div className={styles.grid}>
          {SERVICES_CONTENT.map((service) => (
            <div key={service.num} className={styles.card}>
              <div className={styles.cardTitle}>({service.num}) {service.title}</div>
              <p className={styles.cardDesc}>{service.desc}</p>
              {service.href && (
                <a href={service.href} className={styles.cardLink}>{service.more} →</a>
              )}
            </div>
          ))}
        </div>
      </div>
    </SceneOverlay>
  );
}
