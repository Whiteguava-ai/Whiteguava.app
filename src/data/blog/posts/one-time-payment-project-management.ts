import { SERVICE_PATHS } from '@/lib/site';
import type { BlogPost } from '../types';

export const oneTimePaymentProjectManagement: BlogPost = {
  slug: 'one-time-payment-project-management',
  path: '/blog/one-time-payment-project-management',
  title: 'One-Time-Payment Project Tool: Own GuavaPlan Instead of Renting Asana or monday.com',
  metaTitle: 'Self-Hosted Project Management & monday.com Alternative: GuavaPlan',
  metaDescription:
    'A self-hosted project management tool and monday.com alternative you own: GuavaPlan runs projects, updates and tasks on your own cloud for the whole company, AI built in. See the 5-year cost vs Asana.',
  excerpt:
    'Project tools charge per seat, so half the company never gets added. GuavaPlan is a one-time setup, then about $22/month for the server, with projects, discussions, tasks, boards, docs, milestones and a daily digest, plus AI status updates and thread summaries. Here is the full comparison.',
  category: 'Planning',
  tags: [
    'self-hosted project management',
    'monday.com alternative',
    'Asana alternative self-hosted',
    'Basecamp alternative',
    'project management tool you own',
    'project management without per-seat pricing',
    'one-time payment project management',
    'own your project data',
  ],
  publishedAt: '2026-09-10',
  updatedAt: '2026-09-10',
  readingTimeMinutes: 11,
  h1: 'GuavaPlan: The Project Tool You Buy Once Instead of Renting Per Seat',
  subtitle:
    'The same projects, discussions, tasks, boards, docs and milestones as the big tools, set up once, owned by you, running on a ~$22/month server, with the whole company and your clients included.',
  body: [
    {
      type: 'p',
      text: 'Every work-management tool is rented by the seat. Asana Advanced lists at $24.99 per user per month; monday.com Pro is $19; Notion only unlocks its AI at the $20 Business tier. Basecamp is the exception with a flat $299 a month, but that is $3,588 a year, and still rented. Per-seat pricing means the finance team, the ops team, and the client who needs visibility often just never get added.',
    },
    {
      type: 'p',
      text: 'GuavaPlan is the opposite model. WhiteGuava sets it up on your own cloud, configures your project templates and update cadences, hands it over, and then it is yours: no per-seat licence, no renewal, and the only ongoing cost is roughly $22 a month for the server, for the whole company, contractors and clients included. It covers the work-tracking job, teams and projects, threaded discussions and regular written updates, tasks with dependencies and subtasks, list, board, table, timeline and calendar views, docs and wiki pages, milestones and a portfolio view, a workload view by person, guest access, and a personal daily digest instead of constant notifications, plus an AI assistant built directly in.',
    },
    {
      type: 'callout',
      title: 'In short',
      text: 'Project tools charge per seat, so half the company and the client never get added. Five years of Asana Advanced for a 40-person company is about $60,000, rented. GuavaPlan is a one-time setup, then about $22/month for the server (roughly $1,300 over five years), with the whole company and your clients included and AI updates and summaries built in.',
    },
    { type: 'embed', component: 'productCostCalculator', product: 'plan', caption: 'List pricing, September 2026. Basecamp is a flat $299/month for any number of users; the rest are per seat. The GuavaPlan bar is the server cost only, setup is a separate one-time fee.' },
    { type: 'h2', text: 'What per-seat project pricing is really charging you for', id: 'what-youre-paying-for' },
    {
      type: 'p',
      text: 'Tasks, boards, timelines and comments are mature and broadly the same everywhere. What the per-seat price rents is hosting, the vendor’s margin, and a licence for each additional person who wants to see what is going on.',
    },
    {
      type: 'p',
      text: 'That licence is why work visibility is always partial. You buy seats for the people who "need" the tool and leave everyone else guessing. The good tracking features, portfolio view, workload, timeline, sit on the higher tiers, and the AI that writes your status updates and summarises your threads is gated to the top plan or metered in credits.',
    },
    { type: 'embed', component: 'productRentVsOwn', product: 'plan', caption: 'The meter runs on the Asana Advanced list price for a 10-person team.' },
    { type: 'h2', text: 'Every plan, side by side', id: 'cost-comparison' },
    {
      type: 'p',
      text: 'This is the price ladder for a 10-person team at list price, annual billing, before tax. The final column divides each annual total by GuavaPlan’s ~$300/year server-and-AI cost, and the gap widens as you add people.',
    },
    {
      type: 'table',
      headers: ['Plan', 'Per user / mo', '10 users / year', 'AI assistant', 'vs GuavaPlan'],
      rows: [
        ['GuavaPlan (self-hosted)', 'N/A', '~$300', 'Built in (~$3–5/mo usage)', 'N/A'],
        ['ClickUp · Unlimited', '$7', '$840', 'AI add-on', '3×'],
        ['Asana · Starter', '$10.99', '$1,319', 'No', '4×'],
        ['monday.com · Standard', '$17', '$2,040', 'AI credits', '7×'],
        ['monday.com · Pro', '$19', '$2,280', 'AI credits', '8×'],
        ['Notion · Business', '$20', '$2,400', 'AI included here', '8×'],
        ['Asana · Advanced', '$24.99', '$2,999', 'AI Studio', '10×'],
        ['Basecamp · Pro Unlimited', 'flat', '$3,588', 'No', '12×'],
      ],
    },
    {
      type: 'p',
      text: 'At 10 seats ClickUp undercuts everyone; the point of owning shows at 40 or 100 people, when GuavaPlan is still $300 a year and everyone, including the client, is in the tool.',
    },
    { type: 'h2', text: 'How an update reaches the right people', id: 'architecture' },
    {
      type: 'p',
      text: 'GuavaPlan is built around written updates and a daily digest, so progress is visible without everyone living in notifications. The diagram shows the layers, where people work, the modules, the work and content data, automation and AI, and your cloud.',
    },
    { type: 'embed', component: 'productArchitecture', product: 'plan' },
    { type: 'h2', text: 'Everything GuavaPlan does out of the box', id: 'features' },
    {
      type: 'p',
      text: 'Every module below is part of GuavaPlan from day one, including portfolio and workload views that sit on the higher tiers elsewhere. Explore what each covers, then check the feature matrix.',
    },
    { type: 'embed', component: 'productModuleExplorer', product: 'plan' },
    { type: 'embed', component: 'productFeatureMatrix', product: 'plan' },
    { type: 'h2', text: 'Propose to ship, working', id: 'demo' },
    {
      type: 'p',
      text: 'This is how a piece of work moves through GuavaPlan. AI helps write the brief, the updates, and the review summary; the rest is the standard flow.',
    },
    { type: 'embed', component: 'productLifecycle', product: 'plan' },
    { type: 'h2', text: 'What renting Asana, monday.com or Basecamp will never give you', id: 'only-here' },
    {
      type: 'p',
      text: 'Feature lists converge. What separates an owned project tool from a rented one is structural, whether the whole company can be in it, where the decisions are stored, and whether AI is a feature or a credit meter.',
    },
    { type: 'embed', component: 'productDifferentiators', product: 'plan' },
    { type: 'h2', text: 'The AI is built in, not an AI Studio or a credit meter', id: 'ai' },
    { type: 'p', text: 'WhiteGuava adds the AI features teams actually use straight onto GuavaPlan as a custom module:' },
    {
      type: 'list',
      items: [
        'Draft with AI, turns a rough note into a structured project brief, or a week of task activity into a status update ready to post.',
        'Summarize, collapses a long discussion thread into the decisions made, the action items, and the questions still open.',
        'Ask AI, answers questions across your projects (what is blocked, what shipped this week, what is overdue) within each person’s access.',
        'Catch-up digest, after time away, generates a personal summary of everything that moved on the projects you follow.',
      ],
    },
    {
      type: 'callout',
      title: 'Why this matters',
      text: 'AI is where the project tools have drawn their new line, Asana AI Studio, monday credits, Notion’s Business tier. Because GuavaPlan’s source is yours, the assistant is just a feature, priced at what the API costs.',
    },
    {
      type: 'p',
      text: 'GuavaPlan is one of ten applications in the [Guava Product Suite](/guava), the same buy-once, own-it model applied to [customer support](/blog/one-time-payment-helpdesk), [sales and pipeline](/blog/one-time-payment-crm) and [the low-code platform underneath](/blog/one-time-payment-app-platform).',
    },
    { type: 'h2', text: 'Who GuavaPlan is built for', id: 'who-its-for' },
    { type: 'p', text: 'GuavaPlan is the right call for organisations that want everyone on the same page without paying per person:' },
    {
      type: 'list',
      items: [
        'Companies that want the whole team, not a licensed subset, to see project status.',
        'Agencies and consultancies that need clients in the tool without paying for guest seats.',
        'Distributed teams that prefer written updates and a daily digest over meetings and constant pings.',
        'Businesses that want project decisions and history stored somewhere they control.',
        'Anyone who has priced Asana Advanced or monday Pro across their full headcount and wanted that budget back.',
      ],
    },
    { type: 'h2', text: 'How you get GuavaPlan', id: 'how-to-get' },
    { type: 'p', text: 'It is a one-time engagement, not a subscription:' },
    {
      type: 'list',
      ordered: true,
      items: [
        'WhiteGuava deploys GuavaPlan on your cloud account (Azure, AWS or your choice), branded for your business.',
        'We set up your teams, project templates, update cadences, custom fields, client-access rules and roles, import existing projects where you have them, and switch on the AI module.',
        'We hand over full admin access, the database and documentation. From that point the software is yours.',
        'Ongoing, you pay only for the server, around $22 a month, plus a few dollars of AI usage. Support and future changes are optional.',
      ],
    },
    {
      type: 'callout',
      title: 'The five-year picture',
      text: 'Asana Advanced for a 40-person company: about $60,000 over five years, rented, and half the org still not on it. GuavaPlan: a one-time setup, then about $1,300 in server cost over the same five years, everyone included.',
    },
  ],
  faqs: [
    {
      q: 'Is GuavaPlan really a one-time payment?',
      a: 'The tool is a one-time setup engagement, WhiteGuava deploys, configures and hands it over, and then you own it. The only recurring cost is the server, around $22 a month, plus a few dollars of AI usage. There is no per-seat licence and no annual renewal.',
    },
    {
      q: 'Can we add the whole company and our clients?',
      a: 'Yes. Every employee, contractor and client can have access, scoped appropriately, and the cost does not change. Per-seat pricing is a subscription model; GuavaPlan does not use it.',
    },
    {
      q: 'What makes GuavaPlan different from a Kanban board?',
      a: 'It is built around written updates and a daily digest, so progress is visible without meetings or constant notifications. Tasks and boards are there, but the emphasis is on keeping a distributed team aligned in writing.',
    },
    {
      q: 'Does GuavaPlan have AI?',
      a: 'Yes, project brief and status-update drafting, discussion-thread summaries into decisions, plain-English questions across your projects, and a personal catch-up digest. It runs on a metered model at roughly $3 to $5 a month for a small team.',
    },
    {
      q: 'Where are our projects and decisions stored?',
      a: 'On your own cloud subscription, in a database you control, with full export and the source code.',
    },
    {
      q: 'Can we migrate from Asana or monday.com?',
      a: 'Yes. WhiteGuava imports your existing projects and tasks where the export data supports it, as part of the setup.',
    },
    {
      q: 'What if we need custom workflows later?',
      a: 'Because the source is yours, GuavaPlan can be extended, custom fields, automations, integrations or AI features. WhiteGuava offers ongoing support and development, but it is optional.',
    },
  ],
  related: [
    { href: '/blog/one-time-payment-crm', title: 'One-Time-Payment CRM', desc: 'GuavaCRM, the same own-it model for sales and pipeline.' },
    { href: '/blog/one-time-payment-helpdesk', title: 'One-Time-Payment Helpdesk', desc: 'GuavaDesk, support tickets and workflows on your own cloud.' },
    { href: SERVICE_PATHS.automation, title: 'AI Automation', desc: 'Automating the workflows that sit around your project tool, reports, approvals, notifications.' },
    { href: SERVICE_PATHS.software, title: 'AI Software Development', desc: 'How WhiteGuava builds, configures and deploys tools like GuavaPlan.' },
  ],
  cta: {
    title: 'Want a project tool your whole team owns outright?',
    text: 'WhiteGuava sets up GuavaPlan on your cloud, configures your templates and cadences, imports your projects, switches on the AI, and hands it over. One-time setup, then about $22 a month with everyone included.',
    label: 'Get a GuavaPlan quote',
    href: '/#contact',
  },
  productSchema: {
    name: 'GuavaPlan',
    applicationCategory: 'BusinessApplication',
    description:
      'A self-hosted work-management tool for projects, updates, tasks, docs and a daily digest for the whole company, deployed on your own cloud and owned outright, instead of per-seat Asana or monday.com pricing.',
  },
};
