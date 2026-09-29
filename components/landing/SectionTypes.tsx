import React from 'react';
import { landingContent } from '../../data/pages';
import { BriefcaseBusiness, GraduationCap, Link2, ListChecks, UserRound, Wrench } from 'lucide-react';

const sectionIcons = [UserRound, BriefcaseBusiness, GraduationCap, Wrench, ListChecks, Link2];
const copy = landingContent.sectionTypes;

export default function SectionTypes() {
  return (
    <section className="bg-[#0b1220] py-24 text-white" aria-labelledby="section-types-title">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-amber-400">{copy.eyebrow}</p>
            <h2 id="section-types-title" className="max-w-lg text-4xl font-black leading-tight sm:text-5xl">
              {copy.title}
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-400">
              {copy.description}
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {copy.items.map(({ title, text }, index) => { const Icon = sectionIcons[index]; return (
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
            ); })}
          </div>
        </div>
      </div>
    </section>
  );
}
