import { createTheme } from "@mui/material/styles";
import { grey, blue, orange } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[700], // Primary color (Blue)
    },
    secondary: {
      main: orange[500], // Secondary color (Orange)
    },
    background: {
      default: grey[100], // Background color (Light Grey)
    },
  },
  typography: {
    h1: {
      fontSize: "2.5rem",
      [`@media (min-width:600px)`]: {
        fontSize: "3rem",
      },
      [`@media (min-width:960px)`]: {
        fontSize: "4rem",
      },
    },
    body1: {
      fontSize: "1rem",
      [`@media (min-width:600px)`]: {
        fontSize: "1.25rem",
      },
      [`@media (min-width:960px)`]: {
        fontSize: "1.5rem",
      },
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: grey[100], // Background color (Light Grey)
        },
        ".navmenu": {
          backgroundColor: blue[700], // Navmenu color (Blue)
        },
        ".navmenu-dropdownmenu": {
          textDecoration: "none",
          "& a": {
            color: "inherit",
            textDecoration: "none",
          },
        },
        img: {
          width: "100%",
          height: "auto",
          maxWidth: "500px",
        },
        ".center-content": {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          width: "100%",
        },
        ".footer": {
          padding: "16px 32px",
          marginTop: "auto",
          backgroundColor: grey[300], // Footer color (Darker Grey)
        },
        ".footer-links": {
          display: "flex",
          justifyContent: "center",
        },
      },
    },
  },
});

export default theme;
