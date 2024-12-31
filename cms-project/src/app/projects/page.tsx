import { getPageContent } from "../components/getPageContent";
import { PageData } from "@/app/types";
import Link from "next/link";
import { Box, Typography, ImageList, ImageListItem } from "@mui/material";

const Projects = async () => {
  const pageData: PageData | null = await getPageContent("projects");

  if (!pageData) {
    return <Typography variant="h1">Projects content not found</Typography>;
  }

  return (
    <Box>
      <Typography variant="h1">{pageData.title}</Typography>
      {pageData.projects &&
        pageData.projects.map((project, index) => (
          <Box key={index} mb={4}>
            <Typography variant="h2">{project.title}</Typography>
            <Typography variant="body1">{project.content}</Typography>
            <ImageList rowHeight={160} cols={3} gap={8}>
              {project.images.map((image, imgIndex) => (
                <ImageListItem key={imgIndex} cols={1}>
                  <img src={image} alt={`Image ${imgIndex + 1}`} />
                </ImageListItem>
              ))}
            </ImageList>
            <Link href={`/projects/${project.slug}`}>Read more</Link>
          </Box>
        ))}
    </Box>
  );
};

export default Projects;
