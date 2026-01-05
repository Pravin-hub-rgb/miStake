import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import MinesGame from './components/Mines/MinesGame';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/mines" element={<MinesGame />} />
          <Route path="/about" element={<Dashboard />} />
          <Route path="/support" element={<Dashboard />} />
          <Route path="/privacy" element={<Dashboard />} />
          <Route path="/terms" element={<Dashboard />} />
          <Route path="/responsible" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
