import { SERVICE_PATHS } from '@/lib/site';
import type { BlogPost } from '../types';

export const oneTimePaymentLoanManagement: BlogPost = {
  slug: 'one-time-payment-loan-management',
  path: '/blog/one-time-payment-loan-management',
  title: 'One-Time-Payment Loan Software: Own GuavaLend Instead of Renting TurnKey Lender or LoanPro',
  metaTitle: 'One-Time-Payment Loan Software: Own GuavaLend Instead of Renting TurnKey Lender (2026)',
  metaDescription:
    'GuavaLend runs loan origination, servicing, repayments and collections on your own cloud — buy once, own it, AI built in. See the 5-year cost next to TurnKey Lender, LoanPro, Mambu and nCino.',
  excerpt:
    'Loan-management platforms bill a base fee plus a charge per active loan or per user, and grow the invoice as your book grows. GuavaLend is a one-time setup, then about $35/month for the server, with products, origination, underwriting, servicing, accrual, collections and a borrower portal — plus an AI assistant.',
  category: 'Lending',
  tags: [
    'one-time payment loan software',
    'loan management software you own',
    'self-hosted loan management',
    'TurnKey Lender alternative',
    'LoanPro alternative',
    'loan servicing software',
    'lending software total cost of ownership',
  ],
  publishedAt: '2026-09-10',
  updatedAt: '2026-09-10',
  readingTimeMinutes: 13,
  h1: 'GuavaLend: The Loan-Management Platform You Buy Once Instead of Renting Per Loan',
  subtitle:
    'The same products, origination, underwriting, servicing, accrual and collections as the hosted platforms — set up once, owned by you, running on a ~$35/month server instead of a base fee plus a per-loan meter.',
  body: [
    {
      type: 'p',
      text: 'Loan-management software is rented, and the meter is unusually punishing: a monthly base fee plus a charge per active loan or per user, on top. The market publishes almost no pricing, but independent 2026 comparisons and reseller quotes put LoanPro near a $1,500/month base plus a per-loan fee, and TurnKey Lender commonly at $2,500–$5,000 a month for a small-to-mid lender. Mambu and nCino are core-banking platforms in the six figures a year. Your book grows and the software bill grows with it.',
    },
    {
      type: 'p',
      text: 'GuavaLend is the opposite model. WhiteGuava sets it up on your own cloud, configures it to your loan products, accrual conventions and regulator, hands it over, and then it is yours: no per-loan meter, no per-user licence, no renewal, and the only ongoing cost is roughly $35 a month for the server. It covers the whole lending job — configurable loan products, application capture and origination, scorecard and rule-based underwriting, disbursement, EMI and custom repayment schedules, daily interest and penalty accrual to a ledger, part-payment and restructuring, ageing and collections queues, a borrower portal, and regulatory reporting — plus an AI assistant built directly in.',
    },
    { type: 'embed', component: 'productCostCalculator', product: 'lend', caption: 'The loan-management market publishes very little pricing. Figures shown are estimates from independent 2026 comparisons and reseller quotes, not vendor list prices. The GuavaLend bar is the server cost only — setup is a separate one-time fee.' },
    { type: 'h2', text: 'What a per-loan meter is really charging you for', id: 'what-youre-paying-for' },
    {
      type: 'p',
      text: 'Repayment schedules, accrual and collections are mature and broadly the same across the serious platforms. What the base-plus-per-loan price rents is hosting, the vendor’s margin, and a licence that scales precisely with the size of your book — the one number a lender most wants to grow.',
    },
    {
      type: 'p',
      text: 'The model also assumes a US-shaped product. Accrual conventions, sanction-letter formats, statutory report layouts and messaging channels are hard to bend, and the decisioning and analytics that would tell you where your risk is concentrated sit in the enterprise tier.',
    },
    { type: 'embed', component: 'productRentVsOwn', product: 'lend', caption: 'The meter runs on a typical mid-market loan-management SaaS estimate for a small-to-mid lender.' },
    { type: 'h2', text: 'Every option, side by side', id: 'cost-comparison' },
    {
      type: 'p',
      text: 'This is the price picture from independent estimates, annualised, with the basis each one scales on. The final column divides each annual total by GuavaLend’s ~$520/year server-and-AI cost.',
    },
    {
      type: 'table',
      headers: ['Platform', 'Basis', 'Per year (est.)', 'AI', 'vs GuavaLend'],
      rows: [
        ['GuavaLend (self-hosted)', 'flat server', '~$520', 'Built in (~$3–5/mo usage)', '—'],
        ['Bryt', 'small lenders', '~$324', 'No', '0.6×'],
        ['LoanPro', 'base + per active loan', '~$18,000+', 'Partial', '35×'],
        ['TurnKey Lender', 'small-to-mid', '~$36,000', 'Decisioning AI', '69×'],
        ['Mambu', 'core platform', '~$120,000', 'Partial', '231×'],
        ['nCino', 'lending cloud', '~$150,000', 'Partial', '288×'],
      ],
    },
    {
      type: 'p',
      text: 'Bryt is cheaper at a very small scale, with a correspondingly limited feature set and no AI. Everything with real servicing depth carries a base fee and a per-loan meter — and GuavaLend replaces both with a flat server cost.',
    },
    { type: 'h2', text: 'How a loan is tracked, day by day', id: 'architecture' },
    {
      type: 'p',
      text: 'Every module feeds one loan ledger and an accrual engine that runs interest and penalties daily, on your cloud. The diagram shows the layers — where people work, the lending modules, the ledger and accrual, automation and AI, and your cloud.',
    },
    { type: 'embed', component: 'productArchitecture', product: 'lend' },
    { type: 'h2', text: 'Everything GuavaLend does out of the box', id: 'features' },
    {
      type: 'p',
      text: 'Every module below is part of GuavaLend from day one — including the borrower portal and reminder messaging that hosted platforms sell as add-ons. Explore what each covers, then check the feature matrix.',
    },
    { type: 'embed', component: 'productModuleExplorer', product: 'lend' },
    { type: 'embed', component: 'productFeatureMatrix', product: 'lend' },
    { type: 'h2', text: 'Apply to close, working', id: 'demo' },
    {
      type: 'p',
      text: 'This is the life of a loan in GuavaLend. Every event posts to the same ledger, so the book is always current and the collections queue is always right.',
    },
    { type: 'embed', component: 'productLifecycle', product: 'lend' },
    { type: 'h2', text: 'What renting TurnKey Lender, LoanPro or nCino will never give you', id: 'only-here' },
    {
      type: 'p',
      text: 'Feature lists converge. What separates an owned lending platform from a rented one is structural — whether the licence scales with your book, where the loan data lives when a regulator asks, and whether the rules fit how you actually lend.',
    },
    { type: 'embed', component: 'productDifferentiators', product: 'lend' },
    { type: 'h2', text: 'The AI is built in — not an analytics or decisioning tier', id: 'ai' },
    { type: 'p', text: 'WhiteGuava adds the AI features a lending team actually uses straight onto GuavaLend as a custom module:' },
    {
      type: 'list',
      items: [
        'Draft with AI — writes borrower notices, overdue reminders and responses to portal requests from the account’s own history.',
        'Summarize — collapses a borrower account (loans, payments, promises, disputes) and its current risk picture into a short brief.',
        'Ask AI — answers portfolio questions in plain English (total overdue, exposure by product, concentration by region) within each user’s branch and product access.',
        'Risk flags — marks accounts whose payment behaviour is trending toward default, with the signals shown, for a collections officer to act on.',
      ],
    },
    {
      type: 'callout',
      title: 'Why this matters',
      text: 'The portfolio intelligence that tells you where your risk sits is exactly what the hosted platforms reserve for their enterprise tier. Because GuavaLend’s source is yours, it runs on a few dollars a month of API usage.',
    },
    { type: 'h2', text: 'Who GuavaLend is built for', id: 'who-its-for' },
    { type: 'p', text: 'GuavaLend is the right call for lenders that want to own the system their book runs on:' },
    {
      type: 'list',
      items: [
        'NBFCs, microfinance institutions, and digital lenders that do not want the software bill tied to originations.',
        'Lenders with data-residency or regulatory requirements about where the loan book is stored.',
        'Businesses with loan products, accrual conventions or statutory formats that a US-shaped hosted platform cannot express.',
        'Lenders that want portfolio-level AI without a six-figure decisioning module.',
        'Anyone who has modelled five years of a base fee plus a per-loan meter against their growth plan.',
      ],
    },
    { type: 'h2', text: 'How you get GuavaLend', id: 'how-to-get' },
    { type: 'p', text: 'It is a one-time engagement, not a subscription:' },
    {
      type: 'list',
      ordered: true,
      items: [
        'WhiteGuava deploys GuavaLend on your cloud account (Azure, AWS or your choice), branded for your business.',
        'We configure your loan products, rate and fee rules, accrual conventions, underwriting scorecards, approval limits, sanction and statement formats, collections rules, messaging channels and roles, migrate your live book, and switch on the AI module.',
        'We hand over full admin access, the database and documentation. From that point the software is yours.',
        'Ongoing, you pay only for the server — around $35 a month — plus a few dollars of AI usage. Support and future changes are optional.',
      ],
    },
    {
      type: 'callout',
      title: 'The five-year picture',
      text: 'A TurnKey Lender-class contract: roughly $180,000 over five years, rented, and rising as the book grows. GuavaLend: a one-time setup, then about $2,100 in server cost over the same five years, flat regardless of loan count.',
    },
  ],
  faqs: [
    {
      q: 'Is GuavaLend really a one-time payment?',
      a: 'The platform is a one-time setup engagement — WhiteGuava deploys, configures and hands it over, and then you own it. The only recurring cost is the server, around $35 a month, plus a few dollars of AI usage. There is no per-loan meter and no per-user licence.',
    },
    {
      q: 'Does the cost rise as our loan book grows?',
      a: 'No. The cost is the server, not the number of active loans. A much larger book may need a slightly bigger server — a few extra dollars a month — but there is no per-loan charge.',
    },
    {
      q: 'Can GuavaLend handle our accrual conventions and statutory reports?',
      a: 'Yes. Interest and penalty accrual conventions, sanction-letter and statement formats, and regulatory report layouts are configured during setup, and the source is yours if something specific to your regulator is needed.',
    },
    {
      q: 'Does it include a borrower portal?',
      a: 'Yes — statements, repayment schedules, online payment, and requests such as foreclosure quotes and restructuring, all in the box. Hosted platforms typically sell the portal as an add-on.',
    },
    {
      q: 'Does GuavaLend have AI?',
      a: 'Yes — borrower communications drafting, account and risk summaries, plain-English portfolio questions, and repayment-risk flags. It runs on a metered model at roughly $3 to $5 a month for a small team.',
    },
    {
      q: 'Where does the loan book live?',
      a: 'On your own cloud subscription, in a database you control, with full SQL access, full export and the source code — which is often the deciding factor for a regulated lender.',
    },
    {
      q: 'Can it integrate with bureaus and payment rails?',
      a: 'Yes. Bureau and bank-statement data hooks, and disbursement and collection integrations, are part of the setup and can be extended because the source is yours.',
    },
  ],
  related: [
    { href: '/blog/one-time-payment-erp', title: 'One-Time-Payment ERP', desc: 'GuavaERP — loan interest income and fees can post straight to its ledger.' },
    { href: '/blog/one-time-payment-crm', title: 'One-Time-Payment CRM', desc: 'GuavaCRM — manage loan enquiries and borrower relationships upstream.' },
    { href: SERVICE_PATHS.software, title: 'AI Software Development', desc: 'How WhiteGuava builds, configures and deploys regulated platforms like GuavaLend.' },
    { href: SERVICE_PATHS.cloud, title: 'Cloud & Deployment', desc: 'Secure, compliant infrastructure for a loan book.' },
  ],
  cta: {
    title: 'Want a lending platform your business owns outright?',
    text: 'WhiteGuava sets up GuavaLend on your cloud, configures your products and accrual rules, migrates your book, switches on the AI, and hands it over. One-time setup, then about $35 a month with no per-loan meter.',
    label: 'Get a GuavaLend quote',
    href: '/#contact',
  },
};
