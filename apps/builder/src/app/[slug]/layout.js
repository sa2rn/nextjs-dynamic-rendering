import api from '@/lib/api';
import './themes.css';

export async function generateMetadata({ params }) {
  const { metadata } = await api.pages.getBySlug(params.slug);
  return metadata;
}

export const viewport = {
  themeColor: 'black',
};

export default async function PageLayout({ children, params }) {
  const { theme, tokens } = await api.pages.getBySlug(params.slug);

  return (
    <body className={theme} style={tokens}>
      {children}
    </body>
  );
}
