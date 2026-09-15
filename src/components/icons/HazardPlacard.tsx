import styles from './Placards.module.css';

type HazardPlacardProps = {
  /** Must be unique per rendered placard - used for the SVG clip path. */
  clipId: string;
  size?: number;
  showUnNumber?: boolean;
  className?: string;
};

const STRIPE_XS = [10, 24, 38, 52, 66, 80];

/** IATA Class 9 (miscellaneous dangerous goods) label, as applied to UN 1845 dry ice shipments. */
export default function HazardPlacard({ clipId, size = 92, showUnNumber = true, className = '' }: HazardPlacardProps) {
  return (
    <svg
      className={`${styles.placard} ${className}`}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      role="img"
      aria-label="Class 9 hazard label, UN 1845 dry ice"
    >
      <defs>
        <clipPath id={clipId}>
          <polygon points="50,6 94,50 6,50" />
        </clipPath>
      </defs>
      <polygon className={styles.fill} points="50,6 94,50 50,94 6,50" />
      <g clipPath={`url(#${clipId})`}>
        {STRIPE_XS.map((x) => (
          <rect key={x} className={styles.ink} x={x} y="6" width="7" height="44" />
        ))}
      </g>
      <polygon className={styles.outline} points="50,6 94,50 50,94 6,50" strokeWidth="2.2" />
      <text className={styles.ink} x="50" y={showUnNumber ? 76 : 80} textAnchor="middle" fontSize="19" fontWeight="600">
        9
      </text>
      {showUnNumber && (
        <text className={styles.muted} x="50" y="88" textAnchor="middle" fontSize="6">
          UN 1845
        </text>
      )}
    </svg>
  );
}
