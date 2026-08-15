'use client';
import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#works', label: 'Works' },
  { href: '#process', label: 'Process' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1100) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${open ? styles.menuOpen : ''}`}>
      <nav className={styles.nav}>
        <a href="#home" className={styles.logo} aria-label="WhiteGuava home" onClick={close}>
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
          {links.map((l) => (
            <li key={l.href}><a href={l.href}>{l.label}</a></li>
          ))}
        </ul>
        <a href="#contact" className={styles.cta} onClick={close}><span>Start a Project</span></a>
        <button
          type="button"
          className={styles.menuBtn}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={styles.menuBar} />
          <span className={styles.menuBar} />
        </button>
      </nav>

      <div className={`${styles.mobilePanel} ${open ? styles.mobilePanelOpen : ''}`}>
        <ul className={styles.mobileLinks}>
          {links.map((l) => (
            <li key={l.href}><a href={l.href} onClick={close}>{l.label}</a></li>
          ))}
        </ul>
        <a href="#contact" className={styles.mobileCta} onClick={close}>Start a Project</a>
      </div>
    </header>
  );
}
