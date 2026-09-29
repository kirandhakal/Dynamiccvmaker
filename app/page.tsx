import { createPageMetadata } from '../seo/metadata';
import { getPageMetadata } from '../data/pages';
import LandingPage from '../components/landing/LandingPage';
export const metadata = createPageMetadata({ ...getPageMetadata('/'), path: '/' });
export default function Home() { return <LandingPage pathname="/" />; }
