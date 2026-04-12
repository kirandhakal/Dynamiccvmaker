/** Build default CV + stable role ids from compact role specs used in the profession catalog. */

export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

const genericSummaryFor = (roleTitle) =>
  `Add a concise professional summary for your background as a ${roleTitle}. Mention experience, core strengths, and the value you bring — replace this text with your own.`;

const GENERIC_EXPERIENCE = [
  {
    position: 'Your Job Title',
    company: 'Company Name',
    period: 'Start – Present',
    description:
      'Summarize responsibilities and measurable results. Use action verbs and numbers where possible.',
  },
  {
    position: 'Previous Role',
    company: 'Previous Company',
    period: 'Start – End',
    description: 'Highlight achievements relevant to your target role.',
  },
];

const GENERIC_EDUCATION = [
  {
    degree: 'Your Degree or Qualification',
    institution: 'Institution Name',
    period: 'Years',
  },
];

const DEFAULT_PROJECT_ROW = {
  name: 'Key achievement or project',
  link: '',
  description:
    'Describe a concrete outcome (e.g. improved efficiency, revenue, satisfaction) relevant to this role.',
};

function mergeSkills(roleSkills, professionBuckets) {
  if (roleSkills && roleSkills.length) return roleSkills;
  if (professionBuckets && professionBuckets.length) return professionBuckets;
  return [
    { category: 'Core', items: 'Communication, teamwork, problem-solving, time management' },
    { category: 'Technical', items: 'Industry tools and methods — customize for your background' },
    { category: 'Compliance & Quality', items: 'Standards, documentation, safety (as applicable)' },
  ];
}

export function buildDefaultCv(roleTitle, options) {
  const {
    summary = null,
    skills = null,
    professionSkillBuckets = null,
    projectsTitle = 'HIGHLIGHTS',
    projectItems = null,
    includeGithub = false,
    includePortfolioUrl = false,
  } = options;

  const contact = {
    location: 'City, Country',
    email: 'your.email@example.com',
    portfolio: includePortfolioUrl || includeGithub ? 'https://yourportfolio.com' : '',
    linkedin: 'https://linkedin.com/in/yourprofile',
  };
  if (includeGithub) contact.github = 'https://github.com/yourusername';

  const skillItems = mergeSkills(skills, professionSkillBuckets);

  return {
    name: 'YOUR NAME',
    title: roleTitle,
    contact,
    sections: [
      {
        id: 1,
        title: 'PROFESSIONAL SUMMARY',
        type: 'text',
        content: summary || genericSummaryFor(roleTitle),
      },
      { id: 2, title: 'KEY SKILLS', type: 'skills', items: skillItems },
      {
        id: 3,
        title: projectsTitle,
        type: 'projects',
        items: projectItems && projectItems.length ? projectItems : [DEFAULT_PROJECT_ROW],
      },
      { id: 4, title: 'WORK EXPERIENCE', type: 'experience', items: GENERIC_EXPERIENCE },
      { id: 5, title: 'EDUCATION', type: 'education', items: GENERIC_EDUCATION },
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
    projectsTitle: projectsTitle || professionDefaults.projectsTitle || 'HIGHLIGHTS',
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
