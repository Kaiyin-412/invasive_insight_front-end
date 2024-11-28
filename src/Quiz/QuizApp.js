// import './QuizApp.css';
import React, { useEffect, useState } from 'react';
import QuizQuestion from './QuizQuestion.js';
// import './styles.css';

  const fetchQuizData = (input) => { // this function will query an API and parse the response as JSON
    return fetch(input)
    .then((response) => response.json()) // parse the response as JSON
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });
 }
 const quizData = await fetchQuizData('http://localhost:5000/quiz_all'); // fetch all the questions from the URL

function QuizApp() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [timer, setTimer] = useState(60);
  const [timeUp, setTimeUp] = useState(false);

  useEffect(() => {
      if (timer === 0) {
          setTimeUp(true);
          handleProceed(false); // Assume answer is wrong if time runs out
      }
      const countdown = setInterval(() => {
          setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
      }, 1000);

      return () => clearInterval(countdown); 
  }, [timer]);

  useEffect(() => {
      setTimer(60); 
      setTimeUp(false);
  }, [currentQuestionIndex]);

  const handleProceed = (isCorrect) => {
      if (isCorrect) setScore(score + 1);

      if (currentQuestionIndex < quizData.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
          setIsQuizCompleted(true);
      }
  };

  const progressWidth = ((currentQuestionIndex + 1) / quizData.length) * 100;

  return (
      <div>
          <div className="progress-timer-wrapper">
              <div className="progress-container">
                  <div className="progress-bar">
                      <div className="progress" style={{ width: `${progressWidth}%` }}></div>
                  </div>
              </div>
              <div className="timer-container">
                  <span className="timer-icon">⏰</span>
                  <span className="timer">{timer}</span>
              </div>
          </div>
          {isQuizCompleted ? (
              <div className="score-container">
                  <div className="score-circle">
                      <p>{score} / {quizData.length}</p>
                  </div>
              </div>
          ) : (
              <QuizQuestion
                  questionData={quizData[currentQuestionIndex]}
                  onProceed={handleProceed}
                  timeUp={timeUp} 
              />
          )}
      </div>
  );
}

export default QuizApp;
