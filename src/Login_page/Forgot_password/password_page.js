import React from 'react'
import Forgot_img from '../../image/Forgot_password/forgot_password_image (2).png';
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
              <img src={Forgot_img} alt="Forgot_image"/>
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