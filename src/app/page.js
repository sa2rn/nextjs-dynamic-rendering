import renderer from "@/lib/renderer";

// mocked data
async function getData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(
      {
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
            "children": [{
              "type": "Text",
              "props": {
                "style": {
                  "--color": "black",
                },
                "text": "createElement lets you create a React element. It serves as an alternative to writing JSX."
              }
            }]
          }
        ]
      }
    ), 200);
  }
)}

export default async function Home() {
  const data = await getData();
  return renderer(data.blocks);
}
