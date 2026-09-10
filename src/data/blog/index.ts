import { aiAgentsForBusiness } from './posts/ai-agents-for-business';
import { oneTimePaymentCrm } from './posts/one-time-payment-crm';
import { whatAreAiAgents } from './posts/what-are-ai-agents';
import type { BlogPost } from './types';

export type { BlogPost, BlogBlock, BlogEmbed, BlogFaq, BlogRelated, BlogCta } from './types';

export const blogPosts: Record<string, BlogPost> = {
  'one-time-payment-crm': oneTimePaymentCrm,
  'what-are-ai-agents': whatAreAiAgents,
  'ai-agents-for-business': aiAgentsForBusiness,
};

export const blogPostList: BlogPost[] = Object.values(blogPosts).sort(
  (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
);

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts[slug];
}
