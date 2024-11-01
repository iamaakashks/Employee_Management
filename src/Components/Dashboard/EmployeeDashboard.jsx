import React from 'react';
import Header from '../others/Header';
import TaskListNumbers from '../others/TaskListNumbers';
import TaskList from '../TaskList/TaskList';

export default function EmployeeDashboard({data}){
    console.log(data);
    document.title = "Employee Dashboard";
    return (
        <div className="min-h-screen w-full">
            <Header data={data}/>
            <TaskListNumbers data = {data}/>
            <TaskList />
        </div>
    )
}