import nodemailer from 'nodemailer';
import { CONTACT_EMAILS, SITE_NAME } from '@/lib/site';

export const runtime = 'nodejs';

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || CONTACT_EMAILS[0];
const SMTP_USER = process.env.SMTP_USER || CONTACT_EMAILS[0];
const SMTP_HOST = process.env.SMTP_HOST || 'smtp.zoho.com';
const SMTP_PORT = Number(process.env.SMTP_PORT || 465);

const MAX = {
  name: 120,
  email: 160,
  company: 160,
  phone: 40,
  service: 120,
  info: 5000,
  budget: 80,
  timeline: 80,
} as const;

type Body = {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  service?: string;
  info?: string;
  budget?: string;
  timeline?: string;
  website?: string;
};

function clean(value: unknown, max: number) {
  return String(value ?? '').trim().slice(0, max);
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function row(label: string, value: string) {
  if (!value) return '';
  return `<tr>
    <td style="padding:8px 12px;color:#666;vertical-align:top;width:160px">${escapeHtml(label)}</td>
    <td style="padding:8px 12px;color:#161616;white-space:pre-wrap">${escapeHtml(value)}</td>
  </tr>`;
}

function buildEmail(data: Record<keyof typeof MAX, string>) {
  const subject = `${SITE_NAME} enquiry${data.service ? ` — ${data.service}` : ''} from ${data.name}`;
  const html = `
    <div style="font-family:Inter,Arial,sans-serif;font-size:15px;line-height:1.5">
      <p>New project enquiry from the WhiteGuava website.</p>
      <table style="border-collapse:collapse;width:100%;max-width:640px">${
        row('Name', data.name) +
        row('Email', data.email) +
        row('Company', data.company) +
        row('Phone / WhatsApp', data.phone) +
        row('Interest', data.service) +
        row('Budget', data.budget) +
        row('Timeline', data.timeline) +
        row('Project details', data.info)
      }</table>
    </div>
  `;
  const text = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Company: ${data.company}`,
    `Phone / WhatsApp: ${data.phone}`,
    `Interest: ${data.service}`,
    `Budget: ${data.budget}`,
    `Timeline: ${data.timeline}`,
    '',
    data.info,
  ].join('\n');

  return { subject, html, text };
}

function createTransport() {
  const pass = process.env.SMTP_PASS;
  if (!pass) {
    throw new Error('SMTP_PASS is not set');
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465,
    auth: {
      user: SMTP_USER,
      pass,
    },
  });
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Body;

    if (clean(body.website, 200)) {
      return Response.json({ ok: true });
    }

    const data = {
      name: clean(body.name, MAX.name),
      email: clean(body.email, MAX.email),
      company: clean(body.company, MAX.company),
      phone: clean(body.phone, MAX.phone),
      service: clean(body.service, MAX.service),
      info: clean(body.info, MAX.info),
      budget: clean(body.budget, MAX.budget),
      timeline: clean(body.timeline, MAX.timeline),
    };

    if (data.name.length < 2 || !isEmail(data.email) || !data.service) {
      return Response.json(
        { error: 'Please add your name, a valid email, and what you are interested in.' },
        { status: 400 }
      );
    }

    const { subject, html, text } = buildEmail(data);
    const transporter = createTransport();

    await transporter.sendMail({
      from: process.env.SMTP_FROM || `"${SITE_NAME}" <${SMTP_USER}>`,
      to: TO_EMAIL,
      replyTo: data.email,
      subject,
      html,
      text,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return Response.json(
      { error: 'Could not send the message. Please email admin@thewhiteguava.in.' },
      { status: 500 }
    );
  }
}
