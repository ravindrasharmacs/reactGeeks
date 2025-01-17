// FILEPATH: d:/Practice/React/reactGeek/react-geeki/src/components/GuessTheNumber.js

import React, { useState, useEffect } from 'react';
import './GuessTheNumber.css';

function GuessTheNumber() {
  const [targetNumber, setTargetNumber] = useState(0);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    generateNewNumber();
  }, []);

  const generateNewNumber = () => {
    setTargetNumber(Math.floor(Math.random() * 100) + 1);
    setGuess('');
    setMessage('');
    setAttempts(0);
  };

  const handleGuess = (e) => {
    e.preventDefault();
    const userGuess = parseInt(guess);
    setAttempts(attempts + 1);

    if (isNaN(userGuess)) {
      setMessage('Please enter a valid number.');
    } else if (userGuess === targetNumber) {
      setMessage(`Congratulations! You guessed the number in ${attempts + 1} attempts.`);
    } else if (userGuess < targetNumber) {
      setMessage('Too low! Try a higher number.');
    } else {
      setMessage('Too high! Try a lower number.');
    }
  };

  return (
    <div className="GuessTheNumber">
      <p>I'm thinking of a number between 1 and 100. Can you guess it?</p>
      <form onSubmit={handleGuess}>
        <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          placeholder="Enter your guess"
          min="1"
          max="100"
          required
        />
        <button type="submit">Guess</button>
      </form>
      {message && <p className="message">{message}</p>}
      <p>Attempts: {attempts}</p>
      <button onClick={generateNewNumber}>New Game</button>
    </div>
  );
}

export default GuessTheNumber;
