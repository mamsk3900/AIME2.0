// App.js
import "./App.css"
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Blankaime from './pages/Nodepage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Nodepage' element={<Blankaime/>}/>
      </Routes>
    </Router>
  );
};

export default App;
