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
            Global <span className="gradient-text">Biological Sample Shipping</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className={styles.description}>
            Reliable dry ice shipping solutions for biological, clinical, and research samples worldwide. Leveraging DHL’s international network, we ensure temperature-controlled transportation with speed, compliance, and peace of mind.
          </motion.p>

          <motion.h2 variants={itemVariants} className={styles.subtitle}>
            Temperature-Controlled Shipping Without Compromise
          </motion.h2>

          <motion.div variants={itemVariants} className={styles.servicesIntro}>
            <p>Your Partner in International Sample Transportation, providing the following services:</p>
            <ServicesList />
          </motion.div>

          <motion.h3 variants={itemVariants} className={styles.bottomSubtitle}>
            Our Commitment
          </motion.h3>
          <motion.p variants={itemVariants} className={styles.bottomDesc}>
            We understand that every sample is valuable. Whether supporting medical diagnosis, scientific research, or pharmaceutical development, we are committed to providing secure, reliable, and temperature-controlled logistics solutions that help your critical shipments reach their destination safely and on time.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
