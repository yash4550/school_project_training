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
          <Cards />
          {/* Add other sections here */}
          <div className="statistics-section">
            <h3>Statistics</h3>
            <div className="statistics-graph">
              {/* Placeholder for graph */}
              <p>Graph placeholder (use a chart library like Chart.js here)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
