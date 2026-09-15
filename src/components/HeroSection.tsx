import Image from 'next/image';
import heroImage from '@/assets/images/hero-cryo-rack.jpg';
import Reveal from './ui/Reveal';
import WaybillCard from './WaybillCard';
import CredentialStrip from './CredentialStrip';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.background} aria-hidden="true">
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className={styles.backgroundImage}
        />
        <div className={styles.overlay}></div>
      </div>

      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          <div className={styles.content}>
            <Reveal>
              <p className={styles.eyebrow}>
                <span className={styles.dot} aria-hidden="true"></span>
                Sri Lanka&apos;s only authorized biological courier
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className={styles.title}>
                Biological samples, held at <span className={`gradient-text ${styles.temp}`}>−78°C</span>, from
                Colombo to the world.
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className={styles.description}>
                Hocean International moves biological substances to overseas universities, hospitals, and
                laboratories on a verified dry ice cold chain — as Sri Lanka&apos;s authorized DHL Medical Express
                account holder.
              </p>
            </Reveal>

            <Reveal delay={0.3} className={styles.actions}>
              <a href="#contact" className="btn btn-accent">
                Request a Shipment
              </a>
              <a href="#process" className="btn btn-outline">
                See the Cold Chain
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.25} y={32}>
            <WaybillCard />
          </Reveal>
        </div>

        <Reveal delay={0.4} className={styles.strip}>
          <CredentialStrip />
        </Reveal>
      </div>
    </section>
  );
}
