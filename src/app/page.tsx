'use client';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Marquee from '@/components/Marquee';
import Services from '@/components/Services';
import Works from '@/components/Works';
import Process from '@/components/Process';
import Benefits from '@/components/Benefits';
import Features from '@/components/Features';
import Tools from '@/components/Tools';
import Team from '@/components/Team';
import Stats from '@/components/Stats';
import Awards from '@/components/Awards';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    const observe = () => document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el));
    observe();
    const mo = new MutationObserver(observe);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      observer.disconnect();
      mo.disconnect();
    };
  }, []);

  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Marquee />
      <Services />
      <Works />
      <Process />
      <Benefits />
      <Features />
      <Tools />
      <Team />
      <Stats />
      <Awards />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
