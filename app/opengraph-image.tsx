import { ImageResponse } from 'next/og';
import { landingContent, siteConfig } from '../data/pages';

export const alt = siteConfig.shareImageAlt;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '88px', background: '#f7f5ef', color: '#0f172a', fontFamily: 'Arial' }}>
      <div style={{ display: 'flex', fontSize: 28, fontWeight: 700, color: '#4f46e5' }}>{siteConfig.name.toUpperCase()}</div>
      <div style={{ display: 'flex', marginTop: 34, maxWidth: 950, fontSize: 76, lineHeight: 1.05, fontWeight: 800, letterSpacing: -3 }}>{landingContent.hero.headline} {landingContent.hero.headlineAccent}</div>
      <div style={{ display: 'flex', marginTop: 28, fontSize: 30, color: '#475569' }}>{landingContent.hero.description}</div>
    </div>, size,
  );
}
