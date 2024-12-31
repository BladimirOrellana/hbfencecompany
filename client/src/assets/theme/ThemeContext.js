import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4CAF50", // Green
    },
    secondary: {
      main: "#8BC34A", // Light Green
    },
    error: {
      main: "#D32F2F", // Red
    },
    warning: {
      main: "#FFC107", // Amber
    },
    info: {
      main: "#0288D1", // Blue
    },
    success: {
      main: "#388E3C", // Dark Green
    },
    background: {
      default: "#F1F8E9", // Light Green Background
      paper: "#FFFFFF", // White for cards
    },
    text: {
      primary: "#212121", // Black
      secondary: "#757575", // Gray
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: "2.5rem",
    },
    h2: {
      fontWeight: 600,
      fontSize: "2rem",
    },
    h3: {
      fontWeight: 500,
      fontSize: "1.75rem",
    },
    button: {
      textTransform: "none",
    },
  },
});

export default theme;
