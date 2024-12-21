import React from 'react'
import './CreateQuiz.css';
import { useNavigate } from 'react-router-dom';

function CreateQuiz() {

  const navigate = useNavigate();

  const navigateToQuizCreator =(e)=>{
    e.preventDefault();
    navigate('./CreateQuiz');
  }

  return (
    <div className='CreateQuiz-container'>
        <div className='CreateQuiz-component'>
            <h1>Create Your Own Quiz</h1>
            <div className='CreateQuiz-form'>
                <p>Quiz Name</p>
                <input type='text' required placeholder='Ex . Terrestrial Invasive Mammals'></input>
                <p>Quiz Type</p>
                <input type='text' required placeholder='Ex . Terrestrial Invaders '></input>
                <div className='CreateQuiz-Submit'>
                  <button onClick={(e)=>{navigateToQuizCreator(e)}}>Create</button>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default CreateQuiz