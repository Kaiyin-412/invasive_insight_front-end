import React from 'react'
import SideBar from '../SideBar/SideBar'
import './quizresult.css';

function QuizResultPage(){
  const userScore = 18; // Replace with dynamic data if available
  const totalScore = 20; // Replace with dynamic data if available
  const rankingData = [
    { rank: "#1", username: "Name Name Name", score: "19/20" },
    { rank: "#1", username: "Name Name Name", score: "19/20" },
    { rank: "#1", username: "Name Name Name", score: "19/20" },
    { rank: "#1", username: "Name Name Name", score: "19/20" },
    { rank: "#1", username: "Name Name Name", score: "19/20" },
    { rank: "#1", username: "Name Name Name", score: "19/20" },
  ];

  return (
    <div className="quiz-result-page">
      <SideBar /> {/* Use your existing Sidebar component */}
      <main className="result-main">
      <div className="score-section">
      <h2>Score</h2>
          <div className="divider-line"></div>
          <div className="score-box">
            <span className="user-score">{userScore}</span>
            <span className="divider"> / </span>
            <span className="total-score">{totalScore}</span>
          </div>
        </div>
        <div className="badge-section">
        <h2>Badge Earned</h2>
          <div className="divider-line"></div>
          <div className="badge">
            <img
              src="C:\Users\minzi\invasive_insight_front-end\src\image\Badge.png"
              alt="Badge"
            />
            <p>Completed First Quiz</p>
          </div>
        </div>
        <div className="ranking-section">
          <h2>Quiz Ranking</h2>
          <div className="divider-line"></div>
          <table className="ranking-table">
            <thead>
              <tr>
                <th>Ranking</th>
                <th>Username</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {rankingData.map((item, index) => (
                <tr key={index}>
                  <td>{item.rank}</td>
                  <td>{item.username}</td>
                  <td>{item.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default QuizResultPage;