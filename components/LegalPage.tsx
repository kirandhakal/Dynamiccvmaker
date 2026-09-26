'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { legalContent } from '../data/pages';
import type { LegalPageContent } from '../types/pages';

interface LegalPageProps { type: 'privacy' | 'terms' }

export default function LegalPage({ type }: LegalPageProps) {
  const page: LegalPageContent = legalContent[type];
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12 text-slate-800">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="mb-10 inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-800"><ArrowLeft size={16} /> Back to CV Maker</Link>
        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">CV Maker</p>
          <h1 className="mt-3 text-4xl font-black text-slate-950">{page.title}</h1>
          <p className="mt-3 text-sm text-slate-500">Last updated: {page.lastUpdated}</p>
          <div className="mt-10 space-y-8">
            {page.sections.map(({ heading, body }) => <section key={heading}><h2 className="text-xl font-bold text-slate-900">{heading}</h2><p className="mt-2 leading-7 text-slate-600">{body}</p></section>)}
          </div>
        </div>
      </div>
    </main>
  );
}
