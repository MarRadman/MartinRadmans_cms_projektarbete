export interface ProjectData {
  title: string;
  content: string;
  images: string[];
  slug: string;
}

export interface PageData {
  title: string;
  content: string;
  image: string[];
  images: string[];
  address?: string;
  email?: string;
  phone?: string;
  github?: string;
  linkedin?: string;
  projects?: ProjectData[];
}
