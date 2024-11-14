const theme = {
  palette: {
    primary: {
      main: "#1976D2",
      sub: "#ffffff"
    },  // Default primary color (you can adjust this if needed)
    secondary: {
      main: "#00000"
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
            default: "#ba0b0b",  // Light background color
            paper: "#cc3535",    // Paper color for light mode
          },
          text: {
            primary: "#000000",  // Text color for light mode
            secondary: "#000000",
          },
        }
      : {
          primary: theme.secondary,       // Primary color for dark mode
          background: {
            default: "#ad8a2a",  // Dark background color
            paper: "#cc3535",    // Paper color for dark mode
          },
          text: {
            primary: "#ffffff",  // Text color for dark mode
            secondary: "#ffffff",
          },
        }),
  },
});

export default theme;
