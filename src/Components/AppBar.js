import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import Logo from '../imgs/logo.png';

const pages = ['RT', 'AIME', 'Defective Material', "Wiki", "Sales Documents", "UPS"];
const pagesURLS = ["http://support.private.aspsys.com/", "/", "http://aime.private.aspsys.com/defective_material.php", "http://wiki.private.aspsys.com/doku.php", "http://aime.private.aspsys.com/salesdocs/",  ];

function ResponsiveAppBar() {

  function handleButtonClicks(element){
    window.open(pagesURLS[pages.indexOf(element)], "_blank"); //This makes "AIME" open a new tab of the same page which I don't like, but I won't fix it yet
  };


  return (
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
export default ResponsiveAppBar;