import { SERVICE_PATHS } from '@/lib/site';

export type ServiceTopic = {
  title: string;
  body: string;
};

export type ServiceRelated = {
  href: string;
  title: string;
  desc: string;
};

export type ServiceContent = {
  slug: string;
  path: string;
  name: string;
  title: string;
  description: string;
  badge: string;
  h1Line1: string;
  h1Line2: string;
  highlight: string;
  subtitle: string;
  overviewTitle: string;
  overview: string[];
  topicsTitle: string;
  topics: ServiceTopic[];
  related: ServiceRelated[];
  faqs: { q: string; a: string }[];
};

export const services: Record<string, ServiceContent> = {
  software: {
    slug: 'ai-software-development',
    path: SERVICE_PATHS.software,
    name: 'AI Software Development',
    title: 'AI Software Development Services',
    description:
      'Custom AI software development for web apps, portals, and internal tools — from architecture to production, built by WhiteGuava in Bengaluru.',
    badge: 'AI Software',
    h1Line1: 'AI Software',
    h1Line2: 'Development',
    highlight: 'AI',
    subtitle:
      'We design and build business software with AI where it creates value — applications, portals, and platforms that hold up in production.',
    overviewTitle: 'Software built around how you work',
    overview: [
      'WhiteGuava is an AI software development company based in Bengaluru. We build complete products: the interface, the backend, the data layer, and the AI capabilities that sit inside them.',
      'If you need a custom application — not a demo and not a bolt-on chatbot — we take it from discovery through cloud deployment. That includes web apps, mobile apps, dashboards, and customer portals, with AI used only where it earns its place.',
    ],
    topicsTitle: 'What this engagement covers',
    topics: [
      {
        title: 'AI for software development',
        body: 'We use AI inside the product and across the build: assistants, search, document handling, and recommendations — plus modern engineering practices that keep delivery tight.',
      },
      {
        title: 'Custom applications',
        body: 'Web applications, admin dashboards, customer portals, and internal tools shaped around your operations rather than a generic template.',
      },
      {
        title: 'From architecture to launch',
        body: 'Product design, APIs, databases, integrations, testing, and deployment on AWS or Azure. AI development services here mean a working system, not a slide deck.',
      },
      {
        title: 'Systems that already exist',
        body: 'New software still has to talk to CRM, ERP, WhatsApp, and internal databases. We plan those connections up front so the product does not live in isolation.',
      },
    ],
    related: [
      { href: SERVICE_PATHS.agents, title: 'AI Agents', desc: 'Tool-using agents for support and operations.' },
      { href: SERVICE_PATHS.automation, title: 'AI Automation', desc: 'Workflows that remove repetitive work.' },
      { href: SERVICE_PATHS.whatsapp, title: 'WhatsApp AI', desc: 'Chatbots on the WhatsApp Business API.' },
    ],
    faqs: [
      {
        q: 'Do you only build the AI layer?',
        a: 'No. We build the full product around it — interface, backend, integrations, and deployment. AI is part of the software, not a separate experiment.',
      },
      {
        q: 'Can you work with an existing codebase?',
        a: 'Yes. Many projects start by adding AI or automation into software you already run. We assess the stack, then integrate rather than forcing a rewrite.',
      },
      {
        q: 'Where are you based?',
        a: 'WhiteGuava is based in Bengaluru, Karnataka, India, and we take on projects for teams worldwide.',
      },
    ],
  },
  agents: {
    slug: 'ai-agents',
    path: SERVICE_PATHS.agents,
    name: 'Custom AI Agents',
    title: 'Custom AI Agents for Business',
    description:
      'We design AI agents that use your tools and data to complete real workflows — support, operations, and internal assistants, in production.',
    badge: 'AI Agents',
    h1Line1: 'Custom',
    h1Line2: 'AI Agents',
    highlight: 'AI',
    subtitle:
      'Agents that reason, use tools, and finish the job — connected to your business systems, not stuck in a chat window.',
    overviewTitle: 'What an AI agent actually is',
    overview: [
      'An AI agent is not a FAQ script. It can read a request, decide which tools or data it needs, take steps, and hand off to a person when it should. We build that behaviour around your workflows, permissions, and source systems.',
      'WhiteGuava agents show up as customer support assistants, WhatsApp AI agents, internal knowledge assistants, and operations helpers. They use RAG so answers come from your documents and databases, not from generic internet text.',
    ],
    topicsTitle: 'How we build agents',
    topics: [
      {
        title: 'Tool-using agents',
        body: 'Agents can call APIs, look up records, create tickets, and follow your business rules. MCP and custom tools are used when the work needs more than a prompt.',
      },
      {
        title: 'Private knowledge',
        body: 'RAG systems connect the agent to policies, product data, and internal wikis so it stays grounded in your information.',
      },
      {
        title: 'Support and operations',
        body: 'Typical builds include customer support agents, internal assistants, and workflow agents that move work across CRM, email, and chat.',
      },
      {
        title: 'Production, not a prototype',
        body: 'Logging, evaluation, human escalation, and deployment are part of the build. An agent that only works in a demo is not finished.',
      },
    ],
    related: [
      { href: SERVICE_PATHS.whatsapp, title: 'WhatsApp AI', desc: 'Agents that live where your customers already message.' },
      { href: SERVICE_PATHS.document, title: 'Document AI', desc: 'Extraction and classification for document-heavy work.' },
      { href: SERVICE_PATHS.software, title: 'AI Software Development', desc: 'The product and infrastructure around the agent.' },
    ],
    faqs: [
      {
        q: 'How is an AI agent different from a chatbot?',
        a: 'A chatbot usually answers from a script or a single prompt. An agent can use tools, read business data, and complete multi-step work — then escalate when it is unsure.',
      },
      {
        q: 'Can agents use our internal documents?',
        a: 'Yes. We connect agents to your documents and databases with RAG so responses are based on your knowledge, with retrieval you can inspect.',
      },
      {
        q: 'Do you build WhatsApp agents as well?',
        a: 'Yes. WhatsApp AI agents are a common delivery channel. See our WhatsApp AI page for that specific build.',
      },
    ],
  },
  automation: {
    slug: 'ai-automation',
    path: SERVICE_PATHS.automation,
    name: 'AI and Automation',
    title: 'AI Automation Services',
    description:
      'Replace repetitive work with AI-powered workflows — document handling, reporting, lead ops, and system-to-system automation.',
    badge: 'Automation',
    h1Line1: 'AI and',
    h1Line2: 'Automation',
    highlight: 'AI',
    subtitle:
      'Turn repetitive processes into reliable workflows — with AI where the input is messy, and rules where the path is clear.',
    overviewTitle: 'Automation that respects the real process',
    overview: [
      'AI and automation work best together. Some steps should stay deterministic: approvals, notifications, CRM updates. Other steps need judgment: reading a document, classifying an email, deciding whether to escalate.',
      'We design those workflows around how your team already operates — lead capture, reporting, document handling, and ops handoffs — then connect them to the tools you use. When a platform like n8n is the right fit, we use it. When the process needs custom software, we build that instead.',
    ],
    topicsTitle: 'Where this shows up in a business',
    topics: [
      {
        title: 'Operations workflows',
        body: 'Lead enrichment, reporting, notifications, and approval chains that currently live in inboxes and spreadsheets.',
      },
      {
        title: 'Document-heavy work',
        body: 'Extraction, classification, and routing of invoices, forms, and records — often paired with our document AI work.',
      },
      {
        title: 'Tools versus custom systems',
        body: 'n8n and similar platforms are useful for well-bounded integrations. We reach for custom services when you need auditability, scale, or logic those tools cannot hold.',
      },
      {
        title: 'Human in the loop',
        body: 'Automation should not hide mistakes. We add review steps where the cost of an error is high, and let routine cases run through.',
      },
    ],
    related: [
      { href: SERVICE_PATHS.document, title: 'Document AI', desc: 'Intelligent processing for files and forms.' },
      { href: SERVICE_PATHS.agents, title: 'AI Agents', desc: 'Agents that execute workflows end-to-end.' },
      { href: SERVICE_PATHS.software, title: 'AI Software Development', desc: 'Custom platforms when a workflow outgrows a tool.' },
    ],
    faqs: [
      {
        q: 'Do you only automate with AI?',
        a: 'No. We use AI when the input is unstructured or the decision is fuzzy. Stable, rule-based steps stay as regular automation — it is simpler and easier to trust.',
      },
      {
        q: 'Can you automate around our CRM or ERP?',
        a: 'Yes. Most automation work is integration work: connecting the systems you already run so data does not need to be copied by hand.',
      },
      {
        q: 'Is this the same as buying n8n or Zapier?',
        a: 'Those tools can be part of a solution. We are not reselling a platform. We design the workflow, connect your systems, and build custom pieces where the platform stops.',
      },
    ],
  },
  whatsapp: {
    slug: 'whatsapp-ai',
    path: SERVICE_PATHS.whatsapp,
    name: 'WhatsApp AI Chatbots',
    title: 'WhatsApp AI Chatbot & Business API Integration',
    description:
      'WhatsApp AI agents that answer customers, use your business data, and escalate to humans — built on the WhatsApp Business API.',
    badge: 'WhatsApp AI',
    h1Line1: 'WhatsApp',
    h1Line2: 'AI Chatbots',
    highlight: 'AI',
    subtitle:
      'Customer conversations on WhatsApp, backed by your product data and business systems — not a keyword bot.',
    overviewTitle: 'WhatsApp as a working channel, not a widget',
    overview: [
      'Businesses ask for a WhatsApp AI chatbot when customers already live in WhatsApp. We build agents on the WhatsApp Business API that can answer questions, look up orders or services, and pass the thread to a human when needed.',
      'That requires more than a model. It needs a Business API setup, message templates where Meta requires them, connection to your CRM or catalogue, and rules for when the bot should stop talking. WhiteGuava handles the AI, the integration, and the production path.',
    ],
    topicsTitle: 'What we put in place',
    topics: [
      {
        title: 'WhatsApp Business API',
        body: 'We integrate with the official WhatsApp Business API (including Meta Cloud API setups) so messaging stays compliant and deliverable. We do not replace Meta’s access or billing.',
      },
      {
        title: 'Conversational AI that knows your business',
        body: 'The agent retrieves from your FAQs, product data, and policies. It can collect details, start a process, and escalate with context instead of dumping the user.',
      },
      {
        title: 'Support and sales use cases',
        body: 'Retail and e-commerce support is a common start. The same pattern works for appointment flows, status updates, and qualified handoff to sales.',
      },
      {
        title: 'Connected systems',
        body: 'WhatsApp only helps if it can see orders, inventory, tickets, or CRM records. We wire those APIs so the conversation is useful.',
      },
    ],
    related: [
      { href: SERVICE_PATHS.agents, title: 'AI Agents', desc: 'The same agent pattern on other channels.' },
      { href: SERVICE_PATHS.software, title: 'AI Software Development', desc: 'Portals and backends the chatbot depends on.' },
      { href: SERVICE_PATHS.automation, title: 'AI Automation', desc: 'What happens after the message is handled.' },
    ],
    faqs: [
      {
        q: 'Do you sell WhatsApp Business API access?',
        a: 'No. Access and per-message pricing come from Meta (and your BSP, if you use one). We build the AI agent and connect it to your systems on top of that API.',
      },
      {
        q: 'Can the bot escalate to a human?',
        a: 'Yes. Escalation is part of a serious WhatsApp build. The agent should know when it is out of depth and pass the conversation with context.',
      },
      {
        q: 'Is this just a keyword chatbot?',
        a: 'No. Keyword bots break as soon as the customer phrases things differently. We build conversational agents that use your business data, with guardrails and handoff.',
      },
    ],
  },
  document: {
    slug: 'document-ai',
    path: SERVICE_PATHS.document,
    name: 'Document AI',
    title: 'Document AI & Intelligent Document Processing',
    description:
      'Custom document AI for extraction, classification, and review workflows — built around your documents, not a generic OCR tool.',
    badge: 'Document AI',
    h1Line1: 'Document',
    h1Line2: 'AI',
    highlight: 'AI',
    subtitle:
      'Extract, classify, and route documents so teams stop retyping what is already on the page.',
    overviewTitle: 'Beyond scanning into a folder',
    overview: [
      'Intelligent document processing is useful when people spend hours reading invoices, forms, contracts, or KYC packs and typing the same fields into another system. We build pipelines that extract those fields, classify the document, and push structured data into your workflow.',
      'That can use a specialised engine such as Google Document AI or Azure Document Intelligence when it fits, or a custom model and LLM extraction layer when your layouts are messy. The product is the workflow — not a logo on a vendor page.',
    ],
    topicsTitle: 'What the system does',
    topics: [
      {
        title: 'Extraction and classification',
        body: 'Identify the document type, pull the fields you care about, and flag low-confidence values for review instead of silently guessing.',
      },
      {
        title: 'Connected to operations',
        body: 'Output lands in your dashboard, ERP, or approval flow. A JSON dump that nobody uses is not a finished project.',
      },
      {
        title: 'Human review where it matters',
        body: 'Finance and compliance teams still need an audit trail. We add queues for exceptions rather than pretending every page is perfect.',
      },
      {
        title: 'Built for your document mix',
        body: 'Invoices, statements, IDs, and internal forms rarely look like the samples in a vendor demo. We tune the pipeline on your real files.',
      },
    ],
    related: [
      { href: SERVICE_PATHS.automation, title: 'AI Automation', desc: 'What happens after the data is extracted.' },
      { href: SERVICE_PATHS.agents, title: 'AI Agents', desc: 'Assistants that can read documents as part of a task.' },
      { href: SERVICE_PATHS.software, title: 'AI Software Development', desc: 'The admin tools and APIs around the pipeline.' },
    ],
    faqs: [
      {
        q: 'Is this the same as Google Document AI?',
        a: 'Google Document AI is one engine we can use. Many projects need a custom pipeline, review UI, and integration with your systems. We choose the extractor based on your documents, not a vendor default.',
      },
      {
        q: 'Can you handle messy scans and mixed formats?',
        a: 'Yes, with limits. We test on your real files, set confidence thresholds, and route weak extractions to a person instead of forcing a bad value through.',
      },
      {
        q: 'What do we get at the end?',
        a: 'A working pipeline: ingest, extract, review, and export — usually with an admin dashboard and an API into the rest of your stack.',
      },
    ],
  },
};

export const serviceList = Object.values(services);
