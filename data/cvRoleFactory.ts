import cvDefaults from './cv-defaults.json';

/** Build default CV + stable role ids from compact role specs used in the profession catalog. */

export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function mergeSkills(roleSkills, professionBuckets) {
  if (roleSkills && roleSkills.length) return roleSkills;
  if (professionBuckets && professionBuckets.length) return professionBuckets;
  return cvDefaults.fallbackSkills;
}

export function buildDefaultCv(roleTitle, options) {
  const {
    summary = null,
    skills = null,
    professionSkillBuckets = null,
    projectsTitle = cvDefaults.sectionTitles.projects,
    projectItems = null,
    includeGithub = false,
    includePortfolioUrl = false,
  } = options;

  const contact: Record<string, string> = {
    location: cvDefaults.contactDefaults.location,
    email: cvDefaults.contactDefaults.email,
    portfolio: includePortfolioUrl || includeGithub ? cvDefaults.contactDefaults.portfolio : '',
    linkedin: cvDefaults.contactDefaults.linkedin,
  };
  if (includeGithub) contact.github = cvDefaults.contactDefaults.github;

  const skillItems = mergeSkills(skills, professionSkillBuckets);

  return {
    name: cvDefaults.defaultName,
    title: roleTitle,
    contact,
    sections: [
      {
        id: 1,
        title: cvDefaults.sectionTitles.summary,
        type: 'text',
        content: summary || cvDefaults.summaryTemplate.replace('{roleTitle}', roleTitle),
      },
      { id: 2, title: cvDefaults.sectionTitles.skills, type: 'skills', items: skillItems },
      {
        id: 3,
        title: projectsTitle,
        type: 'projects',
        items: projectItems && projectItems.length ? projectItems : [{ ...cvDefaults.defaultProject }],
      },
      { id: 4, title: cvDefaults.sectionTitles.experience, type: 'experience', items: cvDefaults.genericExperience },
      { id: 5, title: cvDefaults.sectionTitles.education, type: 'education', items: cvDefaults.genericEducation },
    ],
  };
}

export function materializeRole(professionId, spec, professionDefaults) {
  const {
    name,
    icon,
    description,
    color,
    skills,
    summary,
    projectsTitle,
    projectItems,
    includeGithub,
    includePortfolioUrl,
  } = spec;

  const defaultCv = buildDefaultCv(name, {
    summary,
    skills,
    professionSkillBuckets: professionDefaults.skillBuckets,
    projectsTitle: projectsTitle || professionDefaults.projectsTitle || cvDefaults.sectionTitles.projects,
    projectItems,
    includeGithub: includeGithub ?? professionDefaults.includeGithub ?? false,
    includePortfolioUrl: includePortfolioUrl ?? professionDefaults.includePortfolioUrl ?? false,
  });

  return {
    id: `${professionId}-${slugify(name)}`,
    name,
    icon,
    color,
    description,
    defaultCv,
  };
}

export function materializeProfession(entry) {
  const {
    id,
    name,
    title,
    subtitle,
    description,
    color,
    accent,
    features,
    templateStyleId,
    roles: roleSpecs,
    skillBuckets,
    projectsTitle,
    includeGithub,
    includePortfolioUrl,
  } = entry;

  const professionDefaults = {
    skillBuckets,
    projectsTitle,
    includeGithub,
    includePortfolioUrl,
  };

  const roles = roleSpecs.map((spec) => materializeRole(id, spec, professionDefaults));

  return {
    id,
    name,
    title,
    subtitle,
    description,
    color,
    accent,
    features,
    templateStyleId,
    roles,
    defaultCv: roles[0]
      ? roles[0].defaultCv
      : buildDefaultCv('Professional', {
          professionSkillBuckets: professionDefaults.skillBuckets,
          projectsTitle: professionDefaults.projectsTitle,
          includeGithub: professionDefaults.includeGithub,
          includePortfolioUrl: professionDefaults.includePortfolioUrl,
        }),
  };
}
