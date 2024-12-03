import React from 'react';
import { Bell, Cog, Moon, Search, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);

  return (
    <>
      <header className="flex h-16 items-center justify-between border-b border-gray-700 px-6 bg-gray-900">
        <div className="flex items-center gap-4">
          <Menu className="h-5 w-5 text-gray-400 cursor-pointer" />
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search tasks..."
              className="w-64 pl-10 bg-gray-800 text-white placeholder:text-gray-400"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Moon className="h-5 w-5 text-gray-400" />
          </Button>
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5 text-gray-400" />
          </Button>
          <Button variant="ghost" size="icon">
            <Cog className="h-5 w-5 text-gray-400" />
          </Button>
          <div className="h-8 w-8 rounded-full bg-gray-400" />
          <Button onClick={() => setIsTaskModalOpen(true)} className="ml-4">
            Add Task
          </Button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
