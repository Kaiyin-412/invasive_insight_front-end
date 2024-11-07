import React from 'react'
import PasswordResetImg from '../../image/Password_reset_image/password_reset_img.png';
import './password_reset.css';

function Password_reset () {
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
                    <button type="submit">Reset password</button>
                </form>
            </div>
        </div>
        <div>
            <img src={PasswordResetImg} alt="Just smtg"/>
        </div>
    </div>
  )
}

export default Password_reset