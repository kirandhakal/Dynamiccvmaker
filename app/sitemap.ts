import { professions } from '../data/professions';
import { pageMetadata, siteConfig } from '../data/pages';
import type { SitePath } from '../types/pages';

export default function sitemap() {
  const paths = Object.keys(pageMetadata) as SitePath[];
  return [
    ...paths.map((path) => ({
      url: `${siteConfig.url}${path}`,
      changeFrequency: 'weekly' as const,
      priority: path === '/' ? 1 : 0.7,
    })),
    ...professions.map(({ id }) => ({
      url: `${siteConfig.url}/editor/${id}`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];
}
