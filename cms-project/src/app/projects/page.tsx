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
  ImageListItem,
} from "@mui/material";
import styles from "./style.module.css"; // Import the CSS module

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
      {pageData.projects && (
        <div className={styles.imageList}>
          {pageData.projects.map((project, index) => (
            <ImageListItem key={index} className={styles.imageItem}>
              <Card className="ImageListCard" sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt={project.title}
                  height="200" // Adjust the height as needed
                  image={project.images[0]}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.title}
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
        </div>
      )}
    </Box>
  );
};

export default Projects;
