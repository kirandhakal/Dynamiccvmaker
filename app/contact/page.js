import { createPageMetadata } from '../../src/seo/metadata';
import LandingPage from '../../src/components/landing/LandingPage';
export const metadata = createPageMetadata({ title: 'Contact CV Maker | Resume Builder Support', description: 'Contact the CV Maker creator for help, feedback, or questions about templates and the resume editor.', path: '/contact' });
export default function Page() { return <LandingPage pathname='/contact' />; }
