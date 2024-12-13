import React from 'react';
import SideBar from '../SideBar/SideBar';
import badgeImage from '../../image/Dashboard_image/badge.png';
import './DashboardPage.css'; 
import { id } from '../../Login_page/Login/login';
import axios from 'axios';

// get the user score
const getUserScore = async ()=>{
  try{
    const res = await axios.get(`http://127.0.0.1:5000/user/users/${id}/score`);
    return res.data.data;
  }catch(err){
    console.log(err);
  }
}

// user's score store at here
const data = await getUserScore();

function DashboardPage() {
  
  // for debug
  console.log(data);

  return (
    <div className="dashboard-container">
      <SideBar />
      <div className="dashboard-content">
        <div className="dashboard-sections">
          {/* Quiz Progress Section */}
          <div className="dashboard-section quiz-progress">
            <h2>Quiz Progress</h2>
            <hr />
            <div className="quiz-progress-header">
              <span>No</span>
              <span>Quiz Name</span>
              <span>Score</span>
              <span>Ranking</span>
            </div>
            <div className="quiz-progress-list">
              {Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className="quiz-item">
                  <span>{index + 1}</span>
                  <span>Quiz Name Name Name Name</span>
                  <span>19/20</span>
                  <span>#2</span>
                </div>
              ))}
            </div>
          </div>

          {/* Badges Section */}
          <div className="dashboard-section badges">
            <h2>Badges</h2>
            <hr />
            <div className="badges-grid">
              {Array.from({ length: 12 }).map((_, index) => (
                <div className="badge-item" key={index}>
                  <img src={badgeImage} alt={`Badge ${index + 1}`} />
                  <p>Badge {index + 1}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
