import React from 'react'
import Header from '../others/Header';
import TaskNumber from '../others/TaskNumber';
import TaskList from '../others/TaskList';

const EmployeeDashboard = ({data, onLogout }) => {

  return (
    <div>
        <div className='p-10 bg-[#1C1C1C] h-screen'>
            <Header  firstName={data.firstName} onLogout={onLogout}  />
            <TaskNumber taskNumber={data.taskNumber} />
            <TaskList tasks={data.tasks} />
        </div>
    </div>
  )
}

export default EmployeeDashboard;