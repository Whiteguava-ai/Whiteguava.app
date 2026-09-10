import { SERVICE_PATHS } from '@/lib/site';
import type { BlogPost } from '../types';

export const oneTimePaymentErp: BlogPost = {
  slug: 'one-time-payment-erp',
  path: '/blog/one-time-payment-erp',
  title: 'One-Time-Payment ERP: Own GuavaERP Instead of Renting NetSuite or SAP',
  metaTitle: 'One-Time-Payment ERP: Own GuavaERP Instead of Renting NetSuite or SAP (2026)',
  metaDescription:
    'GuavaERP runs your accounting, inventory and operations on your own cloud — buy once, own it, AI built in. See the 5-year cost next to NetSuite, SAP, Dynamics 365 and Odoo.',
  excerpt:
    'A 10-person team on Dynamics 365 Business Central pays about $9,600 a year — forever — and NetSuite is far more. GuavaERP is a one-time setup, then roughly $45/month for the server, with the full ledger, stock, manufacturing and an AI assistant. Here is the complete cost and feature comparison, with tools you can run yourself.',
  category: 'ERP',
  tags: [
    'one-time payment ERP',
    'ERP you own',
    'self-hosted ERP',
    'NetSuite alternative',
    'SAP Business One alternative',
    'Odoo alternative',
    'ERP total cost of ownership',
  ],
  publishedAt: '2026-09-10',
  updatedAt: '2026-09-10',
  readingTimeMinutes: 13,
  h1: 'GuavaERP: The ERP You Buy Once Instead of Renting Forever',
  subtitle:
    'The same ledger, inventory, purchasing, manufacturing and projects as the big platforms — set up once, owned by you, and running on a ~$45/month server instead of a per-user subscription that never stops.',
  body: [
    {
      type: 'p',
      text: 'Every mainstream ERP is rented. You pay per user, per month, and the bill climbs with every hire in finance, the warehouse and the office. Microsoft Dynamics 365 Business Central Essentials lists at $80 per user per month — about $9,600 a year for a 10-person team, $48,000 over five years. NetSuite, on independent 2026 estimates, runs a small business $12,000–$60,000 a year for a 10-user core deployment. At the end of the term you own nothing.',
    },
    {
      type: 'p',
      text: 'GuavaERP is the opposite model. WhiteGuava sets it up on your own cloud, configures it to how you actually run the business, hands it over, and then it is yours: no per-seat licence, no renewal, and the only ongoing cost is roughly $45 a month for the server. It covers the work every operating business does — a full double-entry general ledger, accounts receivable and payable, multi-warehouse stock with batch and serial tracking, purchasing with supplier comparison, quotation-to-invoice sales, manufacturing with bills of material, projects and timesheets, fixed assets, and multi-currency — plus an AI assistant built directly in. Run the numbers for your own team size below.',
    },
    { type: 'embed', component: 'productCostCalculator', product: 'erp', caption: 'List pricing, September 2026. NetSuite has no public list; the figure shown is a mid-point of independent estimates for a 10-user core deployment. The GuavaERP bar is the server cost only — setup is a separate one-time fee.' },
    { type: 'h2', text: 'What a subscription ERP is really charging you for', id: 'what-youre-paying-for' },
    {
      type: 'p',
      text: 'The subscription price is not mostly the software. ERP is a mature category — the core capabilities are broadly the same everywhere. What you rent is the hosting, the vendor’s margin, a large sales and implementation channel, and the right to keep opening your own books next month. Stop paying and access ends, even though every transaction in there is yours.',
    },
    {
      type: 'p',
      text: 'The pricing model also punishes the shape of a real business. ERP touches finance, procurement, stores, production and sales, so "just the people who need it" is most of the company. Odoo’s advertised price is a first-year discount that steps up on renewal — Standard from $31.10 to $38.90, Custom from $61 to $76.20 per user per month. AI features sit in higher tiers or arrive as add-ons layered onto an already-expensive plan.',
    },
    { type: 'embed', component: 'productRentVsOwn', product: 'erp', caption: 'The meter runs on the Dynamics 365 Business Central Essentials list price for a 10-person team.' },
    { type: 'h2', text: 'Every plan, side by side', id: 'cost-comparison' },
    {
      type: 'p',
      text: 'This is the price ladder for a 10-user team at list price, annual billing, before tax. The final column divides each annual total by GuavaERP’s ~$650/year server-and-AI cost.',
    },
    {
      type: 'table',
      headers: ['Plan', 'Per user / mo', '10 users / year', 'AI assistant', 'vs GuavaERP'],
      rows: [
        ['GuavaERP (self-hosted)', '—', '~$650', 'Built in (~$3–5/mo usage)', '—'],
        ['Odoo · Standard (renewal)', '$38.90', '$4,668', 'Limited', '7×'],
        ['Zoho One · All Employee', '$37', '$4,440', 'Zia (higher tiers)', '7×'],
        ['Odoo · Custom (renewal)', '$76.20', '$9,144', 'Limited', '14×'],
        ['Dynamics 365 BC · Essentials', '$80', '$9,600', 'Copilot (add-on)', '15×'],
        ['SAP Business One', '~$108', '$12,960', 'No', '20×'],
        ['Dynamics 365 BC · Premium', '$110', '$13,200', 'Copilot (add-on)', '20×'],
        ['NetSuite · 10-user core (est.)', '—', '~$30,000', 'Add-on', '46×'],
      ],
    },
    {
      type: 'p',
      text: 'Even the cheapest realistic option costs a 10-person team seven times what GuavaERP’s server costs — and that is before the AI add-ons the big platforms charge on top. GuavaERP’s AI is included.',
    },
    { type: 'h2', text: 'How GuavaERP is put together', id: 'architecture' },
    {
      type: 'p',
      text: 'GuavaERP is a set of modules that all post to one general ledger. That is the whole point of an ERP and the thing spreadsheets can never give you: enter a delivery once and inventory, cost of goods sold and the customer’s statement all move together. The diagram shows the layers — where your team works, the modules, the ledger and masters that tie it together, the automation and AI, and the cloud it runs on.',
    },
    { type: 'embed', component: 'productArchitecture', product: 'erp' },
    { type: 'h2', text: 'Everything GuavaERP does out of the box', id: 'features' },
    {
      type: 'p',
      text: 'Every module below is part of GuavaERP from day one — no tier to unlock it, no add-on to buy. Explore what each one covers, then check the feature matrix for the tier or add-on that charges for the same thing elsewhere.',
    },
    { type: 'embed', component: 'productModuleExplorer', product: 'erp' },
    { type: 'embed', component: 'productFeatureMatrix', product: 'erp' },
    { type: 'h2', text: 'Order to cash, working', id: 'demo' },
    {
      type: 'p',
      text: 'This is the path a customer order takes through GuavaERP. Every step posts to the same ledger, so by the time you reach period-end the trial balance, P&L and balance sheet are already live — closing is a review, not a rebuild.',
    },
    { type: 'embed', component: 'productLifecycle', product: 'erp' },
    { type: 'h2', text: 'What renting NetSuite, SAP or Dynamics will never give you', id: 'only-here' },
    {
      type: 'p',
      text: 'Feature lists converge. What separates an owned ERP from a rented one is structural — it comes from where the software runs and who controls the source, and no subscription tier can offer it.',
    },
    { type: 'embed', component: 'productDifferentiators', product: 'erp' },
    { type: 'h2', text: 'The AI is built in — not a Copilot upgrade', id: 'ai' },
    {
      type: 'p',
      text: 'WhiteGuava adds the AI features an operations team actually reaches for straight onto GuavaERP as a custom module:',
    },
    {
      type: 'list',
      items: [
        'Draft with AI — one click on a purchase order, customer statement or vendor query writes a contextual message from the record’s own history.',
        'Summarize — collapses a long customer or supplier account, disputes and all, into a few lines so anyone picking it up is caught up.',
        'Ask AI — a sidebar assistant that answers plain-English questions about stock levels, overdue receivables and sales trends, within each user’s company and role access.',
        'Anomaly flags — quietly marks invoices and journal entries that sit outside the normal range for that account, for a human to check.',
      ],
    },
    {
      type: 'callout',
      title: 'Why this matters',
      text: 'AI is where every ERP vendor has chosen to put a paywall — Copilot as an add-on, an enterprise AI tier, a per-message meter. Because GuavaERP’s source is yours, the AI is just a feature, priced at what the API actually costs.',
    },
    { type: 'h2', text: 'Who GuavaERP is built for', id: 'who-its-for' },
    { type: 'p', text: 'GuavaERP is the right call for businesses that want to own the system their operations run on:' },
    {
      type: 'list',
      items: [
        'Small and mid-size businesses — 5 to 200 people — that need a real ledger, stock and purchasing without watching the bill climb with every hire.',
        'Manufacturers and distributors that need bills of material, multi-warehouse stock and landed cost without buying an enterprise tier.',
        'Businesses that care where their financial data lives — GuavaERP runs on your own cloud subscription, with full database and export access.',
        'Teams that have outgrown accounting software plus a stack of spreadsheets and do not want to sign a multi-year ERP subscription to move up.',
        'Anyone who has priced five years of NetSuite or SAP and wants that budget back.',
      ],
    },
    { type: 'h2', text: 'How you get GuavaERP', id: 'how-to-get' },
    { type: 'p', text: 'It is a one-time engagement, not a subscription:' },
    {
      type: 'list',
      ordered: true,
      items: [
        'WhiteGuava deploys GuavaERP on your cloud account (Azure, AWS or your choice), branded for your business.',
        'We set up your chart of accounts, tax templates, warehouses, item and party masters, pricing, approval workflows and roles, import your opening balances and open transactions, and switch on the AI module.',
        'We hand over full admin access, the database and documentation. From that point the software is yours.',
        'Ongoing, you pay only for the server — around $45 a month — plus a few dollars of AI usage. Support and future changes are available if you want them, never required.',
      ],
    },
    {
      type: 'callout',
      title: 'The five-year picture',
      text: 'Dynamics 365 Business Central for 10 people: about $48,000, rented — and NetSuite is far more. GuavaERP: a one-time setup, then roughly $2,700 in server cost over the same five years, and you own it at the end.',
    },
  ],
  faqs: [
    {
      q: 'Is GuavaERP really a one-time payment?',
      a: 'The ERP itself is a one-time setup engagement — WhiteGuava deploys, configures and hands it over, and then you own it. The only recurring cost is the server it runs on, around $45 a month, plus a few dollars of AI usage. There is no per-user licence and no annual renewal.',
    },
    {
      q: 'How is GuavaERP so much cheaper than NetSuite or SAP?',
      a: 'Those platforms charge per user per month, and the price covers hosting, vendor margin, and a large sales and implementation channel. GuavaERP is built on open-source software running on your own cloud, so once it is set up the only cost is the virtual machine — regardless of how many people use it.',
    },
    {
      q: 'Does GuavaERP handle manufacturing and multi-warehouse inventory?',
      a: 'Yes. Multi-level bills of material, work orders, subcontracting and job costing are included, as is multi-warehouse stock with batch, serial and expiry tracking, FIFO and moving-average valuation, reorder rules and landed cost.',
    },
    {
      q: 'Can GuavaERP do our country’s tax and statutory reporting?',
      a: 'Yes. Tax templates for GST, VAT and sales tax are configured during setup, and because the source is yours, country-specific statutory reports and filing formats can be added as needed.',
    },
    {
      q: 'Does GuavaERP have AI?',
      a: 'Yes. It includes Draft with AI (writes contextual messages on any record), Summarize (condenses a customer or supplier account), Ask AI (answers questions about stock, receivables and sales), and anomaly flags on invoices and journals. They run on a metered model and cost about $3 to $5 a month in usage for a small team — with no separate AI tier.',
    },
    {
      q: 'Can we get our data out? Is there lock-in?',
      a: 'There is no lock-in. GuavaERP is a database on your own cloud subscription. You have full SQL access, full export, and the source code.',
    },
    {
      q: 'What happens if we need changes later?',
      a: 'Because the source is yours, GuavaERP can be customised in ways a licensed ERP cannot — new document types, approval chains, reports, or AI features. WhiteGuava offers ongoing support and development if you want it, but it is optional.',
    },
  ],
  related: [
    { href: '/blog/one-time-payment-crm', title: 'One-Time-Payment CRM', desc: 'The same own-it-instead-of-renting model, applied to sales and pipeline with GuavaCRM.' },
    { href: '/blog/one-time-payment-hr-software', title: 'One-Time-Payment HR Software', desc: 'GuavaHR for employees, attendance and payroll on your own cloud.' },
    { href: SERVICE_PATHS.software, title: 'AI Software Development', desc: 'How WhiteGuava builds, configures and deploys business software like GuavaERP.' },
    { href: SERVICE_PATHS.dataAnalytics, title: 'Data & Analytics', desc: 'Reporting and dashboards on top of your own ERP database.' },
  ],
  cta: {
    title: 'Want an ERP your business owns outright?',
    text: 'WhiteGuava sets up GuavaERP on your cloud, configures it to how you operate, imports your balances, switches on the AI, and hands it over. One-time setup, then it runs for about $45 a month with no licences.',
    label: 'Get a GuavaERP quote',
    href: '/#contact',
  },
};
