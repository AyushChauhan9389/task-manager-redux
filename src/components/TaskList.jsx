import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TaskCard from '@/components/TaskCard';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { reorderTasks } from '@/redux/tasksSlice';

const TaskList = () => {
  const dispatch = useDispatch();
  const { tasks, filter, searchQuery } = useSelector((state) => state.tasks);

  const filteredTasks = tasks.filter((task) => {
    // Filter by search query
    if (searchQuery && !task.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }

    // Filter by status
    switch (filter) {
      case 'COMPLETED':
        return task.completed;
      case 'PENDING':
        return !task.completed;
      case 'OVERDUE':
        return new Date(task.dueDate) < new Date() && !task.completed;
      default:
        return true;
    }
  });

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;
    if (source.index === destination.index) return;

    dispatch(
      reorderTasks({
        sourceIndex: source.index,
        destinationIndex: destination.index,
      })
    );
  };

  if (filteredTasks.length === 0) {
    return <p className="text-center text-gray-400">No tasks found.</p>;
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="tasks">
        {(provided) => (
          <div
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {filteredTasks.map((task, index) => (
              <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <TaskCard task={task} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TaskList;
