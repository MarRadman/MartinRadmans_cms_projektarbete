import { getPageContent, PageData } from "../components/getPageContent";
import Image from "next/image";
import Link from "next/link";
import { Box, Typography } from "@mui/material";

const Projects = async () => {
  const pageData: PageData | null = await getPageContent("projects");

  if (!pageData) {
    return <Typography variant="h1">Projects content not found</Typography>;
  }

  console.log("Page Data:", pageData);

  return (
    <Box>
      <Typography variant="h1">{pageData.title}</Typography>
      {pageData.projects &&
        pageData.projects.map((project, index) => (
          <Box key={index} mb={4}>
            <Typography variant="h2">{project.title}</Typography>
            <Typography variant="body1">{project.content}</Typography>
            <Link href={`/projects/${project.slug}/page`}>Read more</Link>
            {project.images.map((image, imgIndex) => (
              <Box
                key={imgIndex}
                sx={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "500px",
                  height: "auto",
                }}>
                <Image
                  src={image}
                  alt={`Image ${imgIndex + 1}`}
                  width={500}
                  height={300}
                />
              </Box>
            ))}
          </Box>
        ))}
    </Box>
  );
};

export default Projects;
