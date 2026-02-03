/**
 * Profession-based template configs.
 * Each profession has its own title, subtitle, description, and default CV content.
 */

export const professions = [
  {
    id: 'it',
    name: 'IT Professional',
    title: 'Software & Tech',
    subtitle: 'Full Stack Developer • DevOps • Data Engineer',
    description: 'Clean, ATS-friendly layout for software engineers and tech roles.',
    color: 'from-gray-700 to-gray-900',
    accent: 'bg-gray-800',
    features: ['ATS Friendly', 'Clean Layout', 'Technical Focus'],
    templateStyleId: 1,
    defaultCv: {
      name: 'JOHN DOE',
      title: 'Full Stack Developer',
      contact: {
        location: 'San Francisco, CA',
        email: 'john.doe@example.com',
        portfolio: 'https://johndoe.dev',
        linkedin: 'https://www.linkedin.com/in/johndoe',
        github: 'https://github.com/johndoe',
      },
      sections: [
        {
          id: 1,
          title: 'PROFESSIONAL SUMMARY',
          type: 'text',
          content:
            'Results-driven full stack developer with 5+ years of experience building scalable web applications.',
        },
        {
          id: 2,
          title: 'TECHNICAL SKILLS',
          type: 'skills',
          items: [
            { category: 'Frontend', items: 'React.js, Vue.js, HTML5, CSS3, TypeScript' },
            { category: 'Backend', items: 'Node.js, Python, Django, Express.js' },
            { category: 'Database', items: 'MongoDB, PostgreSQL, MySQL' },
            { category: 'Tools', items: 'Git, Docker, AWS, VS Code' },
          ],
        },
        {
          id: 3,
          title: 'WORK EXPERIENCE',
          type: 'experience',
          items: [
            {
              position: 'Senior Software Engineer',
              company: 'Tech Corp Inc.',
              period: 'June 2021 - Present',
              description: 'Lead development of microservices architecture serving 1M+ users.',
            },
          ],
        },
        {
          id: 4,
          title: 'EDUCATION',
          type: 'education',
          items: [
            {
              degree: 'Bachelor of Science in Computer Science',
              institution: 'University of California, Berkeley',
              period: '2015 - 2019',
            },
          ],
        },
        {
          id: 5,
          title: 'PROJECTS',
          type: 'projects',
          items: [
            {
              name: 'E-Commerce Platform',
              link: 'https://github.com/johndoe/ecommerce',
              description: 'Built a full-featured e-commerce platform with React and Node.js.',
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
    subtitle: 'Executive Chef • Head Chef • Pastry Chef',
    description: 'Elegant layout for chefs and kitchen professionals.',
    color: 'from-amber-600 to-orange-700',
    accent: 'bg-amber-600',
    features: ['Elegant Design', 'Menu Highlights', 'Kitchen Focus'],
    templateStyleId: 4,
    defaultCv: {
      name: 'MARIA SANTOS',
      title: 'Executive Chef',
      contact: {
        location: 'New York, NY',
        email: 'maria.santos@example.com',
        portfolio: '',
        linkedin: 'https://www.linkedin.com/in/mariasantos',
        github: '',
      },
      sections: [
        {
          id: 1,
          title: 'CULINARY PROFILE',
          type: 'text',
          content:
            'Award-winning Executive Chef with 12+ years in fine dining and kitchen leadership. Passionate about seasonal ingredients and modern techniques.',
        },
        {
          id: 2,
          title: 'CULINARY SKILLS',
          type: 'skills',
          items: [
            { category: 'Cuisines', items: 'French, Mediterranean, Farm-to-Table, Fusion' },
            { category: 'Kitchen', items: 'Sous Vide, Butchery, Pastry, Plating' },
            { category: 'Management', items: 'Team Leadership, Menu Design, Cost Control' },
          ],
        },
        {
          id: 3,
          title: 'PROFESSIONAL EXPERIENCE',
          type: 'experience',
          items: [
            {
              position: 'Executive Chef',
              company: 'The Grand Hotel',
              period: '2019 - Present',
              description: 'Lead kitchen operations for 200+ covers daily. Developed seasonal tasting menus and trained 15+ staff.',
            },
          ],
        },
        {
          id: 4,
          title: 'EDUCATION & CERTIFICATIONS',
          type: 'education',
          items: [
            {
              degree: 'Le Cordon Bleu, Paris',
              institution: 'Grand Diplôme',
              period: '2008 - 2010',
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
    subtitle: 'UX Designer • Graphic Designer • Product Designer',
    description: 'Minimalist, portfolio-ready layout for creatives.',
    color: 'from-violet-600 to-purple-700',
    accent: 'bg-violet-600',
    features: ['Portfolio Ready', 'Clean Lines', 'Creative Focus'],
    templateStyleId: 5,
    defaultCv: {
      name: 'ALEX CHEN',
      title: 'Senior UX Designer',
      contact: {
        location: 'Austin, TX',
        email: 'alex.chen@example.com',
        portfolio: 'https://alexchen.design',
        linkedin: 'https://www.linkedin.com/in/alexchen',
        github: '',
      },
      sections: [
        {
          id: 1,
          title: 'ABOUT',
          type: 'text',
          content:
            'User-centered designer with 8+ years crafting digital products. Focus on research-driven UX and accessible, beautiful interfaces.',
        },
        {
          id: 2,
          title: 'SKILLS',
          type: 'skills',
          items: [
            { category: 'Design', items: 'Figma, Sketch, Adobe XD, Prototyping' },
            { category: 'Research', items: 'User Interviews, Usability Testing, Journey Mapping' },
            { category: 'Collaboration', items: 'Design Systems, Cross-functional Teams' },
          ],
        },
        {
          id: 3,
          title: 'EXPERIENCE',
          type: 'experience',
          items: [
            {
              position: 'Senior UX Designer',
              company: 'Product Labs Inc.',
              period: '2020 - Present',
              description: 'Lead design for B2B SaaS platform. Reduced support tickets by 40% through UX improvements.',
            },
          ],
        },
        {
          id: 4,
          title: 'EDUCATION',
          type: 'education',
          items: [
            {
              degree: 'BFA in Graphic Design',
              institution: 'School of Visual Arts',
              period: '2012 - 2016',
            },
          ],
        },
        {
          id: 5,
          title: 'SELECTED PROJECTS',
          type: 'projects',
          items: [
            {
              name: 'Mobile Banking App Redesign',
              link: 'https://alexchen.design/banking',
              description: 'End-to-end redesign improving NPS by 25%.',
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
