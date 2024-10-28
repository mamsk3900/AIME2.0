import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';

import Logo from '../imgs/logo.png';
import DarkModeSwitch from './DarkModeSwitch';

const pages = ['Home', 'Control Panel', 'Bill of Materials', "Reboot", "Power Off"]; //In this branch I really want to fix the issue where it opens the same window in a new tab if you click the link. There are some other link paths that need to be fixed

function NodePageAppBar() {
  const [pagesURLS, setPageUrls] = useState([]);
  const [checked, setChecked] = useState();

  function handleButtonClicks(element){
      window.open(pagesURLS[pages.indexOf(element)], "_self");
  };

  useEffect(() => {
    let id = localStorage.getItem("nodeAHash");
    setPageUrls(["/NodePage"+id, "/", "/Bom"+id, "/", "/",  ])

    if (!localStorage.getItem("theme")) {
    } else if (localStorage.getItem("theme") === "dark") {
      setChecked(false);

    } else if (localStorage.getItem("theme") === "light") {
      setChecked(true);

    }
  })

  function handleThemeChange() {
    if (localStorage.getItem("theme") === "light") {
      setChecked(false);
      return localStorage.setItem("theme", "dark");
    } if (localStorage.getItem("theme") === "dark") {
      setChecked(true);
      return localStorage.setItem("theme", "light");
    }
  }

  return (
    <AppBar position="relative" width="100%">
      <Container maxWidth="1">
        <Toolbar disableGutters>
          <img src={Logo} id="AspenLogo" alt='The Aspen Systems, Inc. Logo. A retro logo with a blue A with the words Aspen on the left, Systems on the right in magenta'/> 
          <Box id="NavItems" >
            <DarkModeSwitch onClick={() => handleThemeChange()} sx={{marginBottom: "7%", overflow: "visible", width: "70px"}} checked={checked}/>
            {pages.map((page) => (
              <Button
                id="AppBarLinks"
                key={page}
                onClick={() => handleButtonClicks(page)}
                sx={{ my: 2, fontSize: "100%", color: 'white', textDecoration: "underline", minWidth: "5%", minHeight: "1em"}}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NodePageAppBar;