import React from 'react';
import Header from '../others/Header';
import TaskListNumbers from '../others/TaskListNumbers';
import TaskList from '../TaskList/TaskList';

export default function EmployeeDashboard(props){
    document.title = "Employee Dashboard";
    return (
        <div className="min-h-screen w-full">
            <Header changeUser={props.changeUser} data={props.data}/>
            <TaskListNumbers data = {props.data}/>
            <TaskList data={props.data}/>
        </div>
    )
}