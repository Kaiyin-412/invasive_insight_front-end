import './App.css';
import Login from './Login_page/Login/login';
import SignUp from './Login_page/Sign_up/sign_up';
import PasswordPage from './Login_page/Forgot_password/password_page';
import PasswordPage2 from './Login_page/Forgot_password_frame2/password_page2';
import PasswordReset from './Login_page/Password_reset/password_reset';
import LandingPage from './Landing_page/Main_Landing_Page/Main_Landing_Page';
import QuizApp from './Quiz/QuizApp';
import Sidebar from "./Sidebar/Sidebar";
import Forum from "./Forum_page/Forum";
import "./Forum_page/forum.css";
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/PasswordPage" element={<PasswordPage/>}/>
        <Route path="/PasswordPage2" element={<PasswordPage2/>}/>
        <Route path="/PasswordPage2/PasswordReset" element={<PasswordReset/>}/>
        <Route path="/LandingPage" element={<LandingPage/>}/>
        <Route path="/LandingPage/QuizApp" element={<QuizApp/>}/>
         {/* Forum-related route with Sidebar */}
         <Route
              path="/Forum"
              element={
                <div className="sidebarncontent">
                  <Sidebar className="Forum_page-sidebar" />
                  <div className="forum">
                    <Forum />
                  </div>
                </div>
              }
            />
                  </Routes>
                </Router>
              );
}

export default App;
