import React, { useState ,useContext} from 'react'
import './CreateQuizQuestion.css';
import { PlusCircle, Save, Trash2 } from 'lucide-react';
import { FontSizeContext } from '../../../FontSize/FontSizeContext';

function CreateQuizQuestion() {

    // handle the change in fontsize
  const {fontSize} = useContext(FontSizeContext);

    // initialise the question
    let question ={
        id : 1,
        text : '',
        hint : '',
        option : ['','','',''],
        correctAnswer : 0
    }

    const [currentQuestion , setCurrentQuestion]= useState(question);

    // set the options enter by user into currentquestion
    const handleOption =(option , index)=>{
        const newOption = [...currentQuestion.option];
        newOption[index]=option;
        setCurrentQuestion({
            ...currentQuestion,
            option : newOption
        })
    }

    // add question text into currentquestion
    const handleQuestionText=(text)=>{
        setCurrentQuestion({
            ...currentQuestion,
            text : text
        })
    }

    // add question hint to currentQuestion
    const handleHint=(hint)=>{
        setCurrentQuestion({
            ...currentQuestion,
            hint : hint
        })
    }

    const [addQuestion , setAddQuestion]= useState(false);

    // store all the question
    const [allQuestion , setAllQuestion] = useState([]);
    
    // add current question into all question
    const handleAddquestion=()=>{
        if(currentQuestion.text.trim() ==='') return ;
        setAllQuestion((prevQuestions) => [
            ...prevQuestions,
            { ...currentQuestion, id: prevQuestions.length + 1 },
        ]);
        setAddQuestion(true);
    }

    const removeQuestion =(id)=>{

        // filter the array to remove the id which equal to the id that we want to delte
        const updateAll = allQuestion.filter(question => question.id !== id);

        const newQuestion = updateAll.map((question,index)=>({
            ...question,
            id : index +1
        }))

        setAllQuestion(newQuestion);
    }

  return (
    <div className='CreateQuizQuestion-container' style={{fontSize}}>
        <div className='CreateQuizQuestion-component'>

            <div className='CreateQuizQuestion-addQuestionPart'>
                <div className='CreateQuizQuestion-addQuestion'>
                    <h1>Quiz Creator</h1>

                    <div className='CreateQuizQuestion-addQuestion-form'>
                        <p>Question Text</p>

                        <input required type="text" onChange={(e)=>{handleQuestionText(e.target.value)}} className='CreateQuizQuestion-addQuestion-form-inputbutton'></input>

                        <div className='CreateQuizQuestion-addQuestion-form-option'>
                            <p>Answer Option</p>

                            {question.option.map((option,index)=>(
                                <div className='CreateQuizQuestion-addQuestion-form-option-input'>
                                    <input key={index} type='radio' required checked={currentQuestion.correctAnswer === index}
                                    onChange={()=>{setCurrentQuestion({
                                        ...currentQuestion,
                                        correctAnswer : index
                                    })}}></input>

                                    <input type='text' className='CreateQuizQuestion-addQuestion-form-option-input-align'
                                    onChange={(e)=>{
                                        handleOption(e.target.value, index);
                                    }} ></input>

                                </div>
                            ))}
                        </div>
                        <div>
                            <p>Hint</p>
                            <input type='text' required onChange={(e)=>{handleHint(e.target.value)}} className='CreateQuizQuestion-addQuestion-form-inputbutton'></input>
                        </div>
                        <button onClick={()=>{handleAddquestion()}}><PlusCircle size={20}/>Add question</button>
                    </div>
                </div>
            </div>

            <div className='CreateQuizQuestion-showQuestionPart'>
                <h1>Total Question Created : {allQuestion.length}</h1>
                {addQuestion && (
                    <div className='CreateQuizQuestion-showQuestionPart-component'>
                        {allQuestion.map((question,index)=>(
                            <div className='CreateQuizQuestion-showQuestionPart-innercomponent'>
                                <div className='CreateQuizQuestion-showQuestionPart-innercomponent-allign'>
                                    <p>{question.id}. {question.text}</p>
                                    <p>Options</p>
                                    {question.option.map((option)=>(
                                        <li>
                                            {option}
                                        </li>
                                    ))}
                                    <p>Hint : {question.hint}</p>
                                    <p>Answer : {question.option[question.correctAnswer]}</p>
                                </div>
                            <button><Trash2 onClick={()=>(removeQuestion(question.id))}size={20}/></button>
                            </div>
                        ))}
                    </div>
                )}  
                {allQuestion.length>0 && (
                    <div className='CreateQuizQuestion-showQuestionPart-button'>
                        <button><Save size={20}/>Save Quiz</button>
                    </div>
                )} 
            </div>

        </div>
    </div>
  )
}

export default CreateQuizQuestion