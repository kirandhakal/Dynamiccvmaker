import React from 'react';
import { Cpu } from 'lucide-react';

export default function Footer() {
  return (
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
  );
}
