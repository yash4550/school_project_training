import React from "react";
import { FaSchool, FaUsers } from "react-icons/fa"; // Import icons
import "../styles/Cards.css";
import { useNavigate } from "react-router-dom";

const Cards = () => {
  const navigate = useNavigate(); // Initialize navigate hook

  const handleCardClick = (path) => {
    navigate(path); // Redirect to the specified path
  };

  return (
    <div className="cards-container">
      <div
        className="card"
        onClick={() => handleCardClick("/school-manager")} // Redirect to School Manager
      >
        <div className="card-icon">
          <FaSchool />
        </div>
        <h3>Total Schools</h3>
        <p>1,250</p>
      </div>
      <div
        className="card"
        onClick={() => handleCardClick("/parents-manager")} // Redirect to Parent Manager
      >
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
