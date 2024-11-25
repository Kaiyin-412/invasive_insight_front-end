import React from 'react'
import './login.css';
import loginImage from '../../image/Login_page_image/login_image.png'; //image for the login page
import { useNavigate } from 'react-router-dom';


function Login() {

    const navigate  = useNavigate();

    // navigate to password page
    const NavigateToPassword = (e) =>{
        e.preventDefault();
        navigate("/PasswordPage");
    }

    //naviagte to sign up
    const NavigateToSign = (e) =>{
        e.preventDefault();
        navigate("/SignUp");
    }

    // navigate to landing page
    const NavigateToLanding = (e) =>{
        e.preventDefault();
        navigate("/LandingPage");
    }


  return (
    <div class="login-container">
        <div>
            <img src={loginImage} alt="loginImage"/>
        </div>
        <div class="login-section">
            <h1>Welcome Back !</h1>
            <form class="login-form">

                <label for="username">Username
                <input  id="username"
                        name="username" 
                        type="text" 
                        required 
                        placeholder="Enter your username"/>
                </label>

                <label for="password"><span>Password<a href="/PasswordPage" onClick={NavigateToPassword}>Forgot password</a></span>
                    <input  id="password" 
                            name="password" 
                            type="password" 
                            required 
                            placeholder="Enter your password"/>
                </label>

                <button type="submit" onClick={NavigateToLanding}>Login</button>
            </form>

            <div class="signup-prompt">
                <p>Don't have an account? <a href="/SignUp" onClick={NavigateToSign}>Sign Up</a></p>
            </div>
        </div>   
    </div>
  )
}

export default Login