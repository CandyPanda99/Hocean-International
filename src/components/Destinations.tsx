import { ChevronDown } from 'lucide-react';
import { wmxCountries } from '@/data/countries';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import WorldMap from './WorldMap';
import styles from './Destinations.module.css';

const recipients = [
  'University Research Labs',
  'Teaching Hospitals',
  'Diagnostic Laboratories',
  'Clinical Trial Sites',
  'Pathology Departments',
  'Genomics Centres',
  'Biotechnology Companies',
  'Pharmaceutical Organisations',
];

export default function Destinations() {
  return (
    <section id="destinations" className="section section-alt">
      <div className="container">
        <Reveal>
          <SectionHeading
            align="center"
            tag="Where It Goes"
            title="Received by universities, hospitals, and laboratories abroad."
          />
        </Reveal>

        <Reveal>
          <WorldMap />
        </Reveal>

        <Reveal>
          <ul className={styles.recipients} aria-label="Typical receiving institutions">
            {recipients.map((recipient) => (
              <li key={recipient} className={styles.chip}>
                {recipient}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal>
          <details className={styles.coverage}>
            <summary className={styles.summary}>
              <span>
                <span className={styles.summaryTitle}>Full country coverage</span>
                <span className={styles.summaryMeta}>220+ destinations · DHL Express WMX zones</span>
              </span>
              <ChevronDown className={styles.chevron} size={22} aria-hidden="true" />
            </summary>

            <div className={styles.coverageBody}>
              <ul className={styles.countryGrid}>
                {wmxCountries.map((country) => (
                  <li key={country.code} className={styles.country}>
                    <span>
                      {country.name} <span className={styles.countryCode}>({country.code})</span>
                    </span>
                    <span className={styles.zone} aria-label={`Zone ${country.zone}`}>
                      Z{country.zone}
                    </span>
                  </li>
                ))}
              </ul>
              <p className={styles.coverageNote}>
                Zone 1 = closest / fastest · Zone 9 = most distant · Full list: 220+ countries. Source: Hocean
                International rate card, DHL Express WMX, effective 01-Jul-2025.
              </p>
            </div>
          </details>
        </Reveal>
      </div>
    </section>
  );
}
