export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#197d3",
          },
          text: {
            primary: "#000000",  // Text color for light mode
          },
        }
      : {
          primary: {
            main: "#0a0a0a"
          },
          text: {
            primary: "#ffffff",  // Text color for dark mode
          },
        }),
  },
});
