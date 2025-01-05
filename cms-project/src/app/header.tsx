import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import InputBase from "@mui/material/InputBase";
import { Paper, useMediaQuery, useTheme } from "@mui/material";
import Divider from "@mui/material/Divider";
import { useState, useEffect } from "react";
import getNavMenuItems from "./components/getNavMenu";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [menuItems, setMenuItems] = useState<{ title: string; link: string }[]>(
    []
  );
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const fetchMenuItems = async () => {
      const items = await getNavMenuItems();
      setMenuItems(items);
    };
    fetchMenuItems();
  }, []);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className="navmenu" sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "inherit" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <h1>Headless CMS Project</h1>
          </Typography>
          {!isMobile && (
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: "400",
              }}>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                inputProps={{ "aria-label": "search" }}
              />
            </Paper>
          )}
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 5 }}
            onClick={handleMenuOpen}>
            <MenuIcon />
          </IconButton>
          <Menu
            className="navmenu-dropdownmenu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}>
            {menuItems.map((item) => (
              <MenuItem key={item.link} onClick={handleMenuClose}>
                <Link href={item.link}>{item.title}</Link>
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
