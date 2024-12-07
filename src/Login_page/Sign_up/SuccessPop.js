import React from 'react'
import './SuccessPop.css';
import { useNavigate } from 'react-router-dom';

function SuccessPop() {
    const navigate = useNavigate();

    const NavigateToLogin = (e) =>{
        e.preventDefault();
        navigate('/');
    }

  return (
    <div className='SuccesssPop-container'>
        <div className='SuccessPop-component'>
            <h1>Sign Up Successfully</h1>
            <button onClick={(e)=>NavigateToLogin(e)}>OK</button>
        </div>
    </div>
  )
}

export default SuccessPop