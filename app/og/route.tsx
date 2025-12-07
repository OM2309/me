// app/og/route.tsx
import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const title = searchParams.get('title') ?? 'Anurag Sharma';
  const description =
    searchParams.get('description') ??
    'Full Stack Developer • React, Next.js, TypeScript';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          fontFamily: '"Inter", "Geist", system-ui, sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            marginBottom: 32,
            textAlign: 'center',
            maxWidth: '90%',
            letterSpacing: '-0.02em',
          }}
        >
          {title}
        </div>

        <div
          style={{
            fontSize: 40,
            opacity: 0.9,
            textAlign: 'center',
            maxWidth: '90%',
          }}
        >
          {description}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}