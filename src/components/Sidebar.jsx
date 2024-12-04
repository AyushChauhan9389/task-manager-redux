import React from 'react';
import {
  LayoutDashboard,
  BarChart2,
  Users,
  ShoppingCart,
  Truck,
  GraduationCap,
  Layout,
  FileText,
  Mail,
  MessageSquare,
  Calendar,
  KanbanSquare,
} from 'lucide-react';

export const Sidebar = () => {
  return (
    <div className="w-64 bg-[#242b4a] text-gray-300 p-4">
      <div className="flex items-center space-x-2 mb-8">
        <div className="w-8 h-8 bg-purple-500 rounded-lg"></div>
        <span className="text-xl font-semibold">Vuexy</span>
      </div>

      <div className="space-y-6">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <LayoutDashboard size={20} />
            <span className="font-medium">Dashboards</span>
            <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              5
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center space-x-2 p-2 bg-purple-500 bg-opacity-20 rounded-lg text-purple-500">
            <BarChart2 size={20} />
            <span>Analytics</span>
          </div>

          {[
            { icon: <Users size={20} />, label: 'CRM' },
            { icon: <ShoppingCart size={20} />, label: 'eCommerce' },
            { icon: <Truck size={20} />, label: 'Logistics' },
            { icon: <GraduationCap size={20} />, label: 'Academy' },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 p-2 hover:bg-[#1a1f37] rounded-lg cursor-pointer"
            >
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        <div>
          <div className="text-xs uppercase text-gray-500 mb-2">APPS & PAGES</div>
          {[
            { icon: <Mail size={20} />, label: 'Email' },
            { icon: <MessageSquare size={20} />, label: 'Chat' },
            { icon: <Calendar size={20} />, label: 'Calendar' },
            { icon: <KanbanSquare size={20} />, label: 'Kanban' },
            { icon: <ShoppingCart size={20} />, label: 'eCommerce' },
            { icon: <GraduationCap size={20} />, label: 'Academy' },
            { icon: <Truck size={20} />, label: 'Logistics' },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 p-2 hover:bg-[#1a1f37] rounded-lg cursor-pointer"
            >
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};