import SceneOverlay from './SceneOverlay';
import { WORLD_FORMS_CONTENT } from '@/data/cinematic';
import styles from './OverlayContent.module.css';

export default function WorldFormsOverlay() {
  return (
    <SceneOverlay rangeId="worldForms">
      <div className={styles.inner}>
        <h1 className={styles.headline}>
          {WORLD_FORMS_CONTENT.headline[0]}
          <br />
          With <span className={styles.accent}>AI.</span>
        </h1>
        <p className={styles.sub}>{WORLD_FORMS_CONTENT.sub}</p>
        <div className={styles.ctas}>
          <a href={WORLD_FORMS_CONTENT.ctaPrimary.href} className="btn-dark">
            <span>{WORLD_FORMS_CONTENT.ctaPrimary.label}</span>
          </a>
          <a href={WORLD_FORMS_CONTENT.ctaSecondary.href} className="btn-outline">
            <span>{WORLD_FORMS_CONTENT.ctaSecondary.label}</span>
          </a>
        </div>
      </div>
    </SceneOverlay>
  );
}
