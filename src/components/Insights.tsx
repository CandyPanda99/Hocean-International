'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './Insights.module.css';

export default function Insights() {
  const insights = [
    {
      title: "Dangerous Cobra Venom for Research via high-end monitoring solutions",
      excerpt: "Two liters of bottled cobra venom shipped via Hocean’s global foothold. To ensure its viability for anti-venom development, Hocean leveraged its accredited data loggers to not only monitor temperature, but shock and motion to ensure the integrity of the bottles...",
      link: "#",
      image: "https://wordpress-1400653-5323841.cloudwaysapps.com/wp-content/uploads/2025/03/Asset-8@2x.png"
    },
    {
      title: "Lifesaving transplant from US to HK secured through validated Dry Shippers",
      excerpt: "A patient in Hong Kong was matched with an organ donor in the United States. Hocean’s Industry Experts secured this lifesaving transit through its premium LN2 vapour shippers that kept the organ from degradation. Learn about how our integrated QMS...",
      link: "#",
      image: "https://wordpress-1400653-5323841.cloudwaysapps.com/wp-content/uploads/2025/03/Asset-7@2x.png"
    },
    {
      title: "Hocean’s Global Courier Network supports Registry shipments",
      excerpt: "Hocean’s bio-logistics solutions support shipments of various global Bone Marrow Registries. This specific case highlights how Hocean’s On-Board Couriers (OBCs) documented and cleared a shipment of Peripheral Blood Stem Cells (PBCSs) samples from Hong Kong to Singapore...",
      link: "#",
      image: "https://wordpress-1400653-5323841.cloudwaysapps.com/wp-content/uploads/2025/03/Asset-6@2x.png"
    }
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="insight-sec" className={styles.section}>
      <div className={styles.background}></div>
      <div className={`container ${styles.container}`}>
        <motion.div
          className={styles.header}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
        >
          <div className={styles.headerContent}>
            <span className={styles.subtitle}>HOCEAN INSIGHT</span>
            <h2 className={styles.title}>Discover Hocean International’s Tailored Logistics Solutions for Temperature-sensitive Products</h2>
            <p className={styles.description}>
              Personalisation and customisation have become key components for businesses to boost revenue. Amidst the growing number of logistics service providers available, consumers are looking for logistics solutions that can not only address their needs, but define the processes in detail. At Hocean, our Experts offer Customer-oriented Procedures (COP) to enhance client supply chain mobility.
            </p>
            <a href="#contact-sec" className={styles.button}>
              Speak to Us
            </a>
          </div>
          <div className={styles.headerImage}>
            <Image
              src="https://wordpress-1400653-5323841.cloudwaysapps.com/wp-content/uploads/2025/03/Asset-5.png"
              alt="Tailored Logistics Solutions"
              width={600}
              height={500}
              className={styles.image}
            />
          </div>
        </motion.div>

        <div id="case-studies" className={styles.insightsHeader}>
          <span className={styles.subtitle}>HOCEAN INSIGHT</span>
        </div>

        <motion.div
          className={styles.grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.2 }}
        >
          {insights.map((insight, index) => (
            <motion.div key={index} className={styles.card} variants={cardVariants}>
              <a href={insight.link} className={styles.cardLink} target="_blank" rel="noopener noreferrer">
                <div className={styles.imageWrapper}>
                  <Image
                    src={insight.image}
                    alt={insight.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className={styles.cardImage}
                  />
                  <div className={styles.imageOverlay}></div>
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{insight.title}</h3>
                  <p className={styles.cardExcerpt}>{insight.excerpt}</p>
                  <span className={styles.readMore}>
                    Read More <ArrowRight size={18} />
                  </span>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
