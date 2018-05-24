import React from 'react';
import ReactDOM from 'react-dom';
import ToDoList from './components/todolist/todolist'
import './index.css'


const box = document.querySelector('#container');
ReactDOM.render(
    <div>
        <ToDoList />
    </div>, box
);