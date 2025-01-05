export interface ProjectData {
  title: string;
  content: string;
  description: string;
  images: string[];
  slug: string;
  technologies?: string[];
  url?: string;
}

export interface PageData {
  title: string;
  content: string;
  description: string;
  image: string[];
  images: string[];
  url: string;
  technologies: string[];
  address?: string;
  email?: string;
  phone?: string;
  github?: string;
  linkedin?: string;
  projects?: ProjectData[];
}
