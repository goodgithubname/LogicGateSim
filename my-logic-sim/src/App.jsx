import React from 'react';
import { AppNavbar, Toolbar, Canvas } from './components'; // Importing Navbar from centralized index.js

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app-container" style={{ overflow: 'hidden', height: '100vh' }}>
        <AppNavbar />
        <Toolbar />
        <div className="content" style={{ width: '100%', height: '100%', position: 'relative' }}>
          <Canvas />
          {/* <Grid /> Canvas with grid */}
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
