import * as React from 'react';
import { useEffect, useState } from 'react';
import NodePageAppBar from '../Components/NodePageAppBar'
import AccordionExpanded from '../Components/AccordionExpanded';
import { Button, Paper, Box } from '@mui/material';
import DataTable from '../Components/DataTable';

function NodePage() {
    const [paperHTMLContents, setPaperHTMLContents] = useState([]);
    const [paperTextContents, setPaperTextContents] = useState([]);

    const [rows, setRows] = useState([]);
    const [columns, setColumns] = useState([]);
    const [buttons, setButtons] = useState([]);


    function clockUpdate() {
        const intervalID = setInterval(() => {
            let date = new Date();
            let dateSpan = document.getElementById("dateSpan")
    
            const options = 
                {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                    hour12: true,
                    hour: 'numeric',
                    minute: 'numeric',
                    second: "numeric"
                };
    
            const formatter = new Intl.DateTimeFormat('en-US', options);
            const formattedDate = formatter.format(date);
    
            const result = `${formattedDate.replace(/at/, '')}`;
            dateSpan.innerHTML = result;
        })
        return () => clearInterval(intervalID);
    }

    function addToPaperContents(timeOfLog) {
        setPaperHTMLContents((prevPaperContents) => [
            ...prevPaperContents,
            <p>{timeOfLog}{paperTextContents}<br></br></p>
        ] 
        );
    }

    useEffect(() => {
        let MCEstatus="success"
        let EDACstatus="success"
        document.title = "NodePage";

        
        clockUpdate()
        
        setRows([{ id: 11, A: "c11", Customer: "P&G", NodeName: "node11", JobNum: "124", Status: "Idle", VLAN: "0.0.0.0.0", BMCMAC: "0.0.0.0.0", BMCIP: "0.0.0.0.0", MCE: "OK", SUM: "OK" },])
            
        setColumns(["test", "status", "start time", "end time", "cycles", "log"])

        setButtons([<Button variant="contained" sx={{marginRight: "10px"}} >STOP TESTS</Button>, <Button sx={{marginRight: "10px"}} variant="contained">RESTART AIME TESTS</Button>, <Button sx={{marginRight: "10px"}} variant="contained" color={MCEstatus}>MCE</Button>, <Button sx={{marginRight: "10px"}} variant="contained" color={EDACstatus}>EDAC</Button>, <Button sx={{marginRight: "10px"}} variant="contained">STREAM LOG</Button>]);

        
        }, [])


    return (

        <div id="NodePage">
            <NodePageAppBar></NodePageAppBar>
            <div id="clock">
                <span id="dateSpan">January 01, 1999 at 00:00:00 AM</span>
            </div>
            <div id="AIMEInfoDiv">
                <AccordionExpanded title={"AIME Info"} data={[[], rows]}/>
            </div>
            <div id="SystemInfoDiv">
                <AccordionExpanded title={"System Info"} data={[[], rows]}/>
            </div>
            <div id="buttonDiv">
                <Button variant="contained" id="QAButton">Perform QA</Button>
                <Button variant="contained" id="JobNumButton">Set Job/RMA# and Nodename</Button>
            </div>
            <div id="AIMETestsTable">
                <AccordionExpanded id="AIMETestAccordion" title={"AIME Tests"} data={[columns, rows]} showTableBool={false} buttonCollection={buttons}></AccordionExpanded>
                <DataTable title={""} rows={rows} columns={columns} hideFooterBool={true}></DataTable>
            </div>
            <Box
            id="logOutputBox"  
            >
                <Paper id="logOutputPaper" elevation={3}>{paperHTMLContents}</Paper>

            </Box>
        </div>
    )
}

export default NodePage;