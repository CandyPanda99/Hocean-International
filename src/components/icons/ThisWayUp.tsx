import styles from './Placards.module.css';

/** ISO 780 "this way up" orientation mark. */
export default function ThisWayUp({ width = 20, height = 24 }: { width?: number; height?: number }) {
  return (
    <svg className={styles.placard} width={width} height={height} viewBox="0 0 20 24" aria-hidden="true">
      <rect className={styles.outline} x="1" y="1" width="18" height="22" strokeWidth="1.4" />
      <polygon className={styles.ink} points="10,3 14,8 11.2,8 11.2,11.5 8.8,11.5 8.8,8 6,8" />
      <polygon className={styles.ink} points="10,12.5 14,17.5 11.2,17.5 11.2,21 8.8,21 8.8,17.5 6,17.5" />
    </svg>
  );
}
