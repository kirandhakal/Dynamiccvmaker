import { createPageMetadata } from '../src/seo/metadata';
import LandingPage from '../src/components/landing/LandingPage';
export const metadata = createPageMetadata({ title: 'Free CV Maker | Build an ATS-Friendly Resume Online', description: 'Create a professional, ATS-friendly CV with role-specific templates, flexible sections, live preview, and PDF, Word, or Markdown export.', path: '/' });
export default function Home() { return <LandingPage pathname="/" />; }
