// FILEPATH: d:/Practice/React/reactGeek/react-geeki/src/components/Coin.js

import React from 'react';
import './CoinFlipper.css';
import headsImage from './images/heads.PNG';
import tailsImage from './images/tails.PNG';

function Coin({ face }) {
  return (
    <div className="Coin">
      {face && (
        <img 
          src={face === 'heads' ? headsImage : tailsImage} 
          alt={face} 
        />
      )}
    </div>
  );
}

export default Coin;
