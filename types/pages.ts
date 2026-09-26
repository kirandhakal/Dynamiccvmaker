export type SitePath = '/' | '/templates' | '/features' | '/how-it-works' | '/pricing' | '/contact' | '/privacy' | '/terms';

export interface SiteConfiguration {
  name: string; url: string; creator: string; publisher: string; keywords: string[];
  socialProfiles: { x: string; linkedin: string; github: string };
  shareImageAlt: string;
}

export interface PageMetadataContent {
  title: string;
  description: string;
}

export interface NavigationLink {
  name: string;
  href: string;
}

export interface TextItem {
  title: string;
  text: string;
}

export interface DescriptionItem {
  title: string;
  description: string;
}

export interface LandingPageContent {
  metadata: Record<SitePath, PageMetadataContent>;
  editor: { titleSuffix: string; descriptionTemplate: string; fallbackTitle: string; fallbackDescription: string };
  roleSelection: { back: string; close: string; eyebrow: string; questionPrefix: string; questionNoun: string; description: string; searchLabel: string; searchPlaceholder: string; countTemplate: string; noResults: string; previewPrefix: string; closeEditor: string };
  editorUi: { home: string; changeRole: string };
  navigation: { links: NavigationLink[]; startLabel: string };
  hero: {
    eyebrow: string; headline: string; headlineAccent: string; description: string;
    primaryAction: string; secondaryAction: string; benefits: string[];
    previewTitle: string; previewStatus: string; previewReady: string; previewName: string;
    previewRole: string; previewLocation: string; previewPortfolio: string;
    previewSections: Array<{ title: string; copy: string }>; dragLabel: string; exportTitle: string; exportFormats: string;
  };
  templates: { title: string; description: string; openTemplate: string; rolesLabel: string };
  sectionTypes: { eyebrow: string; title: string; description: string; items: TextItem[] };
  howItWorks: { title: string; description: string; steps: DescriptionItem[] };
  features: { cards: DescriptionItem[] };
  contact: Record<string, string> & { titleLead: string; titleAccent: string };
  footer: {
    tagline: string; exploreLabel: string; creatorLabel: string; creatorName: string;
    creatorUrl: string; email: string; copyright: string; privacyLabel: string;
    termsLabel: string; links: Array<{ label: string; href: string }>;
  };
}

export interface LegalSection {
  heading: string;
  body: string;
}

export interface LegalPageContent {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export type EditorContent = typeof import('../data/pages/editor.json').default;
