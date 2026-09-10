import { SERVICE_PATHS } from '@/lib/site';
import type { BlogPost } from '../types';

export const oneTimePaymentAppPlatform: BlogPost = {
  slug: 'one-time-payment-app-platform',
  path: '/blog/one-time-payment-app-platform',
  title: 'One-Time-Payment App Platform: Own GuavaFramework Instead of Renting OutSystems or Retool',
  metaTitle: 'Low-Code Platform You Own: GuavaFramework vs OutSystems',
  metaDescription:
    'GuavaFramework is the low-code application platform every Guava product is built on — buy once, own it, unlimited builders and users, AI built in. See the 5-year cost next to OutSystems, Mendix and Retool.',
  excerpt:
    'Low-code platforms meter the people who build apps, the people who use them, or both. GuavaFramework is a one-time setup, then about $30/month for the server, with a data model, forms and views, a permission engine, workflow, an auto REST API and background jobs — plus AI schema and script tools. It is the exact platform WhiteGuava builds on.',
  category: 'Framework',
  tags: [
    'one-time payment low-code platform',
    'application platform you own',
    'self-hosted low-code',
    'OutSystems alternative',
    'Mendix alternative',
    'Retool alternative',
    'internal tools platform',
  ],
  publishedAt: '2026-09-10',
  updatedAt: '2026-09-10',
  readingTimeMinutes: 12,
  h1: 'GuavaFramework: The App Platform You Buy Once Instead of Renting Per Builder',
  subtitle:
    'The data model, screens, permission engine, workflow and auto API that every Guava product is built on — set up once, owned by you, running on a ~$30/month server, with builders and users uncounted.',
  body: [
    {
      type: 'p',
      text: 'Every low-code application platform is rented, and the meter is on people. OutSystems entry pricing is around $36,300 a year for roughly 100 internal users. Mendix is custom-quoted, and independent comparisons put equivalent builds at 5–10× the transparent platforms. Retool is $12 per user per month on Team and $65 on Business. Whether it meters the builders, the app users, or both, the platform gets more expensive precisely as your software gets more useful.',
    },
    {
      type: 'p',
      text: 'GuavaFramework is the opposite model — and it is the same platform GuavaCRM, GuavaERP and every other Guava product is built on. WhiteGuava sets it up on your own cloud, hands it over, and then it is yours: no per-builder licence, no per-user app fee, no renewal, and the only ongoing cost is roughly $30 a month for the server — for any number of apps, builders and users. It covers the application-building job — define objects, fields and links with no migration scripts, auto-generated forms and list views, Kanban, calendar and dashboard views, client and server scripting, a permission engine down to the field, workflow with states and approvals, scheduled background jobs, an automatic REST API and webhooks for every object, a print-format designer, and full audit and versioning — plus AI schema and scripting tools built directly in.',
    },
    {
      type: 'callout',
      title: 'In short',
      text: 'Low-code platforms meter the people who build apps, the people who use them, or both — so the platform costs more precisely as your software gets more useful. GuavaFramework is a one-time setup, then about $30/month for the server (roughly $1,800 over five years), for any number of apps, builders and users. It is the same platform every other Guava product is built on, with AI schema and script tools included.',
    },
    { type: 'embed', component: 'productCostCalculator', product: 'framework', caption: 'List pricing, September 2026. OutSystems and Mendix are largely custom-quoted; the figures shown are their published entry point and a conservative equivalent-build estimate. The GuavaFramework bar is the server cost only — setup is a separate one-time fee.' },
    { type: 'h2', text: 'What per-builder platform pricing is really charging you for', id: 'what-youre-paying-for' },
    {
      type: 'p',
      text: 'A data modeller, a form generator, a permission engine and a workflow builder are mature and broadly the same across the serious platforms. What the per-builder or per-user price rents is hosting, the vendor’s margin, and a licence that scales with adoption — the exact thing you want to encourage.',
    },
    {
      type: 'p',
      text: 'The model also boxes in your engineers. Server scripts, custom endpoints, background jobs and native code are walled off behind a developer or enterprise tier, or disallowed. Each environment — dev, test, production — can be its own line item. And the AI that drafts a schema or helps write a script is a Copilot or Mentor add-on.',
    },
    { type: 'embed', component: 'productRentVsOwn', product: 'framework', caption: 'The meter runs on Retool Business for a team of 10 builders.' },
    { type: 'h2', text: 'Every plan, side by side', id: 'cost-comparison' },
    {
      type: 'p',
      text: 'This is the price picture at list price, annual billing, before tax, with the basis each one scales on. The final column divides each annual total by GuavaFramework’s ~$430/year server-and-AI cost.',
    },
    {
      type: 'table',
      headers: ['Plan', 'Basis', 'Per year', 'AI assistant', 'vs GuavaFramework'],
      rows: [
        ['GuavaFramework (self-hosted)', 'flat server', '~$430', 'Built in (~$3–5/mo usage)', '—'],
        ['Retool · Team', 'per user', '~$1,440 (10)', 'Add-on credits', '3×'],
        ['Bubble · Growth', 'per app', '~$1,900', 'Partial', '4×'],
        ['Power Apps · Premium', 'per user', '~$2,400 (10)', 'Copilot', '6×'],
        ['Retool · Business', 'per user', '~$7,800 (10)', 'Add-on credits', '18×'],
        ['OutSystems · entry', '~100 users', '~$36,300', 'Mentor', '84×'],
        ['Mendix · equivalent (est.)', 'custom', '~$50,000', 'Partial', '116×'],
      ],
    },
    {
      type: 'p',
      text: 'The transparent platforms are affordable at a small builder count and expensive at scale; the enterprise platforms start expensive. GuavaFramework is flat, and it is the tool WhiteGuava itself builds on.',
    },
    { type: 'h2', text: 'What runs when someone opens an app you built', id: 'architecture' },
    {
      type: 'p',
      text: 'A request comes in, passes through the screen and logic layers, hits the model and permission engine, and reads or writes the database on your cloud. The diagram shows the layers — client, app layer, model and permissions, automation and AI, and your cloud.',
    },
    { type: 'embed', component: 'productArchitecture', product: 'framework' },
    { type: 'h2', text: 'Everything GuavaFramework does out of the box', id: 'features' },
    {
      type: 'p',
      text: 'Every module below is part of GuavaFramework from day one — including the auto REST API and server scripting that sit behind a developer tier elsewhere. Explore what each covers, then check the feature matrix.',
    },
    { type: 'embed', component: 'productModuleExplorer', product: 'framework' },
    { type: 'embed', component: 'productFeatureMatrix', product: 'framework' },
    { type: 'h2', text: 'Idea to running app, working', id: 'demo' },
    {
      type: 'p',
      text: 'This is the path from a rough idea to something your team uses every day. The AI assistant helps most at the first step and the last; the rest is the standard flow.',
    },
    { type: 'embed', component: 'productLifecycle', product: 'framework' },
    { type: 'h2', text: 'What renting OutSystems, Mendix or Retool will never give you', id: 'only-here' },
    {
      type: 'p',
      text: 'Feature lists converge. What separates an owned platform from a rented one is structural — whether adoption costs money, whether your engineers hit a ceiling, and whether an app can be switched off.',
    },
    { type: 'embed', component: 'productDifferentiators', product: 'framework' },
    { type: 'h2', text: 'The AI is built in — not a Mentor or Copilot add-on', id: 'ai' },
    { type: 'p', text: 'WhiteGuava adds the AI features builders actually use straight onto GuavaFramework as a custom module:' },
    {
      type: 'list',
      items: [
        'Draft with AI — describe a process in plain English and get a first-pass data model (objects, fields and links) to refine instead of starting from a blank screen.',
        'Script assist — in-editor help writing server and client scripts, formulas and report queries against your own schema.',
        'Ask AI — a sidebar assistant that answers questions over the live data in any app you build, respecting each user’s permissions.',
        'Layout generation — generates print formats and report layouts from a description, ready to tweak in the designer.',
      ],
    },
    {
      type: 'callout',
      title: 'Why this matters',
      text: 'Every low-code vendor now sells an AI builder assistant as a paid seat or a credit pack. Because GuavaFramework’s source is yours, it runs on metered API calls — a few dollars a month.',
    },
    { type: 'h2', text: 'Who GuavaFramework is built for', id: 'who-its-for' },
    { type: 'p', text: 'GuavaFramework is the right call for teams that build their own internal software:' },
    {
      type: 'list',
      items: [
        'Businesses that run several internal tools and portals and do not want a per-builder or per-user platform bill.',
        'Engineering teams that want low-code speed without giving up server scripts, custom endpoints and native code.',
        'Companies that need to own and host the platform their internal apps run on — for portability or compliance.',
        'Teams already using a Guava product who want to build alongside it on the same platform.',
        'Anyone who has priced OutSystems or Mendix and wanted a flat-cost alternative.',
      ],
    },
    { type: 'h2', text: 'How you get GuavaFramework', id: 'how-to-get' },
    { type: 'p', text: 'It is a one-time engagement, not a subscription:' },
    {
      type: 'list',
      ordered: true,
      items: [
        'WhiteGuava deploys GuavaFramework on your cloud account (Azure, AWS or your choice), branded for your business.',
        'We set up your first app or apps, your roles and permission model, the integrations to your other systems, CI and deployment, and switch on the AI module.',
        'We hand over full admin access, the database, the source and documentation. From that point the platform is yours.',
        'Ongoing, you pay only for the server — around $30 a month — plus a few dollars of AI usage. Support and further builds are available if you want them, never required.',
      ],
    },
    {
      type: 'callout',
      title: 'The five-year picture',
      text: 'OutSystems at its entry point: about $181,000 over five years, rented, and metered on users. GuavaFramework: a one-time setup, then about $1,800 in server cost over the same five years, for any number of apps and users.',
    },
  ],
  faqs: [
    {
      q: 'Is GuavaFramework really a one-time payment?',
      a: 'The platform is a one-time setup engagement — WhiteGuava deploys it, builds your first apps, and hands it over, and then you own it. The only recurring cost is the server, around $30 a month, plus a few dollars of AI usage. There is no per-builder or per-user licence.',
    },
    {
      q: 'Is this the same platform the other Guava products use?',
      a: 'Yes. GuavaCRM, GuavaERP, GuavaHR and the rest are all built on GuavaFramework. You get the exact tool WhiteGuava uses, not a cut-down public edition.',
    },
    {
      q: 'Can our engineers write real code?',
      a: 'Yes. Server scripts, client scripts, custom REST endpoints, background jobs and native extensions are all first-class — not walled off behind a developer tier.',
    },
    {
      q: 'How many apps and users can we run?',
      a: 'Any number, on the same server. Adding an app, a builder or a thousand app users does not change the cost beyond, at large scale, a slightly bigger virtual machine.',
    },
    {
      q: 'Does GuavaFramework have AI?',
      a: 'Yes — schema drafting from a description, in-editor script and formula assistance, Ask AI over the data in any app you build, and print/report layout generation. It runs on a metered model at roughly $3 to $5 a month for a small team.',
    },
    {
      q: 'Do we own the apps we build?',
      a: 'Completely. Every app and its data is a database on your own cloud, exportable in full, with the platform source included. No vendor can disable an app you own.',
    },
    {
      q: 'Can WhiteGuava build the first apps for us?',
      a: 'Yes. Most engagements include WhiteGuava building the first one or two applications and your team taking it from there, with optional ongoing support.',
    },
  ],
  related: [
    { href: '/blog/one-time-payment-crm', title: 'One-Time-Payment CRM', desc: 'GuavaCRM — a product built on this exact platform.' },
    { href: '/blog/one-time-payment-erp', title: 'One-Time-Payment ERP', desc: 'GuavaERP — another product built on GuavaFramework.' },
    { href: SERVICE_PATHS.software, title: 'AI Software Development', desc: 'How WhiteGuava builds custom applications on GuavaFramework.' },
    { href: SERVICE_PATHS.cloud, title: 'Cloud & Deployment', desc: 'CI/CD and infrastructure for the platform and the apps on it.' },
  ],
  cta: {
    title: 'Want the platform WhiteGuava builds on, as your own?',
    text: 'WhiteGuava sets up GuavaFramework on your cloud, builds your first apps, wires in your integrations, switches on the AI, and hands it over. One-time setup, then about $30 a month for any number of apps and users.',
    label: 'Get a GuavaFramework quote',
    href: '/#contact',
  },
  productSchema: {
    name: 'GuavaFramework',
    applicationCategory: 'DeveloperApplication',
    description:
      'A self-hosted low-code application platform — data model, forms, permissions, workflow and an auto REST API — deployed on your own cloud and owned outright, with unlimited builders and users, instead of per-builder OutSystems or Retool pricing.',
  },
};
