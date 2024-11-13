import { Box } from "@mui/material";
import { useThemeContext } from "../theme/ThemeContextProvider";
import DarkModeSwitch from "./DarkModeSwitch";
import { useEffect, useState } from "react";
import { Tooltip } from "@mui/material";

const NightModeToggle = () => {
    const { mode, toggleColorMode } = useThemeContext();
    const [checked, setChecked] = useState(false);

    function determineTheme() {
        if (localStorage.getItem("theme") === "dark") {
          setChecked(false);
        } else if (localStorage.getItem("theme") === "light") {
          setChecked(true);
        }
      }

    function changeColorMode() {
        toggleColorMode();
        if (localStorage.getItem("theme") === "light") {
            return localStorage.setItem("theme", "dark");
          } if (localStorage.getItem("theme") === "dark") {
            return localStorage.setItem("theme", "light");
          }
    }

    useEffect(() => {
        determineTheme();
    })

    return (
        <Tooltip title="Light/Dark mode switch">
            <Box>
                {mode === "dark" ? <DarkModeSwitch onClick={changeColorMode} sx={{marginBottom: "70%", overflow: "visible", width: "70px"}} checked={checked} /> : <DarkModeSwitch onClick={changeColorMode} sx={{marginBottom: "70%", overflow: "visible", width: "70px"}} checked={checked} />}
            </Box>
        </Tooltip>
    );
};

export default NightModeToggle;
