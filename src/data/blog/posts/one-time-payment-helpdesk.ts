import { SERVICE_PATHS } from '@/lib/site';
import type { BlogPost } from '../types';

export const oneTimePaymentHelpdesk: BlogPost = {
  slug: 'one-time-payment-helpdesk',
  path: '/blog/one-time-payment-helpdesk',
  title: 'One-Time-Payment Helpdesk: Own GuavaDesk Instead of Renting Zendesk or Freshdesk',
  metaTitle: 'One-Time-Payment Helpdesk: Own GuavaDesk Instead of Renting Zendesk (2026)',
  metaDescription:
    'GuavaDesk runs your support tickets, knowledge base and SLAs on your own cloud — buy once, own it, AI built in. See the 5-year cost next to Zendesk, Freshdesk, Zoho Desk and Intercom.',
  excerpt:
    'Helpdesks bill per agent, and support headcount swings with the season. GuavaDesk is a one-time setup, then about $28/month for the server, with ticketing, a knowledge base, a customer portal, SLAs, routing and CSAT — plus an AI copilot. Here is the full comparison, with tools you can run yourself.',
  category: 'Helpdesk',
  tags: [
    'one-time payment helpdesk',
    'helpdesk you own',
    'self-hosted helpdesk',
    'Zendesk alternative',
    'Freshdesk alternative',
    'Intercom alternative',
    'helpdesk total cost of ownership',
  ],
  publishedAt: '2026-09-10',
  updatedAt: '2026-09-10',
  readingTimeMinutes: 12,
  h1: 'GuavaDesk: The Helpdesk You Buy Once Instead of Renting Per Agent',
  subtitle:
    'The same ticketing, knowledge base, customer portal, SLAs and routing as the big platforms — set up once, owned by you, and running on a ~$28/month server instead of a per-agent subscription with AI charged on top.',
  body: [
    {
      type: 'p',
      text: 'Every helpdesk is rented by the agent. Zendesk Suite runs $55 to $115 per agent per month, and its AI Copilot is another $50 per agent on top. Freshdesk Pro is $49; Intercom starts around $39 a seat and then bills its Fin AI per resolution. Support headcount rises for a product launch or a holiday season and falls again — but the contract does not flex with it, and at the end you own nothing.',
    },
    {
      type: 'p',
      text: 'GuavaDesk is the opposite model. WhiteGuava sets it up on your own cloud, configures it to how your team triages, hands it over, and then it is yours: no per-agent licence, no AI add-on, no renewal, and the only ongoing cost is roughly $28 a month for the server. It covers the whole support job — shared queues and a full ticket lifecycle, email, portal and chat as channels, a knowledge base, a branded customer portal, SLA policies with escalation, round-robin and skill-based routing, canned responses, automations and CSAT surveys — plus an AI copilot built directly in.',
    },
    { type: 'embed', component: 'productCostCalculator', product: 'desk', caption: 'List pricing, September 2026. Zendesk and Freshdesk AI features are priced as per-agent add-ons; Intercom Fin is billed per resolution. The GuavaDesk bar is the server cost only — setup is a separate one-time fee.' },
    { type: 'h2', text: 'What per-agent helpdesk pricing is really charging you for', id: 'what-youre-paying-for' },
    {
      type: 'p',
      text: 'Ticketing, a knowledge base, SLAs and CSAT are mature and broadly the same everywhere. What the per-agent price rents is hosting, the vendor’s margin, a large support and sales organisation, and the right to keep your customers’ conversation history reachable next month.',
    },
    {
      type: 'p',
      text: 'The model also fights against how support staffing actually works. You over-provision seats for the peak and pay for them in the quiet months, or you scramble to add seats mid-surge. Then the AI features — reply drafting, thread summaries, an agent copilot — arrive as a separate per-agent charge or a per-resolution meter.',
    },
    { type: 'embed', component: 'productRentVsOwn', product: 'desk', caption: 'The meter runs on the Zendesk Suite Professional list price for a 10-agent team.' },
    { type: 'h2', text: 'Every plan, side by side', id: 'cost-comparison' },
    {
      type: 'p',
      text: 'This is the price ladder for a 10-agent team at list price, annual billing, before tax. The final column divides each annual total by GuavaDesk’s ~$400/year server-and-AI cost.',
    },
    {
      type: 'table',
      headers: ['Plan', 'Per agent / mo', '10 agents / year', 'AI assistant', 'vs GuavaDesk'],
      rows: [
        ['GuavaDesk (self-hosted)', '—', '~$400', 'Built in (~$3–5/mo usage)', '—'],
        ['Freshdesk · Growth', '$15', '$1,800', 'Copilot add-on', '5×'],
        ['Zoho Desk · Professional', '$23', '$2,760', 'Zia', '7×'],
        ['Intercom · Advanced', '$39', '$4,680', 'Fin per resolution', '12×'],
        ['Freshdesk · Pro', '$49', '$5,880', 'Copilot add-on', '15×'],
        ['Zendesk Suite · Team', '$55', '$6,600', 'Copilot add-on', '17×'],
        ['Zendesk Suite · Professional', '$115', '$13,800', 'Copilot add-on', '35×'],
        ['Zendesk · Professional + Copilot', '$165', '$19,800', 'Copilot', '50×'],
      ],
    },
    {
      type: 'p',
      text: 'To get a genuinely useful AI assistant on Zendesk you are on Professional plus the $50 Copilot — about $19,800 a year for 10 agents. GuavaDesk includes the copilot at the server cost.',
    },
    { type: 'h2', text: 'What happens when a customer emails you', id: 'architecture' },
    {
      type: 'p',
      text: 'Every channel lands in one ticket engine that sits on your customer and knowledge-base data, with SLA, routing and AI acting on it — all on your cloud. The diagram shows the layers.',
    },
    { type: 'embed', component: 'productArchitecture', product: 'desk' },
    { type: 'h2', text: 'Everything GuavaDesk does out of the box', id: 'features' },
    {
      type: 'p',
      text: 'Every module below is part of GuavaDesk from day one — including the customer portal and knowledge base that sit a tier up on the big platforms. Explore what each covers, then check the feature matrix.',
    },
    { type: 'embed', component: 'productModuleExplorer', product: 'desk' },
    { type: 'embed', component: 'productFeatureMatrix', product: 'desk' },
    { type: 'h2', text: 'Received to reviewed, working', id: 'demo' },
    {
      type: 'p',
      text: 'This is the life of a support ticket in GuavaDesk. AI helps at triage, at the first response, and at handover; the rest is the standard flow.',
    },
    { type: 'embed', component: 'productLifecycle', product: 'desk' },
    { type: 'h2', text: 'What renting Zendesk, Freshdesk or Intercom will never give you', id: 'only-here' },
    {
      type: 'p',
      text: 'Feature lists converge. What separates an owned helpdesk from a rented one is structural — whether seats flex with your season, where customer history lives, and whether AI is a feature or a meter.',
    },
    { type: 'embed', component: 'productDifferentiators', product: 'desk' },
    { type: 'h2', text: 'The AI is built in — not a $50 Copilot seat', id: 'ai' },
    { type: 'p', text: 'WhiteGuava adds the AI features agents actually reach for straight onto GuavaDesk as a custom module:' },
    {
      type: 'list',
      items: [
        'Draft with AI — one click builds a reply from the ticket’s conversation and the matching knowledge-base articles, for the agent to edit and send.',
        'Summarize — collapses a long or reassigned thread into a few lines so whoever picks it up is caught up in seconds.',
        'Ask AI — an agent copilot that answers questions from your knowledge base and past tickets, with sources shown.',
        'Auto-triage — sets a first-pass category, priority and tags the moment a ticket arrives, so routing and SLAs start correctly.',
      ],
    },
    {
      type: 'callout',
      title: 'Why this matters',
      text: 'AI is where every helpdesk vendor has put a second meter — $50 per agent, or per resolution. Because GuavaDesk’s source is yours, the copilot is just a feature, priced at what the API actually costs.',
    },
    { type: 'h2', text: 'Who GuavaDesk is built for', id: 'who-its-for' },
    { type: 'p', text: 'GuavaDesk is the right call for support teams that want to own their tooling:' },
    {
      type: 'list',
      items: [
        'Teams whose support volume — and headcount — swings with launches, seasons or campaigns.',
        'Businesses that want a real customer portal and knowledge base without paying up two tiers for them.',
        'Companies that care where customer conversations are stored and want full export and SQL access.',
        'Support leaders who want an AI copilot for every agent without a per-agent or per-resolution charge.',
        'Anyone who has priced Zendesk Professional plus Copilot for their team and wanted that budget back.',
      ],
    },
    { type: 'h2', text: 'How you get GuavaDesk', id: 'how-to-get' },
    { type: 'p', text: 'It is a one-time engagement, not a subscription:' },
    {
      type: 'list',
      ordered: true,
      items: [
        'WhiteGuava deploys GuavaDesk on your cloud account (Azure, AWS or your choice), branded for your business.',
        'We set up your queues, ticket types and forms, SLA policies, routing rules, business hours, canned responses and roles, migrate your knowledge base, and switch on the AI module.',
        'We hand over full admin access, the database and documentation. From that point the software is yours.',
        'Ongoing, you pay only for the server — around $28 a month — plus a few dollars of AI usage. Support and future changes are optional.',
      ],
    },
    {
      type: 'callout',
      title: 'The five-year picture',
      text: 'Zendesk Suite Professional plus Copilot for 10 agents: about $99,000 over five years, rented. GuavaDesk: a one-time setup, then about $1,700 in server cost over the same five years, copilot included.',
    },
  ],
  faqs: [
    {
      q: 'Is GuavaDesk really a one-time payment?',
      a: 'The helpdesk is a one-time setup engagement — WhiteGuava deploys, configures and hands it over, and then you own it. The only recurring cost is the server, around $28 a month, plus a few dollars of AI usage. There is no per-agent licence and no annual renewal.',
    },
    {
      q: 'Do we pay per agent?',
      a: 'No. Add your whole support team, seasonal staff, and read-only observers and the cost does not change. Per-agent pricing is a subscription-helpdesk model; GuavaDesk does not use it.',
    },
    {
      q: 'Does GuavaDesk include a knowledge base and customer portal?',
      a: 'Yes, both ship in the box — a knowledge base with categories, versioning and public/internal articles, and a branded portal where customers raise and track tickets. On the big platforms these sit a tier or two up.',
    },
    {
      q: 'Does GuavaDesk have AI?',
      a: 'Yes — reply drafting from the ticket and knowledge base, thread summaries, an agent copilot over your knowledge base, and auto-triage on arrival. It runs on a metered model at roughly $3 to $5 a month for a small team, with no per-agent or per-resolution charge.',
    },
    {
      q: 'Can we migrate our existing tickets and articles?',
      a: 'Yes. WhiteGuava migrates your knowledge base and, where the data is available, your historical tickets and contacts as part of the setup.',
    },
    {
      q: 'Where does customer conversation history live?',
      a: 'On your own cloud subscription, in a database you control, with full SQL access, full export and the source code.',
    },
    {
      q: 'What if we need custom channels or workflows later?',
      a: 'Because the source is yours, GuavaDesk can be extended — new channels, routing logic, automations or AI features. WhiteGuava offers ongoing support and development, but it is optional.',
    },
  ],
  related: [
    { href: '/blog/one-time-payment-crm', title: 'One-Time-Payment CRM', desc: 'GuavaCRM — support and sales share the same contact records.' },
    { href: '/blog/one-time-payment-lms', title: 'One-Time-Payment LMS', desc: 'GuavaLearn — turn your knowledge base into structured onboarding courses.' },
    { href: SERVICE_PATHS.agents, title: 'AI Agents', desc: 'Where an AI agent fits alongside a helpdesk — deflection, qualification, follow-up.' },
    { href: SERVICE_PATHS.whatsapp, title: 'WhatsApp AI', desc: 'Support conversations on WhatsApp, connected to your ticketing.' },
  ],
  cta: {
    title: 'Want a helpdesk your team owns outright?',
    text: 'WhiteGuava sets up GuavaDesk on your cloud, configures your queues and SLAs, migrates your knowledge base, switches on the AI copilot, and hands it over. One-time setup, then about $28 a month with no per-agent fees.',
    label: 'Get a GuavaDesk quote',
    href: '/#contact',
  },
};
