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
            <p className={styles.text}>
              Hocean International offers optimal and customised bio-logistics solutions that support pre-clinical to phase III of the process life cycle. We commit to handling high value products towards the advancement of biopharma breakthroughs. Our solutions are provided under various temperature ranges, from cryogenic, dry ice, controlled-frozen, refrigerated, to controlled room temperature – our data monitoring and validated packaging solutions assist with maintaining product integrity.
            </p>
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
