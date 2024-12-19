import React from 'react'
import SideBar from '../SideBar/SideBar'
import './quizresult.css';
import Badges from '../../image/Badge.png';
import axios from 'axios';


  // get all user score
  const getAllScore = async ()=>{
    try{
      const res = await axios.get("http://127.0.0.1:5000/users/scores");
      return res.data.data;
    }catch(err){
      console.log(err);
    }
  }

// data for all user score and add await to reolve the promise 
const data =  await getAllScore();


function QuizResultPage(){


  console.log(data[0].score); // get the first score 


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
              src={Badges}
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