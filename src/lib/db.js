const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export const client = new MongoClient(process.env.MONGODB_URL, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export const db = client.db('builder');

export async function getPages() {
  return db.collection('pages').find().toArray();
}

/**
document example:
{
  "seo": {
    "title": "Do you need help?",
    "description": "Do you need help?"
  },
  "slug": "help",
  "tokens": {
    "--color": "black",
    "--bg": "white",
    "--font-size": "16px",
    "--font-family": "'Roboto', sans-serif;",
    "--font-weight": "normal",
    "--gap": "1rem"
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
  ]
}
*/
export async function getPageById(id) {
  return db.collection('pages').findOne({ _id: ObjectId(id) });
}

export async function getPageBySlug(slug) {
  return db.collection('pages').findOne({ slug });
}

export async function createPage(page) {
  return db.collection('pages').insertOne(page);
}

export async function updatePage(id, page) {
  return db.collection('pages').updateOne({ _id: ObjectId(id) }, { $set: page });
}

export async function deletePage(id) {
  return db.collection('pages').deleteOne({ _id: ObjectId(id) });
}
