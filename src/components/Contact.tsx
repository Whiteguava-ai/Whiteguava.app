'use client';
import { useState } from 'react';
import SectionStage from '@/components/visual/SectionStage';
import styles from './Contact.module.css';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    info: '',
    budget: '',
    timeline: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! We'll get back to you within 24 hours.");
    setForm({ name: '', email: '', company: '', phone: '', service: '', info: '', budget: '', timeline: '' });
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
            <h2 className={styles.headline}>Let&apos;s Build Something Intelligent.</h2>
            <p style={{ fontSize: '15px', lineHeight: 1.6, color: '#555', marginBottom: '24px' }}>
              Have an idea, workflow, or business problem you&apos;d like to solve?<br />
              Tell us what you&apos;re working on and we&apos;ll get back to you.
            </p>
            <div className={styles.infoItems}>
              <div>
                <span className={styles.infoLabel}>E-mail address</span>
                <div className={styles.emailList}>
                  <a href="mailto:admin@thewhiteguava.in" className={styles.infoValue}>admin@thewhiteguava.in</a>
                  <a href="mailto:nithin@thewhiteguava.in" className={styles.infoValue}>nithin@thewhiteguava.in</a>
                  <a href="mailto:saravana@thewhiteguava.in" className={styles.infoValue}>saravana@thewhiteguava.in</a>
                  <a href="mailto:murugavelj@thewhiteguava.in" className={styles.infoValue}>murugavelj@thewhiteguava.in</a>
                </div>
              </div>
            </div>
          </div>

          <form className={`${styles.form} reveal reveal-delay-2`} onSubmit={handleSubmit}>
            <p className={styles.formTitle}>Tell us about your project</p>

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
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="company">Company</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  className={styles.input}
                  placeholder="Your company name"
                  value={form.company}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="phone">Phone / WhatsApp</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className={styles.input}
                  placeholder="+91 XXXXX XXXXX"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="service">What are you interested in?</label>
              <select
                id="service"
                name="service"
                className={styles.input}
                value={form.service}
                onChange={handleChange}
                required
              >
                <option value="">Select…</option>
                <option>AI Agents & Automation</option>
                <option>Custom AI & Machine Learning</option>
                <option>Business Software Development</option>
                <option>AI Integration</option>
                <option>Automation & Digital Transformation</option>
                <option>Data & Analytics</option>
                <option>Cloud & Deployment</option>
                <option>AI-Powered Digital Experiences</option>
                <option>AI Discovery / Consultation</option>
              </select>
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="budget">Budget Range</label>
                <select
                  id="budget"
                  name="budget"
                  className={styles.input}
                  value={form.budget}
                  onChange={handleChange}
                >
                  <option value="">Select…</option>
                  <option>Under ₹5 Lakhs</option>
                  <option>₹5L – ₹15L</option>
                  <option>₹15L – ₹50L</option>
                  <option>₹50L+</option>
                  <option>Let&apos;s discuss</option>
                </select>
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="timeline">Timeline</label>
                <select
                  id="timeline"
                  name="timeline"
                  className={styles.input}
                  value={form.timeline}
                  onChange={handleChange}
                >
                  <option value="">Select…</option>
                  <option>ASAP</option>
                  <option>Within 1 month</option>
                  <option>1–3 months</option>
                  <option>3–6 months</option>
                  <option>Flexible</option>
                </select>
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="info">Project Details</label>
              <textarea
                id="info"
                name="info"
                className={`${styles.input} ${styles.textarea}`}
                placeholder="Tell us about your project, the problem you're solving, or the workflow you'd like to automate…"
                rows={5}
                value={form.info}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className={`${styles.submitBtn} btn-dark`}>
              <span>Start a Conversation</span>
            </button>
          </form>
        </div>
      </div>
      </SectionStage>
    </section>
  );
}
