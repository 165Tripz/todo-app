import React from "react";
import Task from "./Task";

function TodoList(props) {

    return (
        <div className="TodoList" style={{display:'flex',justifyContent:'space-around'}}>
        <ul style={{padding:'0px',width:'20%'}}>
            {
                // The list will have the pending tasks on the left
                props.todoItems.filter(p => p.status === 'pending').map( (item, index) => {
                    return (<Task todoItem={item} changeItemStatus={props.changeItemStatus} removeItem={props.removeTodoItem}/>);
                })
            }
        </ul>
        <ul style={{padding:'0px',width:'20%'}}>
            {
                // The list will have the completed tasks on the Right
                props.todoItems.filter(p => p.status === 'completed').map( (item, index) => {
                    return (<Task todoItem={item} changeItemStatus={props.changeItemStatus} removeItem={props.removeTodoItem}/>);
                })
            }
        </ul>
        </div>
    );
}

export default TodoList;