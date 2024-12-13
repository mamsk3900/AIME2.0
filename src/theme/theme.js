export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#197d3",
            sub: "#fff",
          },
          text: {
            primary: "#000000",  // Text color for light mode
          },
          body: {
            primary: "#929292"
          },
          bodyBackground: {
            main: "red",
          }
        }
      : {
          primary: {
            main: "#0a0a0a",
            sub: "#000"
          },
          text: {
            primary: "#ffffff",  // Text color for dark mode
          },
        }),
  },
});
