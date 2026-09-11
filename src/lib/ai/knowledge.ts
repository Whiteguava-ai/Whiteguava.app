import { blogPostList } from '@/data/blog';
import type { BlogBlock } from '@/data/blog';
import { services } from '@/data/services';
import { GUAVA_PRODUCTS, guavaFaqs } from '@/data/guava';
import { homepageFaqs, aboutFaqs } from '@/data/faqs';
import { SITE_URL } from '@/lib/site';

/**
 * The site's entire public content, flattened into one plain-text corpus for
 * an LLM to answer questions against — no vector DB, no chunking/retrieval
 * step. The whole site is small enough (a few dozen thousand tokens) to just
 * hand to Claude in full on every request; that's simpler and more reliable
 * than approximate retrieval for a corpus this size, and it's rebuilt from
 * the same typed data every other page renders from, so it can't drift out
 * of sync with what's actually published.
 *
 * Built once per server process (the underlying data is static at build
 * time) and reused by both `/api/ask` and `/api/scope`.
 */

function blockToText(block: BlogBlock): string {
  switch (block.type) {
    case 'p':
      return block.text;
    case 'h2':
    case 'h3':
      return `### ${block.text}`;
    case 'list':
      return block.items.map((i) => `- ${i}`).join('\n');
    case 'table':
      return [block.headers.join(' | '), ...block.rows.map((r) => r.join(' | '))].join('\n');
    case 'callout':
      return `NOTE — ${block.title}: ${block.text}`;
    case 'embed':
      // Interactive widgets (calculators, diagrams) carry no answerable text of
      // their own; the surrounding prose already explains what they show.
      return '';
    default:
      return '';
  }
}

let cached: string | null = null;

export function buildKnowledgeBase(): string {
  if (cached) return cached;

  const sections: string[] = [];

  sections.push(
    [
      '# WhiteGuava — company facts',
      'WhiteGuava is an AI software development company based in Bengaluru, Karnataka, India, available for worldwide projects.',
      'It builds AI agents, custom AI/ML systems, business software, AI integrations, automation, data & analytics, and cloud deployment — and separately sells the Guava Product Suite, ten business applications sold as a one-time setup instead of a per-user subscription.',
      `Website: ${SITE_URL}`,
    ].join('\n')
  );

  sections.push(
    '# Guava Product Suite — the ten products\n' +
      GUAVA_PRODUCTS.map(
        (p) =>
          `## ${p.name} (${p.category})\nWhat it does: ${p.does}\nReplaces: ${p.replaces}\nApprox. self-hosted server cost: $${p.serverMo}/month (one-time setup engagement, no per-user licence)\nFull breakdown: ${SITE_URL}${p.href}`
      ).join('\n\n')
  );

  sections.push(
    '# Guava Product Suite — FAQ\n' +
      guavaFaqs.map((f) => `Q: ${f.q}\nA: ${f.a}`).join('\n\n')
  );

  sections.push(
    '# Services WhiteGuava offers\n' +
      Object.values(services)
        .map((s) =>
          [
            `## ${s.name}`,
            s.description,
            s.overview.join(' '),
            s.topics.map((t) => `- ${t.title}: ${t.body}`).join('\n'),
            s.useCases.length ? 'Use cases:\n' + s.useCases.map((u) => `- ${u.title}: ${u.body}`).join('\n') : '',
            'FAQ:\n' + s.faqs.map((f) => `Q: ${f.q}\nA: ${f.a}`).join('\n'),
            `Page: ${SITE_URL}${s.path}`,
          ]
            .filter(Boolean)
            .join('\n')
        )
        .join('\n\n')
  );

  sections.push(
    '# Guava product deep-dive posts (pricing tables, comparisons, full FAQ)\n' +
      blogPostList
        .filter((p) => p.slug.startsWith('one-time-payment-'))
        .map((post) =>
          [
            `## ${post.h1}`,
            post.subtitle,
            post.body.map(blockToText).filter(Boolean).join('\n'),
            'FAQ:\n' + post.faqs.map((f) => `Q: ${f.q}\nA: ${f.a}`).join('\n'),
            `Full post: ${SITE_URL}${post.path}`,
          ].join('\n')
        )
        .join('\n\n')
  );

  sections.push(
    '# General WhiteGuava FAQ\n' +
      [...homepageFaqs, ...aboutFaqs].map((f) => `Q: ${f.q}\nA: ${f.a}`).join('\n\n')
  );

  cached = sections.join('\n\n---\n\n');
  return cached;
}
