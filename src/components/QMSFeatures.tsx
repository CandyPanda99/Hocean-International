'use client';
import { motion } from 'framer-motion';
import { ShieldCheck, PackageSearch, FileCheck2 } from 'lucide-react';
import styles from './QMSFeatures.module.css';

export default function QMSFeatures() {
  const features = [
    {
      title: "Professional & Qualified Couriers",
      description: "Hocean International leverages our global courier network. Through an annual training matrix, our Experts ensure a highly trained and responsive network. Personnel are equipped to handle customs documentation and communicate proactively for seamless deliveries.",
      icon: ShieldCheck
    },
    {
      title: "Validated Packaging & Equipment",
      description: "Our Industry Experts procure packaging and temperature-controlled equipment that maintains product integrity throughout shipment transit. Our NIST-accredited data loggers and IATA-certified pacakaging and dry shippers enhance temperature regulation and ensure product viability.",
      icon: PackageSearch
    },
    {
      title: "Accredited Standard Operating Procedures",
      description: "Hocean’s commitment to sustainable and high quality logistics services rely on meeting market standard practices when handling various products. Our Regional Industry Experts and QA Team enhance our procedures leveraging local-know how and shifting trends.",
      icon: FileCheck2
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <motion.h2 
          className={styles.mainTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Make it Happen with Hocean’s Global Quality Management System (QMS)
        </motion.h2>

        <motion.div 
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div key={index} className={styles.card} variants={itemVariants}>
                <div className={styles.iconWrapper}>
                  <Icon className={styles.icon} size={48} strokeWidth={1.5} />
                </div>
                <h3 className={styles.title}>{feature.title}</h3>
                <p className={styles.description}>{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
