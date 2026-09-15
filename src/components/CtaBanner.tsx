import Image from 'next/image';
import cargoAircraftImage from '@/assets/images/cargo-aircraft.jpg';
import Reveal from './ui/Reveal';
import styles from './CtaBanner.module.css';

export default function CtaBanner() {
  return (
    <section aria-labelledby="cta-banner-title" className={styles.section}>
      <div className="container">
        <Reveal className={styles.banner}>
          <Image
            src={cargoAircraftImage}
            alt=""
            fill
            placeholder="blur"
            sizes="(max-width: 1600px) 100vw, 1536px"
            className={styles.image}
          />
          <div className={styles.overlay} aria-hidden="true"></div>
          <div className={styles.content}>
            <h2 id="cta-banner-title" className={styles.title}>
              Colombo to the world, on a cold chain that doesn&apos;t break.
            </h2>
            <p className={styles.text}>Ready to ship? Tell us what you&apos;re sending and where it needs to go.</p>
            <div className={styles.actions}>
              <a href="#contact" className="btn btn-accent">
                Request a Shipment
              </a>
              <a href="#flights" className="btn btn-outline-light">
                View Flight Schedule
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
