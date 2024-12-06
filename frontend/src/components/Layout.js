// Layout.js
import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="layout-container">
      <Sidebar />
      <div className="content-container">
        <Outlet /> {/* Render the nested route components */}
      </div>
    </div>
  );
};

export default Layout;
