// import './QuizApp.css';
import React, { useEffect, useState } from 'react';
import QuizQuestion from './QuizQuestion.js';
import Confetti from 'react-confetti';

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
    const [showConfetti, setShowConfetti] = useState(false);
  
    useEffect(() => {
        if (timer === 0 && !isQuizCompleted) {
            setTimeUp(true);
            handleProceed(false); // Assume answer is wrong if time runs out
        }
        const countdown = setInterval(() => {
          if (!isQuizCompleted) {
            setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
          }
        }, 1000);
  
        return () => clearInterval(countdown); // Clear interval on component unmount
    }, [timer, isQuizCompleted]);
  
    // Reset timer and timeUp for each question
    useEffect(() => {
        setTimer(60); // Reset timer to 60 seconds for each question
        setTimeUp(false);
    }, [currentQuestionIndex]);
  
    const handleProceed = (isCorrect) => {
      if (isCorrect) {
        setScore(score + 1);
        setShowConfetti(true); // Trigger confetti effect
  
        // Hide confetti after a short duration
        setTimeout(() => {
          setShowConfetti(false);
        }, 3000); // 3 seconds
      }
  
        if (currentQuestionIndex < quizData.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setIsQuizCompleted(true);
        }
    };
  
    const progressWidth = ((currentQuestionIndex + 1) / quizData.length) * 100;
  
    return (
      <div className="quiz-body">
        {showConfetti && <Confetti />} {/* Render confetti when showConfetti is true */}
        {!isQuizCompleted && (
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
        )}
        {isQuizCompleted ? (
          <div className="feedback-overlay">
            <div className="feedback-box correct-feedback">
              <p>Quiz Completed! 🎉</p>
              <p>You scored {score} out of {quizData.length}.</p>
              <button className="navigation-button" onClick={() => {/* extra navigatebutton*/}}>
              Go to Result Page
            </button>
            </div>
          </div>
        ) : (
          <QuizQuestion
            questionData={quizData[currentQuestionIndex]}
            onProceed={handleProceed}
            timeUp={timeUp} // Pass timeUp as a prop
          />
        )}
      </div>
    );
  }

export default QuizApp;
