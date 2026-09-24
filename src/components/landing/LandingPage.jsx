import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Hero from './Hero';
import TemplateSection from './TemplateSection';
import FeaturesSection from './FeaturesSection';
import HowItWorks from './HowItWorks';
// import Pricing from './Pricing';
// import Testimonials from './Testimonials';
import ContactSection from './ContactSection';
import Footer from './Footer';
import SectionTypes from './SectionTypes';
import Seo from '../Seo';

const seoByPath = {
  '/': ['Free CV Maker | Build an ATS-Friendly Resume Online', 'Create a professional, ATS-friendly CV for your career. Choose a role-specific template, customize every section, and export to PDF, Word, or Markdown.', 'free CV maker, online resume builder, ATS friendly resume, professional CV builder, resume templates'],
  '/templates': ['Professional CV Templates for Every Career | CV Maker', 'Explore CV templates for technology, healthcare, education, business, creative work, and more than 75 job roles.', 'CV templates, resume templates, job specific resume, professional CV examples, career templates'],
  '/features': ['Flexible Resume Builder Features | CV Maker', 'Edit rich text, reorder resume sections, customize contact details, preview changes live, and export your finished CV.', 'resume builder features, drag and drop CV, CV editor, ATS resume maker, PDF resume export'],
  '/how-it-works': ['How to Build a Professional CV Online | CV Maker', 'Choose your profession, personalize role-specific content, reorder sections, and export a polished CV in three simple steps.', 'how to make a CV, create resume online, CV writing steps, online resume creator'],
  '/pricing': ['Free Online CV Builder | CV Maker', 'Start building a professional resume online with flexible templates and simple export options.', 'free resume builder, CV maker pricing, create CV free'],
  '/contact': ['Contact CV Maker | Resume Builder Support', 'Contact the CV Maker creator for help, feedback, or questions about templates and the resume editor.', 'contact CV Maker, resume builder support, CV template help'],
};

export default function LandingPage() {
  const location = useLocation();
  const [title, description, keywords] = seoByPath[location.pathname] || seoByPath['/'];

  useEffect(() => {
    // Scroll to section based on path
    const sectionId = location.pathname.substring(1);
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen bg-[#fafafa] text-slate-900 font-sans selection:bg-indigo-100">
      <Seo title={title} description={description} keywords={keywords} path={location.pathname} />
      <Navbar />
      <Hero />
      <TemplateSection />
      <SectionTypes />
      <HowItWorks />
      <FeaturesSection />
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      <ContactSection />
      <Footer />
    </div>
  );
}
