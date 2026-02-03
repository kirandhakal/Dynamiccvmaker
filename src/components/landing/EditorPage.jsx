import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { X, Cpu } from 'lucide-react';
import DynamicCVMaker from '../DynamicCVMaker';
import { professions } from '../../data/professions';

export default function EditorPage() {
  const { professionId } = useParams();
  const navigate = useNavigate();
  
  const profession = professions.find(p => p.id === professionId);

  useEffect(() => {
    if (!profession) {
      navigate('/');
    }
  }, [profession, navigate]);

  if (!profession) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-white overflow-y-auto">
      <div className="sticky top-0 z-[110] flex justify-between items-center px-6 py-4 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-tr from-indigo-600 to-violet-500 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-100">
            <Cpu size={20} />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-slate-800 leading-none text-lg">Editor Mode</span>
            <span className="text-indigo-600 text-xs font-bold uppercase tracking-wider">
              {profession.name}
            </span>
          </div>
        </div>
        <button
          onClick={() => navigate('/')}
          className="p-2 hover:bg-slate-100 rounded-full transition-all group active:scale-90 bg-slate-50"
        >
          <X size={24} className="text-slate-400 group-hover:text-slate-900" />
        </button>
      </div>
      <DynamicCVMaker
        professionId={profession.id}
        templateStyleId={profession.templateStyleId}
        initialCv={profession.defaultCv}
      />
    </div>
  );
}
