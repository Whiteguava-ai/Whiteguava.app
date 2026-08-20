const PEXELS_API_URL = 'https://api.pexels.com/v1';

export type PexelsImage = {
  url: string;
  width: number;
  height: number;
  alt: string;
  photographer: string;
  photographerUrl: string;
};

type PexelsPhoto = {
  src: { large2x: string; large: string };
  width: number;
  height: number;
  alt: string | null;
  photographer: string;
  photographer_url: string;
};

/**
 * Fetches one contextually relevant photo from Pexels for a blog post cover/section image.
 * Falls back to null (rather than throwing) so a missing/rate-limited key never breaks a page build.
 */
export async function fetchPexelsImage(
  query: string,
  fallbackAlt: string,
): Promise<PexelsImage | null> {
  const apiKey = process.env.PEXEL_API_KEY;
  if (!apiKey) return null;

  try {
    const res = await fetch(
      `${PEXELS_API_URL}/search?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape`,
      {
        headers: { Authorization: apiKey },
        next: { revalidate: 60 * 60 * 24 * 30 },
      },
    );
    if (!res.ok) return null;

    const data = (await res.json()) as { photos: PexelsPhoto[] };
    const photo = data.photos?.[0];
    if (!photo) return null;

    return {
      url: photo.src.large2x,
      width: photo.width,
      height: photo.height,
      alt: photo.alt || fallbackAlt,
      photographer: photo.photographer,
      photographerUrl: photo.photographer_url,
    };
  } catch {
    return null;
  }
}

/**
 * Fetches multiple contextual Pexels images in parallel, keyed by an arbitrary id
 * (e.g. a section heading id) so callers can place each image next to its section.
 */
export async function fetchPexelsImages(
  queries: { id: string; query: string; fallbackAlt: string }[],
): Promise<Record<string, PexelsImage | null>> {
  const results = await Promise.all(
    queries.map(async (q) => [q.id, await fetchPexelsImage(q.query, q.fallbackAlt)] as const),
  );
  return Object.fromEntries(results);
}
