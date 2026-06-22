'use client';
import { motion } from 'framer-motion';
import { ThermometerSnowflake, Snowflake, Droplets, Thermometer, Sun } from 'lucide-react';
import styles from './ServicesList.module.css';

export default function ServicesList() {
  const services = [
    {
      title: "Cryogenic",
      range: "(-196°C to -150°C)",
      icon: <ThermometerSnowflake className={styles.icon} />
    },
    {
      title: "Dry Ice",
      range: "(-80°C to -20°C)",
      icon: <Snowflake className={styles.icon} />
    },
    {
      title: "Controlled Frozen",
      range: "(-25°C to -15°C)",
      icon: <Droplets className={styles.icon} />
    },
    {
      title: "Refrigerated",
      range: "(+2°C to +8°C)",
      icon: <Thermometer className={styles.icon} />
    },
    {
      title: "Controlled-Room Temperature",
      range: "(+15°C to +25°C)",
      icon: <Sun className={styles.icon} />
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
            <span className={styles.range}>{service.range}</span>
          </div>
        </motion.li>
      ))}
    </ul>
  );
}
