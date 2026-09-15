import { ClipboardCheck, Clock, ShieldCheck } from 'lucide-react';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import styles from './LabLogistics.module.css';

const pillars = [
  {
    title: 'Sample Integrity',
    description:
      'Every specimen travels under strict handling protocols — correct temperature, correct packaging, chain of custody intact from collection to receipt.',
    icon: ClipboardCheck,
  },
  {
    title: 'Treatment Schedules',
    description:
      "Delays in specimen delivery can interrupt patient treatment. Hocean's logistics are built to keep samples moving so clinical programmes stay on schedule.",
    icon: Clock,
  },
  {
    title: 'Full Compliance',
    description:
      "Documentation, labelling, and customs declarations are prepared to each destination country's import requirements — so nothing stalls at the border.",
    icon: ShieldCheck,
  },
];

export default function LabLogistics() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className={styles.grid}>
          <Reveal>
            <SectionHeading
              className={styles.heading}
              tag="Laboratory Courier Services"
              title="Cold chain logistics built around sample integrity — not just speed."
              description="For any clinical trial or research programme, getting a sample from origin to destination in the same condition it left is non-negotiable. The temperature, the handling, the documentation, and the timing all have to be right — because the science depends on it."
            />
          </Reveal>

          <div className={styles.pillars}>
            {pillars.map(({ title, description, icon: Icon }, index) => (
              <Reveal key={title} className={`glass-card ${styles.pillar}`} delay={index * 0.1}>
                <span className="icon-tile icon-tile-sm">
                  <Icon size={24} strokeWidth={1.75} aria-hidden="true" />
                </span>
                <div>
                  <h3 className={styles.title}>{title}</h3>
                  <p className={styles.description}>{description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
