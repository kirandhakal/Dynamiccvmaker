import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Users } from 'lucide-react';
import { professions } from '../../data/professions';

export default function TemplateSection() {
  const navigate = useNavigate();

  return (
    <section id="templates" className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-slate-900 mb-4">Choose Your Profession</h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Pick a template tailored to your field. Select your specific role for personalized content.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {professions.map((profession) => {
            const hasRoles = profession.roles && profession.roles.length > 0;
            return (
              <div
                key={profession.id}
                className="group relative bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-500 hover:-translate-y-2"
              >
                <div
                  className={`h-56 bg-gradient-to-br ${profession.color} p-6 relative overflow-hidden`}
                >
                  <div className="bg-white rounded-xl shadow-2xl p-4 transform group-hover:scale-105 transition-transform duration-500">
                    <div className="flex items-start gap-3 mb-4">
                      <div className={`w-10 h-10 ${profession.accent} rounded-lg`} />
                      <div className="flex-1">
                        <div className="h-3 w-24 bg-slate-800 rounded mb-1" />
                        <div className="h-2 w-16 bg-slate-300 rounded" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 w-full bg-slate-100 rounded" />
                      <div className="h-2 w-4/5 bg-slate-100 rounded" />
                      <div className="h-2 w-3/4 bg-slate-100 rounded" />
                    </div>
                  </div>
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full" />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-xl font-bold text-slate-900">{profession.name}</h3>
                    {hasRoles && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-indigo-50 text-indigo-600 text-xs font-bold rounded-full">
                        <Users size={10} />
                        {profession.roles.length} Roles
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-indigo-600 font-medium mb-2">{profession.subtitle}</p>
                  <p className="text-slate-500 text-sm mb-4">{profession.description}</p>

                  {/* Show role previews */}
                  {hasRoles && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {profession.roles.slice(0, 4).map((role) => (
                        <span
                          key={role.id}
                          className="inline-flex items-center gap-1 px-2 py-1 bg-slate-50 text-slate-600 text-xs rounded-lg border border-slate-100"
                        >
                          <span>{role.icon}</span> {role.name}
                        </span>
                      ))}
                      {profession.roles.length > 4 && (
                        <span className="inline-flex items-center px-2 py-1 bg-slate-50 text-slate-400 text-xs rounded-lg border border-slate-100">
                          +{profession.roles.length - 4} more
                        </span>
                      )}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-6">
                    {profession.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-full"
                      >
                        <CheckCircle2 size={12} /> {feature}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => navigate(`/editor/${profession.id}`)}
                    className={`w-full py-3 rounded-xl font-semibold transition-all bg-gradient-to-r ${profession.color} text-white hover:opacity-90 active:scale-98 flex items-center justify-center gap-2`}
                  >
                    {hasRoles ? (
                      <>
                        Choose Role <ArrowRight size={18} />
                      </>
                    ) : (
                      <>
                        Use This Template <ArrowRight size={18} />
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
