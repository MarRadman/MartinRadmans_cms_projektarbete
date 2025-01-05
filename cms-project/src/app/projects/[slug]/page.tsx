import { getPageContent } from "@/app/components/getPageContent";
import { PageData } from "@/app/types";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  Button,
  Stack,
  Chip,
} from "@mui/material";
import Link from "next/link";

const ProjectPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const projectData: PageData | null = await getPageContent("project", slug);

  if (!projectData) {
    return <Typography variant="h1">Project content not found</Typography>;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 3,
      }}>
      <Stack spacing={2} alignItems="center">
        <Card sx={{ maxWidth: 500 }}>
          <CardMedia
            component="img"
            alt="Main Image"
            height="300"
            image={projectData.images[0]}
          />
        </Card>
        <Typography variant="h1" gutterBottom>
          {projectData.title}
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ maxWidth: 800, textAlign: "center" }}>
          {projectData.content}
        </Typography>
        {projectData.technologies && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="h6">Technologies:</Typography>
            {projectData.technologies.map((tech, index) => (
              <Chip key={index} label={tech} sx={{ m: 0.5 }} />
            ))}
          </Box>
        )}
        {projectData.url && (
          <Box sx={{ mt: 2 }}>
            <Button
              variant="contained"
              color="secondary"
              href={projectData.url !== "#" ? projectData.url : undefined}
              target={projectData.url !== "#" ? "_blank" : undefined}>
              Visit Project
            </Button>
          </Box>
        )}
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          sx={{ mt: 2 }}>
          {projectData.images.slice(1).map((image, index) => (
            <Card key={index} sx={{ maxWidth: 500 }}>
              <CardMedia
                component="img"
                alt={`Image ${index + 2}`}
                height="300"
                image={image}
              />
            </Card>
          ))}
        </Stack>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          href="/projects"
          sx={{ mt: 3 }}>
          Back to projects
        </Button>
      </Stack>
    </Box>
  );
};

export default ProjectPage;
