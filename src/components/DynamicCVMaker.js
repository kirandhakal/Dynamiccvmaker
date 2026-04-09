import React, { useState } from 'react';
import {
  Edit2, Plus, Download, Eye, GripVertical,
  Sparkles, FileText, Briefcase, GraduationCap, Code, User
} from 'lucide-react';
import RichTextEditor from './RichTextEditor';
import { getTemplateStyle } from '../config/templateStyles';
import { renderSection } from './cv/SectionRenderers';
import { SelectTemplate } from './SelectTemplate';

const DEFAULT_CV = {
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
    { id: 1, title: 'PROFESSIONAL SUMMARY', type: 'text', content: 'Add your summary here.' },
    { id: 2, title: 'TECHNICAL SKILLS', type: 'skills', items: [{ category: 'Category', items: 'Skill 1, Skill 2' }] },
    { id: 3, title: 'WORK EXPERIENCE', type: 'experience', items: [{ position: 'Job Title', company: 'Company', period: 'Dates', description: '' }] },
    { id: 4, title: 'EDUCATION', type: 'education', items: [{ degree: 'Degree', institution: 'School', period: 'Dates' }] },
    { id: 5, title: 'PROJECTS', type: 'projects', items: [{ name: 'Project', link: 'https://...', description: '' }] },
  ],
};

const DynamicCVMaker = ({ professionId = 'it', templateStyleId = 1, initialCv }) => {
  const [editMode, setEditMode] = useState(true);
  const storageKey = professionId ? `cv_data_${professionId}` : 'cv_data';
  const templateKey = professionId ? `cv_template_${professionId}` : 'cv_template';

  const [currentTemplateId, setCurrentTemplateId] = useState(() => {
    const saved = localStorage.getItem(templateKey);
    return saved ? parseInt(saved) : templateStyleId;
  });

  const [showTemplateSelector, setShowTemplateSelector] = useState(false);

  const [cv, setCv] = useState(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) return JSON.parse(saved);
    return initialCv ? JSON.parse(JSON.stringify(initialCv)) : DEFAULT_CV;
  });

  const [draggedSectionIndex, setDraggedSectionIndex] = useState(null);

  React.useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(cv));
  }, [cv, storageKey]);

  React.useEffect(() => {
    localStorage.setItem(templateKey, currentTemplateId.toString());
  }, [currentTemplateId, templateKey]);

  const styles = getTemplateStyle(currentTemplateId);


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

  const sectionCtx = {
    editMode,
    templateStyleId: currentTemplateId,
    updateSection,
    updateSectionItem,
    addSectionItem,
    removeSectionItem,
    removeSection,
    moveSection,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-purple-50 p-4 md:p-8" id="cv-editor-wrapper">
      <div className="max-w-4xl mx-auto">
        {/* Control Panel */}
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-smborder border-gray-100 p-6 mb-6 print:hidden print-hidden">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <h2 className="text-lg font-bold text-gray-800">Resume Editor</h2>
            </div>

            <div className="flex gap-3">
              {editMode && (
                <button
                  onClick={() => setShowTemplateSelector(!showTemplateSelector)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium shadow-lg transition-all transform hover:scale-105 ${showTemplateSelector
                    ? 'bg-gradient-to-r from-teal-500 to-cyan-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-200'
                    }`}
                >
                  <Sparkles size={18} />
                  {showTemplateSelector ? 'Close Templates' : 'Change Template'}
                </button>
              )}
              <button
                onClick={() => setEditMode(!editMode)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium shadow-lg transition-all transform hover:scale-105 ${editMode
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

          {showTemplateSelector && editMode && (
            <div className="mt-6 animate-in fade-in slide-in-from-top-4 duration-300">
              <SelectTemplate
                selectedTemplate={currentTemplateId}
                onSelectTemplate={(id) => {
                  setCurrentTemplateId(id);
                  // setShowTemplateSelector(false);
                }}
              />
            </div>
          )}

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
                  {currentTemplateId === 4 ? (
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
                  ) : currentTemplateId === 5 ? (
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
                  ) : currentTemplateId === 8 || currentTemplateId === 9 ? (
                    <div className={`${currentTemplateId === 8 ? 'text-center' : ''} mb-6`}>
                      <h1 className={`text-3xl font-serif font-bold uppercase ${styles.headerText}`} dangerouslySetInnerHTML={{ __html: cv.name }} />
                      <div className="mt-2 text-sm italic opacity-80">
                        {cv.contact.location} | {cv.contact.email} | {cv.contact.linkedin && <><a href={cv.contact.linkedin} className="underline">LinkedIn</a> | </>} {cv.contact.github && <a href={cv.contact.github} className="underline">GitHub</a>}
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
                    {renderSection(section, sectionCtx)}
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
