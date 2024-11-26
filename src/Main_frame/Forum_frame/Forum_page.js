import React from 'react'
import Forum from "./Forum";
import "./forum.css";
import QuizFrame from '../SideBar/SideBar';
function Forum_page() {
  return (
    <div className="sidebarncontent">
        <QuizFrame className="Forum_page-sidebar" />
            <div className="forum">
                <Forum />
            </div>
    </div>
  )
}

export default Forum_page