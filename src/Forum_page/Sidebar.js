import React, { useState } from "react";
import {
  FaUser,
  FaChartBar,
  FaQuestionCircle,
  FaCommentAlt,
  FaHistory,
  FaSignOutAlt,
  FaCog,
} from "react-icons/fa";
import logo from "../image/Forum_image/invasive_insight_logo.png";

function Sidebar() {
  const [showSettings, setShowSettings] = useState(false); // State to toggle the settings popup

  const toggleSettings = () => {
    setShowSettings((prev) => !prev); // Toggles the visibility
  };

  return (
    <>
      <div className="sidebar">
        <div className="logo">
          <img src={logo} alt="Invasive Insight Logo" className="logo-image" />
        </div>
        <ul className="menu">
          <li>
            <FaUser /> Profile
          </li>
          <li>
            <FaChartBar /> Dashboard
          </li>
          <li>
            <FaQuestionCircle /> Quiz
          </li>
          <li className="active">
            <FaCommentAlt /> Forum
          </li>
          <li>
            <FaHistory /> Quiz History
          </li>
        </ul>
        <div className="footer">
          <div className="logout">
            <FaSignOutAlt /> Log out
          </div>
          <div className="settings" onClick={toggleSettings}>
            <FaCog />
          </div>
        </div>
      </div>

      {/* Settings Popup at the Bottom Center */}
      {showSettings && (
        <div className="settings-popup">
          <h3>Text Size Adjustment</h3>
          <div className="settings-buttons">
            <button onClick={() => (document.body.style.fontSize = "14px")}>
              Small
            </button>
            <button onClick={() => (document.body.style.fontSize = "18px")}>
              Big
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Sidebar;
