import { amber, deepOrange, red } from "@mui/material/colors";

const theme = {
  palette: {
    primary: amber,
  },
};

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: amber,
        }
      : {
          primary: deepOrange,
        }),
  },
});

export default theme;
