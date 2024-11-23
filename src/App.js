import './App.css';
import React from "react";
import Login from './Login_page/Login/login';
import SignUp from './Login_page/Sign_up/sign_up'
import PasswordPage from './Login_page/Forgot_password/password_page';
import PasswordPage2 from './Login_page/Forgot_password_frame2/password_page2';
import PasswordReset from './Login_page/Password_reset/password_reset';
import QuizApp from './Quiz/QuizApp';
import Sidebar from "./Forum_page/Sidebar";
import Forum from "./Forum_page/Forum";
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes without Sidebar */}
        <Route path="/" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/PasswordPage" element={<PasswordPage />} />
        <Route path="/PasswordPage2" element={<PasswordPage2 />} />
        <Route path="/PasswordPage2/PasswordReset" element={<PasswordReset />} />
        <Route path="/QuizApp" element={<QuizApp />} />
        
        {/* Routes with Sidebar */}
        <Route 
          path="/Forum" 
          element={
            <div className="app">
              <Sidebar />
              <Forum />
            </div>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;