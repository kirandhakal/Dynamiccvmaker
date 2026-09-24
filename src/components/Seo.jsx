import { useEffect } from 'react';

const upsertMeta = (name, content, property = false) => {
  const attribute = property ? 'property' : 'name';
  let element = document.head.querySelector(`meta[${attribute}="${name}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

export default function Seo({ title, description, keywords, path = '/' }) {
  useEffect(() => {
    document.title = title;
    upsertMeta('description', description);
    upsertMeta('keywords', keywords);
    upsertMeta('robots', 'index, follow');
    upsertMeta('og:title', title, true);
    upsertMeta('og:description', description, true);
    upsertMeta('og:type', 'website', true);
    upsertMeta('og:url', `${window.location.origin}${path}`, true);
    upsertMeta('twitter:card', 'summary');
    upsertMeta('twitter:title', title);
    upsertMeta('twitter:description', description);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `${window.location.origin}${path}`);
  }, [title, description, keywords, path]);

  return null;
}
