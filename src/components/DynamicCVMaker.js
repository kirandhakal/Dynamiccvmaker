import React, { useState } from 'react';
import {
  Download, GripVertical, Plus, Trash2, User
} from 'lucide-react';
import RichTextEditor from './RichTextEditor';
import { getTemplateStyle } from '../config/templateStyles';
import { renderSection } from './cv/SectionRenderers';
import { professions } from '../data/professions';

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
    { id: 5, title: 'PROJECTS', type: 'projects', items: [{ name: 'Project', link: '', linkLabel: '', linkEnabled: false, description: '' }] },
  ],
};

const detailTypeOptions = [
  ['text', 'Text'], ['email', 'Email'], ['link', 'Link'], ['address', 'Address'],
];

const createHeaderDetails = (cv) => {
  if (Array.isArray(cv.headerDetails)) return cv.headerDetails;
  const contact = cv.contact || {};
  const linkDetails = [
    ['portfolio', 'Portfolio'], ['linkedin', 'LinkedIn'], ['github', 'GitHub'],
  ].filter(([key]) => contact[key]).map(([key, label]) => ({ id: `header-${key}`, type: 'link', label, value: contact[key] }));
  return [
    cv.title && { id: 'header-title', type: 'text', label: 'Professional title', value: cv.title },
    contact.location && { id: 'header-location', type: 'address', label: 'Address', value: contact.location },
    contact.email && { id: 'header-email', type: 'email', label: 'Email', value: contact.email },
    ...linkDetails,
  ].filter(Boolean);
};

const renderHeaderDetailPreview = (detail) => {
  if (!detail.value) return null;
  if (detail.type === 'email') return <a href={`mailto:${detail.value}`} className="cv-link">{detail.value}</a>;
  if (detail.type === 'link') return <a href={detail.value} className="cv-link">{detail.label || detail.value}</a>;
  return <span>{detail.value}</span>;
};

const HeaderPreview = ({ cv, styles, templateId }) => {
  const centered = templateId === 5 || templateId === 8;
  const nameClass = templateId === 8 || templateId === 9
    ? `text-3xl font-serif font-bold uppercase ${styles.headerText}`
    : `cv-header-name text-2xl font-bold ${styles.headerText}`;
  const details = (cv.headerDetails || createHeaderDetails(cv)).filter((detail) => detail.value);
  return (
    <div className={`${centered ? 'text-center' : ''} mb-2`}>
      <h1 className={nameClass} dangerouslySetInnerHTML={{ __html: cv.name }} />
      {details.length > 0 && (
        <div className={`mt-2 text-xs ${styles.headerText} opacity-80`}>
          {details.map((detail, index) => (
            <React.Fragment key={detail.id}>
              {index > 0 && <span className="mx-1">|</span>}
              {renderHeaderDetailPreview(detail)}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

const DynamicCVMaker = ({ professionId = 'it-technology', templateStyleId = 1, initialCv }) => {
  // The form and preview are shown together, so editing is always available.
  const editMode = true;
  const storageKey = professionId ? `cv_data_${professionId}` : 'cv_data';
  const templateKey = professionId ? `cv_template_${professionId}` : 'cv_template';

  const [currentTemplateId] = useState(() => {
    const saved = localStorage.getItem(templateKey);
    return saved ? parseInt(saved) : templateStyleId;
  });

  const [showExportOptions, setShowExportOptions] = useState(false);

  // Find the default CV for the selected profession
  const profession = professions.find((p) => p.id === professionId);
  const defaultCv = profession ? profession.defaultCv : DEFAULT_CV;

  const [cv, setCv] = useState(() => {
    const saved = localStorage.getItem(storageKey);
    const source = saved ? JSON.parse(saved) : initialCv ? JSON.parse(JSON.stringify(initialCv)) : JSON.parse(JSON.stringify(defaultCv));
    return { ...source, headerDetails: createHeaderDetails(source) };
  });

  const [draggedSectionIndex, setDraggedSectionIndex] = useState(null);
  const [draggedHeaderIndex, setDraggedHeaderIndex] = useState(null);

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

  const updateHeaderDetail = (id, field, value) => {
    setCv(prev => ({
      ...prev,
      headerDetails: prev.headerDetails.map(detail => detail.id === id ? { ...detail, [field]: value } : detail),
    }));
  };

  const addHeaderDetail = (type = 'text') => {
    const defaults = {
      text: { label: 'Detail', value: '' },
      address: { label: 'Address', value: '' },
      email: { label: 'Email', value: '' },
      link: { label: 'Website', value: '' },
    };
    setCv(prev => ({
      ...prev,
      headerDetails: [...prev.headerDetails, { id: `header-${Date.now()}`, type, ...defaults[type] }],
    }));
  };

  const removeHeaderDetail = (id) => {
    setCv(prev => ({ ...prev, headerDetails: prev.headerDetails.filter(detail => detail.id !== id) }));
  };

  const handleHeaderDragStart = (index) => setDraggedHeaderIndex(index);
  const handleHeaderDragOver = (event, index) => {
    event.preventDefault();
    if (draggedHeaderIndex === null || draggedHeaderIndex === index) return;
    setCv(prev => {
      const headerDetails = [...prev.headerDetails];
      const [dragged] = headerDetails.splice(draggedHeaderIndex, 1);
      headerDetails.splice(index, 0, dragged);
      return { ...prev, headerDetails };
    });
    setDraggedHeaderIndex(index);
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
        items: [{ name: "Project Name", link: "", linkLabel: "", linkEnabled: false, description: "Description..." }]
      },
      links: {
        id: Date.now(),
        title: 'LINKS',
        type: 'links',
        items: [{ label: 'Portfolio', url: 'https://example.com' }]
      },
      list: {
        id: Date.now(),
        title: 'ADDITIONAL INFORMATION',
        type: 'list',
        items: [{ text: 'Add a relevant achievement, certification, or language.' }]
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

  const handleNewSectionDragStart = (event, type) => {
    event.dataTransfer.setData('application/x-cv-section', type);
    event.dataTransfer.effectAllowed = 'copy';
  };

  const handleNewSectionDrop = (event) => {
    event.preventDefault();
    const type = event.dataTransfer.getData('application/x-cv-section');
    if (type) addNewSection(type);
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

  const downloadFile = (content, filename, type) => {
    const url = URL.createObjectURL(new Blob([content], { type }));
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  };

  const stripHtml = (value = '') => {
    const element = document.createElement('div');
    element.innerHTML = value;
    return element.textContent || element.innerText || '';
  };

  const handleExport = (format) => {
    setShowExportOptions(false);
    if (format === 'pdf') {
      handlePrint();
      return;
    }

    const filename = `${stripHtml(cv.name).trim().replace(/\s+/g, '-') || 'cv'}`;
    if (format === 'doc') {
      const preview = document.getElementById('cv-content');
      downloadFile(`<!doctype html><html><head><meta charset="utf-8"><title>CV</title></head><body>${preview?.innerHTML || ''}</body></html>`, `${filename}.doc`, 'application/msword');
      return;
    }

    const contact = Object.values(cv.contact).filter(Boolean).join(' | ');
    const sections = cv.sections.map((section) => {
      const items = section.items?.map((item) => Object.values(item).filter(Boolean).map(stripHtml).join(' — ')).join('\n') || stripHtml(section.content);
      return `## ${section.title}\n\n${items}`;
    }).join('\n\n');
    downloadFile(`# ${stripHtml(cv.name)}\n\n${stripHtml(cv.title)}\n\n${contact}\n\n${sections}\n`, `${filename}.md`, 'text/markdown');
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

  const exportMenu = (
    <div className="relative">
      <button
        type="button"
        onClick={() => setShowExportOptions((open) => !open)}
        className="flex min-h-9 items-center gap-2 rounded-lg bg-slate-800 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-700"
        aria-expanded={showExportOptions}
      >
        <Download size={16} />
        Export
      </button>
      {showExportOptions && (
        <div className="absolute right-0 z-20 mt-2 w-36 rounded-xl border border-slate-200 bg-white p-1 shadow-lg">
          <button type="button" onClick={() => handleExport('pdf')} className="w-full rounded-lg px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-100">PDF</button>
          <button type="button" onClick={() => handleExport('doc')} className="w-full rounded-lg px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-100">Word (.doc)</button>
          <button type="button" onClick={() => handleExport('md')} className="w-full rounded-lg px-3 py-2 text-left text-sm text-slate-700 hover:bg-slate-100">Markdown (.md)</button>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-purple-50 p-4 md:p-8" id="cv-editor-wrapper">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        {/* Editable form */}
        <section
          className="cv-form min-w-0 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
          onDragOver={(event) => event.preventDefault()}
          onDrop={handleNewSectionDrop}
        >
          <div className="border-b border-slate-200 px-5 py-3">
            <h3 className="text-sm font-semibold text-slate-800">Edit your CV</h3>
            <p className="mt-1 text-xs text-slate-500">Click to add, or drag a section into this panel.</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                ['text', 'Text'], ['skills', 'Skills'], ['education', 'Education'], ['projects', 'Project'],
                ['experience', 'Experience'],
              ].map(([type, label]) => (
                <button
                  key={type}
                  type="button"
                  draggable
                  onDragStart={(event) => handleNewSectionDragStart(event, type)}
                  onClick={() => addNewSection(type)}
                  className="cursor-grab rounded-lg border border-slate-200 px-2.5 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50 active:cursor-grabbing"
                >
                  Add {label}
                </button>
              ))}
            </div>
          </div>
        <div className={`${styles.pageBg} overflow-hidden`}>
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

            .cv-form .cv-page,
            #cv-content .cv-page {
              width: 100%;
              min-height: auto;
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
                  <div className="mb-2 flex items-center justify-between">
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide">Second-line details</label>
                    <div className="flex gap-1">
                      {detailTypeOptions.map(([type, label]) => (
                        <button key={type} type="button" onClick={() => addHeaderDetail(type)} className="rounded border border-blue-200 px-2 py-1 text-xs text-blue-700 hover:bg-blue-100">
                          <Plus size={12} className="mr-1 inline" />{label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <p className="mb-3 text-xs text-gray-500">Drag details to change their order. They are shown together beneath your name.</p>
                  <div className="space-y-2">
                    {cv.headerDetails.map((detail, index) => (
                      <div key={detail.id} draggable onDragStart={() => handleHeaderDragStart(index)} onDragOver={(event) => handleHeaderDragOver(event, index)} onDragEnd={() => setDraggedHeaderIndex(null)} className={`grid grid-cols-[auto_110px_1fr_auto] items-center gap-2 rounded-lg border bg-white p-2 ${draggedHeaderIndex === index ? 'opacity-50' : 'border-gray-200'}`}>
                        <GripVertical size={16} className="cursor-grab text-gray-400" />
                        <select value={detail.type} onChange={(event) => updateHeaderDetail(detail.id, 'type', event.target.value)} className="rounded border border-gray-200 px-2 py-1.5 text-xs">
                          {detailTypeOptions.map(([type, label]) => <option key={type} value={type}>{label}</option>)}
                        </select>
                        <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
                          <input value={detail.label || ''} onChange={(event) => updateHeaderDetail(detail.id, 'label', event.target.value)} placeholder="Label (e.g. Lecturer)" className="rounded border border-gray-200 px-2 py-1.5 text-sm" />
                          <input type={detail.type === 'email' ? 'email' : detail.type === 'link' ? 'url' : 'text'} value={detail.value || ''} onChange={(event) => updateHeaderDetail(detail.id, 'value', event.target.value)} placeholder={detail.type === 'link' ? 'https://example.com' : 'Value'} className="rounded border border-gray-200 px-2 py-1.5 text-sm" />
                        </div>
                        <button type="button" onClick={() => removeHeaderDetail(detail.id)} className="rounded p-1.5 text-red-500 hover:bg-red-50" aria-label={`Remove ${detail.label || 'detail'}`}><Trash2 size={16} /></button>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <HeaderPreview cv={cv} styles={styles} templateId={currentTemplateId} />
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
        </section>

        {/* Live ATS preview */}
        <aside className="min-w-0 rounded-xl border border-slate-200 bg-slate-50 shadow-sm">
          <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-white px-5 py-3">
            <h3 className="text-sm font-semibold text-slate-800">Live preview</h3>
            {exportMenu}
          </div>
          <div className="p-4 sm:p-6">
            <div className={`${styles.pageBg} overflow-hidden bg-white shadow-sm`} id="cv-content">
              <div className="cv-page">
                <div className={`${styles.headerBg} mb-4 p-6`}>
                  <HeaderPreview cv={cv} styles={styles} templateId={currentTemplateId} />
                </div>
                <div className="p-6">
                  {cv.sections.map((section) => renderSection(section, { ...sectionCtx, editMode: false }))}
                </div>
              </div>
            </div>
          </div>
        </aside>
        </div>
      </div >
    </div >
  );
};

export default DynamicCVMaker;
