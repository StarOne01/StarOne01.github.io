import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';
export const size = { width: 64, height: 64 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#080A08',
          borderRadius: 12,
          fontSize: 38,
          fontWeight: 700,
          color: '#B8F24C',
          fontFamily: 'monospace',
        }}
      >
        S<span style={{ opacity: 0.5 }}>_</span>
      </div>
    ),
    { ...size }
  );
}
