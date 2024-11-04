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
        let dateSpan = document.getElementById("dateSpan")
        const intervalID = setInterval(() => {
            let date = new Date();
    
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

    function getNodeHash(windowPathname) {
        windowPathname = windowPathname.substring(1, windowPathname.length);
        windowPathname = windowPathname.substring(windowPathname.indexOf("/"), windowPathname.length);
        return windowPathname;

    }

    function createData(id, name, shape) {
        return {id, name, shape};

    }

    useEffect(() => {
        let MCEstatus="success";
        let EDACstatus="success";
        let windowPathname = window.location.pathname;
        document.title = "NodePage";

        
        localStorage.setItem("nodeAHash", getNodeHash(windowPathname));
        
        clockUpdate();
        
        setRows(createData(1, "chub", "round"));
            
        setColumns(["test", "status", "start time", "end time", "cycles", "log"]);

        setButtons([<Button variant="contained" sx={{marginRight: "10px"}} >STOP TESTS</Button>, <Button sx={{marginRight: "10px"}} variant="contained">RESTART AIME TESTS</Button>, <Button sx={{marginRight: "10px"}} variant="contained" color={MCEstatus}>MCE</Button>, <Button sx={{marginRight: "10px"}} variant="contained" color={EDACstatus}>EDAC</Button>, <Button sx={{marginRight: "10px"}} variant="contained">STREAM LOG</Button>]);
        //^This is for when the color of the MCE and EDAC buttons change color

        }, [])


    return (

        <div id="NodePage">
            <NodePageAppBar></NodePageAppBar>
            <div id="clock">
                <span id="dateSpan">January 01, 1999 at 00:00:00 AM</span>
            </div>
            <div style={{height: "fit-content"}}>
                <div id="AIMEInfoDiv">
                    <AccordionExpanded  title={"AIME Info"} data={[["fdsfs"], rows]} accordionId={"AimeInfoAccordion"}/>
                </div>
                <div id="SystemInfoDiv">
                    <AccordionExpanded title={"System Info"} data={[[], rows]} accordionId={"SysInfoAccordion"}/>
                </div>
            </div>
            <div id="buttonDiv">
                <Button variant="contained" id="QAButton" className="aimeTestButtons">Perform QA</Button>
                <Button variant="contained" id="JobNumButton" className="aimeTestButtons">Set Job/RMA# and Nodename</Button>
            </div>
            <div id="AIMETestsTable">
                <AccordionExpanded id="AIMETestAccordion" title={"AIME Tests"} data={[columns, rows]} showTableBool={false} buttonCollection={buttons} accordionId={"AimeTestAccordion"}></AccordionExpanded>
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