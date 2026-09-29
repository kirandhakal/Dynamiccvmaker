import Link from 'next/link';
import { ArrowLeft, FileQuestion } from 'lucide-react';
import Navbar from '../components/landing/Navbar';
import Footer from '../components/landing/Footer';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-[65vh] items-center bg-gradient-to-b from-indigo-50 via-white to-white px-6 py-20">
        <div className="mx-auto max-w-xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600">
            <FileQuestion aria-hidden="true" size={32} />
          </div>
          <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">404 · Page not found</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">We couldn’t find that page.</h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            The link may be outdated, or the page may have moved. You can return home or browse the CV templates.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link href="/" className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700">
              <ArrowLeft aria-hidden="true" size={18} /> Back to home
            </Link>
            <Link href="/templates" className="inline-flex items-center rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-indigo-300 hover:text-indigo-700">
              Explore templates
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
