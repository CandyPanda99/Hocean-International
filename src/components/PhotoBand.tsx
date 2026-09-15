import Image, { type StaticImageData } from 'next/image';
import sampleHandlingImage from '@/assets/images/sample-handling.jpg';
import airCargoImage from '@/assets/images/air-cargo.jpg';
import deliveryImage from '@/assets/images/delivery.jpg';
import Reveal from './ui/Reveal';
import styles from './PhotoBand.module.css';

const journey: { title: string; caption: string; image: StaticImageData; alt: string; position?: string }[] = [
  {
    title: 'Sample Handling',
    caption: 'Every specimen barcoded and logged before it leaves the lab bench.',
    image: sampleHandlingImage,
    alt: 'Frost-covered biological sample vials with barcode identification labels',
  },
  {
    title: 'Air Transit',
    caption: 'Handed to the DHL Medical Express network for final delivery.',
    image: airCargoImage,
    alt: 'Ground crew member beside air cargo containers next to an aircraft',
    position: 'center 58%',
  },
  {
    title: 'Delivery & Confirmation',
    caption: 'Signed for on arrival, with confirmation relayed back to the sender.',
    image: deliveryImage,
    alt: 'Courier handing a sealed package to the receiving party',
  },
];

export default function PhotoBand() {
  return (
    <section aria-label="Shipment journey" className={styles.section}>
      <div className="container">
        <ol className={styles.grid}>
          {journey.map((item, index) => (
            <li key={item.title}>
              <Reveal className={styles.card} delay={index * 0.1}>
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  placeholder="blur"
                  sizes="(max-width: 899px) 100vw, 33vw"
                  className={styles.image}
                  style={item.position ? { objectPosition: item.position } : undefined}
                />
                <div className={styles.overlay} aria-hidden="true"></div>
                <div className={styles.caption}>
                  <span className={styles.step}>{String(index + 1).padStart(2, '0')}</span>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.text}>{item.caption}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
