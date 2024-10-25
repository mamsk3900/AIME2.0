import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import DarkModeSwitch from './DarkModeSwitch';
import { useEffect, useState } from 'react';

import Logo from '../imgs/logo.png';

const pages = ['Home', 'Control Panel', 'Bill of Materials', "Reboot", "Power Off"]; //In this branch I really want to fix the issue where it opens the same window in a new tab if you click the link. There are some other link paths that need to be fixed

function NodePageAppBar() {
  const [pagesURLS, setPageUrls] = useState([]);
  const [appBarColor, setAppBarColor] = useState("#1976D2");
  const [checked, setChecked] = useState("");

  function handleButtonClicks(element){
      window.open(pagesURLS[pages.indexOf(element)], "_self");
  };

  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", "light");
      setAppBarColor("#1976D2");
    } else if (localStorage.getItem("theme") === "dark") {
      document.body.style = "background-color: light;"
      setChecked(false);
      setAppBarColor("#1976D2");
    } else if (localStorage.getItem("theme") === "light") {
      document.body.style = "background-color: black;"
      setChecked(true);
      setAppBarColor("#0F0F0F");
    }

    let id = localStorage.getItem("nodeAHash");
    setPageUrls(["/NodePage"+id, "/", "/Bom"+id, "/", "/",  ])
  })

  function handleThemeChange() {
    if (localStorage.getItem("theme") === "light") {
      setAppBarColor("#0F0F0F");
      document.body.style = "background-color: white;"
      return localStorage.setItem("theme", "dark");
    } if (localStorage.getItem("theme") === "dark") {
      setAppBarColor("#0F0F0F");
      document.body.style = "background-color: black;"
      return localStorage.setItem("theme", "light");
    }

  }


  return (
    <AppBar position="relative" width="100%">
      <Container maxWidth="1" sx={{backgroundColor: appBarColor}}>
        <Toolbar disableGutters>
          <img src={Logo} id="AspenLogo" alt='The Aspen Systems, Inc. Logo. A retro logo with a blue A with the words Aspen on the left, Systems on the right in magenta'/> 
          <Box id="NavItems" >
            <DarkModeSwitch onClick={() => handleThemeChange()} sx={{marginBottom: "8%", overflow: "visible", width: "70px"}} checked={checked}/>
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
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NodePageAppBar;