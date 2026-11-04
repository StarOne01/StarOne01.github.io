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
          background: '#070D17',
          borderRadius: 14,
          fontSize: 40,
          fontWeight: 700,
          color: '#43E8B8',
          fontFamily: 'sans-serif',
        }}
      >
        S
      </div>
    ),
    { ...size }
  );
}
