import * as React from 'react';
import { Paper } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import { darken, lighten, styled } from '@mui/material/styles';


const columns = [
  { field: 'A', headerName: 'A#(WEB)', width: 100, headerAlign: "center", headerClassName: 'super-app-theme--header' },
  { field: 'Customer', headerName: 'Customer', width: 250, headerAlign: "center", headerClassName: 'super-app-theme--header' },
  { field: 'NodeName', headerName: 'NodeName', width: 200, headerAlign: "center", headerClassName: 'super-app-theme--header' },
  { field: 'JobNum', headerName: 'Job/RMA#', type: 'number', width: 200, headerAlign: "center", headerClassName: 'super-app-theme--header' },
  { field: 'Status', headerName: 'Status', width: 160, headerAlign: "center", headerClassName: 'super-app-theme--header' },
  { field: 'VLAN', headerName: 'VLAN', width: 200, headerAlign: "center", headerClassName: 'super-app-theme--header'},
  { field: 'BMCMAC', headerName: 'BMCMAC', width: 200, headerAlign: "center", headerClassName: 'super-app-theme--header' },
  { field: 'BMCIP', headerName: 'BMCIP', width: 200, headerAlign: "center", headerClassName: 'super-app-theme--header' },
  { field: 'MCE', headerName: 'MCE/EDAC', width: 200, headerAlign: "center", headerClassName: 'super-app-theme--header' },
  { field: 'SUM', headerName: 'SUM', width: 200, headerAlign: "center", headerClassName: 'super-app-theme--header' },
];

const paginationModel = { page: 0, pageSize: 7 };

const getBackgroundColor = (color, theme, coefficient) => ({
  backgroundColor: darken(color, coefficient),
  ...theme.applyStyles('light', {
    backgroundColor: lighten(color, coefficient),
    rowAlign: "center"
  }),
});


const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  '& .super-app-theme--0': {
    ...getBackgroundColor(theme.palette.info.main, theme, 0.7),
    '&:hover': {
      ...getBackgroundColor(theme.palette.info.main, theme, 0.6),
    },
  },
  '& .super-app-theme--1': {
    ...getBackgroundColor("#fff", theme, 0.7),
      '&:hover': {
        ...getBackgroundColor("#cccccc", theme, 0.6),
      },
  }
}));

export default function DataTable({info}) {

  return (
    <div>
      <h2 id="AIMETableTitle">AIME CONTROL PANEL</h2>
      <Paper sx={{ height: "auto", width: '75%', display: "flex", margin:"auto", marginTop: "1%", '& .super-app-theme--header': { backgroundColor: '#555', color: "white"}}}>
      <StyledDataGrid
      disableRowSelectionOnClick
      columns={columns}
      rows={info}
      sx={{ border: "2px solid lightgray",}}
      getRowClassName={(params) => `super-app-theme--${params.row.id % 2}`}
      />
    </Paper>
    </div>
  );
}
