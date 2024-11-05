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

  function changeAccordionsSummaries(theme) {
    const aimeInfoAccordion = document.getElementById("AimeInfoAccordion");
    const sysInfoAccordion = document.getElementById("SysInfoAccordion");
    const aimeTestAccordion = document.getElementById("AimeTestAccordion");
    if (theme === "dark") {
      aimeInfoAccordion.style = "background-color: #2e85dc";
      sysInfoAccordion.style = "background-color: #2e85dc";
      aimeTestAccordion.style = "background-color: #2e85dc";
    } else if (theme === "light") {
      aimeInfoAccordion.style = "background-color: #1A646F";
      sysInfoAccordion.style = "background-color: #1A646F";
      aimeTestAccordion.style = "background-color: #1A646F";
    }
  }

  function changeAccordionsBackground() {
    const accordionBackgrounds = document.getElementsByClassName("AccordionDetails");
    accordionBackgrounds.style="background-color: red";
}

  function changeButtons(theme) {
    const buttons = document.querySelectorAll('button');
    console.log(buttons);
    if (theme === "dark") {
      buttons.style = "background-color: red";
      return
    } else if (theme === "light") {
      buttons.forEach(button => {
        button.style = "background-color: red";
      });
      return
    }
  }
  
  function changeToLight() {
    const nodePage = document.getElementById("NodePage");
    const dateSpan = document.getElementById("dateSpan");
    setChecked(true);
    setAppBarColor("#0F0F0F");
    nodePage.style = "background-color: #1a1818;";
    document.body.style = "background-color: #262525;";
    
    dateSpan.style = "color: white";
    changeAccordionsSummaries("light");
    changeAccordionsBackground();
  }

  function changeToDark() {
    const nodePage = document.getElementById("NodePage");
    const dateSpan = document.getElementById("dateSpan");
    setChecked(false);
    setAppBarColor("#1976D2");
    nodePage.style = "background-color: #F5F5F5"
    document.body.style = "background-color: white;"

    dateSpan.style = "color: black"
    changeAccordionsSummaries("dark");
    changeButtons("dark");
  }

  function determineTheme() {
    if (!localStorage.getItem("theme")) {
      changeToLight();
      
      localStorage.setItem("theme", "light");
    } else if (localStorage.getItem("theme") === "dark") {
      changeToDark();

    } else if (localStorage.getItem("theme") === "light") {
      changeToLight();
      
    }
  }

  function handleThemeChange() {
    if (localStorage.getItem("theme") === "light") {
      changeToDark();

      return localStorage.setItem("theme", "dark");
    } if (localStorage.getItem("theme") === "dark") {
      changeToLight();


      return localStorage.setItem("theme", "light");
    }

  }

  useEffect(() => {
    determineTheme();

    let id = localStorage.getItem("nodeAHash");
    setPageUrls(["/NodePage"+id, "/", "/Bom"+id, "/", "/",  ]);
  }, []);



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