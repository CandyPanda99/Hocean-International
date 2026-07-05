'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './BioLogistics.module.css';

export default function BioLogistics() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } }
  };

  const textVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about-sec" className={styles.section}>
      <div className={`container ${styles.container}`}>
        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className={styles.imageColumn} variants={imageVariants}>
            <div className={styles.imageWrapper}>
              <Image 
                src="https://wordpress-1400653-5323841.cloudwaysapps.com/wp-content/uploads/2025/03/Asset-9@2x.png" 
                alt="Bio Logistics Solutions" 
                fill
                style={{ objectFit: 'contain' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
          
          <motion.div className={styles.contentColumn} variants={textVariants}>
            <h2 className={styles.title} style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-secondary)', fontWeight: 'bold' }}>Safe, Reliable & Temperature-Controlled Logistics</h2>
            <p className={styles.text}>
              We specialize in the international transportation of biological and diagnostic samples using validated dry ice packaging and trusted global courier networks. Our team ensures that temperature-sensitive specimens are handled with precision and delivered safely to laboratories, research facilities, hospitals, and healthcare institutions worldwide.
            </p>
            <h3 style={{ fontSize: '1.25rem', marginTop: '1.5rem', marginBottom: '0.75rem', color: 'var(--color-secondary)', fontWeight: '600' }}>Industries We Serve</h3>
            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', marginBottom: '1.5rem', color: 'var(--color-text-main)', lineHeight: '1.6' }}>
              <li>Medical Laboratories</li>
              <li>Hospitals & Healthcare Providers</li>
              <li>Research Institutions</li>
              <li>Biotechnology Companies</li>
              <li>Pharmaceutical Organizations</li>
              <li>Universities & Academic Research Centers</li>
              <li>Clinical Trial Organizations</li>
            </ul>
            <div className={styles.secondImageWrapper}>
              <Image 
                src="https://wordpress-1400653-5323841.cloudwaysapps.com/wp-content/uploads/2025/03/Asset-1.png" 
                alt="Temperature Monitoring" 
                fill
                style={{ objectFit: 'contain' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
