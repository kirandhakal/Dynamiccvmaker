import type { Metadata } from 'next';
import type { PageMetadataContent } from '../types/pages';
import { siteConfig } from '../data/pages';

export const siteUrl = siteConfig.url;
export const shareImage = '/opengraph-image';

interface MetadataOptions extends PageMetadataContent { path?: string; noIndex?: boolean }

export function createPageMetadata({ title, description, path = '/', noIndex = false }: MetadataOptions): Metadata {
  const canonical = `${siteUrl}${path}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website', url: canonical, siteName: siteConfig.name, title, description,
      images: [{ url: shareImage, width: 1200, height: 630, alt: `${siteConfig.name} — Build an ATS-friendly resume online` }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [shareImage] },
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
  };
}
