export type BlogBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string; id: string; imageQuery?: string; imageAlt?: string }
  | { type: 'h3'; text: string; id: string }
  | { type: 'list'; items: string[]; ordered?: boolean }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'callout'; title: string; text: string };

export type BlogFaq = { q: string; a: string };

export type BlogRelated = { href: string; title: string; desc: string };

export type BlogCta = {
  title: string;
  text: string;
  label: string;
  href: string;
};

export type BlogPost = {
  slug: string;
  path: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  tags: string[];
  publishedAt: string;
  updatedAt: string;
  readingTimeMinutes: number;
  h1: string;
  subtitle: string;
  /** Pexels search query used to fetch a contextual cover image at request time. */
  coverQuery: string;
  coverAlt: string;
  body: BlogBlock[];
  faqs: BlogFaq[];
  related: BlogRelated[];
  cta: BlogCta;
};
