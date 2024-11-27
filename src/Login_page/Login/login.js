import React, { useContext } from 'react'
import './login.css';
import loginImage from '../../image/Login_page_image/login_image.png'; //image for the login page
import { redirect, useNavigate } from 'react-router-dom';
import { FontSizeContext } from '../../FontSize/FontSizeContext';



function Login() {
    
    // handle for the change in font size 
    const {fontSize} =useContext(FontSizeContext);

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

    const handleLoginAttempt = async () =>{
        try {
        const res = await fetch("http://127.0.0.1:5000/login",{
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            "username" : document.getElementById('username').value,
            "password" : document.getElementById('password').value,
            }),
        });
        const data = await res.json();
        if (data.message == "Login successful"){
            navigate("/LandingPage"); // this does not work?
        }else{
            console.log("Incorrect username or password"); // kai yin, implement this in GUI
        }
        } catch (err) {
        console.log(err);
        }
    
    };

  return (
    <div class="login-container" style={{fontSize}}>
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

                <button type="submit" onClick={handleLoginAttempt}>Login</button>
            </form>

            <div class="signup-prompt">
                <p>Don't have an account? <a href="/SignUp" onClick={NavigateToSign}>Sign Up</a></p>
            </div>
        </div>   
    </div>
  )
}

export default Login