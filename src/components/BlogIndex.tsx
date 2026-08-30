'use client';

import Breadcrumbs from '@/components/Breadcrumbs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { CardHoverEffect, type HoverCardItem } from '@/components/ui/card-hover-effect';
import { CinematicText } from '@/components/motion/CinematicText';
import SectionStage from '@/components/visual/SectionStage';
import type { BlogPost } from '@/data/blog';
import styles from './BlogIndex.module.css';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogIndex({ posts }: { posts: BlogPost[] }) {
  return (
    <main>
      <Navbar />

      <section className={styles.headerSection}>
        <SectionStage>
          <div className="container">
            <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }]} />
            <div className={`${styles.header} reveal`}>
              <div className="section-badge">
                <span className="section-badge-dot" />
                Blog
              </div>
              <h1 className={styles.headline}>
                <CinematicText as="span" trigger="load">AI Agents, Automation & WhatsApp AI Insights</CinematicText>
              </h1>
              <p className={styles.sub}>
                Practical guides on AI agents, automation, and business AI — written by the team
                that builds them.
              </p>
            </div>
          </div>
        </SectionStage>
      </section>

      <section>
        <SectionStage>
          <div className="container">
            {posts.length === 0 ? (
              <p className={styles.empty}>New articles are on the way.</p>
            ) : (
              <CardHoverEffect
                className="md:grid-cols-2 lg:grid-cols-3 gap-5"
                items={posts.map<HoverCardItem>((post, i) => ({
                  key: post.slug,
                  href: post.path,
                  content: (
                    <div className={`${styles.card} reveal reveal-delay-${Math.min(i + 1, 6)}`}>
                      <span className={styles.category}>{post.category}</span>
                      <h2>{post.title}</h2>
                      <p>{post.excerpt}</p>
                      <div className={styles.meta}>
                        <span>{formatDate(post.publishedAt)}</span>
                        <span aria-hidden="true">·</span>
                        <span>{post.readingTimeMinutes} min read</span>
                      </div>
                    </div>
                  ),
                }))}
              />
            )}
          </div>
        </SectionStage>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
