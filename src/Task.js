import React from 'react';

function Task(props) {
    let task;
    if (props.todoItem.status === 'completed') {
        task = (
            <li>
                <h3>
                    <strike>{props.todoItem.description}</strike>
                </h3>
            </li>
        );
    } else {
        task = (
            <li>
                <h3>
                    {props.todoItem.description}
                </h3>
            </li>
        );
    }
    return (
        task
    );
}

export default Task;
