import React, { useState, useEffect } from 'react';
import { X, Cpu } from 'lucide-react';
import Navbar from './Navbar';
import Hero from './Hero';
import TemplateSection from './TemplateSection';
import FeaturesSection from './FeaturesSection';
import Footer from './Footer';
import DynamicCVMaker from '../DynamicCVMaker';

export default function LandingPage() {
  const [showCvMaker, setShowCvMaker] = useState(false);
  const [selectedProfession, setSelectedProfession] = useState(null);

  useEffect(() => {
    document.body.style.overflow = showCvMaker ? 'hidden' : 'unset';
  }, [showCvMaker]);

  const handleSelectTemplate = (profession) => {
    setSelectedProfession(profession);
    setShowCvMaker(true);
  };

  return (
    <div className="relative min-h-screen bg-[#fafafa] text-slate-900 font-sans selection:bg-indigo-100">
      {showCvMaker && selectedProfession && (
        <div className="fixed inset-0 z-[100] bg-white animate-in fade-in zoom-in duration-300 overflow-y-auto">
          <div className="sticky top-0 z-[110] flex justify-between items-center px-6 py-4 bg-white/80 backdrop-blur-md border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-tr from-indigo-600 to-violet-500 rounded-lg flex items-center justify-center text-white font-bold">
                <Cpu size={18} />
              </div>
              <span className="font-bold text-slate-800">Editor Mode</span>
              <span className="ml-2 px-2 py-0.5 bg-indigo-100 text-indigo-700 text-xs rounded-full font-medium">
                {selectedProfession.name}
              </span>
            </div>
            <button
              onClick={() => setShowCvMaker(false)}
              className="p-2 hover:bg-slate-100 rounded-full transition-colors group"
            >
              <X size={24} className="text-slate-400 group-hover:text-slate-900" />
            </button>
          </div>
          <DynamicCVMaker
            professionId={selectedProfession.id}
            templateStyleId={selectedProfession.templateStyleId}
            initialCv={selectedProfession.defaultCv}
          />
        </div>
      )}

      <Navbar />
      <Hero />
      <TemplateSection onSelectTemplate={handleSelectTemplate} />
      <FeaturesSection />
      <Footer />
    </div>
  );
}
