// FILEPATH: d:/Practice/React/reactGeek/react-geeki/src/components/Quiz.js

import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';

const questions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Jupiter", "Venus", "Saturn"],
    correctAnswer: "Mars"
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "4"
  }
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="quiz">
      {showResult ? (
        <Result score={score} total={questions.length} onRestart={restartQuiz} />
      ) : (
        <Question
          question={questions[currentQuestion]}
          onAnswer={handleAnswer}
          currentQuestion={currentQuestion + 1}
          totalQuestions={questions.length}
        />
      )}
    </div>
  );
}

export default Quiz;
