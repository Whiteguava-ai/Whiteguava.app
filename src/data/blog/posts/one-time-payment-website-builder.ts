import { SERVICE_PATHS } from '@/lib/site';
import type { BlogPost } from '../types';

export const oneTimePaymentBuilder: BlogPost = {
  slug: 'one-time-payment-website-builder',
  path: '/blog/one-time-payment-website-builder',
  title: 'One-Time-Payment Website Builder: Own GuavaBuilder Instead of Renting Webflow or Wix',
  metaTitle: 'Website Builder You Own: GuavaBuilder vs Webflow & Wix',
  metaDescription:
    'GuavaBuilder builds websites and pages visually on your own cloud — buy once, own it, unlimited sites and editors, AI built in. See the 5-year cost next to Webflow, Wix Studio and Framer.',
  excerpt:
    'Every website builder charges per site, and Webflow charges per editor seat on top. GuavaBuilder is a one-time setup, then about $20/month for the server, with a visual canvas, a real design system, CMS collections, forms, SEO controls and staging — plus AI copy and SEO tools. Here is the full comparison.',
  category: 'Builder',
  tags: [
    'one-time payment website builder',
    'website builder you own',
    'self-hosted website builder',
    'Webflow alternative',
    'Wix Studio alternative',
    'Framer alternative',
    'website builder total cost of ownership',
  ],
  publishedAt: '2026-09-10',
  updatedAt: '2026-09-10',
  readingTimeMinutes: 11,
  h1: 'GuavaBuilder: The Website Builder You Buy Once Instead of Renting Per Site',
  subtitle:
    'The same visual canvas, design system, CMS and SEO controls as Webflow — set up once, owned by you, running on a ~$20/month server, with unlimited sites, pages and editors.',
  body: [
    {
      type: 'p',
      text: 'Every visual website builder is rented, and it is rented per site. Webflow site plans start at $14 a month and run to $39 for Premium, with Workspace seats from $16 to $39 per editor on top. Wix Studio site plans run $27 to $159. Framer bills per site plus seats. Launch a campaign microsite, a landing page for a new product, or a partner’s site and each one is another plan on the invoice.',
    },
    {
      type: 'p',
      text: 'GuavaBuilder is the opposite model. WhiteGuava sets it up on your own cloud, brands the editor, hands it over, and then it is yours: no per-site plan, no editor seat, no renewal, and the only ongoing cost is roughly $20 a month for the server — for any number of sites, pages and editors. It covers the whole build job — a visual canvas on the real box model, reusable components and global design tokens, CMS collections with dynamic pages, forms with storage, per-page SEO controls, a media library, staging and one-click publish with rollback, and custom code embeds — plus AI copy and SEO tools built directly in.',
    },
    {
      type: 'callout',
      title: 'In short',
      text: 'Every website builder charges per site, and Webflow charges per editor seat on top. GuavaBuilder is a one-time setup, then about $20/month for the server (roughly $1,200 over five years), for unlimited sites, pages and editors. You own the exported code and host it yourself, with AI copy and SEO tools included rather than a monthly credit allowance.',
    },
    { type: 'embed', component: 'productCostCalculator', product: 'builder', caption: 'List pricing, September 2026. Most builders price per site; Webflow adds per-editor Workspace seats. The GuavaBuilder bar is the server cost only — setup is a separate one-time fee.' },
    { type: 'h2', text: 'What per-site builder pricing is really charging you for', id: 'what-youre-paying-for' },
    {
      type: 'p',
      text: 'A visual canvas, a CMS and SEO controls are mature and broadly the same across the serious builders. What the per-site price rents is hosting, the vendor’s margin, and — with Wix in particular — the fact that you cannot take the site anywhere else.',
    },
    {
      type: 'p',
      text: 'The model taxes activity. Every new site needs a plan; every non-designer who updates copy needs a seat; the good CMS features sit on the Premium tier; and the AI features come as a monthly credit allowance you can exhaust. Wix Studio does not let you export your code at all; Webflow only exports on a paid Workspace.',
    },
    { type: 'embed', component: 'productRentVsOwn', product: 'builder', caption: 'The meter runs on a small team running about five sites on Webflow with a shared workspace.' },
    { type: 'h2', text: 'Every plan, side by side', id: 'cost-comparison' },
    {
      type: 'p',
      text: 'This is the price picture at list price, annual billing, before tax, with the basis each one scales on. The final column divides each annual total by GuavaBuilder’s ~$280/year server-and-AI cost.',
    },
    {
      type: 'table',
      headers: ['Plan', 'Basis', 'Per year', 'AI tools', 'vs GuavaBuilder'],
      rows: [
        ['GuavaBuilder (self-hosted)', 'flat server, unlimited sites', '~$280', 'Built in (~$3–5/mo usage)', '—'],
        ['Framer · one site', 'per site', '~$180', 'Partial', '0.6× per site'],
        ['Squarespace · Business', 'per site', '~$276', 'Partial', '1× per site'],
        ['Wix Studio · one site', 'per site', '~$324', 'Partial', '1.2× per site'],
        ['Webflow · Premium site', 'per site', '~$468', 'AI credits', '1.7× per site'],
        ['Webflow · Workspace seat', 'per editor', '~$276 / seat', 'AI credits', '10× at 10 seats'],
        ['Webflow · ~5 sites + team', 'sites + seats', '~$1,800', 'AI credits', '6×'],
      ],
    },
    {
      type: 'p',
      text: 'One site on a cheap plan can undercut GuavaBuilder. The point of owning is the fifth site, the tenth editor, and the campaign page you spin up on a Friday — all at the same server cost.',
    },
    { type: 'h2', text: 'From the canvas to a visitor’s browser', id: 'architecture' },
    {
      type: 'p',
      text: 'GuavaBuilder compiles your work to clean static pages served from your own cloud and CDN, with the CMS and forms behind them. The diagram shows the layers — visitors, the build modules, the page and content data, compile and AI, and your cloud.',
    },
    { type: 'embed', component: 'productArchitecture', product: 'builder' },
    { type: 'h2', text: 'Everything GuavaBuilder does out of the box', id: 'features' },
    {
      type: 'p',
      text: 'Every module below is part of GuavaBuilder from day one — including CMS collections and code export that sit behind paywalls elsewhere. Explore what each covers, then check the feature matrix.',
    },
    { type: 'embed', component: 'productModuleExplorer', product: 'builder' },
    { type: 'embed', component: 'productFeatureMatrix', product: 'builder' },
    { type: 'h2', text: 'Design to published, working', id: 'demo' },
    {
      type: 'p',
      text: 'This is how a page goes from an idea to live and keeps improving. AI helps at the first draft and the SEO pass; the rest is the standard flow.',
    },
    { type: 'embed', component: 'productLifecycle', product: 'builder' },
    { type: 'h2', text: 'What renting Webflow, Wix Studio or Framer will never give you', id: 'only-here' },
    {
      type: 'p',
      text: 'Feature lists converge. What separates an owned builder from a rented one is structural — whether every site and editor costs money, whether you can take the output with you, and whether AI runs on a credit allowance.',
    },
    { type: 'embed', component: 'productDifferentiators', product: 'builder' },
    { type: 'h2', text: 'The AI is built in — not a monthly credit allowance', id: 'ai' },
    { type: 'p', text: 'WhiteGuava adds the AI features a web team actually uses straight onto GuavaBuilder as a custom module:' },
    {
      type: 'list',
      items: [
        'Draft with AI — generates section copy and a first-pass layout from a short prompt, using your components and tokens so it fits the design.',
        'Summarize — produces a content inventory across the whole site for a redesign or an audit.',
        'Ask AI — answers questions over your own site content and CMS data, useful for large sites nobody remembers every page of.',
        'SEO pass — generates titles, meta descriptions, Open Graph text and image alt text in bulk, for review before publish.',
      ],
    },
    {
      type: 'callout',
      title: 'Why this matters',
      text: 'Builder AI arrives as a capped monthly credit you run out of mid-project. Because GuavaBuilder’s source is yours, the AI runs on metered API calls — a few dollars a month, no allowance to hit.',
    },
    { type: 'h2', text: 'Who GuavaBuilder is built for', id: 'who-its-for' },
    { type: 'p', text: 'GuavaBuilder is the right call for teams that publish a lot on the web and want to own the platform:' },
    {
      type: 'list',
      items: [
        'Marketing teams that run a main site plus a stream of campaign and landing pages.',
        'Agencies and studios building sites for multiple clients who do not want a plan per client.',
        'Businesses that want non-designers to update copy without buying editor seats.',
        'Anyone who needs to own their site’s code and host it themselves — for portability, compliance, or peace of mind.',
        'Teams tired of hitting an AI credit cap in the middle of a build.',
      ],
    },
    { type: 'h2', text: 'How you get GuavaBuilder', id: 'how-to-get' },
    { type: 'p', text: 'It is a one-time engagement, not a subscription:' },
    {
      type: 'list',
      ordered: true,
      items: [
        'WhiteGuava deploys GuavaBuilder on your cloud account and CDN, with the editor branded for your business.',
        'We set up your design tokens and component library, your first site or migrate an existing one, CMS collections, forms, staging and publish rules, and switch on the AI module.',
        'We hand over full admin access, the database, the exported code and documentation. From that point the software is yours.',
        'Ongoing, you pay only for the server — around $20 a month — plus a few dollars of AI usage. Support and future changes are optional.',
      ],
    },
    {
      type: 'callout',
      title: 'The five-year picture',
      text: 'Webflow for a small team running five sites: about $9,000 over five years, rented, with AI credits that run out. GuavaBuilder: a one-time setup, then about $1,200 in server cost over the same five years, for unlimited sites and editors.',
    },
  ],
  faqs: [
    {
      q: 'Is GuavaBuilder really a one-time payment?',
      a: 'The builder is a one-time setup engagement — WhiteGuava deploys, configures and hands it over, and then you own it. The only recurring cost is the server, around $20 a month, plus a few dollars of AI usage. There is no per-site plan and no editor seat.',
    },
    {
      q: 'Can I run more than one site?',
      a: 'Yes — any number of sites, pages and editors on the same server. Adding a site does not add a plan.',
    },
    {
      q: 'Do I own the code?',
      a: 'Yes. GuavaBuilder outputs clean, semantic HTML and CSS, hosted on your own cloud, and you receive the exported code and the source. There is no export paywall and no lock-in.',
    },
    {
      q: 'Does it have a CMS?',
      a: 'Yes. CMS collections with typed fields and references power dynamic pages and lists, and a non-designer editor role can update content without touching layout.',
    },
    {
      q: 'Does GuavaBuilder have AI?',
      a: 'Yes — copy and layout drafting, a site-wide content inventory, Q&A over your content, and a bulk SEO pass for titles, meta and alt text. It runs on metered API calls at roughly $3 to $5 a month, with no credit allowance.',
    },
    {
      q: 'Can it do proper SEO?',
      a: 'Yes — per-page title, meta, canonical and Open Graph, JSON-LD schema blocks, clean markup, and custom code in head and body. The AI SEO pass fills the metadata in bulk for review.',
    },
    {
      q: 'What if we need custom functionality later?',
      a: 'Because the source is yours, GuavaBuilder can be extended — custom blocks, integrations, or dynamic features. WhiteGuava offers ongoing support and development, but it is optional.',
    },
  ],
  related: [
    { href: '/blog/one-time-payment-crm', title: 'One-Time-Payment CRM', desc: 'GuavaCRM — wire GuavaBuilder’s forms straight into your pipeline.' },
    { href: '/blog/one-time-payment-helpdesk', title: 'One-Time-Payment Helpdesk', desc: 'GuavaDesk — publish your knowledge base with the same builder.' },
    { href: SERVICE_PATHS.software, title: 'AI Software Development', desc: 'How WhiteGuava builds, configures and deploys platforms like GuavaBuilder.' },
    { href: SERVICE_PATHS.cloud, title: 'Cloud & Deployment', desc: 'Where your sites and CDN actually run.' },
  ],
  cta: {
    title: 'Want a website builder your team owns outright?',
    text: 'WhiteGuava sets up GuavaBuilder on your cloud, builds your design system, migrates or starts your site, switches on the AI tools, and hands it over. One-time setup, then about $20 a month for unlimited sites.',
    label: 'Get a GuavaBuilder quote',
    href: '/#contact',
  },
  productSchema: {
    name: 'GuavaBuilder',
    applicationCategory: 'BusinessApplication',
    description:
      'A self-hosted visual website builder with a design system, CMS and unlimited sites and editors, deployed on your own cloud and owned outright — instead of per-site Webflow or Wix Studio pricing.',
  },
};
