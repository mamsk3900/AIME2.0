import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import Logo from '../imgs/logo.png';

const pages = ['RT', 'AIME', 'Defective Material', "Wiki", "Sales Documents", "UPS"];
const pagesURLS = ["https://www.google.com", "https://www.bing.com"];

function ResponsiveAppBar() {

  function handleButtonClicks(element){
    window.open(pagesURLS[pages.indexOf(element)], "_self");
  };


  return (
    <AppBar position="relative">
      <Container maxWidth="1">
        <Toolbar disableGutters>
          <img src={Logo} id="AspenLogo" alt='The Aspen Systems, Inc. Logo. A retro logo with a blue A with the words Aspen on the left, Systems on the right in magenta'/> 
          <Box id="NavItems" >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleButtonClicks(page)}
                sx={{ my: 2, color: 'white', display: 'block', marginRight: 2, textDecoration: "underline"}}
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