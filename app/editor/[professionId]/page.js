import { notFound } from 'next/navigation';
import EditorPage from '../../../src/components/landing/EditorPage';
import { professions } from '../../../src/data/professions';
import { createPageMetadata } from '../../../src/seo/metadata';

export function generateStaticParams() { return professions.map(({ id }) => ({ professionId: id })); }
export async function generateMetadata({ params }) {
  const { professionId } = await params;
  const profession = professions.find((item) => item.id === professionId);
  if (!profession) return createPageMetadata({ title: 'CV Builder | CV Maker', description: 'Create a professional CV with CV Maker.', path: `/editor/${professionId}`, noIndex: true });
  return createPageMetadata({ title: `${profession.name} CV Templates | CV Maker`, description: `Choose a ${profession.name.toLowerCase()} role and build a tailored, ATS-friendly professional CV.`, path: `/editor/${professionId}` });
}
export default async function Page({ params }) {
  const { professionId } = await params;
  if (!professions.some((item) => item.id === professionId)) notFound();
  return <EditorPage professionId={professionId} />;
}
