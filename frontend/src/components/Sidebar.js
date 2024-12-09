import React, { useState } from "react";
import { Link } from "react-router-dom";  
import "../styles/Sidebar.css";
import { FaUserCircle, FaCogs, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const confirmLogout = () => {
    if (window.confirm('Are you sure you want to log out?')) {
      // Perform logout operation, e.g., remove token from local storage or session
      window.location.href = '/'; // Redirect to login page
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>eSkooly</h2>
      </div>
      <ul className="sidebar-menu">
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/school-manager">School Manager</Link>
        </li>
        <li>
          <Link to="/parents-manager">Parents Manager</Link>
        </li>
        <li>
          <Link to="/notification">Notification Manager</Link>
        </li>
        <li>
          <Link to="/email">Email Template</Link>
        </li>
        <li>
          <Link to="/content">Content Manager</Link>
        </li>
        <li className="sidebar-item" onClick={toggleOptions}>
          <FaUserCircle className="sidebar-icon" />
          {showOptions && (
            <div className="drop">
              <Link to="/profile" className="drop-item">
                <FaCogs /> Manage Profile
              </Link>
              <Link to="/change-password" className="drop-item">
                <FaCogs /> Change Password
              </Link>
              <Link to="/logout" className="drop-item" onClick={confirmLogout}>
                <FaSignOutAlt /> Logout
              </Link>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
