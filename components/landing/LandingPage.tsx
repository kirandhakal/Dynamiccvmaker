'use client';

import React, { useEffect } from 'react';
import type { SitePath } from '../../types/pages';
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

interface LandingPageProps { pathname?: SitePath }

export default function LandingPage({ pathname = '/' }: LandingPageProps) {

  useEffect(() => {
    // Scroll to section based on path
    const sectionId = pathname.substring(1);
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname]);

  return (
    <div className="relative min-h-screen bg-[#fafafa] text-slate-900 font-sans selection:bg-indigo-100">
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
