import HazardPlacard from './icons/HazardPlacard';
import ThisWayUp from './icons/ThisWayUp';
import styles from './WaybillCard.module.css';

const manifestRows = [
  { label: 'Contents', value: 'Biological substance, Cat B' },
  { label: 'Coolant', value: 'Dry ice, 5.0 kg' },
  { label: 'Origin', value: 'Colombo, LK' },
  { label: 'Carrier', value: 'DHL Medical Express' },
];

// Illustrative logger trace: y=22 is the −70°C limit, the line holds near −78°C below it.
const LOG_Y = [50, 48, 51, 49, 47, 50, 52, 49, 48, 50, 51, 48, 49, 50, 47, 49, 50];
const logPoints = LOG_Y.map((y, i) => `${8 + i * 19},${y}`).join(' ');
const lastX = 8 + (LOG_Y.length - 1) * 19;
const lastY = LOG_Y[LOG_Y.length - 1];

export default function WaybillCard() {
  return (
    <div className={styles.card}>
      <div className={styles.head}>
        <span>Waybill / Cold chain log</span>
        <span className={styles.badge}>Medical Express</span>
      </div>

      <div className={styles.body}>
        <div className={styles.labels}>
          <HazardPlacard clipId="placard-clip-hero" size={92} />
          <div className={styles.orientation}>
            <ThisWayUp />
            <span>This way up</span>
          </div>
        </div>

        <dl className={styles.rows}>
          {manifestRows.map((row) => (
            <div key={row.label} className={styles.row}>
              <dt>{row.label}</dt>
              <dd>{row.value}</dd>
            </div>
          ))}
        </dl>

        <div className={styles.log}>
          <div className={styles.logLabel}>
            <span>Transit temperature</span>
            <span className={styles.logValue}>≤ −70°C held</span>
          </div>
          <svg
            className={styles.chart}
            viewBox="0 0 320 72"
            role="img"
            aria-label="Temperature log holding near −78°C, below the −70°C limit for the entire transit"
          >
            <defs>
              <linearGradient id="waybill-log-fill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" className={styles.fillStart} />
                <stop offset="100%" className={styles.fillEnd} />
              </linearGradient>
            </defs>
            <line className={styles.limit} x1="0" x2="320" y1="22" y2="22" />
            <text className={styles.limitText} x="316" y="15" textAnchor="end">
              −70°C LIMIT
            </text>
            <polygon points={`8,72 ${logPoints} ${lastX},72`} fill="url(#waybill-log-fill)" />
            <polyline className={styles.line} points={logPoints} />
            <circle className={styles.pulse} cx={lastX} cy={lastY} r="4" />
          </svg>
        </div>
      </div>
    </div>
  );
}
