import { Box, IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useThemeContext } from "../theme/ThemeContextProvider";

const NightModeToggle = () => {
    const { mode, toggleColorMode } = useThemeContext();

    function changeColorMode() {
        toggleColorMode();
        if (localStorage.getItem("theme") === "light") {
            return localStorage.setItem("theme", "dark");
          } if (localStorage.getItem("theme") === "dark") {
            return localStorage.setItem("theme", "light");
          }
    }

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "background.default",
                color: "text.primary",
                borderColor: "text.primary",
                border: "1px solid",
                borderRadius: 25,
                p: 2,
            }}
        >
            {mode} mode
            <IconButton sx={{ ml: 1 }} onClick={changeColorMode} color="inherit">
                {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
        </Box>
    );
};

export default NightModeToggle;
