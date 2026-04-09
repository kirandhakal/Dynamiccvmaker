export const professions = [
  {
    id: 'it',
    name: 'IT Professional',
    title: 'Software & Tech',
    subtitle: 'Full Stack Developer • DevOps • Data Engineer',
    description: 'ATS-optimized CV for developers with project and code showcase.',
    color: 'from-gray-700 to-gray-900',
    accent: 'bg-gray-800',
    features: ['ATS Friendly', 'GitHub Showcase', 'Project Focus'],
    templateStyleId: 1,
    defaultCv: {
      name: 'ARJUN SHARMA',
      title: 'Full Stack Developer',
      contact: {
        location: 'Bangalore, India',
        email: 'arjun.sharma.dev@gmail.com',
        portfolio: 'https://arjun-dev.vercel.app',
        linkedin: 'https://linkedin.com/in/arjunsharma',
        github: 'https://github.com/arjunsharma',
      },
      sections: [
        {
          id: 1,
          title: 'PROFESSIONAL SUMMARY',
          type: 'text',
          content:
            'Full Stack Developer with 4+ years of experience building scalable web apps using modern JavaScript frameworks and cloud technologies.',
        },
        {
          id: 2,
          title: 'TECH STACK',
          type: 'skills',
          items: [
            { category: 'Frontend', items: 'React, Next.js, Tailwind CSS' },
            { category: 'Backend', items: 'Node.js, Express, Django' },
            { category: 'Database', items: 'MongoDB, PostgreSQL' },
            { category: 'DevOps', items: 'Docker, AWS, CI/CD' },
          ],
        },
        {
          id: 3,
          title: 'PROJECTS',
          type: 'projects',
          items: [
            {
              name: 'Job Portal Platform',
              link: 'https://github.com/arjunsharma/job-portal',
              description:
                'Built a full-stack job portal with authentication, resume parsing, and recruiter dashboard.',
            },
          ],
        },
        {
          id: 4,
          title: 'WORK EXPERIENCE',
          type: 'experience',
          items: [
            {
              position: 'Software Engineer',
              company: 'TechNova Solutions',
              period: '2022 - Present',
              description:
                'Developed scalable REST APIs and improved application performance by 30%.',
            },
          ],
        },
        {
          id: 5,
          title: 'EDUCATION',
          type: 'education',
          items: [
            {
              degree: 'B.Tech in Computer Science',
              institution: 'VTU University',
              period: '2017 - 2021',
            },
          ],
        },
      ],
    },
  },

  {
    id: 'chef',
    name: 'Chef / Culinary',
    title: 'Culinary Professional',
    subtitle: 'Executive Chef • Sous Chef • Pastry Chef',
    description: 'Showcase culinary expertise, menus, and kitchen leadership.',
    color: 'from-amber-600 to-orange-700',
    accent: 'bg-amber-600',
    features: ['Menu Highlights', 'Kitchen Leadership', 'Certifications'],
    templateStyleId: 4,
    defaultCv: {
      name: 'RAJIV GURUNG',
      title: 'Executive Chef',
      contact: {
        location: 'Kathmandu, Nepal',
        email: 'chef.rajiv@gmail.com',
        portfolio: '',
        linkedin: 'https://linkedin.com/in/rajivchef',
      },
      sections: [
        {
          id: 1,
          title: 'CULINARY PROFILE',
          type: 'text',
          content:
            'Creative Executive Chef with 10+ years of experience in fine dining and international cuisine. Expert in menu innovation and kitchen operations.',
        },
        {
          id: 2,
          title: 'SPECIALTIES',
          type: 'skills',
          items: [
            { category: 'Cuisine', items: 'Nepali, Indian, Continental' },
            { category: 'Techniques', items: 'Grilling, Sous Vide, Plating' },
            { category: 'Management', items: 'Staff Training, Cost Control' },
          ],
        },
        {
          id: 3,
          title: 'EXPERIENCE',
          type: 'experience',
          items: [
            {
              position: 'Head Chef',
              company: 'Himalayan Resort',
              period: '2019 - Present',
              description:
                'Managed a team of 20+ kitchen staff and designed seasonal menus for international guests.',
            },
          ],
        },
        {
          id: 4,
          title: 'CERTIFICATIONS',
          type: 'education',
          items: [
            {
              degree: 'Diploma in Culinary Arts',
              institution: 'Nepal Academy of Tourism & Hotel Management',
              period: '2012 - 2014',
            },
          ],
        },
      ],
    },
  },

  {
    id: 'designer',
    name: 'Designer',
    title: 'Creative & Design',
    subtitle: 'UX Designer • UI Designer • Product Designer',
    description: 'Portfolio-first CV with strong visual and case study focus.',
    color: 'from-violet-600 to-purple-700',
    accent: 'bg-violet-600',
    features: ['Portfolio Ready', 'Case Studies', 'Visual Focus'],
    templateStyleId: 5,
    defaultCv: {
      name: 'SOPHIA LEE',
      title: 'Product Designer',
      contact: {
        location: 'Singapore',
        email: 'sophia.lee.design@gmail.com',
        portfolio: 'https://sophialee.design',
        linkedin: 'https://linkedin.com/in/sophialee',
      },
      sections: [
        {
          id: 1,
          title: 'PROFILE',
          type: 'text',
          content:
            'Product Designer focused on creating intuitive user experiences backed by research and data-driven decisions.',
        },
        {
          id: 2,
          title: 'DESIGN SKILLS',
          type: 'skills',
          items: [
            { category: 'Tools', items: 'Figma, Adobe XD, Photoshop' },
            { category: 'UX', items: 'Wireframing, Prototyping, User Testing' },
            { category: 'UI', items: 'Design Systems, Typography, Color Theory' },
          ],
        },
        {
          id: 3,
          title: 'CASE STUDIES',
          type: 'projects',
          items: [
            {
              name: 'E-Wallet App Redesign',
              link: 'https://sophialee.design/wallet',
              description:
                'Improved onboarding flow resulting in 35% increase in user retention.',
            },
          ],
        },
        {
          id: 4,
          title: 'EXPERIENCE',
          type: 'experience',
          items: [
            {
              position: 'UX Designer',
              company: 'Designify Studio',
              period: '2021 - Present',
              description:
                'Collaborated with product teams to design user-centered digital products.',
            },
          ],
        },
        {
          id: 5,
          title: 'EDUCATION',
          type: 'education',
          items: [
            {
              degree: 'BA in Interaction Design',
              institution: 'NUS',
              period: '2016 - 2020',
            },
          ],
        },
      ],
    },
  },
];
export const getProfessionById = (id) => professions.find((p) => p.id === id);

export const getProfessionByTemplateStyleId = (templateStyleId) =>
  professions.find((p) => p.templateStyleId === templateStyleId);
