import { getPageBySlug, getPages } from '@/lib/queries';
import renderer from '@/lib/renderer';

export default async function Page({ params }) {
  const page = await getPageBySlug(params.slug);
  return renderer(page.blocks);
}

// Only when you need to generate static pages
// export async function generateStaticParams() {
//   const pages = await getPages();
//   return pages.map(({ slug }) => ({ slug }));
// }
