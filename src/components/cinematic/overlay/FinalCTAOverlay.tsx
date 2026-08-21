import SceneOverlay from './SceneOverlay';
import { FINAL_CTA_CONTENT } from '@/data/cinematic';
import styles from './OverlayContent.module.css';

export default function FinalCTAOverlay() {
  return (
    <SceneOverlay rangeId="finalCta">
      <div className={styles.inner}>
        <h2 className={styles.headline}>{FINAL_CTA_CONTENT.headline}</h2>
        <p className={styles.sub}>{FINAL_CTA_CONTENT.sub}</p>
        <div className={styles.ctas}>
          <a href={FINAL_CTA_CONTENT.cta.href} className="btn-accent">
            <span>{FINAL_CTA_CONTENT.cta.label}</span>
          </a>
        </div>
      </div>
    </SceneOverlay>
  );
}
