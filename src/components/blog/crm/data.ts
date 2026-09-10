/**
 * Shared numbers for the GuavaCRM blog widgets. Every figure here traces to the
 * September 2026 comparison doc: published Zoho / Salesforce list pricing and a
 * direct inspection of the deployed CRM (Frappe v15 + CRM 1.83 + a custom
 * OpenAI module). List price, annual billing, before tax.
 */

export interface CrmPlan {
  key: string;
  name: string;
  /** USD per user per month at list price. 0 = not seat-priced. */
  perUserMo: number;
  /** Fixed yearly cost independent of seats (GuavaCRM's Azure server + AI usage). */
  flatYr?: number;
  /** Is an AI assistant (drafting, summaries, Q&A) usable on this plan? */
  ai: boolean;
  aiNote?: string;
  brand: 'guava' | 'zoho' | 'salesforce';
}

export const CRM_PLANS: CrmPlan[] = [
  {
    key: 'guava',
    name: 'GuavaCRM',
    perUserMo: 0,
    flatYr: 340,
    ai: true,
    aiNote: 'Draft · Summarize · Ask — built in, ~$3–5/mo in usage',
    brand: 'guava',
  },
  { key: 'zoho-ent', name: 'Zoho CRM · Enterprise', perUserMo: 40, ai: true, aiNote: 'Zia', brand: 'zoho' },
  { key: 'zoho-ult', name: 'Zoho CRM · Ultimate', perUserMo: 52, ai: true, aiNote: 'Zia + QuickML', brand: 'zoho' },
  { key: 'sf-ent', name: 'Salesforce · Enterprise', perUserMo: 175, ai: false, aiNote: 'Einstein is a paid add-on', brand: 'salesforce' },
  { key: 'sf-einstein', name: 'Salesforce · Einstein 1 Sales', perUserMo: 500, ai: true, aiNote: 'full Einstein + Agentforce', brand: 'salesforce' },
];

/** Total cost of a plan for `users` seats over `years`, at list price. */
export function planCost(plan: CrmPlan, users: number, years: number): number {
  if (plan.flatYr != null) return plan.flatYr * years;
  return plan.perUserMo * users * 12 * years;
}

/** The full per-tier price ladder from the comparison doc (10-user reference). */
export const CRM_COST_LADDER: {
  vendor: string;
  tier: string;
  perUserMo: number | null;
  tenUsersMo: number | null;
  tenUsersYr: number | null;
  ai: 'yes' | 'partial' | 'no';
  aiNote?: string;
  vsOurs: string;
  ours?: boolean;
}[] = [
  { vendor: 'GuavaCRM', tier: 'Azure server + AI usage', perUserMo: null, tenUsersMo: 28, tenUsersYr: 340, ai: 'yes', aiNote: 'Draft, Summarize, Ask', vsOurs: '—', ours: true },
  { vendor: 'Zoho CRM', tier: 'Standard', perUserMo: 14, tenUsersMo: 140, tenUsersYr: 1680, ai: 'no', vsOurs: '5×' },
  { vendor: 'Zoho CRM', tier: 'Professional', perUserMo: 23, tenUsersMo: 230, tenUsersYr: 2760, ai: 'no', aiNote: 'no Zia', vsOurs: '8×' },
  { vendor: 'Zoho CRM', tier: 'Enterprise', perUserMo: 40, tenUsersMo: 400, tenUsersYr: 4800, ai: 'yes', aiNote: 'Zia', vsOurs: '14×' },
  { vendor: 'Zoho CRM', tier: 'Ultimate', perUserMo: 52, tenUsersMo: 520, tenUsersYr: 6240, ai: 'yes', aiNote: 'Zia + QuickML', vsOurs: '18×' },
  { vendor: 'Salesforce', tier: 'Starter Suite', perUserMo: 25, tenUsersMo: 250, tenUsersYr: 3000, ai: 'partial', aiNote: 'limited', vsOurs: '9×' },
  { vendor: 'Salesforce', tier: 'Pro Suite', perUserMo: 100, tenUsersMo: 1000, tenUsersYr: 12000, ai: 'partial', aiNote: 'Einstein add-on', vsOurs: '35×' },
  { vendor: 'Salesforce', tier: 'Enterprise', perUserMo: 175, tenUsersMo: 1750, tenUsersYr: 21000, ai: 'partial', aiNote: 'Einstein is a paid add-on', vsOurs: '62×' },
  { vendor: 'Salesforce', tier: 'Unlimited', perUserMo: 350, tenUsersMo: 3500, tenUsersYr: 42000, ai: 'yes', aiNote: 'more Einstein', vsOurs: '124×' },
  { vendor: 'Salesforce', tier: 'Einstein 1 Sales', perUserMo: 500, tenUsersMo: 5000, tenUsersYr: 60000, ai: 'yes', aiNote: 'full Einstein + Agentforce', vsOurs: '176×' },
];

export type MatrixMark = 'yes';

export interface MatrixRow {
  capability: string;
  /** What plan / add-on you need to get this on Salesforce or Zoho. */
  elsewhere: string;
  note?: string;
}

export interface MatrixGroup {
  group: string;
  rows: MatrixRow[];
}

/**
 * Only capabilities GuavaCRM genuinely ships (● in the comparison doc). The
 * "elsewhere" column is the cheapest tier or add-on that unlocks the same
 * thing on Salesforce / Zoho.
 */
export const CRM_MATRIX: MatrixGroup[] = [
  {
    group: 'Core records & pipeline',
    rows: [
      { capability: 'Leads, Deals, Contacts, Organizations', elsewhere: 'Every paid plan', note: 'The four objects every sales team lives in — unlimited records.' },
      { capability: 'Kanban board with drag-and-drop stages', elsewhere: 'Every paid plan' },
      { capability: 'Multiple pipelines & custom stages', elsewhere: 'Zoho Professional+ / Salesforce Enterprise' },
      { capability: 'Saved views — filters, sort, columns, shared or private', elsewhere: 'Every paid plan' },
      { capability: 'Multi-currency with dated exchange rates', elsewhere: 'Zoho Enterprise / Salesforce Enterprise' },
    ],
  },
  {
    group: 'Activity & communication',
    rows: [
      { capability: 'Unified activity timeline on every record', elsewhere: 'Every paid plan' },
      { capability: 'Two-way email inside a lead or deal', elsewhere: 'Every paid plan' },
      { capability: 'Email templates', elsewhere: 'Every paid plan' },
      { capability: 'Tasks, notes, @mentions, comments, following', elsewhere: 'Every paid plan' },
      { capability: 'Call logging + telephony (Twilio, Exotel)', elsewhere: 'Zoho Enterprise (PhoneBridge) / Salesforce add-on' },
      { capability: 'WhatsApp messaging', elsewhere: 'Zoho Enterprise / Salesforce partner add-on', note: 'Native on GuavaCRM. Salesforce needs a third-party app.' },
    ],
  },
  {
    group: 'Automation & process',
    rows: [
      { capability: 'Round-robin / load-balanced lead assignment', elsewhere: 'Zoho Professional+ / Salesforce Enterprise' },
      { capability: 'Workflow rules & state machine', elsewhere: 'Zoho Professional+ / Salesforce Enterprise' },
      { capability: 'SLA — response & resolution tracking', elsewhere: 'Zoho Enterprise / Salesforce Enterprise' },
      { capability: 'Web-to-lead capture forms', elsewhere: 'Every paid plan' },
    ],
  },
  {
    group: 'AI assistant',
    rows: [
      { capability: 'AI email drafting on any lead or deal', elsewhere: 'Zoho Enterprise ($4,800/yr) / Salesforce Einstein add-on', note: 'Built onto GuavaCRM as a custom module. "Draft with AI" button, gpt-4o-mini.' },
      { capability: 'One-click record summaries', elsewhere: 'Zoho Enterprise / Salesforce Einstein Copilot' },
      { capability: 'Ask AI — plain-English questions over your data', elsewhere: 'Zoho Enterprise (Ask Zia) / Salesforce', note: 'Sidebar assistant. Respects each user’s permissions.' },
    ],
  },
  {
    group: 'Reporting',
    rows: [
      { capability: 'Dashboard — deals by stage, leads by source', elsewhere: 'Every paid plan' },
      { capability: 'Report builder with CSV / Excel export', elsewhere: 'Every paid plan' },
    ],
  },
  {
    group: 'Customization & data',
    rows: [
      { capability: 'Custom fields on every object', elsewhere: 'Every paid plan' },
      { capability: 'Custom objects & modules', elsewhere: 'Zoho Enterprise / Salesforce Enterprise', note: 'Full Frappe framework — build whatever object your business needs.' },
      { capability: 'Bulk email / newsletter with unsubscribe tracking', elsewhere: 'Zoho Enterprise / Salesforce Marketing Cloud (separate product)' },
      { capability: 'Data import / export', elsewhere: 'Every paid plan' },
      { capability: 'Full audit trail & version history on every record', elsewhere: 'Zoho Enterprise / Salesforce Enterprise' },
    ],
  },
  {
    group: 'Admin & platform',
    rows: [
      { capability: 'Role-based permissions', elsewhere: 'Every paid plan' },
      { capability: 'REST API, webhooks, server scripting', elsewhere: 'Zoho Professional+ / Salesforce Enterprise' },
    ],
  },
];

/** Kanban demo seed data. Values are illustrative deal sizes. */
export interface DemoDeal {
  id: string;
  company: string;
  value: number;
  stage: DemoStage;
}
export type DemoStage = 'new' | 'qualified' | 'proposal' | 'won';
export const DEMO_STAGES: { key: DemoStage; label: string }[] = [
  { key: 'new', label: 'New' },
  { key: 'qualified', label: 'Qualified' },
  { key: 'proposal', label: 'Proposal' },
  { key: 'won', label: 'Won' },
];
export const DEMO_DEALS: DemoDeal[] = [
  { id: 'd1', company: 'Meridian Textiles', value: 8200, stage: 'new' },
  { id: 'd2', company: 'Okra Foods', value: 15400, stage: 'new' },
  { id: 'd3', company: 'Nandi Logistics', value: 22000, stage: 'qualified' },
  { id: 'd4', company: 'BlueReef Studios', value: 6100, stage: 'qualified' },
  { id: 'd5', company: 'Hillside Clinics', value: 31000, stage: 'proposal' },
  { id: 'd6', company: 'Praxis Legal', value: 12750, stage: 'won' },
];
