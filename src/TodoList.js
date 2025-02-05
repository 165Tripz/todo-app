import React from "react";
import Task from "./Task";

function TodoList(props) {

    return (
        <ul className="TodoList" style={{textAlign:"left"}}>
            {
                // The list will have the completed tasks on top, and the pending tasks on the bottom
                props.todoItems.sort((a,b) => a.status>b.status ? 1 : -1).map( (item, index) => {
                    return (<Task todoItem={item}/>);
                })
            }
        </ul>
    );
}

export default TodoList;