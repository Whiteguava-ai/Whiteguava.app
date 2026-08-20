'use client';

import Image from 'next/image';
import Breadcrumbs from '@/components/Breadcrumbs';
import Contact from '@/components/Contact';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import SectionStage from '@/components/visual/SectionStage';
import type { BlogPost as BlogPostType } from '@/data/blog';
import type { PexelsImage } from '@/lib/pexels';
import { SITE_NAME } from '@/lib/site';
import styles from './BlogPost.module.css';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPost({
  post,
  cover,
  sectionImages = {},
}: {
  post: BlogPostType;
  cover: PexelsImage | null;
  sectionImages?: Record<string, PexelsImage | null>;
}) {
  const toc = post.body.filter((b) => b.type === 'h2') as Extract<
    BlogPostType['body'][number],
    { type: 'h2' }
  >[];

  return (
    <main>
      <Navbar />

      <section className={styles.headerSection}>
        <SectionStage>
          <div className="container">
            <Breadcrumbs
              items={[
                { name: 'Home', path: '/' },
                { name: 'Blog', path: '/blog' },
                { name: post.title, path: post.path },
              ]}
            />
            <div className={`${styles.header} reveal`}>
              <div className="section-badge">
                <span className="section-badge-dot" />
                {post.category}
              </div>
              <h1 className={styles.headline}>{post.h1}</h1>
              <p className={styles.sub}>{post.subtitle}</p>
              <div className={styles.meta}>
                <span>By {SITE_NAME}</span>
                <span aria-hidden="true">·</span>
                <span>Published {formatDate(post.publishedAt)}</span>
                {post.updatedAt !== post.publishedAt && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span>Updated {formatDate(post.updatedAt)}</span>
                  </>
                )}
                <span aria-hidden="true">·</span>
                <span>{post.readingTimeMinutes} min read</span>
              </div>
            </div>

            {cover && (
              <figure className={`${styles.coverFigure} reveal reveal-delay-1`}>
                <Image
                  src={cover.url}
                  alt={cover.alt}
                  width={1200}
                  height={675}
                  className={styles.cover}
                  priority
                />
                <figcaption className={styles.caption}>
                  Photo by{' '}
                  <a href={cover.photographerUrl} target="_blank" rel="noopener noreferrer">
                    {cover.photographer}
                  </a>{' '}
                  on Pexels
                </figcaption>
              </figure>
            )}
          </div>
        </SectionStage>
      </section>

      <section>
        <SectionStage>
          <div className="container">
            <div className={styles.layout}>
              <div className={styles.prose}>
                {post.body.map((block, i) => {
                  if (block.type === 'p') {
                    return <p key={i}>{block.text}</p>;
                  }
                  if (block.type === 'h2') {
                    const image = sectionImages[block.id];
                    return (
                      <div key={i}>
                        {image && (
                          <figure className={styles.sectionFigure}>
                            <Image
                              src={image.url}
                              alt={image.alt}
                              width={900}
                              height={506}
                              className={styles.sectionImage}
                              loading="lazy"
                            />
                            <figcaption className={styles.caption}>
                              Photo by{' '}
                              <a href={image.photographerUrl} target="_blank" rel="noopener noreferrer">
                                {image.photographer}
                              </a>{' '}
                              on Pexels
                            </figcaption>
                          </figure>
                        )}
                        <h2 id={block.id}>{block.text}</h2>
                      </div>
                    );
                  }
                  if (block.type === 'h3') {
                    return (
                      <h3 key={i} id={block.id}>
                        {block.text}
                      </h3>
                    );
                  }
                  if (block.type === 'list') {
                    const ListTag = block.ordered ? 'ol' : 'ul';
                    return (
                      <ListTag key={i}>
                        {block.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ListTag>
                    );
                  }
                  if (block.type === 'table') {
                    return (
                      <div key={i} className={styles.tableWrap}>
                        <table>
                          <thead>
                            <tr>
                              {block.headers.map((h) => (
                                <th key={h}>{h}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {block.rows.map((row, r) => (
                              <tr key={r}>
                                {row.map((cell, c) => (
                                  <td key={c}>{cell}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    );
                  }
                  if (block.type === 'callout') {
                    return (
                      <div key={i} className={styles.callout}>
                        <strong>{block.title}</strong>
                        <p>{block.text}</p>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>

              <aside className={styles.toc}>
                <p className={styles.tocTitle}>On this page</p>
                <ul>
                  {toc.map((h) => (
                    <li key={h.id}>
                      <a href={`#${h.id}`}>{h.text}</a>
                    </li>
                  ))}
                </ul>
                <div className={styles.authorCard}>
                  <p className={styles.authorLabel}>Written by</p>
                  <p className={styles.authorName}>{SITE_NAME}</p>
                  <p className={styles.authorBio}>
                    An AI software development studio in Bengaluru building AI agents,
                    automation, and custom software for businesses worldwide.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </SectionStage>
      </section>

      <section>
        <SectionStage>
          <div className="container">
            <div className={`${styles.ctaBox} reveal`}>
              <h2>{post.cta.title}</h2>
              <p>{post.cta.text}</p>
              <a href={post.cta.href} className={styles.ctaBtn}>
                <span>{post.cta.label}</span>
              </a>
            </div>
          </div>
        </SectionStage>
      </section>

      <section>
        <SectionStage>
          <div className="container">
            <div className={`${styles.header} reveal`}>
              <div className="section-badge">
                <span className="section-badge-dot" />
                Related
              </div>
              <h2 className={styles.headline2}>More from WhiteGuava</h2>
            </div>
            <div className={styles.related}>
              {post.related.map((item, i) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`${styles.relatedCard} reveal reveal-delay-${Math.min(i + 1, 6)}`}
                >
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <span>Learn more →</span>
                </a>
              ))}
            </div>
          </div>
        </SectionStage>
      </section>

      <FAQ items={post.faqs} />
      <Contact />
      <Footer />
    </main>
  );
}
