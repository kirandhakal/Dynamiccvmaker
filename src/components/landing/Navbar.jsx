import React from 'react';
import { Cpu, ArrowRight } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/60 border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-gradient-to-tr from-indigo-600 to-violet-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">
            <Cpu size={22} />
          </div>
          <span className="text-2xl font-black tracking-tight text-slate-800">
            Kinetic<span className="text-indigo-600">CV</span>
          </span>
        </div>

        <div className="hidden md:flex gap-10 font-medium text-slate-500">
          <a href="#templates" className="hover:text-indigo-600 transition-colors">
            Templates
          </a>
          <a href="#features" className="hover:text-indigo-600 transition-colors">
            Features
          </a>
        </div>

        <a
          href="#templates"
          className="group relative px-6 py-2.5 bg-slate-900 text-white rounded-full font-semibold overflow-hidden transition-all hover:pr-10"
        >
          <span className="relative z-10">Get Started</span>
          <ArrowRight className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300" size={18} />
        </a>
      </div>
    </nav>
  );
}
