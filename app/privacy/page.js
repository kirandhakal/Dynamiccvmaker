import { createPageMetadata } from '../../src/seo/metadata';
import LegalPage from '../../src/components/LegalPage';
export const metadata = createPageMetadata({ title: 'Privacy Policy | CV Maker', description: 'How CV Maker handles the information you enter while creating a resume.', path: '/privacy' });
export default function Page() { return <LegalPage type='privacy' />; }
