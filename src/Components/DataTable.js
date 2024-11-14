import * as React from 'react';
import { Paper } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { darken, lighten, styled } from '@mui/material/styles';
import { useThemeContext } from "../theme/ThemeContextProvider";
import { useState, useEffect } from 'react';
import { Tooltip, ThemeProvider, CssBaseline } from '@mui/material';

const getBackgroundColor = (color, theme, coefficient) => ({
  backgroundColor: darken(color, coefficient),
  ...theme.applyStyles('light', {
    backgroundColor: lighten(color, coefficient),
    textAlign: "center",
    
  }),
});


const StyledDataGrid = styled(DataGrid)(({ theme, oddTableEntryColor, evenTableEntryColor }) => ({

  '& .super-app-theme--0': {
    ...getBackgroundColor(evenTableEntryColor, theme, 0.7),
    fontSize: "120%",
    '&:hover': {
      ...getBackgroundColor(evenTableEntryColor, theme, .6),
    },
  },
  '& .super-app-theme--1': {
    ...getBackgroundColor(oddTableEntryColor, theme, 0.6),
    fontSize: "120%",
      '&:hover': {
        ...getBackgroundColor(oddTableEntryColor, theme, 0.5),
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
    },
}));

export default function DataTable({title, rows, columns, hideFooterBool, columnHeaderDisplayType}) {
  const { theme } = useThemeContext();
  const [oddTableEntryColor, setOddTableEntryColor] = useState("#ffffff");
  const [evenTableEntryColor, setEvenTableEntryColor] = useState("#ffffff");


  useEffect(() => {
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <div id="DataGridDiv" >
        <h2 id="AIMETableTitle" style={{textAlign: "center", color: theme}}>{title}</h2>
        <Paper sx={{ height: "auto", width: '100%', margin:"auto", '& .super-app-theme--header': {color: "white", backgroundColor: theme.palette.primary}}}>
        <StyledDataGrid
        autoHeight
        disableRowSelectionOnClick
        disableColumnResize
        hideFooter={hideFooterBool}
        columns={columns}
        rows={rows}
        oddTableEntryColor = {oddTableEntryColor}
        evenTableEntryColor = {evenTableEntryColor}
        sx={{ border: "2px solid lightgray", width: "auto", '& .MuiDataGrid-columnHeader': {display: columnHeaderDisplayType}}}
        getRowClassName={(params) => `super-app-theme--${params.row.id % 2}`}      
        />
      </Paper>
      </div>

    </ThemeProvider>
  );
}
