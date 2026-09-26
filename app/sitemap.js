import { professions } from '../src/data/professions';
const base = 'https://cv.dhakalkiran.com.np';
export default function sitemap() {
  const pages = ['', '/templates', '/features', '/how-it-works', '/pricing', '/contact', '/privacy', '/terms'];
  const now = new Date();
  return [...pages.map((path) => ({ url: `${base}${path}`, lastModified: now, changeFrequency: 'weekly', priority: path ? 0.7 : 1 })), ...professions.map(({ id }) => ({ url: `${base}/editor/${id}`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 }))];
}
