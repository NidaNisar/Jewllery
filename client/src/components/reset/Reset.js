import React from 'react';
import './Reset.css';

const Reset = () => {
  
    
  return (
    <div className="reset-container">
      <h2>Reset Password</h2>
      <form >
        <label>New Password</label>
        <input type="password" name="password" placeholder="Enter new password" />

        <label>Confirm Password</label>
        <input type="password" name="confirm" placeholder="Confirm password" />

        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default Reset;
