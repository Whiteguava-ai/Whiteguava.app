import type { ProductDef } from '../types';

/**
 * GuavaInsights, dashboards, reports and data analysis on a platform you own.
 * Competitor list pricing, September 2026:
 *   Microsoft Power BI Pro $14/user/mo, Premium Per User $24/user/mo.
 *   Tableau Cloud Creator $75/user/mo (annual), Explorer $42, Viewer $15;
 *   Creator is $115/user/mo on the Enterprise edition.
 *   Zoho Analytics runs roughly $24–$455/month by tier; ~$8/user/mo effective.
 *   Looker and ThoughtSpot are custom-quoted; $60,000 and $30,000/year are
 *   conservative stand-ins.
 */
export const insights: ProductDef = {
  key: 'insights',
  name: 'GuavaInsights',
  accent: '#7b3fe4',
  replaces: 'Tableau, Power BI or Looker',

  refName: 'Tableau Creator',
  refPerYear10: 9_000,
  refFiveYear: 45_000,

  serverMo: 32,
  guavaYr: 470,

  plans: [
    { key: 'guava', name: 'GuavaInsights', perUserMo: 0, flatYr: 470, ai: 'yes', aiNote: 'built in', ours: true },
    { key: 'pbi-pro', name: 'Power BI · Pro', perUserMo: 14, ai: 'partial', aiNote: 'Copilot (capacity)' },
    { key: 'zoho', name: 'Zoho Analytics (effective)', perUserMo: 8, ai: 'partial', aiNote: 'Zia' },
    { key: 'pbi-ppu', name: 'Power BI · Premium Per User', perUserMo: 24, ai: 'partial', aiNote: 'Copilot' },
    { key: 'tableau-creator', name: 'Tableau · Creator', perUserMo: 75, ai: 'partial', aiNote: 'Einstein / Pulse' },
    { key: 'thoughtspot', name: 'ThoughtSpot (est.)', perUserMo: 0, flatYr: 30_000, ai: 'yes' },
    { key: 'looker', name: 'Looker (est.)', perUserMo: 0, flatYr: 60_000, ai: 'partial' },
  ],

  ladder: [
    { vendor: 'GuavaInsights', tier: 'server + AI usage', perUserMo: null, tenUsersYr: 470, ai: 'yes', aiNote: 'ask, narrate, alert', vsOurs: 'N/A', ours: true },
    { vendor: 'Zoho Analytics', tier: 'effective per user', perUserMo: 8, tenUsersYr: 960, ai: 'partial', aiNote: 'Zia', vsOurs: '2×' },
    { vendor: 'Power BI', tier: 'Pro', perUserMo: 14, tenUsersYr: 1_680, ai: 'partial', aiNote: 'Copilot needs capacity', vsOurs: '4×' },
    { vendor: 'Power BI', tier: 'Premium Per User', perUserMo: 24, tenUsersYr: 2_880, ai: 'partial', aiNote: 'Copilot', vsOurs: '6×' },
    { vendor: 'Tableau', tier: 'Explorer', perUserMo: 42, tenUsersYr: 5_040, ai: 'partial', vsOurs: '11×' },
    { vendor: 'Tableau', tier: 'Creator', perUserMo: 75, tenUsersYr: 9_000, ai: 'partial', aiNote: 'Pulse', vsOurs: '19×' },
    { vendor: 'ThoughtSpot', tier: 'estimate', perUserMo: null, tenUsersYr: 30_000, ai: 'yes', vsOurs: '64×' },
    { vendor: 'Looker', tier: 'estimate', perUserMo: null, tenUsersYr: 60_000, ai: 'partial', vsOurs: '128×' },
  ],

  matrix: [
    {
      group: 'Data connections',
      rows: [
        { capability: 'Connect to your own database directly', elsewhere: 'Every BI tool' },
        { capability: 'Scheduled sync from apps and APIs into a store', elsewhere: 'Higher tiers / separate ETL' },
        { capability: 'Blend multiple sources in one dataset', elsewhere: 'Creator / Pro tier' },
        { capability: 'Incremental refresh and query caching', elsewhere: 'Premium capacity' },
      ],
    },
    {
      group: 'Modelling & queries',
      rows: [
        { capability: 'Visual query builder and raw SQL side by side', elsewhere: 'Creator tier' },
        { capability: 'Reusable data models with calculated fields', elsewhere: 'Higher tiers' },
        { capability: 'Notebooks for exploratory analysis', elsewhere: 'Rarely available' },
        { capability: 'Parameterised, saved queries', elsewhere: 'Higher tiers' },
      ],
    },
    {
      group: 'Dashboards & reports',
      rows: [
        { capability: 'Interactive dashboards with cross-filtering', elsewhere: 'Every BI tool' },
        { capability: 'Drill-down, drill-through and detail views', elsewhere: 'Creator / Pro tier' },
        { capability: 'Scheduled report delivery by email', elsewhere: 'Pro tier' },
        { capability: 'Threshold alerts on any metric', elsewhere: 'Higher tiers' },
      ],
    },
    {
      group: 'AI assistant',
      rows: [
        { capability: 'Ask a question, get the chart, natural language to query', elsewhere: 'Copilot / Pulse on paid tiers + capacity' },
        { capability: 'Auto-written narrative for a dashboard', elsewhere: 'Higher tier only' },
        { capability: 'Ask AI, follow-up questions over the underlying data', elsewhere: 'Enterprise AI tier' },
        { capability: 'Anomaly detection and explained spikes', elsewhere: 'Premium / enterprise' },
      ],
    },
    {
      group: 'Sharing & governance',
      rows: [
        { capability: 'Row-level security tied to the viewer', elsewhere: 'Higher tiers' },
        { capability: 'Public links and embedded dashboards', elsewhere: 'Higher tiers / per-view pricing' },
        { capability: 'Viewer access with no per-seat charge', elsewhere: 'Viewer licences on every platform' },
        { capability: 'Full audit of who viewed and changed what', elsewhere: 'Enterprise tiers' },
      ],
    },
  ],

  diffs: [
    { icon: 'infinity', title: 'Everyone can look, for free', body: 'Power BI and Tableau charge for Viewer seats, the people who only read a dashboard. On GuavaInsights the whole company can view, embed and subscribe at no extra cost.' },
    { icon: 'database', title: 'It sits next to your data, on your cloud', body: 'The analytics layer runs on **your** cloud alongside your database, no extracting sensitive data into a vendor’s multi-tenant service to chart it.' },
    { icon: 'sparkles', title: 'Natural-language analysis without a capacity SKU', body: 'Ask-in-English, dashboard narratives and anomaly explanations run on metered API calls, **a few dollars a month**. Copilot needs a Fabric capacity; Pulse needs a plan.' },
    { icon: 'code', title: 'SQL when you need it, not walled off', body: 'Raw SQL, notebooks and custom models are first-class, not a pro-tier unlock. Your analysts are not boxed into a drag-and-drop editor.' },
    { icon: 'chart', title: 'Embed anywhere with no per-view meter', body: 'Put a dashboard in your product or portal for customers. Most platforms price embedded analytics per view or per external user.' },
    { icon: 'shield', title: 'No renewal, no seat audit', body: 'Analyst leaves, three join, nothing to reconcile with a vendor. You own GuavaInsights; the server is the only cost.' },
  ],

  architecture: {
    title: 'From your data to a dashboard',
    caption: 'Viewers and embeds are on the left; the dashboard and chart layer sits on a query engine and reusable models; sync and AI feed it; your database or warehouse is on the right. Hover a box to trace it.',
    layers: ['Where people look', 'Dashboards & charts', 'Query & models', 'Sync & AI', 'Your data'],
    nodes: [
      { id: 'view', label: 'Dashboard viewers', col: 0, kind: 'channel' },
      { id: 'embed', label: 'Embedded in your product', col: 0, kind: 'channel' },
      { id: 'sub', label: 'Scheduled subscriptions', col: 0, kind: 'channel' },
      { id: 'dash', label: 'Dashboards', col: 1, kind: 'module' },
      { id: 'chart', label: 'Charts & visuals', col: 1, kind: 'module' },
      { id: 'note', label: 'Notebooks', col: 1, kind: 'module' },
      { id: 'query', label: 'Query engine', col: 2, kind: 'core' },
      { id: 'model', label: 'Data models & metrics', col: 2, kind: 'core' },
      { id: 'rls', label: 'Row-level security', col: 2, kind: 'core' },
      { id: 'sync', label: 'Scheduled sync', col: 3, kind: 'automation' },
      { id: 'ai', label: 'AI analyst', col: 3, kind: 'automation' },
      { id: 'db', label: 'Your DB / warehouse', col: 4, kind: 'cloud' },
    ],
    edges: [
      { from: 'view', to: 'dash' }, { from: 'embed', to: 'dash' }, { from: 'sub', to: 'dash' },
      { from: 'dash', to: 'chart' }, { from: 'chart', to: 'query' }, { from: 'note', to: 'query' },
      { from: 'query', to: 'model' }, { from: 'model', to: 'rls' },
      { from: 'sync', to: 'db' }, { from: 'query', to: 'db' }, { from: 'ai', to: 'query' }, { from: 'ai', to: 'model' },
      { from: 'rls', to: 'db' }, { from: 'sync', to: 'model' },
    ],
  },

  modules: [
    { name: 'Data sources & sync', tag: 'Ingest', blurb: 'Point GuavaInsights at your database, or schedule pulls from the apps around it.', points: ['Direct connection to your production database', 'Scheduled sync from APIs and SaaS exports into a store', 'Multiple sources blended into one dataset', 'Incremental refresh and caching'] },
    { name: 'Query & models', tag: 'Model', blurb: 'A visual builder for quick answers, raw SQL and notebooks for deep ones.', points: ['Drag-and-drop query builder', 'Raw SQL editor with saved, parameterised queries', 'Reusable models with calculated fields and metrics', 'Notebooks for exploratory analysis'] },
    { name: 'Charts & dashboards', tag: 'Build', blurb: 'Turn a query into a visual, and visuals into a dashboard people actually open.', points: ['Full chart library with formatting control', 'Interactive dashboards with cross-filtering', 'Drill-down, drill-through and detail views', 'Parameters and date-range controls'] },
    { name: 'Reports & alerts', tag: 'Deliver', blurb: 'Push the number to the person instead of waiting for them to check.', points: ['Scheduled dashboard and report emails', 'Threshold alerts on any metric', 'Digest summaries written by AI', 'Export to CSV, Excel and PDF'] },
    { name: 'Sharing & security', tag: 'Govern', blurb: 'Everyone can view; each viewer only sees their slice.', points: ['Row-level security tied to the logged-in user', 'Public links and embedded dashboards', 'Unlimited viewers at no per-seat cost', 'Full audit of views and edits'] },
    { name: 'AI analyst', tag: 'Assist', blurb: 'Ask a question in English and get a chart, a narrative, or a heads-up.', points: ['Natural-language to query and chart', 'Auto-written narrative for any dashboard', 'Follow-up Q&A over the underlying data', 'Anomaly detection with an explanation'] },
  ],

  lifecycle: {
    title: 'Question to answer, on repeat',
    caption: 'How a business question becomes a dashboard everyone trusts. Click a step, AI can shortcut the middle.',
    steps: [
      { label: 'Connect', detail: 'Point GuavaInsights at your database or schedule a sync from the apps that hold the data.', metric: 'Source live' },
      { label: 'Model', detail: 'Shape the raw tables into a model with the metrics and calculated fields the business actually uses.', metric: 'Metrics defined' },
      { label: 'Query', detail: 'Build the query visually, in SQL, or by asking the AI analyst in plain English.', metric: 'Answer found' },
      { label: 'Visualize', detail: 'Turn the query into charts and lay them out on a dashboard with filters and drill-downs.', metric: 'Dashboard built' },
      { label: 'Share', detail: 'Publish it, set row-level security so each viewer sees their slice, and embed it wherever people need it.', metric: 'In front of the team' },
      { label: 'Alert', detail: 'Set thresholds so the dashboard tells people when something moves, with an AI note on why.', metric: 'Watching for you' },
    ],
  },

  ai: [
    { name: 'Ask in English', desc: 'Type a question about your data and get the query and the chart back, ready to drop on a dashboard.' },
    { name: 'Narrate', desc: 'Writes a plain-language summary of what a dashboard is showing this week, for the top of a report or an email digest.' },
    { name: 'Ask AI', desc: 'Follow-up questions over the underlying data, "why did this dip?", "which region drove it?", answered within each viewer’s access.' },
    { name: 'Anomaly alerts', desc: 'Flags metrics that move outside their normal range and offers a first explanation for a human to confirm.' },
  ],
};
