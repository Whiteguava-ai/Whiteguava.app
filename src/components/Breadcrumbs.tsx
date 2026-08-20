import styles from './Breadcrumbs.module.css';

export type Crumb = { name: string; path: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav className={styles.nav} aria-label="Breadcrumb">
      <ol className={styles.list}>
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.path} className={styles.item}>
              {isLast ? (
                <span aria-current="page">{item.name}</span>
              ) : (
                <a href={item.path}>{item.name}</a>
              )}
              {!isLast && <span className={styles.sep} aria-hidden="true">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
