import { createPageMetadata } from '../../src/seo/metadata';
import LandingPage from '../../src/components/landing/LandingPage';
export const metadata = createPageMetadata({ title: 'How to Build a Professional CV Online | CV Maker', description: 'Choose your profession, personalize role-specific content, reorder sections, and export a polished CV in three simple steps.', path: '/how-it-works' });
export default function Page() { return <LandingPage pathname='/how-it-works' />; }
