import { createPageMetadata } from '../../seo/metadata';
import { getPageMetadata } from '../../data/pages';
import LandingPage from '../../components/landing/LandingPage';
export const metadata = createPageMetadata({ ...getPageMetadata('/how-it-works'), path: '/how-it-works' });
export default function Page() { return <LandingPage pathname='/how-it-works' />; }
