import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import styles from './Compliance.module.css';

const standards = [
  {
    code: 'UN3373',
    title: 'Biological Substance, Category B.',
    description: 'The classification and packaging standard applied to clinical and research samples.',
  },
  {
    code: 'IATA PI650',
    title: 'Packaging & documentation.',
    description: 'Governs how UN3373 shipments are packed, labeled, and papered for every leg of transit.',
  },
  {
    code: 'UN1845 / PI954',
    title: 'Dry ice as coolant.',
    description: 'Covers net weight declaration and hazard labeling whenever a shipment travels on dry ice.',
  },
  {
    code: 'AWB',
    title: 'Waybill declaration.',
    description: 'Every air waybill states contents, category, and package count exactly as customs requires.',
  },
  {
    code: 'CITES',
    title: 'Phytosanitary & CITES certificates.',
    description:
      'Where shipments contain animal- or plant-derived material, the necessary CITES permits and phytosanitary documentation are prepared before departure.',
  },
];

export default function Compliance() {
  return (
    <section id="compliance" className="section">
      <div className="container">
        <div className={styles.grid}>
          <Reveal>
            <SectionHeading
              className={styles.heading}
              tag="Standards We Ship To"
              title="Documented against the same regulations, every time."
              description="Compliance is what keeps a shipment moving instead of held at customs — every consignment is packed and papered to the same standard, regardless of destination."
            />
          </Reveal>

          <Reveal className={styles.panel} delay={0.1}>
            <ul className={styles.list}>
              {standards.map((standard) => (
                <li key={standard.code} className={styles.item}>
                  <span className={styles.code}>{standard.code}</span>
                  <p className={styles.text}>
                    <strong>{standard.title}</strong> {standard.description}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
