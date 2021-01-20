const contentful = require("contentful");
const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "tjw4hvfllnv2",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "QOE05gDe_GV4dkdX_TjYmNGG6FOtWf9KGHxbWLh6BXo",
});

// // This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
// client
//   .getEntry("5PeGS2SoZGSa4GuiQsigQu")
//   .then((entry) => console.log(entry))
//   .catch((err) => console.log(err));

const { getSpace, getEntries, getEntry } = client;

export { client, getSpace, getEntries, getEntry };
