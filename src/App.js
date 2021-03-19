import React, { memo, useLayoutEffect, useRef } from 'react';
import './App.css';

const App = memo(() => {
  const height = 128;
  const width = 256;
  const canvasRef = useRef(null);

  const getColor = (red, green, blue) => {
    return `rgb(${red},${green},${blue})`;
  };

  const generateImage = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    for (let i=0; i<=255; i+=8) {
      for (let g=0; g<=255; g+=8) {
        for (let r=0; r<=255; r+=8) {
          ctx.fillStyle = getColor(i, r, g);
          ctx.fillRect(i, r, height, width);
        }
      }
    }
  };

  useLayoutEffect(() => {
    generateImage();
  }, []);
  return (
    <div className="palette">
      <canvas ref={canvasRef} width={width} height={height} />
    </div>
  );
});

export default App;
