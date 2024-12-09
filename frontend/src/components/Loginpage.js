import React, { useState } from "react";
import "./../styles/style.css";

const LoginPage = () => {
  const [currentForm, setCurrentForm] = useState("login"); // Manages which form to display

  const renderForm = () => {
    switch (currentForm) {
      case "login":
        return (
          <form className="login-form">
            <p>
              <input type="radio" name="accountType" id="admin" value="Admin" />
              <label htmlFor="admin">Admin</label>
              <input type="radio" name="accountType" id="employee" value="Employee" />
              <label htmlFor="employee">Employee</label>
              <input type="radio" name="accountType" id="student" value="Student" />
              <label htmlFor="student">Student</label>
            </p>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <div>
              <input type="checkbox" id="rememberMe" />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>
            <button type="submit">Log in</button>
            <a href="#" onClick={() => setCurrentForm("forgotPassword")}>Forgot password?</a>
            <p>
              Don't have an account? <a href="#" onClick={() => setCurrentForm("register")}>Register</a>
            </p>
          </form>
        );

      case "register":
        return (
          <form className="register-form">
            <h3>Register</h3>
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Sign Up</button>
            <p>
              Already have an account? <a href="#" onClick={() => setCurrentForm("login")}>Log In</a>
            </p>
          </form>
        );

      case "forgotPassword":
        return (
          <form className="forgot-password-form">
            <h3>Forgot Password</h3>
            <input type="email" placeholder="Enter your registered email" />
            <button type="submit">Reset Password</button>
            <p>
              Remembered your password? <a href="#" onClick={() => setCurrentForm("login")}>Log In</a>
            </p>
          </form>
        );

      default:
        return null;
    }
  };

  return (
    <div className="login-container">
      <div className="left-panel">
        <div className="logo">eSkooly</div>
        {renderForm()}
      </div>
      <div className="right-panel">
        <h2>Start managing now</h2>
        <p>
          Stop struggling with common tasks and focus on the real choke points.
          Discover a full-featured & 100% free school management platform.
        </p>
        <button className="get-started">Get started</button>
        <div className="illustration">
          <img src="/images/illustration.png" alt="Illustration" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
