import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DataTable from '../Components/DataTable';
import {useState, useEffect} from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useThemeContext } from '../theme/ThemeContextProvider';
import { getDesignTokens } from '../theme/theme';


export default function AccordionExpanded({title, data, showTableBool = true, buttonCollection, accordionId}) {
  const {theme} = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <div>
        <Accordion defaultExpanded sx={{backgroundColor: theme.palette.accordionSummaries.primary, color: "#fff"}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id={accordionId}
            className="accordionSummaries"
            sx={{backgroundColor: theme}} //This is a spot where theme is messed up
          >
            <Typography sx={{display: "flex", margin: "auto", color: "white"}}>{title}</Typography>
          </AccordionSummary>
          <AccordionDetails className='AccordionDetails' sx={{backgroundColor: "#fff"}}>
            {showTableBool &&
              <DataTable id="accordionTables" columns={data[0]} rows={data[1]} hideFooterBool={true} columnHeaderDisplayType={"none"} ></DataTable>
            }
            {buttonCollection}
          </AccordionDetails>
        </Accordion>
      </div>

    </ThemeProvider>
  );
}