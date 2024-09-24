import React from 'react';
import DataTable from "../Components/DataTable"
import AppBar from "../Components/AppBar";
import { useState, useEffect } from 'react';

function Home() {
  const [rows, setRows] = useState([])
  useEffect(() => { setRows([
    { id: 1, A: "c1", Customer: "The official united states of america and the outlying states", NodeName: "node1", JobNum: "123", Status: "Idle", VLAN: "0.0.0.0.0", BMCMAC: "0.0.0.0.0", BMCIP: "0.0.0.0.0", MCE: "OK", SUM: "OK" },
    { id: 2, A: "c2", Customer: "P&G", NodeName: "node2", JobNum: "123", Status: "Idle", VLAN: "0.0.0.0.0", BMCMAC: "0.0.0.0.0", BMCIP: "0.0.0.0.0", MCE: "OK", SUM: "OK" },
    { id: 3, A: "c3", Customer: "P&G", NodeName: "node3", JobNum: "123", Status: "Idle", VLAN: "0.0.0.0.0", BMCMAC: "0.0.0.0.0", BMCIP: "0.0.0.0.0", MCE: "OK", SUM: "OK" },
    { id: 4, A: "c4", Customer: "P&G", NodeName: "node4", JobNum: "124", Status: "Idle", VLAN: "0.0.0.0.0", BMCMAC: "0.0.0.0.0", BMCIP: "0.0.0.0.0", MCE: "OK", SUM: "OK" },
    { id: 5, A: "c5", Customer: "P&G", NodeName: "node5", JobNum: "123", Status: "Idle", VLAN: "0.0.0.0.0", BMCMAC: "0.0.0.0.0", BMCIP: "0.0.0.0.0", MCE: "OK", SUM: "OK" },
    { id: 6, A: "c6", Customer: "P&G", NodeName: "node6", JobNum: "124", Status: "Idle", VLAN: "0.0.0.0.0", BMCMAC: "0.0.0.0.0", BMCIP: "0.0.0.0.0", MCE: "OK", SUM: "OK" },
    { id: 7, A: "c7", Customer: "P&G", NodeName: "node7", JobNum: "123", Status: "Idle", VLAN: "0.0.0.0.0", BMCMAC: "0.0.0.0.0", BMCIP: "0.0.0.0.0", MCE: "OK", SUM: "OK" },
    { id: 8, A: "c8", Customer: "P&G", NodeName: "node8", JobNum: "124", Status: "Idle", VLAN: "0.0.0.0.0", BMCMAC: "0.0.0.0.0", BMCIP: "0.0.0.0.0", MCE: "OK", SUM: "OK" },
    { id: 9, A: "c9", Customer: "P&G", NodeName: "node9", JobNum: "123", Status: "Idle", VLAN: "0.0.0.0.0", BMCMAC: "0.0.0.0.0", BMCIP: "0.0.0.0.0", MCE: "OK", SUM: "OK" },
    { id: 10, A: "c10", Customer: "P&G", NodeName: "node10", JobNum: "124", Status: "Idle", VLAN: "0.0.0.0.0", BMCMAC: "0.0.0.0.0", BMCIP: "0.0.0.0.0", MCE: "OK", SUM: "OK" },
    { id: 11, A: "c11", Customer: "P&G", NodeName: "node11", JobNum: "124", Status: "Idle", VLAN: "0.0.0.0.0", BMCMAC: "0.0.0.0.0", BMCIP: "0.0.0.0.0", MCE: "OK", SUM: "OK" },
  ])
  }, []);

  return (
    <div className="Home">
      <AppBar id="AppBar"/>
      <DataTable info={rows} title={"AIME Control Table"} />
    </div>
  );
}

export default Home;
