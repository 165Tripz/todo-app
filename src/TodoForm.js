import React, { useState } from 'react';

function TodoForm(props) {
    const [description, setDescription] = useState("");
    function onInputChange(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e){
        // Template for the todoItem, with the pending state, and the description given
        let todoItem = {
            description:description,
            status:'pending'
        };
        props.onAddItem(todoItem);
        setDescription('');
        e.preventDefault();
    }
    
    return (
    <form onSubmit={handleSubmit}>
        <label>Description : </label>
        <input type='text' value={description} onChange={onInputChange}></input>
        <input type='submit' value="Submit"/>
    </form>
  );
}

export default TodoForm;
