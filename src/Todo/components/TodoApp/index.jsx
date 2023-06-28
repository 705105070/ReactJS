import React from 'react';

TodoApp.propTypes = {

};

function TodoApp(todoApp) {
    return (
        <ul className='tado-app'>
            {todoApp.map(todo => (
                <li key={todo.id}>
                    <TodoApp todoApp={todoApp} />
                </li>
            ))}
        </ul>
    );
}

export default TodoApp;