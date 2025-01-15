// FILEPATH: d:/Practice/React/reactGeek/react-geeki/src/TodoItem.js

import React from 'react';

function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <li>
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        onClick={onToggle}
      >
        {todo.text}
      </span>
      <button onClick={onRemove}>Remove</button>
    </li>
  );
}

export default TodoItem;
