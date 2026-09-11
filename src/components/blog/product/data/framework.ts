import type { ProductDef } from '../types';

/**
 * GuavaFramework, the low-code application platform every other Guava product
 * is built on. Competitor list pricing, September 2026:
 *   Retool $12/user/mo (Team), $65/user/mo (Business).
 *   Microsoft Power Apps Premium $20/user/mo.
 *   OutSystems entry around $36,300/year for ~100 internal users; enterprise custom.
 *   Mendix is custom-quoted; independent comparisons put equivalent builds at
 *   5–10× transparent platforms, $50,000/year used here as a conservative stand-in.
 *   Bubble app-based plans run roughly $32–$134/month per app.
 */
export const framework: ProductDef = {
  key: 'framework',
  name: 'GuavaFramework',
  accent: '#4b4bd6',
  replaces: 'OutSystems, Mendix or Retool',

  refName: 'Retool Business (10 builders)',
  refPerYear10: 7_800,
  refFiveYear: 39_000,

  serverMo: 30,
  guavaYr: 430,

  plans: [
    { key: 'guava', name: 'GuavaFramework', perUserMo: 0, flatYr: 430, ai: 'yes', aiNote: 'built in', ours: true },
    { key: 'retool-team', name: 'Retool · Team', perUserMo: 12, ai: 'partial', aiNote: 'add-on credits' },
    { key: 'powerapps', name: 'Power Apps · Premium', perUserMo: 20, ai: 'partial', aiNote: 'Copilot' },
    { key: 'retool-biz', name: 'Retool · Business', perUserMo: 65, ai: 'partial', aiNote: 'add-on credits' },
    { key: 'bubble', name: 'Bubble (per app)', perUserMo: 0, flatYr: 1_900, ai: 'partial' },
    { key: 'outsystems', name: 'OutSystems (entry)', perUserMo: 0, flatYr: 36_300, ai: 'partial', aiNote: 'Mentor' },
    { key: 'mendix', name: 'Mendix (equivalent est.)', perUserMo: 0, flatYr: 50_000, ai: 'partial' },
  ],

  ladder: [
    { vendor: 'GuavaFramework', tier: 'server + AI usage', perUserMo: null, tenUsersYr: 430, ai: 'yes', aiNote: 'schema, scripts, Ask', vsOurs: 'N/A', ours: true },
    { vendor: 'Bubble', tier: 'Growth (per app)', perUserMo: null, tenUsersYr: 1_900, ai: 'partial', vsOurs: '4×' },
    { vendor: 'Retool', tier: 'Team', perUserMo: 12, tenUsersYr: 1_440, ai: 'partial', aiNote: 'credits', vsOurs: '3×' },
    { vendor: 'Power Apps', tier: 'Premium', perUserMo: 20, tenUsersYr: 2_400, ai: 'partial', aiNote: 'Copilot', vsOurs: '6×' },
    { vendor: 'Retool', tier: 'Business', perUserMo: 65, tenUsersYr: 7_800, ai: 'partial', aiNote: 'credits', vsOurs: '18×' },
    { vendor: 'OutSystems', tier: 'Entry (~100 users)', perUserMo: null, tenUsersYr: 36_300, ai: 'partial', aiNote: 'Mentor', vsOurs: '84×' },
    { vendor: 'Mendix', tier: 'Equivalent build (est.)', perUserMo: null, tenUsersYr: 50_000, ai: 'partial', vsOurs: '116×' },
  ],

  matrix: [
    {
      group: 'Data model',
      rows: [
        { capability: 'Define objects, fields and links with no migration scripts', elsewhere: 'Every low-code platform' },
        { capability: 'Child tables, linked records and computed fields', elsewhere: 'Higher tiers' },
        { capability: 'Naming series, auto-numbering and validation rules', elsewhere: 'Studio / pro tier' },
        { capability: 'Schema versioning that travels with the app package', elsewhere: 'Enterprise tiers' },
      ],
    },
    {
      group: 'Screens & UX',
      rows: [
        { capability: 'Auto-generated forms and list views for every object', elsewhere: 'Every platform' },
        { capability: 'Kanban, calendar, gantt and dashboard views', elsewhere: 'Higher tiers' },
        { capability: 'Client-side scripting for custom behaviour', elsewhere: 'Pro / developer tier' },
        { capability: 'Print and PDF format designer', elsewhere: 'Add-on or custom code elsewhere' },
      ],
    },
    {
      group: 'Logic & automation',
      rows: [
        { capability: 'Workflow with states, transitions and approvals', elsewhere: 'Higher tiers' },
        { capability: 'Server scripts and scheduled background jobs', elsewhere: 'Business / enterprise tier' },
        { capability: 'Event hooks on create, update and delete', elsewhere: 'Pro tier' },
        { capability: 'Notification and email rules', elsewhere: 'Every platform' },
      ],
    },
    {
      group: 'AI assistant',
      rows: [
        { capability: 'Draft a data model from a plain-English description', elsewhere: 'Copilot / Mentor on paid tiers' },
        { capability: 'Script and formula assistance in the editor', elsewhere: 'Higher tiers' },
        { capability: 'Ask AI, questions over the data in any app you build', elsewhere: 'Rarely available' },
        { capability: 'Generate print formats and report layouts', elsewhere: 'Not offered' },
      ],
    },
    {
      group: 'Integration & platform',
      rows: [
        { capability: 'Auto REST API for every object, plus webhooks', elsewhere: 'Higher tiers' },
        { capability: 'Role and permission engine down to the field', elsewhere: 'Enterprise tiers' },
        { capability: 'Full audit trail and record version history', elsewhere: 'Enterprise tiers' },
        { capability: 'Export the whole app and its data at any time', elsewhere: 'Limited or not available' },
      ],
    },
  ],

  diffs: [
    { icon: 'infinity', title: 'Builders and users, uncounted', body: 'Every platform above meters either the people who build apps or the people who use them, or both. On GuavaFramework the server cost is the same whether five people log in or five hundred.' },
    { icon: 'code', title: 'It is the same platform we build on', body: 'GuavaCRM, GuavaERP and the rest are built on this. You get the **exact tool** WhiteGuava uses, not a cut-down public edition.' },
    { icon: 'database', title: 'The app and its data are a database you hold', body: 'Everything you build lives on **your** cloud with full SQL access and a complete export. No platform can switch off an app you own.' },
    { icon: 'sparkles', title: 'AI in the editor, priced at cost', body: 'Model drafting, script help and Ask-AI over app data run on metered API calls, **a few dollars a month**, not a Copilot seat add-on.' },
    { icon: 'blocks', title: 'No ceiling on customization', body: 'Server scripts, custom endpoints, background jobs and native code are all fair game. Low-code platforms wall these off behind a developer tier, or forbid them.' },
    { icon: 'rocket', title: 'One server, any number of apps', body: 'Build an internal portal, a field app and a partner extranet on the **same** virtual machine. Not one licence per app, per environment, per user.' },
  ],

  architecture: {
    title: 'What runs when someone opens an app you built',
    caption: 'A request comes in on the left, passes through the screen and logic layers, hits the model and permission engine, and reads or writes the database on your cloud. Hover a box to trace the path.',
    layers: ['Client', 'App layer', 'Model & permissions', 'Automation & AI', 'Your cloud'],
    nodes: [
      { id: 'web', label: 'Web & mobile client', col: 0, kind: 'channel' },
      { id: 'api', label: 'REST API consumers', col: 0, kind: 'channel' },
      { id: 'forms', label: 'Forms & list views', col: 1, kind: 'module' },
      { id: 'views', label: 'Kanban / calendar / dashboards', col: 1, kind: 'module' },
      { id: 'scripts', label: 'Client scripts', col: 1, kind: 'module' },
      { id: 'model', label: 'Object & field model', col: 2, kind: 'core' },
      { id: 'perm', label: 'Permission engine', col: 2, kind: 'core' },
      { id: 'audit', label: 'Audit & versioning', col: 2, kind: 'core' },
      { id: 'wf', label: 'Workflow & server scripts', col: 3, kind: 'automation' },
      { id: 'jobs', label: 'Scheduled jobs', col: 3, kind: 'automation' },
      { id: 'ai', label: 'AI assistant', col: 3, kind: 'automation' },
      { id: 'db', label: 'Your cloud VM + database', col: 4, kind: 'cloud' },
    ],
    edges: [
      { from: 'web', to: 'forms' }, { from: 'web', to: 'views' }, { from: 'web', to: 'scripts' },
      { from: 'api', to: 'model' },
      { from: 'forms', to: 'model' }, { from: 'views', to: 'model' }, { from: 'scripts', to: 'model' },
      { from: 'model', to: 'perm' }, { from: 'model', to: 'audit' },
      { from: 'wf', to: 'model' }, { from: 'jobs', to: 'model' }, { from: 'ai', to: 'model' },
      { from: 'perm', to: 'db' }, { from: 'audit', to: 'db' }, { from: 'wf', to: 'db' }, { from: 'jobs', to: 'db' }, { from: 'ai', to: 'db' },
    ],
  },

  modules: [
    { name: 'Data modeling', tag: 'Foundation', blurb: 'Describe the objects your business cares about and the platform builds the tables, links and validation.', points: ['Fields, child tables and linked records with no SQL', 'Computed and fetched fields', 'Auto-numbering, naming series and uniqueness rules', 'Schema changes with no migration downtime'] },
    { name: 'Forms & views', tag: 'Interface', blurb: 'Every object gets a form and a list for free; layouts and extra views are drag-and-drop.', points: ['Sectioned forms with tabs and conditional fields', 'List, report, Kanban, calendar and gantt views', 'Saved filters shared across a team', 'Bulk edit and inline editing'] },
    { name: 'Permission engine', tag: 'Governance', blurb: 'Control who sees and does what, from whole objects down to a single field.', points: ['Role-based rules with user and document conditions', 'Field-level read and write control', 'Sharing and assignment of individual records', 'Permission preview, see the app as any role'] },
    { name: 'Workflow & scripting', tag: 'Logic', blurb: 'State machines for the process, server scripts for everything the UI cannot express.', points: ['States, transitions and approval steps', 'Server scripts on document events', 'Scheduled background jobs and queues', 'Client scripts for dynamic form behaviour'] },
    { name: 'API & webhooks', tag: 'Integration', blurb: 'Every object is an API the moment you create it.', points: ['Auto REST endpoints for read and write', 'Outgoing webhooks on any event', 'Token and key authentication', 'Rate limiting and request logging'] },
    { name: 'Reports & print formats', tag: 'Output', blurb: 'Turn data into a report a manager reads or a document a customer receives.', points: ['Query and script report builder', 'CSV and Excel export on every list', 'Pixel-level print and PDF designer', 'Scheduled report emails'] },
  ],

  lifecycle: {
    title: 'Idea to running app',
    caption: 'The path from a rough idea to something your team uses every day. Click through, the AI assistant helps at the first and last steps especially.',
    steps: [
      { label: 'Model', detail: 'Describe the objects and links, or let AI draft the schema from a paragraph. The tables, forms and lists exist immediately.', metric: 'Schema live' },
      { label: 'Screens', detail: 'Arrange fields, add the views the team needs, and set which fields show for which role.', metric: 'UI ready' },
      { label: 'Rules', detail: 'Add validation, a workflow with approval steps, and the permission rules that decide who can do what.', metric: 'Process enforced' },
      { label: 'Automate', detail: 'Wire in server scripts, scheduled jobs, notification rules and webhooks to the systems around it.', metric: 'Hands-off tasks running' },
      { label: 'Deploy', detail: 'Package the app and push it to your cloud VM. No environment licence, no per-user activation.', metric: 'In production' },
      { label: 'Iterate', detail: 'Change a field, add a report, adjust a rule, with a full audit trail and version history behind every change.', metric: 'Shipping continuously' },
    ],
  },

  ai: [
    { name: 'Draft with AI', desc: 'Describe a process in plain English and get a first-pass data model, objects, fields and links, to refine instead of starting from a blank screen.' },
    { name: 'Script assist', desc: 'In-editor help writing server and client scripts, formulas and report queries against your own schema.' },
    { name: 'Ask AI', desc: 'A sidebar assistant that answers questions over the live data in any app you build, respecting each user’s permissions.' },
    { name: 'Layout generation', desc: 'Generates print formats and report layouts from a description, ready to tweak in the designer.' },
  ],
};
