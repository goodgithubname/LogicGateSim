import React from 'react';
import { AppNavbar, Toolbar, Canvas } from './components'; // Importing Navbar from centralized index.js

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app-container">
        <AppNavbar />
        <Toolbar />
        <div className="content">
          <Canvas />
          {/* <className /> Canvas with className */}
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
