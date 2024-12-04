import React from 'react';
import { useSelector } from 'react-redux';
import { TaskItem } from './TaskItem';
import { isAfter, parseISO } from 'date-fns';

export const TaskList = () => {
  const { tasks, filter, searchQuery } = useSelector(
    (state) => state.tasks
  );

  const filterTasks = (tasks, filter) => {
    const filteredTasks = tasks.filter((task) => {
      const matchesSearch = task.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      switch (filter) {
        case 'completed':
          return task.completed && matchesSearch;
        case 'pending':
          return !task.completed && matchesSearch;
        case 'overdue':
          return (
            !task.completed &&
            isAfter(new Date(), parseISO(task.dueDate)) &&
            matchesSearch
          );
        default:
          return matchesSearch;
      }
    });

    return filteredTasks;
  };

  const filteredTasks = filterTasks(tasks, filter);

  return (
    <div className="space-y-4">
      {filteredTasks.length === 0 ? (
        <div className="text-center text-gray-500 py-8">
          No tasks found. Add a new task to get started!
        </div>
      ) : (
        filteredTasks.map((task) => <TaskItem key={task.id} task={task} />)
      )}
    </div>
  );
};