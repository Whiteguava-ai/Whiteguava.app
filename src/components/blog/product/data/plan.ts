import type { ProductDef } from '../types';

/**
 * GuavaPlan — plan work, share updates and track progress on a tool you own.
 * Competitor list pricing, September 2026:
 *   Asana Starter $10.99, Advanced $24.99 per user per month (annual).
 *   monday.com Basic $12, Standard $17, Pro $19 per seat per month (annual).
 *   ClickUp Unlimited around $7, Business around $12 per user per month.
 *   Notion Business $20 per user per month (AI included at this tier).
 *   Basecamp Pro Unlimited is a flat $299/month ($3,588/year) for any number of users.
 */
export const plan: ProductDef = {
  key: 'plan',
  name: 'GuavaPlan',
  accent: '#d1791f',
  replaces: 'Asana, monday.com or Basecamp',

  refName: 'Asana Advanced',
  refPerYear10: 2_999,
  refFiveYear: 14_995,

  serverMo: 22,
  guavaYr: 300,

  plans: [
    { key: 'guava', name: 'GuavaPlan', perUserMo: 0, flatYr: 300, ai: 'yes', aiNote: 'built in', ours: true },
    { key: 'clickup', name: 'ClickUp · Unlimited', perUserMo: 7, ai: 'partial', aiNote: 'AI add-on' },
    { key: 'asana-starter', name: 'Asana · Starter', perUserMo: 10.99, ai: 'no' },
    { key: 'monday-std', name: 'monday.com · Standard', perUserMo: 17, ai: 'partial', aiNote: 'AI credits' },
    { key: 'monday-pro', name: 'monday.com · Pro', perUserMo: 19, ai: 'partial', aiNote: 'AI credits' },
    { key: 'notion-biz', name: 'Notion · Business', perUserMo: 20, ai: 'yes', aiNote: 'AI included here' },
    { key: 'asana-adv', name: 'Asana · Advanced', perUserMo: 24.99, ai: 'partial', aiNote: 'AI Studio' },
    { key: 'basecamp', name: 'Basecamp · Pro Unlimited', perUserMo: 0, flatYr: 3_588, ai: 'no' },
  ],

  ladder: [
    { vendor: 'GuavaPlan', tier: 'server + AI usage', perUserMo: null, tenUsersYr: 300, ai: 'yes', aiNote: 'updates, summaries, catch-up', vsOurs: '—', ours: true },
    { vendor: 'ClickUp', tier: 'Unlimited', perUserMo: 7, tenUsersYr: 840, ai: 'partial', aiNote: 'AI add-on', vsOurs: '3×' },
    { vendor: 'Asana', tier: 'Starter', perUserMo: 10.99, tenUsersYr: 1_319, ai: 'no', vsOurs: '4×' },
    { vendor: 'monday.com', tier: 'Standard', perUserMo: 17, tenUsersYr: 2_040, ai: 'partial', aiNote: 'AI credits', vsOurs: '7×' },
    { vendor: 'monday.com', tier: 'Pro', perUserMo: 19, tenUsersYr: 2_280, ai: 'partial', aiNote: 'AI credits', vsOurs: '8×' },
    { vendor: 'Notion', tier: 'Business', perUserMo: 20, tenUsersYr: 2_400, ai: 'yes', aiNote: 'AI at this tier', vsOurs: '8×' },
    { vendor: 'Asana', tier: 'Advanced', perUserMo: 24.99, tenUsersYr: 2_999, ai: 'partial', aiNote: 'AI Studio', vsOurs: '10×' },
    { vendor: 'Basecamp', tier: 'Pro Unlimited (flat)', perUserMo: null, tenUsersYr: 3_588, ai: 'no', vsOurs: '12×' },
  ],

  matrix: [
    {
      group: 'Structure',
      rows: [
        { capability: 'Teams, projects and sub-projects', elsewhere: 'Every tool' },
        { capability: 'Tasks with assignees, dates, dependencies and subtasks', elsewhere: 'Every paid plan' },
        { capability: 'List, board, table, timeline and calendar views', elsewhere: 'Higher tiers for timeline' },
        { capability: 'Custom fields and task types', elsewhere: 'Higher tiers' },
      ],
    },
    {
      group: 'Communication',
      rows: [
        { capability: 'Project discussions and threaded updates', elsewhere: 'Basecamp / higher tiers' },
        { capability: 'Comments, @mentions and reactions on any item', elsewhere: 'Every paid plan' },
        { capability: 'Docs and wiki pages alongside the work', elsewhere: 'Higher tiers / separate tool' },
        { capability: 'A daily digest instead of constant notifications', elsewhere: 'Basecamp; rare elsewhere' },
      ],
    },
    {
      group: 'Tracking',
      rows: [
        { capability: 'Milestones and progress roll-up', elsewhere: 'Higher tiers' },
        { capability: 'Portfolio view across many projects', elsewhere: 'Advanced / Pro tier' },
        { capability: 'Workload view by person', elsewhere: 'Advanced / Pro tier' },
        { capability: 'Activity feed and full history per project', elsewhere: 'Every paid plan' },
      ],
    },
    {
      group: 'AI assistant',
      rows: [
        { capability: 'Draft — a status update or a project brief', elsewhere: 'AI Studio / credits / Business tier' },
        { capability: 'Summarize — a long discussion into the decisions made', elsewhere: 'AI add-on only' },
        { capability: 'Ask AI — what is blocked, what shipped this week, what is late', elsewhere: 'AI add-on only' },
        { capability: 'A personal catch-up digest after time away', elsewhere: 'Not offered' },
      ],
    },
    {
      group: 'Access & data',
      rows: [
        { capability: 'Guests and clients with scoped access', elsewhere: 'Extra or limited on most tiers' },
        { capability: 'Everyone in the company, at no per-seat cost', elsewhere: 'Per-seat on every tool except Basecamp' },
        { capability: 'Full export and API', elsewhere: 'Higher tiers' },
        { capability: 'Record-level history and restore', elsewhere: 'Higher tiers' },
      ],
    },
  ],

  diffs: [
    { icon: 'infinity', title: 'The whole company, not a seat count', body: 'Every tool here except Basecamp charges per seat, so half the company never gets added. GuavaPlan costs the same for 10 people or the entire org, contractors and clients included.' },
    { icon: 'database', title: 'Your projects and decisions stay yours', body: 'Every discussion, doc and task is a database on **your** cloud subscription, with full export and the source code. No plan change can lock the history away.' },
    { icon: 'sparkles', title: 'AI updates and summaries, priced at cost', body: 'Drafting updates, summarising threads and a personal catch-up digest run on **a few dollars a month**. Asana gates AI to Advanced; monday meters it in credits; Notion only unlocks it at Business.' },
    { icon: 'scroll', title: 'Calm by default — a digest, not a firehose', body: 'GuavaPlan is built around written updates and a daily digest, so progress is visible without everyone living in notifications.' },
    { icon: 'code', title: 'Shaped to how your teams actually work', body: 'Project templates, custom fields, update cadences and client access are configured to your way of working, with room to build anything the defaults miss.' },
    { icon: 'shield', title: 'No renewal, no per-seat creep', body: 'Onboarding a new team or a client’s staff does not change the bill. You own GuavaPlan; the server is the only cost.' },
  ],

  architecture: {
    title: 'How an update reaches the right people',
    caption: 'People work on the left across web, mobile and a daily email digest; the project and discussion layer sits on your work and content data; automation and AI act on it; it runs on your cloud. Hover a box to trace it.',
    layers: ['Where people work', 'Modules', 'Work & content', 'Automation & AI', 'Your cloud'],
    nodes: [
      { id: 'web', label: 'Web & mobile', col: 0, kind: 'channel' },
      { id: 'digest', label: 'Daily email digest', col: 0, kind: 'channel' },
      { id: 'guest', label: 'Client & guest access', col: 0, kind: 'channel' },
      { id: 'proj', label: 'Projects & tasks', col: 1, kind: 'module' },
      { id: 'disc', label: 'Discussions & updates', col: 1, kind: 'module' },
      { id: 'docs', label: 'Docs & pages', col: 1, kind: 'module' },
      { id: 'track', label: 'Milestones & portfolio', col: 1, kind: 'module' },
      { id: 'store', label: 'Work store', col: 2, kind: 'core' },
      { id: 'people', label: 'People & permissions', col: 2, kind: 'core' },
      { id: 'notify', label: 'Digest & notification engine', col: 3, kind: 'automation' },
      { id: 'ai', label: 'AI updates & catch-up', col: 3, kind: 'automation' },
      { id: 'vm', label: 'Your cloud VM + database', col: 4, kind: 'cloud' },
    ],
    edges: [
      { from: 'web', to: 'proj' }, { from: 'web', to: 'disc' }, { from: 'web', to: 'docs' },
      { from: 'guest', to: 'proj' }, { from: 'guest', to: 'disc' },
      { from: 'proj', to: 'store' }, { from: 'disc', to: 'store' }, { from: 'docs', to: 'store' }, { from: 'track', to: 'store' },
      { from: 'store', to: 'people' },
      { from: 'notify', to: 'store' }, { from: 'notify', to: 'digest' }, { from: 'ai', to: 'store' },
      { from: 'people', to: 'vm' }, { from: 'store', to: 'vm' }, { from: 'notify', to: 'vm' }, { from: 'ai', to: 'vm' },
    ],
  },

  modules: [
    { name: 'Teams & projects', tag: 'Structure', blurb: 'A home per team, projects inside it, and a portfolio view across everything.', points: ['Teams with their own membership and projects', 'Project templates for recurring work', 'Sub-projects and cross-project links', 'Portfolio view of status across many projects'] },
    { name: 'Discussions & updates', tag: 'Communication', blurb: 'Written updates that keep everyone aligned without a meeting.', points: ['Threaded project discussions', 'Regular status updates with a prompt and cadence', '@mentions, reactions and following', 'Updates roll into the digest'] },
    { name: 'Tasks & boards', tag: 'Execution', blurb: 'The work itself — assigned, dated, and viewable however each person thinks.', points: ['Tasks with assignees, dates, dependencies and subtasks', 'List, board, table, timeline and calendar views', 'Custom fields and task types', 'Bulk edit and saved filters'] },
    { name: 'Docs & pages', tag: 'Knowledge', blurb: 'Briefs, specs and notes that live next to the work they describe.', points: ['Rich pages with embeds and checklists', 'Docs attached to a project or a task', 'Version history on every page', 'Search across all docs and discussions'] },
    { name: 'Milestones & tracking', tag: 'Progress', blurb: 'See how far along things are without asking.', points: ['Milestones with progress roll-up', 'Workload view by person', 'Activity feed and full project history', 'Overdue and at-risk highlighting'] },
    { name: 'Digest & access', tag: 'Calm', blurb: 'One daily summary instead of a day of pings, and clean access for outsiders.', points: ['Personal daily digest of what changed', 'Notification rules per project', 'Guest and client access scoped to specific projects', 'Everyone in the company included at no per-seat cost'] },
  ],

  lifecycle: {
    title: 'Propose to ship',
    caption: 'How a piece of work moves through GuavaPlan. Click a step — AI helps write the updates and catch people up.',
    steps: [
      { label: 'Propose', detail: 'Someone writes up the idea as a project brief — AI can turn a rough paragraph into a structured first draft.', metric: 'Brief written' },
      { label: 'Plan', detail: 'The project gets tasks, dates, owners and a milestone or two, from a template or from scratch.', metric: 'Plan in place' },
      { label: 'Assign', detail: 'Work lands with the right people; the workload view shows who is over-committed before it becomes a problem.', metric: 'Work distributed' },
      { label: 'Update', detail: 'Owners post regular written updates; changes and comments roll into everyone’s daily digest instead of pinging all day.', metric: 'Everyone aligned' },
      { label: 'Review', detail: 'At a checkpoint, AI summarises the discussion into the decisions made and the open questions left.', metric: 'Decisions captured' },
      { label: 'Ship', detail: 'The milestone closes, the project moves to done, and the full history stays searchable for the next time.', metric: 'Delivered' },
    ],
  },

  ai: [
    { name: 'Draft with AI', desc: 'Turns a rough note into a structured project brief, or a week of task activity into a status update ready to post.' },
    { name: 'Summarize', desc: 'Collapses a long discussion thread into the decisions made, the action items, and the questions still open.' },
    { name: 'Ask AI', desc: 'Answers questions across your projects — what is blocked, what shipped this week, what is overdue — within each person’s access.' },
    { name: 'Catch-up digest', desc: 'After time away, generates a personal summary of everything that moved on the projects you follow.' },
  ],
};
