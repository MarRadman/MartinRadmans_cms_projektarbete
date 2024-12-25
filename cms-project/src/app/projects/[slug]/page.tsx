import { getPageContent, PageData } from "../../components/getPageContent";
import { Box, Typography } from "@mui/material";

const ProjectPage = async () => {
  const { slug } = router.query;

  const projectData: PageData | null = await getPageContent(slug as string);

  if (!projectData) {
    return <Typography variant="h1">Project content not found</Typography>;
  }

  console.log(projectData.slug);

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
        </Box>
      ))}
    </Box>
  );
};

export default ProjectPage;
