import React from 'react'
import SideBar from '../SideBar/SideBar';
import './QuizList.css';
function QuizList() {
  return (
    <div className='QuizList-container'>
        <div className='QuizList-SideBar'>
            <SideBar/>
        </div>
        <div className='QuizList-Component'>
          <div className='QuizList-button'>
              <button>All Quizzes</button>
              <button>Bookmarked</button>
              <button>Terrestrial Invaders</button>
              <button>Aquatic Invaders</button>
              <button>Plant Invasions</button>
          </div>
          <div className='QuizList-level'>
            <p>Difficulty Level: </p>
            <a>Easy</a>
            <a>Medium</a>
            <a>Hard</a>
          </div>
        </div>  
    </div>
  )
}

export default QuizList