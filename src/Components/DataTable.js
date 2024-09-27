import * as React from 'react';
import { Paper, Tooltip } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import { darken, lighten, styled } from '@mui/material/styles';
import { alignProperty } from '@mui/material/styles/cssUtils';

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
    fontSize: "120%",
    '&:hover': {
      ...getBackgroundColor(theme.palette.info.main, theme, 0.6),
    },
  },
  '& .super-app-theme--1': {
    ...getBackgroundColor("#fff", theme, 0.7),
    fontSize: "120%",
      '&:hover': {
        ...getBackgroundColor("#cccccc", theme, 0.6),
      },
    },
    '& .MuiDataGrid-cell': {
      borderRight: '1px solid rgba(224, 224, 224, 1)',
    },
    '& .MuiDataGrid-scrollbar': {
      display: "block"
    },
    '& .MuiDataGrid-columnSeparator:last-child': {
      color: "gray"
    }
}));

export default function DataTable({title, rows, columns, hideFooterBool, columnHeaderDisplayType}) {

  return (
    <div id="DataGridDiv">
      <h2 id="AIMETableTitle" style={{textAlign: "center"}}>{title}</h2>
      <Paper sx={{ height: "auto", width: '100%', margin:"auto", '& .super-app-theme--header': { backgroundColor: '#555', color: "white", }}}>
      <StyledDataGrid
      autoHeight
      disableRowSelectionOnClick
      disableColumnResize
      hideFooter={hideFooterBool}
      columns={columns}
      rows={rows}
      sx={{ border: "2px solid lightgray", width: "auto", '& .MuiDataGrid-columnHeader': {display: columnHeaderDisplayType}}}
      getRowClassName={(params) => `super-app-theme--${params.row.id % 2}`}      
      />
    </Paper>
    </div>
  );
}
