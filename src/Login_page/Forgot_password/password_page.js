import React from 'react'
import './password_page.css';
import { useNavigate } from 'react-router-dom';


function Password_page  () {

  const navigate = useNavigate();

  // navigate to PasswordPage2
  const NavigatetoNext=(e)=>{
    e.preventDefault();
    navigate("/PasswordPage2");
  }

  const HandleForgetPassword = async (e)=>{
    e.preventDefault();
    const email = document.getElementById("email").value;
    try{
      // send get request to backend 
      const res = await fetch (`http://127.0.0.1:5000/forgetPassword/send_email?target=${email}`);

      // wait for the response form backend server and Parse the Json body
      const data = await res.json(); 
      if(data.message === "Invalid Email"){
        console.log("Invalid email");

      }else if (data.message === "Application attempted to send email, check CLI for any errors"){
        // if success navigate to next page 
        NavigatetoNext(e);
      }
    }catch(err){
      console.error(err);
    }
  }

  return (
    <div>
      <div class="password-container">
          <div>
              <img src="https://lirp.cdn-website.com/e15ed933/dms3rep/multi/opt/why_do_stink_bugs_smell_bad-1920w.jpeg" alt="Forgot_image"/>
          </div>
          <div class="password-section">
              <h1>Forgot Password</h1>
              <form class="password-form">
                <p>Please enter your email to reset the password</p>
                <label for="email">Email
                  <input name="email" id="email" required type="email" placeholder="Enter your email"/>
                </label>
                <button type="submit" onClick={(e)=>HandleForgetPassword(e)}>Reset password</button>
              </form>
          </div>
      </div>
    </div>
  )
}

export default Password_page