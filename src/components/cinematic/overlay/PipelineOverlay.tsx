import SceneOverlay from './SceneOverlay';
import { PIPELINE_CONTENT } from '@/data/cinematic';
import styles from './OverlayContent.module.css';

export default function PipelineOverlay() {
  return (
    <SceneOverlay rangeId="pipeline" verticalAlign="top">
      <div className={styles.inner} style={{ maxWidth: 680 }}>
        <p className={styles.eyebrow}>How We Build</p>
        <div className={styles.stepList}>
          {PIPELINE_CONTENT.map((step) => (
            <div key={step.num} className={styles.stepRow}>
              <span className={styles.stepNum}>{step.num}</span>
              <span className={styles.stepTitle}>{step.title}</span>
              <span className={styles.stepDesc}>{step.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </SceneOverlay>
  );
}
