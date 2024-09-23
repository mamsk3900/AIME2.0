import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const columns = [
  { field: 'A', headerName: 'A#(WEB)', width: 85 },
  { field: 'Customer', headerName: 'Customer', width: 250 },
  { field: 'NodeName', headerName: 'NodeName', width: 200 },
  {
    field: 'JobNum',
    headerName: 'Job/RMA#',
    type: 'number',
    width: 200,
  },
  {
    field: 'Status',
    headerName: 'Status',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
  { field: 'VLAN', headerName: 'VLAN', width: 200 },
  { field: 'BMCMAC', headerName: 'BMCMAC', width: 200 },
  { field: 'BMCIP', headerName: 'BMCIP', width: 200 },
  { field: 'MCE', headerName: 'MCE/EDAC', width: 200 },
  { field: 'SUM', headerName: 'SUM', width: 200 },
];

const rows = [
  { id: 1, A: "c1", Customer: "P&G", JobNum: "123", Status: "Idle", VLAN: "0.0.0.0.0", BMCMAC: "0.0.0.0.0", BMCIP: "0.0.0.0.0", MCE: "OK", SUM: "OK" },
  { id: 2, A: "c2", Customer: "P&G", JobNum: "124", Status: "Idle", VLAN: "0.0.0.0.0", BMCMAC: "0.0.0.0.0", BMCIP: "0.0.0.0.0", MCE: "OK", SUM: "OK" },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable() {
  return (
    <div>
      <h2 id="AIMETableTitle">AIME CONTROL PANEL</h2>
      <Paper sx={{ height: "auto", width: '75%', display: "flex", margin:"auto", marginTop: "1%" }}>
      <DataGrid
      
      rows={rows}
      columns={columns}
      initialState={{ pagination: { paginationModel } }}
      pageSizeOptions={[7, 14]}
      sx={{ border: "2px solid lightgray" }}
      />
    </Paper>
    </div>
  );
}
