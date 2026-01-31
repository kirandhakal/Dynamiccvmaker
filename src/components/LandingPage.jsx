import React, { useState, useEffect } from 'react';
import { 
  Zap, ArrowRight, X, Sparkles, 
  ShieldCheck, MousePointer2, Cpu, FileText, Briefcase, CheckCircle2
} from 'lucide-react';
import DynamicCVMaker from './DynamicCVMaker';

// Template configurations for preview
const templates = [
  {
    id: 1,
    name: 'Classic',
    description: 'Clean black & white design, perfect for traditional industries',
    color: 'from-gray-700 to-gray-900',
    accent: 'bg-gray-800',
    features: ['ATS Friendly', 'Clean Layout', 'Professional']
  },
  {
    id: 4,
    name: 'Professional',
    description: 'Modern minimalist style with subtle accent colors',
    color: 'from-blue-600 to-indigo-700',
    accent: 'bg-blue-600',
    features: ['Modern Design', 'Minimalist', 'Elegant']
  },
  {
    id: 5,
    name: 'Minimalist',
    description: 'Centered layout with emphasis on content clarity',
    color: 'from-violet-600 to-purple-700',
    accent: 'bg-violet-600',
    features: ['Centered Layout', 'Clean Lines', 'Focused']
  },
];

const LandingPage = () => {
  const [showCvMaker, setShowCvMaker] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  useEffect(() => {
    if (showCvMaker) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showCvMaker]);

  const handleSelectTemplate = (templateId) => {
    setSelectedTemplate(templateId);
    setShowCvMaker(true);
  };

  return (
    <div className="relative min-h-screen bg-[#fafafa] text-slate-900 font-sans selection:bg-indigo-100">
      
      {/* --- Dynamic CV Maker Overlay --- */}
      {showCvMaker && (
        <div className="fixed inset-0 z-[100] bg-white animate-in fade-in zoom-in duration-300 overflow-y-auto">
          <div className="sticky top-0 z-[110] flex justify-between items-center px-6 py-4 bg-white/80 backdrop-blur-md border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-tr from-indigo-600 to-violet-500 rounded-lg flex items-center justify-center text-white font-bold">
                <Cpu size={18} />
              </div>
              <span className="font-bold text-slate-800">Editor Mode</span>
              <span className="ml-2 px-2 py-0.5 bg-indigo-100 text-indigo-700 text-xs rounded-full font-medium">
                {templates.find(t => t.id === selectedTemplate)?.name}
              </span>
            </div>
            <button 
              onClick={() => setShowCvMaker(false)}
              className="p-2 hover:bg-slate-100 rounded-full transition-colors group"
            >
              <X size={24} className="text-slate-400 group-hover:text-slate-900" />
            </button>
          </div>
          <DynamicCVMaker selectedTemplate={selectedTemplate} />
        </div>
      )}

      {/* --- Navbar --- */}
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
            <a href="#templates" className="hover:text-indigo-600 transition-colors">Templates</a>
            <a href="#features" className="hover:text-indigo-600 transition-colors">Features</a>
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

      {/* --- Hero Section with CV Preview --- */}
      <header className="relative pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-6">
                <Sparkles size={14} /> Free Resume Builder
              </div>
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-slate-900 leading-tight mb-6">
                Build Your Perfect<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-500">Resume in Minutes</span>
              </h1>
              <p className="text-xl text-slate-500 leading-relaxed max-w-xl font-medium mb-8">
                Choose from our professionally designed templates and create a stunning resume with our easy-to-use rich text editor.
              </p>
              <a 
                href="#templates"
                className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 active:scale-95"
              >
                Choose a Template <ArrowRight size={20} />
              </a>
            </div>

            {/* Right - CV Preview */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-[2rem] blur-2xl opacity-20"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 max-w-md mx-auto">
                {/* CV Preview Header */}
                <div className="border-b border-slate-100 pb-4 mb-4">
                  <h3 className="text-xl font-bold text-slate-900">JOHN DOE</h3>
                  <p className="text-sm text-indigo-600 font-medium">Full Stack Developer</p>
                  <p className="text-xs text-slate-400 mt-1">San Francisco, CA • john@example.com</p>
                </div>
                
                {/* Professional Summary */}
                <div className="mb-4">
                  <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wide border-b border-slate-200 pb-1 mb-2">Professional Summary</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">Results-driven developer with 5+ years of experience building scalable web applications.</p>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wide border-b border-slate-200 pb-1 mb-2">Technical Skills</h4>
                  <div className="flex flex-wrap gap-1">
                    {['React', 'Node.js', 'TypeScript', 'AWS', 'MongoDB'].map(skill => (
                      <span key={skill} className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs rounded">{skill}</span>
                    ))}
                  </div>
                </div>

                {/* Experience */}
                <div className="mb-4">
                  <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wide border-b border-slate-200 pb-1 mb-2">Experience</h4>
                  <div>
                    <div className="flex justify-between items-baseline">
                      <span className="text-xs font-semibold text-slate-800">Senior Software Engineer</span>
                      <span className="text-xs text-slate-400">2021 - Present</span>
                    </div>
                    <p className="text-xs text-slate-500">Tech Corp Inc.</p>
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wide border-b border-slate-200 pb-1 mb-2">Education</h4>
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs font-semibold text-slate-800">B.S. Computer Science</span>
                    <span className="text-xs text-slate-400">2015 - 2019</span>
                  </div>
                  <p className="text-xs text-slate-500">UC Berkeley</p>
                </div>

                {/* Decorative badge */}
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-indigo-500 to-violet-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  Preview
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- Template Selection Section --- */}
      <section id="templates" className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Choose Your Template</h2>
            <p className="text-lg text-slate-500 max-w-xl mx-auto">
              Select a template to get started. You can customize everything in the editor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {templates.map((template) => (
              <div
                key={template.id}
                className="group relative bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Template Preview */}
                <div className={`h-56 bg-gradient-to-br ${template.color} p-6 relative overflow-hidden`}>
                  {/* Mockup CV Preview */}
                  <div className="bg-white rounded-xl shadow-2xl p-4 transform group-hover:scale-105 transition-transform duration-500">
                    <div className="flex items-start gap-3 mb-4">
                      <div className={`w-10 h-10 ${template.accent} rounded-lg`}></div>
                      <div className="flex-1">
                        <div className="h-3 w-24 bg-slate-800 rounded mb-1"></div>
                        <div className="h-2 w-16 bg-slate-300 rounded"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 w-full bg-slate-100 rounded"></div>
                      <div className="h-2 w-4/5 bg-slate-100 rounded"></div>
                      <div className="h-2 w-3/4 bg-slate-100 rounded"></div>
                    </div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full"></div>
                </div>

                {/* Template Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{template.name}</h3>
                  <p className="text-slate-500 text-sm mb-4">{template.description}</p>
                  
                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {template.features.map((feature, idx) => (
                      <span key={idx} className="inline-flex items-center gap-1 px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">
                        <CheckCircle2 size={12} /> {feature}
                      </span>
                    ))}
                  </div>

                  {/* Select Button */}
                  <button
                    onClick={() => handleSelectTemplate(template.id)}
                    className={`w-full py-3 rounded-xl font-semibold transition-all bg-gradient-to-r ${template.color} text-white hover:opacity-90 active:scale-98 flex items-center justify-center gap-2`}
                  >
                    Use This Template <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Features Section --- */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 p-10 bg-slate-900 rounded-[2.5rem] text-white overflow-hidden relative group">
                <Zap className="text-indigo-400 mb-6 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-3xl font-bold mb-4">Rich Text Editing</h3>
                <p className="text-slate-400 text-lg max-w-md">Format your content with bold, italic, custom fonts, colors, and alignment options. Make your resume stand out.</p>
                <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl"></div>
            </div>
            <div className="md:col-span-4 p-10 bg-indigo-50 rounded-[2.5rem] border border-indigo-100">
                <ShieldCheck className="text-indigo-600 mb-6" size={40} />
                <h3 className="text-2xl font-bold mb-4 text-slate-900">ATS Friendly</h3>
                <p className="text-slate-600 font-medium">All templates are optimized to pass Applicant Tracking Systems.</p>
            </div>
            <div className="md:col-span-4 p-10 bg-violet-50 rounded-[2.5rem] border border-violet-100">
                <FileText className="text-violet-600 mb-6" size={40} />
                <h3 className="text-2xl font-bold mb-4 text-slate-900">Export to PDF</h3>
                <p className="text-slate-600 font-medium">Download your resume as a professional PDF with one click.</p>
            </div>
            <div className="md:col-span-8 p-10 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-[2.5rem] text-white overflow-hidden relative">
                <Briefcase className="text-white/80 mb-6" size={40} />
                <h3 className="text-3xl font-bold mb-4">Drag & Drop Sections</h3>
                <p className="text-white/80 text-lg max-w-md">Easily reorder your resume sections by dragging them. Add or remove sections as needed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Simple Footer --- */}
      <footer className="py-12 border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-tr from-indigo-600 to-violet-500 rounded-lg flex items-center justify-center text-white">
              <Cpu size={16} />
            </div>
            <span className="font-bold text-slate-800">KineticCV</span>
          </div>
          <p className="text-slate-400 font-medium">© 2026 KineticCV. Build your future.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;