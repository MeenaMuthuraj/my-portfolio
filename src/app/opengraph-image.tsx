import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0f1115',
          position: 'relative',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Decorative blobs */}
        <div
          style={{
            position: 'absolute',
            top: '-80px',
            left: '-80px',
            width: '450px',
            height: '450px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(139,92,246,0.25), transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-80px',
            right: '-80px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(217,70,239,0.2), transparent 70%)',
          }}
        />

        {/* Outer card */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px',
            padding: '56px 80px',
            border: '1px solid rgba(139,92,246,0.25)',
            borderRadius: '32px',
            background: 'rgba(26, 28, 35, 0.8)',
            zIndex: 1,
            minWidth: '800px',
          }}
        >
          {/* Logo badge */}
          <div
            style={{
              width: '90px',
              height: '90px',
              borderRadius: '24px',
              background: 'linear-gradient(135deg, #8b5cf6, #d946ef)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 40px rgba(139, 92, 246, 0.5)',
            }}
          >
            <span style={{ color: '#fff', fontSize: '56px', fontWeight: 900, lineHeight: 1 }}>M</span>
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: '72px',
              fontWeight: 900,
              color: '#ffffff',
              letterSpacing: '-2px',
              lineHeight: 1,
              display: 'flex',
            }}
          >
            Meena M
          </div>

          {/* Title tag */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 28px',
              borderRadius: '100px',
              background: 'rgba(139, 92, 246, 0.12)',
              border: '1px solid rgba(139, 92, 246, 0.3)',
            }}
          >
            <div
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: '#a78bfa',
              }}
            />
            <span
              style={{
                color: '#a78bfa',
                fontSize: '26px',
                fontWeight: 700,
                letterSpacing: '4px',
                textTransform: 'uppercase',
                display: 'flex',
              }}
            >
              Quality Assurance Engineer
            </span>
          </div>

          {/* Tagline */}
          <div
            style={{
              color: '#94a3b8',
              fontSize: '22px',
              textAlign: 'center',
              maxWidth: '600px',
              display: 'flex',
              lineHeight: 1.5,
            }}
          >
            1 Year of Experience @ Skillmine Technologies · Portfolio 2025
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
