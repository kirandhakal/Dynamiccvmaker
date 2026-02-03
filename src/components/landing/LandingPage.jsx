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

export default function LandingPage() {
  const location = useLocation();

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
      <Navbar />
      <Hero />
      <TemplateSection />
      <HowItWorks />
      <FeaturesSection />
      {/* <Testimonials /> */}
      {/* <Pricing /> */}
      <ContactSection />
      <Footer />
    </div>
  );
}
