import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
   Cpu,
    ArrowRight,
    Menu,
    X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Templates', href: '/templates' },
    { name: 'Features', href: '/features' },
    { name: 'How it Works', href: '/how-it-works' },
    // { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/60 border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-gradient-to-tr from-indigo-600 to-violet-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-200 group-hover:scale-110 transition-transform">
            <Cpu size={22} />
          </div>
          <span className="text-2xl font-black tracking-tight text-slate-800">
            CV<span className="text-indigo-600">MAKER</span>
          </span>
        </Link>

        <div className="hidden md:flex gap-8 font-medium">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className={`transition-colors hover:text-indigo-600 ${
                isActive(link.href) ? 'text-indigo-600 font-bold' : 'text-slate-500'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/templates"
            className="hidden sm:inline-flex group relative px-6 py-2.5 bg-slate-900 text-white rounded-full font-semibold overflow-hidden transition-all hover:pr-10"
          >
            <span className="relative z-10">Get Started</span>
            <ArrowRight className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300" size={18} />
          </Link>

          <button 
            className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-200 shadow-smanimate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                className={`text-lg font-medium transition-colors hover:text-indigo-600 ${
                  isActive(link.href) ? 'text-indigo-600 font-bold' : 'text-slate-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/templates"
              className="mt-2 flex items-center justify-center gap-2 w-full py-3 bg-indigo-600 text-white rounded-xl font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
