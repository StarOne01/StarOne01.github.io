import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const dynamic = 'force-static';
export const alt = `${"Prashanth T."} (StarOne01), Systems Engineer`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#F7F5EF',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at 50% 40%, rgba(15,107,74,0.10) 0%, rgba(247,245,239,0) 60%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 40,
            left: 40,
            color: 'rgba(28,27,23,0.5)',
            fontSize: 22,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <span style={{ display: 'flex', width: 10, height: 10, borderRadius: 9999, background: '#0F6B4A' }} />
          coimbatore · in
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            right: 40,
            color: 'rgba(28,27,23,0.4)',
            fontSize: 20,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
          }}
        >
          @starone01
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '60px 90px',
            border: '1px solid #E5E1D6',
            borderRadius: 32,
            background: '#FFFFFF',
          }}
        >
          <h1
            style={{
              fontSize: 120,
              fontWeight: 800,
              color: '#1C1B17',
              letterSpacing: '-0.04em',
              margin: 0,
              lineHeight: 1,
            }}
          >
            Prashanth
          </h1>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 18,
              margin: '24px 0 0 0',
            }}
          >
            <span style={{ display: 'flex', width: 36, height: 1, background: '#E5E1D6' }} />
            <span
              style={{
                color: '#0F6B4A',
                fontSize: 28,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}
            >
              Systems Engineer
            </span>
            <span style={{ display: 'flex', width: 36, height: 1, background: '#E5E1D6' }} />
          </div>
          <div
            style={{
              display: 'flex',
              gap: 14,
              marginTop: 56,
              fontSize: 22,
              color: 'rgba(28,27,23,0.55)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            <span>ASR</span>
            <span style={{ color: 'rgba(28,27,23,0.25)' }}>·</span>
            <span>Compilers</span>
            <span style={{ color: 'rgba(28,27,23,0.25)' }}>·</span>
            <span>Inference</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
