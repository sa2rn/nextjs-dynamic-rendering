import { cache } from 'react';
import { notFound } from 'next/navigation';
import { getPageBySlug, getPages } from '@/lib/db';
import renderer from '@/lib/renderer';

const getPage = cache(async (slug) => {
  const page = await getPageBySlug(slug);
  if (!page) {
    notFound();
  }
  return page;
});

export default async function Page({ params }) {
  const page = await getPage(params.slug);
  return renderer(page.blocks);
}

export async function generateMetadata({ params }) {
  const { seo } = await getPage(params.slug);
  return seo;
}

// Only when you need to generate static pages
export async function generateStaticParams() {
  const pages = await getPages();
  return pages.map(({ slug }) => ({ slug }));
}