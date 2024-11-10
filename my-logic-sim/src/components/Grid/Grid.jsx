import React, { useRef, useEffect } from 'react';

function Grid() {
  const canvasRef = useRef(null);

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
      // Resize canvas to full window size
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width;
      canvas.height = height;

      // Use the smaller dimension to calculate grid size
      const gridSize = 20; // Adjust grid size if needed
      const gridSpacing = Math.min(width, height) / (Math.floor(Math.min(width, height) / gridSize));

      // Draw the grid with the new gridSpacing
      drawGrid(ctx, width, height, gridSpacing);
    };

    // Initial canvas size and grid drawing
    updateCanvasSize();

    // Redraw canvas on window resize
    window.addEventListener('resize', updateCanvasSize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, []);

  return <canvas ref={canvasRef} />;
}

export default Grid;
