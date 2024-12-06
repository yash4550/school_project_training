import React, { useState } from "react";
import "../styles/Sidebar.css";

const Sidebar = () => {
  // State to manage dropdowns
  const [expandedMenus, setExpandedMenus] = useState({});
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  // Toggle the sidebar state
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  // Function to toggle dropdowns
  const toggleDropdown = (menu) => {
    setExpandedMenus((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
      <button className="toggle-btn" onClick={toggleSidebar}>
          {isSidebarOpen ? "❮" : "❯"}
        </button>
        <h2>eSkooly</h2>
      </div>
      <ul className="sidebar-menu">
        <li onClick={() => toggleDropdown("dashboard")}>
          <div className="menu-item">
            Dashboard
            <span className="dropdown-icon">
              {expandedMenus["dashboard"] ? "-" : "+"}
            </span>
          </div>
          <ul className={`dropdown ${expandedMenus["dashboard"] ? "show" : ""}`}>
            <li>Overview</li>
            <li>Reports</li>
          </ul>
        </li>
        <li onClick={() => toggleDropdown("settings")}>
          <div className="menu-item">
            General Settings
            <span className="dropdown-icon">
              {expandedMenus["settings"] ? "-" : "+"}
            </span>
          </div>
          <ul className={`dropdown ${expandedMenus["settings"] ? "show" : ""}`}>
            <li>Profile</li>
            <li>Preferences</li>
          </ul>
        </li>
        <li onClick={() => toggleDropdown("classes")}>
          <div className="menu-item">
            Classes
            <span className="dropdown-icon">
              {expandedMenus["classes"] ? "-" : "+"}
            </span>
          </div>
          <ul className={`dropdown ${expandedMenus["classes"] ? "show" : ""}`}>
            <li>Class List</li>
            <li>Class Schedule</li>
          </ul>
        </li>
        <li onClick={() => toggleDropdown("subjects")}>
          <div className="menu-item">
            Subjects
            <span className="dropdown-icon">
              {expandedMenus["subjects"] ? "-" : "+"}
            </span>
          </div>
          <ul className={`dropdown ${expandedMenus["subjects"] ? "show" : ""}`}>
            <li>Subject List</li>
            <li>Add Subject</li>
          </ul>
        </li>
        <li>Students</li>
        <li>Employees</li>
        <li>Accounts</li>
        <li>Fees</li>
        <li>Attendance</li>
        <li>Timetable</li>
        <li>Homework</li>
        <li>Behavior & Skills</li>
        <li>Online Store & POS</li>
        <li>WhatsApp</li>
        <li>Messaging</li>
        <li>SMS Services</li>
        <li>Live Class</li>
        <li>Question Paper</li>
        <li>Exams</li>
        <li>Class Tests</li>
      </ul>
    </div>
  );
};

export default Sidebar;
