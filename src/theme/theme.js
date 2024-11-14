const theme = {
  palette: {
    primary: {
      main: "#1976D2"
    },  // Default primary color (you can adjust this if needed)
    secondary: {
      main: "#282828"
    }
  },
};

export const getDesignTokens = (mode) => ({
  palette: {
    mode,  // This will be either 'light' or 'dark'
    ...(mode === "light"
      ? {
          primary: theme.primary,          // Primary color for light mode
          background: {
            default: "#f5f5f5",  // Light background color
            paper: "#1976D2",    // Paper color for light mode
          },
          text: {
            primary: "#000000",  // Text color for light mode
            secondary: "#000000",
          },
        }
      : {
          primary: theme.secondary,       // Primary color for dark mode
          background: {
            default: "#121212",  // Dark background color
            paper: "#1D1D1D",    // Paper color for dark mode
          },
          text: {
            primary: "#ffffff",  // Text color for dark mode
            secondary: "#ffffff",
          },
        }),
  },
});

export default theme;
