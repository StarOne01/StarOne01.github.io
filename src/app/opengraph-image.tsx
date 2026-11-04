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
          background: '#070D17',
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
              'radial-gradient(circle at 50% 38%, rgba(67,232,184,0.18) 0%, rgba(7,13,23,0) 60%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at 82% 12%, rgba(129,108,255,0.15) 0%, rgba(7,13,23,0) 55%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 40,
            left: 40,
            color: 'rgba(237,236,228,0.55)',
            fontSize: 22,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: 10,
          }}
        >
          <span style={{ display: 'flex', width: 10, height: 10, borderRadius: 9999, background: '#43E8B8' }} />
          coimbatore · in
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            right: 40,
            color: 'rgba(237,236,228,0.4)',
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
            border: '1px solid rgba(237,236,228,0.14)',
            borderRadius: 32,
            background: 'rgba(12,21,34,0.85)',
          }}
        >
          <h1
            style={{
              fontSize: 120,
              fontWeight: 800,
              color: '#EDECE4',
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
            <span style={{ display: 'flex', width: 36, height: 1, background: 'rgba(237,236,228,0.16)' }} />
            <span
              style={{
                color: '#43E8B8',
                fontSize: 28,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}
            >
              Systems Engineer
            </span>
            <span style={{ display: 'flex', width: 36, height: 1, background: 'rgba(237,236,228,0.16)' }} />
          </div>
          <div
            style={{
              display: 'flex',
              gap: 14,
              marginTop: 56,
              fontSize: 22,
              color: 'rgba(237,236,228,0.55)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            <span>ASR</span>
            <span style={{ color: 'rgba(237,236,228,0.22)' }}>·</span>
            <span>Compilers</span>
            <span style={{ color: 'rgba(237,236,228,0.22)' }}>·</span>
            <span>Inference</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
