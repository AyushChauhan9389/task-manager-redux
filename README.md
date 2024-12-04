# Task Management Dashboard

A modern, feature-rich task management application built with React and Redux. This application helps you organize your tasks with a beautiful UI, real-time filtering, and persistent storage.

![Task Dashboard Preview](https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=2072)

## ✨ Features

- 📱 Responsive modern UI with dark theme
- 🔍 Real-time task search and filtering
- 📊 Interactive dashboard with task statistics
- 💾 Persistent storage using Redux Persist
- 📅 Due date tracking with overdue notifications
- 🎯 Task completion tracking
- 📱 Mobile-friendly design

## 🚀 Tech Stack

- **Frontend Framework:** React 18
- **State Management:** Redux Toolkit with Redux Persist
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Charts:** Recharts
- **Date Handling:** date-fns
- **Build Tool:** Vite

## 📦 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16.0.0 or higher)
- npm (v7.0.0 or higher)

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AyushChauhan9389/task-manager-redux.git
   cd task-manager-redux
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit:
   ```
   http://localhost:5173
   ```

## 📝 Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Creates a production build
- `npm run preview` - Previews the production build locally
- `npm run lint` - Runs ESLint to check code quality

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── DashboardStats.jsx # Dashboard statistics component
│   ├── TaskList.jsx       # Task list and related components
│   ├── TaskForm.jsx    # Task creation/editing form
│   └── Sidebar.jsx        # Application sidebar
├── store/              # Redux store configuration
│   ├── store.js        # Store setup with Redux Persist
│   └── taskSlice.js    # Task-related reducers and actions
└── utils/              # Utility functions and helpers
```

## 🎨 Key Features Explained

### Task Management
- Create, edit, and delete tasks
- Mark tasks as complete/incomplete
- Set due dates for tasks
- Track overdue tasks

### Dashboard Analytics
- View task completion statistics
- Monitor overdue tasks
- Track productivity trends

### Search and Filtering
- Real-time task search
- Filter by status (All, Pending, Completed, Overdue)
- Sort tasks by various criteria

### Data Persistence
- Tasks persist across browser sessions
- Automatic state saving
- Offline capability

## 🌟 Live Demo

Check out the live demo of the application: [Task Manager Demo]()

## 💻 Local Development

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/task-manager-redux.git
   ```
3. Install dependencies:
   ```bash
   cd task-manager-redux
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React Documentation](https://react.dev)
- [Redux Toolkit](https://redux-toolkit.js.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite](https://vitejs.dev)

## 📧 Contact

Ayush Chauhan - [@AyushChauhan9389](https://github.com/AyushChauhan9389)

Project Link: [https://github.com/AyushChauhan9389/task-manager-redux](https://github.com/AyushChauhan9389/task-manager-redux)