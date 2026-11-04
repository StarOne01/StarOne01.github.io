import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';
export const alt = `${"Prashanth T."} (StarOne01), Systems Engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#080A08',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '56px 64px',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            backgroundImage:
              'linear-gradient(to right, rgba(237,235,226,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(237,235,226,0.06) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            background:
              'radial-gradient(circle at 18% 0%, rgba(140,255,193,0.14) 0%, rgba(8,10,8,0) 55%)',
          }}
        />

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 20,
            letterSpacing: '0.24em',
            textTransform: 'uppercase',
            color: 'rgba(237,235,226,0.55)',
          }}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ display: 'flex', width: 10, height: 10, background: '#8CFFC1' }} />
            sys.portfolio / 2026
          </span>
          <span style={{ display: 'flex' }}>11.01°N · 76.95°E</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              color: '#8CFFC1',
              fontSize: 24,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
          >
            <span style={{ display: 'flex', width: 44, height: 2, background: '#8CFFC1' }} />
            Systems engineer
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 132,
              fontWeight: 800,
              letterSpacing: '-0.04em',
              lineHeight: 1,
              color: '#EDEBE2',
              textTransform: 'uppercase',
              marginTop: 18,
            }}
          >
            Prashanth
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 30,
              color: 'rgba(237,235,226,0.6)',
              marginTop: 20,
            }}
          >
            AI systems that run on real silicon.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid rgba(237,235,226,0.14)',
            paddingTop: 22,
            fontSize: 20,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
          }}
        >
          <span style={{ display: 'flex', color: '#8CFFC1' }}>
            compilers · inference · embeddings
          </span>
          <span style={{ display: 'flex', color: 'rgba(237,235,226,0.5)' }}>@starone01</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
