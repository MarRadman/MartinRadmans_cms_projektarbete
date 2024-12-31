import { Box, Typography, Avatar, Link, IconButton } from "@mui/material";
import { getPageContent } from "../components/getPageContent";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Contact = async () => {
  const pageData = await getPageContent("contact");

  if (!pageData) {
    return <Typography variant="h1">Contact content not found</Typography>;
  }

  const { title, image, address, email, phone, github, linkedin } = pageData;

  const imageUrl = Array.isArray(image) ? image[0] : image;

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h1" gutterBottom>
        {title}
      </Typography>
      <Avatar
        alt="Profile Picture"
        src={imageUrl}
        sx={{ width: 200, height: 200, mb: 2 }}
      />
      <Typography variant="h6">Contact Information</Typography>
      <Typography variant="body1">Address: {address}</Typography>
      <Typography variant="body1">
        Email: <Link href={`mailto:${email}`}>{email}</Link>
      </Typography>
      <Typography variant="body1">
        Phone: <Link href={`tel:${phone}`}>{phone}</Link>
      </Typography>
      <Box sx={{ display: "flex", gap: 2 }}>
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
    </Box>
  );
};

export default Contact;
