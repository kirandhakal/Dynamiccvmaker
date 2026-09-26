import { createPageMetadata } from '../../src/seo/metadata';
import LegalPage from '../../src/components/LegalPage';
export const metadata = createPageMetadata({ title: 'Terms of Use | CV Maker', description: 'The terms that apply when you use CV Maker to create and export a resume.', path: '/terms' });
export default function Page() { return <LegalPage type='terms' />; }
