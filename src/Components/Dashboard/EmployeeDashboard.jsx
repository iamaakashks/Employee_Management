import React from 'react';
import Header from '../others/Header';
import TaskListNumbers from '../others/TaskListNumbers';
import TaskList from '../TaskList/TaskList';

export default function EmployeeDashboard(){
    return (
        <div className="h-full w-full">
            <Header />
            <TaskListNumbers />
            <TaskList />
        </div>
    )
}