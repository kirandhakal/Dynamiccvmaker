import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, FileDown, GripVertical } from 'lucide-react';

export default function Hero() {
  return (
    <header id="home" className="relative overflow-hidden bg-[#f7f5ef] pb-20 pt-14 sm:pb-28 sm:pt-20">
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-indigo-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-amber-200/50 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/70 px-4 py-2 text-sm font-bold text-slate-700 shadow-sm backdrop-blur">
      Built for 75+ career paths
          </div>
          <h1 className="max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-7xl">
            Your experience deserves a CV that
            <span className="relative ml-3 inline-block text-indigo-600">
              gets read.
              <svg className="absolute -bottom-2 left-0 w-full text-amber-400" viewBox="0 0 250 12" fill="none" aria-hidden><path d="M3 8.5C61 2.5 153 2 247 6" stroke="currentColor" strokeWidth="5" strokeLinecap="round" /></svg>
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg font-medium leading-8 text-slate-600 sm:text-xl">
            Start with role-specific content, shape every section, and export a clean, ATS-friendly resume without fighting a rigid template.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link to="/templates" className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-7 py-4 text-base font-bold text-white shadow-xl shadow-slate-900/15 transition hover:-translate-y-0.5 hover:bg-indigo-700">
              Build my CV <ArrowRight size={19} />
            </Link>
            <a href="#how-it-works" className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white/60 px-7 py-4 text-base font-bold text-slate-800 transition hover:border-slate-400 hover:bg-white">
              See how it works
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-600">
            {['No sign-up required', 'Flexible sections', 'PDF, Word & Markdown'].map((item) => <span key={item} className="flex items-center gap-2"><Check size={16} className="text-indigo-600" />{item}</span>)}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:mr-0">
          <div className="absolute -inset-5 rotate-2 rounded-[2.2rem] bg-indigo-600" />
          <div className="relative rounded-[1.8rem] border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-900/20 sm:p-6">
            <div className="mb-5 flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3"><img src="/cv-maker-icon.png" alt="" className="h-10 w-10 rounded-xl" /><div><p className="font-bold text-slate-900">Live CV preview</p><p className="text-xs text-slate-500">Changes saved in your browser</p></div></div>
              <span className="flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700"><span className="h-2 w-2 rounded-full bg-emerald-500" /> Ready</span>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-inner sm:p-8">
              <div className="border-b-2 border-slate-900 pb-4">
                <h2 className="text-2xl font-black tracking-tight text-slate-950">ALEX MORGAN</h2>
                <p className="mt-1 text-xs font-medium text-slate-500">Product Designer &nbsp;|&nbsp; Kathmandu, Nepal &nbsp;|&nbsp; Portfolio</p>
              </div>
              {[['PROFILE', 'Designer focused on thoughtful systems and simple experiences.'], ['EXPERIENCE', 'Senior Product Designer · Studio North'], ['SKILLS', 'Research · Prototyping · Design systems']].map(([title, copy], index) => (
                <div key={title} className="group mt-5 flex gap-2">
                  <GripVertical size={14} className="mt-1 shrink-0 text-slate-300" />
                  <div className="w-full"><div className="flex items-center justify-between"><h3 className="text-[10px] font-black tracking-[0.18em] text-indigo-700">{title}</h3>{index === 1 && <span className="rounded bg-amber-100 px-2 py-0.5 text-[9px] font-bold text-amber-800">DRAG TO MOVE</span>}</div><p className="mt-1.5 text-xs leading-5 text-slate-600">{copy}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-xl sm:-left-10"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400 text-slate-950"><FileDown size={20} /></span><div><p className="text-sm font-bold text-slate-900">Export ready</p><p className="text-xs text-slate-500">PDF · DOC · MD</p></div></div>
        </div>
      </div>
    </header>
  );
}
