import { createPageMetadata } from '../../seo/metadata';
import { getPageMetadata } from '../../data/pages';
import LegalPage from '../../components/LegalPage';
export const metadata = createPageMetadata({ ...getPageMetadata('/privacy'), path: '/privacy' });
export default function Page() { return <LegalPage type='privacy' />; }
