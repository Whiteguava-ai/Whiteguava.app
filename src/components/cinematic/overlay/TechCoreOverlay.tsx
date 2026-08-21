import SceneOverlay from './SceneOverlay';
import { TECH_CORE_CONTENT } from '@/data/cinematic';
import styles from './OverlayContent.module.css';

export default function TechCoreOverlay() {
  return (
    <SceneOverlay rangeId="techCore">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>{TECH_CORE_CONTENT.eyebrow}</p>
        <p className={styles.sub}>{TECH_CORE_CONTENT.body}</p>
        <div className={styles.stat}>{TECH_CORE_CONTENT.stat}</div>
        <p className={styles.note}>{TECH_CORE_CONTENT.location} · {TECH_CORE_CONTENT.availability}</p>
        <div className={styles.tagRow}>
          {TECH_CORE_CONTENT.tags.map((tag) => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
        <div className={styles.tagRow} aria-label="Technologies we work with">
          {TECH_CORE_CONTENT.techs.map((tech) => (
            <span key={tech} className={styles.tag}>{tech}</span>
          ))}
        </div>
      </div>
    </SceneOverlay>
  );
}
