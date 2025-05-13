import React from 'react';
import { getLocalStorage } from '../../utils/localStorage';

const AllTask = () => {
  const { employees } = getLocalStorage();

  return (
    <div>
      <h3 className="text-xl font-semibold mb-2">All Employee Tasks</h3>
      {employees.map((emp) => (
        <div key={emp.id} className="mb-4 border p-3 rounded">
          <h4 className="font-bold">{emp.firstName} ({emp.email})</h4>
          <ul className="list-disc ml-5">
            {emp.tasks.map((task, idx) => (
              <li key={idx}>{task.title} - {task.date}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default AllTask;
