import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.top}>
          <ul className={styles.links}>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Terms and Conditions</a></li>
            <li><a href="#" target="_blank" rel="noopener noreferrer">Email Marketing Policy</a></li>
          </ul>
          <a href="#contact-sec" className={styles.button}>
            Contact Hocean
          </a>
        </div>
        
        <div className={styles.bottom}>
          <div className={styles.logoWrapper}>
            <Image 
              src="/Logo.png" 
              alt="Hocean International Logo" 
              width={300} 
              height={85} 
              className={styles.logoImage}
            />
          </div>
          <p className={styles.copyright}>
            Copyright © 2026 Hocean International Group. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
