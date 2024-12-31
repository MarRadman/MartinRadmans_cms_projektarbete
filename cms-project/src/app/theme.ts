import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Your primary color
    },
    secondary: {
      main: "#dc004e", // Your secondary color
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
        img: {
          width: "100%", // Set the desired width
          height: "auto", // Maintain aspect ratio
          maxWidth: "500px", // Optional: Set a maximum width
        },
        ".center-content": {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          width: "100%",
        },
      },
    },
  },
});

export default theme;
