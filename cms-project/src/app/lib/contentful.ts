import { createClient } from "contentful";

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
});

export const fetchEntries = async (contentType: string) => {
  const entries = await client.getEntries({ content_type: contentType });
  return entries.items;
};
