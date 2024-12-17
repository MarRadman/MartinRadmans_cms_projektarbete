import { createClient } from "contentful";

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
});

export const fetchData = async (contentType: string) => {
  const Data = await client.getEntries({ content_type: contentType });
  return Data.items;
};
