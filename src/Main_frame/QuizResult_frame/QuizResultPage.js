import React, { useEffect, useState,useContext } from 'react'
import SideBar from '../SideBar/SideBar'
import './quizresult.css';
import Badges from '../../image/Badge.png';
import axios from 'axios';
import { id } from '../../Login_page/Login/login';
import { FontSizeContext } from '../../FontSize/FontSizeContext';

function QuizResultPage(){

  // handle the change in fontsize
  const {fontSize} = useContext(FontSizeContext);

  const [rankingData, setRankingData] = useState([]);
  const [Score, SetScore]=useState(0);

  useEffect(()=>{
    const getAllScore = async ()=>{
      try{
        const res = await axios.get("http://127.0.0.1:5000/users/scores");
        // access data from backend 
        let data = [];
         data = res.data.data;
        console.log(data);

        // sort according the score 
        setRankingData(data.sort((a,b)=>b.score-a.score));

        // get the score of the user 
        const currentUser = data.find(user => user.user_id === id);
        console.log("current user : "+currentUser)

        // set the score
         SetScore(currentUser.score);

      }catch(err){
        console.log(err);
      }
    }; getAllScore();
  },[]);



  const userScore = Score;
  const totalScore = 10; 

  return (
    <div className="quiz-result-page" style={{fontSize}}>
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
                  <td>{index+1}</td>
                  <td>{item.username}</td>
                  <td>{item.score}/10</td>
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