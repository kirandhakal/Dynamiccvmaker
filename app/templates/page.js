import { createPageMetadata } from '../../src/seo/metadata';
import LandingPage from '../../src/components/landing/LandingPage';
export const metadata = createPageMetadata({ title: 'Professional CV Templates for Every Career | CV Maker', description: 'Explore CV templates for technology, healthcare, education, business, creative work, and more than 75 job roles.', path: '/templates' });
export default function Page() { return <LandingPage pathname='/templates' />; }
