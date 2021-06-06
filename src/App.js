import React, { memo, useLayoutEffect, useRef, useState } from 'react';
import './App.css';

const App = memo(() => {
  const height = 128;
  const width = 256;
  const canvasRef = useRef(null);
  const [uniqueColors, setUniqueColors] = useState(0); // this is for testing purpose[]

  const getColor = (red, green, blue) => {
    return `rgb(${red},${green},${blue})`;
  };

  const generateImage = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const colors = [];

    for (let i=0; i<=255; i+=8) {
      for (let g=0; g<=255; g+=8) {
        for (let r=0; r<=255; r+=8) {
          colors.push(getColor(i, r, g));
        }
      }
    }

    setUniqueColors(colors);

    let w=0, h=0;
    colors.forEach(uniqueColor => {
      ctx.fillStyle = uniqueColor;
      ctx.fillRect(w, h, 1, 1);
      w++;

      if (w > width) {
        w = 0;
        h++;
      }
    });
  };

  useLayoutEffect(() => {
    generateImage();
  }, []);
  return (
    <div className="palette">
      <input type="hidden" id="unique-colors" value={uniqueColors} />
      <canvas ref={canvasRef} width={width} height={height} />
    </div>
  );
});

export default App;
