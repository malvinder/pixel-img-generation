import { memo, useEffect, useState } from 'react';
import './App.css';

const App = memo(() => {
  const height = 128;
  const width = 256;

  const [img, setImg] = useState(<div>
    Loading image
  </div>);

  const getColor = (row, col) => {
    return `rgb(${row},${col},${128})`;
  };

  const setColor = (row, col) => {
    document.body.style.backgroundColor = getColor(row, col);
  };

  /*const generateImage = () => {
    const rows = [];

    for (let i = 1; i < height; i++) {
      const cols = [];

      for (let j = 1; j < width; j++) {

        cols.push(
          <div
            className="col"
            key={`col-${j}`}
            onClick={() => setColor(j, i)}
            style={{backgroundColor: getColor(j, i)}} />
        );
      }

      rows.push(
        <div className="row" key={`row-${i}`}>
          {cols}
        </div>
      );
    }

    setImg(rows);
  };*/

  const generateImage = () => {
    const canvas = document.getElementById('paletteCanvas');
    const ctx = canvas.getContext('2d');

    for (let i=0; i<width; i++) {
      for (let j=0; j<height; j++) {
        ctx.fillStyle = `rgb(${i}, ${j},128)`;
        ctx.fillRect(i, j, height, width);
      }
    }
  };

  useEffect(() => {
    generateImage();
  }, []);

  return (
    <div className="palette">
      <canvas id="paletteCanvas" width={width} height={height} />
    </div>
  );
});

export default App;
