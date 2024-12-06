import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <button className="menu-toggle">☰</button>
      </div>
      <div className="navbar-right">
        <button>App Store</button>
        <button>Google Play</button>
        <span className="notifications">🔔</span>
        <span className="profile">👤</span>
      </div>
    </div>
  );
};

export default Navbar;
