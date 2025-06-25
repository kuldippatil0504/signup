import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Loginsignup.css';

import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';



const Loginsignup = () => {
  const [action, setaction] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (action === "Login") {
      if (!email || !password) {
        alert("Please enter both email and password to login.");
        return;
      }
      alert(`✅ Logged in successfully!`);
      navigate("/movies"); // Go to movie page
    } else {
      if (!name || !email || !password) {
        alert("Please fill all fields to sign up.");
        return;
      }
      alert(`✅ Signed up successfully!\nWelcome, ${name}!`);
    }
  };

  return (
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <form onSubmit={handleSubmit} className="inputs">
        {action === "Sign Up" && (
          <div className="input">
            <img src={user_icon} alt="User" />
            <input 
              type="text" 
              placeholder='Name' 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        )}

        <div className="input">
          <img src={email_icon} alt="Email" />
          <input 
            type="email" 
            placeholder='Email Id' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input">
          <img src={password_icon} alt="Password" />
          <input 
            type="password" 
            placeholder='Password' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {action === "Login" && (
          <div className="forgot_password">
  Lost Password?{" "}
  <span
    onClick={() => navigate("/forgot-password")}
    style={{ cursor: "pointer", color: "blue" }}
  >
    Click Here!
  </span>
</div>
        )}

        <div className="submit_container">
          {action !== "Sign Up" && (
            <div className="submit" onClick={() => setaction("Sign Up")}>
              Sign Up
            </div>
          )}
          {action !== "Login" && (
            <div className="submit" onClick={() => setaction("Login")}>
              Login
            </div>
          )}
        </div>

        <button type="submit" className="submit_button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Loginsignup;
