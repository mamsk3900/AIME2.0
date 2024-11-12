import { amber, deepOrange, red } from "@mui/material/colors";

const theme = {
  palette: {
    primary: red,
  },
};

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "dark"
      ? {
          primary: amber,
        }
      : {
          primary: deepOrange,
        }),
  },
});

export default theme;
