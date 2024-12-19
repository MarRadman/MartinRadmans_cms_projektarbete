import { fetchData } from "../lib/contentful";

export const getPageContent = async (pageId: string) => {
  const pageData = await fetchData(pageId);
  const page = pageData[0]?.fields;

  if (!page) {
    return null;
  }

  const extractContent = (content: any): { text: string; images: string[] } => {
    let text = "";
    let images: string[] = [];

    content.forEach((item: any) => {
      if (item.nodeType === "text") {
        text += item.value;
      } else if (
        item.nodeType === "embedded-asset-block" &&
        item.data?.target?.fields?.file?.url
      ) {
        images.push(item.data.target.fields.file.url);
      } else if (item.content) {
        const extracted = extractContent(item.content);
        text += extracted.text;
        images = images.concat(extracted.images);
      }
    });

    return { text, images };
  };

  let pageContent = { text: "", images: [] as string[] };
  if (
    page.content &&
    typeof page.content === "object" &&
    "content" in page.content
  ) {
    pageContent = extractContent(page.content.content || []);
  }

  // Extract images from the 'image' field if it exists
  if (page.image?.fields?.file?.url) {
    pageContent.images.push(page.image.fields.file.url);
  }

  return {
    title: page.title || "Untitled",
    content: pageContent.text,
    images: pageContent.images,
  };
};
