import React, { useContext, useState } from 'react'
import Logo from '../../image/Main_Frame/Logo/black invasive insight logo 1.png';
import './SideBar.css';
import Settings from './Settings';
import {
  FaHome,
  FaUser,
  FaChartBar,
  FaFlag,
  FaCommentAlt,
  FaSignOutAlt,
  FaCog,
} from "react-icons/fa";

import { FontSizeContext } from '../../FontSize/FontSizeContext';

function SideBar() {

  const [ShowSettings, SetShowSettings] = useState(false);

  // handle for the change in font size 
  const {fontSize} =useContext(FontSizeContext);

  const ToggleSettings= (e) =>{
    e.preventDefault();
    SetShowSettings(true);
  }

  const CloseSettings = (e) =>{
    e.preventDefault();
    SetShowSettings(false);
  }

  return (
    <div className='SideBar-container' style={{fontSize}}>

        <div className='SideBar-MenuBar'>
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

            <div className='SideBar-MenuBar2'>

              <button>
                <FaSignOutAlt className='icon-logout'/> <p>Log out</p>
              </button>

              <button>
                <FaCog className='icon-settings' onClick={(e)=>ToggleSettings(e)}/>
              </button>

            </div>
        </div>
        {ShowSettings && (
          <Settings OnClose={(e)=>CloseSettings(e)}/>
        )}
    </div>
  )
}

export default SideBar