import Image from 'next/image';
import { ArrowRight, Clock, Eye, FileCheck, LifeBuoy } from 'lucide-react';
import professionalImage from '@/assets/images/medical-professional.jpg';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import styles from './WhyHocean.module.css';

const reasons = [
  'Sole Sri Lankan company authorized to ship biological substances internationally on a dry ice cold chain.',
  'Authorized account holder with DHL Medical Express, with direct booking into their medical network.',
  'Consignments tracked end-to-end, from packing at origin to signed receipt at the destination lab.',
  'Packing materials supplied by Hocean — all certified to international shipping standards, so nothing is left to source on your end.',
];

const networkFeatures = [
  {
    title: 'Priority Collection',
    description: 'Monday–Saturday pickup with the latest possible collection times, given how time-sensitive these shipments are.',
    icon: Clock,
  },
  {
    title: 'Priority Customs Clearance',
    description: "In-house customs teams clear WMX shipments ahead of standard cargo, so samples don't sit waiting at the border.",
    icon: FileCheck,
  },
  {
    title: 'End-to-End Visibility',
    description: 'Every shipment is tracked and temperature-logged from collection at Hocean through to delivery at the destination.',
    icon: Eye,
  },
  {
    title: 'Contingency Cover',
    description: 'Dry ice replenishment and access to refrigerated facilities are on standby if a shipment is delayed in transit.',
    icon: LifeBuoy,
  },
];

export default function WhyHocean() {
  return (
    <section id="why" className="section">
      <div className="container">
        <div className={styles.grid}>
          <Reveal>
            <SectionHeading
              className={styles.heading}
              tag="Why Hocean"
              title="The only biological courier of its kind in Sri Lanka."
            />
            <ul className={styles.reasons}>
              {reasons.map((reason) => (
                <li key={reason}>
                  <ArrowRight className={styles.reasonIcon} size={20} strokeWidth={2} aria-hidden="true" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className={styles.photoPanel} y={32}>
            <Image
              src={professionalImage}
              alt="Laboratory technician in gloves handling biological sample tubes"
              fill
              placeholder="blur"
              sizes="(max-width: 1023px) 100vw, 50vw"
              className={styles.photo}
            />
            <div className={styles.photoOverlay} aria-hidden="true"></div>
            <div className={styles.badge}>
              <svg className={styles.badgeMark} viewBox="0 0 70 70" fill="none" aria-hidden="true">
                <rect x="10" y="10" width="50" height="50" transform="rotate(45 35 35)" strokeWidth="2.4" />
                <path d="M25 35l7 7 14-14" strokeWidth="2.6" />
              </svg>
              <div>
                <p className={styles.badgeTitle}>DHL Medical Express</p>
                <p className={styles.badgeSub}>Authorized account holder — Sri Lanka</p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className={styles.network}>
          {networkFeatures.map(({ title, description, icon: Icon }, index) => (
            <Reveal key={title} className={`glass-card ${styles.card}`} delay={index * 0.08}>
              <span className="icon-tile icon-tile-sm">
                <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
              </span>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardDescription}>{description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
