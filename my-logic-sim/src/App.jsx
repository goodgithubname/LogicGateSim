import React from 'react';
import { AppNavbar, Canvas, Toolbar } from './components'; // Importing Navbar from centralized index.js

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="app-container">
      <AppNavbar />
      <Toolbar />
      <div className="content">
        <Canvas /> {/* Canvas with grid */}
      </div>
    </div>
  );
}

export default App;
