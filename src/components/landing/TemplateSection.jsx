import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { professions } from '../../data/professions';

export default function TemplateSection() {
  const navigate = useNavigate();

  return (
    <section id="templates" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Choose Your Profession</h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Pick a template tailored to your field. Select your specific role for personalized content.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {professions.map((profession) => {
            const hasRoles = profession.roles && profession.roles.length > 0;
            return (
              <div
                key={profession.id}
                className="group relative bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md hover:border-slate-300 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{profession.roles?.[0]?.icon || '📄'}</span>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">{profession.name}</h3>
                      <p className="text-sm text-slate-500">{profession.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">{profession.description}</p>

                  {hasRoles && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {profession.roles.slice(0, 3).map((role) => (
                        <span
                          key={role.id}
                          className="inline-flex items-center px-3 py-1.5 bg-slate-100 text-slate-700 text-xs rounded-md font-medium"
                        >
                          {role.icon} {role.name}
                        </span>
                      ))}
                      {profession.roles.length > 3 && (
                        <span className="inline-flex items-center px-3 py-1.5 bg-slate-100 text-slate-500 text-xs rounded-md font-medium">
                          +{profession.roles.length - 3} more
                        </span>
                      )}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-6">
                    {profession.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 px-2.5 py-1 bg-slate-50 text-slate-600 text-xs rounded-md"
                      >
                        <CheckCircle2 size={11} className="text-emerald-500" /> {feature}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => navigate(`/editor/${profession.id}`)}
                    className="w-full py-3.5 rounded-xl font-medium transition-all bg-slate-900 text-white hover:bg-slate-800 flex items-center justify-center gap-2"
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
