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
    fontFamily: "Roboto, Arial, sans-serif",
    h1: {
      fontSize: "2.5rem",
      [`@media (min-width:600px)`]: {
        fontSize: "3rem",
      },
      [`@media (min-width:960px)`]: {
        fontSize: "4rem",
      },
    },
    h2: {
      fontSize: "2rem",
      [`@media (min-width:600px)`]: {
        fontSize: "2.5rem",
      },
      [`@media (min-width:960px)`]: {
        fontSize: "3rem",
      },
    },
    h6: {
      fontSize: "1.25rem",
      [`@media (min-width:600px)`]: {
        fontSize: "1.5rem",
      },
      [`@media (min-width:960px)`]: {
        fontSize: "1.75rem",
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
    body2: {
      fontSize: "0.875rem",
      [`@media (min-width:600px)`]: {
        fontSize: "1rem",
      },
      [`@media (min-width:960px)`]: {
        fontSize: "1.125rem",
      },
    },
    subtitle1: {
      fontSize: "1.125rem",
      [`@media (min-width:600px)`]: {
        fontSize: "1.25rem",
      },
      [`@media (min-width:960px)`]: {
        fontSize: "1.375rem",
      },
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: grey[100], // Background color (Light Grey)
          fontFamily: "Roboto, Arial, sans-serif",
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
