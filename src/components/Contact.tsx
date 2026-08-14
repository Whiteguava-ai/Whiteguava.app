'use client';
import { useState } from 'react';
import SectionStage from '@/components/visual/SectionStage';
import styles from './Contact.module.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', service: '', info: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! We'll get back to you within 24 hours.");
    setForm({ name: '', email: '', service: '', info: '' });
  };

  return (
    <section id="contact" className={styles.contact}>
      <SectionStage>
      <div className="container">
        <div className={styles.layout}>
          <div className={`${styles.left} reveal`}>
            <div className="section-badge">
              <span className="section-badge-dot" />
              Contact
            </div>
            <h2 className={styles.headline}>Let’s Build Intelligent Things</h2>
            <div className={styles.infoItems}>
              <div>
                <span className={styles.infoLabel}>E-mail address</span>
                <a href="mailto:contact@thewhiteguava.in" className={styles.infoValue}>contact@thewhiteguava.in</a>
              </div>
              <div>
                <span className={styles.infoLabel}>Phone number</span>
                <div className={styles.phoneList}>
                  <a href="tel:+916374702575" className={styles.infoValue}>+91 63747 02575</a>
                  <a href="tel:+917892850922" className={styles.infoValue}>+91 78928 50922</a>
                </div>
              </div>
            </div>
          </div>

          <form className={`${styles.form} reveal reveal-delay-2`} onSubmit={handleSubmit}>
            <p className={styles.formTitle}>Fill this form below</p>
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="name">Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className={styles.input}
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={styles.input}
                  placeholder="Enter the e-mail"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="service">You are interested in</label>
              <select
                id="service"
                name="service"
                className={styles.input}
                value={form.service}
                onChange={handleChange}
                required
              >
                <option value="">Select…</option>
                <option>Website Design</option>
                <option>Web Development</option>
                <option>UI/UX Design</option>
                <option>Framer Landing Page</option>
              </select>
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="info">More About The Project</label>
              <textarea
                id="info"
                name="info"
                className={`${styles.input} ${styles.textarea}`}
                placeholder="Tell us about the project…"
                rows={5}
                value={form.info}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className={`${styles.submitBtn} btn-dark`}>
              <span>Submit Message</span>
            </button>
          </form>
        </div>
      </div>
      </SectionStage>
    </section>
  );
}
