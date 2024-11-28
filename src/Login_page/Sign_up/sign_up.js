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


  // zj: this function will send json to backend to sign up a person
  const handleSignUpAttempt = async () =>{
    try {
      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      // send otp to their email first
      await fetch(`http://localhost:5000/email/send_email?target=${email}`)
      .then((res) => res.json()) // convert response into json
      .then((responseJSON) => {
        if (responseJSON.message == "Application attempted to send email, check CLI for any errors"){
          // the application has tried to send the email
          console.log("Backend tried to send the email. Please check your inbox");
        }
      })
      .catch((err) => console.log(err));

      // verify email
      // kai yin, please help me to create the pop up. I dunno how to do it

      // add new user
      // if(verify){
      const res = await fetch("http://127.0.0.1:5000/add_user",{
          method: 'POST',
          headers: {
          'Content-Type': 'application/json',
          },
          body: JSON.stringify({
          "username" : username,
          "email" : email,
          "password" : password
          }),
      });
      const data = await res.json();
      
    } catch (err) {
      console.log(err);
    }
    //}
  }

  return (
    <div class="Signup-container">
      <div class="Signup-form-section">
        <h1>Get started now!</h1>
          <form class="Sign_up_from">

              <label for="username">Username<input name="username" id="username" type="text" required placeholder="Enter your username"/>
              </label>      

              <label for="email">Email addresss<input name="email" id="email" type="email" required placeholder="Enter your email"/>
              </label>
              
              <label for="password">Password<input id="password" name="password" type="password" required placeholder="Enter your password"/>
              </label>

              <label for="confirm_password">Confirm your Password<input name="confirm_password" id="confirm_password" type="password" required placeholder="Enter your password"/>
              </label>

              <button type="submit" onClick={handleSignUpAttempt}>Signup</button>

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