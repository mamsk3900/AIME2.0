import * as React from 'react';
import { Paper } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';


const columns = [
  { field: 'A', headerName: 'A#(WEB)', width: 85, headerAlign: "center" },
  { field: 'Customer', headerName: 'Customer', width: 250, headerAlign: "center" },
  { field: 'NodeName', headerName: 'NodeName', width: 200, headerAlign: "center" },
  { field: 'JobNum', headerName: 'Job/RMA#', type: 'number', width: 200, headerAlign: "center" },
  { field: 'Status', headerName: 'Status', description: 'This column has a value getter and is not sortable.', width: 160, headerAlign: "center" },
  { field: 'VLAN', headerName: 'VLAN', width: 200, headerAlign: "center"},
  { field: 'BMCMAC', headerName: 'BMCMAC', width: 200, headerAlign: "center" },
  { field: 'BMCIP', headerName: 'BMCIP', width: 200, headerAlign: "center" },
  { field: 'MCE', headerName: 'MCE/EDAC', width: 200, headerAlign: "center" },
  { field: 'SUM', headerName: 'SUM', width: 200, headerAlign: "center" },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable({info}) {

  return (
    <div>
      <h2 id="AIMETableTitle">AIME CONTROL PANEL</h2>
      <Paper sx={{ height: "auto", width: '75%', display: "flex", margin:"auto", marginTop: "1%" }}>
      <DataGrid
      
      rows={info}
      columns={columns}
      initialState={{ pagination: { paginationModel } }}
      pageSizeOptions={[7, 14]}
      sx={{ border: "2px solid lightgray" }}
      />
    </Paper>
    </div>
  );
}
