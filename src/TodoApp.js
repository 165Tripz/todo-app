import React,{useState} from 'react';
import TodoList from './TodoList';
import './App.css';

const initialState=[
    {
        id: 1,
        description:'first',
        status:'pending'
    },
    {
        id: 2,
        description:'second',
        status:'completed'
    }
]

function TodoApp() {

    const [todoItems, setTodoItems] = useState(initialState);
  

    return (
    <div className="TodoApp">
        <TodoList todoItems={todoItems}/>
    </div>
    );
}

export default TodoApp;
