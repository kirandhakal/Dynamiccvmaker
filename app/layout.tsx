import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { getPageMetadata, siteConfig } from '../data/pages';
import { siteUrl } from '../seo/metadata';

const homeMetadata = getPageMetadata('/');
const title = homeMetadata.title;
const description = homeMetadata.description;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website', url: siteUrl, siteName: siteConfig.name, title, description,
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: siteConfig.shareImageAlt }],
  },
  twitter: { card: 'summary_large_image', title, description, images: ['/twitter-image'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.creator }], creator: siteConfig.creator, publisher: siteConfig.publisher,
  manifest: '/manifest.json',
  icons: { icon: '/cv-maker-icon.png', apple: '/cv-maker-icon.png' },
};

const structuredData = {
  '@context': 'https://schema.org', '@graph': [
    { '@type': 'WebSite', '@id': `${siteUrl}/#website`, url: siteUrl, name: siteConfig.name, description, inLanguage: 'en' },
    { '@type': 'SoftwareApplication', '@id': `${siteUrl}/#app`, name: siteConfig.name, url: siteUrl, applicationCategory: 'BusinessApplication', operatingSystem: 'Any', isAccessibleForFree: true, description, offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, creator: { '@type': 'Person', name: siteConfig.creator } },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />{children}</body></html>;
}
