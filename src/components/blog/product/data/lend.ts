import type { ProductDef } from '../types';

/**
 * GuavaLend, loans, repayments and borrower accounts on a platform you own.
 * The loan-management market publishes very little pricing. Independent 2026
 * comparisons and reseller quotes put the picture at roughly:
 *   Bryt from around $27/month for very small lenders.
 *   LoanPro from around $1,500/month base plus a per-active-loan fee.
 *   TurnKey Lender commonly $2,500–$5,000/month for small-to-mid lenders.
 *   Mambu and nCino are enterprise core-banking platforms in the six figures a year.
 * Figures below are cited as estimates, not vendor list prices.
 */
export const lend: ProductDef = {
  key: 'lend',
  name: 'GuavaLend',
  accent: '#1d7d5b',
  replaces: 'TurnKey Lender, LoanPro or nCino',

  refName: 'TurnKey Lender (typical mid-market, est.)',
  refPerYear10: 36_000,
  refFiveYear: 180_000,

  serverMo: 35,
  guavaYr: 520,

  plans: [
    { key: 'guava', name: 'GuavaLend', perUserMo: 0, flatYr: 520, ai: 'yes', aiNote: 'built in', ours: true },
    { key: 'bryt', name: 'Bryt (small lenders)', perUserMo: 0, flatYr: 324, ai: 'no' },
    { key: 'loanpro', name: 'LoanPro (base, est.)', perUserMo: 0, flatYr: 18_000, ai: 'partial' },
    { key: 'turnkey', name: 'TurnKey Lender (est.)', perUserMo: 0, flatYr: 36_000, ai: 'partial', aiNote: 'decisioning AI' },
    { key: 'mambu', name: 'Mambu (est.)', perUserMo: 0, flatYr: 120_000, ai: 'partial' },
    { key: 'ncino', name: 'nCino (est.)', perUserMo: 0, flatYr: 150_000, ai: 'partial' },
  ],

  ladder: [
    { vendor: 'GuavaLend', tier: 'server + AI usage', perUserMo: null, tenUsersYr: 520, ai: 'yes', aiNote: 'Draft, Summarize, Ask, risk flags', vsOurs: 'N/A', ours: true },
    { vendor: 'Bryt', tier: 'small lenders', perUserMo: null, tenUsersYr: 324, ai: 'no', vsOurs: '0.6×' },
    { vendor: 'LoanPro', tier: 'base (est.)', perUserMo: null, tenUsersYr: 18_000, ai: 'partial', aiNote: '+ per active loan', vsOurs: '35×' },
    { vendor: 'TurnKey Lender', tier: 'small-to-mid (est.)', perUserMo: null, tenUsersYr: 36_000, ai: 'partial', aiNote: 'decisioning AI', vsOurs: '69×' },
    { vendor: 'Mambu', tier: 'core platform (est.)', perUserMo: null, tenUsersYr: 120_000, ai: 'partial', vsOurs: '231×' },
    { vendor: 'nCino', tier: 'lending cloud (est.)', perUserMo: null, tenUsersYr: 150_000, ai: 'partial', vsOurs: '288×' },
  ],

  matrix: [
    {
      group: 'Products & origination',
      rows: [
        { capability: 'Loan products with configurable rate, tenure and fee rules', elsewhere: 'Every lending platform' },
        { capability: 'Application capture with document checklist', elsewhere: 'Origination module' },
        { capability: 'Co-borrowers, guarantors and collateral records', elsewhere: 'Higher tiers' },
        { capability: 'Branch, agent and channel attribution', elsewhere: 'Higher tiers' },
      ],
    },
    {
      group: 'Underwriting',
      rows: [
        { capability: 'Scorecards and rule-based decisioning', elsewhere: 'Decisioning add-on' },
        { capability: 'Bureau and bank-statement data hooks', elsewhere: 'Integration add-on' },
        { capability: 'Approval workflow with limits and overrides', elsewhere: 'Higher tiers' },
        { capability: 'Sanction letter generation', elsewhere: 'Higher tiers' },
      ],
    },
    {
      group: 'Servicing',
      rows: [
        { capability: 'Repayment schedules, EMI, bullet, step-up, custom', elsewhere: 'Every lending platform' },
        { capability: 'Daily interest and penalty accrual to a ledger', elsewhere: 'Core servicing' },
        { capability: 'Part-payment, prepayment and restructuring', elsewhere: 'Higher tiers' },
        { capability: 'Foreclosure and write-off handling', elsewhere: 'Higher tiers' },
      ],
    },
    {
      group: 'Collections & portal',
      rows: [
        { capability: 'Ageing buckets and delinquency dashboards', elsewhere: 'Collections module' },
        { capability: 'Follow-up queues with call and promise logging', elsewhere: 'Collections module' },
        { capability: 'Borrower portal, statements, payments, requests', elsewhere: 'Higher tiers / add-on' },
        { capability: 'Reminder messages by SMS, email and WhatsApp', elsewhere: 'Add-on' },
      ],
    },
    {
      group: 'AI assistant',
      rows: [
        { capability: 'Draft, borrower notices, reminders and responses', elsewhere: 'Rarely available' },
        { capability: 'Summarize, a borrower account and its risk picture', elsewhere: 'Not offered' },
        { capability: 'Ask AI, portfolio questions on overdue, exposure, concentration', elsewhere: 'Enterprise analytics tier' },
        { capability: 'Repayment-risk flags on accounts trending to default', elsewhere: 'Enterprise decisioning' },
      ],
    },
    {
      group: 'Compliance & data',
      rows: [
        { capability: 'Full audit trail on every account event', elsewhere: 'Enterprise tiers' },
        { capability: 'Regulatory and portfolio report templates', elsewhere: 'Reporting module' },
        { capability: 'Role-based access by branch and product', elsewhere: 'Higher tiers' },
        { capability: 'Complete data export and API', elsewhere: 'Limited on hosted platforms' },
      ],
    },
  ],

  diffs: [
    { icon: 'infinity', title: 'No per-loan or per-user meter', body: 'Hosted lending platforms bill a base fee plus a charge per active loan or per user. GuavaLend costs the same whether the book is 500 loans or 50,000.' },
    { icon: 'lock', title: 'Your loan book stays on your cloud', body: 'Borrower data, the loan ledger and every account event sit on **your** cloud subscription, critical when a regulator asks where the data lives.' },
    { icon: 'code', title: 'Built to your product rules and your regulator', body: 'Rate rules, accrual conventions, sanction formats and report templates are configured to how **you** lend and where, not squeezed into a US-shaped hosted product.' },
    { icon: 'sparkles', title: 'AI on the portfolio without an analytics tier', body: 'Borrower summaries, portfolio Q&A and risk flags run on **a few dollars a month** in usage, not a six-figure decisioning or analytics module.' },
    { icon: 'wallet', title: 'Borrower portal and messaging included', body: 'Statements, online payments and reminder messages ship in the box. Hosted platforms sell the portal and the messaging as add-ons.' },
    { icon: 'shield', title: 'No renewal, no repricing as the book grows', body: 'Doubling originations does not double the software bill. You own GuavaLend; the server is the only fixed cost.' },
  ],

  architecture: {
    title: 'How a loan is tracked, day by day',
    caption: 'Borrowers and agents are on the left; the lending modules feed one loan ledger and accrual engine; automation and AI act on it; everything runs on your cloud. Hover a box to trace it.',
    layers: ['Where people work', 'Lending modules', 'Loan ledger & accrual', 'Automation & AI', 'Your cloud'],
    nodes: [
      { id: 'portal', label: 'Borrower portal', col: 0, kind: 'channel' },
      { id: 'agent', label: 'Loan officer desk', col: 0, kind: 'channel' },
      { id: 'api', label: 'Bureau / bank data', col: 0, kind: 'channel' },
      { id: 'orig', label: 'Origination', col: 1, kind: 'module' },
      { id: 'uw', label: 'Underwriting', col: 1, kind: 'module' },
      { id: 'serv', label: 'Servicing', col: 1, kind: 'module' },
      { id: 'coll', label: 'Collections', col: 1, kind: 'module' },
      { id: 'ledger', label: 'Loan ledger', col: 2, kind: 'core' },
      { id: 'accrual', label: 'Interest & penalty accrual', col: 2, kind: 'core' },
      { id: 'sched', label: 'Reminders & schedulers', col: 3, kind: 'automation' },
      { id: 'ai', label: 'AI assistant & risk flags', col: 3, kind: 'automation' },
      { id: 'vm', label: 'Your cloud VM + database', col: 4, kind: 'cloud' },
    ],
    edges: [
      { from: 'portal', to: 'serv' }, { from: 'portal', to: 'orig' },
      { from: 'agent', to: 'orig' }, { from: 'agent', to: 'coll' }, { from: 'agent', to: 'uw' },
      { from: 'api', to: 'uw' },
      { from: 'orig', to: 'ledger' }, { from: 'uw', to: 'ledger' }, { from: 'serv', to: 'ledger' }, { from: 'coll', to: 'ledger' },
      { from: 'ledger', to: 'accrual' },
      { from: 'sched', to: 'ledger' }, { from: 'ai', to: 'ledger' }, { from: 'ai', to: 'accrual' },
      { from: 'accrual', to: 'vm' }, { from: 'ledger', to: 'vm' }, { from: 'sched', to: 'vm' }, { from: 'ai', to: 'vm' },
    ],
  },

  modules: [
    { name: 'Loan products', tag: 'Setup', blurb: 'Define every kind of loan you offer once, with the rules that govern it.', points: ['Rate, tenure, fee and charge configuration', 'Repayment methods, EMI, bullet, step-up, custom', 'Eligibility and limit rules', 'Product-specific document checklists'] },
    { name: 'Origination', tag: 'Onboard', blurb: 'From enquiry to a completed application ready for a decision.', points: ['Application capture with co-borrowers and guarantors', 'Collateral and security records', 'Document upload against a checklist', 'Branch, agent and channel attribution'] },
    { name: 'Underwriting', tag: 'Decide', blurb: 'Score, review and approve with a trail behind every decision.', points: ['Scorecards and rule-based decisioning', 'Bureau and bank-statement data hooks', 'Approval workflow with limits and overrides', 'Sanction letter generation'] },
    { name: 'Servicing', tag: 'Run', blurb: 'The daily engine, schedules, accrual and every change to a live loan.', points: ['Disbursement, full or tranche', 'Daily interest and penalty accrual to a ledger', 'Part-payment, prepayment and restructuring', 'Foreclosure and write-off handling'] },
    { name: 'Collections', tag: 'Recover', blurb: 'See what is overdue and work it systematically.', points: ['Ageing buckets and delinquency dashboards', 'Follow-up queues with call and promise-to-pay logging', 'Automated reminders by SMS, email and WhatsApp', 'Legal and settlement tracking'] },
    { name: 'Borrower portal & reports', tag: 'Serve & report', blurb: 'A self-service front for borrowers and a reporting back for regulators.', points: ['Statements, schedules and online payment', 'Requests, statement, foreclosure quote, restructuring', 'Regulatory and portfolio report templates', 'Full audit trail and data export'] },
  ],

  lifecycle: {
    title: 'Apply to close',
    caption: 'The life of a loan in GuavaLend. Click a step, every event posts to the same ledger, so the book is always current.',
    steps: [
      { label: 'Apply', detail: 'An application is captured with borrowers, collateral and documents, from the portal or a loan officer.', metric: 'Application logged' },
      { label: 'Underwrite', detail: 'Scorecards and bureau data produce a recommendation; a reviewer approves, adjusts or declines with a reason.', metric: 'Decision recorded' },
      { label: 'Approve', detail: 'The sanction is generated with final terms, and the borrower accepts.', metric: 'Sanctioned' },
      { label: 'Disburse', detail: 'Funds go out in full or in tranches, the repayment schedule is fixed, and the loan ledger opens.', metric: 'Ledger open' },
      { label: 'Repay', detail: 'Interest and penalties accrue daily; payments are matched to the schedule; overdue accounts flow into collections with AI risk flags.', metric: 'Book current' },
      { label: 'Close', detail: 'The final payment, prepayment or write-off closes the loan, with the full account history retained for audit.', metric: 'Loan closed' },
    ],
  },

  ai: [
    { name: 'Draft with AI', desc: 'Writes borrower notices, overdue reminders and responses to portal requests from the account’s own history.' },
    { name: 'Summarize', desc: 'Collapses a borrower account, loans, payments, promises, disputes, and its current risk picture into a short brief.' },
    { name: 'Ask AI', desc: 'Answers portfolio questions in plain English, total overdue, exposure by product, concentration by region, within each user’s branch and product access.' },
    { name: 'Risk flags', desc: 'Marks accounts whose payment behaviour is trending toward default, with the signals shown, for a collections officer to act on.' },
  ],
};
