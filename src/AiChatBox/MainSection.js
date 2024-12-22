import React, { useContext } from 'react';
import './MainSection.css'; // Create this CSS file for styling.
import Chatbot from './Chatbot'; // Import the Chatbot component
import Image from '../image/AiChatBox_image/Image.png';
import { FontSizeContext } from '../FontSize/FontSizeContext';

const MainSection = () => {

  // handle the change in fontsize
  const {fontSize} = useContext(FontSizeContext);

  return (
    <div className="main-section" style={{fontSize}}>
      <div className="banner">
        <img
          src={Image}
          alt="AI Chatbot Banner"
          className="banner-image"
        />
        <h2>How can we help?</h2>
      </div>
      <div className="description">
        <p>🛈 Ask a question.</p>
        <p>   AI Chatbot and Team can help.</p>
      </div>
      {/* Chatbot component included below */}
      <Chatbot />
    </div>
  );
};

export default MainSection;
