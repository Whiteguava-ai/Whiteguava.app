import type { ProductDef } from '../types';

/**
 * GuavaBuilder, build websites and pages visually on a platform you own.
 * Competitor list pricing, September 2026:
 *   Webflow site plans from $14/month, Premium around $39/month; Workspace seats
 *   from $16 to $39 per seat per month; Agency Workspace $35/month.
 *   Wix Studio site plans roughly $27–$159/month.
 *   Framer from $10–$40/month per site plus seats.
 *   Squarespace $16–$52/month per site.
 *   Reference scenario: a small team running about five sites on Webflow with a
 *   shared workspace ≈ $150/month.
 */
export const builder: ProductDef = {
  key: 'builder',
  name: 'GuavaBuilder',
  accent: '#1f7ab5',
  replaces: 'Webflow, Wix Studio or Framer',

  refName: 'Webflow (small team, ~5 sites)',
  refPerYear10: 1_800,
  refFiveYear: 9_000,

  serverMo: 20,
  guavaYr: 280,

  plans: [
    { key: 'guava', name: 'GuavaBuilder', perUserMo: 0, flatYr: 280, ai: 'yes', aiNote: 'built in', ours: true },
    { key: 'framer', name: 'Framer · one site', perUserMo: 0, flatYr: 180, ai: 'partial' },
    { key: 'squarespace', name: 'Squarespace · one site', perUserMo: 0, flatYr: 276, ai: 'partial' },
    { key: 'wix', name: 'Wix Studio · one site', perUserMo: 0, flatYr: 324, ai: 'partial' },
    { key: 'webflow-seat', name: 'Webflow · workspace seats', perUserMo: 23, ai: 'partial', aiNote: 'AI credits' },
    { key: 'webflow-team', name: 'Webflow · ~5 sites + team', perUserMo: 0, flatYr: 1_800, ai: 'partial', aiNote: 'AI credits' },
  ],

  ladder: [
    { vendor: 'GuavaBuilder', tier: 'server + AI usage', perUserMo: null, tenUsersYr: 280, ai: 'yes', aiNote: 'copy, layout, SEO', vsOurs: 'N/A', ours: true },
    { vendor: 'Framer', tier: 'one site', perUserMo: null, tenUsersYr: 180, ai: 'partial', vsOurs: '0.6× per site' },
    { vendor: 'Squarespace', tier: 'Business, one site', perUserMo: null, tenUsersYr: 276, ai: 'partial', vsOurs: '1× per site' },
    { vendor: 'Wix Studio', tier: 'one site', perUserMo: null, tenUsersYr: 324, ai: 'partial', vsOurs: '1.2× per site' },
    { vendor: 'Webflow', tier: 'Premium site, one site', perUserMo: null, tenUsersYr: 468, ai: 'partial', aiNote: 'AI credits', vsOurs: '1.7× per site' },
    { vendor: 'Webflow', tier: 'workspace seat', perUserMo: 23, tenUsersYr: 2_760, ai: 'partial', aiNote: 'AI credits', vsOurs: '10× at 10 seats' },
    { vendor: 'Webflow', tier: '~5 sites + team', perUserMo: null, tenUsersYr: 1_800, ai: 'partial', vsOurs: '6×' },
  ],

  matrix: [
    {
      group: 'Building',
      rows: [
        { capability: 'Visual canvas with real HTML/CSS box model', elsewhere: 'Webflow / Wix Studio' },
        { capability: 'Reusable components with overridable content', elsewhere: 'Higher tiers' },
        { capability: 'Global design tokens, colour, type, spacing', elsewhere: 'Higher tiers' },
        { capability: 'Breakpoints and responsive control', elsewhere: 'Every builder' },
      ],
    },
    {
      group: 'Content',
      rows: [
        { capability: 'CMS collections with fields, references and filtering', elsewhere: 'CMS / Premium tier' },
        { capability: 'Dynamic pages generated from a collection', elsewhere: 'CMS tier' },
        { capability: 'Editor role for non-designers to update copy', elsewhere: 'Extra seat cost' },
        { capability: 'Media library with responsive image handling', elsewhere: 'Every builder' },
      ],
    },
    {
      group: 'Publishing',
      rows: [
        { capability: 'Staging and one-click publish with rollback', elsewhere: 'Higher tiers' },
        { capability: 'Custom domain, SSL and redirects', elsewhere: 'Every paid plan' },
        { capability: 'Multiple sites managed from one place', elsewhere: 'Per-site plan on every builder' },
        { capability: 'Export the full HTML, CSS and assets', elsewhere: 'Webflow paid workspace only; not on Wix' },
      ],
    },
    {
      group: 'AI assistant',
      rows: [
        { capability: 'Draft, section copy and layout from a prompt', elsewhere: 'AI credits, capped per plan' },
        { capability: 'Summarize, a content inventory across the site', elsewhere: 'Not offered' },
        { capability: 'Ask AI, questions over your own site content and CMS', elsewhere: 'Not offered' },
        { capability: 'Generate alt text and SEO meta in bulk', elsewhere: 'Partial, higher tiers' },
      ],
    },
    {
      group: 'Fundamentals',
      rows: [
        { capability: 'Per-page SEO controls, title, meta, canonical, schema', elsewhere: 'Every builder (varies)' },
        { capability: 'Forms with submissions stored and emailed', elsewhere: 'Every paid plan' },
        { capability: 'Custom code embeds, head, body, per page', elsewhere: 'Higher tiers' },
        { capability: 'Full site and content export at any time', elsewhere: 'Limited or unavailable' },
      ],
    },
  ],

  diffs: [
    { icon: 'infinity', title: 'Sites, pages and editors, all uncounted', body: 'Every builder charges per site, and Webflow charges per editor seat on top. GuavaBuilder runs any number of sites, pages and editors on one server.' },
    { icon: 'code', title: 'You own the output, not just the design', body: 'The full HTML, CSS and assets are yours, hosted on **your** cloud. Wix locks you in entirely; Webflow only exports on a paid workspace.' },
    { icon: 'database', title: 'Your content is a database you control', body: 'CMS collections, form submissions and media live on **your** cloud subscription with full export, not on a platform that can change its plans under you.' },
    { icon: 'sparkles', title: 'AI copy and layout without a credit cap', body: 'Section drafting, bulk alt text and SEO meta run on metered API calls, **a few dollars a month**, instead of a monthly AI-credit allowance you run out of.' },
    { icon: 'palette', title: 'A real design system, not a theme', body: 'Global tokens, components and breakpoints behave like production front-end code, because that is what they compile to.' },
    { icon: 'shield', title: 'No renewal, no per-site upgrade', body: 'Launch a campaign microsite on a Friday without adding a plan. You own GuavaBuilder; the server is the only cost.' },
  ],

  architecture: {
    title: 'From the canvas to a visitor’s browser',
    caption: 'Visitors hit fast static pages on the left; the builder, components and CMS sit behind them; build and AI compile it; it all runs on your cloud. Hover a box to trace it.',
    layers: ['Visitors', 'Build modules', 'Page & content data', 'Compile & AI', 'Your cloud'],
    nodes: [
      { id: 'visitor', label: 'Site visitors', col: 0, kind: 'channel' },
      { id: 'editor', label: 'Designers & editors', col: 0, kind: 'channel' },
      { id: 'canvas', label: 'Visual canvas', col: 1, kind: 'module' },
      { id: 'components', label: 'Components & tokens', col: 1, kind: 'module' },
      { id: 'forms', label: 'Forms', col: 1, kind: 'module' },
      { id: 'pages', label: 'Page tree', col: 2, kind: 'core' },
      { id: 'cms', label: 'CMS collections', col: 2, kind: 'core' },
      { id: 'media', label: 'Media library', col: 2, kind: 'core' },
      { id: 'build', label: 'Publish & staging', col: 3, kind: 'automation' },
      { id: 'ai', label: 'AI copy & SEO', col: 3, kind: 'automation' },
      { id: 'cdn', label: 'Your cloud VM + CDN', col: 4, kind: 'cloud' },
    ],
    edges: [
      { from: 'visitor', to: 'pages' }, { from: 'visitor', to: 'forms' },
      { from: 'editor', to: 'canvas' }, { from: 'editor', to: 'cms' },
      { from: 'canvas', to: 'pages' }, { from: 'canvas', to: 'components' }, { from: 'components', to: 'pages' },
      { from: 'pages', to: 'cms' }, { from: 'pages', to: 'media' },
      { from: 'build', to: 'pages' }, { from: 'ai', to: 'pages' }, { from: 'ai', to: 'cms' },
      { from: 'build', to: 'cdn' }, { from: 'pages', to: 'cdn' }, { from: 'media', to: 'cdn' }, { from: 'forms', to: 'cdn' }, { from: 'ai', to: 'cdn' },
    ],
  },

  modules: [
    { name: 'Visual canvas', tag: 'Build', blurb: 'Design in the real box model, so what you build is what ships, no theme abstraction in the way.', points: ['Flexbox and grid layout with visual controls', 'Breakpoints from mobile up', 'Class-based styling that maps to CSS', 'Keyboard shortcuts and copy-paste across pages'] },
    { name: 'Components & tokens', tag: 'Design system', blurb: 'Build once, reuse everywhere, and change the whole site from one place.', points: ['Reusable components with per-instance content overrides', 'Global tokens for colour, type and spacing', 'Nested components and slots', 'Style guide page generated from your tokens'] },
    { name: 'CMS collections', tag: 'Content', blurb: 'Structured content that powers dynamic pages and lists.', points: ['Collections with typed fields and references', 'Dynamic pages generated per item', 'Filtering, sorting and pagination on lists', 'Editor role for non-designers'] },
    { name: 'Forms & media', tag: 'Content', blurb: 'Capture leads and manage assets without a third-party tool.', points: ['Forms with validation, storage and email/webhook delivery', 'Spam protection', 'Media library with automatic responsive images', 'Alt-text management'] },
    { name: 'Publishing', tag: 'Ship', blurb: 'A safe path from draft to live, with a way back.', points: ['Staging environment separate from production', 'One-click publish with version history and rollback', 'Custom domains, SSL and redirect rules', 'Scheduled publishing'] },
    { name: 'SEO & code', tag: 'Fundamentals', blurb: 'The technical controls a real site needs, not hidden behind a tier.', points: ['Per-page title, meta, canonical and Open Graph', 'JSON-LD schema blocks', 'Custom code in head and body, per page or site-wide', 'Clean, semantic markup output'] },
  ],

  lifecycle: {
    title: 'Design to published, and back again',
    caption: 'How a page goes from idea to live and keeps improving. Click a step, AI helps at the start and the SEO pass.',
    steps: [
      { label: 'Design', detail: 'Lay out the page on the canvas using your components and tokens, or ask AI for a first-draft section from a prompt.', metric: 'Layout drafted' },
      { label: 'Build', detail: 'Refine the structure, wire up components, and set responsive behaviour across breakpoints.', metric: 'Responsive & clean' },
      { label: 'Content', detail: 'Fill in copy and media, or connect the page to a CMS collection so it fills itself.', metric: 'Content in place' },
      { label: 'Preview', detail: 'Check it on staging, run the AI SEO pass for titles, meta and alt text, and share a link for sign-off.', metric: 'Ready for review' },
      { label: 'Publish', detail: 'One click pushes it live to your cloud and CDN, with the previous version kept for rollback.', metric: 'Live' },
      { label: 'Update', detail: 'Editors change copy directly, designers adjust layout, and every change is versioned.', metric: 'Iterating safely' },
    ],
  },

  ai: [
    { name: 'Draft with AI', desc: 'Generates section copy and a first-pass layout from a short prompt, using your components and tokens so it fits the design.' },
    { name: 'Summarize', desc: 'Produces a content inventory across the whole site, every page, its purpose and its last update, for a redesign or audit.' },
    { name: 'Ask AI', desc: 'Answers questions over your own site content and CMS data, useful for large sites where nobody remembers every page.' },
    { name: 'SEO pass', desc: 'Generates titles, meta descriptions, Open Graph text and image alt text in bulk, for review before publish.' },
  ],
};
