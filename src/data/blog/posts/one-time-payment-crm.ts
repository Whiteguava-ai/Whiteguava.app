import { SERVICE_PATHS } from '@/lib/site';
import type { BlogPost } from '../types';

export const oneTimePaymentCrm: BlogPost = {
  slug: 'one-time-payment-crm',
  path: '/blog/one-time-payment-crm',
  title: 'One-Time-Payment CRM: Own GuavaCRM Instead of Renting Salesforce or Zoho',
  metaTitle: 'One-Time-Payment CRM: Own It Instead of Renting Salesforce or Zoho (2026)',
  metaDescription:
    'GuavaCRM is a CRM you buy once and own — no per-user pricing, no annual renewal, AI built in. See the 5-year cost next to Salesforce and Zoho, live.',
  excerpt:
    'A 10-person team pays Salesforce Enterprise $21,000 a year — forever. GuavaCRM is a one-time setup, then about $28 a month for the server, with the same leads, deals, pipeline, email and AI. Here is the full cost and feature comparison, with calculators you can run yourself.',
  category: 'CRM',
  tags: [
    'one-time payment CRM',
    'CRM you own',
    'self-hosted CRM',
    'Salesforce alternative',
    'Zoho CRM alternative',
    'CRM without per-user pricing',
    'CRM total cost of ownership',
  ],
  publishedAt: '2026-08-31',
  updatedAt: '2026-08-31',
  readingTimeMinutes: 11,
  h1: 'GuavaCRM: The CRM You Buy Once Instead of Renting Forever',
  subtitle:
    'Same pipeline, contacts, email and AI as the big platforms — set up once, owned by you, and running on a ~$28/month server instead of a per-user subscription that never stops.',
  body: [
    {
      type: 'p',
      text: 'Every mainstream CRM is rented. You pay per user, per month, every month, and the bill goes up when your team grows or when the vendor raises prices — which Salesforce did again in 2026. A 10-person team on Salesforce Sales Cloud Enterprise pays about $21,000 a year at list price. Over five years that is $105,000, and at the end of it you own nothing.',
    },
    {
      type: 'p',
      text: 'GuavaCRM is the opposite model. WhiteGuava sets it up on your own cloud, hands it over, and then it is yours: no per-seat licence, no renewal, and the only ongoing cost is roughly $28 a month for the server it runs on. It covers the day-to-day sales work every team actually does — leads and deals, a drag-and-drop pipeline, contacts and companies, two-way email, tasks, notes, call logging, WhatsApp, round-robin assignment, SLAs, web forms, bulk email, roles and a full audit trail — plus an AI assistant built directly in. Run the numbers for your own team size below.',
    },
    { type: 'embed', component: 'crmCostCalculator', caption: 'List pricing, September 2026. GuavaCRM figure is the server cost only — setup is a separate one-time fee.' },
    {
      type: 'h2',
      text: 'What you are really paying Salesforce and Zoho for',
      id: 'what-youre-paying-for',
    },
    {
      type: 'p',
      text: 'The subscription price is not mostly the software. Modern CRMs are mature — the core feature set is broadly the same everywhere. What you rent is the hosting, the vendor’s margin, the sales and support organisation, and the option to keep using your own data next month. Stop paying and access ends, even though the records are yours.',
    },
    {
      type: 'p',
      text: 'The pricing model also punishes growth in ways that have nothing to do with value. Zoho’s tiers cannot be mixed, so if two people need the Ultimate edition, all ten seats move to Ultimate. Salesforce’s AI (Einstein) is a paid add-on layered on top of an already-expensive plan. And list prices drift upward: Salesforce raised Enterprise from $165 to $175 per user and Unlimited from $330 to $350 this year alone.',
    },
    { type: 'embed', component: 'crmRentVsOwn', caption: 'The meter runs on a real Salesforce Enterprise list price for a 10-person team.' },
    {
      type: 'h2',
      text: 'Every plan, side by side',
      id: 'cost-comparison',
    },
    {
      type: 'p',
      text: 'This is the full price ladder for a 10-user team at list price, annual billing, before tax. The “AI” column is whether an assistant that drafts, summarises and answers questions is usable on that plan. The final column divides each annual total by GuavaCRM’s ~$340/year server cost.',
    },
    {
      type: 'table',
      headers: ['Plan', 'Per user / mo', '10 users / year', 'AI assistant', 'vs GuavaCRM'],
      rows: [
        ['GuavaCRM (self-hosted)', '~$2.85', '~$340', 'Built in (~$3–5/mo usage)', '—'],
        ['Zoho CRM · Standard', '$14', '$1,680', 'No', '5×'],
        ['Zoho CRM · Professional', '$23', '$2,760', 'No', '8×'],
        ['Zoho CRM · Enterprise', '$40', '$4,800', 'Yes (Zia)', '14×'],
        ['Zoho CRM · Ultimate', '$52', '$6,240', 'Yes (Zia + QuickML)', '18×'],
        ['Salesforce · Starter Suite', '$25', '$3,000', 'Limited', '9×'],
        ['Salesforce · Pro Suite', '$100', '$12,000', 'Einstein add-on', '35×'],
        ['Salesforce · Enterprise', '$175', '$21,000', 'Einstein is a paid add-on', '62×'],
        ['Salesforce · Unlimited', '$350', '$42,000', 'Yes', '124×'],
        ['Salesforce · Einstein 1 Sales', '$500', '$60,000', 'Yes (full Einstein + Agentforce)', '176×'],
      ],
    },
    {
      type: 'p',
      text: 'Even the cheapest paid Zoho plan costs a 10-person team five times what GuavaCRM’s server costs — and that plan has no AI at all. To match GuavaCRM’s built-in assistant on Zoho you are on Enterprise at $4,800 a year; on Salesforce you are paying for a $21,000 plan and then adding Einstein on top.',
    },
    {
      type: 'h2',
      text: 'Everything GuavaCRM does out of the box',
      id: 'features',
    },
    {
      type: 'p',
      text: 'GuavaCRM is built on a mature open-source core, rebranded and extended by WhiteGuava, and deployed on your own cloud. The list below is what ships as standard — no tier to unlock it, no add-on to buy. Tap any row to see which Salesforce or Zoho plan charges for the same thing.',
    },
    { type: 'embed', component: 'crmFeatureMatrix' },
    {
      type: 'h2',
      text: 'Six things Salesforce and Zoho will never give you',
      id: 'only-here',
    },
    {
      type: 'p',
      text: 'Feature lists converge. The things that genuinely separate an owned CRM from a rented one are structural — they come from where the software runs and who controls it, and no subscription tier can offer them.',
    },
    { type: 'embed', component: 'crmDifferentiators' },
    {
      type: 'h2',
      text: 'The AI is built in — not a $4,800 upgrade',
      id: 'ai',
    },
    {
      type: 'p',
      text: 'WhiteGuava added the three AI features sales teams actually reach for directly onto GuavaCRM as a custom module:',
    },
    {
      type: 'list',
      items: [
        'Draft with AI — one click on any lead or deal writes a contextual reply or follow-up email, using the record’s history.',
        'Summarize — collapses a long activity trail into a few lines so anyone picking up the account is caught up instantly.',
        'Ask AI — a sidebar assistant that answers plain-English questions about your pipeline and contacts, and respects each user’s permissions.',
      ],
    },
    {
      type: 'p',
      text: 'These run on OpenAI’s gpt-4o-mini and cost roughly $3 to $5 per month in usage for a 10-person team. There is no “AI edition” to buy. On Zoho, the equivalent assistant (Zia) starts at the Enterprise tier — $4,800 a year for the same 10 people. On Salesforce, Einstein is a paid add-on on top of a plan that already costs $21,000 a year.',
    },
    {
      type: 'callout',
      title: 'Why this matters',
      text: 'AI is the one place every CRM vendor has chosen to put a paywall. Because GuavaCRM’s source is yours, the AI is just a feature — priced at what the API actually costs, not at what a vendor can charge for it.',
    },
    {
      type: 'h2',
      text: 'See GuavaCRM working',
      id: 'demo',
    },
    {
      type: 'p',
      text: 'This is the real pipeline behaviour in miniature. Drag a deal between stages, or use the arrows, and watch the pipeline and won totals update. The production CRM adds filters, saved views, per-deal activity, email and the AI buttons — but the core interaction is exactly this.',
    },
    { type: 'embed', component: 'crmKanbanDemo' },
    {
      type: 'h2',
      text: 'Who GuavaCRM is built for',
      id: 'who-its-for',
    },
    {
      type: 'p',
      text: 'GuavaCRM is the right call for teams that want to own their tools instead of renting them:',
    },
    {
      type: 'list',
      items: [
        'Small and mid-size sales teams — 3 to 100 people — who want a full CRM without watching the bill climb every time they hire.',
        'Agencies and consultancies that need to add clients, partners and read-only viewers without paying per head.',
        'Businesses that care where their customer data lives — GuavaCRM runs on your own cloud subscription, with full database and export access.',
        'Teams that have outgrown a spreadsheet or a free tier and do not want to sign a multi-year subscription to move up.',
        'Anyone who has done the math on five years of Salesforce or Zoho and wants that budget back.',
      ],
    },
    {
      type: 'h2',
      text: 'How you get GuavaCRM',
      id: 'how-to-get',
    },
    {
      type: 'p',
      text: 'It is a one-time engagement, not a subscription:',
    },
    {
      type: 'list',
      ordered: true,
      items: [
        'WhiteGuava deploys GuavaCRM on your cloud account (Azure, AWS or your choice), branded for your business.',
        'We import your existing contacts and deals, set up your pipeline stages, roles, assignment rules and email, and switch on the AI module.',
        'We hand over full admin access, the database, and documentation. From that point the software is yours.',
        'Ongoing, you pay only for the server — around $28 a month — plus a few dollars of AI usage. Support and future changes are available if you want them, never required.',
      ],
    },
    {
      type: 'callout',
      title: 'The five-year picture',
      text: 'Salesforce Enterprise for 10 people: about $105,000, rented. GuavaCRM: a one-time setup, then roughly $1,700 in server cost over the same five years — and you own it at the end.',
    },
  ],
  faqs: [
    {
      q: 'Is GuavaCRM really a one-time payment?',
      a: 'The CRM itself is a one-time setup engagement — WhiteGuava deploys, configures and hands it over, and then you own it. The only recurring cost is the server it runs on, around $28 a month, plus a few dollars of AI usage. There is no per-user licence and no annual renewal.',
    },
    {
      q: 'How is GuavaCRM so much cheaper than Salesforce and Zoho?',
      a: 'Salesforce and Zoho charge per user per month, forever, and the price covers hosting, vendor margin, and a large sales and support organisation. GuavaCRM is built on open-source software running on your own cloud, so once it is set up the only cost is the virtual machine — about $28 a month regardless of how many people use it.',
    },
    {
      q: 'Do I have to pay per user with GuavaCRM?',
      a: 'No. You can add your whole company, external partners and read-only viewers and the cost does not change. Per-seat pricing is a subscription-CRM model; GuavaCRM does not use it.',
    },
    {
      q: 'Does GuavaCRM have AI?',
      a: 'Yes. It includes Draft with AI (writes contextual emails on a lead or deal), Summarize (condenses an activity trail), and Ask AI (answers plain-English questions about your data). They run on OpenAI gpt-4o-mini and cost about $3 to $5 a month in usage for a 10-person team — with no separate AI tier to buy.',
    },
    {
      q: 'Can I get my data out of GuavaCRM? Is there lock-in?',
      a: 'There is no lock-in. GuavaCRM is a database on your own cloud subscription. You have full SQL access, full export, and the source code. If you ever want to move, nothing is holding your data hostage.',
    },
    {
      q: 'Where does GuavaCRM run — is it self-hosted?',
      a: 'It runs on your own cloud account, typically a single Azure virtual machine, though AWS or another provider works too. WhiteGuava sets it up and manages the deployment during handover; after that the infrastructure is under your control.',
    },
    {
      q: 'What happens if I need changes or help later?',
      a: 'Because the source is yours, GuavaCRM can be customised in ways a licensed product cannot — new fields, new objects, new automations, or new AI features. WhiteGuava offers ongoing support and development if you want it, but it is optional, not a required contract.',
    },
    {
      q: 'Is GuavaCRM open source?',
      a: 'It is built on a mature open-source CRM core, then rebranded and extended by WhiteGuava with a custom AI module and other changes. You receive the full codebase for your instance.',
    },
  ],
  related: [
    { href: SERVICE_PATHS.software, title: 'AI Software Development', desc: 'How WhiteGuava builds and deploys custom business software like GuavaCRM.' },
    { href: SERVICE_PATHS.automation, title: 'AI Automation', desc: 'Automating the workflows that sit around your CRM — quotes, approvals, reporting.' },
    { href: SERVICE_PATHS.dataAnalytics, title: 'Data & Analytics', desc: 'Reporting and dashboards on top of your own CRM database.' },
    { href: '/blog/ai-agents-for-business', title: 'AI Agents for Business', desc: 'Where AI agents fit alongside a CRM — support, qualification, follow-up.' },
  ],
  cta: {
    title: 'Want a CRM your team owns outright?',
    text: 'WhiteGuava sets up GuavaCRM on your cloud, imports your data, switches on the AI, and hands it over. One-time setup, then it runs for about $28 a month with no licences.',
    label: 'Get a GuavaCRM quote',
    href: '/#contact',
  },
};
