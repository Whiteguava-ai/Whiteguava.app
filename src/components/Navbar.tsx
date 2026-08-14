'use client';
import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={styles.nav}>
        <a href="#home" className={styles.logo} aria-label="WhiteGuava home">
          <img
            src="/brand/whiteguava-logo.png"
            alt="WhiteGuava"
            className={styles.logoFull}
          />
          <img
            src="/brand/whiteguava-mark.png"
            alt=""
            className={styles.logoMark}
          />
        </a>
        <ul className={styles.links}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#works">Works</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#contact" className={styles.cta}><span>Remix Now</span></a>
      </nav>
    </header>
  );
}
