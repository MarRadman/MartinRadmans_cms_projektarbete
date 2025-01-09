import { getPageContent } from "../components/getPageContent";
import { Box, Typography, Avatar, Divider, Paper } from "@mui/material";
import { AboutPageData } from "@/app/types";

const About = async () => {
  const pageData = (await getPageContent("about")) as AboutPageData;

  if (!pageData) {
    return <Typography variant="h1">About content not found</Typography>;
  }

  const { title, content, image, education, workExperience } = pageData;

  const imageUrl = Array.isArray(image) && image.length > 0 ? image[0] : "";

  return (
    <Box sx={{ p: 3 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "flex-start" },
          justifyContent: "center",
          gap: 3,
        }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}>
          <Typography variant="h2" gutterBottom align="center">
            {title}
          </Typography>
          <Avatar
            alt="Profile image"
            src={imageUrl}
            sx={{ width: 300, height: 300 }}
          />
        </Box>
        <Paper elevation={3} sx={{ p: 3, flexGrow: 1 }}>
          <Typography variant="body1" gutterBottom>
            {content}
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="h6" gutterBottom>
            Education
          </Typography>
          {education.map((edu, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Typography variant="subtitle1">{edu.title}</Typography>
              <Typography variant="body2">{edu.school}</Typography>
              <Typography variant="body2">{edu.year}</Typography>
              <Typography variant="body2">{edu.description}</Typography>
            </Box>
          ))}
          <Divider sx={{ my: 2 }} />
          <Typography variant="h6" gutterBottom>
            Work Experience
          </Typography>
          {workExperience.map((work, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Typography variant="subtitle1">{work.role}</Typography>
              <Typography variant="body2">{work.company}</Typography>
              <Typography variant="body2">{work.duration}</Typography>
              <Typography variant="body2">{work.description}</Typography>
            </Box>
          ))}
        </Paper>
      </Box>
    </Box>
  );
};

export default About;
