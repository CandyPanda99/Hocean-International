'use client';
import { motion } from 'framer-motion';
import { Globe, Snowflake, Stethoscope, FlaskConical, Thermometer, FileCheck, Plane } from 'lucide-react';
import styles from './ServicesList.module.css';

export default function ServicesList() {
  const services = [
    {
      title: "International biological sample shipping",
      icon: <Globe className={styles.icon} />
    },
    {
      title: "Dry ice packaging and replenishment",
      icon: <Snowflake className={styles.icon} />
    },
    {
      title: "Clinical and diagnostic specimen transport",
      icon: <Stethoscope className={styles.icon} />
    },
    {
      title: "Research and laboratory sample logistics",
      icon: <FlaskConical className={styles.icon} />
    },
    {
      title: "Temperature-controlled courier solutions",
      icon: <Thermometer className={styles.icon} />
    },
    {
      title: "Documentation and shipping compliance support",
      icon: <FileCheck className={styles.icon} />
    },
    {
      title: "Express worldwide delivery through DHL",
      icon: <Plane className={styles.icon} />
    }
  ];

  return (
    <ul className={styles.list}>
      {services.map((service, index) => (
        <motion.li 
          key={index}
          className={styles.item}
          whileHover={{ scale: 1.02, y: -2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className={styles.iconWrapper}>
            {service.icon}
          </div>
          <div className={styles.textWrapper}>
            <span className={styles.title}>{service.title}</span>
          </div>
        </motion.li>
      ))}
    </ul>
  );
}
