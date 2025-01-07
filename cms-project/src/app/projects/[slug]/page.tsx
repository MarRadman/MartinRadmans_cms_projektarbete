import { getPageContent } from "@/app/components/getPageContent";
import { PageData } from "@/app/types";
import { Box, Typography, Card, CardMedia, Button, Chip } from "@mui/material";
import Link from "next/link";
import styles from "./style.module.css";

const ProjectPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  const projectData: PageData | null = await getPageContent("project", slug);

  if (!projectData) {
    return <Typography variant="h1">Project content not found</Typography>;
  }

  return (
    <Box className={styles.container}>
      <div className={styles.stack}>
        <Typography
          variant="h1"
          gutterBottom
          sx={{
            fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
            marginBottom: { xs: "1rem", sm: "1.5rem", md: "2rem" },
          }}>
          {projectData.title}
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{
            fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
            maxWidth: "800px",
            textAlign: "center",
            marginBottom: { xs: "1rem", sm: "1.5rem", md: "2rem" },
          }}>
          {projectData.content}
        </Typography>
        {projectData.technologies && (
          <Box sx={{ mt: 2 }}>
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                marginBottom: { xs: "0.5rem", sm: "1rem", md: "1.5rem" },
              }}>
              Technologies:
            </Typography>
            {projectData.technologies.map((tech, index) => (
              <Chip key={index} label={tech} sx={{ m: 0.5 }} />
            ))}
          </Box>
        )}
        {projectData.url && projectData.url !== "#" && (
          <Box sx={{ mt: 2 }}>
            <Button
              variant="contained"
              color="secondary"
              href={projectData.url}
              target="_blank">
              Visit Project
            </Button>
          </Box>
        )}
        <div className={styles.imageList}>
          {projectData.images.map((image, index) => (
            <Card key={index} className={styles.imageItem}>
              <CardMedia
                component="img"
                alt={`Image ${index + 1}`}
                image={image}
                className={styles.imageItem}
              />
            </Card>
          ))}
        </div>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          href="/projects"
          sx={{ mt: 3 }}>
          Back to projects
        </Button>
      </div>
    </Box>
  );
};

export default ProjectPage;
