// FILEPATH: d:/Practice/React/reactGeek/react-geeki/src/components/DiceRoller.js

import React, { useState } from 'react';
import './DiceRoller.css';

function DiceRoller() {
  const [numDice, setNumDice] = useState(1);
  const [results, setResults] = useState([]);

  const rollDice = () => {
    const newResults = [];
    for (let i = 0; i < numDice; i++) {
      newResults.push(Math.floor(Math.random() * 6) + 1);
    }
    setResults(newResults);
  };

  return (
    <div className="DiceRoller">
      <div className="controls">
        <label htmlFor="numDice">Number of Dice:</label>
        <input
          type="number"
          id="numDice"
          min="1"
          max="10"
          value={numDice}
          onChange={(e) => setNumDice(parseInt(e.target.value))}
        />
        <button onClick={rollDice}>Roll Dice</button>
      </div>
      <div className="results">
        {results.map((result, index) => (
          <div key={index} className="die">
            {result}
          </div>
        ))}
      </div>
      {results.length > 0 && (
        <p className="total">
          Total: {results.reduce((sum, num) => sum + num, 0)}
        </p>
      )}
    </div>
  );
}

export default DiceRoller;
