'use client';
import { motion } from 'framer-motion';
import { ShieldCheck, Snowflake, Globe, Plane, Users } from 'lucide-react';
import styles from './QMSFeatures.module.css';

export default function QMSFeatures() {
  const features = [
    {
      title: "Temperature Integrity",
      description: "We use high-quality dry ice packaging solutions designed to maintain required temperatures throughout transit, helping preserve sample integrity from origin to destination.",
      icon: Snowflake
    },
    {
      title: "Global Reach",
      description: "Ship confidently to virtually any destination worldwide through DHL’s extensive international network.",
      icon: Globe
    },
    {
      title: "Regulatory Compliance",
      description: "Our team follows industry best practices and shipping requirements for biological materials, ensuring documentation and handling procedures meet applicable regulations.",
      icon: ShieldCheck
    },
    {
      title: "Fast & Secure Delivery",
      description: "Time-sensitive shipments receive priority handling to minimize transit times and maintain sample quality.",
      icon: Plane
    },
    {
      title: "Professional Support",
      description: "From shipment preparation to final delivery, our logistics specialists are available to assist with every stage of the process.",
      icon: Users
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
          Why Choose Us?
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
