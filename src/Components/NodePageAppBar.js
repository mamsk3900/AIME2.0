import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import DarkModeSwitch from './DarkModeSwitch';
import { useEffect, useState } from 'react';

import Logo from '../imgs/logo.png';
import { Tooltip, ThemeProvider, CssBaseline } from '@mui/material';
import { useThemeContext } from "../theme/ThemeContextProvider";
import NightModeToggle from './NightModeToggle';

const pages = ['Home', 'Control Panel', 'Bill of Materials', "Reboot", "Power Off"]; //In this branch I really want to fix the issue where it opens the same window in a new tab if you click the link. There are some other link paths that need to be fixed

function NodePageAppBar() {
  const [pagesURLS, setPageUrls] = useState([]);
  const [checked, setChecked] = useState("");
  const {theme} = useThemeContext();

  function handleButtonClicks(element){
      window.open(pagesURLS[pages.indexOf(element)], "_self");
  };

  useEffect(() => {

    let id = localStorage.getItem("nodeAHash");
    setPageUrls(["/NodePage"+id, "/", "/Bom"+id, "/", "/",  ]);
  }, []);



  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <AppBar position="relative" width="100%">
        <Container maxWidth="1">
          <Toolbar disableGutters>
            <img src={Logo} id="AspenLogo" alt='The Aspen Systems, Inc. Logo. A retro logo with a blue A with the words Aspen on the left, Systems on the right, both in magenta'/> 
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
              <NightModeToggle checked={checked}></NightModeToggle>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

    </ThemeProvider>
  );
}
export default NodePageAppBar;