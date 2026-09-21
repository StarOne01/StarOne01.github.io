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
          background: '#F7F5EF',
          borderRadius: 14,
          fontSize: 40,
          fontWeight: 700,
          color: '#0F6B4A',
          fontFamily: 'sans-serif',
        }}
      >
        S
      </div>
    ),
    { ...size }
  );
}
