import React from 'react';
import DataTable from "../Components/DataTable"
import AppBar from "../Components/AppBar";
import { useState, useEffect } from 'react';
import { startMakingNode } from '../NodeFactory';

function Home() {
  const [singleNode, setSingleNode] = useState([]);
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);


  useEffect(() => { 
    setSingleNode(startMakingNode());
    setRows([
    { id: 1, A: singleNode.getAHash,Customer: singleNode.getCustomer, NodeName: singleNode.getNodeName, JobNum: singleNode.getJobNum, Status: singleNode.getStatus, VLAN: singleNode.getVLAN, BMCMAC: singleNode.getBMCMAC, BMCIP: singleNode.getBMCIP, MCE: singleNode.getMCE, SUM: singleNode.getSUM }, //still needs work
    { id: 2, A: "c2", Customer: "P&G", NodeName: "node2", JobNum: "123", Status: "Idle", VLAN: "0.0.0.0.0", BMCMAC: "0.0.0.0.0", BMCIP: "0.0.0.0.0", MCE: "OK", SUM: "OK" },
  ])
  setColumns([
    { field: 'A', headerName: 'A#(WEB)', width: 115, flex: 0, headerAlign: "center", align: "center", headerClassName: 'super-app-theme--header',

      renderCell: (params) => (
        <a href={`https://www.example.com/${params.value}`} target="_blank" rel="noopener noreferrer">
        {params.value}
      </a>
      ),
     },
    { field: 'Customer', headerName: 'Customer', flex: 1, headerAlign: "center", align: "center", headerClassName: 'super-app-theme--header' },
    { field: 'NodeName', headerName: 'NodeName', editable: true, flex: 1, headerAlign: "center", align: "center", headerClassName: 'super-app-theme--header' },
    { field: 'JobNum', headerName: 'Job/RMA#', editable: true, type: 'number', flex: 1, headerAlign: "center", align: "center", headerClassName: 'super-app-theme--header' },
    { field: 'Status', headerName: 'Status', flex: 1, headerAlign: "center", align: "center", headerClassName: 'super-app-theme--header' },
    { field: 'VLAN', headerName: 'VLAN', flex: 1, headerAlign: "center", align: "center", headerClassName: 'super-app-theme--header'},
    { field: 'BMCMAC', headerName: 'BMCMAC', flex: 1, headerAlign: "center", align: "center", headerClassName: 'super-app-theme--header' },
    { field: 'BMCIP', headerName: 'BMCIP', flex: 1, headerAlign: "center", align: "center", headerClassName: 'super-app-theme--header' },
    { field: 'MCE', headerName: 'MCE/EDAC', flex: 1, headerAlign: "center", align: "center", headerClassName: 'super-app-theme--header' },
    { field: 'SUM', headerName: 'SUM', flex: 1, headerAlign: "center", align: "center", headerClassName: 'super-app-theme--header' },
  ])});
  
  
  useEffect(() => {
    document.title = "AIME 2.0";
  }, [])

  return (
    <div className="Home">
      <AppBar id="AppBar"/>
      <DataTable rows={rows} columns={columns} title={"AIME Control Table"} />
    </div>
  );
}

export default Home;
