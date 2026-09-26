import './globals.css';

const siteUrl = 'https://cv.dhakalkiran.com.np';
const title = 'Free CV Maker | Build an ATS-Friendly Resume Online';
const description = 'Create a professional, ATS-friendly CV with role-specific templates, flexible sections, live preview, and PDF, Word, or Markdown export.';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website', url: siteUrl, siteName: 'CV Maker', title,
    description: 'Choose a role-specific CV template, customize every section, and export a professional resume.',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Free CV Maker — Build an ATS-friendly resume online' }],
  },
  twitter: { card: 'summary_large_image', title, description, images: ['/twitter-image'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  keywords: ['free CV maker', 'online resume builder', 'ATS friendly resume', 'professional CV templates'],
  authors: [{ name: 'Kiran Dhakal' }], creator: 'Kiran Dhakal', publisher: 'CV Maker',
  manifest: '/manifest.json',
  icons: { icon: '/cv-maker-icon.png', apple: '/cv-maker-icon.png' },
};

const structuredData = {
  '@context': 'https://schema.org', '@graph': [
    { '@type': 'WebSite', '@id': `${siteUrl}/#website`, url: siteUrl, name: 'CV Maker', description, inLanguage: 'en' },
    { '@type': 'SoftwareApplication', '@id': `${siteUrl}/#app`, name: 'CV Maker', url: siteUrl, applicationCategory: 'BusinessApplication', operatingSystem: 'Any', isAccessibleForFree: true, description, offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, creator: { '@type': 'Person', name: 'Kiran Dhakal' } },
  ],
};

export default function RootLayout({ children }) {
  return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />{children}</body></html>;
}
