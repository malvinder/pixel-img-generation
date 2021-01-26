import { memo, useEffect, useState } from 'react';
import './App.css';

const App = memo(() => {
  const height = 128;
  const width = 256;

  const [img, setImg] = useState(<div>
    Loading image
  </div>);

  const getColor = (row, col) => {
    const red = Math.floor(col / height * width);
    const green = Math.floor(col / (Math.floor(height * Math.random())) + Math.floor(Math.random() * width));
    const blue = Math.floor((1 - (row + 1) / (height + 1)) * height);

    return `rgb(${red},${green},${blue})`;
  };

  const setColor = (row, col) => {
    document.body.style.backgroundColor = getColor(row, col);
  };

  const generateImage = () => {
    const rows = [];
    for (let i = 1; i < height; i++) {
      const cols = [];

      for (let j = 1; j < width; j++) {

        cols.push(
          <div
            className="col"
            key={`sub-${j}`}
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
  };

  useEffect(() => {
    generateImage();
  }, []);

  return (
    <div className="palette">
      {img}
    </div>
  );
});

export default App;
