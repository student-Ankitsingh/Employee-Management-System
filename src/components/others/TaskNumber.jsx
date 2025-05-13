import React from 'react'

const TaskNumber = ({ taskNumber }) => (
  <div className="grid grid-cols-2 gap-4 my-6">
    {Object.entries(taskNumber).map(([key, value]) => (
      <div key={key} className="bg-gray-800 p-4 rounded text-center">
        <p className="text-sm">{key}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    ))}
  </div>
);


export default TaskNumber;