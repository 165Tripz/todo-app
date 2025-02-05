import React from 'react';

function Summary(props) {
    let pendingItems = props.todoItems.filter(i => i.status === 'pending');
    let completedItems = props.todoItems.filter(i => i.status === 'completed');
    
    return (
    <div style={{display:'flex',flexDirection:'row',justifyContent:"space-around",borderBottom:"solid rgb(50, 224, 96)"}}>
        <h1 style={{backgroundColor:"rgb(22, 214, 73)",borderRadius:"5px"}}>Pending : {pendingItems.length}</h1>
        <h1 style={{backgroundColor:"rgb(22, 214, 73)",borderRadius:"5px"}}>Completed : {completedItems.length}</h1>
    </div>
    );
}

export default Summary;
