import { createTheme } from '@mui/material/styles';
import { useState, useEffect, useMemo } from 'react';

export const useColorTheme = () => {
  // Retrieve the saved theme mode from localStorage or default to 'light'
  const savedMode = localStorage.getItem("theme") || "light";
  
  const [mode, setMode] = useState(savedMode); 

  // Toggle between light and dark mode
  const toggleColorMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    localStorage.setItem("theme", newMode); // Save the mode in localStorage
  };

  // Generate the theme object based on the current mode (light/dark)
  const theme = useMemo(() => 
    createTheme({
      palette: {
        mode: mode, // Light or dark mode
        primary: {
          main: mode === "light" ? "#1976D2" : "#282828", // Blue for light, Red for dark
          sub: mode === "light" ? "#fff" : "#000",
        },
        background: {
          default: mode === "light" ? "#ffffff" : "#121212", // White background for light, Dark background for dark
        },
        text: {
          primary: mode === "light" ? "#000000" : "#ffffff", // Text color depending on the mode
        },
        evenRow: {
            primary: mode === "light" ? "#1976D2" : "#fff",
        }
      },
    }),
    [mode] // Ensure the theme is regenerated whenever `mode` changes
  );

  return {
    theme,
    mode,
    toggleColorMode
  };
};
