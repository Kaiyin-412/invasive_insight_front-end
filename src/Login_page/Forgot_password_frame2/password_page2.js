import React from 'react'
import Forgot_img2 from '../../image/Forgot_password2/password_page2.png'
import './password_page2.css';
import { useNavigate } from 'react-router-dom';

function Password_page2 () {

  const navigate = useNavigate();

  const NavigateBack = (e) =>{
      e.preventDefault();
      navigate('/PasswordPage');
  }

  const NavigateNext = (e) =>{
    e.preventDefault();
    navigate('/PasswordPage2/PasswordReset');
}

  return (
    <div>
      <div class="Password_Page2-container">
        <div>
          <img src={Forgot_img2} alt="Forgot_img2"/>
        </div>
        <div class="Password_Page2-section">
          <h1>Forgot Password</h1>
          <div class="Password_Page2-form">
              <form>
                <p>We sent reset link to the above email</p>
                <p>enter 5 digit code that mentioned in the email</p>
                <div class="input_digit">
                  <input class="num" type="text" inputMode="numeric" maxLength="1" required name="first-digit"></input>
                  <input class="num" type="text" inputMode="numeric" maxLength="1" required name="second-digit"></input>
                  <input class="num" type="text" inputMode="numeric" maxLength="1" required name="third-digit"></input>
                  <input class="num" type="text" inputMode="numeric" maxLength="1" required name="fourth-digit"></input>
                  <input class="num" type="text" inputMode="numeric" maxLength="1" required name="fifth-digit"></input>
                </div>
                <button type="submit" onClick={NavigateNext}>Verify code</button>
              </form>
          </div>
          <div class="resend-email">
            <p>Haven't got the email yet? <a href="/PasswordPage" onClick={NavigateBack}>Resend email</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Password_page2 