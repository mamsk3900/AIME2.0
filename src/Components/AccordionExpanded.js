import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DataTable from '../Components/DataTable';
import {useState, useEffect} from 'react'


export default function AccordionExpanded({title, data, showTableBool = true, buttonCollection}) {
  return (
    <div>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography sx={{display: "flex", margin: "auto"}}>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {showTableBool &&
            <DataTable id="accordionTables" columns={data[0]} rows={data[1]} hideFooterBool={true} columnHeaderDisplayType={"none"} ></DataTable>
          }
          {buttonCollection}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}