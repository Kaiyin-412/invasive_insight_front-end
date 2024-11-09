import React from 'react'
import './password_page.css';
import { useNavigate } from 'react-router-dom';


function Password_page  () {

  const navigate = useNavigate();

  const NavigatetoNext=(e)=>{
    e.preventDefault();
    navigate("/PasswordPage2");
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
                <button type="submit" onClick={NavigatetoNext}>Reset password</button>
              </form>
          </div>
      </div>
    </div>
  )
}

export default Password_page