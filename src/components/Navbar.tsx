'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { m, useMotionValueEvent, useReducedMotion, useScroll } from 'framer-motion';
import { NAV_LINKS } from '@/lib/site';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Hide the bar while scrolling down through the page, bring it back the
  // moment the reader scrolls up — but never hide it with the mobile menu open.
  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    if (open || reduced) {
      setHidden(false);
      return;
    }
    setHidden(y > prev && y > 240);
  });

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
    <m.header
      className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${open ? styles.menuOpen : ''}`}
      animate={{ y: hidden ? '-115%' : '0%' }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className={styles.nav}>
        <a href="/" className={styles.logo} aria-label="WhiteGuava home" onClick={close}>
          <Image
            src="/brand/whiteguava-logo.png"
            alt="WhiteGuava — AI software development company"
            className={styles.logoFull}
            width={890}
            height={206}
            priority
          />
          <Image
            src="/brand/whiteguava-mark.png"
            alt=""
            className={styles.logoMark}
            width={448}
            height={272}
            priority
          />
        </a>
        <ul className={styles.links}>
          {NAV_LINKS.map((l) => (
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
          {NAV_LINKS.map((l) => (
            <li key={l.href}><a href={l.href} onClick={close}>{l.label}</a></li>
          ))}
        </ul>
        <a href="#contact" className={styles.mobileCta} onClick={close}>Start a Project</a>
      </div>
    </m.header>
  );
}
