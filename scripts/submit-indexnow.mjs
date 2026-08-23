#!/usr/bin/env node
/**
 * Submits URLs to IndexNow after a production deploy (Bing, Yandex, Seznam.cz,
 * Naver — not Google, which doesn't support IndexNow). IndexNow verifies the
 * key file at `${SITE_URL}/<key>.txt` is live before honoring a submission,
 * so this only works once the current `public/` build is actually deployed —
 * running it against localhost, or before deploying, will fail verification.
 *
 * Usage:
 *   node scripts/submit-indexnow.mjs                  # submits the default URL list below
 *   node scripts/submit-indexnow.mjs /blog/some-post   # submits one or more explicit paths instead
 */
import { readdirSync, readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');
const SITE_URL = 'https://www.thewhiteguava.in';

const DEFAULT_PATHS = [
  '/blog/what-are-ai-agents',
  '/blog/ai-agents-for-business',
];

function findKeyFile() {
  const match = readdirSync(publicDir).find((f) => /^[a-f0-9]{32}\.txt$/.test(f));
  if (!match) {
    throw new Error(`No IndexNow key file found in ${publicDir} (expected a 32-char hex <key>.txt)`);
  }
  return match.replace(/\.txt$/, '');
}

async function main() {
  const key = findKeyFile();
  const keyFileContents = readFileSync(join(publicDir, `${key}.txt`), 'utf8').trim();
  if (keyFileContents !== key) {
    throw new Error(`Key file contents ("${keyFileContents}") don't match its filename ("${key}")`);
  }

  const argPaths = process.argv.slice(2);
  const paths = argPaths.length > 0 ? argPaths : DEFAULT_PATHS;
  const urlList = paths.map((p) => `${SITE_URL}${p.startsWith('/') ? p : `/${p}`}`);

  console.log(`Submitting ${urlList.length} URL(s) to IndexNow for host ${new URL(SITE_URL).host}:`);
  urlList.forEach((u) => console.log(`  - ${u}`));

  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: new URL(SITE_URL).host,
      key,
      keyLocation: `${SITE_URL}/${key}.txt`,
      urlList,
    }),
  });

  console.log(`IndexNow responded: ${res.status} ${res.statusText}`);
  if (!res.ok) {
    const body = await res.text().catch(() => '');
    console.error(body);
    process.exitCode = 1;
  }
}

main().catch((err) => {
  console.error(err.message);
  process.exitCode = 1;
});
