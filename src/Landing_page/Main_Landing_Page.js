import React, { useContext } from 'react'
import Logo from '../image/Main_Lading_Page/Logo_image/logo.png';
import './Main_Landing_Page.css';
import Forest_img from '../image/Main_Lading_Page/Forest_image/Forest_image.png';
import TerrestrialInvasiveMammalsImg from '../image/Main_Frame/Terrestrial Invasive Mammals/Terrestrial_Invasive_Mammals_img.jpg';
import Button_img from '../image/Main_Lading_Page/Button/Button_img.png'
import { useNavigate } from 'react-router-dom';
import { FontSizeContext } from '../FontSize/FontSizeContext';

// render menu items 
function GenerateMenu (props){
  let path = "./" + props.menu_item;
if (props.menu_item === "Quiz") {
  path += "List";
}
  const navigate = useNavigate();

  const NavigatetoNext=(e,path)=>{
    e.preventDefault();
    navigate(path);
  }

  return(
    <a href={path} onClick={(e)=>NavigatetoNext(e,path)}>{props.menu_item}</a>
  );
}

function Main_Landing_Page() {

  // handle the change in fontsize
  const {fontSize} = useContext(FontSizeContext);

  const Menu = ['Forum','Quiz','Dashboard','Profile'];

  return (
    <div className='Main_Landing_page-container' style={{fontSize}}>

        <div className='Main_Landing_page-section'>

            <div className='Main_Landing_page-MenuBar'>
              <img id='Logo_img' src={Logo} alt="Logo" />
              <h1>Invasive Insight</h1>

              <div className='Main_Landing_page-right'>
                {/* Render the menu items */}
                {Menu.map((menu) => <GenerateMenu menu_item={menu}/>)}
                <button type='submit'>Log out</button>
              </div>

            </div>

            <div className='Main_Landing_page-img'>
              <img src={Forest_img} alt="Forest"/>
            </div>

            <div className='Main_Landing_page-QuizContainer'>
                <p>My Learnings</p>
                  <div className='Main_Landing_page-QuizSection'>
                    <div className="Main_Landing_page-Quiz">
                      <img src={TerrestrialInvasiveMammalsImg} alt='Tapirus indicus'/>
                      <p>Terrestrial Invasive Mammals</p>
                      <a href="./">Replay Quiz</a>
                    </div> 

                    <div className="Main_Landing_page-Quiz">
                      <img src={TerrestrialInvasiveMammalsImg} alt='Tapirus indicus'/>
                      <p>Terrestrial Invasive Mammals</p>
                      <a href="./">Replay Quiz</a>
                    </div> 
                  </div>

            </div>
            <div className='Main_Landing_page-button'>
              <button>
                <img src={Button_img} alt="message symbol"/>
              </button>
            </div>
        </div>
    </div>
  )
}

export default Main_Landing_Page