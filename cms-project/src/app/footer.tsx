import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <Box component="footer" className="footer">
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p">
        © {year} My Headless CMS Project. All rights reserved.
      </Typography>
      <Box className="footer-links" sx={{ mt: 3 }}></Box>
    </Box>
  );
}
