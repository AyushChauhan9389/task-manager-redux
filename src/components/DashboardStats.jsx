import React from 'react';
import { useSelector } from 'react-redux';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

const data = [
  { value: 30 },
  { value: 40 },
  { value: 35 },
  { value: 50 },
  { value: 45 },
  { value: 60 },
  { value: 55 },
];

export const DashboardStats = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;
  const completionRate = totalTasks ? (completedTasks / totalTasks) * 100 : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-[#242b4a] p-6 rounded-xl">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-gray-400 text-sm">Website Analytics</h3>
            <p className="text-white text-lg font-semibold mt-1">
              Total 28.5% Conversion Rate
            </p>
          </div>
          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="bg-[#1a1f37] p-3 rounded-lg">
            <div className="text-gray-400 text-sm">Spend</div>
            <div className="text-white font-semibold">12h</div>
          </div>
          <div className="bg-[#1a1f37] p-3 rounded-lg">
            <div className="text-gray-400 text-sm">Orders</div>
            <div className="text-white font-semibold">18</div>
          </div>
          <div className="bg-[#1a1f37] p-3 rounded-lg">
            <div className="text-gray-400 text-sm">Items</div>
            <div className="text-white font-semibold">2.3k</div>
          </div>
        </div>

        <div className="h-32">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <Line
                type="monotone"
                dataKey="value"
                stroke="#8884d8"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-[#242b4a] p-6 rounded-xl">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-gray-400 text-sm">Task Progress</h3>
            <p className="text-white text-lg font-semibold mt-1">
              {completionRate.toFixed(1)}% Tasks Completed
            </p>
          </div>
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between text-gray-400">
            <span>Completed Tasks</span>
            <span>{completedTasks}</span>
          </div>
          <div className="w-full bg-[#1a1f37] rounded-full h-2">
            <div
              className="bg-green-500 h-2 rounded-full"
              style={{ width: `${completionRate}%` }}
            ></div>
          </div>
          <div className="flex items-center justify-between text-gray-400">
            <span>Total Tasks</span>
            <span>{totalTasks}</span>
          </div>
        </div>
      </div>

      <div className="bg-[#242b4a] p-6 rounded-xl">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-gray-400 text-sm">Support Tracker</h3>
            <p className="text-white text-lg font-semibold mt-1">
              Technical Support Performance
            </p>
          </div>
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
        </div>

        <div className="flex justify-center">
          <div className="relative w-32 h-32">
            <svg className="w-full h-full" viewBox="0 0 36 36">
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#1a1f37"
                strokeWidth="3"
              />
              <path
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#8b5cf6"
                strokeWidth="3"
                strokeDasharray={`${85}, 100`}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">85%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};