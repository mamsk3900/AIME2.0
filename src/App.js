import './App.css';

import EnhancedTable from "./Components/EnhancedTable";
import AppBar from "./Components/AppBar";
import { useState, useEffect } from 'react';

function App() {
  const [rows, setRows] = useState([]);
  const addNodeToList = (newNode) => {
    setRows([...rows, newNode]);
  };
  
  useEffect(() => {
    // Call the function only once when the component mounts
    addNodeToList([18902, "Procter and Gamble", "node1", 5455, "idle", "1.0.0.0", "1.0.0.0.0", "1.0.0.0", "ok", "ok"]);
  }, []); // Empty dependency array means this runs once

  return (
    <div className="App">
      <AppBar id="AppBar"/>
      <EnhancedTable {...rows} />
      
    </div>
  );
}

export default App;
