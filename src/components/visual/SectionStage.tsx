import type { ReactNode } from 'react';
import styles from './SectionStage.module.css';

export default function SectionStage({
  children,
  dark = false,
  tall = false,
}: {
  children: ReactNode;
  dark?: boolean;
  tall?: boolean;
}) {
  return (
    <div className={`${styles.stage} ${dark ? styles.dark : ''} ${tall ? styles.tall : ''}`}>
      {!dark && (
        <div className={styles.ambience} aria-hidden="true">
          <span className={styles.blobA} />
          <span className={styles.blobB} />
          <span className={styles.blobC} />
        </div>
      )}
      <div className={styles.body}>{children}</div>
    </div>
  );
}
