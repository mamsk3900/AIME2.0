import { createTheme } from "@mui/material";
import { createContext, useContext } from "react";
import { useColorTheme } from "./use-color-theme";

export const ThemeContext = createContext({
    mode: "light", 
    toggleColorMode: () => {},
    theme: createTheme(),
});

// Context provider component
export const ThemeContextProvider = ({ children }) => {
    const value = useColorTheme();
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

// Hook to use the theme context
export const useThemeContext = () => {
    return useContext(ThemeContext);
};
