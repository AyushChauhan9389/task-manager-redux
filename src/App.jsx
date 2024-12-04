import React, { useState } from 'react';
import { TaskList } from './components/TaskList';
import { TaskForm } from './components/TaskForm';
import { TaskFilters } from './components/TaskFilters';
import { DashboardStats } from './components/DashboardStats';
import { Sidebar } from './components/Sidebar';
import { Settings2, Plus } from 'lucide-react';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#1a1f37]">
      <Sidebar />
      <div className="flex-1 p-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search (Ctrl/)"
              className="bg-[#242b4a] text-gray-300 px-4 py-2 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowAddTask(true)}
              className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              <Plus size={20} className="mr-2" />
              Add Task
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-200">
              <Settings2 size={20} />
            </button>
            <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
              <span className="text-white text-sm">JD</span>
            </div>
          </div>
        </div>

        <DashboardStats />

        <div className="mt-8">
          <TaskFilters />
          <TaskList />
        </div>
      </div>

      {showAddTask && <TaskForm onClose={() => setShowAddTask(false)} />}
    </div>
  );
}

export default App;