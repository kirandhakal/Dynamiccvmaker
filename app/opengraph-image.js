import { ImageResponse } from 'next/og';

export const alt = 'Free CV Maker — Build an ATS-friendly resume online';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '88px', background: '#f7f5ef', color: '#0f172a', fontFamily: 'Arial' }}>
      <div style={{ display: 'flex', fontSize: 28, fontWeight: 700, color: '#4f46e5' }}>CV MAKER</div>
      <div style={{ display: 'flex', marginTop: 34, maxWidth: 950, fontSize: 76, lineHeight: 1.05, fontWeight: 800, letterSpacing: -3 }}>Build an ATS-friendly CV that gets read.</div>
      <div style={{ display: 'flex', marginTop: 28, fontSize: 30, color: '#475569' }}>Free online resume builder · Role-specific templates · PDF, Word & Markdown</div>
    </div>, size,
  );
}
