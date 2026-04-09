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
    roles: [
      {
        id: 'fullstack',
        name: 'Full Stack Developer',
        icon: '🖥️',
        color: 'from-blue-500 to-indigo-600',
        description: 'End-to-end web development with modern frameworks',
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
                'Full Stack Developer with 4+ years of experience building scalable web apps using modern JavaScript frameworks and cloud technologies. Proven track record of delivering end-to-end solutions.',
            },
            {
              id: 2,
              title: 'TECH STACK',
              type: 'skills',
              items: [
                { category: 'Frontend', items: 'React, Next.js, Tailwind CSS, TypeScript' },
                { category: 'Backend', items: 'Node.js, Express, Django, GraphQL' },
                { category: 'Database', items: 'MongoDB, PostgreSQL, Redis' },
                { category: 'DevOps', items: 'Docker, AWS, CI/CD, Nginx' },
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
                    'Built a full-stack job portal with authentication, resume parsing, and recruiter dashboard using React + Node.js.',
                },
                {
                  name: 'E-Commerce Microservices',
                  link: 'https://github.com/arjunsharma/ecommerce',
                  description:
                    'Designed microservices architecture for an e-commerce platform handling 10K+ daily transactions.',
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
                    'Developed scalable REST APIs and improved application performance by 30%. Led migration from monolith to microservices.',
                },
                {
                  position: 'Junior Full Stack Developer',
                  company: 'WebCraft Studios',
                  period: '2020 - 2022',
                  description:
                    'Built responsive web applications using React and Express. Implemented automated testing reducing bugs by 45%.',
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
        id: 'frontend',
        name: 'Frontend Developer',
        icon: '🎨',
        color: 'from-pink-500 to-rose-600',
        description: 'UI/UX focused development with modern CSS & JS frameworks',
        defaultCv: {
          name: 'PRIYA PATEL',
          title: 'Frontend Developer',
          contact: {
            location: 'Mumbai, India',
            email: 'priya.frontend@gmail.com',
            portfolio: 'https://priyapatel.dev',
            linkedin: 'https://linkedin.com/in/priyapatel',
            github: 'https://github.com/priyapatel',
          },
          sections: [
            {
              id: 1,
              title: 'PROFESSIONAL SUMMARY',
              type: 'text',
              content:
                'Creative Frontend Developer with 3+ years of experience crafting pixel-perfect, responsive web interfaces. Expert in React ecosystem, animation libraries, and modern CSS frameworks.',
            },
            {
              id: 2,
              title: 'TECH STACK',
              type: 'skills',
              items: [
                { category: 'Frontend', items: 'React, Next.js, Vue.js, TypeScript' },
                { category: 'Styling', items: 'Tailwind CSS, Styled Components, Sass, Framer Motion' },
                { category: 'Tools', items: 'Figma, Storybook, Webpack, Vite' },
                { category: 'Testing', items: 'Jest, React Testing Library, Cypress' },
              ],
            },
            {
              id: 3,
              title: 'PROJECTS',
              type: 'projects',
              items: [
                {
                  name: 'Design System Library',
                  link: 'https://github.com/priyapatel/design-system',
                  description:
                    'Built a reusable component library with 50+ components used across 5 enterprise apps.',
                },
                {
                  name: 'Portfolio Builder SaaS',
                  link: 'https://github.com/priyapatel/portfolio-builder',
                  description:
                    'Drag-and-drop portfolio builder with real-time preview and custom themes.',
                },
              ],
            },
            {
              id: 4,
              title: 'WORK EXPERIENCE',
              type: 'experience',
              items: [
                {
                  position: 'Frontend Developer',
                  company: 'PixelPerfect Labs',
                  period: '2022 - Present',
                  description:
                    'Led frontend development for 3 major product launches. Improved Lighthouse scores from 65 to 95+.',
                },
                {
                  position: 'UI Developer',
                  company: 'DesignTech Inc.',
                  period: '2020 - 2022',
                  description:
                    'Developed responsive dashboards and data visualization components serving 50K+ users.',
                },
              ],
            },
            {
              id: 5,
              title: 'EDUCATION',
              type: 'education',
              items: [
                {
                  degree: 'B.Sc in Information Technology',
                  institution: 'University of Mumbai',
                  period: '2017 - 2020',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'backend',
        name: 'Backend Developer',
        icon: '⚙️',
        color: 'from-emerald-500 to-teal-600',
        description: 'Server-side development, APIs, and database architecture',
        defaultCv: {
          name: 'VIKRAM REDDY',
          title: 'Backend Developer',
          contact: {
            location: 'Hyderabad, India',
            email: 'vikram.backend@gmail.com',
            portfolio: 'https://vikramreddy.dev',
            linkedin: 'https://linkedin.com/in/vikramreddy',
            github: 'https://github.com/vikramreddy',
          },
          sections: [
            {
              id: 1,
              title: 'PROFESSIONAL SUMMARY',
              type: 'text',
              content:
                'Backend Developer with 5+ years of experience in building robust APIs, microservices, and distributed systems. Expert in Node.js, Python, and cloud-native architectures.',
            },
            {
              id: 2,
              title: 'TECH STACK',
              type: 'skills',
              items: [
                { category: 'Languages', items: 'Node.js, Python, Go, Java' },
                { category: 'Frameworks', items: 'Express, FastAPI, Spring Boot, NestJS' },
                { category: 'Database', items: 'PostgreSQL, MongoDB, Redis, Elasticsearch' },
                { category: 'Infrastructure', items: 'AWS, Docker, Kubernetes, Terraform' },
              ],
            },
            {
              id: 3,
              title: 'PROJECTS',
              type: 'projects',
              items: [
                {
                  name: 'Payment Gateway API',
                  link: 'https://github.com/vikramreddy/payment-api',
                  description:
                    'Built a high-throughput payment processing API handling 50K+ transactions/day with 99.99% uptime.',
                },
              ],
            },
            {
              id: 4,
              title: 'WORK EXPERIENCE',
              type: 'experience',
              items: [
                {
                  position: 'Senior Backend Engineer',
                  company: 'CloudScale Systems',
                  period: '2021 - Present',
                  description:
                    'Architected event-driven microservices reducing system latency by 60%. Managed databases serving 1M+ records.',
                },
                {
                  position: 'Backend Developer',
                  company: 'DataFlow Inc.',
                  period: '2019 - 2021',
                  description:
                    'Developed RESTful APIs and implemented caching strategies improving response times by 40%.',
                },
              ],
            },
            {
              id: 5,
              title: 'EDUCATION',
              type: 'education',
              items: [
                {
                  degree: 'M.Tech in Software Engineering',
                  institution: 'IIIT Hyderabad',
                  period: '2017 - 2019',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'qa',
        name: 'QA Engineer',
        icon: '🧪',
        color: 'from-amber-500 to-orange-600',
        description: 'Quality assurance, test automation, and CI/CD pipelines',
        defaultCv: {
          name: 'NEHA KAPOOR',
          title: 'QA Engineer',
          contact: {
            location: 'Pune, India',
            email: 'neha.qa@gmail.com',
            portfolio: '',
            linkedin: 'https://linkedin.com/in/nehakapoor',
            github: 'https://github.com/nehakapoor',
          },
          sections: [
            {
              id: 1,
              title: 'PROFESSIONAL SUMMARY',
              type: 'text',
              content:
                'Detail-oriented QA Engineer with 4+ years of experience in manual and automated testing. Expertise in building test frameworks, CI/CD integration, and ensuring software quality across web and mobile platforms.',
            },
            {
              id: 2,
              title: 'TECH STACK',
              type: 'skills',
              items: [
                { category: 'Automation', items: 'Selenium, Cypress, Playwright, Appium' },
                { category: 'Languages', items: 'JavaScript, Python, Java' },
                { category: 'Tools', items: 'JIRA, TestRail, Postman, Jenkins' },
                { category: 'Testing', items: 'API Testing, Performance Testing, Security Testing' },
              ],
            },
            {
              id: 3,
              title: 'PROJECTS',
              type: 'projects',
              items: [
                {
                  name: 'E2E Test Framework',
                  link: 'https://github.com/nehakapoor/test-framework',
                  description:
                    'Built a comprehensive E2E testing framework using Cypress + TypeScript covering 500+ test scenarios.',
                },
              ],
            },
            {
              id: 4,
              title: 'WORK EXPERIENCE',
              type: 'experience',
              items: [
                {
                  position: 'Senior QA Engineer',
                  company: 'QualityFirst Tech',
                  period: '2022 - Present',
                  description:
                    'Led QA team of 5 engineers. Reduced production bugs by 70% through automated regression testing.',
                },
                {
                  position: 'QA Analyst',
                  company: 'SoftTest Labs',
                  period: '2020 - 2022',
                  description:
                    'Executed 200+ test cases per sprint. Implemented API testing reducing integration issues by 50%.',
                },
              ],
            },
            {
              id: 5,
              title: 'EDUCATION',
              type: 'education',
              items: [
                {
                  degree: 'B.E in Computer Engineering',
                  institution: 'Pune University',
                  period: '2016 - 2020',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'devops',
        name: 'DevOps Engineer',
        icon: '🚀',
        color: 'from-cyan-500 to-blue-600',
        description: 'Infrastructure automation, CI/CD, and cloud platforms',
        defaultCv: {
          name: 'ROHIT KUMAR',
          title: 'DevOps Engineer',
          contact: {
            location: 'Delhi NCR, India',
            email: 'rohit.devops@gmail.com',
            portfolio: '',
            linkedin: 'https://linkedin.com/in/rohitkumar',
            github: 'https://github.com/rohitkumar',
          },
          sections: [
            {
              id: 1,
              title: 'PROFESSIONAL SUMMARY',
              type: 'text',
              content:
                'DevOps Engineer with 5+ years of experience in cloud infrastructure, container orchestration, and CI/CD pipeline automation. AWS Certified with expertise in Kubernetes and Infrastructure as Code.',
            },
            {
              id: 2,
              title: 'TECH STACK',
              type: 'skills',
              items: [
                { category: 'Cloud', items: 'AWS, GCP, Azure, DigitalOcean' },
                { category: 'Containers', items: 'Docker, Kubernetes, Helm, Istio' },
                { category: 'IaC', items: 'Terraform, Ansible, CloudFormation, Pulumi' },
                { category: 'CI/CD', items: 'Jenkins, GitHub Actions, ArgoCD, GitLab CI' },
              ],
            },
            {
              id: 3,
              title: 'PROJECTS',
              type: 'projects',
              items: [
                {
                  name: 'Kubernetes Auto-Scaler',
                  link: 'https://github.com/rohitkumar/k8s-autoscaler',
                  description:
                    'Custom Kubernetes auto-scaler reducing cloud costs by 40% while maintaining 99.9% availability.',
                },
              ],
            },
            {
              id: 4,
              title: 'WORK EXPERIENCE',
              type: 'experience',
              items: [
                {
                  position: 'Senior DevOps Engineer',
                  company: 'InfraScale Technologies',
                  period: '2021 - Present',
                  description:
                    'Managed 200+ microservices deployment on Kubernetes. Reduced deployment time from 2 hours to 15 minutes.',
                },
                {
                  position: 'Cloud Engineer',
                  company: 'CloudNative Labs',
                  period: '2019 - 2021',
                  description:
                    'Built CI/CD pipelines for 50+ repositories. Implemented monitoring with Prometheus & Grafana.',
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
                  institution: 'DTU Delhi',
                  period: '2015 - 2019',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'pm',
        name: 'Product Manager',
        icon: '📊',
        color: 'from-violet-500 to-purple-600',
        description: 'Product strategy, roadmaps, and cross-functional leadership',
        defaultCv: {
          name: 'ANANYA MEHTA',
          title: 'Product Manager',
          contact: {
            location: 'Bangalore, India',
            email: 'ananya.pm@gmail.com',
            portfolio: 'https://ananyamehta.com',
            linkedin: 'https://linkedin.com/in/ananyamehta',
          },
          sections: [
            {
              id: 1,
              title: 'PROFESSIONAL SUMMARY',
              type: 'text',
              content:
                'Product Manager with 6+ years of experience driving product strategy for B2B SaaS platforms. Expert in data-driven decision making, agile methodologies, and cross-functional team leadership.',
            },
            {
              id: 2,
              title: 'KEY SKILLS',
              type: 'skills',
              items: [
                { category: 'Product', items: 'Roadmapping, PRDs, User Stories, A/B Testing' },
                { category: 'Analytics', items: 'Mixpanel, Amplitude, SQL, Tableau' },
                { category: 'Tools', items: 'Jira, Notion, Figma, Miro' },
                { category: 'Methods', items: 'Agile, Scrum, Design Thinking, OKRs' },
              ],
            },
            {
              id: 3,
              title: 'KEY ACHIEVEMENTS',
              type: 'projects',
              items: [
                {
                  name: 'Platform Growth Initiative',
                  link: '',
                  description:
                    'Led product strategy that grew MAU from 50K to 200K within 12 months through feature optimization.',
                },
              ],
            },
            {
              id: 4,
              title: 'WORK EXPERIENCE',
              type: 'experience',
              items: [
                {
                  position: 'Senior Product Manager',
                  company: 'SaaS Dynamics',
                  period: '2021 - Present',
                  description:
                    'Managed a $5M product line with 100K+ users. Increased retention by 35% through data-driven feature prioritization.',
                },
                {
                  position: 'Product Manager',
                  company: 'TechGrowth Inc.',
                  period: '2018 - 2021',
                  description:
                    'Launched 3 major product features contributing to 20% revenue growth. Conducted 100+ user interviews.',
                },
              ],
            },
            {
              id: 5,
              title: 'EDUCATION',
              type: 'education',
              items: [
                {
                  degree: 'MBA in Technology Management',
                  institution: 'IIM Bangalore',
                  period: '2016 - 2018',
                },
                {
                  degree: 'B.Tech in Computer Science',
                  institution: 'NIT Trichy',
                  period: '2012 - 2016',
                },
              ],
            },
          ],
        },
      },
    ],
    defaultCv: {
      name: 'ARJUN SHARMA',
      title: 'Full Stack Developer',
      contact: {
        location: 'Bangalore, India',
        email: 'arjun.sharma.dev@gmail.com',
        portfolio: 'https://arjun-dev.vercel.app',
        linkedin: 'https://linkedin.com/in/arjunsharma',
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
    roles: [
      {
        id: 'executive-chef',
        name: 'Executive Chef',
        icon: '👨‍🍳',
        color: 'from-amber-500 to-orange-600',
        description: 'Kitchen leadership, menu design, and fine dining management',
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
                'Creative Executive Chef with 10+ years of experience in fine dining and international cuisine. Expert in menu innovation, kitchen operations, and team management.',
            },
            {
              id: 2,
              title: 'SPECIALTIES',
              type: 'skills',
              items: [
                { category: 'Cuisine', items: 'Nepali, Indian, Continental, Asian Fusion' },
                { category: 'Techniques', items: 'Grilling, Sous Vide, Molecular, Plating' },
                { category: 'Management', items: 'Staff Training, Cost Control, Menu Engineering' },
              ],
            },
            {
              id: 3,
              title: 'EXPERIENCE',
              type: 'experience',
              items: [
                {
                  position: 'Head Chef',
                  company: 'Himalayan Resort & Spa',
                  period: '2019 - Present',
                  description:
                    'Managed a team of 20+ kitchen staff and designed seasonal menus for international guests. Reduced food waste by 30%.',
                },
                {
                  position: 'Sous Chef',
                  company: 'The Grand Hotel',
                  period: '2015 - 2019',
                  description:
                    'Assisted executive chef in menu planning. Handled banquet operations for events of 500+ guests.',
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
        id: 'sous-chef',
        name: 'Sous Chef',
        icon: '🍳',
        color: 'from-yellow-500 to-amber-600',
        description: 'Second-in-command kitchen operations and food preparation',
        defaultCv: {
          name: 'MINA THAPA',
          title: 'Sous Chef',
          contact: {
            location: 'Pokhara, Nepal',
            email: 'mina.thapa.chef@gmail.com',
            portfolio: '',
            linkedin: 'https://linkedin.com/in/minachef',
          },
          sections: [
            {
              id: 1,
              title: 'CULINARY PROFILE',
              type: 'text',
              content:
                'Dedicated Sous Chef with 6+ years of experience in high-volume kitchens. Skilled in menu execution, food safety compliance, and mentoring junior staff.',
            },
            {
              id: 2,
              title: 'SPECIALTIES',
              type: 'skills',
              items: [
                { category: 'Cuisine', items: 'Continental, Mediterranean, Nepali' },
                { category: 'Skills', items: 'Inventory Management, HACCP, Line Cooking' },
                { category: 'Leadership', items: 'Team Mentoring, Shift Planning, Quality Control' },
              ],
            },
            {
              id: 3,
              title: 'EXPERIENCE',
              type: 'experience',
              items: [
                {
                  position: 'Sous Chef',
                  company: 'Lakeside Fine Dining',
                  period: '2021 - Present',
                  description:
                    'Oversee daily kitchen operations for 150-seat restaurant. Maintain food quality and consistency.',
                },
                {
                  position: 'Line Cook',
                  company: 'Hotel Barahi',
                  period: '2018 - 2021',
                  description:
                    'Managed grill and sauté stations during peak service. Contributed to 4.8/5 food rating.',
                },
              ],
            },
            {
              id: 4,
              title: 'EDUCATION & CERTIFICATIONS',
              type: 'education',
              items: [
                {
                  degree: 'Certificate in Food Safety & Hygiene',
                  institution: 'CTEVT Nepal',
                  period: '2017',
                },
                {
                  degree: 'Diploma in Hotel Management',
                  institution: 'Pokhara Tourism Institute',
                  period: '2015 - 2017',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'pastry-chef',
        name: 'Pastry Chef',
        icon: '🎂',
        color: 'from-pink-400 to-rose-500',
        description: 'Desserts, baking, and pastry arts specialization',
        defaultCv: {
          name: 'SAKURA TANAKA',
          title: 'Pastry Chef',
          contact: {
            location: 'Tokyo, Japan',
            email: 'sakura.pastry@gmail.com',
            portfolio: 'https://sakurabakes.com',
            linkedin: 'https://linkedin.com/in/sakurapastry',
          },
          sections: [
            {
              id: 1,
              title: 'CULINARY PROFILE',
              type: 'text',
              content:
                'Award-winning Pastry Chef with 8+ years specializing in French pastry, artisan chocolates, and wedding cake design. Combines traditional techniques with modern presentation.',
            },
            {
              id: 2,
              title: 'SPECIALTIES',
              type: 'skills',
              items: [
                { category: 'Pastry', items: 'French Pastry, Artisan Bread, Cake Design' },
                { category: 'Chocolate', items: 'Tempering, Bonbons, Showpieces' },
                { category: 'Skills', items: 'Sugar Work, Plating, Menu Development' },
              ],
            },
            {
              id: 3,
              title: 'EXPERIENCE',
              type: 'experience',
              items: [
                {
                  position: 'Head Pastry Chef',
                  company: 'Pâtisserie Lumière',
                  period: '2020 - Present',
                  description:
                    'Created seasonal dessert menus and managed production for 3 retail locations. Won regional pastry award 2023.',
                },
                {
                  position: 'Pastry Cook',
                  company: 'Le Cordon Bleu Restaurant',
                  period: '2017 - 2020',
                  description:
                    'Prepared 200+ desserts daily. Developed 15 new signature pastries.',
                },
              ],
            },
            {
              id: 4,
              title: 'EDUCATION',
              type: 'education',
              items: [
                {
                  degree: 'Grand Diplôme in Pastry Arts',
                  institution: 'Le Cordon Bleu Paris',
                  period: '2015 - 2017',
                },
              ],
            },
          ],
        },
      },
    ],
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
    roles: [
      {
        id: 'ux-designer',
        name: 'UX Designer',
        icon: '🔬',
        color: 'from-violet-500 to-indigo-600',
        description: 'User research, wireframing, and experience design',
        defaultCv: {
          name: 'SOPHIA LEE',
          title: 'UX Designer',
          contact: {
            location: 'Singapore',
            email: 'sophia.ux@gmail.com',
            portfolio: 'https://sophialee.design',
            linkedin: 'https://linkedin.com/in/sophialee',
          },
          sections: [
            {
              id: 1,
              title: 'PROFILE',
              type: 'text',
              content:
                'UX Designer with 5+ years of experience creating intuitive user experiences. Expert in user research, information architecture, and usability testing for web and mobile platforms.',
            },
            {
              id: 2,
              title: 'DESIGN SKILLS',
              type: 'skills',
              items: [
                { category: 'Research', items: 'User Interviews, Surveys, A/B Testing, Analytics' },
                { category: 'UX', items: 'Wireframing, Prototyping, User Flows, Journey Mapping' },
                { category: 'Tools', items: 'Figma, Miro, Hotjar, Maze, UserTesting' },
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
                    'Conducted user research and redesigned onboarding flow, resulting in 35% increase in user retention.',
                },
                {
                  name: 'Healthcare Dashboard',
                  link: 'https://sophialee.design/health',
                  description:
                    'Designed patient management dashboard used by 500+ clinics. Reduced task completion time by 40%.',
                },
              ],
            },
            {
              id: 4,
              title: 'EXPERIENCE',
              type: 'experience',
              items: [
                {
                  position: 'Senior UX Designer',
                  company: 'Designify Studio',
                  period: '2021 - Present',
                  description:
                    'Led UX for 3 flagship products. Conducted 200+ user interviews and established design research process.',
                },
                {
                  position: 'UX Designer',
                  company: 'TechStart Pte Ltd',
                  period: '2019 - 2021',
                  description:
                    'Designed user flows and prototypes for fintech products serving 100K+ users.',
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
                  institution: 'NUS Singapore',
                  period: '2015 - 2019',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'ui-designer',
        name: 'UI Designer',
        icon: '🎨',
        color: 'from-fuchsia-500 to-pink-600',
        description: 'Visual design, design systems, and brand identity',
        defaultCv: {
          name: 'LUCAS CHEN',
          title: 'UI Designer',
          contact: {
            location: 'Taipei, Taiwan',
            email: 'lucas.ui@gmail.com',
            portfolio: 'https://lucaschen.design',
            linkedin: 'https://linkedin.com/in/lucaschen',
          },
          sections: [
            {
              id: 1,
              title: 'PROFILE',
              type: 'text',
              content:
                'Creative UI Designer with 4+ years crafting beautiful, pixel-perfect interfaces. Passionate about design systems, typography, and creating cohesive visual languages across platforms.',
            },
            {
              id: 2,
              title: 'DESIGN SKILLS',
              type: 'skills',
              items: [
                { category: 'Visual', items: 'Typography, Color Theory, Iconography, Illustration' },
                { category: 'Tools', items: 'Figma, Sketch, Adobe Creative Suite, Framer' },
                { category: 'Systems', items: 'Design Tokens, Component Libraries, Style Guides' },
              ],
            },
            {
              id: 3,
              title: 'CASE STUDIES',
              type: 'projects',
              items: [
                {
                  name: 'Startup Design System',
                  link: 'https://lucaschen.design/ds',
                  description:
                    'Built a comprehensive design system with 100+ components adopted across 4 product teams.',
                },
              ],
            },
            {
              id: 4,
              title: 'EXPERIENCE',
              type: 'experience',
              items: [
                {
                  position: 'UI Designer',
                  company: 'PixelLab Studio',
                  period: '2021 - Present',
                  description:
                    'Designed interfaces for SaaS products serving 50K+ users. Maintained and evolved design systems.',
                },
                {
                  position: 'Junior UI Designer',
                  company: 'Creative Agency Co.',
                  period: '2019 - 2021',
                  description:
                    'Created visual designs for 20+ client projects including web, mobile, and branding.',
                },
              ],
            },
            {
              id: 5,
              title: 'EDUCATION',
              type: 'education',
              items: [
                {
                  degree: 'BFA in Visual Communication',
                  institution: 'Shih Chien University',
                  period: '2015 - 2019',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'product-designer',
        name: 'Product Designer',
        icon: '💡',
        color: 'from-purple-500 to-violet-600',
        description: 'End-to-end product design from research to delivery',
        defaultCv: {
          name: 'ELENA MARTINEZ',
          title: 'Product Designer',
          contact: {
            location: 'Barcelona, Spain',
            email: 'elena.design@gmail.com',
            portfolio: 'https://elenamartinez.design',
            linkedin: 'https://linkedin.com/in/elenamartinez',
          },
          sections: [
            {
              id: 1,
              title: 'PROFILE',
              type: 'text',
              content:
                'Product Designer with 6+ years driving end-to-end design for B2B and B2C products. Combines strategic thinking with hands-on design execution to deliver impactful user experiences.',
            },
            {
              id: 2,
              title: 'DESIGN SKILLS',
              type: 'skills',
              items: [
                { category: 'Strategy', items: 'Product Thinking, Design Sprints, Roadmapping' },
                { category: 'Design', items: 'Figma, Prototyping, Design Systems, Motion Design' },
                { category: 'Research', items: 'User Testing, Data Analysis, Competitive Analysis' },
              ],
            },
            {
              id: 3,
              title: 'CASE STUDIES',
              type: 'projects',
              items: [
                {
                  name: 'FinTech Mobile App',
                  link: 'https://elenamartinez.design/fintech',
                  description:
                    'Led end-to-end design for a mobile banking app with 500K downloads. Improved NPS from 32 to 67.',
                },
                {
                  name: 'B2B Analytics Platform',
                  link: 'https://elenamartinez.design/analytics',
                  description:
                    'Redesigned data visualization dashboard reducing report generation time by 60%.',
                },
              ],
            },
            {
              id: 4,
              title: 'EXPERIENCE',
              type: 'experience',
              items: [
                {
                  position: 'Lead Product Designer',
                  company: 'DesignWave Studio',
                  period: '2020 - Present',
                  description:
                    'Lead design team of 4. Shipped 5 major product releases with measurable impact on key metrics.',
                },
                {
                  position: 'Product Designer',
                  company: 'StartUp Hub Barcelona',
                  period: '2018 - 2020',
                  description:
                    'Designed MVP for 3 startups from concept to launch. Conducted 100+ user interviews.',
                },
              ],
            },
            {
              id: 5,
              title: 'EDUCATION',
              type: 'education',
              items: [
                {
                  degree: 'MA in Design for Interactive Media',
                  institution: 'Universitat de Barcelona',
                  period: '2016 - 2018',
                },
              ],
            },
          ],
        },
      },
    ],
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
