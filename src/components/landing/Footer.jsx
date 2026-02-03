import React from 'react';
import { Cpu, Github, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const footerLinks = [
    {
      title: "Product",
      links: ["Templates", "Features", "Pricing", "Editor"]
    },
    {
      title: "Resources",
      links: ["Resume Guide", "Blog", "FAQ", "Support"]
    },
    {
      title: "Company",
      links: ["About Us", "Contact", "Privacy", "Terms"]
    }
  ];
  const footerHrefByLabel = {
    "Templates": "#templates",
    "Features": "#features",
    "Pricing": "#pricing",
    "Editor": "#editor",
    "Resume Guide": "#resume-guide",
    "Blog": "#blog",
    "FAQ": "#faq",
    "Support": "#support",
    "About Us": "#about",
    "Contact": "#contact",
    "Privacy": "#privacy",
    "Terms": "#terms",
  };

  return (
    <footer className="pt-20 pb-10 border-t border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-tr from-indigo-600 to-violet-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                <Cpu size={20} />
              </div>
              <span className="text-xl font-black text-slate-800 tracking-tight">CV<span className="text-indigo-600">MAKER</span></span>
            </div>
            <p className="text-slate-500 font-medium max-w-xs mb-6">
              Empowering job seekers to build professional, ATS-friendly resumes in minutes.
            </p>
            <div className="flex gap-4">
              <a href="https://x.com/dhakaldiary" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="https://www.linkedin.com/in/kirandhakal7/" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="https://github.com/kirandhakal" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                <Github size={18} />
              </a>
            </div>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-bold text-slate-900 mb-6">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href={footerHrefByLabel[link] || "/"}
                      className="text-slate-500 hover:text-indigo-600 font-medium transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 font-medium text-sm">
            © 2026 CV MAKER. Built with passion for careers.
          </p>
          <div className="flex items-center gap-2 text-sm text-slate-400 font-medium">
            <Mail size={16} />
            info@dhakalkiran.com.np
          </div>
        </div>
      </div>
    </footer>
  );
}
