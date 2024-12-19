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
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        img: {
          width: "100%", // Set the desired width
          height: "auto", // Maintain aspect ratio
          maxWidth: "500px", // Optional: Set a maximum width
        },
      },
    },
  },
});

export default theme;
