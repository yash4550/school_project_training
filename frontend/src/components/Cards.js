import React from "react";
import { FaSchool, FaUsers } from "react-icons/fa"; // Import icons
import "../styles/Cards.css";

const Cards = () => {
  return (
    <div className="cards-container">
      <div className="card">
        <div className="card-icon">
          <FaSchool />
        </div>
        <h3>Total Schools</h3>
        <p>1,250</p>
      </div>
      <div className="card">
        <div className="card-icon">
          <FaUsers />
        </div>
        <h3>Total Parents</h3>
        <p>7,300</p>
      </div>
    </div>
  );
};

export default Cards;
