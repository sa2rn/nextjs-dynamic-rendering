import { cache } from 'react';
import { notFound } from 'next/navigation';
import { db } from '@/lib/db';

/**
document example:
{
  "_id": {
    "$oid": "660bc16db01eff4b5217ef7c"
  },
  "seo": {
    "title": "Do you need help?",
    "description": "Do you need help?"
  },
  "slug": "help",
  "tokens": {
    "--font-size": "18px",
    "--bg": "#dfdfdf"
  },
  "blocks": [
    {
      "type": "Text",
      "props": {
        "style": {
          "--color": "#61dafb",
          "--font-size": "24px",
          "--font-weight": "bold",
          "--gap": "0.5rem"
        },
        "text": "createElement"
      }
    },
    {
      "type": "Box",
      "props": {
        "style": {
          "--bg": "#f0f0f0",
          "--padding": "10px"
        }
      },
      "children": [
        {
          "type": "Text",
          "props": {
            "style": {
              "--color": "black"
            },
            "text": "createElement lets you create a React element. It serves as an alternative to writing JSX."
          }
        }
      ]
    }
  ],
  "theme": "dark"
}
*/
export const getPageBySlug = cache(async (slug) => {
  const page = await db.collection('pages').findOne({ slug });
  console.log('getPageBySlug', slug);
  if (!page) notFound();
  return page;
});

export const getPages = cache(async () => {
  return db.collection('pages').find().toArray();
});
