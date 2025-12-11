import React, { useState } from 'react';
import { Edit2, Plus, Trash2, Download, Eye, EyeOff, GripVertical } from 'lucide-react';

const DynamicCVMaker = () => {
  const [editMode, setEditMode] = useState(true);
  const [cv, setCv] = useState({
    name: "JOHN DOE",
    title: "Full Stack Developer",
    contact: {
      location: "San Francisco, CA",
      email: "john.doe@example.com",
      portfolio: "https://johndoe.dev",
      linkedin: "https://www.linkedin.com/in/johndoe",
      github: "https://github.com/johndoe"
    },
    sections: [
      {
        id: 1,
        title: "PROFESSIONAL SUMMARY",
        type: "text",
        content: "Results-driven full stack developer with 5+ years of experience building scalable web applications. Proficient in modern JavaScript frameworks, cloud technologies, and agile methodologies. Passionate about creating elegant solutions to complex problems and delivering exceptional user experiences."
      },
      {
        id: 2,
        title: "TECHNICAL SKILLS",
        type: "skills",
        items: [
          { category: "Frontend", items: "React.js, Vue.js, HTML5, CSS3, TypeScript, Tailwind CSS" },
          { category: "Backend", items: "Node.js, Python, Django, Express.js, RESTful APIs" },
          { category: "Database", items: "MongoDB, PostgreSQL, MySQL, Redis" },
          { category: "DevOps", items: "Docker, Kubernetes, AWS, CI/CD, GitHub Actions" },
          { category: "Tools", items: "Git, VS Code, Figma, Jira, Postman" },
          { category: "Soft Skills", items: "Team Leadership, Agile/Scrum, Problem Solving, Communication" }
        ]
      },
      {
        id: 3,
        title: "EDUCATION",
        type: "education",
        items: [
          {
            degree: "Bachelor of Science in Computer Science",
            institution: "University of California, Berkeley",
            period: "September 2015 - May 2019"
          },
          {
            degree: "Full Stack Web Development Bootcamp",
            institution: "Tech Academy",
            period: "January 2020 - April 2020"
          }
        ]
      },
      {
        id: 4,
        title: "PROJECTS",
        type: "projects",
        items: [
          {
            name: "E-Commerce Platform",
            link: "https://github.com/johndoe/ecommerce-platform",
            description: "Built a full-featured e-commerce platform with React, Node.js, and MongoDB. Implemented user authentication, payment processing with Stripe, inventory management, and admin dashboard. Achieved 99.9% uptime and processed over $100K in transactions."
          },
          {
            name: "Task Management App",
            link: "https://github.com/johndoe/task-manager",
            description: "Developed a collaborative task management application using Vue.js and Firebase. Features include real-time updates, drag-and-drop interface, team collaboration, and email notifications. Used by 500+ active users."
          }
        ]
      },
      {
        id: 5,
        title: "WORK EXPERIENCE",
        type: "experience",
        items: [
          {
            position: "Senior Software Engineer",
            company: "Tech Corp Inc.",
            period: "June 2021 - Present",
            description: "Lead development of microservices architecture serving 1M+ users. Mentor junior developers and conduct code reviews. Reduced API response time by 40% through optimization."
          },
          {
            position: "Frontend Developer",
            company: "StartUp XYZ",
            period: "January 2019 - May 2021",
            description: "Built responsive web applications using React and TypeScript. Collaborated with designers to implement pixel-perfect UIs. Improved page load time by 60%."
          }
        ]
      },
      {
        id: 6,
        title: "LANGUAGES",
        type: "text",
        content: "English (Native) • Spanish (Professional Working Proficiency) • French (Conversational)"
      },
      {
        id: 7,
        title: "INTERESTS & ACTIVITIES",
        type: "text",
        content: "Open source contribution • Tech blogging and writing tutorials • Marathon running and fitness • Photography and travel • Mentoring junior developers"
      }
    ]
  });

  const updateField = (path, value) => {
    setCv(prev => {
      const newCv = { ...prev };
      const keys = path.split('.');
      let current = newCv;
      
      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }
      
      current[keys[keys.length - 1]] = value;
      return newCv;
    });
  };

  const updateSection = (sectionId, field, value) => {
    setCv(prev => ({
      ...prev,
      sections: prev.sections.map(section =>
        section.id === sectionId ? { ...section, [field]: value } : section
      )
    }));
  };

  const updateSectionItem = (sectionId, itemIndex, field, value) => {
    setCv(prev => ({
      ...prev,
      sections: prev.sections.map(section =>
        section.id === sectionId
          ? {
              ...section,
              items: section.items.map((item, i) =>
                i === itemIndex ? { ...item, [field]: value } : item
              )
            }
          : section
      )
    }));
  };

  const addSectionItem = (sectionId, template) => {
    setCv(prev => ({
      ...prev,
      sections: prev.sections.map(section =>
        section.id === sectionId
          ? { ...section, items: [...section.items, template] }
          : section
      )
    }));
  };

  const removeSectionItem = (sectionId, itemIndex) => {
    setCv(prev => ({
      ...prev,
      sections: prev.sections.map(section =>
        section.id === sectionId
          ? { ...section, items: section.items.filter((_, i) => i !== itemIndex) }
          : section
      )
    }));
  };

  const addNewSection = (type) => {
    const templates = {
      text: {
        id: Date.now(),
        title: "NEW SECTION",
        type: "text",
        content: "Add your content here..."
      },
      skills: {
        id: Date.now(),
        title: "NEW SKILLS SECTION",
        type: "skills",
        items: [{ category: "Category", items: "Skill 1, Skill 2, Skill 3" }]
      },
      education: {
        id: Date.now(),
        title: "NEW EDUCATION SECTION",
        type: "education",
        items: [{ degree: "Degree Name", institution: "Institution", period: "Start - End" }]
      },
      projects: {
        id: Date.now(),
        title: "NEW PROJECTS SECTION",
        type: "projects",
        items: [{ name: "Project Name", link: "https://...", description: "Description..." }]
      },
      experience: {
        id: Date.now(),
        title: "NEW EXPERIENCE SECTION",
        type: "experience",
        items: [{ position: "Job Title", company: "Company Name", period: "Start - End", description: "Description..." }]
      }
    };

    setCv(prev => ({
      ...prev,
      sections: [...prev.sections, templates[type]]
    }));
  };

  const removeSection = (sectionId) => {
    setCv(prev => ({
      ...prev,
      sections: prev.sections.filter(section => section.id !== sectionId)
    }));
  };

  const moveSection = (sectionId, direction) => {
    setCv(prev => {
      const sections = [...prev.sections];
      const index = sections.findIndex(s => s.id === sectionId);
      if (
        (direction === 'up' && index > 0) ||
        (direction === 'down' && index < sections.length - 1)
      ) {
        const newIndex = direction === 'up' ? index - 1 : index + 1;
        [sections[index], sections[newIndex]] = [sections[newIndex], sections[index]];
      }
      return { ...prev, sections };
    });
  };

  const handlePrint = () => {
    window.print();
  };

  const renderSection = (section) => {
    switch (section.type) {
      case 'text':
        return (
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              {editMode ? (
                <input
                  type="text"
                  value={section.title}
                  onChange={(e) => updateSection(section.id, 'title', e.target.value)}
                  placeholder="SECTION TITLE"
                  className="text-sm font-bold text-gray-800 border-b border-gray-300 pb-1 flex-1 focus:outline-none focus:border-blue-500"
                />
              ) : (
                <h2 className="text-sm font-bold text-gray-800 border-b border-gray-300 pb-1 flex-1">
                  {section.title}
                </h2>
              )}
              {editMode && (
                <div className="flex gap-1 ml-2">
                  <button onClick={() => moveSection(section.id, 'up')} className="text-gray-500 hover:text-gray-700">↑</button>
                  <button onClick={() => moveSection(section.id, 'down')} className="text-gray-500 hover:text-gray-700">↓</button>
                  <button onClick={() => removeSection(section.id)} className="text-red-500 hover:text-red-700">
                    <Trash2 size={14} />
                  </button>
                </div>
              )}
            </div>
            {editMode ? (
              <textarea
                value={section.content}
                onChange={(e) => updateSection(section.id, 'content', e.target.value)}
                placeholder="Add content here..."
                className="w-full border border-gray-300 rounded p-2 text-xs focus:outline-none focus:border-blue-500"
                rows="3"
              />
            ) : (
              <p className="text-xs">{section.content}</p>
            )}
          </div>
        );

      case 'skills':
        return (
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              {editMode ? (
                <input
                  type="text"
                  value={section.title}
                  onChange={(e) => updateSection(section.id, 'title', e.target.value)}
                  placeholder="SECTION TITLE"
                  className="text-sm font-bold text-gray-800 border-b border-gray-300 pb-1 flex-1 focus:outline-none focus:border-blue-500"
                />
              ) : (
                <h2 className="text-sm font-bold text-gray-800 border-b border-gray-300 pb-1 flex-1">
                  {section.title}
                </h2>
              )}
              {editMode && (
                <div className="flex gap-1 ml-2">
                  <button onClick={() => moveSection(section.id, 'up')} className="text-gray-500 hover:text-gray-700">↑</button>
                  <button onClick={() => moveSection(section.id, 'down')} className="text-gray-500 hover:text-gray-700">↓</button>
                  <button
                    onClick={() => addSectionItem(section.id, { category: 'New Category', items: 'Skill 1, Skill 2' })}
                    className="text-green-600 hover:text-green-800"
                  >
                    <Plus size={14} />
                  </button>
                  <button onClick={() => removeSection(section.id)} className="text-red-500 hover:text-red-700">
                    <Trash2 size={14} />
                  </button>
                </div>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {section.items.map((skill, index) => (
                <div key={index} className="text-xs">
                  {editMode ? (
                    <div className="flex items-start gap-2 border border-gray-200 rounded p-2">
                      <div className="flex-1">
                        <input
                          type="text"
                          value={skill.category}
                          onChange={(e) => updateSectionItem(section.id, index, 'category', e.target.value)}
                          placeholder="Category"
                          className="font-bold w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 mb-1"
                        />
                        <input
                          type="text"
                          value={skill.items}
                          onChange={(e) => updateSectionItem(section.id, index, 'items', e.target.value)}
                          placeholder="Items..."
                          className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <button
                        onClick={() => removeSectionItem(section.id, index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  ) : (
                    <div>
                      <strong>{skill.category}:</strong> {skill.items}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );

      case 'education':
        return (
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              {editMode ? (
                <input
                  type="text"
                  value={section.title}
                  onChange={(e) => updateSection(section.id, 'title', e.target.value)}
                  placeholder="SECTION TITLE"
                  className="text-sm font-bold text-gray-800 border-b border-gray-300 pb-1 flex-1 focus:outline-none focus:border-blue-500"
                />
              ) : (
                <h2 className="text-sm font-bold text-gray-800 border-b border-gray-300 pb-1 flex-1">
                  {section.title}
                </h2>
              )}
              {editMode && (
                <div className="flex gap-1 ml-2">
                  <button onClick={() => moveSection(section.id, 'up')} className="text-gray-500 hover:text-gray-700">↑</button>
                  <button onClick={() => moveSection(section.id, 'down')} className="text-gray-500 hover:text-gray-700">↓</button>
                  <button
                    onClick={() => addSectionItem(section.id, { degree: 'Degree', institution: 'Institution', period: 'Period' })}
                    className="text-green-600 hover:text-green-800"
                  >
                    <Plus size={14} />
                  </button>
                  <button onClick={() => removeSection(section.id)} className="text-red-500 hover:text-red-700">
                    <Trash2 size={14} />
                  </button>
                </div>
              )}
            </div>
            {section.items.map((edu, index) => (
              <div key={index} className="mb-3">
                {editMode ? (
                  <div className="border border-gray-200 rounded p-2">
                    <div className="flex justify-between items-start mb-1">
                      <input
                        type="text"
                        value={edu.degree}
                        onChange={(e) => updateSectionItem(section.id, index, 'degree', e.target.value)}
                        placeholder="Degree"
                        className="font-bold text-xs w-full border-b border-gray-300 focus:outline-none focus:border-blue-500"
                      />
                      <button
                        onClick={() => removeSectionItem(section.id, index)}
                        className="ml-2 text-red-500 hover:text-red-700"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                    <input
                      type="text"
                      value={edu.institution}
                      onChange={(e) => updateSectionItem(section.id, index, 'institution', e.target.value)}
                      placeholder="Institution"
                      className="text-xs w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 mb-1"
                    />
                    <input
                      type="text"
                      value={edu.period}
                      onChange={(e) => updateSectionItem(section.id, index, 'period', e.target.value)}
                      placeholder="Period"
                      className="text-xs w-full border-b border-gray-300 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                ) : (
                  <>
                    <div className="font-bold text-xs">{edu.degree}</div>
                    <div className="text-xs">{edu.institution}</div>
                    <div className="text-xs">{edu.period}</div>
                  </>
                )}
              </div>
            ))}
          </div>
        );

      case 'projects':
        return (
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              {editMode ? (
                <input
                  type="text"
                  value={section.title}
                  onChange={(e) => updateSection(section.id, 'title', e.target.value)}
                  placeholder="SECTION TITLE"
                  className="text-sm font-bold text-gray-800 border-b border-gray-300 pb-1 flex-1 focus:outline-none focus:border-blue-500"
                />
              ) : (
                <h2 className="text-sm font-bold text-gray-800 border-b border-gray-300 pb-1 flex-1">
                  {section.title}
                </h2>
              )}
              {editMode && (
                <div className="flex gap-1 ml-2">
                  <button onClick={() => moveSection(section.id, 'up')} className="text-gray-500 hover:text-gray-700">↑</button>
                  <button onClick={() => moveSection(section.id, 'down')} className="text-gray-500 hover:text-gray-700">↓</button>
                  <button
                    onClick={() => addSectionItem(section.id, { name: 'Project', link: 'https://...', description: 'Description...' })}
                    className="text-green-600 hover:text-green-800"
                  >
                    <Plus size={14} />
                  </button>
                  <button onClick={() => removeSection(section.id)} className="text-red-500 hover:text-red-700">
                    <Trash2 size={14} />
                  </button>
                </div>
              )}
            </div>
            {section.items.map((project, index) => (
              <div key={index} className="mb-3">
                {editMode ? (
                  <div className="border border-gray-200 rounded p-2">
                    <div className="flex justify-between items-start mb-1">
                      <input
                        type="text"
                        value={project.name}
                        onChange={(e) => updateSectionItem(section.id, index, 'name', e.target.value)}
                        placeholder="Project Name"
                        className="font-bold text-xs w-full border-b border-gray-300 focus:outline-none focus:border-blue-500"
                      />
                      <button
                        onClick={() => removeSectionItem(section.id, index)}
                        className="ml-2 text-red-500 hover:text-red-700"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                    <input
                      type="url"
                      value={project.link}
                      onChange={(e) => updateSectionItem(section.id, index, 'link', e.target.value)}
                      placeholder="Link"
                      className="text-xs w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 mb-1"
                    />
                    <textarea
                      value={project.description}
                      onChange={(e) => updateSectionItem(section.id, index, 'description', e.target.value)}
                      placeholder="Description"
                      className="text-xs w-full border border-gray-300 rounded p-1 focus:outline-none focus:border-blue-500"
                      rows="3"
                    />
                  </div>
                ) : (
                  <>
                    <div className="font-bold text-xs">
                      {project.name} <a href={project.link} className="text-blue-600 hover:underline">View</a>
                    </div>
                    <p className="text-xs">{project.description}</p>
                  </>
                )}
              </div>
            ))}
          </div>
        );

      case 'experience':
        return (
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              {editMode ? (
                <input
                  type="text"
                  value={section.title}
                  onChange={(e) => updateSection(section.id, 'title', e.target.value)}
                  placeholder="SECTION TITLE"
                  className="text-sm font-bold text-gray-800 border-b border-gray-300 pb-1 flex-1 focus:outline-none focus:border-blue-500"
                />
              ) : (
                <h2 className="text-sm font-bold text-gray-800 border-b border-gray-300 pb-1 flex-1">
                  {section.title}
                </h2>
              )}
              {editMode && (
                <div className="flex gap-1 ml-2">
                  <button onClick={() => moveSection(section.id, 'up')} className="text-gray-500 hover:text-gray-700">↑</button>
                  <button onClick={() => moveSection(section.id, 'down')} className="text-gray-500 hover:text-gray-700">↓</button>
                  <button
                    onClick={() => addSectionItem(section.id, { position: 'Position', company: 'Company', period: 'Period', description: 'Description...' })}
                    className="text-green-600 hover:text-green-800"
                  >
                    <Plus size={14} />
                  </button>
                  <button onClick={() => removeSection(section.id)} className="text-red-500 hover:text-red-700">
                    <Trash2 size={14} />
                  </button>
                </div>
              )}
            </div>
            {section.items.map((exp, index) => (
              <div key={index} className="mb-3">
                {editMode ? (
                  <div className="border border-gray-200 rounded p-2">
                    <div className="flex justify-between items-start mb-1">
                      <input
                        type="text"
                        value={exp.position}
                        onChange={(e) => updateSectionItem(section.id, index, 'position', e.target.value)}
                        placeholder="Position"
                        className="font-bold text-xs w-full border-b border-gray-300 focus:outline-none focus:border-blue-500"
                      />
                      <button
                        onClick={() => removeSectionItem(section.id, index)}
                        className="ml-2 text-red-500 hover:text-red-700"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                    <input
                      type="text"
                      value={exp.company}
                      onChange={(e) => updateSectionItem(section.id, index, 'company', e.target.value)}
                      placeholder="Company"
                      className="text-xs w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 mb-1"
                    />
                    <input
                      type="text"
                      value={exp.period}
                      onChange={(e) => updateSectionItem(section.id, index, 'period', e.target.value)}
                      placeholder="Period"
                      className="text-xs w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 mb-1"
                    />
                    <textarea
                      value={exp.description}
                      onChange={(e) => updateSectionItem(section.id, index, 'description', e.target.value)}
                      placeholder="Description"
                      className="text-xs w-full border border-gray-300 rounded p-1 focus:outline-none focus:border-blue-500"
                      rows="2"
                    />
                  </div>
                ) : (
                  <>
                    <div className="font-bold text-xs">{exp.position}</div>
                    <div className="text-xs">{exp.company}</div>
                    <div className="text-xs italic">{exp.period}</div>
                    <p className="text-xs">{exp.description}</p>
                  </>
                )}
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Control Panel */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-4 print:hidden">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-gray-800">Dynamic CV Maker</h1>
            <div className="flex gap-2">
              <button
                onClick={() => setEditMode(!editMode)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                {editMode ? <Eye size={18} /> : <Edit2 size={18} />}
                {editMode ? 'Preview' : 'Edit'}
              </button>
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
              >
                <Download size={18} />
                Print/Save PDF
              </button>
            </div>
          </div>
          
          {editMode && (
            <div className="border-t pt-4">
              <p className="text-sm font-semibold mb-2">Add New Section:</p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => addNewSection('text')}
                  className="px-3 py-1 bg-purple-500 text-white text-sm rounded hover:bg-purple-600"
                >
                  + Text Section
                </button>
                <button
                  onClick={() => addNewSection('skills')}
                  className="px-3 py-1 bg-indigo-500 text-white text-sm rounded hover:bg-indigo-600"
                >
                  + Skills Section
                </button>
                <button
                  onClick={() => addNewSection('education')}
                  className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
                >
                  + Education Section
                </button>
                <button
                  onClick={() => addNewSection('projects')}
                  className="px-3 py-1 bg-teal-500 text-white text-sm rounded hover:bg-teal-600"
                >
                  + Projects Section
                </button>
                <button
                  onClick={() => addNewSection('experience')}
                  className="px-3 py-1 bg-orange-500 text-white text-sm rounded hover:bg-orange-600"
                >
                  + Experience Section
                </button>
              </div>
            </div>
          )}
        </div>

        {/* CV Document */}
        <div className="bg-white shadow-lg" id="cv-content">
          <style>{`
            @media print {
              body * {
                visibility: hidden;
              }
              #cv-content, #cv-content * {
                visibility: visible;
              }
              #cv-content {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                box-shadow: none;
              }
              .edit-button, .add-button, .delete-button {
                display: none !important;
              }
            }
            
            .cv-page {
              width: 8.5in;
              min-height: 11in;
              margin: 0 auto;
              padding: 0.5in;
              font-family: Arial, sans-serif;
              font-size: 11px;
              line-height: 1.4;
              color: #333;
            }
            
            @media screen and (max-width: 768px) {
              .cv-page {
                width: 100%;
                padding: 1rem;
              }
            }
          `}</style>
          
          <div className="cv-page">
            {/* Header */}
            <div className="mb-4">
              {editMode ? (
                <>
                  <input
                    type="text"
                    value={cv.name}
                    onChange={(e) => updateField('name', e.target.value)}
                    placeholder="YOUR FULL NAME"
                    className="text-2xl font-bold text-gray-800 w-full border-b-2 border-blue-300 focus:outline-none focus:border-blue-500 mb-1"
                  />
                  <input
                    type="text"
                    value={cv.title}
                    onChange={(e) => updateField('title', e.target.value)}
                    placeholder="Your Job Title"
                    className="text-base text-gray-600 w-full border-b border-gray-300 focus:outline-none focus:border-blue-500 mb-2"
                  />
                  <div className="space-y-1">
                    <input
                      type="text"
                      value={cv.contact.location}
                      onChange={(e) => updateField('contact.location', e.target.value)}
                      className="w-full border-b border-gray-200 focus:outline-none focus:border-blue-500 text-xs"
                      placeholder="City, State/Country"
                    />
                    <input
                      type="email"
                      value={cv.contact.email}
                      onChange={(e) => updateField('contact.email', e.target.value)}
                      className="w-full border-b border-gray-200 focus:outline-none focus:border-blue-500 text-xs"
                      placeholder="your.email@example.com"
                    />
                    <input
                      type="url"
                      value={cv.contact.portfolio}
                      onChange={(e) => updateField('contact.portfolio', e.target.value)}
                      className="w-full border-b border-gray-200 focus:outline-none focus:border-blue-500 text-xs"
                      placeholder="https://yourportfolio.com"
                    />
                    <input
                      type="url"
                      value={cv.contact.linkedin}
                      onChange={(e) => updateField('contact.linkedin', e.target.value)}
                      className="w-full border-b border-gray-200 focus:outline-none focus:border-blue-500 text-xs"
                      placeholder="https://linkedin.com/in/yourprofile"
                    />
                    <input
                      type="url"
                      value={cv.contact.github}
                      onChange={(e) => updateField('contact.github', e.target.value)}
                      className="w-full border-b border-gray-200 focus:outline-none focus:border-blue-500 text-xs"
                      placeholder="https://github.com/yourusername"
                    />
                  </div>
                </>
              ) : (
                <>
                  <h1 className="text-2xl font-bold text-gray-800 mb-1">{cv.name}</h1>
                  <div className="text-base text-gray-600 mb-2">{cv.title}</div>
                  <div className="text-xs text-gray-700">
                    {cv.contact.location} | {cv.contact.email} | <a href={cv.contact.portfolio} className="text-blue-600 hover:underline">{cv.contact.portfolio}</a> | <a href={cv.contact.linkedin} className="text-blue-600 hover:underline">LinkedIn</a> | <a href={cv.contact.github} className="text-blue-600 hover:underline">GitHub</a>
                  </div>
                </>
              )}
            </div>

            {/* Dynamic Sections */}
            {cv.sections.map(section => (
              <div key={section.id}>
                {renderSection(section)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicCVMaker;