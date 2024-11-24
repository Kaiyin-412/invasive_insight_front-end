import React , { useState } from 'react';
import './QuizResult.css'; // Import the CSS file for styling

function QuizResult() {
    // Sample data for initial state
    const [score, setScore] = useState(18); // Replace with dynamic score from props or API.
    const [totalScore, setTotalScore] = useState(20);
    const [badgeEarned, setBadgeEarned] = useState("Completed First Quiz");
    const [quizRanking, setQuizRanking] = useState([
        { id: 1, username: "User1", score: 19 },
        { id: 2, username: "User2", score: 19 },
        { id: 3, username: "User3", score: 19 },
    ]);

    return (
        <div className="quiz-result">
            {/* Score Section */}
            <div className="card score-card">
                <h2>Score</h2>
                <h1>{score} / {totalScore}</h1>
            </div>

            {/* Badge Section */}
            <div className="card badge-card">
                <h2>Badge Earned</h2>
                <div className="badge">
                    <img src="badge.png" alt="Badge" />
                    <p>{badgeEarned}</p>
                </div>
            </div>

            {/* Quiz Ranking Section */}
            <div className="card ranking-card">
                <h2>Quiz Ranking</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Ranking</th>
                            <th>Username</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {quizRanking.map((rank, index) => (
                            <tr key={rank.id}>
                                <td>#{index + 1}</td>
                                <td>{rank.username}</td>
                                <td>{rank.score} / 20</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default QuizResult;