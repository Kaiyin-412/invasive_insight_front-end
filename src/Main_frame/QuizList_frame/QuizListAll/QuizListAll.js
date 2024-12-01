import React, { useEffect, useState } from 'react'
import SideBar from '../../SideBar/SideBar';
import './QuizListAll.css';
import QuizData from '../QuizListData/QuizListData';
import Component from '../Component/Component';

function QuizListAll() {
  // use to render the button
  const button = [
    { id: 1, label: "All Quizzes" },
    { id: 2, label: "Bookmarked" },
    { id: 3, label: "Terrestrial Invaders" },
    { id: 4, label: "Aquatic Invaders" },
    { id: 5, label: "Plant Invasions" },
  ];

  const [ButtonState, SetButtonState] = useState(1);

  // set state for the button so can shange the background color
  const ClickedButton = (id) =>{
    SetButtonState(id);
  }

  // update the color of the button
  const UpdateColor = (id) =>{
    return ButtonState === id ? {backgroundColor : "black", color : "white"} : {backgroundColor : "white" , color : "black"}
  };

  
  const [quizzes , setQuizzes] =useState(QuizData);


  // handle the bookmarked component
  const toggleBookmarked = (id) =>{
    const UpdateQuiz = quizzes.map((quiz)=>
      quiz.id === id ? {...quiz,bookmarked : !quiz.bookmarked} : quiz
    );
    setQuizzes(UpdateQuiz);
  };

    // use for debug purpose check the list of quizzes 
  useEffect(
     ()=> {
       console.log(quizzes);
     },[quizzes]
 );

 const [difficulty,setDifficulty] = useState(null);

 const ToggleDifficulty = (DifficultyLevel) =>{
  setDifficulty(DifficultyLevel);
 };

 // style for the text in the button for the difficulty
 const StyleButtonText =(level) =>{
  return difficulty === level ? {color : "black" , textDecoration : "underline" }:{color : "rgba(126, 126, 133, 0.636)" , textDecoration:"none"}
 };

  return (
    <div className='QuizList-container'>
      {/* render the sidebar */}
        <div className='QuizList-SideBar'>
            <SideBar/>
        </div>
        <div className='QuizList-Component'>
          <div className='QuizList-main'>
            <div className='QuizList-button'>
                {button.map((button)=>(
                  <button key={button.id} onClick={()=>ClickedButton(button.id)} style={UpdateColor(button.id)}>{button.label}</button>
                ))}
            </div>
            <div className='QuizList-level'>
              <p >Difficulty Level: </p>
              <button onClick={()=>ToggleDifficulty("Easy")} style={StyleButtonText("Easy")}>Easy</button>
              <button onClick={()=>ToggleDifficulty("Medium")} style={StyleButtonText("Medium")}>Medium</button>
              <button onClick={()=>ToggleDifficulty("Hard")} style={StyleButtonText("Hard")}>Hard</button>
            </div>
            {/* render the component using the quizdata */}
            <div className='QuizList-quiz'>
                {quizzes.filter((quiz)=>{
                  if (ButtonState === 1 && !difficulty) return true;
                  if (ButtonState === 2 && !difficulty) return quiz.bookmarked;
                  if (ButtonState === 3 && !difficulty) return quiz.type === "Terrestrial Invaders";
                  if (ButtonState === 4 && !difficulty) return quiz.type === "Aquatic Invaders";
                  if (ButtonState === 5 && !difficulty) return quiz.type === "Plant Invasions";
                  if (ButtonState === 1 && difficulty) return quiz.difficulty === difficulty;
                  if (ButtonState === 2 && difficulty) return (quiz.bookmarked && quiz.difficulty ===difficulty);
                  if (ButtonState === 3 && difficulty) return (quiz.type === "Terrestrial Invaders" && quiz.difficulty === difficulty);
                  if (ButtonState === 4 && difficulty) return (quiz.type === "Aquatic Invaders" && quiz.difficulty === difficulty);
                  if (ButtonState === 5 && difficulty) return (quiz.type === "Plant Invasions" && quiz.difficulty === difficulty);
                  return true;
                }).map((quiz)=>(
                  <Component quiz={quiz} key={quiz.id} toggleBookmarked={toggleBookmarked}/>
                ))}
            </div>
          </div>
          
        </div>  
    </div>
  )
}

export default QuizListAll