import { createPageMetadata } from '../../seo/metadata';
import { getPageMetadata } from '../../data/pages';
import LandingPage from '../../components/landing/LandingPage';
export const metadata = createPageMetadata({ ...getPageMetadata('/contact'), path: '/contact' });
export default function Page() { return <LandingPage pathname='/contact' />; }
