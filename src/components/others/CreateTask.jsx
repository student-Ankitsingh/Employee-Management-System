import React, { useState } from 'react';
import { getLocalStorage, updateEmployeesInStorage } from '../../utils/localStorage';

const CreateTask = () => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    date: '',
    category: '',
    employeeEmail: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const { employees } = getLocalStorage();
    const index = employees.findIndex(emp => emp.email === task.employeeEmail);

    if (index !== -1) {
      const newTask = {
        title: task.title,
        description: task.description,
        date: task.date,
        category: task.category,
        active: true,
        newTask: true,
        completed: false,
        failed: false
      };

      employees[index].tasks.push(newTask);
      employees[index].taskNumber.newTask += 1;
      employees[index].taskNumber.active += 1;

      updateEmployeesInStorage(employees);
      alert("Task added successfully!");
    } else {
      alert("Employee not found.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 space-y-3 ">
      <input
        type="text"
        placeholder="Employee Email"
        className="border p-2 rounded w-full text-black"
        value={task.employeeEmail}
        onChange={(e) => setTask({ ...task, employeeEmail: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Task Title"
        className="border p-2 rounded w-full text-black"
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
        required
      />
      <textarea
        type="text"
        placeholder="Description"
        className="border p-2 rounded w-full text-black"
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
      />
      <input
        type="date"
        className="border p-2 rounded w-full text-black"
        value={task.date}
        onChange={(e) => setTask({ ...task, date: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Category"
        className="border p-2 rounded w-full text-black"
        value={task.category}
        onChange={(e) => setTask({ ...task, category: e.target.value })}
      />
      <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition">Add Task</button>
    </form>
  );
};

export default CreateTask;
