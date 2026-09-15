import { Atom, Snowflake, Sun, ThermometerSnowflake, ThermometerSun } from 'lucide-react';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import styles from './TemperatureTiers.module.css';

const SCALE_WARM = 25;
const SCALE_COLD = -196;

const tiers = [
  { name: 'Ambient', range: 'Room Temp', contents: 'Documents, non-sensitive materials', icon: Sun, span: [25, 18] },
  { name: 'Controlled-Ambient', range: '15°C – 25°C', contents: 'Reagents, select diagnostics', icon: ThermometerSun, span: [25, 15] },
  { name: 'Chilled', range: '2°C – 8°C', contents: 'Blood, serum, most clinical samples', icon: ThermometerSnowflake, span: [8, 2] },
  { name: 'Frozen — Dry Ice', range: '−80°C', contents: 'Tissue, RNA/DNA, cell cultures', icon: Snowflake, span: [-78, -80] },
  {
    name: 'Ultra-Deep Frozen',
    range: 'Below −180°C',
    contents: 'Specialist cryogenic shipments, arranged via partner network',
    icon: Atom,
    span: [-180, SCALE_COLD],
  },
];

const toPercent = (celsius: number) => ((SCALE_WARM - celsius) / (SCALE_WARM - SCALE_COLD)) * 100;

/** Positions a tier on the +25°C → −196°C track, slicing one continuous warm→cold gradient. */
function scaleStyle([warm, cold]: number[]): React.CSSProperties {
  const left = toPercent(warm);
  const width = Math.max(toPercent(cold) - left, 1);
  return {
    left: `${left}%`,
    width: `${width}%`,
    backgroundSize: `${(100 / width) * 100}% 100%`,
    backgroundPosition: `${width >= 100 ? 0 : (left / (100 - width)) * 100}% 0`,
  };
}

export default function TemperatureTiers() {
  return (
    <section id="temperature" className="section">
      <div className="container">
        <Reveal>
          <SectionHeading
            tag="Temperature Options"
            title="Packaging matched to what's inside the box."
            description="Every shipment travels at the temperature its contents need. Depending on the tier, Hocean uses dry ice, validated Pharmacool phase change cassettes, or insulated coolant wraps — whichever holds the required range for the full transit time."
          />
        </Reveal>

        <Reveal className={styles.panel}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col">Tier</th>
                <th scope="col">Range</th>
                <th scope="col" className={styles.scaleHead}>
                  <span>+25°C</span>
                  <span>−196°C</span>
                </th>
                <th scope="col">Typical Contents</th>
              </tr>
            </thead>
            <tbody>
              {tiers.map(({ name, range, contents, icon: Icon, span }) => (
                <tr key={name}>
                  <th scope="row">
                    <span className={styles.tier}>
                      <span className="icon-tile icon-tile-sm">
                        <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
                      </span>
                      {name}
                    </span>
                  </th>
                  <td className={styles.rangeCell}>
                    <span className={styles.range}>{range}</span>
                  </td>
                  <td className={styles.scaleCell} aria-hidden="true">
                    <span className={styles.track}>
                      <span className={styles.fill} style={scaleStyle(span)} />
                    </span>
                  </td>
                  <td className={styles.contents}>{contents}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  );
}
