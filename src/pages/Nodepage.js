import * as React from 'react';
import { useEffect, useState } from 'react';
import NodePageAppBar from '../Components/NodePageAppBar'
import AccordionExpanded from '../Components/AccordionExpanded';
import { Button } from '@mui/material';

function NodePage() {

    const [rows, setRows] = useState([]);
    const [columns, setColumns] = useState([]);


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

    useEffect(() => {
        document.title = "NodePage";

        
        clockUpdate()
        
        setRows([{ id: 11, A: "c11", Customer: "P&G", NodeName: "node11", JobNum: "124", Status: "Idle", VLAN: "0.0.0.0.0", BMCMAC: "0.0.0.0.0", BMCIP: "0.0.0.0.0", MCE: "OK", SUM: "OK" },])
            
        setColumns([])
        })


    return (

        <div id="NodePage">
            <NodePageAppBar></NodePageAppBar>
            <div id="clock">
                <span id="dateSpan">January 01, 1999 at 00:00:00 AM</span>
            </div>
            <div id="AIMEInfoDiv">
                <AccordionExpanded title={"AIME Info"} columns={columns} rows={rows}></AccordionExpanded>
            <Button id="QAButton">Perform QA</Button>
            <Button id="JobNumButton">Set Job/RMA# and Nodename</Button>
            </div>
            <div id="SystemInfoDiv">
                <AccordionExpanded title={"System Info"} columns={columns} rows={rows}></AccordionExpanded>
            </div>
        </div>
    )
}

export default NodePage;