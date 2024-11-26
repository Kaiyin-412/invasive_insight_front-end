import React from 'react'
import Logo from '../../image/Main_Frame/Logo/black invasive insight logo 1.png';
import './SideBar.css';
import {
  FaHome,
  FaUser,
  FaChartBar,
  FaFlag,
  FaCommentAlt,
  FaSignOutAlt,
  FaCog,
} from "react-icons/fa";

function Quiz_frame() {

  return (
    <div className='Quiz_Frame-container'>

        <div className='Quiz_Frame-MenuBar'>
            <img src={Logo} alt='Logo'/>

            <button className='button-hover'>
              <FaHome className='icon'/> <p>Home</p>
            </button>

            <button className='button-hover'>
              <FaUser className='icon'/> <p>Profile</p>
            </button>

            <button className='button-hover'>
              <FaChartBar className='icon'/> <p>Dashboard</p>
            </button>

            <button className='button-hover'>
              <FaFlag className='icon'/> <p>Quiz</p>
            </button>

            <button className='button-hover'>
              <FaCommentAlt className='icon'/> <p>Forum</p>
            </button>

            <div className='Quiz_Frame-MenuBar2'>

              <button>
                <FaSignOutAlt className='icon-logout'/> <p>Log out</p>
              </button>

              <button>
                <FaCog className='icon-settings'/>
              </button>

            </div>
        </div>
    </div>
  )
}

export default Quiz_frame