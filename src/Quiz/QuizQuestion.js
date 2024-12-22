import React, { useState, useEffect } from 'react';
import './QuizQuestion.css';
import Confetti from 'react-confetti';

function QuizQuestion({ questionData, onProceed, timeUp }) {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isChecked, setIsChecked] = useState(false);
    const [showHint, setShowHint] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [showFeedback, setShowFeedback] = useState(false);
    const [marks, setMarks] = useState(0);
    const [showConfetti, setShowConfetti] = useState(false);

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    const handleCheckAnswer = () => {
        setIsChecked(true);
        const isAnswerCorrect = selectedOption === questionData.answer;
        setIsCorrect(isAnswerCorrect);
        if (isAnswerCorrect) {
            setMarks((prevMarks) => prevMarks + 5);
            setShowConfetti(true);
        }
        setShowFeedback(true);
        setTimeout(() => {
            handleProceed();
        }, 5000);
    };

    const handleProceed = () => {
        onProceed(isCorrect);
        resetQuestionState();
    };

    const resetQuestionState = () => {
        setSelectedOption(null);
        setIsChecked(false);
        setShowHint(false);
        setShowFeedback(false);
        setShowConfetti(false);
    };

    useEffect(() => {
        if (timeUp) {  
            setIsChecked(true);
            setIsCorrect(false);
            setShowFeedback(false);
        }
    }, [timeUp]);

    const handleHintClick = () => {
        setShowHint((prev) => !prev);
    };

    return (
        <div className="quiz-body">
            {showConfetti && <Confetti />}
            <div className="quiz-container">
                <div className="marks-container">
                    <span className="star-icon">⭐</span>
                    <span className="marks-text">{marks}</span>
                </div>
                <div className="question-box">
                    <h2 className="question">{questionData.question}</h2>
                </div>

                {questionData.image && (
                    <div className="question-image">
                        <img src={questionData.image} alt="Question Image" />
                    </div>
                )}

                <div className="options-box">
                    {questionData.options.map((option, index) => (
                        <label key={index} className="option">
                            <input
                                type="radio"
                                name="quiz-option"
                                value={option}
                                checked={selectedOption === option}
                                onChange={() => handleOptionChange(option)}
                                className={`radio-button ${
                                    isChecked
                                        ? option === questionData.answer
                                            ? 'correct'
                                            : selectedOption === option
                                            ? 'incorrect'
                                            : ''
                                        : ''
                                }`}
                            />
                            <span className="option-text">{option}</span>
                        </label>
                    ))}
                </div>
                <button className="check-button" onClick={handleCheckAnswer} disabled={!selectedOption || timeUp}>
                    CHECK
                </button>
                <div
                    className={`hint-button-container ${showHint ? 'expanded' : ''}`}
                    onClick={handleHintClick}
                >
                    <span className="hint-logo">💡</span>
                    {showHint && <span className="hint-text">{questionData.hint}</span>}
                </div>
            </div>
            
            {showFeedback && (
                <div className="feedback-overlay">
                <div className={`feedback-box ${isCorrect ? 'correct-feedback' : 'incorrect-feedback'}`}>
                    <h2>{isCorrect ? 'Great Job!' : 'Oops, it is wrong!'}</h2>
                    <p>{questionData.explanation}</p>
                </div>
            </div>
            )}
        </div>
    );
}

export default QuizQuestion;