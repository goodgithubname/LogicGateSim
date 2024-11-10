import { useDrop } from 'react-dnd';
import { useState, useRef, useEffect } from 'react';
import Grid from '../Grid';  // Importing the Grid component

const Canvas = () => {
  const [components, setComponents] = useState([]);
  const canvasRef = useRef(null); // Reference for the canvas

  // Setting up the drop functionality
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: 'LOGIC_GATE', // Only accept items of type 'LOGIC_GATE'
    drop: (item, monitor) => {
      const canvasRect = canvasRef.current.getBoundingClientRect();
      const offsetX = monitor.getClientOffset().x - canvasRect.left; // X position of the drop on canvas
      const offsetY = monitor.getClientOffset().y - canvasRect.top;  // Y position of the drop on canvas

      setComponents((prev) => [
        ...prev,
        {
          type: item.type,
          id: Date.now(),
          label: item.label,
          position: { x: offsetX, y: offsetY },
        },
      ]);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const drawGrid = (ctx, width, height, gridSize) => {
    ctx.strokeStyle = '#ccc'; // Grid line color
    ctx.lineWidth = 0.5;

    // Draw vertical lines
    for (let x = 0; x <= width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }

    // Draw horizontal lines
    for (let y = 0; y <= height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const updateCanvasSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width;
      canvas.height = height;

      const gridSize = 20; // Adjust grid size if needed
      drawGrid(ctx, width, height, gridSize);
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, []);

  return (
    <div
      ref={drop}
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        border: '2px dashed #ccc',
        background: 'rgba(255, 255, 255, 0.8)', // Transparent background for dropped items
      }}
    >
      {/* Canvas Background with Grid */}
      <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0 }} />

      {/* Render the dropped components */}
      {components.map((component) => (
        <div
          key={component.id}
          className="dropped-item"
          style={{
            position: 'absolute',
            left: component.position.x,
            top: component.position.y,
            border: '1px solid black',
            padding: '10px',
            backgroundColor: 'lightgray',
            width: '100px', // Set a fixed width for the components
            height: '50px', // Set a fixed height for the components
          }}
        >
          <span>{component.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Canvas;
