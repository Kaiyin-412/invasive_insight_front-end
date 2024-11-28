import React from 'react'
import './verify_email.css';

const verifyEmail = async (otp) =>{
  await fetch(`http://localhost:5000/email/verify_user?otp=${otp}`)
  .then((res) => res.json()) // convert response into json
  .then((responseJSON) => {
    if (responseJSON["Verified"]){
      // the application has tried to send the email
      console.log("Correct username and password");
    }else{
      console.log("Correct username or password");
    }
  })
  .catch((err) => console.log(err))
}

function Verify_email() {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h1>Verify Email</h1>
        <p>We sent a verification code to your email</p>
        <p>enter 5 digit code that mentioned in the email</p>
        <form className="popup-form">
          <div className="email-otp">
            <input type="text" inputMode="numeric" maxLength="1" required name="first-digit"/>
            <input type="text" inputMode="numeric" maxLength="1" required name="second-digit"/>
            <input type="text" inputMode="numeric" maxLength="1" required name="third-digit"/>
            <input type="text" inputMode="numeric" maxLength="1" required name="fourth-digit"/>
            <input type="text" inputMode="numeric" maxLength="1" required name="fifth-digit"/>
          </div>
          <div>
            <button onClick={verifyEmail}>Verify email</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Verify_email