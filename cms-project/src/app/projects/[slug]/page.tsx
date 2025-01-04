import { getPageContent } from "../../components/getPageContent";
import { PageData } from "@/app/types";
import { Box, Typography, Card, CardMedia, Button, Grid } from "@mui/material";
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
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={4}>
          <Card sx={{ maxWidth: 500 }}>
            <CardMedia
              component="img"
              alt="Main Image"
              height="300"
              image={projectData.images[0]}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="h1" gutterBottom>
            {projectData.title}
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ maxWidth: 800, textAlign: "center" }}>
            {projectData.content}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
        {projectData.images.slice(1).map((image, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 500 }}>
              <CardMedia
                component="img"
                alt={`Image ${index + 2}`}
                height="300"
                image={image}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        href="/projects"
        sx={{ mt: 3 }}>
        Back to projects
      </Button>
    </Box>
  );
};

export default ProjectPage;
