import React, { useContext, useEffect, useState } from 'react'
import './login.css';
import loginImage from '../../image/Login_page_image/login_image.png'; //image for the login page
// import { redirect, useNavigate } from 'react-router-dom';
import {useNavigate } from 'react-router-dom';
import { FontSizeContext } from '../../FontSize/FontSizeContext';
import MismatchPop from '../Password_reset/MismatchPop';
import axios from 'axios'; 

let id=null;

function Login() {

    let array = [];
    const getUserId =async(e)=>{
        const username = document.getElementById('username').value;
        e.preventDefault();
        try{
            const res = await axios.get("http://127.0.0.1:5000/users");
        array=[...res.data];
        console.log(array);
        // return first match user wth the username
        const user = array.find(user => user.username === username );
        id = user.id;
        console.log(id);
        }catch(err){
            console.log(err);
        }
    }

    // handle for the pop out for incorrect username or password
    const [pop , Setpop] = useState(false);

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

    const handleLoginAttempt = async (e) =>{
        e.preventDefault(); // prevent refresh
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
        
        if (data.message === "Login successful"){
            console.log(data.message);
            NavigateToLanding(e); // if success naviagte to landing page
            getUserId(e);
        }else {
          Setpop(true); // pop out warning message
        }
      
        } catch (err) {
        console.log(err);
        }
    
    };

    // start the timer when sate change 
    useEffect(()=>{
        const timer = setTimeout(()=>{
            Setpop(false);},5000); // let the frame pop out for 5 seconds and setchecking to false to disappear the pop out frame 
            return () => clearTimeout(timer);
        },[pop]); 

    // use for debug purpose
    useEffect(()=>{
        console.log(pop);
    },[pop]
    );

  return (
    <div class="login-container" style={{fontSize}}>
        <div>
            <img src={loginImage} alt="loginImage"/>
        </div>
        <div className="login-section">
            <h1>Welcome Back !</h1>
            <form className="login-form">

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
        {pop && (
                <MismatchPop Tittle="Incorrect username or password"/> )}
    </div>
  )
}

export default Login
export {id}
