import { Box } from "@mui/material";
import { useThemeContext } from "../theme/ThemeContextProvider";
import DarkModeSwitch from "./DarkModeSwitch";

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
        <Box>
            {mode === "dark" ? <DarkModeSwitch onClick={changeColorMode} sx={{marginBottom: "70%", overflow: "visible", width: "70px"}} /> : <DarkModeSwitch onClick={changeColorMode} sx={{marginBottom: "70%", overflow: "visible", width: "70px"}} />}
        </Box>
    );
};

export default NightModeToggle;
