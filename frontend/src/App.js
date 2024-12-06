import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/Loginpage";
import Dashboard from "./components/AdminDashboard";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Define the routes */}
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
