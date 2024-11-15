import { Box } from "@mui/material";
import { useColorTheme } from "../theme/use-color-theme";
import DarkModeSwitch from "./DarkModeSwitch"; // Assuming this is your switch component
import { Tooltip } from "@mui/material";

const NightModeToggle = () => {
  const { mode, toggleColorMode } = useColorTheme(); // Get mode and toggleColorMode from context or hook

  function flipColor() {
    toggleColorMode();
    window.location.reload(false);
  }

  return (
    <Tooltip title="Light/Dark mode switch">
      <Box>
        <DarkModeSwitch
          onClick={flipColor}
          checked={mode === "dark"} // Set the switch checked state based on the current mode
          sx={{ marginBottom: "70%", overflow: "visible", width: "70px" }}
        />
      </Box>
    </Tooltip>
  );
};

export default NightModeToggle;
