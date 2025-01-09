"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import getNavMenuItems from "./components/getNavMenu";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [footerTitle, setFooterTitle] = useState<string>("Simple is Key");

  useEffect(() => {
    const fetchMenuItems = async () => {
      const { title } = await getNavMenuItems();
      setFooterTitle(title);
    };
    fetchMenuItems();
  }, []);

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
        © {year} {footerTitle}. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
