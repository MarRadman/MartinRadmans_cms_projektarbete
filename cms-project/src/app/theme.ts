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
      fontSize: 40,
    },
    h2: {
      fontSize: 20,
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
            color: "inherit", // Inherit color from parent
            textDecoration: "none", // Remove underline
          },
        },
        img: {
          width: "100%", // Set the desired width
          height: "auto", // Maintain aspect ratio
          maxWidth: "500px", // Set a maximum width
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
