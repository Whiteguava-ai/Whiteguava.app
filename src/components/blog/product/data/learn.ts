import type { ProductDef } from '../types';

/**
 * GuavaLearn — build, run and deliver online courses on a platform you own.
 * Competitor list pricing, September 2026:
 *   TalentLMS is billed per active user; tiers run Core $69, Grow $109, Pro $179
 *   per month. ~$3 per active learner per month used as an effective blended rate.
 *   LearnWorlds Pro Trainer $99/month plus $5 per course sale; ~$4 effective.
 *   Thinkific Grow around $99/month (flat, no per-user).
 *   Docebo does not publish pricing; independent 2026 estimates start near
 *   $25,000/year, typically for 250+ learners.
 */
export const learn: ProductDef = {
  key: 'learn',
  name: 'GuavaLearn',
  accent: '#b5541f',
  replaces: 'Docebo, TalentLMS or Thinkific',

  refName: 'Docebo (entry estimate)',
  refPerYear10: 25_000,
  refFiveYear: 125_000,

  serverMo: 28,
  guavaYr: 400,

  plans: [
    { key: 'guava', name: 'GuavaLearn', perUserMo: 0, flatYr: 400, ai: 'yes', aiNote: 'built in', ours: true },
    { key: 'talent', name: 'TalentLMS · per active user', perUserMo: 3, ai: 'partial', aiNote: 'TalentCraft' },
    { key: 'learnworlds', name: 'LearnWorlds · Pro', perUserMo: 4, ai: 'partial' },
    { key: 'thinkific', name: 'Thinkific · Grow', perUserMo: 0, flatYr: 1_188, ai: 'partial' },
    { key: 'docebo-std', name: 'Docebo · standard', perUserMo: 9, ai: 'partial', aiNote: 'Docebo AI' },
    { key: 'docebo-ent', name: 'Docebo · enterprise (est.)', perUserMo: 0, flatYr: 25_000, ai: 'partial', aiNote: 'Docebo AI' },
  ],

  ladder: [
    { vendor: 'GuavaLearn', tier: 'server + AI usage', perUserMo: null, tenUsersYr: 400, ai: 'yes', aiNote: 'Draft, Summarize, Ask, grading', vsOurs: '—', ours: true },
    { vendor: 'Thinkific', tier: 'Grow (flat)', perUserMo: null, tenUsersYr: 1_188, ai: 'partial', vsOurs: '3×' },
    { vendor: 'TalentLMS', tier: 'per active user', perUserMo: 3, tenUsersYr: 360, ai: 'partial', aiNote: 'TalentCraft', vsOurs: '0.9× at 10, 9× at 100' },
    { vendor: 'LearnWorlds', tier: 'Pro Trainer', perUserMo: 4, tenUsersYr: 480, ai: 'partial', aiNote: '+ $5 / sale', vsOurs: '1.2× at 10' },
    { vendor: 'Docebo', tier: 'standard', perUserMo: 9, tenUsersYr: 1_080, ai: 'partial', aiNote: 'Docebo AI', vsOurs: '3× at 10' },
    { vendor: 'Docebo', tier: 'enterprise (est.)', perUserMo: null, tenUsersYr: 25_000, ai: 'partial', aiNote: 'Docebo AI', vsOurs: '63×' },
  ],

  matrix: [
    {
      group: 'Course building',
      rows: [
        { capability: 'Courses with chapters, lessons and mixed content', elsewhere: 'Every LMS' },
        { capability: 'Video, audio, slides, SCORM and web content', elsewhere: 'Higher tiers for SCORM' },
        { capability: 'Content library reused across courses', elsewhere: 'Higher tiers' },
        { capability: 'Drip scheduling and prerequisites', elsewhere: 'Higher tiers' },
      ],
    },
    {
      group: 'Assessment',
      rows: [
        { capability: 'Quizzes with multiple question types and pools', elsewhere: 'Every LMS' },
        { capability: 'Assignments with file upload and manual grading', elsewhere: 'Higher tiers' },
        { capability: 'Certificates with expiry and renewal', elsewhere: 'Higher tiers' },
        { capability: 'Proctoring rules — attempts, time limits, shuffling', elsewhere: 'Higher tiers' },
      ],
    },
    {
      group: 'Delivery & cohorts',
      rows: [
        { capability: 'Learning paths and multi-course programs', elsewhere: 'Higher tiers' },
        { capability: 'Batches and instructor-led cohorts with schedules', elsewhere: 'Higher tiers / add-on' },
        { capability: 'Self-enrolment, invite and bulk assignment', elsewhere: 'Every LMS' },
        { capability: 'Paid courses with checkout and coupons', elsewhere: 'Creator plans (+ per-sale fee)' },
      ],
    },
    {
      group: 'AI assistant',
      rows: [
        { capability: 'Draft — lesson outlines, summaries and quiz questions', elsewhere: 'TalentCraft / Docebo AI on paid tiers' },
        { capability: 'Summarize — a learner’s progress and gaps', elsewhere: 'Higher tier only' },
        { capability: 'Ask AI — a course-content tutor for learners', elsewhere: 'Rarely available' },
        { capability: 'Assisted grading of written answers with rationale', elsewhere: 'Not offered' },
      ],
    },
    {
      group: 'Tracking & data',
      rows: [
        { capability: 'Progress, scores and completion per learner and course', elsewhere: 'Every LMS' },
        { capability: 'Reports by group, path and time period', elsewhere: 'Higher tiers' },
        { capability: 'Discussion, Q&A and announcements per course', elsewhere: 'Higher tiers' },
        { capability: 'Full data export and API', elsewhere: 'Higher tiers' },
      ],
    },
  ],

  diffs: [
    { icon: 'infinity', title: 'Learners do not have a price tag', body: 'Docebo sizes for 250+ learners; TalentLMS bills per active user; creator plans skim a fee per sale. GuavaLearn costs the same for 30 learners or 30,000.' },
    { icon: 'graduation', title: 'Your academy, your brand, your domain', body: 'It runs on **your** cloud and your domain, with your look. Not a sub-site on a platform that can change its terms or its pricing tiers.' },
    { icon: 'database', title: 'The course content and every result are yours', body: 'Full export of courses, learner records and completion history, plus the source code. Nothing about your training programme is locked to a vendor.' },
    { icon: 'sparkles', title: 'AI course tools without the AI tier', body: 'Outline drafting, quiz generation and a learner tutor run on metered API calls — **a few dollars a month**, not a TalentCraft or Docebo AI upgrade.' },
    { icon: 'coins', title: 'Sell courses without a per-sale cut', body: 'Checkout, coupons and paid enrolment ship in the box with no revenue share. Creator platforms take a fee on every transaction unless you buy up.' },
    { icon: 'shield', title: 'No renewal, no tier jump when you grow', body: 'Adding a department or a partner’s staff to your training does not move you up a plan. You own GuavaLearn.' },
  ],

  architecture: {
    title: 'How a lesson reaches a learner',
    caption: 'Learners are on the left; the course, assessment and cohort modules feed a single progress store; automation and AI sit on top; it all runs on your cloud. Hover a box to trace it.',
    layers: ['Where people learn', 'Modules', 'Course & progress', 'Automation & AI', 'Your cloud'],
    nodes: [
      { id: 'web', label: 'Learner web & mobile', col: 0, kind: 'channel' },
      { id: 'admin', label: 'Instructor & admin desk', col: 0, kind: 'channel' },
      { id: 'api', label: 'HR / SSO integration', col: 0, kind: 'channel' },
      { id: 'course', label: 'Course builder', col: 1, kind: 'module' },
      { id: 'assess', label: 'Quizzes & assignments', col: 1, kind: 'module' },
      { id: 'path', label: 'Paths & programs', col: 1, kind: 'module' },
      { id: 'cohort', label: 'Batches & enrolment', col: 1, kind: 'module' },
      { id: 'progress', label: 'Progress & scores', col: 2, kind: 'core' },
      { id: 'catalog', label: 'Catalogue & content library', col: 2, kind: 'core' },
      { id: 'cert', label: 'Certificates & rules', col: 3, kind: 'automation' },
      { id: 'ai', label: 'AI tutor & authoring', col: 3, kind: 'automation' },
      { id: 'vm', label: 'Your cloud VM + database', col: 4, kind: 'cloud' },
    ],
    edges: [
      { from: 'web', to: 'course' }, { from: 'web', to: 'assess' }, { from: 'web', to: 'path' },
      { from: 'admin', to: 'course' }, { from: 'admin', to: 'cohort' },
      { from: 'api', to: 'cohort' },
      { from: 'course', to: 'catalog' }, { from: 'path', to: 'catalog' },
      { from: 'assess', to: 'progress' }, { from: 'cohort', to: 'progress' }, { from: 'path', to: 'progress' },
      { from: 'progress', to: 'cert' }, { from: 'ai', to: 'catalog' }, { from: 'ai', to: 'progress' },
      { from: 'cert', to: 'vm' }, { from: 'progress', to: 'vm' }, { from: 'catalog', to: 'vm' }, { from: 'ai', to: 'vm' },
    ],
  },

  modules: [
    { name: 'Course builder', tag: 'Authoring', blurb: 'Structure a course once and fill it with any content type your material needs.', points: ['Chapters and lessons with video, audio, slides and text', 'SCORM and web-content embedding', 'Drip scheduling, prerequisites and visibility rules', 'Reusable content library across courses'] },
    { name: 'Quizzes & assignments', tag: 'Assessment', blurb: 'Check understanding with graded quizzes and real submitted work.', points: ['Question pools, shuffling and time limits', 'Assignments with file upload and rubrics', 'Manual and AI-assisted grading', 'Attempt limits and pass thresholds'] },
    { name: 'Certifications', tag: 'Assessment', blurb: 'Issue certificates that expire and prompt renewal — for compliance training that matters.', points: ['Certificate templates tied to course completion', 'Expiry, renewal and recertification windows', 'Verifiable certificate links', 'Certification reports for auditors'] },
    { name: 'Paths & programs', tag: 'Delivery', blurb: 'Bundle courses into a journey with a defined order and outcome.', points: ['Sequenced learning paths with gating', 'Role-based curricula', 'Progress rolled up across the whole path', 'Program-level certificates'] },
    { name: 'Batches & enrolment', tag: 'Delivery', blurb: 'Run instructor-led cohorts alongside self-paced courses.', points: ['Scheduled batches with rosters and sessions', 'Self-enrolment, invites and bulk assignment', 'Paid enrolment with checkout and coupons', 'HR and SSO sync for staff training'] },
    { name: 'Tracking & reports', tag: 'Insight', blurb: 'See who has done what, where people stall, and what needs a nudge.', points: ['Per-learner and per-course progress and scores', 'Group, path and time-period reports', 'Completion and overdue dashboards', 'Scheduled report emails and full export'] },
  ],

  lifecycle: {
    title: 'Author to certificate',
    caption: 'The path a course takes from idea to a learner’s certificate. Click a step — AI helps most at authoring and assessment.',
    steps: [
      { label: 'Author', detail: 'Build the course structure and content. AI drafts lesson outlines and a first set of quiz questions from your material.', metric: 'Draft course ready' },
      { label: 'Publish', detail: 'Set prerequisites, drip schedule, certificate rules and price, then publish to the catalogue.', metric: 'Live in catalogue' },
      { label: 'Enrol', detail: 'Learners self-enrol, are invited, or are assigned in bulk from an HR sync or a role-based curriculum.', metric: 'Learners enrolled' },
      { label: 'Learn', detail: 'Learners work through lessons on web or mobile, asking the AI tutor questions grounded in the course content.', metric: 'Progress tracked' },
      { label: 'Assess', detail: 'Quizzes score automatically; written assignments get AI-assisted grading with a rationale for the instructor to confirm.', metric: 'Scored' },
      { label: 'Certify', detail: 'On completion the certificate issues, with an expiry date set, and the record lands in the compliance report.', metric: 'Certificate issued' },
    ],
  },

  ai: [
    { name: 'Draft with AI', desc: 'Turns source material into lesson outlines, summaries and a first draft of quiz questions to edit rather than write from scratch.' },
    { name: 'Summarize', desc: 'Condenses a learner’s progress across a path — what is done, what is overdue, where scores dipped — for a manager or trainer.' },
    { name: 'Ask AI', desc: 'A tutor for learners that answers questions using only the course content, and an admin assistant for questions over completion data.' },
    { name: 'Assisted grading', desc: 'Proposes a score and feedback for written answers against the rubric, shown to the instructor to approve or adjust.' },
  ],
};
