import React from 'react';
import { BriefcaseBusiness, GraduationCap, Link2, ListChecks, UserRound, Wrench } from 'lucide-react';

const sectionTypes = [
  { icon: UserRound, title: 'Professional summary', text: 'Introduce your strengths and career direction.' },
  { icon: BriefcaseBusiness, title: 'Work experience', text: 'Show roles, dates, achievements, and impact.' },
  { icon: GraduationCap, title: 'Education', text: 'Add degrees, training, and relevant study.' },
  { icon: Wrench, title: 'Skills', text: 'Group technical and professional capabilities.' },
  { icon: ListChecks, title: 'Projects & highlights', text: 'Present your best work and measurable results.' },
  { icon: Link2, title: 'Links & custom sections', text: 'Add portfolios, profiles, certificates, or anything else.' },
];

export default function SectionTypes() {
  return (
    <section className="bg-[#0b1220] py-24 text-white" aria-labelledby="section-types-title">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-amber-400">Built your way</p>
            <h2 id="section-types-title" className="max-w-lg text-4xl font-black leading-tight sm:text-5xl">
              Every section you need. None you don’t.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-400">
              Add, remove, edit, and reorder sections until the CV tells your story in the right order.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {sectionTypes.map(({ icon: Icon, title, text }, index) => (
              <article key={title} className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-indigo-400/50 hover:bg-white/[0.07]">
                <div className="flex items-start gap-4">
                  <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${index === 0 ? 'bg-amber-400 text-slate-950' : 'bg-indigo-500/15 text-indigo-300'}`}>
                    <Icon size={20} />
                  </span>
                  <div>
                    <h3 className="font-bold text-white">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-400">{text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
