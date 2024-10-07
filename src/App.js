// App.js
import "./App.css"
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import NodePage from './pages/Nodepage';
import BOMPage from "./pages/BOMpage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Nodepage/:id' element={<NodePage/>}/>
        <Route path='/Bom/:id' element={<BOMPage/>}/>
      </Routes>
    </Router>
  );
};

export default App;
