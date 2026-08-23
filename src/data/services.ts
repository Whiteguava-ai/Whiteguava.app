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

export type ServiceUseCase = {
  title: string;
  body: string;
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
  imageQuery: string;
  imageAlt: string;
  overviewTitle: string;
  overview: string[];
  topicsTitle: string;
  topics: ServiceTopic[];
  useCasesTitle: string;
  useCases: ServiceUseCase[];
  related: ServiceRelated[];
  faqs: { q: string; a: string }[];
};

export const services: Record<string, ServiceContent> = {
  software: {
    slug: 'ai-software-development',
    path: SERVICE_PATHS.software,
    name: 'AI Software Development',
    title: 'AI Software Development',
    description:
      'Custom AI software development for web apps, portals, and internal tools — from architecture to production, built by WhiteGuava in Bengaluru.',
    badge: 'AI Software',
    h1Line1: 'AI Software',
    h1Line2: 'Development',
    highlight: 'AI',
    subtitle:
      'WhiteGuava designs and builds business software with AI where it creates value — applications, portals, and platforms that hold up in production.',
    imageQuery: 'software developers working on laptops in modern office',
    imageAlt: 'Software engineers collaborating on a custom application build',
    overviewTitle: 'Software built around how you work',
    overview: [
      'WhiteGuava is an AI software development company based in Bengaluru, India. We build complete products: the interface, the backend, the data layer, and the AI capabilities that sit inside them.',
      'If you need a custom application — not a demo and not a bolt-on chatbot — we take it from discovery through cloud deployment. That includes web apps, mobile apps, dashboards, and customer portals, with AI used only where it earns its place.',
      'Teams also come to us as an offshore AI development company: an India-based partner that can take on a full build, or extend an existing team, without the overhead of hiring artificial intelligence engineers in-house. Whether you outsource AI development entirely or need it to plug into a team you already have, the process and the standard of delivery stay the same.',
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
      {
        title: 'Offshore delivery from India',
        body: 'As an offshore AI development company, we run structured sprints, clear scoping, and regular demos so distributed delivery stays predictable, not opaque.',
      },
      {
        title: 'Extending your existing team',
        body: 'Some engagements are pure augmentation: you hire AI engineers from WhiteGuava to sit alongside your product team for a defined build, not an open-ended headcount.',
      },
    ],
    useCasesTitle: 'Who this is for',
    useCases: [
      {
        title: 'Startups building a first version',
        body: 'A founding team that needs a working product — not a prototype — built by an AI app development company that can own the whole stack.',
      },
      {
        title: 'Businesses replacing spreadsheets and email',
        body: 'Operations that have outgrown manual tools and need a proper internal application: dashboards, approvals, and records in one place.',
      },
      {
        title: 'Teams that need to move fast without hiring',
        body: 'Companies that want to outsource AI development for a defined project instead of running a multi-month hiring process first.',
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
      {
        q: 'Do you work as an offshore development team?',
        a: 'Yes. Many clients engage WhiteGuava specifically as an offshore AI development company — either for a complete build or to extend an in-house team for a fixed scope.',
      },
      {
        q: 'How is this different from a general software development company?',
        a: 'We are a software development company first — architecture, engineering, and delivery discipline are the foundation. AI is applied where it genuinely improves the product, not added as a label.',
      },
    ],
  },
  agents: {
    slug: 'ai-agents',
    path: SERVICE_PATHS.agents,
    name: 'Custom AI Agents',
    title: 'AI Agent Development',
    description:
      'AI agent development by WhiteGuava. We design agents that use your tools and data to complete real workflows — support, operations, and internal assistants.',
    badge: 'AI Agents',
    h1Line1: 'Custom',
    h1Line2: 'AI Agents',
    highlight: 'AI',
    subtitle:
      'AI agents by WhiteGuava that reason, use tools, and finish the job — connected to your business systems, not stuck in a chat window.',
    imageQuery: 'artificial intelligence robot assistant technology',
    imageAlt: 'AI agent interface handling a customer conversation',
    overviewTitle: 'What an AI agent actually is',
    overview: [
      'What is an AI agent, in practice? It is not a FAQ script. It can read a request, decide which tools or data it needs, take steps, and hand off to a person when it should. We build that behaviour around your workflows, permissions, and source systems.',
      'WhiteGuava agents show up as customer support assistants, WhatsApp AI agents, internal knowledge assistants, and operations helpers. They use RAG (retrieval-augmented generation) so answers come from your documents and databases, not from generic internet text — the same LLM application development approach frameworks like LangChain are built around, applied to your specific systems.',
      'The best conversational AI is not the one with the cleverest replies — it is the one that actually knows your business and knows when to stop and ask a human. That is the standard we build agents to.',
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
      {
        title: 'Conversational AI that stays on-topic',
        body: 'We scope what the agent should and should not answer, so a conversational AI system stays useful instead of drifting into generic small talk.',
      },
      {
        title: 'LLM and RAG architecture',
        body: 'Model choice, retrieval design, and evaluation are treated as engineering decisions — the same discipline behind serious LLM application development.',
      },
    ],
    useCasesTitle: 'Where agents get used',
    useCases: [
      {
        title: 'Customer support',
        body: 'First-line support that resolves common requests and escalates the rest with full context, instead of a bot that dead-ends every unusual question.',
      },
      {
        title: 'Sales and lead qualification',
        body: 'An AI sales agent that responds to inbound interest immediately, asks qualifying questions, and books time with a human rep when it counts.',
      },
      {
        title: 'Internal HR and operations',
        body: 'From candidate screening support to internal policy lookup, agents built for AI in HR and recruitment work the same way as customer-facing ones — grounded in your actual documents.',
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
      {
        q: 'What is RAG, and do we need it?',
        a: 'RAG (retrieval-augmented generation) lets an agent pull real answers from your documents and databases instead of relying only on what a model already knows. Most business agents need it — generic answers rarely satisfy a specific customer or employee question.',
      },
      {
        q: 'Can an agent handle sales or HR conversations, not just support?',
        a: 'Yes. The same tool-using, RAG-grounded pattern applies to an AI sales agent qualifying leads or an internal assistant supporting HR and recruitment — the workflow and data change, the underlying build does not.',
      },
    ],
  },
  automation: {
    slug: 'ai-automation',
    path: SERVICE_PATHS.automation,
    name: 'AI and Automation',
    title: 'AI Automation',
    description:
      'AI automation by WhiteGuava. Replace repetitive work with reliable workflows — document handling, reporting, lead ops, and system-to-system automation.',
    badge: 'Automation',
    h1Line1: 'AI and',
    h1Line2: 'Automation',
    highlight: 'AI',
    subtitle:
      'Turn repetitive processes into reliable workflows — with AI where the input is messy, and rules where the path is clear.',
    imageQuery: 'automated workflow business process technology',
    imageAlt: 'Automated business workflow running on a dashboard',
    overviewTitle: 'Automation that respects the real process',
    overview: [
      'AI and automation work best together. Some steps should stay deterministic: approvals, notifications, CRM updates. Other steps need judgment: reading a document, classifying an email, deciding whether to escalate.',
      'WhiteGuava designs those workflows around how your team already operates — lead capture, reporting, document handling, and ops handoffs — then connects them to the tools you use. When a platform like n8n is the right fit, we use it. When the process needs custom software, we build that instead.',
      'Automation and AI is not a single product you buy off a shelf — it is a set of decisions about which steps to automate, which to leave to a person, and which need a model in between. That is the part of the work most vendors skip.',
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
      {
        title: 'System-to-system automation',
        body: 'Keeping a CRM, ERP, and internal tools in sync without manual re-entry — the unglamorous automation work that saves the most hours.',
      },
      {
        title: 'Reporting that builds itself',
        body: 'Recurring reports assembled automatically from live data instead of someone copying numbers into a spreadsheet every week.',
      },
    ],
    useCasesTitle: 'Where automation pays off fastest',
    useCases: [
      {
        title: 'Sales and lead operations',
        body: 'Automated cold outreach follow-ups, lead enrichment, and CRM updates so reps spend time talking to qualified people, not doing data entry.',
      },
      {
        title: 'Finance and operations teams',
        body: 'Approval chains, invoice routing, and reconciliation steps that currently depend on someone remembering to check an inbox.',
      },
      {
        title: 'Growing teams that feel the strain first',
        body: 'Businesses where headcount has not kept pace with volume, and the same manual process is now the bottleneck every week.',
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
      {
        q: 'Can you automate outbound sales and follow-ups?',
        a: 'Yes. Automated cold outreach, lead scoring, and follow-up sequencing are common starting points, usually paired with a CRM you already use.',
      },
      {
        q: 'How do you decide what to automate first?',
        a: 'We look at where manual effort is highest and error cost is manageable — usually the process someone complains about weekly, not a hypothetical edge case.',
      },
    ],
  },
  whatsapp: {
    slug: 'whatsapp-ai',
    path: SERVICE_PATHS.whatsapp,
    name: 'WhatsApp AI Chatbots',
    title: 'WhatsApp AI Chatbots',
    description:
      'WhatsApp AI chatbots by WhiteGuava. Agents that answer customers, use your business data, and escalate to humans — built on the WhatsApp Business API.',
    badge: 'WhatsApp AI',
    h1Line1: 'WhatsApp',
    h1Line2: 'AI Chatbots',
    highlight: 'AI',
    subtitle:
      'Customer conversations on WhatsApp, backed by your product data and business systems — not a keyword bot.',
    imageQuery: 'mobile phone chat messaging app conversation',
    imageAlt: 'Customer service conversation happening over a messaging app',
    overviewTitle: 'WhatsApp as a working channel, not a widget',
    overview: [
      'Businesses ask for a WhatsApp AI chatbot when customers already live in WhatsApp. We build agents on the WhatsApp Business API that can answer questions, look up orders or services, and pass the thread to a human when needed.',
      'That requires more than a model. It needs a Business API setup, message templates where Meta requires them, connection to your CRM or catalogue, and rules for when the bot should stop talking. WhiteGuava handles the AI, the integration, and the production path.',
      'For businesses in India, WhatsApp is often the primary support and sales channel already — so a WhatsApp business API India setup usually means connecting AI to an account that is already active, not starting from zero.',
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
      {
        title: 'Message templates and compliance',
        body: 'Meta WhatsApp API rules around templates, opt-ins, and messaging windows are handled as part of the build, not left for you to figure out after launch.',
      },
      {
        title: 'Understanding WhatsApp API pricing',
        body: 'WhatsApp business API pricing is set and billed by Meta (or your BSP) on a conversation basis. We help you understand that structure and design flows that use it efficiently.',
      },
    ],
    useCasesTitle: 'Where WhatsApp AI gets used',
    useCases: [
      {
        title: 'Retail and e-commerce support',
        body: 'Order status, returns, and product questions handled instantly, with a human looped in for anything account-specific or sensitive.',
      },
      {
        title: 'Appointment and service businesses',
        body: 'Booking, rescheduling, and reminders over WhatsApp instead of phone calls or a separate booking app customers have to install.',
      },
      {
        title: 'Sales-led businesses',
        body: 'Qualifying inbound WhatsApp enquiries and routing serious leads to a salesperson with the conversation history attached.',
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
      {
        q: 'What does WhatsApp Business API pricing actually cover?',
        a: 'Meta charges per conversation (with category-based pricing that changes periodically), and a BSP may add its own fee if you use one. We do not control that pricing — we design the AI and the integration on top of whichever plan you have.',
      },
      {
        q: 'Do we need an existing WhatsApp Business API setup first?',
        a: 'No, but it helps. If you already have WhatsApp business API access in India or elsewhere, we build on it. If not, we can guide you through getting set up as part of the project.',
      },
    ],
  },
  document: {
    slug: 'document-ai',
    path: SERVICE_PATHS.document,
    name: 'Document AI',
    title: 'Document AI',
    description:
      'Document AI by WhiteGuava. Custom extraction, classification, and review workflows — built around your documents, not a generic OCR tool.',
    badge: 'Document AI',
    h1Line1: 'Document',
    h1Line2: 'AI',
    highlight: 'AI',
    subtitle:
      'Extract, classify, and route documents so teams stop retyping what is already on the page.',
    imageQuery: 'documents paperwork invoices office desk',
    imageAlt: 'Stack of business documents and invoices being reviewed',
    overviewTitle: 'Beyond scanning into a folder',
    overview: [
      'Intelligent document processing is useful when people spend hours reading invoices, forms, contracts, or KYC packs and typing the same fields into another system.',
      'WhiteGuava builds pipelines that extract those fields, classify the document, and push structured data into your workflow. That can use a specialised engine such as Google Document AI or Azure Document Intelligence when it fits, or a custom model and LLM extraction layer when your layouts are messy.',
      'This applies just as well to a Word document AI workflow — contracts and forms that arrive as .docx rather than scans — as it does to PDFs and images. The extraction target matters more than the file format.',
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
      {
        title: 'Choosing the right extraction engine',
        body: 'Google Document AI, Azure Document Intelligence, or a custom LLM-based extractor — the choice depends on your documents, not a fixed default.',
      },
      {
        title: 'Beyond PDFs and scans',
        body: 'Word documents, spreadsheets, and mixed-format submissions are handled with the same extract-classify-route pipeline as scanned paperwork.',
      },
    ],
    useCasesTitle: 'Where document AI is used',
    useCases: [
      {
        title: 'Finance teams processing invoices',
        body: 'Extracting line items and totals from supplier invoices and pushing them into your accounting or ERP system automatically.',
      },
      {
        title: 'Compliance and KYC review',
        body: 'Pulling structured fields from ID documents and forms while keeping an audit trail for anything a person needs to verify.',
      },
      {
        title: 'Operations teams buried in forms',
        body: 'Application forms, claims, and internal requests that currently get manually retyped into a system of record.',
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
      {
        q: 'Does this work on Word documents, not just PDFs?',
        a: 'Yes. Word document AI extraction follows the same pattern as scanned files — identify the structure, pull the fields, and route the output. The pipeline adapts to the format, not the other way round.',
      },
      {
        q: 'How accurate is the extraction?',
        a: 'It depends on document quality and consistency, which is why we test on your real files before committing to an approach, and route low-confidence extractions to a human reviewer instead of guessing.',
      },
    ],
  },
  dataAnalytics: {
    slug: 'data-analytics',
    path: SERVICE_PATHS.dataAnalytics,
    name: 'Data & Analytics',
    title: 'Data & Analytics',
    description:
      'Data and analytics engineering by WhiteGuava. Pipelines, dashboards, and AI-ready data infrastructure built around the decisions your business actually needs to make.',
    badge: 'Data & Analytics',
    h1Line1: 'Data &',
    h1Line2: 'Analytics',
    highlight: 'Analytics',
    subtitle:
      'Turn scattered spreadsheets and system exports into pipelines, dashboards, and data your AI systems can actually use.',
    imageQuery: 'data analytics dashboard charts business',
    imageAlt: 'Analytics dashboard showing business metrics and charts',
    overviewTitle: 'Data that is ready before the dashboard',
    overview: [
      'Most "we need analytics" requests are really a data problem: numbers live in five different systems, nobody trusts the export, and every report is rebuilt by hand. WhiteGuava starts there — pipelines that pull from your real sources, clean and structure the data, and land it somewhere queries and dashboards can rely on.',
      'The same pipelines double as the foundation for AI: agents and automation are only as good as the data behind them, so we build the analytics layer and the AI-ready infrastructure as one system, not two separate projects.',
      'This is also where a lot of "AI in automation" projects quietly fail — not because the model is wrong, but because the data feeding it was never made reliable. Getting the pipeline right first is what makes everything built on top of it trustworthy.',
    ],
    topicsTitle: 'What this engagement covers',
    topics: [
      {
        title: 'Data pipelines',
        body: 'Ingestion from your CRM, ERP, product database, and third-party APIs into a structured warehouse, with scheduled or event-driven refreshes.',
      },
      {
        title: 'Analytics dashboards',
        body: 'Business-facing dashboards for the metrics your team actually checks — revenue, usage, operations — built on top of clean, versioned data.',
      },
      {
        title: 'AI-ready infrastructure',
        body: 'The same pipelines feed RAG systems, agents, and automation, so your AI work is grounded in current, structured data instead of one-off exports.',
      },
      {
        title: 'Predictive & business intelligence',
        body: 'Once the fundamentals are solid, we add forecasting, anomaly detection, and recommendation models where they change a real decision.',
      },
      {
        title: 'Data quality and governance',
        body: 'Versioning, validation, and access control on the data layer, so "which number is correct" stops being a recurring meeting question.',
      },
      {
        title: 'From raw exports to a single source of truth',
        body: 'Consolidating CSVs, SaaS exports, and manual spreadsheets into one structured place your team and your AI systems both trust.',
      },
    ],
    useCasesTitle: 'Who this is for',
    useCases: [
      {
        title: 'Leadership teams flying on gut feel',
        body: 'Businesses making decisions without a reliable, current view of revenue, usage, or operations because the data is scattered across tools.',
      },
      {
        title: 'Teams about to invest in AI',
        body: 'Companies planning agents or automation that need the underlying data made trustworthy first, or the AI layer will just amplify bad numbers.',
      },
      {
        title: 'Ops teams drowning in manual reports',
        body: 'Anyone still rebuilding the same spreadsheet report by hand every week or month.',
      },
    ],
    related: [
      { href: SERVICE_PATHS.software, title: 'AI Software Development', desc: 'The admin tools and APIs around your data.' },
      { href: SERVICE_PATHS.cloud, title: 'Cloud & Deployment', desc: 'Where the pipelines and warehouse actually run.' },
      { href: SERVICE_PATHS.agents, title: 'AI Agents', desc: 'Agents and assistants grounded in your data.' },
    ],
    faqs: [
      {
        q: 'Do we need a data warehouse first?',
        a: 'Not necessarily. We assess what you have — spreadsheets, a production database, SaaS exports — and design the simplest pipeline and storage that supports your reporting and AI needs, adding a warehouse when the scale justifies it.',
      },
      {
        q: 'Can you work with our existing BI tool?',
        a: 'Yes. We can build dashboards in the tool you already use (or recommend one) once the underlying data pipeline is reliable — the pipeline is usually the real bottleneck, not the charts.',
      },
      {
        q: 'How does this connect to AI agents or automation?',
        a: 'Agents, RAG systems, and automation all need current, structured data to work from. The pipelines we build here are the same ones that power those systems, so the two efforts reinforce each other.',
      },
      {
        q: 'We already have some dashboards — is this still useful?',
        a: 'Often, yes. Existing dashboards are frequently built on fragile, manually-refreshed exports. We look at whether the underlying pipeline is solid before deciding whether to rebuild the reporting layer.',
      },
      {
        q: 'Can you add forecasting or predictive models later?',
        a: 'Yes. We usually get the pipeline and dashboards solid first, then add forecasting, anomaly detection, or recommendations once there is a reliable base to build them on.',
      },
    ],
  },
  cloud: {
    slug: 'cloud-deployment',
    path: SERVICE_PATHS.cloud,
    name: 'Cloud & Deployment',
    title: 'Cloud & Deployment',
    description:
      'Cloud infrastructure and deployment by WhiteGuava. Take AI systems and business software from development to reliable production on AWS, Azure, or your platform of choice.',
    badge: 'Cloud & Deployment',
    h1Line1: 'Cloud &',
    h1Line2: 'Deployment',
    highlight: 'Cloud',
    subtitle:
      'Backend infrastructure, CI/CD, and monitoring so what works on your laptop keeps working in production.',
    imageQuery: 'cloud server infrastructure data center technology',
    imageAlt: 'Cloud infrastructure and server systems powering production software',
    overviewTitle: 'From working demo to production system',
    overview: [
      'A lot of AI and software projects stall at the same point: the demo works, but nobody has set up the infrastructure, deployment pipeline, or monitoring to run it reliably for real users. That gap is what this service closes.',
      'WhiteGuava sets up backend infrastructure, databases, APIs, and CI/CD pipelines on AWS, Azure, or your preferred cloud platform — usually as the deployment layer for AI agents, software, or automation we are already building, though we also take on infrastructure-only engagements.',
      'This is also where cost control happens. Cloud bills grow quietly when infrastructure is sized for peak-guesswork instead of actual traffic — we size it for what you run, with room to scale deliberately, not by accident.',
    ],
    topicsTitle: 'What this engagement covers',
    topics: [
      {
        title: 'AWS & Azure',
        body: 'Cloud architecture and setup on the platform you already use or prefer, sized for your actual traffic and budget rather than over-provisioned defaults.',
      },
      {
        title: 'Backend infrastructure',
        body: 'APIs, databases, queues, and storage configured to support production AI systems and business applications, not just a prototype.',
      },
      {
        title: 'CI/CD pipelines',
        body: 'Automated build, test, and deployment pipelines so releases are repeatable and rollbacks are possible, instead of manual server updates.',
      },
      {
        title: 'Monitoring & scaling',
        body: 'Logging, alerting, and autoscaling put in place before launch, so issues surface as alerts rather than as complaints from users.',
      },
      {
        title: 'Security and access control',
        body: 'Environment separation, secrets management, and least-privilege access set up from the start, not bolted on after an incident.',
      },
      {
        title: 'Cost visibility',
        body: 'Infrastructure sized and tagged so you can see what is driving cloud spend, instead of one opaque monthly bill.',
      },
    ],
    useCasesTitle: 'Who this is for',
    useCases: [
      {
        title: 'Teams past the prototype stage',
        body: 'A working AI agent, app, or automation that needs to move from someone\'s laptop to something real users can rely on.',
      },
      {
        title: 'Businesses with an existing codebase and no DevOps',
        body: 'Software that runs, but with no CI/CD, no monitoring, and deployment that depends on one person remembering the steps.',
      },
      {
        title: 'Companies scaling faster than their infrastructure',
        body: 'Usage has grown past what the original setup was sized for, and reliability is starting to slip.',
      },
    ],
    related: [
      { href: SERVICE_PATHS.software, title: 'AI Software Development', desc: 'The product this infrastructure runs.' },
      { href: SERVICE_PATHS.dataAnalytics, title: 'Data & Analytics', desc: 'Pipelines and warehousing that live on this infrastructure.' },
      { href: SERVICE_PATHS.automation, title: 'AI Automation', desc: 'Workflows deployed alongside your production systems.' },
    ],
    faqs: [
      {
        q: 'Do you only deploy projects you built?',
        a: 'No. We take on infrastructure and deployment work for existing codebases too — assessing what is there, then setting up the cloud environment, CI/CD, and monitoring around it.',
      },
      {
        q: 'AWS or Azure — which do you recommend?',
        a: 'It depends on your existing stack, team familiarity, and budget. We work with both and will recommend based on your specific situation rather than a default preference.',
      },
      {
        q: 'What happens after launch?',
        a: 'We set up monitoring and alerting as part of the deployment, and can continue supporting scaling, incidents, and infrastructure changes as your usage grows.',
      },
      {
        q: 'Can you help reduce our cloud costs?',
        a: 'Often, yes. Over-provisioned infrastructure and untagged resources are common. We review what is actually being used before recommending changes.',
      },
      {
        q: 'Do you handle ongoing support after deployment?',
        a: 'We can. Some clients want a one-time setup, others want continued support for scaling and incidents — we scope it based on what you need.',
      },
    ],
  },
};

export const serviceList = Object.values(services);
