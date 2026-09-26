import { createPageMetadata } from '../../seo/metadata';
import { getPageMetadata } from '../../data/pages';
import LandingPage from '../../components/landing/LandingPage';
export const metadata = createPageMetadata({ ...getPageMetadata('/pricing'), path: '/pricing' });
export default function Page() { return <LandingPage pathname='/pricing' />; }
