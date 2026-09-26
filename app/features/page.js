import { createPageMetadata } from '../../src/seo/metadata';
import LandingPage from '../../src/components/landing/LandingPage';
export const metadata = createPageMetadata({ title: 'Flexible Resume Builder Features | CV Maker', description: 'Edit rich text, reorder resume sections, customize contact details, preview changes live, and export your finished CV.', path: '/features' });
export default function Page() { return <LandingPage pathname='/features' />; }
