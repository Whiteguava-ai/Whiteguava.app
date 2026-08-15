'use client';
import styles from './Marquee.module.css';

const techs = [
  { name: 'Python', icon: 'Py' },
  { name: 'TypeScript', icon: 'TS' },
  { name: 'React', icon: 'Re' },
  { name: 'Next.js', icon: 'Nx' },
  { name: 'FastAPI', icon: 'FA' },
  { name: 'Node.js', icon: 'No' },
  { name: 'OpenAI', icon: 'OA' },
  { name: 'Anthropic', icon: 'An' },
  { name: 'LangChain', icon: 'LC' },
  { name: 'PostgreSQL', icon: 'PG' },
  { name: 'MongoDB', icon: 'MG' },
  { name: 'Docker', icon: 'Do' },
  { name: 'AWS', icon: 'AW' },
  { name: 'Azure', icon: 'Az' },
  { name: 'Hugging Face', icon: 'HF' },
  { name: 'Vector DB', icon: 'VD' },
];

export default function Marquee() {
  const items = [...techs, ...techs];
  return (
    <div className={styles.section}>
      <div className={styles.labelCol}>
        <p className={styles.label}>Technologies<br />We Work With</p>
      </div>
      <div className={styles.track}>
        <div className={styles.inner}>
          {items.map((tech, i) => (
            <div key={i} className={styles.logoItem}>
              <TechMark name={tech.name} icon={tech.icon} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TechMark({ name, icon }: { name: string; icon: string }) {
  return (
    <span className={styles.logoInner}>
      <span className={styles.logoIcon}>{icon}</span>
      <span className={styles.logoText}>{name}</span>
    </span>
  );
}
