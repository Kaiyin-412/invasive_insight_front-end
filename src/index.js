import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import SuccessPop from './Login_page/Sign_up/SuccessPop';
// import MainlandingPage from './Landing_page/Main_Landing_Page/Main_Landing_Page';
// import SideBar from './Main_frame/SideBar/SideBar';
// import Component from './Main_frame/QuizList_frame/Component/Component';
// import QuizListAll from './Main_frame/QuizList_frame/QuizListAll/QuizListAll';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    {/* <SuccessPop/> */}
    {/* <Component/> */}
    {/* <SideBar/> */}
    {/* <LandingPage/> */}
    {/* <QuizListAll/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
