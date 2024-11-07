import React from 'react';
import './sign_up.css';
import { useNavigate } from 'react-router-dom';
import Sign_up_img from '../../image/Signup_page_image/signup image.png' /*Image of sign up page */
import { useState } from 'react';
import Verify from './verify_email';

function Sign_up () {

  const navigate = useNavigate();
  const [verify, setVerify] = useState(false);

  // when submit the form , verify become true and will pop out verify email window
  const handleVerify = (e) => {
    setVerify(true); 
    e.preventDefault();
    console.log("form submitted"); //debug purpose
    
  };

  // function to get back login page when on the login
  const BackToPrevious =(e) =>{
    e.preventDefault(); // prevent default action when submit the form 
    navigate('/');
  }

  return (
    <div class="Signup-container">
      <div class="Signup-form-section">
        <h1>Get started now!</h1>
          <form class="Sign_up_from" onSubmit={handleVerify}>

              <label for="username">Username<input name="username" id="username" type="text" required placeholder="Enter your username"/>
              </label>      

              <label for="email">Email addresss<input name="email" id="email" type="email" required placeholder="Enter your email"/>
              </label>
              
              <label for="password">Password<input id="password" name="password" type="password" required placeholder="Enter your password"/>
              </label>

              <label for="confirm_password">Confirm your Password<input name="confirm_password" id="confirm_password" type="password" required placeholder="Enter your password"/>
              </label>

              <button type="submit">Signup</button>

          </form>
         
        {/* navigate back to login page */}
        <div>
          <p>Have an account? <a href="/" onClick={BackToPrevious}>Login</a></p>  
        </div>
      </div>

      {/* check whether the use sign up and pop up verification */}
      {verify && (
          <Verify/>
          )}

      <div>
        <img src={Sign_up_img} alt="Signup"/> 
      </div>
      
    </div>

    
  )
}

export default Sign_up