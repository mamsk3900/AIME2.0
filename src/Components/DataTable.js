import * as React from 'react';
import { Paper } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import { darken, lighten, styled } from '@mui/material/styles';
import { alignProperty } from '@mui/material/styles/cssUtils';


const columns = [
  { field: 'A', headerName: 'A#(WEB)', width: 115, headerAlign: "center", align: "center", headerClassName: 'super-app-theme--header' },
  { field: 'Customer', headerName: 'Customer', width: 250, headerAlign: "center", align: "center", headerClassName: 'super-app-theme--header' },
  { field: 'NodeName', headerName: 'NodeName', width: 200, headerAlign: "center", align: "center", headerClassName: 'super-app-theme--header' },
  { field: 'JobNum', headerName: 'Job/RMA#', type: 'number', width: 150, headerAlign: "center", align: "center", headerClassName: 'super-app-theme--header' },
  { field: 'Status', headerName: 'Status', width: 150, headerAlign: "center", align: "center", headerClassName: 'super-app-theme--header' },
  { field: 'VLAN', headerName: 'VLAN', width: 250, headerAlign: "center", align: "center", headerClassName: 'super-app-theme--header'},
  { field: 'BMCMAC', headerName: 'BMCMAC', width: 250, headerAlign: "center", align: "center", headerClassName: 'super-app-theme--header' },
  { field: 'BMCIP', headerName: 'BMCIP', width: 250, headerAlign: "center", align: "center", headerClassName: 'super-app-theme--header' },
  { field: 'MCE', headerName: 'MCE/EDAC', width: 150, headerAlign: "center", align: "center", headerClassName: 'super-app-theme--header' },
  { field: 'SUM', headerName: 'SUM', width: 150, headerAlign: "center", align: "center", headerClassName: 'super-app-theme--header' },
];

const getBackgroundColor = (color, theme, coefficient) => ({
  backgroundColor: darken(color, coefficient),
  ...theme.applyStyles('light', {
    backgroundColor: lighten(color, coefficient),
    textAlign: "center",
    
  }),
});


const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  '& .super-app-theme--0': {
    ...getBackgroundColor(theme.palette.info.main, theme, 0.7),
    fontSize: "17px",
    '&:hover': {
      ...getBackgroundColor(theme.palette.info.main, theme, 0.6),
    },
  },
  '& .super-app-theme--1': {
    ...getBackgroundColor("#fff", theme, 0.7),
    fontSize: "17px",
      '&:hover': {
        ...getBackgroundColor("#cccccc", theme, 0.6),
      },
  },
  '& .MuiDataGrid-cell': {
    borderRight: '1px solid rgba(224, 224, 224, 1)', // Right border for cells
  },
}));

export default function DataTable({info}) {

  return (
    <div>
      <h2 id="AIMETableTitle">AIME CONTROL PANEL</h2>
      <Paper sx={{ height: "auto", width: '1920px', margin:"auto", '& .super-app-theme--header': { backgroundColor: '#555', color: "white"}}}>
      <StyledDataGrid
      autoHeight
      disableRowSelectionOnClick
      disableColumnResize
      columns={columns}
      rows={info}
      sx={{ border: "2px solid lightgray", width: "auto"}}
      getRowClassName={(params) => `super-app-theme--${params.row.id % 2}`}      
      />
    </Paper>
    </div>
  );
}
