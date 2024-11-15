const theme = {
  palette: {
    primary: {
      main: "#1976D2",
      sub: "#ffffff"
    },  
    secondary: {
      main: "#000000"
    }
  },
};

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#1976D2",  // Primary color for light mode
            sub: "#ffffff"
          },
          text: {
            primary: "#000000",  // Text color for light mode
            secondary: "#000000",
          },
        }
      : {
          primary: {
            main: "#ba0b0b",  // Primary color for dark mode
            sub: "#ffffff"
          },
          text: {
            primary: "#ffffff",  // Text color for dark mode
            secondary: "#ffffff",
          },
        }),
  },
});

export default theme;
