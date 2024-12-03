import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Layout from '@/components/Layout';
import TaskList from '@/components/TaskList';
import TaskFilters from '@/components/TaskFilters';
import AddEditTaskModal from '@/components/AddEditTaskModal';

const Dashboard = () => {
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const tasks = useSelector((state) => state.tasks.tasks);

  return (
    <Layout>
      <div className="flex flex-col space-y-4">
        {/* Existing Dashboard Content (Analytics, Reports, etc.) */}
        {/* ... */}

        {/* Task Management Section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-white">Task Management</h2>
            <button
              onClick={() => setIsTaskModalOpen(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add Task
            </button>
          </div>
          <TaskFilters />
          <TaskList />
        </div>
      </div>

      {/* Add Task Modal */}
      <AddEditTaskModal
        open={isTaskModalOpen}
        handleClose={() => setIsTaskModalOpen(false)}
      />
    </Layout>
  );
};

export default Dashboard;
