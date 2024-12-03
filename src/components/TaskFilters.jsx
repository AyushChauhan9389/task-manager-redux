// src/components/TaskFilters.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, setSearchQuery } from '@/redux/tasksSlice';
import { Input } from '@/components/ui/Input';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const TaskFilters = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.tasks.filter);
  const searchQuery = useSelector((state) => state.tasks.searchQuery);

  const handleFilterChange = (filter) => {
    dispatch(setFilter(filter));
  };

  const handleSearchChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
      <div className="relative w-full sm:w-1/3 mb-2 sm:mb-0">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <Input
          type="text"
          placeholder="Search Tasks"
          value={searchQuery}
          onChange={handleSearchChange}
          className="pl-10 bg-gray-800 text-white placeholder:text-gray-400"
        />
      </div>
      <div className="flex space-x-2">
        <Button
          variant={currentFilter === 'ALL' ? 'primary' : 'ghost'}
          onClick={() => handleFilterChange('ALL')}
        >
          All
        </Button>
        <Button
          variant={currentFilter === 'COMPLETED' ? 'primary' : 'ghost'}
          onClick={() => handleFilterChange('COMPLETED')}
        >
          Completed
        </Button>
        <Button
          variant={currentFilter === 'PENDING' ? 'primary' : 'ghost'}
          onClick={() => handleFilterChange('PENDING')}
        >
          Pending
        </Button>
        <Button
          variant={currentFilter === 'OVERDUE' ? 'primary' : 'ghost'}
          onClick={() => handleFilterChange('OVERDUE')}
        >
          Overdue
        </Button>
      </div>
    </div>
  );
};

export default TaskFilters;
