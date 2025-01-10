import {
  Box,
  Typography,
  Avatar,
  Link,
  IconButton,
  Paper,
} from "@mui/material";
import { getPageContent } from "../components/getPageContent";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { ContactPageData } from "@/app/types";

const Contact = async () => {
  const pageData = (await getPageContent("contact")) as ContactPageData;

  if (!pageData) {
    return <Typography variant="h1">Contact content not found</Typography>;
  }

  const { title, image, address, email, phone, github, linkedin } = pageData;

  const imageUrl = Array.isArray(image) ? image[0] : image;

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h2" gutterBottom align="center">
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: 3,
        }}>
        <Avatar
          alt="Profile Picture"
          src={imageUrl}
          sx={{ width: 300, height: 300, mb: { xs: 2, md: 0 } }}
        />
        <Paper elevation={3} sx={{ p: 3, flexGrow: 1, maxWidth: 600 }}>
          <Typography variant="h6" gutterBottom>
            Contact Information
          </Typography>
          <Typography variant="body1" gutterBottom>
            Address: {address}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Email:{" "}
            <Link color="secondary" href={`mailto:${email}`}>
              {email}
            </Link>
          </Typography>
          <Typography variant="body1" gutterBottom>
            Phone:{" "}
            <Link color="secondary" href={`tel:${phone}`}>
              {phone}
            </Link>
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
            <IconButton
              component={Link}
              href={linkedin}
              target="_blank"
              aria-label="LinkedIn">
              <LinkedInIcon />
            </IconButton>
            <IconButton
              component={Link}
              href={github}
              target="_blank"
              aria-label="GitHub">
              <GitHubIcon />
            </IconButton>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default Contact;
