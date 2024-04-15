import { notFound } from 'next/navigation';

const BASE_URL = 'https://eu-central-1.aws.data.mongodb-api.com/app/data-dgkab/endpoint/data/v1/action';
const DATABASE = 'builder';
const DATA_SOURCE = 'Nextjs-builder';

async function request(action, data) {
  const response = await fetch(`${BASE_URL}/${action}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': process.env.MONGODB_API_KEY,
    },
    body: JSON.stringify(data)
  });

  const json = await response.json();
  return json;
}

const api = {
  pages: {
    /**
    {
      "_id": {
        "$oid": "660bc16db01eff4b5217ef7c"
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
            },
            {
              "type": "StyledLink",
              "props": {
                "href": "https://google.com",
                "$borderRadius": "30px",
                "$paddingX": "4px",
                "$paddingY": "10px",
                "$borderStyle": "solid",
                "$borderWidth": "2px",
                "$textDecoration": "none",
                "target": "_blank"
              },
              "children": "Try to search with google"
            }
          ]
        }
      ],
      "theme": "dark",
      "metadata": {
        "title": "Do you need help?",
        "description": "Do you need help?"
      }
    }
     */
    async getBySlug(slug) {
      const { document } = await request('findOne', {
        collection: 'pages',
        database: DATABASE,
        dataSource: DATA_SOURCE,
        filter: { slug }
      });

      if (!document) notFound();
      return document;
    },

    async getMany() {
      const { documents } = await request('find', {
        collection: 'pages',
        database: DATABASE,
        dataSource: DATA_SOURCE,
      });
      return documents;
    }
  }
};

export default api;
