import { ImageResponse } from 'next/og';
import { blogPostList, getBlogPost } from '@/data/blog';

export const alt = 'WhiteGuava blog article';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export function generateStaticParams() {
  return blogPostList.map((post) => ({ slug: post.slug }));
}

export default async function OgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  const heading = post?.h1 ?? 'WhiteGuava';
  const category = post?.category ?? 'Blog';
  const kicker = post?.productSchema ? 'One-time setup · You own it' : 'WhiteGuava';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#E7E7E7',
          padding: '64px 72px',
          fontFamily: 'Inter, system-ui, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <span
            style={{
              color: '#E63B2E',
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            WhiteGuava
          </span>
          <span
            style={{
              background: '#161616',
              color: '#fff',
              borderRadius: 999,
              padding: '6px 16px',
              fontSize: 18,
              fontWeight: 700,
            }}
          >
            {category}
          </span>
        </div>

        <div
          style={{
            fontSize: heading.length > 60 ? 52 : 62,
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: '-0.035em',
            color: '#161616',
            display: 'flex',
          }}
        >
          {heading}
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: '#666',
            fontSize: 22,
          }}
        >
          <span>thewhiteguava.in</span>
          <span
            style={{
              background: '#E63B2E',
              color: '#fff',
              borderRadius: 999,
              padding: '10px 22px',
              fontWeight: 700,
            }}
          >
            {kicker}
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
