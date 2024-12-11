import React from 'react'
import './Component.css';
// import TerrestrialInvasiveMammalsImg from '../../../image/Main_Frame/Terrestrial Invasive Mammals/Terrestrial_Invasive_Mammals_img.jpg';
import { MdBookmark } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

function Component({quiz,toggleBookmarked}) {

  // style the bookmarked by check the value of quiz.bookmarked 
  const IconStyle={
    color : quiz.bookmarked ? 'green' : 'rgb(223, 248, 223)'
  };

  const navigate = useNavigate();

  const NavigateToQuiz =(e)=>{
    e.preventDefault();
    navigate('./Quiz');
  }
  
  return (
    <div className='Component-container'>
        <div className='Component-main'>
            <img src={quiz.image} alt={quiz.tittle}/>
        </div>
        <div className='Component-type-bookmarked'>
          <p style={{color : quiz.color}}>{quiz.type}</p>
          <button onClick={()=>{
            toggleBookmarked(quiz.id);
          }} style={IconStyle} className='Component-icon'><MdBookmark className="Component-bookmarked"/></button>
        </div>
        <div className='Component-tittle'>
          <h1>{quiz.title}</h1>
        </div>
        <div className='Component-quiz'>
          <a href='./LandingPage/QuizList/Quiz' onClick={(e)=>NavigateToQuiz(e)}>Start Quiz</a>
        </div>
    </div>
  )
}

export default Component