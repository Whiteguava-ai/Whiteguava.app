import type { ReactNode } from 'react';
import styles from './SectionStage.module.css';

export default function SectionStage({
  children,
  dark = false,
  tall = false,
  clip = true,
}: {
  children: ReactNode;
  dark?: boolean;
  tall?: boolean;
  /**
   * The stage clips its contents by default (keeps the ambient blobs inside the
   * rounded card). Set `false` when a descendant needs `position: sticky` to
   * track the viewport, `overflow: hidden` traps sticky inside the stage.
   */
  clip?: boolean;
}) {
  return (
    <div
      className={`${styles.stage} ${dark ? styles.dark : ''} ${tall ? styles.tall : ''} ${
        clip ? '' : styles.noClip
      }`}
    >
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
