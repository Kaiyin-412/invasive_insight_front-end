import React, { useContext } from 'react'
import './Settings.css';
import { FontSizeContext } from '../../FontSize/FontSizeContext';

function Settings({OnClose}) {

    const {changeFontSize} = useContext(FontSizeContext);

    // set for small font size
    const handleSmallClick = (e) =>{
        e.preventDefault();
        changeFontSize('12px');
        OnClose(e);
    }

    // set for big font size
    const handleBigClick = (e) =>{
        e.preventDefault();
        changeFontSize('18px');
        OnClose(e);
    }

  return (
    <div className='Settings-container'>
        <div className='Settings-component'>
            <h1>Text Size Ajustment</h1>
            <div className='Settings-buttons'>
                {/* after press the button the settings frame auto close */}
                <button onClick={(e)=>handleSmallClick(e)}>Small</button>
                <button onClick={(e)=>handleBigClick(e)}>Big</button>
            </div>
        </div>
    </div>
  )
}

export default Settings