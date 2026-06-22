'use client';
import { motion } from 'framer-motion';
import styles from './HeroSection.module.css';
import ServicesList from './ServicesList';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="home-sec" className={styles.heroSection}>
      <div className={styles.background}></div>
      <div className={`container ${styles.container}`}>
        <motion.div 
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants} className={styles.title}>
            Delivering your temperature sensitive shipments with <span className="gradient-text">extreme care and precision</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className={styles.description}>
            Hocean International is a single-source logistics provider, delivering temperature-sensitive products globally with extreme care and precision. The Life Sciences Division manages temperature-controlled shipments for a wide range of sectors such as: pharmaceutical, healthcare, biotech, medical devices, cell & gene therapy, clinical trials and R&D. Through our 30+ years of logistics experience. Hocean provides quality-driven and customised bio-logistics services via On-Board Couriers and Express Air Freight services at various temperature ranges. Our Industry Experts offer high-end packaging and tracking solutions ensuring products are safely transported to its destination. All procedures are GDP, ISO and IATA compliant, committing to excellence throughout shipment transit.
          </motion.p>

          <motion.h2 variants={itemVariants} className={styles.subtitle}>
            Accredited and Secure shipments for high value and lifesaving products
          </motion.h2>

          <motion.div variants={itemVariants} className={styles.servicesIntro}>
            <p>Hocean operates under GDP and ISO-compliant procedures for exceptional service and meticulous care for every delivery under the following temperature ranges:</p>
            <ServicesList />
          </motion.div>

          <motion.h3 variants={itemVariants} className={styles.bottomSubtitle}>
            Dedicated Industry Experts offering tailored and global bio-logistics services
          </motion.h3>
          <motion.p variants={itemVariants} className={styles.bottomDesc}>
            Hocean International focuses on providing expert logistics care for various temperature-controlled products. Our teams are dedicated and proactively communicate shipment updates.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
