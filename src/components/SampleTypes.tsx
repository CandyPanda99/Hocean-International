import Image from 'next/image';
import { ClipboardList, Dna, Droplet, Layers, Microscope } from 'lucide-react';
import labImage from '@/assets/images/cryo-vials.jpg';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import styles from './SampleTypes.module.css';

const sampleTypes = [
  {
    type: 'Blood & Serum',
    packaging: 'Leak-proof primary vials, absorbent lining to contain any breakage, and a rigid outer box — packed to UN3373.',
    icon: Droplet,
  },
  {
    type: 'Tissue & Biopsy',
    packaging: 'Kept frozen or formalin-fixed as required, with dry ice supplied as pellets, sticks, or plates to match the specimen.',
    icon: Layers,
  },
  {
    type: 'DNA & RNA',
    packaging: 'Wrapped in absorbent sleeves inside thermally insulated packaging, buffering against temperature swings and shock in transit.',
    icon: Dna,
  },
  {
    type: 'Cell Cultures',
    packaging: 'Shipped in temperature-controlled containers with an integrated data logger, so viability can be confirmed on arrival.',
    icon: Microscope,
  },
  {
    type: 'Diagnostic & Clinical Trial',
    packaging:
      "Packaging and documentation matched to each destination country's import requirements, including customs declarations and trial-specific labelling.",
    icon: ClipboardList,
  },
];

export default function SampleTypes() {
  return (
    <section id="sample-types" className="section">
      <div className="container">
        <div className={styles.grid}>
          <div>
            <Reveal>
              <SectionHeading
                tag="Packaging By Sample Type"
                title="No two samples travel the same way."
                description="Packaging is built around what's actually inside the box, so condition holds from the bench to the destination lab."
              />
            </Reveal>

            <ul className={styles.list}>
              {sampleTypes.map(({ type, packaging, icon: Icon }, index) => (
                <li key={type}>
                  <Reveal className={styles.item} delay={index * 0.06}>
                    <span className="icon-tile icon-tile-sm">
                      <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className={styles.type}>{type}</h3>
                      <p className={styles.packaging}>{packaging}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>

          <Reveal className={styles.imageColumn} y={32}>
            <div className={styles.imageWrapper}>
              <Image
                src={labImage}
                alt="Laboratory scientist in gloves and safety goggles preparing a rack of test tube samples"
                fill
                placeholder="blur"
                sizes="(max-width: 1023px) 100vw, 40vw"
                className={styles.image}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
