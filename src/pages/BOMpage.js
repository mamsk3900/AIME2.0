import * as React from 'react';
import { useEffect, useState } from 'react';
import NodePageAppBar from '../Components/NodePageAppBar'
import AccordionExpanded from '../Components/AccordionExpanded';
import { Button, Paper, Box } from '@mui/material';
import DataTable from '../Components/DataTable';

function NodePage() {

    const [rows, setRows] = useState([]);
    const [columns, setColumns] = useState([]);

    useEffect(() => {
        let MCEstatus="success";
        let EDACstatus="success";
        document.title = "NodePage";

            
        setRows([{ id: 11, A: "c11", Customer: "P&G", NodeName: "node11", JobNum: "124", Status: "Idle", VLAN: "0.0.0.0.0", BMCMAC: "0.0.0.0.0", BMCIP: "0.0.0.0.0", MCE: "OK", SUM: "OK" },]);
            


        
        }, [])


    return (

        <div id="BOMPage">
            <NodePageAppBar></NodePageAppBar>
            <h1 id="BOMh1">Bill of Materials</h1>
            <div id="BOMAccordionDiv">
                <AccordionExpanded id="BOMSummaryAccordion" title={"BOM Summary"} data={[columns, rows]}></AccordionExpanded>
                <AccordionExpanded id="SystemAccordion" title={"System Info"} data={[columns, rows]} ></AccordionExpanded>
                <AccordionExpanded id="MotherboardAccordion" title={"Motherboard"} data={[columns, rows]}></AccordionExpanded>
                <AccordionExpanded id="CPUAccordion" title={"CPU"} data={[columns, rows]}></AccordionExpanded>
                <AccordionExpanded id="MemoryInfoAccordion" title={"Memory Info"} data={[columns, rows]}></AccordionExpanded>
                <AccordionExpanded id="GPUAcceleratorsAccordion" title={"GPU / MIC Accelerators"} data={[columns, rows]}></AccordionExpanded>
                <AccordionExpanded id="StorageDevicesAccordion" title={"Storage Devices"} data={[columns, rows]}></AccordionExpanded>
                <AccordionExpanded id="StorageControllersAccordion" title={"Storage Controllers"} data={[columns, rows]}></AccordionExpanded>
                <AccordionExpanded id="NetworkAccordion" title={"Network"} data={[columns, rows]}></AccordionExpanded>
                <AccordionExpanded id="DisplayAccordion" title={"Display"} data={[columns, rows]}></AccordionExpanded>
                <AccordionExpanded id="PS2PortsAccordion" title={"PS / 2 Ports"} data={[columns, rows]}></AccordionExpanded>
                <AccordionExpanded id="IPMIAccordion" title={"IPMI"} data={[columns, rows]}></AccordionExpanded>

            </div>
        </div>
    )
}

export default NodePage;