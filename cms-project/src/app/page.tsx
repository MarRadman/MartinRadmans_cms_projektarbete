import { getPageContent } from "./components/getPageContent";
import { Box, Typography, CardMedia } from "@mui/material";
import { HomePageData } from "@/app/types";

const HomePage = async () => {
  const pageData = (await getPageContent("homepage")) as HomePageData;

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
      <Typography
        variant="h1"
        component="h1"
        gutterBottom
        sx={{
          fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
          color: "#333",
          textAlign: "center",
          mb: 3,
        }}>
        {title}
      </Typography>
      <CardMedia
        component="img"
        alt="Profile image"
        image={imageUrl}
        sx={{
          width: { xs: "90%", sm: "80%", md: "70%", lg: "60%", xl: "50%" },
          height: "auto",
          mb: 3,
          boxShadow: 3,
          borderRadius: 2,
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
