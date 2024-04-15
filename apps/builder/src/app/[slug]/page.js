import api from '@/lib/api';
import Renderer from 'renderer';
import * as blocks from 'renderer/blocks';

const renderer = new Renderer(blocks);

export default async function Page({ params }) {
  const page = await api.pages.getBySlug(params.slug);
  return renderer.render(page.blocks);
}

// Only when you need to generate static pages
// export async function generateStaticParams() {
//   const pages = await api.pages.getMany();
//   return pages.map(({ slug }) => ({ slug }));
// }
