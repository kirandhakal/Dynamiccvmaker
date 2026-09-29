import landingJson from './landing.json';
import privacyJson from '../legal/privacy.json';
import termsJson from '../legal/terms.json';
import siteJson from './site.json';
import editorJson from './editor.json';
import type { LandingPageContent, LegalPageContent, SiteConfiguration, SitePath } from '../../types/pages';

export const landingContent = landingJson as LandingPageContent;
export const siteConfig = siteJson as SiteConfiguration;
export const editorContent = editorJson;
export const legalContent: Record<'privacy' | 'terms', LegalPageContent> = {
  privacy: privacyJson as LegalPageContent,
  terms: termsJson as LegalPageContent,
};
export const pageMetadata = landingContent.metadata;
export const getPageMetadata = (path: SitePath) => pageMetadata[path];
