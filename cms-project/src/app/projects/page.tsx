import { getPageContent } from "../components/getPageContent";
import { PageData } from "@/app/types";
import Link from "next/link";
import {
  Box,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  ImageList,
  ImageListItem,
} from "@mui/material";

const Projects = async () => {
  const pageData: PageData | null = await getPageContent("projects");

  if (!pageData) {
    return <Typography variant="h1">Projects content not found</Typography>;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 3,
      }}>
      <Typography variant="h1" gutterBottom>
        {pageData.title}
      </Typography>
      {pageData.projects && (
        <ImageList sx={{ width: "100%", maxWidth: 1200 }} cols={3} gap={16}>
          {pageData.projects.map((project, index) => (
            <ImageListItem key={index}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt={project.title}
                  height="140"
                  image={project.images[0]} // Assuming the first image is the main image
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {project.content}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    component={Link}
                    href={`/projects/${project.slug}`}>
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </ImageListItem>
          ))}
        </ImageList>
      )}
    </Box>
  );
};

export default Projects;
