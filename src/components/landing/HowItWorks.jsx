import React from 'react';
import { MousePointer2, Settings2, Download } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <MousePointer2 className="text-indigo-600" size={32} />,
      title: "Choose a Template",
      description: "Select from our professionally designed templates tailored for your specific industry and role."
    },
    {
      icon: <Settings2 className="text-violet-600" size={32} />,
      title: "Customize Content",
      description: "Use our intuitive rich text editor to fill in your details, reorder sections, and adjust styles."
    },
    {
      icon: <Download className="text-indigo-600" size={32} />,
      title: "Download PDF",
      description: "Once you're satisfied, download your resume as a high-quality, ATS-friendly PDF file."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-4">How It Works</h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Get your professional resume ready in just three simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting Line (desktop only) */}
          <div className="hidden md:block absolute top-1/4 left-1/4 right-1/4 h-0.5 border-t-2 border-dashed border-indigo-100" />
          
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-white rounded-3xl shadow-smshadow-indigo-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 z-10 border border-slate-100">
                {step.icon}
              </div>
              <div className="absolute top-0 right-1/2 -mr-16 text-6xl font-black text-slate-100 select-none -z-0">
                0{index + 1}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
