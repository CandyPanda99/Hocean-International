import Image from 'next/image';
import styles from './Footer.module.css';

const quickLinks = [
  { href: '#services', label: 'Services' },
  { href: '#temperature', label: 'Temperature' },
  { href: '#packaging', label: 'Packaging' },
  { href: '#process', label: 'Process' },
  { href: '#why', label: 'Credentials' },
  { href: '#flights', label: 'Flights' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.top}>
          <nav aria-label="Footer">
            <ul className={styles.links}>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <a href="#contact" className={styles.button}>
            Request a Shipment
          </a>
        </div>

        <div className={styles.bottom}>
          <div className={styles.logoWrapper}>
            <Image
              src="/Logo.png"
              alt="Hocean International Logo"
              width={150}
              height={100}
              className={styles.logoImage}
            />
          </div>

          <div className={styles.meta}>
            <ul className={styles.policies}>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Terms and Conditions</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Email Marketing Policy</a></li>
            </ul>
            <p className={styles.copyright}>© 2026 Hocean International — Colombo, Sri Lanka</p>
            <p className={styles.fine}>DHL Medical Express · Authorized Account Holder</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
