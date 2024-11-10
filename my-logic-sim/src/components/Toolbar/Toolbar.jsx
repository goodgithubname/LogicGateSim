import React, { useState } from 'react';
import { useDrag } from 'react-dnd';

import { SlArrowLeft } from "react-icons/sl";
import './Toolbar.css';

const Toolbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const DraggableButton = ({ label, type }) => {
    const [{ isDragging }, drag] = useDrag({
      type: 'LOGIC_GATE',
      item: { type },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });

    return (
      <button
        ref={drag}
        className="toolbar-button col-4"
        style={{
          opacity: isDragging ? 0.5 : 1,
          cursor: 'move',
        }}
      >
        <div className="component-graphic"></div>
        <span className="component-label">{label}</span>
      </button>
    );
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
            <DraggableButton label="Toggle Button" type="TOGGLE_BUTTON" />
            <DraggableButton label="Hold Button" type="HOLD_BUTTON" />
            <DraggableButton label="Pulse" type="PULSE" />
          </div>
        </div>
        <div className="logic-group">
          <h4>Logic Gates</h4>
          <div className="row">
            <DraggableButton label="NOT Gate" type="NOT_GATE" />
            <DraggableButton label="OR Gate" type="OR_GATE" />
            <DraggableButton label="AND Gate" type="AND_GATE" />
          </div>
          <div className="row">
            <DraggableButton label="XOR Gate" type="TOGGLE_BUTTON" />
            <DraggableButton label="NAND Gate" type="NAND_GATE" />
            <DraggableButton label="NOR Gate" type="NOR_GATE" />
          </div>
          <div className="row">
            <DraggableButton label="XNOR Gate" type="XNOR_GATE" />
          </div>
        </div>
        <div className="logic-group">
          <h4>Outputs</h4>
          <div className="row">
            <DraggableButton label="LED" type="LED" />
            <DraggableButton label="Hex Output" type="HEX_OUTPUT" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
