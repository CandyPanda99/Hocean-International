import { Activity, MapPin, Route, ShieldCheck } from 'lucide-react';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import styles from './Monitoring.module.css';

const safeguards = [
  {
    title: 'Real-Time GPS Tracking',
    description:
      'Temperature, humidity, and light-exposure are monitored continuously — not just location. Deviations from defined parameters trigger automatic alerts.',
    icon: MapPin,
  },
  {
    title: 'Proactive Intervention',
    description:
      'If a shipment is delayed or a temperature excursion is detected, Hocean and the DHL network can reroute, replenish dry ice, or arrange interim refrigerated storage.',
    icon: Route,
  },
  {
    title: 'IATA-Certified Handling',
    description:
      'Staff certified for UN3373 biological substances and UN1845 dry ice handle every consignment. Dedicated handling zones prevent cross-contamination throughout.',
    icon: ShieldCheck,
  },
  {
    title: '24/7 Quality Control',
    description:
      "DHL's Global Quality Control Centre monitors WMX shipments around the clock and can activate contingency measures at any point during transit.",
    icon: Activity,
  },
];

export default function Monitoring() {
  return (
    <section id="monitoring" className="section section-alt">
      <div className="container">
        <div className={styles.grid}>
          <Reveal className={styles.intro}>
            <SectionHeading
              className={styles.heading}
              tag="Shipment Monitoring & Security"
              title="Watched every kilometre, from collection to delivery."
            />
          </Reveal>

          <div className={styles.cards}>
            {safeguards.map(({ title, description, icon: Icon }, index) => (
              <Reveal key={title} className={`glass-card ${styles.card}`} delay={index * 0.08}>
                <span className="icon-tile">
                  <Icon size={30} strokeWidth={1.5} aria-hidden="true" />
                </span>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardDescription}>{description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
