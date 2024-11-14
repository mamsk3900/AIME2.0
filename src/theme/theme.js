import { amber, deepOrange, red, blueGrey } from "@mui/material/colors";

const theme = {
  palette: {
    primary: {
      main: "#1976D2"
    },  // Default primary color (you can adjust this if needed)
  },
};

export const getDesignTokens = (mode) => ({
  palette: {
    mode,  // This will be either 'light' or 'dark'
    ...(mode === "light"
      ? {
          primary: theme.primary,          // Primary color for light mode
          background: {
            default: "#fafafa",  // Light background color
            paper: "#ffffff",    // Paper color for light mode
          },
          text: {
            primary: "#000000",  // Text color for light mode
            secondary: "#757575",
          },
        }
      : {
          primary: theme.primary,       // Primary color for dark mode
          background: {
            default: "#121212",  // Dark background color
            paper: "#1D1D1D",    // Paper color for dark mode
          },
          text: {
            primary: "#ffffff",  // Text color for dark mode
            secondary: "#B0B0B0",
          },
        }),
  },
});

export default theme;
