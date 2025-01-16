// FILEPATH: d:/Practice/React/reactGeek/react-geeki/src/components/CoinFlipper.js

import React, { useState } from 'react';
import Coin from './Coin';
import './CoinFlipper.css';

function CoinFlipper() {
  const [face, setFace] = useState(null);
  const [flips, setFlips] = useState(0);
  const [heads, setHeads] = useState(0);
  const [tails, setTails] = useState(0);

  const flipCoin = () => {
    const result = Math.random() < 0.5 ? 'heads' : 'tails';
    setFace(result);
    setFlips(flips + 1);
    if (result === 'heads') {
      setHeads(heads + 1);
    } else {
      setTails(tails + 1);
    }
  };

  const reset = () => {
    setFace(null);
    setFlips(0);
    setHeads(0);
    setTails(0);
  };

  return (
    <div className="CoinFlipper">
      <Coin face={face} />
      <button onClick={flipCoin}>Flip Coin</button>
      <button onClick={reset}>Reset</button>
      <p>Out of {flips} flips, there have been {heads} heads and {tails} tails.</p>
    </div>
  );
}

export default CoinFlipper;
