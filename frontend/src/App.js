import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout'; // Assuming Layout is imported here
import Dashboard from './components/AdminDashboard';
import SchoolManager from './pages/SchoolManager';
import Login from './components/Loginpage';
import ParentsManager from './pages/ParentManager';
import ContentManager from './pages/ContentManager';
import EmailTemplate from './pages/EmailTemplate';
import NotificationManager from './pages/NotificationManager';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />  {/* No Sidebar for login page */}
        
        {/* Wrap all other routes inside Layout */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/school-manager" element={<SchoolManager />} />
          <Route path="/parents-manager" element={<ParentsManager />} />
          <Route path="/notification" element={<NotificationManager />} />
          <Route path="/email" element={<EmailTemplate />} />
          <Route path="/content" element={<ContentManager />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
