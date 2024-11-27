import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import MainlandingPage from './Landing_page/Main_Landing_Page/Main_Landing_Page';
// import SideBar from './Main_frame/SideBar/SideBar';
// import QuizFrame from './Main_frame/QuizList_frame/QuizList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    {/* <SideBar/> */}
    {/* <LandingPage/> */}
    {/* <QuizFrame/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
