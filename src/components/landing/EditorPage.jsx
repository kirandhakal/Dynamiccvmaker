import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { X, Cpu, ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';
import DynamicCVMaker from '../DynamicCVMaker';
import { professions } from '../../data/professions';

export default function EditorPage() {
  const { professionId } = useParams();
  const navigate = useNavigate();

  const profession = professions.find(p => p.id === professionId);
  const [selectedRole, setSelectedRole] = useState(null);
  const [editorMode, setEditorMode] = useState(false);

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

  if (!profession) return null;

  const hasRoles = profession.roles && profession.roles.length > 0;

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  const handleUseTemplate = () => {
    if (selectedRole) {
      // Clear any previously saved CV data for this profession so it loads fresh role data
      localStorage.removeItem(`cv_data_${professionId}`);
      setEditorMode(true);
    }
  };

  const handleChangeRole = () => {
    setEditorMode(false);
    setSelectedRole(null);
    localStorage.removeItem(`cv_data_${professionId}`);
  };

  // Role Selection Screen
  if (hasRoles && !editorMode) {
    return (
      <div className="fixed inset-0 z-[100] bg-gradient-to-br from-slate-950 via-slate-900 to-gray-900 overflow-y-auto">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />
        </div>

        {/* Header */}
        <div className="sticky top-0 z-[110] flex justify-between items-center px-6 py-4 bg-slate-950/80 backdrop-blur-xl border-b border-white/5">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 px-3 py-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all"
            >
              <ArrowLeft size={18} />
              <span className="text-sm font-medium hidden sm:inline">Back</span>
            </button>
            <div className="w-px h-8 bg-white/10" />
            <div className="flex items-center gap-2">
              <div className={`w-10 h-10 bg-gradient-to-tr ${profession.color} rounded-xl flex items-center justify-center text-white font-bold shadow-lg`}>
                <Cpu size={20} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white leading-none text-lg">{profession.name}</span>
                <span className="text-indigo-400 text-xs font-bold uppercase tracking-wider">
                  Choose Your Role
                </span>
              </div>
            </div>
          </div>
          <button
            onClick={() => navigate('/')}
            className="p-2 hover:bg-white/5 rounded-full transition-all group"
          >
            <X size={24} className="text-slate-500 group-hover:text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
          {/* Title */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-4">
              <Sparkles size={14} />
              Select Your Specialization
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
              What's your <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">role</span>?
            </h1>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Choose your specific role to get a tailored CV template with relevant skills, projects, and experience pre-filled.
            </p>
          </div>

          {/* Role Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {profession.roles.map((role) => (
              <button
                key={role.id}
                onClick={() => handleRoleSelect(role)}
                className={`group relative text-left rounded-2xl border overflow-hidden transition-all duration-500 transform hover:-translate-y-1 ${selectedRole?.id === role.id
                  ? 'border-indigo-500 bg-indigo-500/10 shadow-2xl shadow-indigo-500/20 scale-[1.02]'
                  : 'border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/20'
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

                {/* Card gradient top bar */}
                <div className={`h-1.5 bg-gradient-to-r ${role.color} transition-all duration-300 ${selectedRole?.id === role.id ? 'h-2' : ''}`} />

                <div className="p-6">
                  {/* Icon and name */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${role.color} flex items-center justify-center text-2xl shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                      {role.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {role.name}
                      </h3>
                      <p className="text-slate-500 text-sm">{role.description}</p>
                    </div>
                  </div>

                  {/* Preview of what's included */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {role.defaultCv.sections.slice(0, 3).map((section, idx) => (
                      <span key={idx} className="inline-flex items-center px-2.5 py-1 rounded-lg bg-white/5 text-slate-400 text-xs border border-white/5">
                        {section.title}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br ${role.color} mix-blend-overlay`}
                  style={{ opacity: selectedRole?.id === role.id ? 0.05 : undefined }} />
              </button>
            ))}
          </div>

          {/* CTA */}
          {selectedRole && (
            <div className="flex justify-center animate-fade-in">
              <button
                onClick={handleUseTemplate}
                className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300 hover:scale-105 active:scale-100"
              >
                <Sparkles size={20} />
                Use {selectedRole.name} Template
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          )}

          {/* Selected role preview */}
          {selectedRole && (
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
          )}
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

  // Editor Mode with 3-panel layout
  const currentCv = selectedRole ? selectedRole.defaultCv : profession.defaultCv;

  return (
    <div className="fixed inset-0 z-[100] bg-slate-100 flex flex-col overflow-hidden">
      {/* Top Header Bar */}
      <div className="flex-shrink-0 flex justify-between items-center px-4 py-3 bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm z-[120]">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-all text-sm"
          >
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">Home</span>
          </button>
          <div className="w-px h-6 bg-slate-200" />
          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 bg-gradient-to-tr ${profession.color} rounded-lg flex items-center justify-center text-white shadow-md`}>
              <Cpu size={16} />
            </div>
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
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-slate-600 hover:text-indigo-600 bg-slate-50 hover:bg-indigo-50 rounded-xl border border-slate-200 hover:border-indigo-200 transition-all"
            >
              <ArrowLeft size={14} />
              Change Role
            </button>
          )}
          <button
            onClick={() => navigate('/')}
            className="p-2 hover:bg-slate-100 rounded-full transition-all group"
          >
            <X size={20} className="text-slate-400 group-hover:text-slate-800" />
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
