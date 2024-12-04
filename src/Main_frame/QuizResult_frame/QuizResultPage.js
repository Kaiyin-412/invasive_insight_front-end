import React from 'react'
import SideBar from '../SideBar/SideBar'
import './quizresult.css';

function QuizResultPage() {
  return (
    <div className="quizResultPage">
      {/* Sidebar Section */}
      <SideBar />
      
      {/* Main Content Section */}
      <main className="quizresult">
        <div className="score-container">
          <h3 className="score-title">Score</h3>
          <p className="score-value">18 / 20</p>
        </div>
        <div className="badge-container">
          <h3 className="badge-title">Badge Earned</h3>
          <hr className="badge-divider" />
          <div className="badge">
            <img src="path_to_badge" alt="Badge" className="badge-image" />
          </div>
          <p className="badge-description">Completed First Quiz</p>
        </div>
        <div className="quiz-ranking-container">
          <h3 className="quiz-ranking-title">Quiz Ranking</h3>
          <hr className="quiz-divider" />
          <div className="ranking-header">Ranking Username Score</div>
          <div className="ranking-details">
            {[...Array(6)].map((_, index) => (
              <p key={index}>
                #{index + 1} Name Name Name {20 - index}/20
              </p>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default QuizResultPage;