import './App.css';

import DataTable from './Components/DataTable';
import React from 'react';
import AppBar from "./Components/AppBar";
import { useState, useEffect } from 'react';

function App() {
  const rows = [
    { id: 1, A: "c1", Customer: "P&G", Nodename:"node1", JobNum: "123", Status: "Idle", VLAN: "0.0.0.0.0", BMCMAC: "0.0.0.0.0", BMCIP: "0.0.0.0.0", MCE: "OK", SUM: "OK" },
    { id: 2, A: "c2", Customer: "P&G", NodeName: "node2", JobNum: "124", Status: "Idle", VLAN: "0.0.0.0.0", BMCMAC: "0.0.0.0.0", BMCIP: "0.0.0.0.0", MCE: "OK", SUM: "OK" },
  ];

  return (
    <div className="App">
      <AppBar id="AppBar"/>
      <DataTable info={rows} title={"AIME Control Table"} />
      
    </div>
  );
}

export default App;
