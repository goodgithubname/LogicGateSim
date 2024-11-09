import React, { useState } from 'react';

import { SlArrowLeft } from "react-icons/sl";
import './Toolbar.css';

const Toolbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`toolbar ${isCollapsed ? 'collapsed' : ''}`}>
      {/* Collapse Button */}
      <button onClick={toggleSidebar} className="collapse-btn"></button>

      {/* Sidebar Content */}
      <div className="toolbar-items pt-5">
        <div className="logic-group">
          <h4>Inputs</h4>
          <div className="row">
            <button className="toolbar-button col-4"><div className="component-graphic"></div>
            <span className="component-label">Toggle Button</span></button>
            <button className="toolbar-button col-4"><div className="component-graphic"></div>
            <span className="component-label">Hold Button</span></button>
            <button className="toolbar-button col-4"><div className="component-graphic"></div>
            <span className="component-label">Pulse</span></button>
          </div>
        </div>
        <div className="logic-group">
          <h4>Logic Gates</h4>
          <div className="row">
            <button className="toolbar-button col-4"><div className="component-graphic"></div>
            <span className="component-label">NOT Gate</span></button>
            <button className="toolbar-button col-4"><div className="component-graphic"></div>
            <span className="component-label">OR Gate</span></button>
            <button className="toolbar-button col-4"><div className="component-graphic"></div>
            <span className="component-label">AND Gate</span></button>
          </div>
          <div className="row">
            <button className="toolbar-button col-4"><div className="component-graphic"></div>
            <span className="component-label">XOR Gate</span></button>
            <button className="toolbar-button col-4"><div className="component-graphic"></div>
            <span className="component-label">NAND Gate</span></button>
            <button className="toolbar-button col-4"><div className="component-graphic"></div>
            <span className="component-label">NOR Gate</span></button>
          </div>
          <div className="row">
            <button className="toolbar-button col-4"><div className="component-graphic"></div>
            <span className="component-label">XNOR Gate</span></button>
          </div>
        </div>
        <div className="logic-group">
          <h4>Outputs</h4>
          <div className="row">
            <button className="toolbar-button col-4"><div className="component-graphic"></div>
            <span className="component-label">LED</span></button>
            <button className="toolbar-button col-4"><div className="component-graphic"></div>
            <span className="component-label">Hex Output</span></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
