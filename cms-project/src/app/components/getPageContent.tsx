import { fetchData } from "../lib/contentful";
import { PageData, ProjectData } from "@/app/types";

export const getPageContent = async (
  contentType: string,
  slug?: string
): Promise<PageData | null> => {
  const pageData = await fetchData(contentType, slug);
  const page = pageData[0]?.fields;

  if (!page) {
    return null;
  }

  const makeAbsoluteUrl = (url: string): string => {
    if (url.startsWith("//")) {
      return `https:${url}`;
    }
    return url;
  };

  const extractText = (content: any[]): string => {
    return content
      .map((item) => {
        if (item.nodeType === "text") {
          return item.value;
        } else if (item.content) {
          return extractText(item.content);
        }
        return "";
      })
      .join(" ");
  };

  const extractImages = (imagesField: any[]): string[] => {
    return imagesField.map((image: any) =>
      makeAbsoluteUrl(image.fields.file.url)
    );
  };

  const extractProjects = (projects: any[]): ProjectData[] => {
    return projects.map((project) => {
      const projectFields = project.fields;
      const projectContent = extractText(projectFields.content?.content || []);
      const projectImages = extractImages(projectFields.images || []);
      const projectSlug = project.fields.slug;

      return {
        title: projectFields.title || "Untitled",
        content: projectContent,
        images: projectImages,
        slug: projectSlug,
      };
    });
  };

  const textContent = extractText(page.content?.content || []);
  const images = extractImages(page.images || []);
  const projects = page.projects ? extractProjects(page.projects) : [];

  // Extract single image from the 'image' field if it exists
  const image = page.image?.fields?.file?.url
    ? makeAbsoluteUrl(page.image.fields.file.url)
    : "";

  return {
    title: String(page.title) || "Untitled",
    content: textContent,
    images,
    image,
    address: String(page.address) || "",
    email: String(page.email) || "",
    phone: String(page.phone) || "",
    github: String(page.github) || "",
    linkedin: String(page.linkedin) || "",
    projects,
  };
};
