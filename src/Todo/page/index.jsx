import React from 'react';
import TodoApp from '../components/TodoApp';

TodoFeature.propTypes = {

};

function TodoFeature(props) {
    const todoApp = [
        {
            id: 1,
            name: 'Add your new todo'
        },
        {
            id: 2,
            name: 'Buy a new gaming laptop'
        },
        {
            id: 3,
            name: 'Complete a previous task'
        },
        {
            id: 4,
            name: 'Create video for Youtube'
        },
        {
            id: 5,
            name: 'Create a new portfolio site'
        },
        {
            id: 6,
            name: 'You have 4 pending tasks'
        },
        {
            id: 7,
            name: 'Clear All'
        },
    ]
    return (
        <div>
            <h3>Todo App</h3>
            <TodoApp todoApp={todoApp} />
        </div>
    );
}


export default TodoFeature;