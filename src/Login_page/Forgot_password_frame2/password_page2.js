import React, { useState } from 'react'
import './password_page2.css';
import { useNavigate } from 'react-router-dom';
import SuccessPop from '../Sign_up/SuccessPop';

function Password_page2 () {
  // use for navigation
  const navigate = useNavigate();

  // naviagte back to password page to resend email
  const NavigateBack = (e) =>{
      e.preventDefault();
      navigate('/PasswordPage');
  }

  // neviagte to the password reset page if successfult verify email
//   const NavigateNext = (e) =>{
//     e.preventDefault();
//     navigate('/PasswordPage2/PasswordReset');
// }

  const [otp,setOtp] = useState(Array(5).fill(''));

  const [success , setSuccess] = useState(false);

  const handleChange =(e, index) => {
    const value = e.target.value;
    if(/^\d$/.test(value) || value ===''){  // allow only numeric input 
      const newOtp = [...otp];
      newOtp[index]=value;
      setOtp(newOtp);

      // Auto focus
      if(value && index < 4){
        const nextInput = document.querySelector(`input[name=digit-${index + 1}]`);
        if(nextInput) {
          nextInput.focus();
        } 
      }
    }
  }

  // checking for the otp 
  const handleSubmit = async (e)=>{
    e.preventDefault(); // prevent from refresh  
    const otpString = otp.join(''); // joint the otp in the array
    try{
      // send a get request to backend 
      const response = await fetch(`http://127.0.0.1:5000/forgetPassword/verify_user?otp=${otpString}`);
      const responseJSON = response.json();

      if(responseJSON.Verified){
        // to call out success pop out frame 
        setSuccess(true);
        console.log("Success");
      }else{
        console.log("incorrect otp");
      }
    }catch(error){
      console.error('Error verifying OTP:', error);
    }
  }

  return (
    <div>
      <div class="Password_Page2-container">
        <div>
          <img src="https://lirp.cdn-website.com/e15ed933/dms3rep/multi/opt/why_do_stink_bugs_smell_bad-1920w.jpeg" alt="Forgot_img2"/>
        </div>
        <div class="Password_Page2-section">
          <h1>Forgot Password</h1>
          <div class="Password_Page2-form">
              <form>
                <p>We sent reset link to the above email</p>
                <p>enter 5 digit code that mentioned in the email</p>
                <div class="input_digit">
                  {otp.map((digit, index)=> (
                    <input
                      key={index}
                      type='text'
                      inputMode='numeric'
                      name={`digit-${index}`}
                      maxLength="1"
                      value={digit}
                      onChange={(e)=> handleChange(e,index)}
                      required
                      />
                  ))}
                </div>
                <button type="submit" onClick={(e)=> handleSubmit(e)}>Verify code</button>
              </form>
          </div>
          <div class="resend-email">
            <p>Haven't got the email yet? <a href="/PasswordPage" onClick={NavigateBack}>Resend email</a></p>
          </div>
        </div>
      </div>
      {success && (
        <SuccessPop Tittle="Verify Successfully" path='/PasswordPage2/PasswordReset'/>
      )}
    </div>
  )
}

export default Password_page2 