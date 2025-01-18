// FILEPATH: src/components/ThemedButton.js
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#333' : '#fff',
        padding: '10px',
        border: 'none',
        cursor: 'pointer'
      }}
    >
      Toggle Theme
    </button>
  );
}

export default ThemedButton;
