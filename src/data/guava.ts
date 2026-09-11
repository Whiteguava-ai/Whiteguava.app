/**
 * Content for the /guava pillar page — the hub for the Guava Product Suite.
 * Each product links to its full breakdown post; the numbers here trace to
 * those posts (server cost per month, September 2026 competitor list pricing).
 */

export interface GuavaProduct {
  name: string;
  /**
   * The generic category term someone actually searches (e.g. "ERP
   * Software"), shown as the small kicker above the product name — not an
   * internal department label — so the card's on-page text carries the
   * keyword the product needs to rank for, not just its brand name.
   */
  category: string;
  href: string;
  /** One line: what it does. */
  does: string;
  /** What renting it usually looks like. */
  replaces: string;
  /** Approx. self-hosted server cost, USD/month. */
  serverMo: number;
}

export const GUAVA_PRODUCTS: GuavaProduct[] = [
  {
    name: 'GuavaCRM',
    category: 'CRM Software',
    href: '/blog/one-time-payment-crm',
    does: 'Leads, deals, a drag-and-drop pipeline, two-way email, tasks, call logging and WhatsApp.',
    replaces: 'Per-user Salesforce or Zoho CRM',
    serverMo: 28,
  },
  {
    name: 'GuavaERP',
    category: 'ERP Software',
    href: '/blog/one-time-payment-erp',
    does: 'Accounting, multi-warehouse inventory, purchasing, manufacturing and projects on one ledger.',
    replaces: 'NetSuite, SAP Business One or Dynamics 365',
    serverMo: 45,
  },
  {
    name: 'GuavaHR',
    category: 'HR Software',
    href: '/blog/one-time-payment-hr-software',
    does: 'Employee records, onboarding, leave, attendance, payroll, recruitment and appraisals.',
    replaces: 'Per-employee BambooHR, Workday or Rippling',
    serverMo: 28,
  },
  {
    name: 'GuavaLearn',
    category: 'LMS Software',
    href: '/blog/one-time-payment-lms',
    does: 'A course builder, quizzes, certifications, learning paths, cohorts and paid enrolment.',
    replaces: 'Per-learner Docebo, TalentLMS or Thinkific',
    serverMo: 28,
  },
  {
    name: 'GuavaInsights',
    category: 'BI Software',
    href: '/blog/one-time-payment-bi-dashboards',
    does: 'Data connections, a SQL and visual query builder, dashboards, row-level security and alerts.',
    replaces: 'Per-seat Tableau, Power BI or Looker',
    serverMo: 32,
  },
  {
    name: 'GuavaDesk',
    category: 'Helpdesk Software',
    href: '/blog/one-time-payment-helpdesk',
    does: 'Ticketing, a knowledge base, a customer portal, SLAs, routing, CSAT and an AI copilot.',
    replaces: 'Per-agent Zendesk, Freshdesk or Intercom',
    serverMo: 28,
  },
  {
    name: 'GuavaBuilder',
    category: 'Website Builder',
    href: '/blog/one-time-payment-website-builder',
    does: 'A visual canvas, a real design system, CMS collections, forms, SEO controls and staging.',
    replaces: 'Per-site Webflow, Wix Studio or Framer',
    serverMo: 20,
  },
  {
    name: 'GuavaLend',
    category: 'Loan Management Software',
    href: '/blog/one-time-payment-loan-management',
    does: 'Loan products, origination, underwriting, servicing, daily accrual, collections and a borrower portal.',
    replaces: 'A base fee plus a per-loan meter (TurnKey Lender, LoanPro)',
    serverMo: 35,
  },
  {
    name: 'GuavaPlan',
    category: 'Project Management Software',
    href: '/blog/one-time-payment-project-management',
    does: 'Projects, threaded updates, tasks, boards, docs, milestones and a calm daily digest.',
    replaces: 'Per-seat Asana, monday.com or Basecamp',
    serverMo: 22,
  },
  {
    name: 'GuavaFramework',
    category: 'Low-Code Platform',
    href: '/blog/one-time-payment-app-platform',
    does: 'The low-code platform the whole suite is built on — data model, forms, permissions, workflow and an auto REST API.',
    replaces: 'Per-builder OutSystems, Mendix or Retool',
    serverMo: 30,
  },
];

export interface GuavaStep {
  title: string;
  body: string;
}

export const GUAVA_STEPS: GuavaStep[] = [
  {
    title: 'We deploy it on your cloud',
    body: 'WhiteGuava sets the product up on your own Azure, AWS or other cloud account, branded for your business. It is your infrastructure from day one.',
  },
  {
    title: 'We configure it to how you work',
    body: 'Your pipeline stages, chart of accounts, leave rules, SLAs, workflows and roles — set up during the engagement, plus your existing data imported.',
  },
  {
    title: 'We switch on the AI and hand it over',
    body: 'The AI assistant is added as a custom module. Then you get full admin access, the database and the source code. The software is yours.',
  },
  {
    title: 'You pay for the server, nothing else',
    body: 'Ongoing cost is roughly $20–$45 a month for the virtual machine, plus a few dollars of AI usage. No per-user licence, no annual renewal.',
  },
];

export const GUAVA_STOP_PAYING: { item: string; subscription: string; guava: string }[] = [
  { item: 'Per-user / per-seat licence', subscription: 'Every active user is a monthly line item, forever', guava: 'One server cost, any number of users' },
  { item: 'Annual renewal', subscription: 'Re-bills every year, often at a higher rate', guava: 'You own it — nothing to renew' },
  { item: 'AI as an upgrade', subscription: 'A separate tier, add-on seat, or per-message meter', guava: 'Built in, priced at API cost (~$3–5/mo)' },
  { item: 'Growth penalty', subscription: 'Hiring, more learners or a bigger book raises the bill', guava: 'Cost is flat as you grow' },
  { item: 'Data access', subscription: 'Stop paying and you lose access to your own records', guava: 'Full SQL access and export, always' },
  { item: 'Vendor lock-in', subscription: 'Export is limited; the source is closed', guava: 'You hold the database and the code' },
];

export const guavaFaqs: { q: string; a: string }[] = [
  {
    q: 'What is the Guava Product Suite?',
    a: 'A set of ten business applications — CRM, ERP, HR, LMS, BI, helpdesk, website builder, loan management, project management, and the low-code platform behind them — that WhiteGuava deploys on your own cloud and hands over for you to own. Each is a one-time setup engagement, then you pay only for the server it runs on.',
  },
  {
    q: 'How is this cheaper than a SaaS subscription?',
    a: 'SaaS products charge per user per month, and the price covers hosting, vendor margin, and a large sales and support organisation. A Guava product is built on open-source software running on your own cloud, so once it is set up the only recurring cost is the virtual machine — typically $20 to $45 a month regardless of how many people use it.',
  },
  {
    q: 'Is it really a one-time payment?',
    a: 'The software is a one-time setup engagement — deploy, configure, import data, hand over. After that you own it. The only recurring cost is the server, plus a few dollars of AI usage. There is no per-user licence and no annual renewal.',
  },
  {
    q: 'Do the products have AI?',
    a: 'Yes. Each ships with a custom AI module — drafting, summaries, and a plain-English assistant over your data, plus product-specific features like auto-triage on the helpdesk or portfolio risk flags on lending. It runs on a metered model at roughly $3 to $5 a month for a small team, with no separate AI tier.',
  },
  {
    q: 'Where does our data live?',
    a: 'On your own cloud subscription, in a database you control, with full SQL access, full export and the source code. That is often the deciding factor for businesses with data-residency or audit requirements.',
  },
  {
    q: 'Can we customise a product after handover?',
    a: 'Yes — that is the point of owning the source. New fields, objects, workflows, reports, integrations and AI features can all be built straight onto it. WhiteGuava offers ongoing support and development, but it is optional, never a required contract.',
  },
  {
    q: 'Can the products work together?',
    a: 'Yes. They share the same underlying platform (GuavaFramework), so records and workflows connect — payroll posts to the ERP ledger, support and sales share contacts, training records tie into HR, and everything can feed GuavaInsights.',
  },
  {
    q: 'Can we start with one product and add more later?',
    a: 'Yes. Most businesses start with the one that hurts most — usually the CRM, ERP or helpdesk — and add others when the subscription for them comes up for renewal.',
  },
];
