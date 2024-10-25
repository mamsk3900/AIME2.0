import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Logo from '../imgs/logo.png';
import DarkModeSwitch from './DarkModeSwitch';
import { useState, useEffect } from 'react';
import { Tooltip } from '@mui/material';

const pages = ['RT', 'Defective Material', "Wiki", "Sales Documents"];
const pagesURLS = ["http://support.private.aspsys.com/", "http://aime.private.aspsys.com/defective_material.php", "http://wiki.private.aspsys.com/doku.php", "http://aime.private.aspsys.com/salesdocs/"  ];


function ResponsiveAppBar() {
  const [appBarColor, setAppBarColor] = useState("#1976D2");
  const [checked, setChecked] = useState("");
  function handleButtonClicks(element){
    if (element != window.location.href) {
      window.open(pagesURLS[pages.indexOf(element)], "_blank");
    } else {      
      window.open(pagesURLS[pages.indexOf(element)], "_target");
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", "light");
      setAppBarColor("#1976D2");
    } else if (localStorage.getItem("theme") === "dark") {
      setChecked(false);
      setAppBarColor("#1976D2");
    } else if (localStorage.getItem("theme") === "light") {
      setChecked(true);
      setAppBarColor("#0F0F0F");
    }
  })

  function handleThemeChange() {
    if (localStorage.getItem("theme") === "light") {
      setAppBarColor("#0F0F0F");
      return localStorage.setItem("theme", "dark");
    } if (localStorage.getItem("theme") === "dark") {
      setAppBarColor("#0F0F0F");
      return localStorage.setItem("theme", "light");
    }

  }


  return (
    <AppBar position="relative" width="100%">
      <Container maxWidth="1" sx={{backgroundColor: appBarColor}}>
        <Toolbar disableGutters>
          <img src={Logo} id="AspenLogo" alt='The Aspen Systems, Inc. Logo. A retro logo with a blue A with the words Aspen on the left, Systems on the right in magenta'/> 
          <Box id="NavItems" >
            <Tooltip title="Light mode/Dark mode">
              <DarkModeSwitch onClick={() => handleThemeChange()} sx={{marginBottom: "8%", overflow: "visible", width: "70px"}} checked={checked}/>
            </Tooltip>
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
export default ResponsiveAppBar;