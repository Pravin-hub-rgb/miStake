import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import About from './components/About';
import Support from './components/Support';
import MinesGame from './components/Mines/MinesGame';
import { initAudio, preloadSounds } from './utils/audio';
import './styles/App.css';

function App() {
  useEffect(() => {
    // Initialize audio system
    initAudio();

    // Preload game sounds
    preloadSounds().catch(console.warn);
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/mines" element={<MinesGame />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route path="/privacy" element={<Dashboard />} />
          <Route path="/terms" element={<Dashboard />} />
          <Route path="/responsible" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
