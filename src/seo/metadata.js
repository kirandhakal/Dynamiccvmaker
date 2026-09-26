export const siteUrl = 'https://cv.dhakalkiran.com.np';
export const shareImage = '/opengraph-image';

export function createPageMetadata({ title, description, path = '/', noIndex = false }) {
  const canonical = `${siteUrl}${path}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website', url: canonical, siteName: 'CV Maker', title, description,
      images: [{ url: shareImage, width: 1200, height: 630, alt: 'Free CV Maker — Build an ATS-friendly resume online' }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [shareImage] },
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
  };
}
