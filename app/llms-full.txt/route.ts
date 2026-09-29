import { landingContent, legalContent, pageMetadata, siteConfig } from '../../data/pages';
import { professions } from '../../data/professions';

export const dynamic = 'force-static';

export function GET() {
  const url = siteConfig.url;
  const sections = [
    `# ${siteConfig.name}\n\nCanonical website: ${url}\nCreated by ${siteConfig.creator}. Contact: ${landingContent.contact.email}.`,
    '## Overview\n\nA free online CV and resume builder. No account is required. Choose a profession and role, replace the example content with your own experience, customize sections, and export PDF, Word (.doc), or Markdown (.md). Editing and downloads require a JavaScript-capable browser. This guide describes public templates, not private user resumes.',
    '## Drafts and export\n\nDrafts are saved in the current browser. Download a copy before clearing browser data or changing devices. Clear headings and structured sections can help readability, but no ATS outcome or job offer is guaranteed. Follow each employer’s file-format instructions.',
    '## Public pages\n\n' + Object.entries(pageMetadata).map(([path, page]) => `### [${page.title}](${url}${path})\n\n${page.description}`).join('\n\n'),
    '## Features\n\n' + landingContent.features.cards.map(item => `### ${item.title}\n\n${item.description}`).join('\n\n'),
    '## How to create a CV\n\n' + landingContent.howItWorks.steps.map((step, i) => `${i + 1}. **${step.title}:** ${step.description}`).join('\n'),
    '## Profession templates and roles\n\n' + professions.map(profession => `### [${profession.name}](${url}/editor/${profession.id})\n\n${profession.description}\n\nAvailable roles: ${profession.roles.map(role => `${role.name} — ${role.description}`).join('; ')}.\n\nAll starting content is illustrative and must be personalized.`).join('\n\n'),
    ...Object.entries(legalContent).map(([path, page]) => `## [${page.title}](${url}/${path})\n\n${page.sections.map(section => `### ${section.heading}\n\n${section.body}`).join('\n\n')}`),
  ];
  return new Response(sections.join('\n\n') + '\n', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8', 'X-Content-Type-Options': 'nosniff' },
  });
}
