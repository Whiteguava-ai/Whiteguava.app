import { aiAgentsForBusiness } from './posts/ai-agents-for-business';
import { oneTimePaymentAppPlatform } from './posts/one-time-payment-app-platform';
import { oneTimePaymentBi } from './posts/one-time-payment-bi-dashboards';
import { oneTimePaymentBuilder } from './posts/one-time-payment-website-builder';
import { oneTimePaymentCrm } from './posts/one-time-payment-crm';
import { oneTimePaymentErp } from './posts/one-time-payment-erp';
import { oneTimePaymentHelpdesk } from './posts/one-time-payment-helpdesk';
import { oneTimePaymentHr } from './posts/one-time-payment-hr-software';
import { oneTimePaymentLms } from './posts/one-time-payment-lms';
import { oneTimePaymentLoanManagement } from './posts/one-time-payment-loan-management';
import { oneTimePaymentProjectManagement } from './posts/one-time-payment-project-management';
import { whatAreAiAgents } from './posts/what-are-ai-agents';
import type { BlogPost } from './types';

export type { BlogPost, BlogBlock, BlogEmbed, BlogFaq, BlogRelated, BlogCta } from './types';

export const blogPosts: Record<string, BlogPost> = {
  'one-time-payment-crm': oneTimePaymentCrm,
  'one-time-payment-erp': oneTimePaymentErp,
  'one-time-payment-hr-software': oneTimePaymentHr,
  'one-time-payment-lms': oneTimePaymentLms,
  'one-time-payment-bi-dashboards': oneTimePaymentBi,
  'one-time-payment-helpdesk': oneTimePaymentHelpdesk,
  'one-time-payment-website-builder': oneTimePaymentBuilder,
  'one-time-payment-loan-management': oneTimePaymentLoanManagement,
  'one-time-payment-project-management': oneTimePaymentProjectManagement,
  'one-time-payment-app-platform': oneTimePaymentAppPlatform,
  'what-are-ai-agents': whatAreAiAgents,
  'ai-agents-for-business': aiAgentsForBusiness,
};

export const blogPostList: BlogPost[] = Object.values(blogPosts).sort(
  (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
);

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts[slug];
}
