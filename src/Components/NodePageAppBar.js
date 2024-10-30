import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import DarkModeSwitch from './DarkModeSwitch';
import { useEffect, useState } from 'react';

import Logo from '../imgs/logo.png';
import { Tooltip } from '@mui/material';

const pages = ['Home', 'Control Panel', 'Bill of Materials', "Reboot", "Power Off"]; //In this branch I really want to fix the issue where it opens the same window in a new tab if you click the link. There are some other link paths that need to be fixed

function NodePageAppBar() {
  const [pagesURLS, setPageUrls] = useState([]);
  const [appBarColor, setAppBarColor] = useState("#1976D2");
  const [checked, setChecked] = useState("");

  function handleButtonClicks(element){
      window.open(pagesURLS[pages.indexOf(element)], "_self");
  };

  function determineTheme() {
    const nodePage = document.getElementById("NodePage");
    const dateSpan = document.getElementById("dateSpan");
    if (!localStorage.getItem("theme")) {
      nodePage.style = "background-color: black" //nodePage background
      localStorage.setItem("theme", "light");
      dateSpan.style = "color: black";

      setAppBarColor("#1976D2");
    } else if (localStorage.getItem("theme") === "dark") {
      nodePage.style = "background-color: #F5F5F5" //nodePage background
      document.body.style = "background-color: white;"

      dateSpan.style = "color: black"

      setChecked(false);
      setAppBarColor("#1976D2");


    } else if (localStorage.getItem("theme") === "light") {
      nodePage.style = "background-color: #1a1818" //nodePage background
      document.body.style = "background-color: #262525;"

      dateSpan.style = "color: white";

      setChecked(true);
      setAppBarColor("#0F0F0F");

    }
  }

  function handleThemeChange() {
    const nodePage = document.getElementById("NodePage");
    const dateSpan = document.getElementById("dateSpan");
    if (localStorage.getItem("theme") === "light") {
      setAppBarColor("#0F0F0F");
      nodePage.style = "background-color: white"
      document.body.style = "background-color: white;"

      dateSpan.style = "color: black";
      return localStorage.setItem("theme", "dark");
    } if (localStorage.getItem("theme") === "dark") {
      setAppBarColor("#0F0F0F");
      nodePage.style = "color: #F5F5F5;"
      document.body.style = "background-color: #262525;"
      
      dateSpan.style = "color: white";
      return localStorage.setItem("theme", "light");
    }

  }

  useEffect(() => {
    determineTheme();

    let id = localStorage.getItem("nodeAHash");
    setPageUrls(["/NodePage"+id, "/", "/Bom"+id, "/", "/",  ])
  })



  return (
    <AppBar position="relative" width="100%">
      <Container maxWidth="1" sx={{backgroundColor: appBarColor}}>
        <Toolbar disableGutters>
          <img src={Logo} id="AspenLogo" alt='The Aspen Systems, Inc. Logo. A retro logo with a blue A with the words Aspen on the left, Systems on the right, both in magenta'/> 
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
export default NodePageAppBar;