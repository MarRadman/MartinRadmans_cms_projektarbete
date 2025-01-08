import { getPageContent } from "./components/getPageContent";
import { Box, Typography, Avatar } from "@mui/material";

const HomePage = async () => {
  const pageData = await getPageContent("homepage");

  if (!pageData) {
    return <Typography variant="h1">Homepage content not found</Typography>;
  }

  const { title, content, image } = pageData;

  const imageUrl = Array.isArray(image) ? image[0] : image;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        p: 3,
      }}>
      <Typography variant="h1" component="h1" gutterBottom>
        {title}
      </Typography>
      <Avatar
        alt="Profile image"
        src={imageUrl}
        sx={{
          width: { xs: 200, sm: 300, md: 400, lg: 500, xl: 600 },
          height: { xs: 200, sm: 300, md: 400, lg: 500, xl: 600 },
          mb: 3,
        }}
      />
      <Typography
        variant="body1"
        color="textSecondary"
        align="center"
        sx={{ maxWidth: 800 }}>
        {content}
      </Typography>
    </Box>
  );
};

export default HomePage;
