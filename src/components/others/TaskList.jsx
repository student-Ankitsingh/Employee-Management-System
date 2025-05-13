import React from 'react'

const TaskList = ({ tasks }) => (
  <div>
    <h3 className="text-xl mb-4">Tasks</h3>
    {tasks.map((task, idx) => (
      <div key={idx} className="bg-gray-700 p-4 rounded mb-2">
        <h4 className="font-semibold">{task.title}</h4>
        <p>{task.description}</p>
        <p className="text-sm text-gray-300">{task.date} - {task.category}</p>
      </div>
    ))}
  </div>
);


export default TaskList; 