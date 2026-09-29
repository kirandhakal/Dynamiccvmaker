import Link from 'next/link';
import type { SitePath } from '../../types/pages';
import { getPageMetadata } from '../../data/pages';
import Navbar from './Navbar';
import Hero from './Hero';
import TemplateSection from './TemplateSection';
import FeaturesSection from './FeaturesSection';
import HowItWorks from './HowItWorks';
import ContactSection from './ContactSection';
import Footer from './Footer';
import SectionTypes from './SectionTypes';

export default function LandingPage({ pathname = '/' }: { pathname?: SitePath }) {
  const home = pathname === '/';
  const metadata = getPageMetadata(pathname);
  return (
    <div className="relative min-h-screen bg-[#fafafa] text-slate-900 font-sans selection:bg-indigo-100">
      <Navbar />
      <main>
        {home ? <Hero /> : <header className="mx-auto max-w-5xl px-6 py-16 text-center">
          <h1 className="text-4xl font-black tracking-tight md:text-5xl">{metadata.title.split(' | ')[0]}</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">{metadata.description}</p>
        </header>}
        {(home || pathname === '/templates') && <TemplateSection />}
        {(home || pathname === '/features') && <SectionTypes />}
        {(home || pathname === '/how-it-works') && <HowItWorks />}
        {(home || pathname === '/features') && <FeaturesSection />}
        {pathname === '/pricing' && <section className="mx-auto max-w-3xl px-6 pb-20">
          <h2 className="text-2xl font-bold">Create and export your CV for free</h2>
          <p className="mt-4 leading-8">CV Maker requires no account or subscription. Choose a profession and role, edit the sample content, and export your resume as PDF, Word (.doc), or Markdown (.md). Your draft is saved in this browser; download a copy before clearing browser data or switching devices.</p>
          <Link className="mt-6 inline-block font-semibold text-indigo-600" href="/templates">Choose a free CV template →</Link>
        </section>}
        {(home || pathname === '/contact') && <ContactSection />}
        {(home || pathname === '/how-it-works') && <section className="mx-auto max-w-4xl px-6 py-16">
          <h2 className="text-3xl font-bold">CV builder questions</h2>
          <h3 className="mt-8 text-xl font-semibold">Do I need an account?</h3>
          <p className="mt-3 leading-7">No. Choose a template and start editing in your browser. Download your finished CV to keep a copy.</p>
          <h3 className="mt-8 text-xl font-semibold">Which format should I export?</h3>
          <p className="mt-3 leading-7">Use PDF to preserve the layout, Word (.doc) for further editing, or Markdown (.md) for plain-text workflows. Follow the employer’s requested file format.</p>
          <h3 className="mt-8 text-xl font-semibold">Will my resume pass every ATS?</h3>
          <p className="mt-3 leading-7">No builder can guarantee an applicant tracking system result. Use clear headings, relevant experience, and truthful skills, then check the exported document before applying.</p>
        </section>}
      </main>
      <Footer />
    </div>
  );
}
