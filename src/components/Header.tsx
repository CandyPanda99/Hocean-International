'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`${styles.container} container`}>
        <div className={styles.logoContainer}>
          <Link href="/" className={styles.logoLink}>
            <Image 
              src="/Logo.png" 
              alt="Hocean International Logo" 
              width={300} 
              height={85} 
              priority
              className={styles.logoImage}
            />
          </Link>
        </div>

        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            <li><a href="#home-sec" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
            <li><a href="#about-sec" onClick={() => setIsMobileMenuOpen(false)}>About Hocean</a></li>
            <li><a href="#insight-sec" onClick={() => setIsMobileMenuOpen(false)}>Insights</a></li>
            <li><a href="#case-studies" onClick={() => setIsMobileMenuOpen(false)}>Case Studies</a></li>
          </ul>
        </nav>

        <div className={styles.actions}>
          <a href="#contact-sec" className={styles.button}>
            Speak with Us
          </a>
          <button 
            className={styles.mobileMenuBtn}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}
