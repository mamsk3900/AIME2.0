import './App.css';

import DataTable from './Components/DataTable';
import React from 'react';
import AppBar from "./Components/AppBar";
import { useState, useEffect } from 'react';

function App() {

  return (
    <div className="App">
      <AppBar id="AppBar"/>
      <DataTable title={"AIME Control Table"} />
      
    </div>
  );
}

export default App;
