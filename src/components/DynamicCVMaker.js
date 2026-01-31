import React, { useState } from 'react';
import {
  Edit2, Plus, Trash2, Download, Eye, GripVertical,
  ChevronUp, ChevronDown, Sparkles, FileText, Briefcase,
  GraduationCap, Code, User
} from 'lucide-react';
import RichTextEditor from './RichTextEditor';

// Template style configurations
const templateStyles = {
  1: { // Classic - Clean black & white
    headerBg: 'bg-white',
    headerText: 'text-gray-900',
    accentColor: 'text-gray-700',
    borderColor: 'border-gray-300',
    sectionTitle: 'text-gray-800 border-b-2 border-gray-800',
    linkColor: 'text-gray-600 hover:text-gray-900',
    pageBg: 'bg-white',
  },
  4: { // Professional - Minimalist
    headerBg: 'bg-white',
    headerText: 'text-[#2c3e50]',
    accentColor: 'text-[#3498db]',
    borderColor: 'border-[#333]',
    sectionTitle: 'text-[#2c3e50] text-[16px] font-bold border-b-[1.5px] border-[#333] pb-[3px] uppercase tracking-[0.5px]',
    linkColor: 'text-[#3498db] no-underline',
    pageBg: 'bg-white',
  },
  5: { // Minimalist - Centered
    headerBg: 'bg-white text-center mb-[18px]',
    headerText: 'text-black',
    accentColor: 'text-[#0066cc]',
    borderColor: 'border-black',
    sectionTitle: 'text-black text-[11px] font-bold border-b border-black pb-[2px] mb-[8px] mt-[16px] uppercase',
    linkColor: 'text-[#0066cc] underline',
    pageBg: 'bg-white',
  },
};

const DynamicCVMaker = ({ selectedTemplate = 1 }) => {
  const [editMode, setEditMode] = useState(true);

  // Initialize CV Content from LocalStorage
  const [cv, setCv] = useState(() => {
    const saved = localStorage.getItem('cv_data');
    return saved ? JSON.parse(saved) : {
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
          content: "Results-driven full stack developer with 5+ years of experience building scalable web applications."
        },
        {
          id: 2,
          title: "TECHNICAL SKILLS",
          type: "skills",
          items: [
            { category: "Frontend", items: "React.js, Vue.js, HTML5, CSS3, TypeScript" },
            { category: "Backend", items: "Node.js, Python, Django, Express.js" },
            { category: "Database", items: "MongoDB, PostgreSQL, MySQL" },
            { category: "Tools", items: "Git, Docker, AWS, VS Code" }
          ]
        },
        {
          id: 3,
          title: "WORK EXPERIENCE",
          type: "experience",
          items: [
            {
              position: "Senior Software Engineer",
              company: "Tech Corp Inc.",
              period: "June 2021 - Present",
              description: "Lead development of microservices architecture serving 1M+ users."
            }
          ]
        },
        {
          id: 4,
          title: "EDUCATION",
          type: "education",
          items: [
            {
              degree: "Bachelor of Science in Computer Science",
              institution: "University of California, Berkeley",
              period: "2015 - 2019"
            }
          ]
        },
        {
          id: 5,
          title: "PROJECTS",
          type: "projects",
          items: [
            {
              name: "E-Commerce Platform",
              link: "https://github.com/johndoe/ecommerce",
              description: "Built a full-featured e-commerce platform with React and Node.js."
            }
          ]
        }
      ]
    };
  });

  const [draggedSectionIndex, setDraggedSectionIndex] = useState(null);

  // Persist CV data
  React.useEffect(() => {
    localStorage.setItem('cv_data', JSON.stringify(cv));
  }, [cv]);

  const styles = templateStyles[selectedTemplate] || templateStyles[1];


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

  const handleDragStart = (e, index) => {
    setDraggedSectionIndex(index);
    // e.dataTransfer.effectAllowed = "move"; // Optional
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    if (draggedSectionIndex === null || draggedSectionIndex === index) return;

    setCv(prev => {
      const sections = [...prev.sections];
      const draggedItem = sections[draggedSectionIndex];
      sections.splice(draggedSectionIndex, 1);
      sections.splice(index, 0, draggedItem);
      return { ...prev, sections };
    });
    setDraggedSectionIndex(index);
  };

  const handleDragEnd = () => {
    setDraggedSectionIndex(null);
  };

  const handlePrint = () => {
    const cvContent = document.getElementById('cv-content');
    if (!cvContent) {
      window.print();
      return;
    }

    // Create a new window for printing
    const printWindow = window.open('', '_blank', 'width=800,height=600');
    
    // Get all stylesheets from current document
    const styles = Array.from(document.styleSheets)
      .map(styleSheet => {
        try {
          return Array.from(styleSheet.cssRules)
            .map(rule => rule.cssText)
            .join('\n');
        } catch (e) {
          // Handle cross-origin stylesheets
          if (styleSheet.href) {
            return `@import url("${styleSheet.href}");`;
          }
          return '';
        }
      })
      .join('\n');

    // Get the internal styles from cv-content
    const internalStyles = cvContent.querySelector('style')?.innerHTML || '';

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>CV Export</title>
          <style>
            ${styles}
            ${internalStyles}
            
            @page {
              margin: 0.5in;
              size: letter;
            }
            
            * {
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            
            html, body {
              margin: 0;
              padding: 0;
              background: white;
              width: 100%;
              height: auto;
            }
            
            .cv-page {
              width: 100% !important;
              min-height: auto !important;
              padding: 0 !important;
              margin: 0 !important;
              box-shadow: none !important;
            }
          </style>
        </head>
        <body>
          ${cvContent.innerHTML}
        </body>
      </html>
    `);
    
    printWindow.document.close();
    
    // Wait for content to load then print
    printWindow.onload = () => {
      printWindow.focus();
      printWindow.print();
      printWindow.close();
    };
    
    // Fallback if onload doesn't fire
    setTimeout(() => {
      if (!printWindow.closed) {
        printWindow.focus();
        printWindow.print();
        printWindow.close();
      }
    }, 500);
  };

  const renderSection = (section) => {
    switch (section.type) {
      case 'text':
        return (
          <div className="mb-6 group/section">
            <div className="flex items-center justify-between mb-3">
              {editMode ? (
                <div className="flex items-center gap-2 flex-1">
                  <FileText size={18} className="text-purple-500" />
                  <input
                    type="text"
                    value={section.title}
                    onChange={(e) => updateSection(section.id, 'title', e.target.value)}
                    placeholder="SECTION TITLE"
                    className="cv-section-title focus:outline-none bg-transparent flex-1 border-b-2 border-transparent hover:border-purple-200 focus:border-purple-500 transition-all px-2 py-1"
                  />
                </div>
              ) : (
                <h2 className="cv-section-title">{section.title}</h2>
              )}
              {editMode && (
                <div className="flex gap-1 ml-2 opacity-0 group-hover/section:opacity-100 transition-opacity">
                  <button onClick={() => moveSection(section.id, 'up')} className="p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 transition-all"><ChevronUp size={16} /></button>
                  <button onClick={() => moveSection(section.id, 'down')} className="p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 transition-all"><ChevronDown size={16} /></button>
                  <button onClick={() => removeSection(section.id)} className="p-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-500 transition-all">
                    <Trash2 size={16} />
                  </button>
                </div>
              )}
            </div>
            {editMode ? (
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-1 shadow-sm border border-gray-100">
                <RichTextEditor
                  content={section.content}
                  onChange={(html) => updateSection(section.id, 'content', html)}
                  placeholder="Add your content here..."
                  className="text-sm"
                />
              </div>
            ) : (
              <div className="text-xs prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: section.content }} />
            )}
          </div>
        );

      case 'skills':
        return (
          <div className="mb-6 group/section">
            <div className="flex items-center justify-between mb-3">
              {editMode ? (
                <div className="flex items-center gap-2 flex-1">
                  <Sparkles size={18} className="text-indigo-500" />
                  <input
                    type="text"
                    value={section.title}
                    onChange={(e) => updateSection(section.id, 'title', e.target.value)}
                    placeholder="SECTION TITLE"
                    className="cv-section-title focus:outline-none bg-transparent flex-1 border-b-2 border-transparent hover:border-indigo-200 focus:border-indigo-500 transition-all px-2 py-1"
                  />
                </div>
              ) : (
                <h2 className="cv-section-title">{section.title}</h2>
              )}
              {editMode && (
                <div className="flex gap-1 ml-2 opacity-0 group-hover/section:opacity-100 transition-opacity">
                  <button onClick={() => moveSection(section.id, 'up')} className="p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 transition-all"><ChevronUp size={16} /></button>
                  <button onClick={() => moveSection(section.id, 'down')} className="p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 transition-all"><ChevronDown size={16} /></button>
                  <button
                    onClick={() => addSectionItem(section.id, { category: 'New Category', items: 'Skill 1, Skill 2' })}
                    className="p-1.5 rounded-lg bg-green-50 hover:bg-green-100 text-green-600 transition-all"
                  >
                    <Plus size={16} />
                  </button>
                  <button onClick={() => removeSection(section.id)} className="p-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-500 transition-all">
                    <Trash2 size={16} />
                  </button>
                </div>
              )}
            </div>
            <div className={selectedTemplate === 4 ? "flex flex-col gap-2 pl-5" : "grid grid-cols-1 md:grid-cols-2 gap-3"}>
              {section.items.map((skill, index) => (
                <div key={index} className="text-xs">
                  {editMode ? (
                    <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl p-4 shadow-sm border border-indigo-100 group/item hover:shadow-md transition-all">
                      <div className="flex justify-between items-start mb-2">
                        <input
                          type="text"
                          value={skill.category}
                          onChange={(e) => updateSectionItem(section.id, index, 'category', e.target.value)}
                          placeholder="Category"
                          className="font-semibold text-sm w-full bg-transparent border-b-2 border-indigo-200 focus:outline-none focus:border-indigo-500 pb-1 transition-all"
                        />
                        <button
                          onClick={() => removeSectionItem(section.id, index)}
                          className="ml-2 p-1 rounded-lg opacity-0 group-hover/item:opacity-100 bg-red-50 hover:bg-red-100 text-red-500 transition-all"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                      <RichTextEditor
                        content={skill.items}
                        onChange={(html) => updateSectionItem(section.id, index, 'items', html)}
                        placeholder="Skills..."
                        className="text-sm"
                      />
                    </div>
                  ) : (
                    <div>
                      {selectedTemplate === 4 ? (
                        <div><strong className="inline-block min-w-[90px]">{skill.category}</strong> <span dangerouslySetInnerHTML={{ __html: skill.items }} /></div>
                      ) : selectedTemplate === 5 ? (
                        <div><strong className="cv-subheading inline-block min-w-[85px]">{skill.category}:</strong> <span dangerouslySetInnerHTML={{ __html: skill.items }} /></div>
                      ) : (
                        <><strong>{skill.category}:</strong> <span dangerouslySetInnerHTML={{ __html: skill.items }} /></>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );

      case 'education':
        return (
          <div className="mb-6 group/section">
            <div className="flex items-center justify-between mb-3">
              {editMode ? (
                <div className="flex items-center gap-2 flex-1">
                  <GraduationCap size={18} className="text-blue-500" />
                  <input
                    type="text"
                    value={section.title}
                    onChange={(e) => updateSection(section.id, 'title', e.target.value)}
                    placeholder="SECTION TITLE"
                    className="cv-section-title focus:outline-none bg-transparent flex-1 border-b-2 border-transparent hover:border-blue-200 focus:border-blue-500 transition-all px-2 py-1"
                  />
                </div>
              ) : (
                <h2 className="cv-section-title">{section.title}</h2>
              )}
              {editMode && (
                <div className="flex gap-1 ml-2 opacity-0 group-hover/section:opacity-100 transition-opacity">
                  <button onClick={() => moveSection(section.id, 'up')} className="p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 transition-all"><ChevronUp size={16} /></button>
                  <button onClick={() => moveSection(section.id, 'down')} className="p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 transition-all"><ChevronDown size={16} /></button>
                  <button
                    onClick={() => addSectionItem(section.id, { degree: 'Degree', institution: 'Institution', period: 'Period', description: '' })}
                    className="p-1.5 rounded-lg bg-green-50 hover:bg-green-100 text-green-600 transition-all"
                  >
                    <Plus size={16} />
                  </button>
                  <button onClick={() => removeSection(section.id)} className="p-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-500 transition-all">
                    <Trash2 size={16} />
                  </button>
                </div>
              )}
            </div>
            <div className="space-y-3">
              {section.items.map((edu, index) => (
                <div key={index}>
                  {editMode ? (
                    <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-4 shadow-sm border border-blue-100 group/item hover:shadow-md transition-all">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1 space-y-2">
                          <input
                            type="text"
                            value={edu.degree}
                            onChange={(e) => updateSectionItem(section.id, index, 'degree', e.target.value)}
                            placeholder="Degree / Certificate"
                            className="font-semibold text-sm w-full bg-transparent border-b-2 border-blue-200 focus:outline-none focus:border-blue-500 pb-1 transition-all"
                          />
                          <input
                            type="text"
                            value={edu.institution}
                            onChange={(e) => updateSectionItem(section.id, index, 'institution', e.target.value)}
                            placeholder="Institution"
                            className="text-sm w-full bg-transparent border-b border-blue-100 focus:outline-none focus:border-blue-400 pb-1 transition-all"
                          />
                          <input
                            type="text"
                            value={edu.period}
                            onChange={(e) => updateSectionItem(section.id, index, 'period', e.target.value)}
                            placeholder="Period (e.g., 2020 - 2024)"
                            className="text-sm text-gray-600 w-full bg-transparent border-b border-blue-100 focus:outline-none focus:border-blue-400 pb-1 transition-all"
                          />
                        </div>
                        <button
                          onClick={() => removeSectionItem(section.id, index)}
                          className="ml-3 p-1.5 rounded-lg opacity-0 group-hover/item:opacity-100 bg-red-50 hover:bg-red-100 text-red-500 transition-all"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                      <div className="mt-2">
                        <label className="text-xs text-gray-500 mb-1 block">Additional Details (optional)</label>
                        <RichTextEditor
                          content={edu.description || ''}
                          onChange={(html) => updateSectionItem(section.id, index, 'description', html)}
                          placeholder="GPA, honors, relevant coursework..."
                          className="text-sm"
                        />
                      </div>
                    </div>
                  ) : (
                    <>
                      {selectedTemplate === 4 ? (
                        <div className="education-item flex justify-between items-baseline mb-1">
                          <div>
                            <strong className="cv-subheading">{edu.degree},</strong> <span className="cv-subheading font-normal">{edu.institution}</span>
                            {edu.description && <div className="text-xs text-gray-600 mt-1" dangerouslySetInnerHTML={{ __html: edu.description }} />}
                          </div>
                          <div className="cv-text-meta">{edu.period}</div>
                        </div>
                      ) : selectedTemplate === 5 ? (
                        <div className="mb-1">
                          <strong className="cv-subheading">{edu.degree}</strong> — <span className="cv-text-desc">{edu.institution} ({edu.period})</span>
                          {edu.description && <div className="text-xs text-gray-600 mt-1" dangerouslySetInnerHTML={{ __html: edu.description }} />}
                        </div>
                      ) : (
                        <>
                          <div className="font-bold text-xs">{edu.degree}</div>
                          <div className="text-xs">{edu.institution}</div>
                          <div className="text-xs">{edu.period}</div>
                          {edu.description && <div className="text-xs text-gray-600 mt-1" dangerouslySetInnerHTML={{ __html: edu.description }} />}
                        </>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        );

      case 'projects':
        return (
          <div className="mb-6 group/section">
            <div className="flex items-center justify-between mb-3">
              {editMode ? (
                <div className="flex items-center gap-2 flex-1">
                  <Code size={18} className="text-teal-500" />
                  <input
                    type="text"
                    value={section.title}
                    onChange={(e) => updateSection(section.id, 'title', e.target.value)}
                    placeholder="SECTION TITLE"
                    className="cv-section-title focus:outline-none bg-transparent flex-1 border-b-2 border-transparent hover:border-teal-200 focus:border-teal-500 transition-all px-2 py-1"
                  />
                </div>
              ) : (
                <h2 className="cv-section-title">{section.title}</h2>
              )}
              {editMode && (
                <div className="flex gap-1 ml-2 opacity-0 group-hover/section:opacity-100 transition-opacity">
                  <button onClick={() => moveSection(section.id, 'up')} className="p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 transition-all"><ChevronUp size={16} /></button>
                  <button onClick={() => moveSection(section.id, 'down')} className="p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 transition-all"><ChevronDown size={16} /></button>
                  <button
                    onClick={() => addSectionItem(section.id, { name: 'Project', link: 'https://...', description: 'Description...' })}
                    className="p-1.5 rounded-lg bg-green-50 hover:bg-green-100 text-green-600 transition-all"
                  >
                    <Plus size={16} />
                  </button>
                  <button onClick={() => removeSection(section.id)} className="p-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-500 transition-all">
                    <Trash2 size={16} />
                  </button>
                </div>
              )}
            </div>
            <div className="space-y-3">
              {section.items.map((project, index) => (
                <div key={index}>
                  {editMode ? (
                    <div className="bg-gradient-to-br from-teal-50 to-white rounded-xl p-4 shadow-sm border border-teal-100 group/item hover:shadow-md transition-all">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1 space-y-2">
                          <input
                            type="text"
                            value={project.name}
                            onChange={(e) => updateSectionItem(section.id, index, 'name', e.target.value)}
                            placeholder="Project Name"
                            className="font-semibold text-sm w-full bg-transparent border-b-2 border-teal-200 focus:outline-none focus:border-teal-500 pb-1 transition-all"
                          />
                          <input
                            type="url"
                            value={project.link}
                            onChange={(e) => updateSectionItem(section.id, index, 'link', e.target.value)}
                            placeholder="https://github.com/..."
                            className="text-sm w-full bg-transparent border-b border-teal-100 focus:outline-none focus:border-teal-400 pb-1 text-teal-600 transition-all"
                          />
                        </div>
                        <button
                          onClick={() => removeSectionItem(section.id, index)}
                          className="ml-3 p-1.5 rounded-lg opacity-0 group-hover/item:opacity-100 bg-red-50 hover:bg-red-100 text-red-500 transition-all"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                      <div className="mt-2">
                        <label className="text-xs text-gray-500 mb-1 block">Description</label>
                        <RichTextEditor
                          content={project.description}
                          onChange={(html) => updateSectionItem(section.id, index, 'description', html)}
                          placeholder="Describe your project, technologies used, achievements..."
                          className="text-sm"
                        />
                      </div>
                    </div>
                  ) : (
                    <>
                      {selectedTemplate === 4 ? (
                        <div className="project-item">
                          <div className="flex justify-between items-baseline mb-1">
                            <div className="cv-subheading">{project.name}</div>
                            <a href={project.link} className="cv-link">View</a>
                          </div>
                          <div className="cv-text-desc pl-5 border-l-2 border-gray-100" dangerouslySetInnerHTML={{ __html: project.description }} />
                        </div>
                      ) : selectedTemplate === 5 ? (
                        <div className="mb-[10px]">
                          <div className="flex justify-between items-baseline">
                            <div className="cv-subheading">{project.name}</div>
                            <div><a href={project.link} className="cv-link underline">Link</a></div>
                          </div>
                          <ul className="cv-list">
                            <li className="cv-list-item" dangerouslySetInnerHTML={{ __html: project.description }} />
                          </ul>
                        </div>
                      ) : (
                        <>
                          <div className="font-bold text-xs">
                            {project.name} <a href={project.link} className="cv-link underline">View</a>
                          </div>
                          <div className="text-xs" dangerouslySetInnerHTML={{ __html: project.description }} />
                        </>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        );

      case 'experience':
        return (
          <div className="mb-6 group/section">
            <div className="flex items-center justify-between mb-3">
              {editMode ? (
                <div className="flex items-center gap-2 flex-1">
                  <Briefcase size={18} className="text-orange-500" />
                  <input
                    type="text"
                    value={section.title}
                    onChange={(e) => updateSection(section.id, 'title', e.target.value)}
                    placeholder="SECTION TITLE"
                    className="cv-section-title focus:outline-none bg-transparent flex-1 border-b-2 border-transparent hover:border-orange-200 focus:border-orange-500 transition-all px-2 py-1"
                  />
                </div>
              ) : (
                <h2 className="cv-section-title">{section.title}</h2>
              )}
              {editMode && (
                <div className="flex gap-1 ml-2 opacity-0 group-hover/section:opacity-100 transition-opacity">
                  <button onClick={() => moveSection(section.id, 'up')} className="p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 transition-all"><ChevronUp size={16} /></button>
                  <button onClick={() => moveSection(section.id, 'down')} className="p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 transition-all"><ChevronDown size={16} /></button>
                  <button
                    onClick={() => addSectionItem(section.id, { position: 'Position', company: 'Company', period: 'Period', description: 'Description...' })}
                    className="p-1.5 rounded-lg bg-green-50 hover:bg-green-100 text-green-600 transition-all"
                  >
                    <Plus size={16} />
                  </button>
                  <button onClick={() => removeSection(section.id)} className="p-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-500 transition-all">
                    <Trash2 size={16} />
                  </button>
                </div>
              )}
            </div>
            <div className="space-y-3">
              {section.items.map((exp, index) => (
                <div key={index}>
                  {editMode ? (
                    <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-4 shadow-sm border border-orange-100 group/item hover:shadow-md transition-all">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1 space-y-2">
                          <input
                            type="text"
                            value={exp.position}
                            onChange={(e) => updateSectionItem(section.id, index, 'position', e.target.value)}
                            placeholder="Job Title / Position"
                            className="font-semibold text-sm w-full bg-transparent border-b-2 border-orange-200 focus:outline-none focus:border-orange-500 pb-1 transition-all"
                          />
                          <div className="flex gap-3">
                            <input
                              type="text"
                              value={exp.company}
                              onChange={(e) => updateSectionItem(section.id, index, 'company', e.target.value)}
                              placeholder="Company Name"
                              className="text-sm flex-1 bg-transparent border-b border-orange-100 focus:outline-none focus:border-orange-400 pb-1 transition-all"
                            />
                            <input
                              type="text"
                              value={exp.period}
                              onChange={(e) => updateSectionItem(section.id, index, 'period', e.target.value)}
                              placeholder="Jan 2020 - Present"
                              className="text-sm w-40 bg-transparent border-b border-orange-100 focus:outline-none focus:border-orange-400 pb-1 text-gray-600 transition-all"
                            />
                          </div>
                        </div>
                        <button
                          onClick={() => removeSectionItem(section.id, index)}
                          className="ml-3 p-1.5 rounded-lg opacity-0 group-hover/item:opacity-100 bg-red-50 hover:bg-red-100 text-red-500 transition-all"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                      <div className="mt-2">
                        <label className="text-xs text-gray-500 mb-1 block">Responsibilities & Achievements</label>
                        <RichTextEditor
                          content={exp.description}
                          onChange={(html) => updateSectionItem(section.id, index, 'description', html)}
                          placeholder="Describe your responsibilities, achievements, technologies used..."
                          className="text-sm"
                        />
                      </div>
                    </div>
                  ) : (
                    <>
                      {selectedTemplate === 4 ? (
                        <div className="job-item">
                          <div className="flex justify-between items-baseline mb-0">
                            <div className="cv-subheading">{exp.position}</div>
                            <div className="cv-text-meta">{exp.period}</div>
                          </div>
                          <div className="cv-text-meta italic mb-1">{exp.company}</div>
                          <div className="cv-text-desc pl-5 border-l-2 border-gray-100" dangerouslySetInnerHTML={{ __html: exp.description }} />
                        </div>
                      ) : selectedTemplate === 5 ? (
                        <div className="mb-[10px]">
                          <div className="flex justify-between items-baseline">
                            <div className="cv-subheading">{exp.position}</div>
                            <div className="cv-text-meta italic">{exp.period}</div>
                          </div>
                          <div className="cv-text-meta mb-0">{exp.company}</div>
                          <ul className="cv-list">
                            <li className="cv-list-item" dangerouslySetInnerHTML={{ __html: exp.description }} />
                          </ul>
                        </div>
                      ) : (
                        <>
                          <div className="font-bold text-xs">{exp.position}</div>
                          <div className="text-xs">{exp.company}</div>
                          <div className="text-xs italic">{exp.period}</div>
                          <div className="text-xs" dangerouslySetInnerHTML={{ __html: exp.description }} />
                        </>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-purple-50 p-4 md:p-8" id="cv-editor-wrapper">
      <div className="max-w-4xl mx-auto">
        {/* Control Panel */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-100 p-6 mb-6 print:hidden print-hidden">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <h2 className="text-lg font-bold text-gray-800">Resume Editor</h2>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setEditMode(!editMode)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium shadow-lg transition-all transform hover:scale-105 ${
                  editMode 
                    ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white' 
                    : 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white'
                }`}
              >
                {editMode ? <Eye size={18} /> : <Edit2 size={18} />}
                {editMode ? 'Preview' : 'Edit'}
              </button>
              {!editMode && (
                <button
                  onClick={handlePrint}
                  className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-xl font-medium shadow-lg hover:from-emerald-600 hover:to-green-700 transition-all transform hover:scale-105"
                >
                  <Download size={18} />
                  Export PDF
                </button>
              )}
            </div>
          </div>

          {editMode && (
            <div className="border-t border-gray-100 pt-5 mt-5">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3 flex items-center gap-2">
                <Plus size={14} /> Add New Section
              </p>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => addNewSection('text')}
                  className="flex items-center gap-2 px-4 py-2 bg-purple-50 text-purple-700 text-sm rounded-xl font-medium hover:bg-purple-100 border border-purple-200 transition-all hover:shadow-md"
                >
                  <FileText size={16} /> Text
                </button>
                <button
                  onClick={() => addNewSection('skills')}
                  className="flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 text-sm rounded-xl font-medium hover:bg-indigo-100 border border-indigo-200 transition-all hover:shadow-md"
                >
                  <Sparkles size={16} /> Skills
                </button>
                <button
                  onClick={() => addNewSection('education')}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 text-sm rounded-xl font-medium hover:bg-blue-100 border border-blue-200 transition-all hover:shadow-md"
                >
                  <GraduationCap size={16} /> Education
                </button>
                <button
                  onClick={() => addNewSection('projects')}
                  className="flex items-center gap-2 px-4 py-2 bg-teal-50 text-teal-700 text-sm rounded-xl font-medium hover:bg-teal-100 border border-teal-200 transition-all hover:shadow-md"
                >
                  <Code size={16} /> Projects
                </button>
                <button
                  onClick={() => addNewSection('experience')}
                  className="flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-700 text-sm rounded-xl font-medium hover:bg-orange-100 border border-orange-200 transition-all hover:shadow-md"
                >
                  <Briefcase size={16} /> Experience
                </button>
              </div>
            </div>
          )}
        </div>

        {/* CV Document */}
        <div className={`${styles.pageBg} shadow-lg rounded-lg overflow-hidden`} id="cv-content">
          <style>{`
            @media print {
              @page {
                margin: 0.5in;
                size: letter;
              }
              
              html, body {
                margin: 0 !important;
                padding: 0 !important;
                height: auto !important;
                width: 100% !important;
                overflow: visible !important;
                background: white !important;
              }
              
              #cv-editor-wrapper {
                background: white !important;
                padding: 0 !important;
                margin: 0 !important;
                min-height: auto !important;
              }
              
              #cv-editor-wrapper > * {
                max-width: 100% !important;
                margin: 0 !important;
                padding: 0 !important;
              }
              
              #cv-content {
                position: static !important;
                display: block !important;
                width: 100% !important;
                max-width: 100% !important;
                margin: 0 !important;
                padding: 0 !important;
                box-shadow: none !important;
                border-radius: 0 !important;
                background: white !important;
                overflow: visible !important;
              }
              
              .cv-page {
                width: 100% !important;
                min-height: auto !important;
                max-width: 100% !important;
                padding: 0 !important;
                margin: 0 !important;
                box-sizing: border-box !important;
                page-break-after: auto !important;
                page-break-inside: avoid !important;
                break-inside: avoid !important;
              }
              
              .print\\:hidden,
              .print-hidden {
                display: none !important;
              }
            }
            
            .cv-page {
              width: 8.5in;
              min-height: 11in;
              margin: 0 auto;
              font-family: Arial, sans-serif;
              font-size: 11px;
              line-height: 1.4;
              color: #333;
              box-sizing: border-box;
            }
            
            /* Tablet responsiveness */
            @media screen and (max-width: 1024px) {
              .cv-page {
                width: 100%;
                max-width: 800px;
                padding: 20px;
              }
            }
            
            /* Mobile responsiveness */
            @media screen and (max-width: 768px) {
              .cv-page {
                width: 100%;
                min-height: auto;
                padding: 16px;
                font-size: 12px;
              }
              
              #cv-content {
                border-radius: 0;
                margin: 0;
              }
              
              .cv-header-name {
                font-size: 20px !important;
              }
              
              .cv-section-title {
                font-size: 14px !important;
              }
            }
            
            /* Small mobile devices */
            @media screen and (max-width: 480px) {
              .cv-page {
                padding: 12px;
                font-size: 11px;
              }
              
              .cv-header-name {
                font-size: 18px !important;
              }
              
              .cv-section-title {
                font-size: 13px !important;
              }
              
              /* Stack flex layouts */
              .flex.justify-between {
                flex-direction: column;
                align-items: flex-start !important;
              }
            }
            }
          `}</style>

          <div className="cv-page">

            {/* Header with template styling */}
            <div className={`${styles.headerBg} p-6 mb-4 rounded-t-lg`}>
              {editMode ? (
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5 border border-blue-100">
                  <div className="flex items-center gap-2 mb-4">
                    <User size={20} className="text-blue-500" />
                    <span className="font-semibold text-gray-700">Personal Information</span>
                  </div>
                  <div className="mb-4">
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Full Name</label>
                    <RichTextEditor
                      content={cv.name}
                      onChange={(html) => updateField('name', html)}
                      placeholder="YOUR FULL NAME"
                      className="text-2xl font-bold"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Professional Title</label>
                    <RichTextEditor
                      content={cv.title}
                      onChange={(html) => updateField('title', html)}
                      placeholder="Your Job Title"
                      className="text-base"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">📍 Location</label>
                      <input
                        type="text"
                        value={cv.contact.location}
                        onChange={(e) => updateField('contact.location', e.target.value)}
                        className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="City, State/Country"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">✉️ Email</label>
                      <input
                        type="email"
                        value={cv.contact.email}
                        onChange={(e) => updateField('contact.email', e.target.value)}
                        className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">🌐 Portfolio</label>
                      <input
                        type="url"
                        value={cv.contact.portfolio}
                        onChange={(e) => updateField('contact.portfolio', e.target.value)}
                        className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="https://yourportfolio.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">💼 LinkedIn</label>
                      <input
                        type="url"
                        value={cv.contact.linkedin}
                        onChange={(e) => updateField('contact.linkedin', e.target.value)}
                        className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="https://linkedin.com/in/yourprofile"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">🐙 GitHub</label>
                      <input
                        type="url"
                        value={cv.contact.github}
                        onChange={(e) => updateField('contact.github', e.target.value)}
                        className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="https://github.com/yourusername"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  {selectedTemplate === 4 ? (
                    <div className="mb-2">
                      <h1 className="cv-header-name" dangerouslySetInnerHTML={{ __html: cv.name }} />
                      <div className="cv-header-contact mb-[16px]">
                        {cv.contact.location} <span className="mx-1">|</span>
                        <a href={`mailto:${cv.contact.email}`} className="cv-link">{cv.contact.email}</a> <span className="mx-1">|</span>
                        {cv.contact.portfolio && <><a href={cv.contact.portfolio} className="cv-link">Portfolio</a> <span className="mx-1">|</span></>}
                        {cv.contact.linkedin && <><a href={cv.contact.linkedin} className="cv-link">LinkedIn</a> <span className="mx-1">|</span></>}
                        {cv.contact.github && <><a href={cv.contact.github} className="cv-link">GitHub</a></>}
                      </div>
                    </div>
                  ) : selectedTemplate === 5 ? (
                    <div className="mb-[18px] text-center">
                      <h1 className="cv-header-name text-[24px] text-black" dangerouslySetInnerHTML={{ __html: cv.name }} />
                      <div className="cv-header-contact">
                        {cv.contact.location && <>{cv.contact.location} | </>}
                        <a href={`mailto:${cv.contact.email}`} className="cv-link underline">{cv.contact.email}</a>
                        {cv.contact.portfolio && <> | <a href={cv.contact.portfolio} className="cv-link underline">Portfolio</a></>}
                        {cv.contact.linkedin && <> | <a href={cv.contact.linkedin} className="cv-link underline">LinkedIn</a></>}
                        {cv.contact.github && <> | <a href={cv.contact.github} className="cv-link underline">GitHub</a></>}
                      </div>
                    </div>
                  ) : (
                    <>
                      <h1 className={`text-2xl font-bold ${styles.headerText} mb-1`} dangerouslySetInnerHTML={{ __html: cv.name }} />
                      <div className={`text-base ${styles.headerText} opacity-90 mb-2`} dangerouslySetInnerHTML={{ __html: cv.title }} />
                      <div className={`text-xs ${styles.headerText} opacity-80`}>
                        {cv.contact.location} | {cv.contact.email} | <a href={cv.contact.portfolio} className="underline">{cv.contact.portfolio}</a> | <a href={cv.contact.linkedin} className="underline">LinkedIn</a> | <a href={cv.contact.github} className="underline">GitHub</a>
                      </div>
                    </>
                  )}

                </>
              )}
            </div>

            {/* Dynamic Sections */}
            <div className="p-6">
              {cv.sections.map((section, index) => (
                <div
                  key={section.id}
                  className={`transition-opacity duration-200 ${draggedSectionIndex === index ? 'opacity-50 bg-gray-50' : ''}`}
                  draggable={editMode}
                  onDragStart={(e) => handleDragStart(e, index)}
                  onDragOver={(e) => handleDragOver(e, index)}
                  onDragEnd={handleDragEnd}
                >
                  <div className="relative group">
                    {/* Drag Handle visible only in edit mode and on hover/always if desired */}
                    {editMode && (
                      <div className="absolute left-[-20px] top-[10px] cursor-grab text-gray-400 hover:text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity" title="Drag to reorder">
                        <GripVertical size={16} />
                      </div>
                    )}
                    {renderSection(section)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div >
    </div >
  );
};

export default DynamicCVMaker;