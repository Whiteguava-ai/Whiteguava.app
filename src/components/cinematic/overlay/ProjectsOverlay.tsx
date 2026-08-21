import SceneOverlay from './SceneOverlay';
import { PROJECTS_CONTENT } from '@/data/cinematic';
import styles from './OverlayContent.module.css';

export default function ProjectsOverlay() {
  return (
    <SceneOverlay rangeId="projects" verticalAlign="top">
      <div className={styles.inner} style={{ maxWidth: 880 }}>
        <p className={styles.eyebrow}>Capability Showcase</p>
        <h2 className={styles.headlineSmall}>Representative project types we build.</h2>
        <div className={styles.grid}>
          {PROJECTS_CONTENT.map((project) => (
            <div key={project.title} className={styles.card}>
              <div className={styles.cardTitle}>{project.title}</div>
              <p className={styles.cardDesc}>{project.desc}</p>
              <p className={styles.note} style={{ marginTop: 0 }}>{project.deliverables} · {project.industry}</p>
            </div>
          ))}
        </div>
        <a href="/#contact" className={styles.cardLink}>Discuss a project like this →</a>
      </div>
    </SceneOverlay>
  );
}
