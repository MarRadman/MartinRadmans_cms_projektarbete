import { fetchData } from "../lib/contentful";
import { PageData, ProjectData } from "@/app/types";

export const getPageContent = async (
  contentType: string,
  slug?: string,
  category?: string
): Promise<PageData | null> => {
  const pageData = await fetchData(contentType, slug, category);
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
    if (!Array.isArray(content)) {
      return ""; // Return an empty string if content is not an array
    }
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

  const extractTechnologies = (content: any[]): string[] => {
    if (!Array.isArray(content)) {
      return []; // Return an empty array if content is not an array
    }
    return content
      .flatMap((item) => {
        if (item.nodeType === "text") {
          return [item.value];
        } else if (item.content) {
          return extractTechnologies(item.content);
        }
        return [];
      })
      .filter((tech) => tech.trim() !== ""); // Filter out empty strings
  };

  const extractImages = (imagesField: any[]): string[] => {
    if (!Array.isArray(imagesField)) {
      return []; // Return an empty array if imagesField is not an array
    }
    return imagesField.map((image: any) =>
      makeAbsoluteUrl(image.fields.file.url)
    );
  };

  const extractProjects = (projects: any[]): ProjectData[] => {
    if (!Array.isArray(projects)) {
      return []; // Return an empty array if projects is not an array
    }
    return projects.map((project) => {
      const projectFields = project.fields;
      const projectContent = extractText(projectFields.content?.content || []);
      const projectDescription = projectFields.description || "";
      const projectImages = extractImages(projectFields.images || []);
      const projectSlug = project.fields.slug;
      const projectTechnologies = extractTechnologies(
        projectFields.technologies?.content || []
      );
      const projectUrl = projectFields.url || "";

      return {
        title: projectFields.title || "Untitled",
        content: projectContent,
        description: projectDescription,
        images: projectImages,
        slug: projectSlug,
        technologies: projectTechnologies,
        url: projectUrl,
        category: projectFields.category || "",
      };
    });
  };

  const textContent = extractText(page.content?.content || []);
  const textDescription = extractText(page.description?.de || []);
  const technologies = extractTechnologies(page.technologies?.content || []);
  const images = extractImages(page.images || []);
  const url = page.url || "";
  const projects = page.projects ? extractProjects(page.projects) : [];

  // Filter projects by category if category is provided
  const filteredProjects = category
    ? projects.filter((project) => project.category === category)
    : projects;

  // Extract single image from the 'image' field if it exists
  const image = page.image?.fields?.file?.url
    ? makeAbsoluteUrl(page.image.fields.file.url)
    : "";

  // Extract unique categories that exist.
  const categories = Array.from(
    new Set(projects.map((project) => project.category))
  );

  return {
    title: String(page.title) || "Untitled",
    content: textContent,
    description: textDescription,
    technologies,
    url,
    images,
    image: image ? [image] : [], // Ensure image is always an array of strings
    address: String(page.address) || "",
    email: String(page.email) || "",
    phone: String(page.phone) || "",
    github: String(page.github) || "",
    linkedin: String(page.linkedin) || "",
    projects: filteredProjects,
    categories,
  };
};
