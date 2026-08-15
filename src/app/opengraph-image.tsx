import { ImageResponse } from 'next/og';

export const alt = 'WhiteGuava — AI Software Development Company | Bengaluru';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
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
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            color: '#E63B2E',
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          WhiteGuava
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.04em',
              color: '#161616',
            }}
          >
            AI Software Development Company
          </div>
          <div style={{ fontSize: 28, color: '#555555', fontWeight: 500 }}>
            AI agents, automation, and custom software — Bengaluru, India
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: '#666666',
            fontSize: 22,
          }}
        >
          <span>thewhiteguava.in</span>
          <span
            style={{
              background: '#E63B2E',
              color: '#ffffff',
              borderRadius: 999,
              padding: '10px 22px',
              fontWeight: 700,
            }}
          >
            Build Smarter. With AI.
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
