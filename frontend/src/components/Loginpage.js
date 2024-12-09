import React, { useState } from "react";
import axios from "axios";
import "./../styles/style.css";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [currentForm, setCurrentForm] = useState("login"); // Manages which form to display
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    newPassword: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        email: formData.email,
        password: formData.password,
      });
      navigate("/dashboard")
      console.log("Token:", response.data.token);
      // Store token in local storage or handle login state
    } catch (error) {
      alert("Invalid email or password.");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/register", {
        fullName: formData.fullName,
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });
      alert("Registration successful!");
      setCurrentForm("login"); // Switch to login form
    } catch (error) {
      alert("Error during registration.");
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/forgot-password", {
        email: formData.email,
        newPassword: formData.newPassword,
      });
      alert("Password reset successful!");
      setCurrentForm("login");
    } catch (error) {
      alert("Error resetting password.");
    }
  };

  const renderForm = () => {
    switch (currentForm) {
      case "login":
        return (
          <form className="login-form" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
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
          <form className="register-form" onSubmit={handleRegister}>
            <h3>Register</h3>
            <input
              type="text"
              placeholder="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <button type="submit">Sign Up</button>
            <p>
              Already have an account? <a href="#" onClick={() => setCurrentForm("login")}>Log In</a>
            </p>
          </form>
        );

      case "forgotPassword":
        return (
          <form className="forgot-password-form" onSubmit={handleForgotPassword}>
            <h3>Forgot Password</h3>
            <input
              type="email"
              placeholder="Enter your registered email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type="password"
              placeholder="New Password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleInputChange}
            />
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
        <div className="logo">Admin Portal Login</div>
        {renderForm()}
      </div>
      <div className="right-panel">
        <div className="illustration">
        <img src="/assets/images/premium_photo-1677567996070-68fa4181775a.jpeg" alt="Illustration" />

        </div>
      </div>
    </div>
  );
};

export default LoginPage;
