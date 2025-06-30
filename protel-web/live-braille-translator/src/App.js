import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MoreInfo from './pages/MoreInfo';
import Start from './pages/Start';
import './styles.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/moreinfo" element={<MoreInfo />} />
        <Route path="/start" element={<Start />} />
      </Routes>
    </Router>
  );
}

export default App;