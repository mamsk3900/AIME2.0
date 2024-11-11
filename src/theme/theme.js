import {PaletteMode} from "@mui/material";
import { amber, deepOrange, grey } from "@mui/material/colors";

const theme = {
    palette: {
        primary: amber,
    },
};

// export const getDesignTokens = (mode: PaletteMode) => ({
//     palette: {
//         mode,
//         ...(mode === "light"
//             ? {
//                 primary: amber,
//             }
//             :
//             {
//                 primary: deepOrange,
//             }
//         ),
//     },
// });

export default theme;