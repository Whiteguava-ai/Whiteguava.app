import { SERVICE_PATHS } from '@/lib/site';
import type { BlogPost } from '../types';

export const oneTimePaymentBi: BlogPost = {
  slug: 'one-time-payment-bi-dashboards',
  path: '/blog/one-time-payment-bi-dashboards',
  title: 'One-Time-Payment BI: Own GuavaInsights Instead of Renting Tableau or Power BI',
  metaTitle: 'BI Dashboards You Own: GuavaInsights vs Tableau & Power BI',
  metaDescription:
    'GuavaInsights runs your dashboards, reports and data analysis on your own cloud — buy once, own it, AI built in. See the 5-year cost next to Tableau, Power BI, Looker and Zoho Analytics.',
  excerpt:
    'BI tools charge for the people who only read a dashboard. GuavaInsights is a one-time setup, then about $32/month for the server, with data connections, a SQL and visual query builder, dashboards, row-level security, alerts and unlimited viewers — plus an AI analyst. Here is the full comparison, with tools you can run yourself.',
  category: 'Insights',
  tags: [
    'one-time payment BI',
    'BI tool you own',
    'self-hosted analytics',
    'Tableau alternative',
    'Power BI alternative',
    'Looker alternative',
    'BI total cost of ownership',
  ],
  publishedAt: '2026-09-10',
  updatedAt: '2026-09-10',
  readingTimeMinutes: 12,
  h1: 'GuavaInsights: The BI Platform You Buy Once Instead of Renting Per Seat',
  subtitle:
    'The same data connections, query builder, dashboards, row-level security and alerts as the big platforms — set up once, owned by you, and running on a ~$32/month server, with viewers included at no charge.',
  body: [
    {
      type: 'p',
      text: 'Every business intelligence platform is rented by the seat — and it charges even for the people who never build anything, the ones who just open a dashboard once a week. Tableau Cloud Creator lists at $75 per user per month, with Explorer at $42 and Viewer at $15 on top. Power BI Pro is $14, but its Copilot needs a separate capacity. Looker and ThoughtSpot are custom-quoted into the tens of thousands a year.',
    },
    {
      type: 'p',
      text: 'GuavaInsights is the opposite model. WhiteGuava sets it up on your own cloud, next to your database, hands it over, and then it is yours: no per-seat licence, no viewer charge, no renewal, and the only ongoing cost is roughly $32 a month for the server. It covers the analytics job end to end — direct connections to your database, scheduled sync from apps and APIs, a visual query builder and raw SQL side by side, reusable data models, interactive dashboards with drill-down, scheduled reports, threshold alerts, row-level security, and embedded and public sharing — plus an AI analyst built directly in.',
    },
    {
      type: 'callout',
      title: 'In short',
      text: 'BI tools charge for the people who only read a dashboard. Five years of Tableau Creator for 10 people is about $45,000, rented, plus Viewer seats on top. GuavaInsights is a one-time setup, then about $32/month for the server (roughly $1,900 over five years), with unlimited viewers and the AI analyst included rather than behind a capacity SKU.',
    },
    { type: 'embed', component: 'productCostCalculator', product: 'insights', caption: 'List pricing, September 2026. Looker and ThoughtSpot have no public list; the figures shown are conservative stand-ins. The GuavaInsights bar is the server cost only — setup is a separate one-time fee.' },
    { type: 'h2', text: 'What per-seat BI pricing is really charging you for', id: 'what-youre-paying-for' },
    {
      type: 'p',
      text: 'Charting, dashboards and drill-down are mature and broadly the same everywhere. What the per-seat price rents is hosting, the vendor’s margin, and — crucially — the licence for each additional person who wants to look at a number.',
    },
    {
      type: 'p',
      text: 'That last part is the trap. The value of a dashboard goes up the more people see it, but every one of those people is a Viewer seat. Natural-language analysis, the feature everyone now wants, needs a Fabric capacity on Power BI or a plan tier on Tableau. And embedding a dashboard in your own product is usually priced per external view.',
    },
    { type: 'embed', component: 'productRentVsOwn', product: 'insights', caption: 'The meter runs on the Tableau Creator list price for a 10-person team.' },
    { type: 'h2', text: 'Every plan, side by side', id: 'cost-comparison' },
    {
      type: 'p',
      text: 'This is the price ladder for a 10-user team at list price, annual billing, before tax. The final column divides each annual total by GuavaInsights’ ~$470/year server-and-AI cost.',
    },
    {
      type: 'table',
      headers: ['Plan', 'Per user / mo', '10 users / year', 'AI analyst', 'vs GuavaInsights'],
      rows: [
        ['GuavaInsights (self-hosted)', '—', '~$470', 'Built in (~$3–5/mo usage)', '—'],
        ['Zoho Analytics (effective)', '~$8', '$960', 'Zia', '2×'],
        ['Power BI · Pro', '$14', '$1,680', 'Copilot needs capacity', '4×'],
        ['Power BI · Premium Per User', '$24', '$2,880', 'Copilot', '6×'],
        ['Tableau · Explorer', '$42', '$5,040', 'Partial', '11×'],
        ['Tableau · Creator', '$75', '$9,000', 'Pulse', '19×'],
        ['ThoughtSpot (est.)', '—', '~$30,000', 'Yes', '64×'],
        ['Looker (est.)', '—', '~$60,000', 'Partial', '128×'],
      ],
    },
    {
      type: 'p',
      text: 'And every one of those rows still charges you again for the read-only Viewers. On GuavaInsights the whole company can view, subscribe and embed at no extra cost.',
    },
    { type: 'h2', text: 'From your data to a dashboard', id: 'architecture' },
    {
      type: 'p',
      text: 'GuavaInsights runs on your cloud, right next to your database — so sensitive data does not have to be extracted into a vendor’s multi-tenant service to chart it. The diagram shows the layers: where people look, the dashboard and chart layer, the query engine and models, sync and AI, and your data.',
    },
    { type: 'embed', component: 'productArchitecture', product: 'insights' },
    { type: 'h2', text: 'Everything GuavaInsights does out of the box', id: 'features' },
    {
      type: 'p',
      text: 'Every module below is part of GuavaInsights from day one — including unlimited viewers and embedded analytics. Explore what each covers, then check the feature matrix for the tier that charges for it elsewhere.',
    },
    { type: 'embed', component: 'productModuleExplorer', product: 'insights' },
    { type: 'embed', component: 'productFeatureMatrix', product: 'insights' },
    { type: 'h2', text: 'Question to answer, working', id: 'demo' },
    {
      type: 'p',
      text: 'This is how a business question becomes a dashboard the whole team trusts. The AI analyst can shortcut the query and narrative steps; the rest is the standard flow.',
    },
    { type: 'embed', component: 'productLifecycle', product: 'insights' },
    { type: 'h2', text: 'What renting Tableau, Power BI or Looker will never give you', id: 'only-here' },
    {
      type: 'p',
      text: 'Feature lists converge. What separates an owned BI platform from a rented one is structural — whether every reader costs money, where your data sits while it is being analysed, and whether AI needs a capacity SKU.',
    },
    { type: 'embed', component: 'productDifferentiators', product: 'insights' },
    { type: 'h2', text: 'The AI is built in — not a capacity or a plan tier', id: 'ai' },
    { type: 'p', text: 'WhiteGuava adds the AI features analysts and managers actually use straight onto GuavaInsights as a custom module:' },
    {
      type: 'list',
      items: [
        'Ask in English — type a question about your data and get the query and the chart back, ready to drop on a dashboard.',
        'Narrate — writes a plain-language summary of what a dashboard is showing this week, for the top of a report or an email digest.',
        'Ask AI — follow-up questions over the underlying data ("why did this dip?", "which region drove it?"), answered within each viewer’s access.',
        'Anomaly alerts — flags metrics that move outside their normal range and offers a first explanation for a human to confirm.',
      ],
    },
    {
      type: 'callout',
      title: 'Why this matters',
      text: 'Natural-language BI is the feature every vendor is now monetising — a Fabric capacity, a Pulse plan, an enterprise tier. Because GuavaInsights’ source is yours, it is just a feature, priced at what the API costs.',
    },
    { type: 'h2', text: 'Who GuavaInsights is built for', id: 'who-its-for' },
    { type: 'p', text: 'GuavaInsights is the right call for teams that want everyone looking at the same numbers without paying per reader:' },
    {
      type: 'list',
      items: [
        'Companies where dashboards should be seen by the whole team, not just a licensed few.',
        'Businesses with data-residency or confidentiality requirements that make extracting data to a SaaS BI tool a problem.',
        'Product teams that want to embed analytics for customers without a per-view meter.',
        'Analytics teams that want raw SQL and notebooks as first-class tools, not a pro-tier unlock.',
        'Anyone who has added up Creator plus Explorer plus Viewer seats and wanted that budget back.',
      ],
    },
    { type: 'h2', text: 'How you get GuavaInsights', id: 'how-to-get' },
    { type: 'p', text: 'It is a one-time engagement, not a subscription:' },
    {
      type: 'list',
      ordered: true,
      items: [
        'WhiteGuava deploys GuavaInsights on your cloud account, connected to your database or warehouse.',
        'We set up your data sources and sync schedules, build your first data models and dashboards, configure row-level security and alerts, and switch on the AI module.',
        'We hand over full admin access, the database and documentation. From that point the software is yours.',
        'Ongoing, you pay only for the server — around $32 a month — plus a few dollars of AI usage. Support and future changes are optional.',
      ],
    },
    {
      type: 'callout',
      title: 'The five-year picture',
      text: 'Tableau Creator for 10 people: about $45,000 over five years, rented, and Viewer seats on top. GuavaInsights: a one-time setup, then about $1,900 in server cost over the same five years, viewers included.',
    },
  ],
  faqs: [
    {
      q: 'Is GuavaInsights really a one-time payment?',
      a: 'The platform is a one-time setup engagement — WhiteGuava deploys, connects and configures it, and then you own it. The only recurring cost is the server, around $32 a month, plus a few dollars of AI usage. There is no per-seat licence and no annual renewal.',
    },
    {
      q: 'Do viewers cost extra?',
      a: 'No. Anyone in your organisation can view dashboards, subscribe to scheduled reports, and see embedded analytics at no additional cost. Viewer seats are a subscription-BI concept; GuavaInsights does not use them.',
    },
    {
      q: 'Can analysts write raw SQL?',
      a: 'Yes. A visual query builder and a raw SQL editor sit side by side, with saved and parameterised queries and notebooks for exploratory work. SQL is not walled off behind a pro tier.',
    },
    {
      q: 'Where is our data while it is being analysed?',
      a: 'On your own cloud, next to your database. GuavaInsights connects directly or syncs into a store you control — nothing is extracted into a vendor’s multi-tenant service.',
    },
    {
      q: 'Does GuavaInsights have AI?',
      a: 'Yes — natural-language to query and chart, dashboard narratives, follow-up Q&A over the data, and anomaly alerts. It runs on a metered model at roughly $3 to $5 a month for a small team, with no capacity or plan tier to buy.',
    },
    {
      q: 'Can we embed dashboards in our own product?',
      a: 'Yes, with no per-view charge. Row-level security ties each viewer to their own slice of the data.',
    },
    {
      q: 'What if we need custom visualisations or models later?',
      a: 'Because the source is yours, GuavaInsights can be extended — custom charts, models, connectors or AI features. WhiteGuava offers ongoing support and development, but it is optional.',
    },
  ],
  related: [
    { href: SERVICE_PATHS.dataAnalytics, title: 'Data & Analytics', desc: 'Pipelines and data infrastructure that feed GuavaInsights.' },
    { href: '/blog/one-time-payment-erp', title: 'One-Time-Payment ERP', desc: 'GuavaERP — its ledger and stock data are a natural source for GuavaInsights.' },
    { href: '/blog/one-time-payment-crm', title: 'One-Time-Payment CRM', desc: 'The same own-it model for sales and pipeline with GuavaCRM.' },
    { href: SERVICE_PATHS.software, title: 'AI Software Development', desc: 'How WhiteGuava builds, connects and deploys platforms like GuavaInsights.' },
  ],
  cta: {
    title: 'Want a BI platform your team owns outright?',
    text: 'WhiteGuava sets up GuavaInsights on your cloud, connects your data, builds your first dashboards, switches on the AI analyst, and hands it over. One-time setup, then about $32 a month with viewers included.',
    label: 'Get a GuavaInsights quote',
    href: '/#contact',
  },
  productSchema: {
    name: 'GuavaInsights',
    applicationCategory: 'BusinessApplication',
    description:
      'A self-hosted BI platform for dashboards, SQL and visual queries, alerts and unlimited viewers, deployed on your own cloud and owned outright — instead of per-seat Tableau or Power BI pricing.',
  },
};
