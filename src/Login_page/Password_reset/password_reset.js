import React, { useEffect, useState } from 'react'
import PasswordResetImg from '../../image/Password_reset_image/password_reset_img.png';
import './password_reset.css';
import MismatchPop from './MismatchPop';
import SuccessPop from '../Sign_up/SuccessPop';


function Password_reset () {

    // track the status of the password 
    const [check, setChecking] = useState(false);

    const new_password = document.getElementById("new_password").value; // get password from user 
    const confirm_password = document.getElementById("confirm_password").value; // get password from user 

    // checking whether the password match the confirm password 
    const CheckPassowrd =(e)=>{
        e.preventDefault();
        if (new_password !== confirm_password){ 
            setChecking(true); // display password mismatch message 
        }else{
            setChecking(false);
            handlePassword(e); // if password match start update the new password to backend database
        }
    }

    const [status, setStatus] = useState(false);

    // start the timer when sate change 
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setChecking(false);},5000); // let the frame pop out for 5 seconds and setchecking to false to disappear the pop out frame 
            return () => clearTimeout(timer);
        },[check]); 

    const handlePassword = async (e)=>{
        e.preventDefault();
        try{
            const res = await fetch(`http://127.0.0.1:5000/forgetPassword/change_password?password=${new_password}`);
            const responseJSON = await res.json();

            if(responseJSON.message=== 'Password changed'){
                setStatus(true);
                console.log("Password Change Successfully");
            }else{
                console.log("OTP not entered yet. And you are a hacker");
            }
        }catch(error){
            console.log(error);
        }
    }

  return (
    <div class="password_reset-container">
        <div class="password_reset-section">
            <h1>Password Reset</h1>
            <div class="password_reset-form">
                <form>
                    <p>Create a new password. Ensure it differs from </p>
                    <p>previous ones for security</p>
                    <label for="new_password">Password
                        <input name="new_password" id="new_password" required type="text" placeholder="Enter your new password"/>
                    </label>

                    <label>Confirm Password
                        <input name="confirm_password" id="confirm_password" required type="text" placeholder="Re-enter password"/>
                    </label>
                    <button type="submit" onClick={(e)=>CheckPassowrd(e)}>Reset password</button>
                </form>
            </div>
        </div>
        <div>
            <img src={PasswordResetImg} alt="Just smtg"/>
        </div>
        {check &&(
            <MismatchPop Tittle="Password not Match"/>
        )       
        }
        {
            status && (
                <SuccessPop Tittle="Password change successfully" path="/"/>
            )
        }
    </div>
  )
}

export default Password_reset