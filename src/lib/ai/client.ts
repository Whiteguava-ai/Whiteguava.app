import OpenAI from 'openai';

/**
 * Shared server-only OpenAI client. Both AI routes do grounded Q&A over
 * content we hand them in full, not open-ended reasoning, so a small, cheap
 * model is plenty and keeps a public, unauthenticated endpoint affordable,
 * override via `OPENAI_MODEL` if a better-priced or better-suited model
 * becomes available later without touching code.
 */
export const AI_MODEL = process.env.OPENAI_MODEL || 'gpt-4o-mini';

let client: OpenAI | null = null;

export function getOpenAIClient(): OpenAI {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error('OPENAI_API_KEY is not set');
  }
  if (!client) {
    client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  }
  return client;
}
