
import React, { useState } from 'react';
import { Edit, Delete } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { toggleCompletion, deleteTask } from '../redux/tasksSlice';
import AddEditTaskModal from '@/components/AddEditTaskModal';
import ConfirmationDialog from '@/components/ConfirmationDialog';
import { Link } from 'react-router-dom';

const TaskCard = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);

  const handleToggle = () => {
    dispatch(toggleCompletion(task.id));
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
    setIsConfirmDialogOpen(false);
  };

  const isOverdue = new Date(task.dueDate) < new Date() && !task.completed;

  return (
    <>
      <div
        className={`p-4 rounded-lg shadow ${
          isOverdue ? 'border-2 border-red-500' : 'border'
        } border-gray-700 bg-gray-800`}
      >
        <div className="flex justify-between items-center mb-2">
          <Link to={`/tasks/${task.id}`} className="text-lg font-semibold text-white hover:underline">
            {task.title}
          </Link>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={handleToggle}
            className="form-checkbox h-5 w-5 text-purple-600"
          />
        </div>
        <p className={`text-sm ${task.completed ? 'line-through text-gray-400' : 'text-gray-200'}`}>
          {task.description}
        </p>
        <div className="flex justify-between items-center mt-4">
          <span className={`text-xs ${isOverdue ? 'text-red-400' : 'text-gray-400'}`}>
            Due: {new Date(task.dueDate).toLocaleDateString()}
            {isOverdue && ' (Overdue)'}
          </span>
          <div className="flex space-x-2">
            <button
              onClick={() => setIsEditModalOpen(true)}
              className="text-yellow-500 hover:text-yellow-400"
            >
              <Edit className="h-4 w-4" />
            </button>
            <button
              onClick={() => setIsConfirmDialogOpen(true)}
              className="text-red-500 hover:text-red-400"
            >
              <Delete className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Edit Task Modal */}
      <AddEditTaskModal
        open={isEditModalOpen}
        handleClose={() => setIsEditModalOpen(false)}
        existingTask={task}
      />

      {/* Delete Confirmation Dialog */}
      <ConfirmationDialog
        open={isConfirmDialogOpen}
        title="Delete Task"
        content="Are you sure you want to delete this task?"
        handleClose={() => setIsConfirmDialogOpen(false)}
        handleConfirm={handleDelete}
      />
    </>
  );
};

export default TaskCard;
