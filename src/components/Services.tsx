import { FlaskConical, PackageCheck, Snowflake, TestTubes, Timer } from 'lucide-react';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import styles from './Services.module.css';

const services = [
  {
    title: 'Biological Sample Shipping',
    description:
      'Blood, tissue, and specimen consignments packed to IATA PI650 for UN3373 Category B biological substances, and routed direct to receiving labs.',
    icon: TestTubes,
  },
  {
    title: 'Dry Ice Cold Chain',
    description:
      'Every consignment is packed and re-iced against transit time, holding samples well below −70°C until arrival.',
    icon: Snowflake,
  },
  {
    title: 'DHL Medical Express Handling',
    description:
      "As an authorized account holder, Hocean books directly into DHL's medical network — no intermediary, no re-handling delay.",
    icon: PackageCheck,
  },
  {
    title: 'Urgent & STAT Delivery',
    description:
      "Time-critical specimens can be escalated to same-day or next-available-flight dispatch — for when delay isn't an option.",
    icon: Timer,
  },
  {
    title: 'Clinical Trial Supply',
    description:
      'Kits, reagents, and investigational materials shipped with the same cold chain rigour as patient samples — keeping trial sites stocked and on schedule.',
    icon: FlaskConical,
  },
];

export default function Services() {
  return (
    <section id="services" className="section section-alt">
      <div className="container">
        <Reveal>
          <SectionHeading
            align="center"
            tag="What We Handle"
            title="Five services, one uninterrupted chain of custody."
            description="From packing to final delivery, every shipment stays inside a single accountable process."
          />
        </Reveal>

        <div className={styles.grid}>
          {services.map(({ title, description, icon: Icon }, index) => (
            <Reveal key={title} className={`glass-card ${styles.card}`} delay={index * 0.08}>
              <span className={`icon-tile ${styles.iconTile}`}>
                <Icon size={34} strokeWidth={1.5} aria-hidden="true" />
              </span>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.description}>{description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
