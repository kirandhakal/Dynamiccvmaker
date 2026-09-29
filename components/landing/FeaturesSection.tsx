import React from 'react';
import { landingContent } from '../../data/pages';
import { Zap, ShieldCheck, FileText, Briefcase } from 'lucide-react';

export default function FeaturesSection() {
  const copy = landingContent.features.cards;
  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 p-10 bg-slate-900 rounded-[2.5rem] text-white overflow-hidden relative group">
            <Zap className="text-indigo-400 mb-6 group-hover:scale-110 transition-transform" size={40} />
            <h3 className="text-3xl font-bold mb-4">{copy[0].title}</h3>
            <p className="text-slate-400 text-lg max-w-md">
              {copy[0].description}
            </p>
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl" />
          </div>
          <div className="md:col-span-4 p-10 bg-indigo-50 rounded-[2.5rem] border border-indigo-100">
            <ShieldCheck className="text-indigo-600 mb-6" size={40} />
            <h3 className="text-2xl font-bold mb-4 text-slate-900">{copy[1].title}</h3>
            <p className="text-slate-600 font-medium">
              {copy[1].description}
            </p>
          </div>
          <div className="md:col-span-4 p-10 bg-violet-50 rounded-[2.5rem] border border-violet-100">
            <FileText className="text-violet-600 mb-6" size={40} />
            <h3 className="text-2xl font-bold mb-4 text-slate-900">{copy[2].title}</h3>
            <p className="text-slate-600 font-medium">
              {copy[2].description}
            </p>
          </div>
          <div className="md:col-span-8 p-10 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-[2.5rem] text-white overflow-hidden relative">
            <Briefcase className="text-white/80 mb-6" size={40} />
            <h3 className="text-3xl font-bold mb-4">{copy[3].title}</h3>
            <p className="text-white/80 text-lg max-w-md">
              {copy[3].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
