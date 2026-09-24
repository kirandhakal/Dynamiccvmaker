import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const siteLinks = [
  ['Templates', '/templates'], ['Features', '/features'], ['How it works', '/how-it-works'], ['Contact', '/contact'],
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#0b1220] pb-8 pt-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 border-b border-white/10 pb-14 md:grid-cols-3">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-3">
              <img src="/cv-maker-icon.png" alt="" className="h-11 w-11 rounded-xl" />
              <span className="text-xl font-black tracking-tight">CV <span className="text-indigo-400">MAKER</span></span>
            </Link>
            <p className="mt-5 max-w-sm leading-7 text-slate-400">A flexible, role-aware CV builder for creating clear and professional resumes.</p>
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">Explore</h2>
            <ul className="mt-5 grid grid-cols-2 gap-3">
              {siteLinks.map(([label, href]) => <li key={label}><Link to={href} className="text-slate-300 transition hover:text-white">{label}</Link></li>)}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">Created & designed by</h2>
            <a href="https://www.dhakalkiran.com.np/" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-lg font-bold text-white transition hover:text-amber-400">Kiran Dhakal <ArrowUpRight size={18} /></a>
            <a href="mailto:info@dhakalkiran.com.np" className="mt-3 flex items-center gap-2 text-sm text-slate-400 hover:text-white"><Mail size={15} /> info@dhakalkiran.com.np</a>
            <div className="mt-5 flex gap-3">
              <a aria-label="Kiran Dhakal on X" href="https://x.com/dhakaldiary" target="_blank" rel="noreferrer" className="rounded-full bg-white/5 p-2.5 text-slate-400 transition hover:bg-white/10 hover:text-white"><Twitter size={17} /></a>
              <a aria-label="Kiran Dhakal on LinkedIn" href="https://www.linkedin.com/in/kirandhakal7/" target="_blank" rel="noreferrer" className="rounded-full bg-white/5 p-2.5 text-slate-400 transition hover:bg-white/10 hover:text-white"><Linkedin size={17} /></a>
              <a aria-label="Kiran Dhakal on GitHub" href="https://github.com/kirandhakal" target="_blank" rel="noreferrer" className="rounded-full bg-white/5 p-2.5 text-slate-400 transition hover:bg-white/10 hover:text-white"><Github size={17} /></a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 pt-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 CV Maker. All rights reserved.</p>
          <div className="flex gap-5"><Link to="/privacy" className="hover:text-slate-300">Privacy Policy</Link><Link to="/terms" className="hover:text-slate-300">Terms of Use</Link></div>
        </div>
      </div>
    </footer>
  );
}
