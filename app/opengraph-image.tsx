import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'UaDay Cleaning — Melbourne Professional Cleaning Service'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: 'linear-gradient(135deg, #1a6b3a 0%, #2d9e5c 60%, #3bbf6e 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: 'absolute',
            top: '-80px',
            right: '-80px',
            width: '360px',
            height: '360px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.07)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-60px',
            left: '-60px',
            width: '280px',
            height: '280px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.05)',
          }}
        />

        {/* Logo container */}
        <div
          style={{
            background: 'white',
            borderRadius: '24px',
            padding: '20px 36px',
            marginBottom: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 40px rgba(0,0,0,0.18)',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://uadaycleaning.com.au/images/logo.png"
            alt="UaDay Cleaning"
            style={{ height: '90px', width: 'auto', objectFit: 'contain' }}
          />
        </div>

        {/* Headline */}
        <div
          style={{
            color: 'white',
            fontSize: '46px',
            fontWeight: '800',
            letterSpacing: '-0.5px',
            textAlign: 'center',
            lineHeight: 1.15,
            marginBottom: '16px',
            maxWidth: '860px',
            textShadow: '0 2px 12px rgba(0,0,0,0.2)',
          }}
        >
          Melbourne&apos;s Trusted Cleaning Professionals
        </div>

        {/* Subline */}
        <div
          style={{
            color: 'rgba(255,255,255,0.88)',
            fontSize: '24px',
            fontWeight: '500',
            textAlign: 'center',
            maxWidth: '780px',
            lineHeight: 1.4,
            marginBottom: '36px',
          }}
        >
          Residential · Commercial · End of Lease · Deep Clean
        </div>

        {/* Trust badges row */}
        <div style={{ display: 'flex', gap: '20px' }}>
          {['✓ Fully Insured', '✓ Bond-Back Guarantee', '✓ 5-Star Rated'].map((badge) => (
            <div
              key={badge}
              style={{
                background: 'rgba(255,255,255,0.15)',
                border: '1px solid rgba(255,255,255,0.3)',
                borderRadius: '50px',
                padding: '10px 22px',
                color: 'white',
                fontSize: '17px',
                fontWeight: '600',
              }}
            >
              {badge}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  )
}
