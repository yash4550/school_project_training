import React from "react";
import "../styles/Navbar.css";

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <button className="menu-toggle" onClick={toggleSidebar}>
          ☰
        </button>
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
