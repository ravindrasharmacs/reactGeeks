// FILEPATH: d:/Practice/React/reactGeek/react-geeki/src/components/Question.js

import React from 'react';

function Question({ question, onAnswer, currentQuestion, totalQuestions }) {
  return (
    <div className="question">
      <h2>Question {currentQuestion} of {totalQuestions}</h2>
      <h3>{question.question}</h3>
      <div className="options">
        {question.options.map((option, index) => (
          <button key={index} onClick={() => onAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
