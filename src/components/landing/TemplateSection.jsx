import React from 'react';
import { useNavigate } from 'react-router-dom';
import { professions } from '../../data/professions';

export default function TemplateSection() {
  const navigate = useNavigate();

  return (
    <section id="templates" className="border-y border-slate-100 bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-black text-slate-900">Choose Your Profession</h2>
          <p className="mx-auto max-w-xl text-lg text-slate-500">
            Pick a template tailored to your field. Select your specific role for personalized content.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {professions.map((profession) => {
            const hasRoles = profession.roles && profession.roles.length > 0;
            return (
              <button
                key={profession.id}
                type="button"
                onClick={() => navigate(`/editor/${profession.id}`)}
                aria-label={`${hasRoles ? 'Choose a role in' : 'Use'} ${profession.name}`}
                className="group min-h-48 rounded-2xl border border-slate-200 bg-white p-6 text-left transition-colors hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2"
              >
                <div className="flex h-full flex-col">
                  <h3 className="text-xl font-bold leading-snug text-slate-900">{profession.name}</h3>
                  <p className="mt-2 text-sm font-medium text-slate-700">{profession.subtitle}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-500">{profession.description}</p>
                  <p className="mt-auto pt-5 text-sm font-medium text-indigo-600">
                    {hasRoles ? `${profession.roles.length} roles` : 'Open template'}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
