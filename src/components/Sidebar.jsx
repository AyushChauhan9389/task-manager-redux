// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Layout,
  Bell,
  Cog,
  Mail,
  ShoppingCart,
  Clock,
  Moon,
  Search,
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = ['Analytics', 'CRM', 'eCommerce', 'Logistics', 'Academy'];

  return (
    <div className="fixed inset-y-0 left-0 w-64 bg-gray-800 p-4">
      <div className="flex items-center gap-2 mb-8">
        <div className="h-8 w-8 rounded bg-purple-500" />
        <span className="text-xl font-bold text-white">TaskManager</span>
      </div>
      <nav className="space-y-2">
        <Link
          to="/dashboard"
          className="flex items-center gap-3 rounded-lg bg-purple-500/10 px-3 py-2 text-purple-500"
        >
          <Layout className="h-4 w-4" />
          <span>Dashboards</span>
        </Link>
        {menuItems.map((item) => (
          <Link
            key={item}
            to="/dashboard"
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-400 hover:bg-purple-500/10 hover:text-purple-500"
          >
            <Layout className="h-4 w-4" />
            <span>{item}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
