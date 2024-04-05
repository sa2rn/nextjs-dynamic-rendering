import { getPageBySlug } from '@/lib/queries';
import './themes.css';

export async function generateMetadata({ params }) {
  const { seo } = await getPageBySlug(params.slug);
  return seo;
}

export const viewport = {
  themeColor: 'black',
};

export default async function PageLayout({ children, params }) {
  const { theme, tokens } = await getPageBySlug(params.slug);

  return (
    <body className={theme} style={tokens}>
      {children}
    </body>
  );
}
