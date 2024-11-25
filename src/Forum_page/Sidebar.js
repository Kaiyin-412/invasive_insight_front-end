import React, { useState } from "react";
import {
  FaHome,
  FaUser,
  FaChartBar,
  FaQuestionCircle,
  FaCommentAlt,
  FaSignOutAlt,
  FaCog,
} from "react-icons/fa";
import logo from "../image/Forum_page_image/invasive_insight_logo.png";
import "./forum.css"; // Use the combined CSS file

function Sidebar() {
  const [showSettings, setShowSettings] = useState(false);

  const toggleSettings = () => {
    setShowSettings((prev) => !prev);
  };

  return (
    <>
      <div className="sidebar">
        <div className="logo">
          <img src={logo} alt="Invasive Insight Logo" className="logo-image" />
        </div>
        <ul className="menu">
          <li>
            <FaHome /> Home
          </li>
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
