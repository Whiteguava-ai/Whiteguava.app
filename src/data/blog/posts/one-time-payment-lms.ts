import { SERVICE_PATHS } from '@/lib/site';
import type { BlogPost } from '../types';

export const oneTimePaymentLms: BlogPost = {
  slug: 'one-time-payment-lms',
  path: '/blog/one-time-payment-lms',
  title: 'One-Time-Payment LMS: Own GuavaLearn Instead of Renting Docebo or TalentLMS',
  metaTitle: 'Self-Hosted LMS You Own: GuavaLearn vs Docebo & TalentLMS',
  metaDescription:
    'GuavaLearn runs your courses, learners and certifications on your own cloud — buy once, own it, AI built in. See the 5-year cost next to Docebo, TalentLMS, LearnWorlds and Thinkific.',
  excerpt:
    'Every LMS meters learners — per active user, per tier, or a fee on every course sale. GuavaLearn is a one-time setup, then about $28/month for the server, with the course builder, assessments, certifications, cohorts and paid enrolment, plus an AI tutor. Here is the full comparison, with tools you can run yourself.',
  category: 'Learning',
  tags: [
    'one-time payment LMS',
    'LMS you own',
    'self-hosted LMS',
    'Docebo alternative',
    'TalentLMS alternative',
    'LMS without per-learner pricing',
    'LMS total cost of ownership',
  ],
  publishedAt: '2026-09-10',
  updatedAt: '2026-09-10',
  readingTimeMinutes: 12,
  h1: 'GuavaLearn: The LMS You Buy Once Instead of Renting Per Learner',
  subtitle:
    'The same course builder, quizzes, certifications, learning paths and paid enrolment as the big platforms — set up once, owned by you, and running on a ~$28/month server instead of a per-learner subscription.',
  body: [
    {
      type: 'p',
      text: 'Every learning platform is rented, and it is rented by the learner. TalentLMS is billed per active user, with tiers running $69 to $179 a month. LearnWorlds adds a $5 fee to every course sale on its Pro plan. Docebo does not publish pricing at all and is generally sized for 250-plus learners at $25,000 a year and up. Grow your training programme and the bill grows with it.',
    },
    {
      type: 'p',
      text: 'GuavaLearn is the opposite model. WhiteGuava sets it up on your own cloud and domain, brands it as your academy, hands it over, and then it is yours: no per-learner licence, no per-sale cut, no renewal, and the only ongoing cost is roughly $28 a month for the server. It covers the whole delivery job — a course builder with mixed content and SCORM, quizzes and assignments with grading, certifications with expiry, learning paths and programs, instructor-led batches, self-enrolment and paid checkout, discussion and Q&A, and full progress tracking — plus an AI tutor and authoring assistant built directly in.',
    },
    {
      type: 'callout',
      title: 'In short',
      text: 'Every LMS meters learners — per active user, per tier, or a fee on every course sale. GuavaLearn is a one-time setup, then about $28/month for the server (roughly $1,700 over five years), for any number of learners and with no cut of course revenue. It covers the course builder, assessments, certifications, cohorts and paid enrolment, with an AI tutor and authoring assistant included.',
    },
    { type: 'embed', component: 'productCostCalculator', product: 'learn', caption: 'List pricing, September 2026. Docebo has no public list; the figure shown is a common entry estimate. TalentLMS and LearnWorlds figures are effective per-active-learner rates. The GuavaLearn bar is the server cost only.' },
    { type: 'h2', text: 'What per-learner LMS pricing is really charging you for', id: 'what-youre-paying-for' },
    {
      type: 'p',
      text: 'The core of an LMS — courses, quizzes, tracking, certificates — is mature and broadly the same everywhere. What the per-learner price rents is hosting, the vendor’s margin, and the right to keep your own course content and completion records reachable next month.',
    },
    {
      type: 'p',
      text: 'The model also caps your ambition. Onboard a partner’s staff, open a course to customers, or run a compliance push across the whole company and you cross a user tier or trigger overage. Selling courses on a creator platform means a fee on every transaction. And the AI authoring tools sit in the paid tiers.',
    },
    { type: 'embed', component: 'productRentVsOwn', product: 'learn', caption: 'The meter runs on a common Docebo entry estimate; per-learner platforms scale with your programme.' },
    { type: 'h2', text: 'Every plan, side by side', id: 'cost-comparison' },
    {
      type: 'p',
      text: 'This is the price picture for a 10-learner reference at list price, annual billing, before tax — with a note on how each scales. The final column divides each annual total by GuavaLearn’s ~$400/year server-and-AI cost.',
    },
    {
      type: 'table',
      headers: ['Plan', 'Basis', '10 learners / year', 'AI tools', 'vs GuavaLearn'],
      rows: [
        ['GuavaLearn (self-hosted)', 'flat server', '~$400', 'Built in (~$3–5/mo usage)', '—'],
        ['TalentLMS', 'per active user', '~$360', 'TalentCraft (paid)', '0.9× at 10, ~9× at 100'],
        ['LearnWorlds · Pro', 'per user + $5/sale', '~$480', 'Partial', '1.2× at 10'],
        ['Thinkific · Grow', 'flat', '~$1,188', 'Partial', '3×'],
        ['Docebo · standard', 'per user', '~$1,080', 'Docebo AI (paid)', '3× at 10'],
        ['Docebo · enterprise (est.)', 'flat', '~$25,000', 'Docebo AI', '63×'],
      ],
    },
    {
      type: 'p',
      text: 'At a handful of learners the per-user platforms look cheap. The point of owning is what happens at 200, 2,000 or 20,000 learners — GuavaLearn stays at the server cost, and nobody takes a cut of course sales.',
    },
    { type: 'h2', text: 'How a lesson reaches a learner', id: 'architecture' },
    {
      type: 'p',
      text: 'The course, assessment and cohort modules all feed one progress store and one catalogue, running on your cloud. The diagram shows the layers — where people learn, the modules, the course and progress data, the automation and AI, and your cloud.',
    },
    { type: 'embed', component: 'productArchitecture', product: 'learn' },
    { type: 'h2', text: 'Everything GuavaLearn does out of the box', id: 'features' },
    {
      type: 'p',
      text: 'Every module below is part of GuavaLearn from day one — including paid checkout with no per-sale fee. Explore what each covers, then check the feature matrix for the tier that charges for it elsewhere.',
    },
    { type: 'embed', component: 'productModuleExplorer', product: 'learn' },
    { type: 'embed', component: 'productFeatureMatrix', product: 'learn' },
    { type: 'h2', text: 'Author to certificate, working', id: 'demo' },
    {
      type: 'p',
      text: 'This is the path a course takes from idea to a learner’s certificate. The AI assistant helps most at authoring and assessment; everything else is the standard flow.',
    },
    { type: 'embed', component: 'productLifecycle', product: 'learn' },
    { type: 'h2', text: 'What renting Docebo, TalentLMS or Thinkific will never give you', id: 'only-here' },
    {
      type: 'p',
      text: 'Feature lists converge. What separates an owned LMS from a rented one is structural — whose domain your academy runs on, whether learners have a price tag, and whether anyone takes a cut of your course revenue.',
    },
    { type: 'embed', component: 'productDifferentiators', product: 'learn' },
    { type: 'h2', text: 'The AI is built in — not a TalentCraft or Docebo AI upgrade', id: 'ai' },
    { type: 'p', text: 'WhiteGuava adds the AI features course teams actually use straight onto GuavaLearn as a custom module:' },
    {
      type: 'list',
      items: [
        'Draft with AI — turns source material into lesson outlines, summaries and a first draft of quiz questions to edit rather than write from scratch.',
        'Summarize — condenses a learner’s progress across a path: what is done, what is overdue, where scores dipped.',
        'Ask AI — a tutor for learners that answers questions using only the course content, plus an admin assistant over completion data.',
        'Assisted grading — proposes a score and feedback for written answers against the rubric, for the instructor to approve or adjust.',
      ],
    },
    {
      type: 'callout',
      title: 'Why this matters',
      text: 'AI authoring and tutoring is exactly where the LMS vendors have put their new paywall. Because GuavaLearn’s source is yours, those tools are just features, priced at what the API actually costs.',
    },
    { type: 'h2', text: 'Who GuavaLearn is built for', id: 'who-its-for' },
    { type: 'p', text: 'GuavaLearn is the right call for organisations that want to own their training platform:' },
    {
      type: 'list',
      items: [
        'Companies running staff onboarding and compliance training who do not want the bill to rise with headcount.',
        'Training providers and academies that sell courses and do not want a platform taking a fee on every sale.',
        'Associations and franchises that need to train a large, changing population of members or partners.',
        'Anyone whose learner count is unpredictable — seasonal, campaign-driven, or growing fast.',
        'Teams that want their academy on their own domain and brand, not a sub-site on someone else’s platform.',
      ],
    },
    { type: 'h2', text: 'How you get GuavaLearn', id: 'how-to-get' },
    { type: 'p', text: 'It is a one-time engagement, not a subscription:' },
    {
      type: 'list',
      ordered: true,
      items: [
        'WhiteGuava deploys GuavaLearn on your cloud account and your domain, branded as your academy.',
        'We set up your course categories, certificate templates, learning paths, enrolment and payment rules, HR or SSO sync if you need it, and switch on the AI module.',
        'We migrate existing courses and learner records where you have them, hand over full admin access, the database and documentation. From that point the software is yours.',
        'Ongoing, you pay only for the server — around $28 a month — plus a few dollars of AI usage. Support and future changes are optional.',
      ],
    },
    {
      type: 'callout',
      title: 'The five-year picture',
      text: 'A Docebo entry contract: roughly $125,000 over five years, rented, sized for a learner count you have to stay under. GuavaLearn: a one-time setup, then about $1,700 in server cost over the same five years, for any number of learners.',
    },
  ],
  faqs: [
    {
      q: 'Is GuavaLearn really a one-time payment?',
      a: 'The LMS is a one-time setup engagement — WhiteGuava deploys, configures and hands it over, and then you own it. The only recurring cost is the server, around $28 a month, plus a few dollars of AI usage. There is no per-learner licence, no per-sale fee and no annual renewal.',
    },
    {
      q: 'Can we sell courses on GuavaLearn?',
      a: 'Yes. Paid enrolment with checkout, coupons and access rules is included, with no revenue share — you keep the full price of every course sale.',
    },
    {
      q: 'Does GuavaLearn support SCORM and instructor-led training?',
      a: 'Yes. It handles SCORM and web content, self-paced courses, and scheduled instructor-led batches with rosters and sessions, all in the same platform.',
    },
    {
      q: 'Does GuavaLearn have AI?',
      a: 'Yes — AI authoring (outlines, quiz questions), learner progress summaries, an AI tutor grounded in your course content, and assisted grading of written answers. It runs on a metered model at roughly $3 to $5 a month for a small programme.',
    },
    {
      q: 'Where do our courses and learner records live?',
      a: 'On your own cloud subscription, in a database you control, with full export of courses, learner records and completion history, plus the source code.',
    },
    {
      q: 'What happens when our learner count grows?',
      a: 'Nothing changes on the licensing side, because there is no per-learner licence. A much larger learner base might need a slightly bigger server — a few extra dollars a month, not a new plan.',
    },
    {
      q: 'Can it integrate with our HR system?',
      a: 'Yes. HR and SSO sync for staff training is part of the setup, so enrolments and role-based curricula can follow your employee data.',
    },
  ],
  related: [
    { href: '/blog/one-time-payment-hr-software', title: 'One-Time-Payment HR Software', desc: 'GuavaHR — staff training records tie straight into the employee master.' },
    { href: '/blog/one-time-payment-crm', title: 'One-Time-Payment CRM', desc: 'The same own-it model for sales and pipeline with GuavaCRM.' },
    { href: '/blog/one-time-payment-helpdesk', title: 'One-Time-Payment Helpdesk', desc: 'GuavaDesk — a knowledge base and support tickets on your own cloud.' },
    { href: SERVICE_PATHS.software, title: 'AI Software Development', desc: 'How WhiteGuava builds, configures and deploys platforms like GuavaLearn.' },
  ],
  cta: {
    title: 'Want a learning platform your organisation owns outright?',
    text: 'WhiteGuava sets up GuavaLearn on your cloud and domain, brands it as your academy, migrates your courses, switches on the AI, and hands it over. One-time setup, then about $28 a month with no per-learner fees.',
    label: 'Get a GuavaLearn quote',
    href: '/#contact',
  },
  productSchema: {
    name: 'GuavaLearn',
    applicationCategory: 'BusinessApplication',
    description:
      'A self-hosted LMS for courses, assessments, certifications, cohorts and paid enrolment, deployed on your own cloud and owned outright — instead of per-learner Docebo or TalentLMS pricing.',
  },
};
