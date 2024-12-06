import React from "react";
import { Link } from "react-router-dom";  
import "../styles/Sidebar.css";

const Sidebar = () => {
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
      </ul>
    </div>
  );
};

export default Sidebar;
