import React from 'react';

function Task(props) {
    let task;
    if (props.todoItem.status === 'completed') {
        task = (
            <li style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
                <input type='Checkbox' checked onChange={() => {props.changeItemStatus(props.todoItem)}}></input>
                    <strike>{props.todoItem.description}</strike>
                <input type='button' value={'Delete'} onClick={()=> {props.removeItem(props.todoItem)}}></input>
            </li>
        );
    } else {
        task = (
            <li style={{display:'flex',flexDirection:'row',padding:'0px',justifyContent:'center'}}>
                <input type='Checkbox' checked='' onChange={() => {props.changeItemStatus(props.todoItem)}}></input>
                {props.todoItem.description}
                <input type='button' value={'Delete'} onClick={()=> {props.removeItem(props.todoItem)}}></input>
            </li>
        );
    }
    return (
        task
    );
}

export default Task;
