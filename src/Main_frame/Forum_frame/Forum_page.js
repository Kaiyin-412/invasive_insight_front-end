import React, { useContext } from 'react'
import Forum from "./Forum";
import "./forum.css";
import SideBar from '../SideBar/SideBar';
import { FontSizeContext} from '../../FontSize/FontSizeContext';

function Forum_page() {

  const {fontSize} =useContext(FontSizeContext);

  return (
    <div className="sidebarncontent" style={{fontSize}}>
        <SideBar className="Forum_page-sidebar" />
            <div className="forum">
                <Forum />
            </div>
    </div>
  )
}

export default Forum_page