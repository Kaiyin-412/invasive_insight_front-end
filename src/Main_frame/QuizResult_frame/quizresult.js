import React from 'react';
import './quizresult.css';

function quizresult() {
  return (
    <div className="quizresult">
      <div className="score-section">
        <h3>Score</h3>
        <p>18 / 20</p>
      </div>
      <div className="badge-section">
        <h3>Badge Earned</h3>
        <div className="badge">
          <img src="path_to_badge" alt="Badge" />
          <p>Completed First Quiz</p>
        </div>
      </div>
      <div className="ranking-section">
        <h3>Quiz Ranking</h3>
        <table>
          <thead>
            <tr>
              <th>Ranking</th>
              <th>Username</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(6)].map((_, index) => (
              <tr key={index}>
                <td>#1</td>
                <td>Name Name Name</td>
                <td>19/20</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default quizresult;
