import Image from 'next/image';
import { ArrowRight, BadgeCheck, Package, Snowflake } from 'lucide-react';
import dryIceImage from '@/assets/images/packing-bg.jpg';
import HazardPlacard from './icons/HazardPlacard';
import ThisWayUp from './icons/ThisWayUp';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import styles from './Process.module.css';

const packStages = [
  { title: 'Dry Ice', detail: 'Sublimates at −78°C', icon: Snowflake },
  { title: 'Protective Packing', detail: 'Triple-packed, UN3373', icon: Package },
  { title: 'Tested & Certified', detail: 'IATA PI954 · DOT/UN3373', icon: BadgeCheck, showMarks: true },
];

const steps = [
  {
    stage: 'Enquiry',
    title: 'Contact Hocean International',
    description: 'Reach out with your shipment requirements — sample type, destination, and any timing constraints.',
  },
  {
    stage: 'Booking',
    title: 'Share Sender & Receiver Details',
    description: 'Provide full contact and address information for both the dispatching lab and the receiving institution.',
  },
  {
    stage: 'Specification',
    title: 'Confirm Sample Details',
    description:
      'Sample type, quantity, and temperature requirements are confirmed so the correct packaging and documentation can be prepared.',
  },
  {
    stage: 'Quotation',
    title: 'Receive Quotation & Proforma Invoice',
    description:
      'A clear, itemised cost estimate is issued before you commit — covering packaging, documentation, and DHL Express WMX freight.',
  },
  {
    stage: 'Scheduling',
    title: 'Schedule Collection or Drop-off',
    description: 'Pickup is arranged at a time that suits your laboratory or institution, Monday to Saturday.',
  },
  {
    stage: 'Origin — Colombo',
    title: 'Professional Packaging & Certification',
    description:
      'Samples are packed to validated international standards using materials supplied by Hocean, with all customs and UN3373/UN1845 documentation prepared before departure.',
  },
  {
    stage: 'In Transit',
    title: 'International Transit via DHL Express WMX',
    description:
      'Priority handling across the DHL Medical Express global network — latest collection times, priority customs clearance, and temperature integrity throughout.',
  },
  {
    stage: 'Destination',
    title: 'Track to Successful Delivery',
    description: 'Full end-to-end visibility with proactive monitoring until the consignee confirms receipt.',
  },
];

export default function Process() {
  return (
    <section id="process" className={`section ${styles.section}`}>
      <div className={styles.background} aria-hidden="true">
        <Image src={dryIceImage} alt="" fill placeholder="blur" sizes="100vw" className={styles.backgroundImage} />
        <div className={styles.overlay}></div>
      </div>

      <div className={`container ${styles.container}`}>
        <Reveal>
          <SectionHeading tone="inverse" align="center" tag="How It Moves" title="Eight steps from first contact to delivery." />
        </Reveal>

        <Reveal className={styles.packDiagram}>
          {packStages.map(({ title, detail, icon: Icon, showMarks }, index) => (
            <div key={title} className={styles.packStageWrap}>
              {index > 0 && (
                <span className={styles.packArrow} aria-hidden="true">
                  <ArrowRight size={24} strokeWidth={1.5} />
                </span>
              )}
              <div className={styles.packStage}>
                <span className={styles.packIcon}>
                  <Icon size={36} strokeWidth={1.5} aria-hidden="true" />
                </span>
                <h3 className={styles.packTitle}>{title}</h3>
                <p className={`mono ${styles.packDetail}`}>{detail}</p>
                {showMarks && (
                  <div className={styles.marks}>
                    <HazardPlacard clipId="placard-clip-process" size={34} showUnNumber={false} />
                    <ThisWayUp width={18} height={22} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </Reveal>

        <ol className={styles.steps}>
          {steps.map((step, index) => (
            <li key={step.title}>
              <Reveal className={styles.step} delay={(index % 4) * 0.08}>
                <div className={styles.stepHead}>
                  <span className={styles.stepNumber}>{String(index + 1).padStart(2, '0')}</span>
                  <span className={styles.stepStage}>{step.stage}</span>
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
