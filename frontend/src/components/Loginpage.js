import React from "react";
import "./../styles/style.css";

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="left-panel">
        <div className="logo">eSkooly</div>
        <form className="login-form">
          <p>
            <input type="radio" name="accountType" id="admin" value="Admin" />
            <label htmlFor="admin">Admin</label>
            <input type="radio" name="accountType" id="employee" value="Employee" />
            <label htmlFor="employee">Employee</label>
            <input type="radio" name="accountType" id="student" value="Student" />
            <label htmlFor="student">Student</label>
          </p>
          <input type="text" placeholder="User name" />
          <input type="password" placeholder="Password" />
          <div>
            <input type="checkbox" id="rememberMe" />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>
          <button type="submit">Log in</button>
          <a href="/">Forgot password?</a>
        </form>
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
