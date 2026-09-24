import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { X, ArrowLeft, Search } from 'lucide-react';
import DynamicCVMaker from '../DynamicCVMaker';
import { professions } from '../../data/professions';
import Seo from '../Seo';

export default function EditorPage() {
  const { professionId } = useParams();
  const navigate = useNavigate();

  const profession = professions.find(p => p.id === professionId);
  const [selectedRole, setSelectedRole] = useState(null);
  const [editorMode, setEditorMode] = useState(false);
  const [roleQuery, setRoleQuery] = useState('');

  useEffect(() => {
    setRoleQuery('');
    setSelectedRole(null);
    setEditorMode(false);
  }, [professionId]);

  useEffect(() => {
    if (!profession) {
      navigate('/');
    }
  }, [profession, navigate]);

  // If no roles defined, go directly to editor
  useEffect(() => {
    if (profession && (!profession.roles || profession.roles.length === 0)) {
      setEditorMode(true);
    }
  }, [profession]);

  const roles = profession?.roles;

  const filteredRoles = useMemo(() => {
    const list = roles || [];
    const q = roleQuery.trim().toLowerCase();
    if (!q) return list;
    return list.filter(
      (r) =>
        r.name.toLowerCase().includes(q) ||
        (r.description && r.description.toLowerCase().includes(q))
    );
  }, [roles, roleQuery]);

  if (!profession) return null;

  const hasRoles = profession.roles && profession.roles.length > 0;

  const handleRoleSelect = (role) => {
    // A role card is the action itself; take the user straight to its editor.
    localStorage.removeItem(`cv_data_${professionId}`);
    setSelectedRole(role);
    setEditorMode(true);
  };

  const handleChangeRole = () => {
    setEditorMode(false);
    setSelectedRole(null);
    localStorage.removeItem(`cv_data_${professionId}`);
  };

  // Role Selection Screen
  if (hasRoles && !editorMode) {
    return (
      <div className="fixed inset-0 z-[100] bg-gray-100 overflow-y-auto">
        <Seo title={`${profession.name} CV Templates | CV Maker`} description={`Choose a ${profession.name.toLowerCase()} role and build a tailored, ATS-friendly professional CV.`} keywords={`${profession.name} CV, ${profession.name} resume template, ATS resume, professional CV maker`} path={`/editor/${professionId}`} />
        {/* Header */}
        <div className="sticky top-0 z-[110] flex justify-between items-center px-6 py-4 bg-white border-b border-gray-200">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/')}
              className="flex min-h-10 items-center gap-2 rounded-xl px-3 py-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-800"
            >
              <ArrowLeft size={18} />
              <span className="text-sm font-medium hidden sm:inline">Back</span>
            </button>
            <div className="w-px h-8 bg-gray-300" />
            <div className="flex items-center gap-2">
              <div className="flex flex-col">
                <span className="font-bold text-gray-800 leading-none text-lg">{profession.name}</span>
                <span className="text-gray-500 text-xs font-bold uppercase tracking-wider">
                  Choose Your Role
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={() => navigate('/')}
            aria-label="Close role selection"
            className="flex h-10 w-10 items-center justify-center rounded-xl p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-800"
          >
            <X size={20} aria-hidden />
          </button>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-black mb-4">
              What's your <span className="text-indigo-600">role</span>?
            </h1>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Choose your specific role to get a tailored CV template with relevant skills, projects, and experience pre-filled.
            </p>
          </div>

          <div className="max-w-xl mx-auto mb-10">
            <label className="sr-only" htmlFor="role-search">
              Search role types
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center p-1.5 text-gray-400">
                <Search size={17} aria-hidden />
              </span>
              <input
                id="role-search"
                type="search"
                value={roleQuery}
                onChange={(e) => setRoleQuery(e.target.value)}
                placeholder="Search roles (e.g. nurse, developer, chef)…"
                className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-12 pr-4 text-gray-800 shadow-sm placeholder:text-gray-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <p className="text-center text-sm text-gray-500 mt-2">
              Showing {filteredRoles.length} of {profession.roles.length} role types
            </p>
          </div>

          {/* Role Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-12">
            {filteredRoles.map((role) => (
              <button
                key={role.id}
                onClick={() => handleRoleSelect(role)}
                className={`group relative text-left rounded-xl border p-5 transition-colors ${selectedRole?.id === role.id
                  ? 'border-indigo-500 bg-indigo-100 shadow-md scale-[1.02]'
                  : 'border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300'
                  }`}
              >
                {/* Selected indicator */}
                {selectedRole?.id === role.id && (
                  <div className="absolute top-3 right-3 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}

                <div>
                  {/* Icon and name */}
                  <div className="flex items-center gap-3">
                    <div className="flex shrink-0 items-center justify-center rounded-xl bg-slate-100 p-3 text-xl leading-none" aria-hidden>
                      {role.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">
                        {role.name}
                      </h3>
                      <p className="text-gray-500 text-sm">{role.description}</p>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {filteredRoles.length === 0 && (
            <p className="text-center text-gray-500 mb-8">
              No roles match your search. Try a different keyword.
            </p>
          )}

          {/* Selected role preview */}
          {/* {selectedRole && (
            <div className="mt-12 max-w-2xl mx-auto animate-fade-in">
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Preview — {selectedRole.name}</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-1.5 h-10 rounded-full bg-gradient-to-b ${selectedRole.color}`} />
                    <div>
                      <p className="text-white font-bold text-lg">{selectedRole.defaultCv.name}</p>
                      <p className="text-slate-400 text-sm">{selectedRole.defaultCv.title}</p>
                    </div>
                  </div>
                  {selectedRole.defaultCv.sections.map((section, idx) => (
                    <div key={idx} className="ml-5 pl-4 border-l border-white/5">
                      <p className="text-indigo-400 text-xs font-bold uppercase tracking-wider">{section.title}</p>
                      {section.type === 'text' && (
                        <p className="text-slate-500 text-xs mt-1 line-clamp-2">{section.content}</p>
                      )}
                      {section.type === 'skills' && (
                        <div className="flex flex-wrap gap-1 mt-1">
                          {section.items.map((item, i) => (
                            <span key={i} className="text-xs text-slate-500">{item.category}: {item.items}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )} */}
        </div>

        <style>{`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fade-in 0.4s ease-out forwards;
          }
        `}</style>
      </div>
    );
  }


  const currentCv = selectedRole ? selectedRole.defaultCv : profession.defaultCv;

  return (
    <div className="fixed inset-0 z-[100] bg-slate-100 flex flex-col overflow-hidden">
      <Seo title={`${selectedRole?.name || profession.name} CV Builder | CV Maker`} description={`Create and export a tailored ${selectedRole?.name || profession.name} CV with editable sections and a live preview.`} keywords={`${selectedRole?.name || profession.name} CV, resume builder, job resume template, ATS friendly CV`} path={`/editor/${professionId}`} />
      {/* Top Header Bar */}
      <div className="flex-shrink-0 flex justify-between items-center px-4 py-3 bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm z-[120]">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/')}
            className="flex min-h-10 items-center gap-2 rounded-xl px-3 py-2 text-sm text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800"
          >
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">Home</span>
          </button>
          <div className="w-px h-6 bg-slate-200" />
          <div className="flex items-center gap-2">
            <div className="flex flex-col">
              <span className="font-bold text-slate-800 leading-none text-sm">{profession.name}</span>
              {selectedRole && (
                <span className="text-indigo-600 text-[10px] font-bold uppercase tracking-wider">
                  {selectedRole.name}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {hasRoles && (
            <button
              onClick={handleChangeRole}
              className="flex min-h-10 items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
            >
              <ArrowLeft size={14} />
              Change Role
            </button>
          )}
          <button
            onClick={() => navigate('/')}
            aria-label="Close editor"
            className="flex h-10 w-10 items-center justify-center rounded-xl p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-800"
          >
            <X size={20} aria-hidden />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <DynamicCVMaker
          key={selectedRole ? `${professionId}-${selectedRole.id}` : professionId}
          professionId={professionId}
          templateStyleId={profession.templateStyleId}
          initialCv={currentCv}
        />
      </div>
    </div>
  );
}
