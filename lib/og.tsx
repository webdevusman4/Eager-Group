/**
 * Shared template for Open Graph / social sharing images (1200x630).
 * Used by the opengraph-image files in app/. Rendered at build time.
 */
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = 'image/png';

const root = process.cwd();
const asset = (...p: string[]) => readFile(join(root, ...p));

async function loadAssets() {
  const [serif, inter, interSemi, logo, portrait] = await Promise.all([
    asset('node_modules/@fontsource/source-serif-4/files/source-serif-4-latin-600-normal.woff'),
    asset('node_modules/@fontsource/inter/files/inter-latin-500-normal.woff'),
    asset('node_modules/@fontsource/inter/files/inter-latin-600-normal.woff'),
    asset('public/logo.png'),
    asset('lib/og-assets/portrait.jpg'),
  ]);
  return {
    fonts: [
      { name: 'Serif', data: serif, weight: 600 as const, style: 'normal' as const },
      { name: 'Inter', data: inter, weight: 500 as const, style: 'normal' as const },
      { name: 'Inter', data: interSemi, weight: 600 as const, style: 'normal' as const },
    ],
    logo: `data:image/png;base64,${logo.toString('base64')}`,
    portrait: `data:image/jpeg;base64,${portrait.toString('base64')}`,
  };
}

export async function renderOgImage({
  eyebrow,
  title,
  subtitle,
  footer = 'eagertrainings.com',
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  footer?: string;
}) {
  const { fonts, logo, portrait } = await loadAssets();
  const titleSize = title.length > 60 ? 50 : title.length > 40 ? 58 : 66;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          fontFamily: 'Inter',
          color: '#ffffff',
          background: 'linear-gradient(150deg, #16228a 0%, #0a1260 48%, #050a36 100%)',
        }}
      >
        {/* soft indigo and gold light */}
        <div
          style={{
            position: 'absolute',
            top: -220,
            right: -120,
            width: 620,
            height: 620,
            borderRadius: 9999,
            background: 'radial-gradient(circle, rgba(56,82,230,0.45) 0%, rgba(56,82,230,0) 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -260,
            left: -160,
            width: 560,
            height: 560,
            borderRadius: 9999,
            background: 'radial-gradient(circle, rgba(201,162,75,0.22) 0%, rgba(201,162,75,0) 70%)',
          }}
        />

        {/* Copy */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '64px 0 60px 72px', width: 700 }}>
          <div style={{ display: 'flex' }}>
            <div style={{ display: 'flex', background: '#ffffff', borderRadius: 9999, padding: '14px 26px' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={logo} width={164} height={42} alt="" />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, color: '#e8cf95', fontSize: 20, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase' }}>
              <div style={{ width: 40, height: 2, background: '#c9a24b' }} />
              {eyebrow}
            </div>
            <div style={{ marginTop: 22, fontFamily: 'Serif', fontSize: titleSize, lineHeight: 1.08, letterSpacing: -0.5 }}>{title}</div>
            {subtitle && (
              <div style={{ marginTop: 22, fontSize: 24, lineHeight: 1.45, color: 'rgba(255,255,255,0.75)' }}>{subtitle}</div>
            )}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 20, color: 'rgba(255,255,255,0.65)' }}>
            <div style={{ width: 8, height: 8, borderRadius: 9999, background: '#c9a24b' }} />
            {footer}
          </div>
        </div>

        {/* Portrait */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1, paddingRight: 64 }}>
          <div
            style={{
              display: 'flex',
              borderRadius: 32,
              overflow: 'hidden',
              border: '2px solid rgba(255,255,255,0.18)',
              boxShadow: '0 30px 60px rgba(0,0,0,0.45)',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={portrait} width={360} height={450} alt="" style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </div>
    ),
    { ...OG_SIZE, fonts }
  );
}
