import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@headlessui/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/Input';
import { useDispatch } from 'react-redux';
import { addTask, editTask } from '@/redux/tasksSlice';

const AddEditTaskModal = ({ open, handleClose, existingTask }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    if (existingTask) {
      setTitle(existingTask.title);
      setDescription(existingTask.description);
      setDueDate(existingTask.dueDate);
    } else {
      setTitle('');
      setDescription('');
      setDueDate('');
    }
  }, [existingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (existingTask) {
      dispatch(editTask({ id: existingTask.id, title, description, dueDate }));
    } else {
      dispatch(addTask({ title, description, dueDate }));
    }
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

        <div className="bg-gray-800 rounded-lg max-w-md mx-auto z-20 p-6">
          <Dialog.Title className="text-lg font-bold text-white mb-4">
            {existingTask ? 'Edit Task' : 'Add New Task'}
          </Dialog.Title>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <Input
              as="textarea"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <Input
              type="date"
              placeholder="Due Date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              required
            />
            <div className="flex justify-end space-x-2">
              <Button type="button" variant="ghost" onClick={handleClose}>
                Cancel
              </Button>
              <Button type="submit" variant="primary">
                {existingTask ? 'Update' : 'Add'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Dialog>
  );
};

export default AddEditTaskModal;
