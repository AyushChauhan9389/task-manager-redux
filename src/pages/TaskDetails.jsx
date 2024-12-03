import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button } from '@/components/ui/Button';

const TaskDetails = () => {
  const { id } = useParams();
  const task = useSelector((state) => state.tasks.tasks.find((t) => t.id === id));

  if (!task) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <p>Task not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <Link to="/dashboard">
        <Button variant="ghost">Back to Dashboard</Button>
      </Link>
      <div className="mt-4 p-6 bg-gray-800 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-2">{task.title}</h1>
        <p className="text-gray-400 mb-4">{task.description}</p>
        <p className="text-gray-400">
          Due Date: {new Date(task.dueDate).toLocaleDateString()}
        </p>
        <p className={`mt-2 ${task.completed ? 'text-green-400' : 'text-red-400'}`}>
          Status: {task.completed ? 'Completed' : 'Pending'}
        </p>
      </div>
    </div>
  );
};

export default TaskDetails;
