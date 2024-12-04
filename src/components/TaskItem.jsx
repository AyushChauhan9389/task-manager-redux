import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTaskComplete, deleteTask } from '../store/taskSlice';
import { Trash2, CheckCircle, Circle } from 'lucide-react';
import { format, parseISO } from 'date-fns';

export const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggleComplete = () => {
    dispatch(toggleTaskComplete(task.id));
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const isOverdue = !task.completed && new Date() > parseISO(task.dueDate);

  return (
    <div
      className={`mt-4 p-4 rounded-lg shadow-sm border ${
        task.completed
          ? 'bg-gray-50 border-gray-200'
          : isOverdue
          ? 'bg-red-50 border-red-200'
          : 'bg-white border-gray-200'
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <button
            onClick={handleToggleComplete}
            className={`text-${task.completed ? 'green' : 'gray'}-500 hover:text-${
              task.completed ? 'green' : 'gray'
            }-600`}
          >
            {task.completed ? (
              <CheckCircle size={20} />
            ) : (
              <Circle size={20} />
            )}
          </button>
          <div>
            <h3
              className={`text-lg font-medium ${
                task.completed ? 'text-gray-500 line-through' : 'text-gray-900'
              }`}
            >
              {task.title}
            </h3>
            <p className="text-sm text-gray-500">{task.description}</p>
            <p
              className={`text-sm ${
                isOverdue ? 'text-red-600' : 'text-gray-500'
              }`}
            >
              Due: {format(parseISO(task.dueDate), 'MMM d, yyyy')}
            </p>
          </div>
        </div>
        <button
          onClick={handleDelete}
          className="text-gray-400 hover:text-red-500"
        >
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
};