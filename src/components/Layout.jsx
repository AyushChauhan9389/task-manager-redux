// src/components/Layout.jsx
import React from 'react';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Navbar />
        <main className="p-6 bg-gray-900 min-h-screen">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
