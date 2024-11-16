import React from 'react'
import Logo from '../../image/Main_Frame/Logo/black invasive insight logo 1.png';

function Quiz_frame() {
  return (
    <div className='Quiz_Frame-container'>
        <div>
            <img src={Logo} alt='Logo'/>
            <button>Profile</button>
            <button>Dashboard</button>
            <button>Quiz</button>
            <button>Forum</button>
            <button>Quiz History</button>
            <button>settings</button>
        </div>
    </div>
  )
}

export default Quiz_frame