import type { ProductDef } from '../types';

/**
 * GuavaDesk, customer support tickets and workflows on a helpdesk you own.
 * Competitor list pricing, September 2026:
 *   Zendesk Suite Team $55, Growth ~$89, Professional $115 per agent per month
 *   (annual); the AI Copilot add-on is $50 per agent per month on top.
 *   Freshdesk Growth $15, Pro $49, Enterprise $79 per agent per month.
 *   Zoho Desk $14–$50 per agent per month by tier.
 *   Intercom from around $39 per seat per month plus usage, with Fin AI billed
 *   per resolution.
 */
export const desk: ProductDef = {
  key: 'desk',
  name: 'GuavaDesk',
  accent: '#c2306b',
  replaces: 'Zendesk, Freshdesk or Intercom',

  refName: 'Zendesk Suite Professional',
  refPerYear10: 13_800,
  refFiveYear: 69_000,

  serverMo: 28,
  guavaYr: 400,

  plans: [
    { key: 'guava', name: 'GuavaDesk', perUserMo: 0, flatYr: 400, ai: 'yes', aiNote: 'built in', ours: true },
    { key: 'zoho-desk', name: 'Zoho Desk · Professional', perUserMo: 23, ai: 'partial', aiNote: 'Zia' },
    { key: 'fresh-growth', name: 'Freshdesk · Growth', perUserMo: 15, ai: 'partial', aiNote: 'Copilot add-on' },
    { key: 'intercom', name: 'Intercom · Advanced', perUserMo: 39, ai: 'partial', aiNote: 'Fin billed per resolution' },
    { key: 'fresh-pro', name: 'Freshdesk · Pro', perUserMo: 49, ai: 'partial', aiNote: 'Copilot add-on' },
    { key: 'zd-team', name: 'Zendesk Suite · Team', perUserMo: 55, ai: 'partial', aiNote: 'Copilot add-on' },
    { key: 'zd-pro', name: 'Zendesk Suite · Professional', perUserMo: 115, ai: 'partial', aiNote: '+ $50 Copilot' },
  ],

  ladder: [
    { vendor: 'GuavaDesk', tier: 'server + AI usage', perUserMo: null, tenUsersYr: 400, ai: 'yes', aiNote: 'Draft, Summarize, Ask, triage', vsOurs: 'N/A', ours: true },
    { vendor: 'Freshdesk', tier: 'Growth', perUserMo: 15, tenUsersYr: 1_800, ai: 'partial', aiNote: 'Copilot add-on', vsOurs: '5×' },
    { vendor: 'Zoho Desk', tier: 'Professional', perUserMo: 23, tenUsersYr: 2_760, ai: 'partial', aiNote: 'Zia', vsOurs: '7×' },
    { vendor: 'Intercom', tier: 'Advanced', perUserMo: 39, tenUsersYr: 4_680, ai: 'partial', aiNote: '+ Fin per resolution', vsOurs: '12×' },
    { vendor: 'Freshdesk', tier: 'Pro', perUserMo: 49, tenUsersYr: 5_880, ai: 'partial', aiNote: 'Copilot add-on', vsOurs: '15×' },
    { vendor: 'Zendesk', tier: 'Suite Team', perUserMo: 55, tenUsersYr: 6_600, ai: 'partial', aiNote: 'Copilot add-on', vsOurs: '17×' },
    { vendor: 'Zendesk', tier: 'Suite Professional', perUserMo: 115, tenUsersYr: 13_800, ai: 'partial', aiNote: 'Copilot add-on', vsOurs: '35×' },
    { vendor: 'Zendesk', tier: 'Professional + Copilot', perUserMo: 165, tenUsersYr: 19_800, ai: 'yes', aiNote: 'Copilot', vsOurs: '50×' },
  ],

  matrix: [
    {
      group: 'Ticketing',
      rows: [
        { capability: 'Shared queues, views and ticket lifecycle', elsewhere: 'Every helpdesk' },
        { capability: 'Email, portal, chat and API as ticket sources', elsewhere: 'Higher tiers for some channels' },
        { capability: 'Merge, split, link and parent/child tickets', elsewhere: 'Higher tiers' },
        { capability: 'Custom ticket fields, forms and types', elsewhere: 'Higher tiers' },
      ],
    },
    {
      group: 'Knowledge & self-service',
      rows: [
        { capability: 'Knowledge base with categories and versioning', elsewhere: 'Every helpdesk' },
        { capability: 'Branded customer portal to raise and track tickets', elsewhere: 'Higher tiers' },
        { capability: 'Article suggestions while the customer types', elsewhere: 'Higher tiers / AI add-on' },
        { capability: 'Public and internal-only articles', elsewhere: 'Higher tiers' },
      ],
    },
    {
      group: 'SLA & routing',
      rows: [
        { capability: 'SLA policies for response and resolution', elsewhere: 'Growth tier and up' },
        { capability: 'Business hours, holidays and escalation rules', elsewhere: 'Higher tiers' },
        { capability: 'Round-robin, load-balanced and skill-based assignment', elsewhere: 'Professional tier and up' },
        { capability: 'Automations and workflow rules', elsewhere: 'Higher tiers' },
      ],
    },
    {
      group: 'AI assistant',
      rows: [
        { capability: 'Draft, a reply from the ticket and the knowledge base', elsewhere: 'Copilot / Fin add-on, priced per agent or per resolution' },
        { capability: 'Summarize, a long or reassigned ticket thread', elsewhere: 'AI add-on only' },
        { capability: 'Ask AI, an agent copilot over your knowledge base', elsewhere: 'AI add-on only' },
        { capability: 'Auto-triage, category, priority and tags on arrival', elsewhere: 'Higher tiers / AI add-on' },
      ],
    },
    {
      group: 'Measurement',
      rows: [
        { capability: 'CSAT surveys after resolution', elsewhere: 'Growth tier and up' },
        { capability: 'Agent, queue and SLA dashboards', elsewhere: 'Higher tiers' },
        { capability: 'Canned responses and reply templates', elsewhere: 'Every helpdesk' },
        { capability: 'Full data export and API', elsewhere: 'Higher tiers' },
      ],
    },
  ],

  diffs: [
    { icon: 'infinity', title: 'Agents, not "agent seats"', body: 'Every helpdesk bills per agent per month, and support headcount swings with the season. GuavaDesk costs the same for 5 agents in the quiet months or 25 at peak.' },
    { icon: 'database', title: 'Your customers’ history stays on your cloud', body: 'Every ticket, conversation and contact record is a database on **your** cloud subscription, with full export and the source code.' },
    { icon: 'sparkles', title: 'AI support tools, not an AI add-on', body: 'Reply drafting, thread summaries, an agent copilot and auto-triage run on **a few dollars a month** in usage. Zendesk Copilot is $50/agent; Intercom Fin bills per resolution.' },
    { icon: 'ticket', title: 'Self-service portal and knowledge base included', body: 'A branded portal and a full knowledge base ship in the box. On the big platforms, the good self-service features sit a tier or two up.' },
    { icon: 'code', title: 'Your workflow, not the vendor’s macro system', body: 'Ticket types, routing rules, escalation chains and custom automations are built to how **your** team triages, with room to script anything unusual.' },
    { icon: 'shield', title: 'No renewal, no per-resolution meter', body: 'A busy month does not produce a surprise invoice. You own GuavaDesk; the server is the only fixed cost and AI is a few dollars of usage.' },
  ],

  architecture: {
    title: 'What happens when a customer emails you',
    caption: 'Channels are on the left; the ticket engine sits on your customer and knowledge-base data; SLA, automation and AI act on it; everything runs on your cloud. Hover a box to trace it.',
    layers: ['Channels', 'Support modules', 'Customer & KB data', 'SLA, automation & AI', 'Your cloud'],
    nodes: [
      { id: 'email', label: 'Email', col: 0, kind: 'channel' },
      { id: 'portal', label: 'Customer portal', col: 0, kind: 'channel' },
      { id: 'chat', label: 'Chat & API', col: 0, kind: 'channel' },
      { id: 'inbox', label: 'Shared inbox & queues', col: 1, kind: 'module' },
      { id: 'kb', label: 'Knowledge base', col: 1, kind: 'module' },
      { id: 'csat', label: 'CSAT & surveys', col: 1, kind: 'module' },
      { id: 'tickets', label: 'Ticket store', col: 2, kind: 'core' },
      { id: 'contacts', label: 'Contacts & companies', col: 2, kind: 'core' },
      { id: 'sla', label: 'SLA & escalation', col: 3, kind: 'automation' },
      { id: 'route', label: 'Assignment & automation', col: 3, kind: 'automation' },
      { id: 'ai', label: 'AI copilot & triage', col: 3, kind: 'automation' },
      { id: 'vm', label: 'Your cloud VM + database', col: 4, kind: 'cloud' },
    ],
    edges: [
      { from: 'email', to: 'inbox' }, { from: 'portal', to: 'inbox' }, { from: 'chat', to: 'inbox' },
      { from: 'portal', to: 'kb' },
      { from: 'inbox', to: 'tickets' }, { from: 'csat', to: 'tickets' }, { from: 'inbox', to: 'contacts' },
      { from: 'kb', to: 'tickets' },
      { from: 'sla', to: 'tickets' }, { from: 'route', to: 'tickets' }, { from: 'ai', to: 'tickets' }, { from: 'ai', to: 'kb' },
      { from: 'tickets', to: 'vm' }, { from: 'contacts', to: 'vm' }, { from: 'sla', to: 'vm' }, { from: 'route', to: 'vm' }, { from: 'ai', to: 'vm' },
    ],
  },

  modules: [
    { name: 'Ticketing & queues', tag: 'Core', blurb: 'Everything an agent works from, a shared inbox, saved views and a clear ticket lifecycle.', points: ['Shared queues with saved, filtered views', 'Merge, split, link and parent/child tickets', 'Custom fields, forms and ticket types', 'Bulk actions and keyboard-first navigation'] },
    { name: 'Multichannel inbox', tag: 'Core', blurb: 'Email, the portal, chat and API requests land in one place with full context.', points: ['Email piping with threading and attachments', 'Portal and chat as first-class channels', 'API to create tickets from your product', 'Contact and company records built as you go'] },
    { name: 'Knowledge base', tag: 'Self-service', blurb: 'Deflect the repeat questions with articles customers and agents both use.', points: ['Categories, versioning and draft workflow', 'Public and internal-only articles', 'Article suggestions as the customer types', 'Usage stats on which articles actually help'] },
    { name: 'SLA & escalation', tag: 'Process', blurb: 'Promise a response time and have the system hold everyone to it.', points: ['Response and resolution SLA policies', 'Business hours, holidays and pause conditions', 'Escalation rules with notifications', 'Breach and at-risk dashboards'] },
    { name: 'Assignment & automation', tag: 'Process', blurb: 'Route the ticket to the right agent and let rules handle the busywork.', points: ['Round-robin, load-balanced and skill-based routing', 'Trigger-based automations on any field change', 'Canned responses and reply templates', 'Scheduled follow-ups and reminders'] },
    { name: 'CSAT & reporting', tag: 'Insight', blurb: 'See whether customers are happy and where the team is stretched.', points: ['CSAT surveys after resolution', 'Agent, queue and SLA performance dashboards', 'Volume and first-response-time trends', 'Scheduled reports and full export'] },
  ],

  lifecycle: {
    title: 'Received to reviewed',
    caption: 'The life of a support ticket in GuavaDesk. Click a step, AI helps at triage, response and handover.',
    steps: [
      { label: 'Received', detail: 'A customer emails, uses the portal or chats. A ticket is created with their history attached.', metric: 'Ticket opened' },
      { label: 'Triaged', detail: 'AI proposes a category, priority and tags; an SLA clock starts based on the type and the customer.', metric: 'SLA running' },
      { label: 'Assigned', detail: 'Routing rules put it with the right agent or team, round-robin, load-balanced or by skill.', metric: 'Owned' },
      { label: 'Responded', detail: 'The agent gets an AI-drafted reply built from the ticket and the knowledge base, edits it, and sends.', metric: 'First reply sent' },
      { label: 'Resolved', detail: 'The issue is fixed and the ticket closed; if it reopens, the full thread, summarised, travels with it.', metric: 'Closed' },
      { label: 'Reviewed', detail: 'A CSAT survey goes out, the result lands on the agent and queue dashboards, and patterns feed back into the knowledge base.', metric: 'CSAT captured' },
    ],
  },

  ai: [
    { name: 'Draft with AI', desc: 'One click builds a reply from the ticket’s conversation and the matching knowledge-base articles, for the agent to edit and send.' },
    { name: 'Summarize', desc: 'Collapses a long or reassigned thread into a few lines so whoever picks it up is caught up in seconds.' },
    { name: 'Ask AI', desc: 'An agent copilot that answers questions from your knowledge base and past tickets, with sources shown.' },
    { name: 'Auto-triage', desc: 'Sets a first-pass category, priority and tags the moment a ticket arrives, so routing and SLAs start correctly.' },
  ],
};
