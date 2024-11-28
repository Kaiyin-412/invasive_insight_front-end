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
import { useNavigate } from 'react-router-dom';

function SideBar() {

  // handle in showin the settings
  const [ShowSettings, SetShowSettings] = useState(false);

  // handle for the change in font size 
  const {fontSize} =useContext(FontSizeContext);

  const naviagte = useNavigate();

  // handle for navigation
  const NavigatePage = (e,path)=>{
    e.preventDefault();
    naviagte(path);
  }

  // pop out the settings
  const ToggleSettings= (e) =>{
    e.preventDefault();
    SetShowSettings(true);
  }

  // close the settings
  const CloseSettings = (e) =>{
    e.preventDefault();
    SetShowSettings(false);
  }

  return (
    <div className='SideBar-container' style={{fontSize}}>

        <div className='SideBar-MenuBar'>
            <img src={Logo} alt='Logo'/>

            <button className='button-hover' onClick={(e)=>NavigatePage(e,"/LandingPage")}>
              <FaHome className='icon'/> <p>Home</p>
            </button>

            <button className='button-hover' onClick={(e)=>NavigatePage(e,"/LandingPage/Profile")}>
              <FaUser className='icon'/> <p>Profile</p>
            </button>

            <button className='button-hover'onClick={(e)=>NavigatePage(e,"/LandingPage/Dashboard")}>
              <FaChartBar className='icon'/> <p>Dashboard</p>
            </button>

            <button className='button-hover' onClick={(e)=>NavigatePage(e,"/LandingPage/Quiz")}>
              <FaFlag className='icon'/> <p>Quiz</p>
            </button>

            <button className='button-hover' onClick={(e)=>NavigatePage(e,"/LandingPage/Forum")}>
              <FaCommentAlt className='icon'/> <p>Forum</p>
            </button>

              <div className='SideBar-MenuBar2'>
                <button>
                  <FaSignOutAlt className='icon-logout' onClick={(e)=>NavigatePage(e,"/")}/> <p>Log out</p>
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