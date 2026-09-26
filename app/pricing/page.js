import { createPageMetadata } from '../../src/seo/metadata';
import LandingPage from '../../src/components/landing/LandingPage';
export const metadata = createPageMetadata({ title: 'Free Online CV Builder | CV Maker', description: 'Start building a professional resume online with flexible templates and simple export options.', path: '/pricing' });
export default function Page() { return <LandingPage pathname='/pricing' />; }
