import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Seo from './Seo';

const content = {
  privacy: {
    title: 'Privacy Policy',
    description: 'How CV Maker handles the information you enter while creating a resume.',
    keywords: 'CV Maker privacy policy, resume builder privacy, CV data protection',
    sections: [
      ['Information you provide', 'CV Maker processes the information you enter into the editor, such as your name, contact details, work history, education, skills, and links.'],
      ['Local storage', 'Your CV content and selected template may be saved in your browser’s local storage so you can continue editing. This data remains on your device unless you clear your browser data.'],
      ['Exports', 'PDF, Word, and Markdown exports are created at your request. Review exported files before sharing them with employers or other people.'],
      ['Third-party links', 'The website may link to external services. Their privacy practices are governed by their own policies.'],
      ['Contact', 'Questions about this policy can be sent to info@dhakalkiran.com.np.'],
    ],
  },
  terms: {
    title: 'Terms of Use',
    description: 'The terms that apply when you use CV Maker to create and export a resume.',
    keywords: 'CV Maker terms, resume builder terms of use, online CV creator terms',
    sections: [
      ['Using CV Maker', 'You may use CV Maker to create, edit, and export resumes for lawful personal or professional purposes.'],
      ['Your content', 'You remain responsible for the accuracy, legality, and ownership of the information you enter or export. Do not enter content you are not allowed to use.'],
      ['No guarantee', 'Templates and guidance are provided as tools. CV Maker does not guarantee interviews, employment, or compatibility with every recruitment system.'],
      ['Availability', 'Features may be improved, changed, or discontinued. We aim to keep the service useful and available but cannot promise uninterrupted access.'],
      ['Contact', 'Questions about these terms can be sent to info@dhakalkiran.com.np.'],
    ],
  },
};

export default function LegalPage({ type }) {
  const page = content[type];
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12 text-slate-800">
      <Seo title={`${page.title} | CV Maker`} description={page.description} keywords={page.keywords} path={`/${type}`} />
      <div className="mx-auto max-w-3xl">
        <Link to="/" className="mb-10 inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-800"><ArrowLeft size={16} /> Back to CV Maker</Link>
        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">CV Maker</p>
          <h1 className="mt-3 text-4xl font-black text-slate-950">{page.title}</h1>
          <p className="mt-3 text-sm text-slate-500">Last updated: September 24, 2026</p>
          <div className="mt-10 space-y-8">
            {page.sections.map(([heading, body]) => <section key={heading}><h2 className="text-xl font-bold text-slate-900">{heading}</h2><p className="mt-2 leading-7 text-slate-600">{body}</p></section>)}
          </div>
        </div>
      </div>
    </main>
  );
}
