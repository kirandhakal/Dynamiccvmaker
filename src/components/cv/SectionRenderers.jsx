import React from 'react';
import {
  ChevronUp, ChevronDown, Plus, Trash2,
  FileText, Sparkles, GraduationCap, Code, Briefcase,
} from 'lucide-react';
import RichTextEditor from '../RichTextEditor';

/**
 * Renders a single CV section by type. ctx: { editMode, templateStyleId, updateSection,
 * updateSectionItem, addSectionItem, removeSectionItem, removeSection, moveSection }
 */
export function renderSection(section, ctx) {
  const {
    editMode,
    templateStyleId,
    updateSection,
    updateSectionItem,
    addSectionItem,
    removeSectionItem,
    removeSection,
    moveSection,
  } = ctx;

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
                <button onClick={() => addSectionItem(section.id, { category: 'New Category', items: 'Skill 1, Skill 2' })} className="p-1.5 rounded-lg bg-green-50 hover:bg-green-100 text-green-600 transition-all">
                  <Plus size={16} />
                </button>
                <button onClick={() => removeSection(section.id)} className="p-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-500 transition-all">
                  <Trash2 size={16} />
                </button>
              </div>
            )}
          </div>
          <div className={templateStyleId === 4 ? 'flex flex-col gap-2 pl-5' : 'grid grid-cols-1 md:grid-cols-2 gap-3'}>
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
                      <button onClick={() => removeSectionItem(section.id, index)} className="ml-2 p-1 rounded-lg opacity-0 group-hover/item:opacity-100 bg-red-50 hover:bg-red-100 text-red-500 transition-all">
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
                    {[4, 6, 7, 10, 11, 12].includes(templateStyleId) ? (
                      <div><strong className="inline-block min-w-[100px]">{skill.category}</strong> <span dangerouslySetInnerHTML={{ __html: skill.items }} /></div>
                    ) : [5, 8, 9].includes(templateStyleId) ? (
                      <div className={templateStyleId === 8 ? 'text-center' : ''}><strong className="cv-subheading inline-block min-w-[85px]">{skill.category}:</strong> <span dangerouslySetInnerHTML={{ __html: skill.items }} /></div>
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
                <button onClick={() => addSectionItem(section.id, { degree: 'Degree', institution: 'Institution', period: 'Period', description: '' })} className="p-1.5 rounded-lg bg-green-50 hover:bg-green-100 text-green-600 transition-all">
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
                        <input type="text" value={edu.degree} onChange={(e) => updateSectionItem(section.id, index, 'degree', e.target.value)} placeholder="Degree / Certificate" className="font-semibold text-sm w-full bg-transparent border-b-2 border-blue-200 focus:outline-none focus:border-blue-500 pb-1 transition-all" />
                        <input type="text" value={edu.institution} onChange={(e) => updateSectionItem(section.id, index, 'institution', e.target.value)} placeholder="Institution" className="text-sm w-full bg-transparent border-b border-blue-100 focus:outline-none focus:border-blue-400 pb-1 transition-all" />
                        <input type="text" value={edu.period} onChange={(e) => updateSectionItem(section.id, index, 'period', e.target.value)} placeholder="Period" className="text-sm text-gray-600 w-full bg-transparent border-b border-blue-100 focus:outline-none focus:border-blue-400 pb-1 transition-all" />
                      </div>
                      <button onClick={() => removeSectionItem(section.id, index)} className="ml-3 p-1.5 rounded-lg opacity-0 group-hover/item:opacity-100 bg-red-50 hover:bg-red-100 text-red-500 transition-all">
                        <Trash2 size={14} />
                      </button>
                    </div>
                    <div className="mt-2">
                      <label className="text-xs text-gray-500 mb-1 block">Additional Details (optional)</label>
                      <RichTextEditor content={edu.description || ''} onChange={(html) => updateSectionItem(section.id, index, 'description', html)} placeholder="GPA, honors..." className="text-sm" />
                    </div>
                  </div>
                ) : (
                  <>
                    {[4, 6, 7, 10, 11, 12].includes(templateStyleId) ? (
                      <div className="education-item flex justify-between items-baseline mb-1">
                        <div>
                          <strong className="cv-subheading">{edu.degree},</strong> <span className="cv-subheading font-normal">{edu.institution}</span>
                          {edu.description && <div className="text-xs text-gray-600 mt-1" dangerouslySetInnerHTML={{ __html: edu.description }} />}
                        </div>
                        <div className="cv-text-meta">{edu.period}</div>
                      </div>
                    ) : [5, 8, 9].includes(templateStyleId) ? (
                      <div className={`mb-1 ${templateStyleId === 8 ? 'text-center' : ''}`}>
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
                <input type="text" value={section.title} onChange={(e) => updateSection(section.id, 'title', e.target.value)} placeholder="SECTION TITLE" className="cv-section-title focus:outline-none bg-transparent flex-1 border-b-2 border-transparent hover:border-teal-200 focus:border-teal-500 transition-all px-2 py-1" />
              </div>
            ) : (
              <h2 className="cv-section-title">{section.title}</h2>
            )}
            {editMode && (
              <div className="flex gap-1 ml-2 opacity-0 group-hover/section:opacity-100 transition-opacity">
                <button onClick={() => moveSection(section.id, 'up')} className="p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 transition-all"><ChevronUp size={16} /></button>
                <button onClick={() => moveSection(section.id, 'down')} className="p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 transition-all"><ChevronDown size={16} /></button>
                <button onClick={() => addSectionItem(section.id, { name: 'Project', link: 'https://...', description: 'Description...' })} className="p-1.5 rounded-lg bg-green-50 hover:bg-green-100 text-green-600 transition-all"><Plus size={16} /></button>
                <button onClick={() => removeSection(section.id)} className="p-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-500 transition-all"><Trash2 size={16} /></button>
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
                        <input type="text" value={project.name} onChange={(e) => updateSectionItem(section.id, index, 'name', e.target.value)} placeholder="Project Name" className="font-semibold text-sm w-full bg-transparent border-b-2 border-teal-200 focus:outline-none focus:border-teal-500 pb-1 transition-all" />
                        <input type="url" value={project.link} onChange={(e) => updateSectionItem(section.id, index, 'link', e.target.value)} placeholder="https://..." className="text-sm w-full bg-transparent border-b border-teal-100 focus:outline-none focus:border-teal-400 pb-1 text-teal-600 transition-all" />
                      </div>
                      <button onClick={() => removeSectionItem(section.id, index)} className="ml-3 p-1.5 rounded-lg opacity-0 group-hover/item:opacity-100 bg-red-50 hover:bg-red-100 text-red-500 transition-all"><Trash2 size={14} /></button>
                    </div>
                    <div className="mt-2">
                      <label className="text-xs text-gray-500 mb-1 block">Description</label>
                      <RichTextEditor content={project.description} onChange={(html) => updateSectionItem(section.id, index, 'description', html)} placeholder="Describe..." className="text-sm" />
                    </div>
                  </div>
                ) : (
                  <>
                    {[4, 6, 7, 10, 11, 12].includes(templateStyleId) ? (
                      <div className="project-item">
                        <div className="flex justify-between items-baseline mb-1">
                          <div className="cv-subheading">{project.name}</div>
                          <a href={project.link} className="cv-link">View Project</a>
                        </div>
                        <div className="cv-text-desc pl-5 border-l-2 border-gray-100" dangerouslySetInnerHTML={{ __html: project.description }} />
                      </div>
                    ) : [5, 8, 9].includes(templateStyleId) ? (
                      <div className={`mb-4 ${templateStyleId === 8 ? 'text-center' : ''}`}>
                        <div className="flex justify-between items-baseline">
                          <div className="cv-subheading">{project.name}</div>
                          <div><a href={project.link} className="cv-link underline">Link</a></div>
                        </div>
                        <div className="cv-text-desc mt-1" dangerouslySetInnerHTML={{ __html: project.description }} />
                      </div>
                    ) : (
                      <>
                        <div className="font-bold text-xs">{project.name} <a href={project.link} className="cv-link underline">View</a></div>
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
                <input type="text" value={section.title} onChange={(e) => updateSection(section.id, 'title', e.target.value)} placeholder="SECTION TITLE" className="cv-section-title focus:outline-none bg-transparent flex-1 border-b-2 border-transparent hover:border-orange-200 focus:border-orange-500 transition-all px-2 py-1" />
              </div>
            ) : (
              <h2 className="cv-section-title">{section.title}</h2>
            )}
            {editMode && (
              <div className="flex gap-1 ml-2 opacity-0 group-hover/section:opacity-100 transition-opacity">
                <button onClick={() => moveSection(section.id, 'up')} className="p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 transition-all"><ChevronUp size={16} /></button>
                <button onClick={() => moveSection(section.id, 'down')} className="p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 transition-all"><ChevronDown size={16} /></button>
                <button onClick={() => addSectionItem(section.id, { position: 'Position', company: 'Company', period: 'Period', description: 'Description...' })} className="p-1.5 rounded-lg bg-green-50 hover:bg-green-100 text-green-600 transition-all"><Plus size={16} /></button>
                <button onClick={() => removeSection(section.id)} className="p-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-500 transition-all"><Trash2 size={16} /></button>
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
                        <input type="text" value={exp.position} onChange={(e) => updateSectionItem(section.id, index, 'position', e.target.value)} placeholder="Job Title" className="font-semibold text-sm w-full bg-transparent border-b-2 border-orange-200 focus:outline-none focus:border-orange-500 pb-1 transition-all" />
                        <div className="flex gap-3">
                          <input type="text" value={exp.company} onChange={(e) => updateSectionItem(section.id, index, 'company', e.target.value)} placeholder="Company" className="text-sm flex-1 bg-transparent border-b border-orange-100 focus:outline-none focus:border-orange-400 pb-1 transition-all" />
                          <input type="text" value={exp.period} onChange={(e) => updateSectionItem(section.id, index, 'period', e.target.value)} placeholder="Dates" className="text-sm w-40 bg-transparent border-b border-orange-100 focus:outline-none focus:border-orange-400 pb-1 text-gray-600 transition-all" />
                        </div>
                      </div>
                      <button onClick={() => removeSectionItem(section.id, index)} className="ml-3 p-1.5 rounded-lg opacity-0 group-hover/item:opacity-100 bg-red-50 hover:bg-red-100 text-red-500 transition-all"><Trash2 size={14} /></button>
                    </div>
                    <div className="mt-2">
                      <label className="text-xs text-gray-500 mb-1 block">Responsibilities & Achievements</label>
                      <RichTextEditor content={exp.description} onChange={(html) => updateSectionItem(section.id, index, 'description', html)} placeholder="Describe..." className="text-sm" />
                    </div>
                  </div>
                ) : (
                  <>
                    {[4, 6, 7, 10, 11, 12].includes(templateStyleId) ? (
                      <div className="job-item">
                        <div className="flex justify-between items-baseline mb-0">
                          <div className="cv-subheading">{exp.position}</div>
                          <div className="cv-text-meta">{exp.period}</div>
                        </div>
                        <div className="cv-text-meta italic mb-1">{exp.company}</div>
                        <div className="cv-text-desc pl-5 border-l-2 border-gray-100" dangerouslySetInnerHTML={{ __html: exp.description }} />
                      </div>
                    ) : [5, 8, 9].includes(templateStyleId) ? (
                      <div className={`mb-4 ${templateStyleId === 8 ? 'text-center' : ''}`}>
                        <div className="flex justify-between items-baseline">
                          <div className="cv-subheading">{exp.position}</div>
                          <div className="cv-text-meta italic">{exp.period}</div>
                        </div>
                        <div className="cv-text-meta mb-1 font-semibold">{exp.company}</div>
                        <div className="cv-text-desc" dangerouslySetInnerHTML={{ __html: exp.description }} />
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
}
