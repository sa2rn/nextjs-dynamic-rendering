import { notFound } from 'next/navigation'
import { getPageBySlug } from '@/lib/db';
import renderer from '@/lib/renderer';

async function fetchPage(slug) {
  const page = await getPageBySlug(slug);
  if (!page) {
    notFound();
  }
  return page;
}

export default async function Page({ params }) {
  const page = await fetchPage(params.slug);
  return renderer(page.blocks);
}

export async function generateMetadata({ params }) {
  const page = await fetchPage(params.slug);
  return {
    title: page.title,
    description: page.description,
  };
}
