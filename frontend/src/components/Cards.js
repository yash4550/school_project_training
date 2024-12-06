import React from "react";
import "../styles/Cards.css";

const Cards = () => {
  return (
    <div className="cards-container">
      <div className="card">
        <h3>Total Students</h3>
        <p>This Month</p>
        <p>0</p>
      </div>
      <div className="card">
        <h3>Total Employees</h3>
        <p>This Month</p>
        <p>1</p>
      </div>
      <div className="card">
        <h3>Revenue</h3>
        <p>This Month</p>
        <p>$0</p>
      </div>
      <div className="card">
        <h3>Total Profit</h3>
        <p>This Month</p>
        <p>$0</p>
      </div>
    </div>
  );
};

export default Cards;
