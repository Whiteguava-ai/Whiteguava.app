import { SERVICE_PATHS } from '@/lib/site';
import type { BlogPost } from '../types';

export const oneTimePaymentHr: BlogPost = {
  slug: 'one-time-payment-hr-software',
  path: '/blog/one-time-payment-hr-software',
  title: 'One-Time-Payment HR Software: Own GuavaHR Instead of Renting BambooHR or Workday',
  metaTitle: 'Self-Hosted HR Software & BambooHR Alternative You Own: GuavaHR',
  metaDescription:
    'A self-hosted BambooHR alternative you own: GuavaHR runs records, leave, attendance and payroll on your own cloud, bought once, no per-employee fee. See the 5-year cost vs BambooHR and Workday.',
  excerpt:
    'HR software is priced per employee — the one number that only goes up. GuavaHR is a one-time setup, then about $28/month for the server, with records, onboarding, leave, attendance, payroll, recruitment and appraisals, plus an AI assistant. Here is the full comparison, with calculators you can run yourself.',
  category: 'HR',
  tags: [
    'BambooHR alternative',
    'self-hosted HR software',
    'self-hosted payroll software',
    'flat fee HR software',
    'HR software you own',
    'HR software without per-employee pricing',
    'Workday alternative small business',
    'one-time payment HR software',
  ],
  publishedAt: '2026-09-10',
  updatedAt: '2026-09-10',
  readingTimeMinutes: 12,
  h1: 'GuavaHR: The HR System You Buy Once Instead of Renting Per Employee',
  subtitle:
    'The same records, leave, attendance, payroll, recruitment and appraisals as the big HR platforms — set up once, owned by you, and running on a ~$28/month server instead of a per-head subscription that never stops.',
  body: [
    {
      type: 'p',
      text: 'Every mainstream HR platform is rented, and it is rented by the head. BambooHR lists Core at $10, Pro at $17 and Elite at $25 per employee per month, with a flat rate starting at $250/month for teams of 25 or fewer. Workday is enterprise-only and custom-quoted well into five figures a year. Every person you hire is another line on the invoice, forever, and at the end you own nothing.',
    },
    {
      type: 'p',
      text: 'GuavaHR is the opposite model. WhiteGuava sets it up on your own cloud, configures it to your leave rules, pay structures and approval chains, hands it over, and then it is yours: no per-employee licence, no renewal, and the only ongoing cost is roughly $28 a month for the server. It covers the whole employee lifecycle — records and documents, onboarding and offboarding checklists, leave and holiday policies, attendance and shifts, expense claims, payroll with salary structures and bank files, recruitment, appraisals and goals, employee self-service, and HR analytics — plus an AI assistant built directly in.',
    },
    {
      type: 'callout',
      title: 'In short',
      text: 'HR software is priced per employee — the one number that only goes up. GuavaHR is a one-time setup, then about $28/month for the server (roughly $1,700 over five years), flat regardless of headcount. It covers records, onboarding, leave, attendance, payroll, recruitment and appraisals, with the AI assistant included rather than gated to an upper tier.',
    },
    { type: 'embed', component: 'productCostCalculator', product: 'hr', caption: 'List pricing, September 2026. Workday has no public list; the figure shown is a conservative stand-in for a small deployment. The GuavaHR bar is the server cost only — setup is a separate one-time fee.' },
    { type: 'h2', text: 'What per-employee HR pricing is really charging you for', id: 'what-youre-paying-for' },
    {
      type: 'p',
      text: 'The core feature set of an HRMS is mature and broadly the same everywhere. What the per-head price rents is the hosting, the vendor’s margin, the support organisation, and the right to keep your own people data accessible next month. Stop paying and access ends, even though every record in there is about your staff.',
    },
    {
      type: 'p',
      text: 'Per-employee pricing also compounds badly. A growing team crosses a plan’s minimum, then its next tier, and a busy hiring quarter shows up as a bigger renewal. Payroll is frequently a separate product or a per-employee add-on. And the AI assistant — the one feature everyone now wants — sits in the upper tier on BambooHR and Zoho alike.',
    },
    { type: 'embed', component: 'productRentVsOwn', product: 'hr', caption: 'The meter runs on the BambooHR flat rate for a small team; per-employee plans cost more as you grow.' },
    { type: 'h2', text: 'Every plan, side by side', id: 'cost-comparison' },
    {
      type: 'p',
      text: 'This is the price ladder for a 10-person team at list price, annual billing, before tax. The final column divides each annual total by GuavaHR’s ~$400/year server-and-AI cost — and the gap widens with every hire.',
    },
    {
      type: 'table',
      headers: ['Plan', 'Per employee / mo', '10 people / year', 'AI assistant', 'vs GuavaHR'],
      rows: [
        ['GuavaHR (self-hosted)', '—', '~$400', 'Built in (~$3–5/mo usage)', '—'],
        ['Zoho People · Professional', '$4.50', '$540', 'Zia (higher tiers)', '1.4×'],
        ['BambooHR · Core', '$10', '$1,200', 'No', '3×'],
        ['Rippling · HR', '~$10', '$1,200', 'Partial', '3×'],
        ['BambooHR · Pro', '$17', '$2,040', 'Ask BambooHR', '5×'],
        ['BambooHR · Elite', '$25', '$3,000', 'Partial', '8×'],
        ['Workday · small deployment (est.)', '—', '~$35,000', 'Partial', '88×'],
      ],
    },
    {
      type: 'p',
      text: 'At 10 people the cheapest paid option is close on price — but it has no payroll, no AI, and its bill scales with your headcount while GuavaHR’s does not. Run the calculator at 50 or 100 people to see the real divergence.',
    },
    { type: 'h2', text: 'How GuavaHR fits together', id: 'architecture' },
    {
      type: 'p',
      text: 'Every module in GuavaHR writes to a single employee master and a policy engine that knows your leave rules, approval limits and pay structures. Book leave once and the balance, the manager’s approval queue, the attendance record and payroll all move together. The diagram shows the layers.',
    },
    { type: 'embed', component: 'productArchitecture', product: 'hr' },
    { type: 'h2', text: 'Everything GuavaHR does out of the box', id: 'features' },
    {
      type: 'p',
      text: 'Every module below is part of GuavaHR from day one — including payroll, which most platforms sell separately. Explore what each one covers, then check the feature matrix for the tier or add-on that charges for it elsewhere.',
    },
    { type: 'embed', component: 'productModuleExplorer', product: 'hr' },
    { type: 'embed', component: 'productFeatureMatrix', product: 'hr' },
    { type: 'h2', text: 'Hire to exit, working', id: 'demo' },
    {
      type: 'p',
      text: 'This is the full employee lifecycle in GuavaHR. Every stage writes to the same employee record, so an offer becomes an employee becomes a payslip with nothing re-keyed.',
    },
    { type: 'embed', component: 'productLifecycle', product: 'hr' },
    { type: 'h2', text: 'What renting BambooHR, Workday or Rippling will never give you', id: 'only-here' },
    {
      type: 'p',
      text: 'Feature lists converge. What separates an owned HR system from a rented one is structural — where the most sensitive data your company holds actually lives, and whether the price moves when you grow.',
    },
    { type: 'embed', component: 'productDifferentiators', product: 'hr' },
    { type: 'h2', text: 'The AI is built in — not an "Ask HR" upgrade', id: 'ai' },
    { type: 'p', text: 'WhiteGuava adds the AI features an HR team actually uses straight onto GuavaHR as a custom module:' },
    {
      type: 'list',
      items: [
        'Draft with AI — writes offer letters, policy answers and appraisal summaries from the employee’s own record and your policy set.',
        'Summarize — condenses a long employee history or a full appraisal cycle into a few lines for a manager or HR partner.',
        'Ask AI — answers plain-English questions like leave balances, who is off this week, or headcount by team, only within the asker’s HR permissions.',
        'Screening assist — ranks and shortlists applicants against a role, with the reasoning shown for a recruiter to check.',
      ],
    },
    {
      type: 'callout',
      title: 'Why this matters',
      text: 'BambooHR gates its assistant to Pro; Zoho gates Zia to its upper tiers. Because GuavaHR’s source is yours, the assistant is just a feature — priced at what the API costs, not what a vendor can charge for it.',
    },
    {
      type: 'p',
      text: 'GuavaHR is one of ten applications in the [Guava Product Suite](/guava) — the same buy-once, own-it model applied to [accounting and operations](/blog/one-time-payment-erp), [staff training](/blog/one-time-payment-lms) and [project work](/blog/one-time-payment-project-management).',
    },
    { type: 'h2', text: 'Who GuavaHR is built for', id: 'who-its-for' },
    { type: 'p', text: 'GuavaHR is the right call for teams that want to own the system their people data lives in:' },
    {
      type: 'list',
      items: [
        'Growing companies — 20 to 500 people — that do not want the HR bill to rise every time they hire.',
        'Businesses that must be able to say exactly where employee data is stored and who can reach it.',
        'Teams that want records, leave, attendance and payroll in one system instead of three subscriptions and a spreadsheet.',
        'Companies with leave rules, pay structures or statutory requirements that generic HR products cannot quite express.',
        'Anyone who has priced five years of per-employee HR software against their hiring plan.',
      ],
    },
    { type: 'h2', text: 'How you get GuavaHR', id: 'how-to-get' },
    { type: 'p', text: 'It is a one-time engagement, not a subscription:' },
    {
      type: 'list',
      ordered: true,
      items: [
        'WhiteGuava deploys GuavaHR on your cloud account (Azure, AWS or your choice), branded for your business.',
        'We set up your leave types and accrual rules, holiday calendars, salary structures, approval chains, appraisal cycles and roles, import your employee master, and switch on the AI module.',
        'We hand over full admin access, the database and documentation. From that point the software is yours.',
        'Ongoing, you pay only for the server — around $28 a month — plus a few dollars of AI usage. Support and future changes are optional.',
      ],
    },
    {
      type: 'callout',
      title: 'The five-year picture',
      text: 'BambooHR Pro for a 30-person team: roughly $30,000 over five years, rented, and rising as you hire. GuavaHR: a one-time setup, then about $1,700 in server cost over the same five years, flat regardless of headcount.',
    },
  ],
  faqs: [
    {
      q: 'Is GuavaHR really a one-time payment?',
      a: 'The HR system is a one-time setup engagement — WhiteGuava deploys, configures and hands it over, and then you own it. The only recurring cost is the server, around $28 a month, plus a few dollars of AI usage. There is no per-employee licence and no annual renewal.',
    },
    {
      q: 'Does GuavaHR include payroll?',
      a: 'Yes. Salary structures with earning and deduction components, payroll runs, payslips, tax statements and bank advice files are part of the system, along with loans, advances and recurring deductions. Most HR platforms sell payroll as a separate product.',
    },
    {
      q: 'Where does employee data live?',
      a: 'On your own cloud subscription, in a database you control, with full SQL access and export. That is often the deciding factor for companies with data-residency or audit requirements.',
    },
    {
      q: 'Can GuavaHR handle our specific leave and attendance rules?',
      a: 'Yes. Leave types, accrual, carry-forward and encashment rules, shift rosters, overtime, and location-specific holiday calendars are all configured during setup, and the source is yours if something unusual is needed.',
    },
    {
      q: 'Does GuavaHR have AI?',
      a: 'Yes — Draft with AI, Summarize, Ask AI and applicant screening assistance, all respecting each user’s HR permissions. They run on a metered model at roughly $3 to $5 a month for a small team, with no separate AI tier.',
    },
    {
      q: 'Do we pay more as we hire?',
      a: 'No. The cost is the server, not the headcount. Adding a department or a hundred people does not change the licence, because there is no licence.',
    },
    {
      q: 'What if we need changes later?',
      a: 'Because the source is yours, GuavaHR can be extended — new workflows, new statutory reports, new AI features. WhiteGuava offers ongoing support and development, but it is optional, not a contract.',
    },
  ],
  related: [
    { href: '/blog/one-time-payment-crm', title: 'One-Time-Payment CRM', desc: 'The same own-it model for sales and pipeline with GuavaCRM.' },
    { href: '/blog/one-time-payment-erp', title: 'One-Time-Payment ERP', desc: 'GuavaERP for accounting, inventory and operations — payroll posts straight to its ledger.' },
    { href: '/blog/one-time-payment-lms', title: 'One-Time-Payment LMS', desc: 'GuavaLearn for staff training and compliance courses on your own cloud.' },
    { href: SERVICE_PATHS.software, title: 'AI Software Development', desc: 'How WhiteGuava builds, configures and deploys systems like GuavaHR.' },
  ],
  cta: {
    title: 'Want an HR system your company owns outright?',
    text: 'WhiteGuava sets up GuavaHR on your cloud, configures your policies and payroll, imports your employee master, switches on the AI, and hands it over. One-time setup, then about $28 a month with no per-employee fees.',
    label: 'Get a GuavaHR quote',
    href: '/#contact',
  },
  productSchema: {
    name: 'GuavaHR',
    applicationCategory: 'BusinessApplication',
    description:
      'A self-hosted HR system for records, leave, attendance, payroll, recruitment and appraisals, deployed on your own cloud and owned outright — instead of per-employee BambooHR or Workday pricing.',
  },
};
