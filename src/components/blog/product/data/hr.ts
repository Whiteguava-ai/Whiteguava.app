import type { ProductDef } from '../types';

/**
 * GuavaHR — employees, attendance, payroll and HR processes you own.
 * Competitor list pricing, September 2026:
 *   BambooHR Core $10, Pro $17, Elite $25 per employee per month; teams of 25 or
 *   fewer are billed a flat rate starting at $250/month.
 *   Zoho People roughly $1.50–$9 per user per month by tier.
 *   Rippling starts around $8 per user per month plus a platform base fee.
 *   Workday is enterprise-only and custom-quoted; $35,000/year is a conservative
 *   stand-in for a small deployment.
 */
export const hr: ProductDef = {
  key: 'hr',
  name: 'GuavaHR',
  accent: '#0e7c86',
  replaces: 'BambooHR, Workday or Rippling',

  refName: 'BambooHR (flat rate)',
  refPerYear10: 3_000,
  refFiveYear: 15_000,

  serverMo: 28,
  guavaYr: 400,

  plans: [
    { key: 'guava', name: 'GuavaHR', perUserMo: 0, flatYr: 400, ai: 'yes', aiNote: 'built in', ours: true },
    { key: 'zoho-people', name: 'Zoho People · Professional', perUserMo: 4.5, ai: 'partial', aiNote: 'Zia' },
    { key: 'bamboo-core', name: 'BambooHR · Core', perUserMo: 10, ai: 'no' },
    { key: 'rippling', name: 'Rippling · HR', perUserMo: 10, ai: 'partial' },
    { key: 'bamboo-pro', name: 'BambooHR · Pro', perUserMo: 17, ai: 'partial', aiNote: 'Ask BambooHR' },
    { key: 'bamboo-elite', name: 'BambooHR · Elite', perUserMo: 25, ai: 'partial' },
    { key: 'workday', name: 'Workday (small deployment est.)', perUserMo: 0, flatYr: 35_000, ai: 'partial' },
  ],

  ladder: [
    { vendor: 'GuavaHR', tier: 'server + AI usage', perUserMo: null, tenUsersYr: 400, ai: 'yes', aiNote: 'Draft, Summarize, Ask', vsOurs: '—', ours: true },
    { vendor: 'Zoho People', tier: 'Professional', perUserMo: 4.5, tenUsersYr: 540, ai: 'partial', aiNote: 'Zia', vsOurs: '1.4×' },
    { vendor: 'BambooHR', tier: 'Core', perUserMo: 10, tenUsersYr: 1_200, ai: 'no', vsOurs: '3×' },
    { vendor: 'Rippling', tier: 'HR Cloud', perUserMo: 10, tenUsersYr: 1_200, ai: 'partial', vsOurs: '3×' },
    { vendor: 'BambooHR', tier: 'Pro', perUserMo: 17, tenUsersYr: 2_040, ai: 'partial', aiNote: 'Ask BambooHR', vsOurs: '5×' },
    { vendor: 'BambooHR', tier: 'Elite', perUserMo: 25, tenUsersYr: 3_000, ai: 'partial', vsOurs: '8×' },
    { vendor: 'Workday', tier: 'Small deployment (est.)', perUserMo: null, tenUsersYr: 35_000, ai: 'partial', vsOurs: '88×' },
  ],

  matrix: [
    {
      group: 'People records',
      rows: [
        { capability: 'Full employee master with documents and history', elsewhere: 'Every HR plan' },
        { capability: 'Org chart, reporting lines and cost centres', elsewhere: 'Every HR plan' },
        { capability: 'Custom fields, employee grades and pay bands', elsewhere: 'Higher tiers' },
        { capability: 'Employee self-service portal and mobile', elsewhere: 'Every HR plan' },
      ],
    },
    {
      group: 'Time & attendance',
      rows: [
        { capability: 'Leave types, policies and accrual rules', elsewhere: 'Every HR plan' },
        { capability: 'Attendance, shifts and roster planning', elsewhere: 'Higher tiers / paid add-on' },
        { capability: 'Check-in with geolocation and biometric import', elsewhere: 'Add-on' },
        { capability: 'Holiday lists by location and calendar sync', elsewhere: 'Every HR plan' },
      ],
    },
    {
      group: 'Payroll & expenses',
      rows: [
        { capability: 'Salary structures, components and slabs', elsewhere: 'Payroll add-on or separate product' },
        { capability: 'Payroll runs with payslips and bank files', elsewhere: 'Paid payroll module' },
        { capability: 'Expense claims with approval and reimbursement', elsewhere: 'Higher tiers' },
        { capability: 'Loans, advances and recurring deductions', elsewhere: 'Rarely below enterprise' },
      ],
    },
    {
      group: 'Talent',
      rows: [
        { capability: 'Recruitment pipeline and job openings', elsewhere: 'ATS add-on or higher tier' },
        { capability: 'Structured onboarding and offboarding checklists', elsewhere: 'Higher tiers' },
        { capability: 'Appraisals, goals and 360 feedback', elsewhere: 'Performance add-on' },
        { capability: 'Training records and skill maps', elsewhere: 'Separate LMS' },
      ],
    },
    {
      group: 'AI assistant',
      rows: [
        { capability: 'Draft — offer letters, policy answers, review summaries', elsewhere: 'Ask BambooHR / Zia on higher tiers' },
        { capability: 'Summarize — an employee record or appraisal history', elsewhere: 'Higher tier only' },
        { capability: 'Ask AI — leave balances, headcount, who is on leave today', elsewhere: 'Enterprise AI tier', note: 'Answers only within the asker’s HR permissions.' },
        { capability: 'Applicant screening and shortlist assistance', elsewhere: 'Recruiting add-on' },
      ],
    },
    {
      group: 'Compliance & data',
      rows: [
        { capability: 'Full audit trail on every record change', elsewhere: 'Enterprise tiers' },
        { capability: 'Document expiry tracking and reminders', elsewhere: 'Higher tiers' },
        { capability: 'Role-based access, including manager self-service', elsewhere: 'Every HR plan' },
        { capability: 'Data export and API for payroll and finance', elsewhere: 'Higher tiers' },
      ],
    },
  ],

  diffs: [
    { icon: 'infinity', title: 'Every employee, not every "seat"', body: 'HR software is priced per person on payroll — the one number that only goes up. GuavaHR costs the same at 12 people or 1,200, because the price is the server, not the headcount.' },
    { icon: 'lock', title: 'The most sensitive data you hold, on your cloud', body: 'Salaries, IDs, reviews and medical notes sit in a database on **your** cloud subscription — not a vendor’s multi-tenant system in another jurisdiction.' },
    { icon: 'code', title: 'Your policies, not the vendor’s defaults', body: 'Leave rules, payroll components, approval chains and appraisal forms are configured to how **you** actually run HR, with room to build anything the standard forms cannot express.' },
    { icon: 'sparkles', title: 'AI without an "Ask HR" upgrade', body: 'Drafting letters, summarising records and answering headcount questions cost **a few dollars a month**. BambooHR and Zoho gate their assistants behind their upper tiers.' },
    { icon: 'wallet', title: 'Payroll included, not a bolt-on', body: 'Salary structures and payroll runs ship in the box. Most HR platforms sell payroll as a separate product or a per-employee add-on.' },
    { icon: 'shield', title: 'No renewal, no per-head true-up', body: 'Hiring 30 people mid-year does not trigger a new invoice. You own GuavaHR; the only variable cost is a few dollars of server if usage grows.' },
  ],

  architecture: {
    title: 'How GuavaHR fits together',
    caption: 'Employees and managers work on the left; the HR modules feed a single employee master and policy engine; payroll, automation and AI sit on top; everything runs on your cloud. Hover a box to trace it.',
    layers: ['Where people work', 'Modules', 'Master & policy', 'Payroll & AI', 'Your cloud'],
    nodes: [
      { id: 'ess', label: 'Self-service portal', col: 0, kind: 'channel' },
      { id: 'mgr', label: 'Manager & HR desk', col: 0, kind: 'channel' },
      { id: 'mob', label: 'Mobile check-in', col: 0, kind: 'channel' },
      { id: 'leave', label: 'Leave & attendance', col: 1, kind: 'module' },
      { id: 'recruit', label: 'Recruitment', col: 1, kind: 'module' },
      { id: 'perf', label: 'Appraisals & goals', col: 1, kind: 'module' },
      { id: 'expense', label: 'Expense claims', col: 1, kind: 'module' },
      { id: 'emp', label: 'Employee master', col: 2, kind: 'core' },
      { id: 'policy', label: 'Policy & approval engine', col: 2, kind: 'core' },
      { id: 'pay', label: 'Payroll & salary structures', col: 3, kind: 'automation' },
      { id: 'ai', label: 'AI assistant', col: 3, kind: 'automation' },
      { id: 'vm', label: 'Your cloud VM + database', col: 4, kind: 'cloud' },
    ],
    edges: [
      { from: 'ess', to: 'leave' }, { from: 'ess', to: 'expense' }, { from: 'mob', to: 'leave' },
      { from: 'mgr', to: 'recruit' }, { from: 'mgr', to: 'perf' }, { from: 'mgr', to: 'leave' },
      { from: 'leave', to: 'emp' }, { from: 'recruit', to: 'emp' }, { from: 'perf', to: 'emp' }, { from: 'expense', to: 'emp' },
      { from: 'emp', to: 'policy' },
      { from: 'policy', to: 'pay' }, { from: 'emp', to: 'pay' },
      { from: 'ai', to: 'emp' }, { from: 'ai', to: 'policy' },
      { from: 'pay', to: 'vm' }, { from: 'policy', to: 'vm' }, { from: 'ai', to: 'vm' },
    ],
  },

  modules: [
    { name: 'Employee records', tag: 'Foundation', blurb: 'One place for everything about a person, from joining documents to the org chart.', points: ['Personal, job, salary and bank details with history', 'Document library with expiry reminders', 'Org chart and reporting lines', 'Custom fields, grades and pay bands'] },
    { name: 'Leave & attendance', tag: 'Time', blurb: 'Leave policies, accruals and attendance that managers approve from their phone.', points: ['Leave types with accrual, carry-forward and encashment rules', 'Attendance, shift rosters and overtime', 'Geolocation check-in and biometric import', 'Location-specific holiday calendars'] },
    { name: 'Payroll', tag: 'Pay', blurb: 'Salary structures and payroll runs that produce payslips and bank files — in the box.', points: ['Earning and deduction components with formulas', 'Payroll entry with review and lock', 'Payslips, tax statements and bank advice files', 'Loans, advances and recurring deductions'] },
    { name: 'Recruitment', tag: 'Talent', blurb: 'A hiring pipeline from job opening to offer, with the offer letter drafted for you.', points: ['Job openings tied to headcount plans', 'Applicant pipeline with stages and scorecards', 'Interview scheduling and feedback', 'Offer letters and conversion to employee'] },
    { name: 'Onboarding & appraisals', tag: 'Talent', blurb: 'Structured checklists for joining and leaving, and reviews that actually get done.', points: ['Onboarding and offboarding task templates', 'Goals, KRAs and weighted appraisal cycles', '360 and peer feedback', 'Training records and skill maps'] },
    { name: 'HR analytics', tag: 'Insight', blurb: 'Headcount, attrition, cost and leave trends without exporting to a spreadsheet.', points: ['Headcount and attrition dashboards', 'Payroll cost by department and cost centre', 'Leave liability and attendance trends', 'Scheduled reports to leadership'] },
  ],

  lifecycle: {
    title: 'Hire to exit',
    caption: 'The full employee lifecycle in GuavaHR. Click a stage — every one writes to the same employee record, so nothing is re-keyed.',
    steps: [
      { label: 'Recruit', detail: 'A job opening moves applicants through stages to an offer. AI drafts the offer letter from the role and package.', metric: 'Pipeline → offer' },
      { label: 'Onboard', detail: 'Accepting the offer creates the employee and kicks off the onboarding checklist — documents, assets, access, introductions.', metric: 'Day-one ready' },
      { label: 'Serve', detail: 'The employee books leave, logs attendance, claims expenses and updates details from self-service; managers approve in a tap.', metric: 'Self-service running' },
      { label: 'Appraise', detail: 'Review cycles open with goals and feedback. AI summarises a year of activity so the conversation starts from facts.', metric: 'Reviews completed' },
      { label: 'Pay', detail: 'Payroll pulls attendance, leave, claims and structures, produces payslips and bank files, and posts the cost to finance.', metric: 'Payslips issued' },
      { label: 'Offboard', detail: 'Exit runs the reverse checklist — final settlement, asset return, access removal — with a full audit trail retained.', metric: 'Clean exit' },
    ],
  },

  ai: [
    { name: 'Draft with AI', desc: 'Writes offer letters, policy answers and appraisal summaries from the employee’s own record and your policy set.' },
    { name: 'Summarize', desc: 'Condenses a long employee history or a full appraisal cycle into a few lines for a manager or HR partner.' },
    { name: 'Ask AI', desc: 'Answers plain-English questions — leave balances, who is off this week, headcount by team — only within the asker’s HR permissions.' },
    { name: 'Screening assist', desc: 'Ranks and shortlists applicants against a role’s requirements, with the reasoning shown for a recruiter to check.' },
  ],
};
