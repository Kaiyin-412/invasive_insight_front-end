import './App.css';
import Login from './Login_page/Login/login';
import SignUp from './Login_page/Sign_up/sign_up';
import PasswordPage from './Login_page/Forgot_password/password_page';
import PasswordPage2 from './Login_page/Forgot_password_frame2/password_page2';
import PasswordReset from './Login_page/Password_reset/password_reset';
import LandingPage from './Landing_page/Main_Landing_Page';
// import QuizApp from './Quiz/QuizApp';
import ForumPage from './Main_frame/Forum_frame/Forum_page';
import QuizList from './Main_frame/QuizList_frame/QuizListAll/QuizListAll';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import { FontSizeProvider } from './FontSize/FontSizeContext';
import DashboardPage from './Main_frame/Dashboard_frame/DashboardPage';

// for debug
// import SideBar from './Main_frame/SideBar/SideBar';
// import Settings from './Main_frame/SideBar/Settings';

function App() {
  return (
  <FontSizeProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/PasswordPage" element={<PasswordPage/>}/>
        <Route path="/PasswordPage2" element={<PasswordPage2/>}/>
        <Route path="/PasswordPage2/PasswordReset" element={<PasswordReset/>}/>
        <Route path="/LandingPage" element={<LandingPage/>}/>
        {/* <Route path="/LandingPage/QuizApp" element={<QuizApp/>}/> */}
        <Route path="/LandingPage/Forum" element={<ForumPage/>}/>
        <Route path="/LandingPage/QuizList" element={<QuizList/>}/>
        {/* <Route path="/SideBar" element={<SideBar/>}/>
        <Route path="/Settings" element={<Settings/>}/> */}
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  </FontSizeProvider>
          );
}

export default App;
