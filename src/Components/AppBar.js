import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Logo from '../imgs/logo.png';
import { useState, useEffect } from 'react';
import { Tooltip, ThemeProvider, CssBaseline } from '@mui/material';
import { useThemeContext } from "../theme/ThemeContextProvider";
import NightModeToggle from "./NightModeToggle";

const pages = ['RT', 'Defective Material', "Wiki", "Sales Documents"];
const pagesURLS = ["http://support.private.aspsys.com/", "http://aime.private.aspsys.com/defective_material.php", "http://wiki.private.aspsys.com/doku.php", "http://aime.private.aspsys.com/salesdocs/"  ];


function ResponsiveAppBar() {
  const { theme } = useThemeContext();
  function handleButtonClicks(element){
    if (element != window.location.href) {
      window.open(pagesURLS[pages.indexOf(element)], "_blank");
    } else {      
      window.open(pagesURLS[pages.indexOf(element)], "_target");
    }
  };


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <AppBar position="relative" width="100%">
        <Container maxWidth="1">
          <Toolbar disableGutters>
            <img src={Logo} id="AspenLogo" alt='The Aspen Systems, Inc. Logo. A retro logo with a blue A with the words Aspen on the left, Systems on the right in magenta'/> 
            <Box id="NavItems" >
              {pages.map((page) => (
                <Button
                id="AppBarLinks"
                key={page}
                onClick={() => handleButtonClicks(page)}
                sx={{ my: 2, fontSize: "100%", color: 'white', textDecoration: "underline", minWidth: "5%", minHeight: "1em", background: "#00000000"}}
                >
                  {page}
                </Button>
              ))}
              <Tooltip title="Light mode/Dark mode">
                <NightModeToggle></NightModeToggle>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;