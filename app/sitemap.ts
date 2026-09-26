import { professions } from '../data/professions';
import { pageMetadata, siteConfig } from '../data/pages';
import type { SitePath } from '../types/pages';

export default function sitemap() {
  const paths = Object.keys(pageMetadata) as SitePath[];
  const now = new Date();
  return [
    ...paths.map((path) => ({
      url: `${siteConfig.url}${path}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: path === '/' ? 1 : 0.7,
    })),
    ...professions.map(({ id }) => ({
      url: `${siteConfig.url}/editor/${id}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];
}
