import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import type { PageProps } from '../../../types/next';
import EditorPage from '../../../components/landing/EditorPage';
import { professions } from '../../../data/professions';
import { createPageMetadata } from '../../../seo/metadata';
import { landingContent } from '../../../data/pages';

export function generateStaticParams(): Array<{ professionId: string }> { return professions.map(({ id }) => ({ professionId: id })); }
export async function generateMetadata({ params }: PageProps<'professionId'>): Promise<Metadata> {
  const { professionId } = await params;
  const profession = professions.find((item) => item.id === professionId);
  if (!profession) return createPageMetadata({ title: landingContent.editor.fallbackTitle, description: landingContent.editor.fallbackDescription, path: `/editor/${professionId}`, noIndex: true });
  const editorCopy = landingContent.editor;
  return createPageMetadata({ title: `${profession.name} ${editorCopy.titleSuffix}`, description: editorCopy.descriptionTemplate.replace('{profession}', profession.name.toLowerCase()), path: `/editor/${professionId}` });
}
export default async function Page({ params }: PageProps<'professionId'>) {
  const { professionId } = await params;
  if (!professions.some((item) => item.id === professionId)) notFound();
  return <EditorPage professionId={professionId} />;
}
