import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'Prashanth | AI & Systems Engineer';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-50%',
            left: '-50%',
            width: '200%',
            height: '200%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0) 50%)',
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 80px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '24px',
            background: 'rgba(255, 255, 255, 0.02)',
          }}
        >
          <h1
            style={{
              fontSize: '84px',
              fontWeight: 800,
              color: 'white',
              letterSpacing: '-0.02em',
              margin: '0 0 20px 0',
              textAlign: 'center',
            }}
          >
            Prashanth
          </h1>
          <p
            style={{
              fontSize: '42px',
              color: 'rgba(255, 255, 255, 0.6)',
              margin: 0,
              textAlign: 'center',
              fontWeight: 500,
            }}
          >
            AI & Systems Engineer
          </p>
          
          <div style={{ display: 'flex', gap: '20px', marginTop: '60px' }}>
            <span style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '24px' }}>Distributed Architecture</span>
            <span style={{ color: 'rgba(255, 255, 255, 0.2)', fontSize: '24px' }}>•</span>
            <span style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '24px' }}>Machine Learning Pipelines</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}