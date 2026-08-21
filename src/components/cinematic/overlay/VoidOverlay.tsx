import SceneOverlay from './SceneOverlay';
import { VOID_CONTENT } from '@/data/cinematic';
import styles from './OverlayContent.module.css';

export default function VoidOverlay() {
  return (
    <SceneOverlay rangeId="void" fadeInAtStart={false}>
      <div className={styles.inner}>
        <span className={styles.badge}>{VOID_CONTENT.badge}</span>
        <p className={styles.quote}>
          {VOID_CONTENT.line1}
          <br />
          {VOID_CONTENT.line2}
        </p>
      </div>
    </SceneOverlay>
  );
}
