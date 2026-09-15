import { Plane, TriangleAlert } from 'lucide-react';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import styles from './FlightSchedule.module.css';

const WEEKDAYS = [
  { short: 'M', name: 'Monday' },
  { short: 'T', name: 'Tuesday' },
  { short: 'W', name: 'Wednesday' },
  { short: 'T', name: 'Thursday' },
  { short: 'F', name: 'Friday' },
  { short: 'S', name: 'Saturday' },
  { short: 'S', name: 'Sunday' },
];

const MON_TO_SAT = [true, true, true, true, true, true, false];

const flights = [
  { iata: 'BOM', city: 'Mumbai, India', flight: 'UL-0141', departure: '23:40', days: [true, true, true, true, true, false, false] },
  { iata: 'DEL', city: 'Delhi, India', flight: 'UL-0191', departure: '00:40', days: MON_TO_SAT },
  { iata: 'BLR', city: 'Bengaluru, India', flight: 'UL-0173 / UL-1173', departure: '00:55 / 07:35', days: MON_TO_SAT },
  { iata: 'SIN', city: 'Singapore', flight: 'UL-0306', departure: '01:50', days: MON_TO_SAT },
  { iata: 'LHR', city: 'London Heathrow, UK', flight: 'UL-0503', departure: '13:10', days: MON_TO_SAT },
];

export default function FlightSchedule() {
  return (
    <section id="flights" className="section">
      <div className="container">
        <Reveal>
          <SectionHeading
            tag="Weekly Flight Schedule"
            title="SriLankan Airlines departures from Colombo (CMB)"
            description="Recurring weekly schedule — no specific dates. Operated by SriLankan Airlines (UL). Contact Hocean to confirm the applicable flight before each shipment."
          />
        </Reveal>

        <Reveal>
          <p className={styles.notice} role="note">
            <TriangleAlert size={20} strokeWidth={2} aria-hidden="true" />
            Schedules are subject to change due to weather, operational, or environmental conditions. Hocean
            International will confirm the applicable flight before each shipment is booked.
          </p>
        </Reveal>

        <ul className={styles.grid}>
          {flights.map((route, index) => (
            <li key={route.iata}>
              <Reveal className={`glass-card ${styles.card}`} delay={index * 0.06}>
                <div className={styles.cardHead}>
                  <div>
                    <p className={styles.iata}>{route.iata}</p>
                    <p className={styles.city}>{route.city}</p>
                  </div>
                  <Plane className={styles.plane} size={22} strokeWidth={1.75} aria-hidden="true" />
                </div>

                <dl className={styles.rows}>
                  <div className={styles.row}>
                    <dt>Flight</dt>
                    <dd>{route.flight}</dd>
                  </div>
                  <div className={styles.row}>
                    <dt>
                      <abbr title="Scheduled Time of Departure">STD</abbr>
                    </dt>
                    <dd className={styles.time}>{route.departure}</dd>
                  </div>
                </dl>

                <ul className={styles.days} aria-label="Operating days">
                  {WEEKDAYS.map((day, dayIndex) => {
                    const operates = route.days[dayIndex];
                    return (
                      <li
                        key={day.name}
                        className={`${styles.day} ${operates ? styles.dayOn : styles.dayOff}`}
                        title={`${day.name}: ${operates ? 'operates' : 'does not operate'}`}
                      >
                        <span aria-hidden="true">{day.short}</span>
                        <span className="sr-only">
                          {day.name}: {operates ? 'operates' : 'does not operate'}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal>
          <p className={styles.footnote}>
            STD = Scheduled Time of Departure from Bandaranaike International Airport (CMB). BLR operates on two
            alternating flights (UL-0173 at 00:55 most days, UL-1173 at 07:35 on select days) — Hocean will confirm which
            applies. Highlighted days operate; faded days do not.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
