import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <header id="home" className="relative pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles size={14} /> Free Resume Builder
            </div> */}
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-slate-900 leading-tight mb-6">
              Build Your Perfect
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-500">
                Resume in Minutes
              </span>
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed max-w-xl font-medium mb-8">
              Pick from 14 industries and 75+ role types—then tailor your CV in the editor.
            </p>
            <a
              href="#templates"
              className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-smshadow-indigo-200 active:scale-95"
            >
              Choose a Template <ArrowRight size={20} />
            </a>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] blur-2xl opacity-0" />
            <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 max-w-md mx-auto">
              <div className="border-b border-slate-100 pb-4 mb-4">
                <h3 className="text-xl font-bold text-slate-900">JOHN DOE</h3>
                <p className="text-sm text-indigo-600 font-medium">Full Stack Developer</p>
                <p className="text-xs text-slate-400 mt-1">San Francisco, CA • john@example.com</p>
              </div>
              <div className="mb-4">
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wide border-b border-slate-200 pb-1 mb-2">
                  Professional Summary
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Results-driven developer with 5+ years building scalable web applications.
                </p>
              </div>
              <div className="mb-4">
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wide border-b border-slate-200 pb-1 mb-2">
                  Technical Skills
                </h4>
                <div className="flex flex-wrap gap-1">
                  {['React', 'Node.js', 'TypeScript', 'AWS'].map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              {/* <div className="absolute -top-3 -right-3 bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                Preview
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
