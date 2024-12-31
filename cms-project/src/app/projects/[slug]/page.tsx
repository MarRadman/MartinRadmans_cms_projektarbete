import { getPageContent } from "../../components/getPageContent";
import { PageData } from "@/app/types";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const ProjectPage = async ({ params }: { params: { slug: string } }) => {
  const projectData: PageData | null = await getPageContent(
    "project",
    params.slug
  );

  if (!projectData) {
    return <Typography variant="h1">Project content not found</Typography>;
  }

  return (
    <Box>
      <Typography variant="h1">{projectData.title}</Typography>
      <Typography variant="body1">{projectData.content}</Typography>
      {projectData.images.map((image, index) => (
        <Box
          key={index}
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: "500px",
            height: "auto",
          }}>
          <Image
            src={image}
            alt={`Image ${index + 1}`}
            width={500}
            height={300}
          />
          <Link href="/projects">Back to projects</Link>
        </Box>
      ))}
    </Box>
  );
};

export default ProjectPage;
