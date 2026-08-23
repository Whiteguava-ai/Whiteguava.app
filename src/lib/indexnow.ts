import { INDEXNOW_KEY, SITE_URL } from '@/lib/site';

/**
 * Submits URLs to IndexNow (api.indexnow.org), which propagates to every
 * participating search engine (Bing, Yandex, Seznam.cz, Naver — not Google,
 * which doesn't support IndexNow). IndexNow verifies the key file at
 * `${SITE_URL}/${INDEXNOW_KEY}.txt` is live and reachable before honoring a
 * submission, so this only works once deployed to production — calling it
 * against localhost will fail verification.
 */
export async function submitToIndexNow(urls: string[]): Promise<{ ok: boolean; status: number }> {
  const host = new URL(SITE_URL).host;
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host,
      key: INDEXNOW_KEY,
      keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
      urlList: urls,
    }),
  });
  return { ok: res.ok, status: res.status };
}
