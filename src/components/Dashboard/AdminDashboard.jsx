import React, { useState } from 'react';
import Header from '../others/Header';
import CreateTask from '../others/CreateTask';
import AllTask from '../others/AllTask';

const AdminDashboard = ({ data, onLogout }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="p-10  bg-[#1c1c1c] h-screen ">
      <div className='pb-5'>
      <Header firstName={data.firstName} onLogout={onLogout} />
      </div>
      <CreateTask addTask={addTask} />
      <AllTask tasks={tasks} />
    </div>
  );
};

export default AdminDashboard;
