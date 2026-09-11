import type { ProductDef } from '../types';

/**
 * GuavaERP, accounting, inventory and operations you own.
 * Competitor figures: published list pricing, September 2026.
 *   Odoo Standard $31.10/user/mo year one, $38.90 on renewal; Custom $61 → $76.20.
 *   Microsoft Dynamics 365 Business Central Essentials $80, Premium $110 (US list, annual).
 *   SAP Business One roughly $80–$120 per user per month via partners.
 *   Zoho One $37 per employee per month on the All-Employee plan.
 *   NetSuite has no public list; independent 2026 estimates put a 10-user core-ERP
 *   subscription at roughly $12,000–$60,000 a year, $30,000 used here as a mid-point.
 */
export const erp: ProductDef = {
  key: 'erp',
  name: 'GuavaERP',
  accent: '#2f6f4f',
  replaces: 'NetSuite, SAP or Dynamics 365',

  refName: 'Dynamics 365 Business Central Essentials',
  refPerYear10: 9_600,
  refFiveYear: 48_000,

  serverMo: 45,
  guavaYr: 650,

  plans: [
    { key: 'guava', name: 'GuavaERP', perUserMo: 0, flatYr: 650, ai: 'yes', aiNote: 'built in', ours: true },
    { key: 'odoo-std', name: 'Odoo · Standard', perUserMo: 38.9, ai: 'partial', aiNote: 'renewal price' },
    { key: 'zoho-one', name: 'Zoho One · All Employee', perUserMo: 37, ai: 'partial', aiNote: 'Zia' },
    { key: 'odoo-cst', name: 'Odoo · Custom', perUserMo: 76.2, ai: 'partial', aiNote: 'renewal price' },
    { key: 'bc-ess', name: 'Dynamics 365 BC · Essentials', perUserMo: 80, ai: 'partial', aiNote: 'Copilot' },
    { key: 'sap-b1', name: 'SAP Business One', perUserMo: 108, ai: 'no' },
    { key: 'netsuite', name: 'NetSuite (10-user core est.)', perUserMo: 0, flatYr: 30_000, ai: 'partial', aiNote: 'add-on' },
  ],

  ladder: [
    { vendor: 'GuavaERP', tier: 'server + AI usage', perUserMo: null, tenUsersYr: 650, ai: 'yes', aiNote: 'Draft, Summarize, Ask', vsOurs: 'N/A', ours: true },
    { vendor: 'Odoo', tier: 'Standard (renewal)', perUserMo: 38.9, tenUsersYr: 4_668, ai: 'partial', aiNote: 'limited', vsOurs: '7×' },
    { vendor: 'Zoho One', tier: 'All Employee', perUserMo: 37, tenUsersYr: 4_440, ai: 'partial', aiNote: 'Zia', vsOurs: '7×' },
    { vendor: 'Odoo', tier: 'Custom (renewal)', perUserMo: 76.2, tenUsersYr: 9_144, ai: 'partial', aiNote: 'limited', vsOurs: '14×' },
    { vendor: 'Dynamics 365 BC', tier: 'Essentials', perUserMo: 80, tenUsersYr: 9_600, ai: 'partial', aiNote: 'Copilot', vsOurs: '15×' },
    { vendor: 'SAP', tier: 'Business One', perUserMo: 108, tenUsersYr: 12_960, ai: 'no', vsOurs: '20×' },
    { vendor: 'Dynamics 365 BC', tier: 'Premium', perUserMo: 110, tenUsersYr: 13_200, ai: 'partial', aiNote: 'Copilot', vsOurs: '20×' },
    { vendor: 'NetSuite', tier: '10 users, core ERP (est.)', perUserMo: null, tenUsersYr: 30_000, ai: 'partial', aiNote: 'add-on', vsOurs: '46×' },
  ],

  matrix: [
    {
      group: 'Financials',
      rows: [
        { capability: 'Double-entry general ledger, multi-company', elsewhere: 'Every ERP', note: 'Chart of accounts, cost centres, journals, and period closing.' },
        { capability: 'Accounts receivable & payable with ageing', elsewhere: 'Every ERP' },
        { capability: 'Multi-currency with dated exchange rates', elsewhere: 'Dynamics 365 BC Premium / NetSuite add-on' },
        { capability: 'Bank reconciliation & payment runs', elsewhere: 'Every ERP' },
        { capability: 'Budgeting and variance reporting', elsewhere: 'Odoo Custom / Dynamics 365 BC Premium' },
        { capability: 'Tax templates (GST, VAT, sales tax)', elsewhere: 'Region packs, usually paid' },
      ],
    },
    {
      group: 'Inventory & supply chain',
      rows: [
        { capability: 'Multi-warehouse stock with batch & serial tracking', elsewhere: 'Odoo Custom / NetSuite add-on' },
        { capability: 'Reorder levels and auto purchase suggestions', elsewhere: 'Higher tiers' },
        { capability: 'Stock valuation, FIFO, moving average', elsewhere: 'Every ERP' },
        { capability: 'Landed cost, quality inspection, stock ageing', elsewhere: 'NetSuite / SAP add-ons' },
      ],
    },
    {
      group: 'Sales & purchasing',
      rows: [
        { capability: 'Quotation → order → delivery → invoice flow', elsewhere: 'Every ERP' },
        { capability: 'Pricing rules, discounts and pricing lists', elsewhere: 'Every ERP' },
        { capability: 'Supplier scorecards and RFQ comparison', elsewhere: 'Higher tiers' },
        { capability: 'Subscription and recurring billing', elsewhere: 'NetSuite SuiteBilling (paid) / Odoo Subscriptions' },
      ],
    },
    {
      group: 'Operations',
      rows: [
        { capability: 'Manufacturing, BOM, work orders, routing', elsewhere: 'Odoo Custom / Dynamics 365 BC + add-on' },
        { capability: 'Projects, tasks and timesheets with costing', elsewhere: 'Separate module, usually paid' },
        { capability: 'Fixed-asset register with depreciation', elsewhere: 'Higher tiers' },
        { capability: 'Maintenance and asset movement tracking', elsewhere: 'Add-on' },
      ],
    },
    {
      group: 'AI assistant',
      rows: [
        { capability: 'Draft, purchase orders, customer and vendor emails', elsewhere: 'Copilot / add-on on top of an enterprise plan', note: 'One click on any record, using its own history.' },
        { capability: 'Summarize, a vendor or customer account at a glance', elsewhere: 'Higher tier only' },
        { capability: 'Ask AI, plain-English questions over stock, receivables, sales', elsewhere: 'Enterprise AI tier', note: 'Respects each user’s role and company access.' },
        { capability: 'Anomaly flags on invoices and journal entries', elsewhere: 'Rarely available below enterprise' },
      ],
    },
    {
      group: 'Platform & data',
      rows: [
        { capability: 'Custom fields, objects and print formats', elsewhere: 'Studio / customization tier' },
        { capability: 'REST API, webhooks and server scripting', elsewhere: 'Higher tiers' },
        { capability: 'Full audit trail and version history on every record', elsewhere: 'Enterprise tiers' },
        { capability: 'Scheduled and self-serve data import / export', elsewhere: 'Every ERP' },
      ],
    },
  ],

  diffs: [
    { icon: 'infinity', title: 'No per-seat licence, ever', body: 'Add finance, the warehouse floor, sales, external auditors and read-only directors. The price **does not move**. Every subscription ERP meters the exact people who need to see the numbers.' },
    { icon: 'database', title: 'Your ledger, on your cloud', body: 'The general ledger is a database on **your** cloud subscription, full SQL access, full export, and the source code. Nothing about your accounts is hostage to a renewal.' },
    { icon: 'code', title: 'Built for your operation, not a template', body: 'A new document type, an approval chain, a custom stock report, a country tax pack, built straight onto the system. A licensed ERP charges for a customization tier and still limits how far you can go.' },
    { icon: 'sparkles', title: 'AI without an AI edition', body: 'Drafting, account summaries and Ask-AI over stock and receivables cost **a few dollars a month** in usage. Copilot and enterprise-AI tiers add that cost on top of an already large plan.' },
    { icon: 'trendingDown', title: 'No renewal to be repriced at', body: 'Subscription ERP list prices drift up every year and mid-contract "true-ups" catch growing teams. GuavaERP has no renewal, you already own it.' },
    { icon: 'boxes', title: 'One server runs the whole company', body: 'Accounting, stock, manufacturing and projects on a single virtual machine you can size up at month-end and down again. Not a per-module, per-user, per-company licence stack.' },
  ],

  architecture: {
    title: 'How GuavaERP is put together',
    caption: 'Left to right: where your team works, the modules, the ledger that ties it together, the automation and AI layer, and the cloud it all runs on. Hover a box to trace what feeds it.',
    layers: ['Where people work', 'Modules', 'Core ledger & data', 'Automation & AI', 'Your cloud'],
    nodes: [
      { id: 'desk', label: 'Desktop app', col: 0, kind: 'channel' },
      { id: 'portal', label: 'Customer / supplier portal', col: 0, kind: 'channel' },
      { id: 'api-in', label: 'API & integrations', col: 0, kind: 'channel' },
      { id: 'fin', label: 'Accounting', col: 1, kind: 'module' },
      { id: 'stock', label: 'Stock & warehouses', col: 1, kind: 'module' },
      { id: 'buy', label: 'Buying', col: 1, kind: 'module' },
      { id: 'sell', label: 'Selling', col: 1, kind: 'module' },
      { id: 'mfg', label: 'Manufacturing', col: 1, kind: 'module' },
      { id: 'ledger', label: 'General ledger', col: 2, kind: 'core' },
      { id: 'master', label: 'Item & party master', col: 2, kind: 'core' },
      { id: 'perm', label: 'Roles & company access', col: 2, kind: 'core' },
      { id: 'flow', label: 'Workflow engine', col: 3, kind: 'automation' },
      { id: 'ai', label: 'AI assistant', col: 3, kind: 'automation' },
      { id: 'vm', label: 'Your cloud VM + database', col: 4, kind: 'cloud' },
    ],
    edges: [
      { from: 'desk', to: 'fin' }, { from: 'desk', to: 'sell' }, { from: 'desk', to: 'stock' },
      { from: 'portal', to: 'sell' }, { from: 'portal', to: 'buy' },
      { from: 'api-in', to: 'master' }, { from: 'api-in', to: 'ledger' },
      { from: 'fin', to: 'ledger' }, { from: 'buy', to: 'ledger' }, { from: 'sell', to: 'ledger' },
      { from: 'stock', to: 'master' }, { from: 'mfg', to: 'master' }, { from: 'sell', to: 'master' },
      { from: 'ledger', to: 'perm' }, { from: 'master', to: 'perm' },
      { from: 'flow', to: 'ledger' }, { from: 'ai', to: 'ledger' }, { from: 'ai', to: 'master' },
      { from: 'perm', to: 'vm' }, { from: 'flow', to: 'vm' }, { from: 'ai', to: 'vm' },
    ],
  },

  modules: [
    { name: 'Accounting', tag: 'Financials', blurb: 'A full double-entry ledger with everything a controller expects, ready to post from every other module.', points: ['Chart of accounts, cost centres, dimensions and fiscal years', 'AR / AP with ageing, statements and dunning', 'Bank reconciliation, payment runs and cash-flow view', 'Tax templates for GST, VAT and sales tax', 'Period closing with a locked audit trail'] },
    { name: 'Stock & warehouses', tag: 'Supply chain', blurb: 'Real-time inventory across any number of warehouses, with the valuation and traceability finance needs.', points: ['Batch, serial and expiry tracking', 'FIFO and moving-average valuation', 'Reorder levels with automatic purchase suggestions', 'Stock transfers, quality inspection and landed cost', 'Stock ageing and dead-stock reporting'] },
    { name: 'Buying', tag: 'Procurement', blurb: 'From requisition to bill, with supplier comparison built in.', points: ['Material requests, RFQs and supplier quotations side by side', 'Purchase orders with schedules and drop-ship', 'Goods receipt against order with tolerance rules', 'Supplier scorecards on price, lead time and quality'] },
    { name: 'Selling', tag: 'Revenue', blurb: 'Quotation to invoice, with pricing rules and margins visible at every step.', points: ['Pricing lists, discount rules and margin checks', 'Sales orders with partial delivery and billing', 'Delivery notes and packing slips', 'Recurring and subscription invoicing'] },
    { name: 'Manufacturing', tag: 'Operations', blurb: 'Bills of material, work orders and shop-floor tracking for makers and assemblers.', points: ['Multi-level BOMs with scrap and operations', 'Work orders with material and time capture', 'Capacity planning and production forecasting', 'Subcontracting and job costing'] },
    { name: 'Projects & assets', tag: 'Operations', blurb: 'Track delivery work and the equipment behind it, costed against the ledger.', points: ['Projects with tasks, timesheets and billing', 'Profitability per project in real time', 'Fixed-asset register with depreciation schedules', 'Maintenance visits and asset movement history'] },
  ],

  lifecycle: {
    title: 'Order to cash, end to end',
    caption: 'The path a customer order takes through GuavaERP. Click a step, every one posts to the same ledger, so the numbers are always in sync.',
    steps: [
      { label: 'Quotation', detail: 'A quote is raised against a pricing list, with margin shown before it is sent. AI can draft the covering email from the customer’s history.', metric: 'Pipeline value updates' },
      { label: 'Sales order', detail: 'The customer accepts and the quote becomes an order, stock is reserved, and delivery and billing schedules are set.', metric: 'Committed stock reserved' },
      { label: 'Delivery', detail: 'A delivery note ships the goods, stock leaves the warehouse at its valuation rate, and the cost of goods sold is recognised.', metric: 'Inventory ↓ · COGS posted' },
      { label: 'Sales invoice', detail: 'The invoice is raised from the delivery, tax is applied from the template, and revenue and receivables hit the ledger.', metric: 'Revenue + AR posted' },
      { label: 'Payment', detail: 'The customer pays, the receipt is matched against the invoice, and the bank ledger and AR ageing update together.', metric: 'Cash ↑ · AR cleared' },
      { label: 'Close', detail: 'At period end everything is already posted. The trial balance, P&L and balance sheet are live, closing is a review, not a rebuild.', metric: 'Books balanced' },
    ],
  },

  ai: [
    { name: 'Draft with AI', desc: 'One click on a purchase order, customer statement or vendor query writes a contextual message using the record’s own history.' },
    { name: 'Summarize', desc: 'Collapses a long customer or supplier account, orders, payments, disputes, into a few lines so anyone picking it up is caught up instantly.' },
    { name: 'Ask AI', desc: 'A sidebar assistant that answers plain-English questions about stock levels, overdue receivables and sales trends, within each user’s company and role access.' },
    { name: 'Anomaly flags', desc: 'Quietly marks invoices and journal entries that sit outside the normal range for that supplier or account, for a human to check.' },
  ],
};
