import { getPageContent } from "../components/getPageContent";
import { Box, Typography, Avatar } from "@mui/material";
import { AboutPageData } from "@/app/types";

const About = async () => {
  const pageData = (await getPageContent("about")) as AboutPageData;

  if (!pageData) {
    return <Typography variant="h1">About content not found</Typography>;
  }

  const { title, content, image } = pageData;

  const imageUrl = Array.isArray(image) ? image[0] : image;

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h1">{title}</Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 2 }}>
        <Avatar
          alt={`Profile image`}
          src={imageUrl}
          sx={{ width: 300, height: 300 }}
        />
      </Box>
      <Typography variant="body1" gutterBottom>
        {content}
      </Typography>
    </Box>
  );
};

export default About;
