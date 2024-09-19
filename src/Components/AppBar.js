import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

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
          <img src={Logo} id="AspenLogo"/> 
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