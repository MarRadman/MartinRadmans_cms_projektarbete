import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}>
      <Typography variant="h6" align="center" gutterBottom>
        My Website
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p">
        © {new Date().getFullYear()} Headless CMS Project. All rights reserved.
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Link href="/" sx={{ mx: 1 }}>
          Home
        </Link>
        <Link href="/about" sx={{ mx: 1 }}>
          About
        </Link>
        <Link href="/contact" sx={{ mx: 1 }}>
          Contact
        </Link>
      </Box>
    </Box>
  );
}
