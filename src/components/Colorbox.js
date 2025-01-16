// FILEPATH: d:/Practice/React/reactGeek/react-geeki/src/components/ColorBox.js

import React, { useState } from 'react';
import './ColorBox.css';

function ColorBox() {
  const [color, setColor] = useState('#000000');

  const generateRandomColor = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return "#" + randomColor;
  }

  const changeColor = () => {
    const newColor = generateRandomColor();
    setColor(newColor);
  }

  return (
    <div 
      className="ColorBox" 
      style={{backgroundColor: color}}
      onClick={changeColor}
    >
      <p>Click me to change color!</p>
      <p>Current color: {color}</p>
    </div>
  );
}

export default ColorBox;
