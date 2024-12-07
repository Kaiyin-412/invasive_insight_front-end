import React, { useState } from 'react'
import './verify_email.css';
import SuccessPop from './SuccessPop';

// const verifyEmail = async (otp) =>{
//   await fetch(`http://localhost:5000/email/verify_user?otp=${otp}`)
//   .then((res) => res.json()) // convert response into json
//   .then((responseJSON) => {
//     if (responseJSON["Verified"]){
//       // the application has tried to send the email
//       NavigataToLogin();
//     }else{
//       console.log("Correct username or password");
//     }
//   })
//   .catch((err) => console.log(err))
// }

// const NavigataToLogin=(e)=>{
//   const navigate = useNavigate();
//   e.preventDefault(); // prevent refresh
//   navigate("/");
// }


function Verify_email() {
  // use for success pop out
  const [Success, SetSucess] =useState();

  // const NavigataToLogin=(e)=>{
  //   e.preventDefault(); // prevent refresh
  //   navigate("/");
  // }

  const [otp, setOtp] = useState(Array(5).fill('')); // Initialize OTP array

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d$/.test(value) || value === '') { // Allow only numeric input
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto-focus on next input
      if (value && index < 4) {
        const nextInput = document.querySelector(`input[name=digit-${index + 1}]`);
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form refresh
    const otpString = otp.join(''); // Combine OTP digits into a string

    try {
      const response = await fetch(`http://localhost:5000/email/verify_user?otp=${otpString}`);
      const responseJSON = await response.json();

      if (responseJSON.Verified) {
        SetSucess(true);
      } else {
        console.log('Verification failed: Incorrect OTP');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h1>Verify Email</h1>
        <p>We sent a verification code to your email</p>
        <p>enter 5 digit code that mentioned in the email</p>
        <form className="popup-form">
          <div className="email-otp">
            {/* <input type="text" inputMode="numeric" maxLength="1" required name="first-digit"/>
            <input type="text" inputMode="numeric" maxLength="1" required name="second-digit"/>
            <input type="text" inputMode="numeric" maxLength="1" required name="third-digit"/>
            <input type="text" inputMode="numeric" maxLength="1" required name="fourth-digit"/>
            <input type="text" inputMode="numeric" maxLength="1" required name="fifth-digit"/> */}
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                inputMode="numeric"
                maxLength="1"
                name={`digit-${index}`}
                value={digit}
                onChange={(e) => handleChange(e, index)}
                required
              />
            ))}
          </div>
          <div>
            <button onClick={(e)=>handleSubmit(e)}>Verify email</button>
          </div>
        </form>
      </div>
      {Success && (
        <SuccessPop/>
      )}
    </div>
  )
}

export default Verify_email