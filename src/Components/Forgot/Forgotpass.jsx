// Components/ForgotPassword/ForgotPassword.js
import React, { useState } from 'react';
import './Forgotpass.css';  

const Forgotpass = () => {
  const [email, setEmail] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter your email.");
      return;
    }
    alert(`📩 Password reset link sent to ${email}`);
    // Here you can also integrate API call
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Reset Password</div>
        <div className="underline"></div>
      </div>

      <form onSubmit={handleReset} className="inputs">
        <div className="input">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="submit" className="submit_button">
          Send Reset Link
        </button>
      </form>
    </div>
  );
};

export default Forgotpass;
