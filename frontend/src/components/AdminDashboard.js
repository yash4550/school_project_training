import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import "../styles/AdminDashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="dashboard-content">
          {/* Overview Cards */}
          <div className="cards-section">
            <Cards />
          </div>

          {/* Statistics Section */}
          <div className="statistics-section">
            <h3>Statistics</h3>
            <div className="statistics-graph">
              <p>Graph placeholder (use a chart library like Chart.js or Recharts)</p>
            </div>
          </div>

          {/* Recent Activities Section */}
          <div className="activities-section">
            <h3>Recent Activities</h3>
            <ul className="activities-list">
              <li>New school added: St. Paul's High School</li>
              <li>5 new parents registered today</li>
              <li>Notification sent to all users</li>
              <li>Fee reminder email dispatched</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
