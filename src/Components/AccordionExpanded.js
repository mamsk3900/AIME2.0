import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AccordionExpanded({info}) {
  return (
    <div>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography sx={{display: "flex", margin: "auto"}}>{info.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {info.content}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}