import { SERVICE_PATHS } from '@/lib/site';

export const VOID_CONTENT = {
  badge: 'AI + SOFTWARE + AUTOMATION',
  line1: 'Good AI feels obvious —',
  line2: 'because the hard work is hidden.',
};

export const WORLD_FORMS_CONTENT = {
  headline: ['Build Smarter.', 'With AI.'],
  sub: 'WhiteGuava builds AI agents, intelligent software, automation systems, and custom digital solutions that turn real business problems into working products.',
  ctaPrimary: { label: 'Start a Project', href: '/#contact' },
  ctaSecondary: { label: 'Explore Our Work', href: '/#works' },
};

export const TECH_CORE_CONTENT = {
  eyebrow: 'From Business Problem, To Working Product',
  body: 'WhiteGuava is an AI software development company in Bengaluru, India. We combine AI, software engineering, automation, data, and cloud to build solutions that actually work in production.',
  stat: '5+',
  tags: ['AI', 'SW', 'AUTO', 'DATA', 'CLOUD'],
  location: 'Based in Bengaluru, Karnataka, India',
  availability: 'Available for worldwide projects',
  techs: [
    'Python', 'TypeScript', 'React', 'Next.js', 'FastAPI', 'Node.js',
    'OpenAI', 'Anthropic', 'LangChain', 'PostgreSQL', 'MongoDB', 'Docker',
    'AWS', 'Azure', 'Hugging Face', 'Vector DB',
  ],
};

export interface CinematicService {
  num: string;
  title: string;
  desc: string;
  tags: string[];
  href?: string;
  more?: string;
}

export const SERVICES_CONTENT: CinematicService[] = [
  {
    num: '01',
    title: 'AI Agents & Automation',
    desc: 'Build intelligent agents that understand context, use tools, access business data, and execute workflows end-to-end.',
    tags: ['Customer support agents', 'WhatsApp AI agents', 'Workflow automation'],
    href: SERVICE_PATHS.agents,
    more: 'Explore AI agents',
  },
  {
    num: '02',
    title: 'Custom AI & Machine Learning',
    desc: 'Build intelligent systems around your data and business requirements — from generative AI and RAG to prediction and classification.',
    tags: ['Generative AI', 'RAG systems', 'NLP & computer vision'],
    href: SERVICE_PATHS.agents,
    more: 'Explore custom AI systems',
  },
  {
    num: '03',
    title: 'Business Software Development',
    desc: 'Custom software built around how your business actually operates — from web apps to portals, dashboards, and platforms.',
    tags: ['Web applications', 'Admin dashboards', 'ERP & CRM systems'],
    href: SERVICE_PATHS.software,
    more: 'Explore AI software development',
  },
  {
    num: '04',
    title: 'AI Integration',
    desc: 'Bring AI into the systems your business already uses — CRM, ERP, WhatsApp, APIs, databases, and cloud platforms.',
    tags: ['CRM & ERP integrations', 'WhatsApp & messaging', 'API connectors'],
    href: SERVICE_PATHS.whatsapp,
    more: 'Explore WhatsApp AI & integrations',
  },
  {
    num: '05',
    title: 'Automation & Digital Transformation',
    desc: 'Replace repetitive manual processes with intelligent, reliable workflows — from document processing to approval flows.',
    tags: ['Document processing', 'Reporting automation', 'Approval workflows'],
    href: SERVICE_PATHS.automation,
    more: 'Explore AI automation',
  },
  {
    num: '06',
    title: 'Data & Analytics',
    desc: 'Turn raw business data into useful intelligence — dashboards, pipelines, and AI-ready data infrastructure.',
    tags: ['Data pipelines', 'Analytics dashboards', 'AI-ready infrastructure'],
    href: SERVICE_PATHS.dataAnalytics,
    more: 'Explore data & analytics',
  },
  {
    num: '07',
    title: 'Cloud & Deployment',
    desc: 'Take your product from development to production on AWS, Azure, or your preferred cloud platform.',
    tags: ['AWS & Azure', 'Backend infrastructure', 'CI/CD pipelines'],
    href: SERVICE_PATHS.cloud,
    more: 'Explore cloud & deployment',
  },
  {
    num: '08',
    title: 'AI-Powered Digital Experiences',
    desc: 'Build better customer and employee experiences with AI — intelligent search, assistants, and personalized interfaces.',
    tags: ['AI search', 'Conversational interfaces', 'Intelligent websites'],
    href: SERVICE_PATHS.agents,
    more: 'Explore conversational AI',
  },
];

export const PIPELINE_CONTENT = [
  { num: '01', title: 'Understand', desc: 'We understand your business, users, workflow, data, and the problem worth solving.', duration: 'DISCOVERY' },
  { num: '02', title: 'Design', desc: 'We define the product experience, architecture, AI approach, and implementation plan.', duration: 'PLANNING' },
  { num: '03', title: 'Build', desc: 'We develop the application, AI system, integrations, and automation workflows.', duration: 'DEVELOPMENT' },
  { num: '04', title: 'Integrate', desc: 'We connect the solution with your existing tools, systems, data, and workflows.', duration: 'INTEGRATION' },
  { num: '05', title: 'Launch', desc: 'We test, deploy, monitor, and move the solution into production.', duration: 'DEPLOYMENT' },
  { num: '06', title: 'Improve', desc: 'We continuously improve performance, reliability, usability, and intelligence.', duration: 'ONGOING' },
];

export const PROJECTS_CONTENT = [
  {
    title: 'WhatsApp AI Agent for Customer Support',
    desc: 'AI-powered WhatsApp agent that handles customer queries, accesses product data, and escalates to human agents when needed.',
    deliverables: 'AI agent, WhatsApp integration, RAG, business system API',
    industry: 'Retail / E-commerce',
  },
  {
    title: 'Intelligent Document Processing System',
    desc: 'Automated document extraction and classification system replacing a manual review process for a financial services business.',
    deliverables: 'Document AI pipeline, classification model, admin dashboard',
    industry: 'Financial Services',
  },
  {
    title: 'Internal Knowledge Base AI Assistant',
    desc: 'RAG-based internal assistant connected to company documents, policies, and wikis — deployed as a production-ready web application.',
    deliverables: 'RAG system, vector database, web application, authentication',
    industry: 'Enterprise',
  },
  {
    title: 'Operations Automation Platform',
    desc: 'Custom platform automating lead capture, data enrichment, reporting, and notification workflows for a B2B business.',
    deliverables: 'Workflow automation, CRM integration, data pipelines, dashboard',
    industry: 'B2B Services',
  },
];

export const FINAL_CTA_CONTENT = {
  headline: "Let's Build Something Intelligent.",
  sub: "Have an idea, workflow, or business problem you'd like to solve? Tell us what you're working on and we'll get back to you.",
  cta: { label: 'Start a Conversation', href: '/#contact' },
};
