import React,{useState} from 'react';
import TodoList from './TodoList';
import Summary from './Summary';
import './App.css';
import TodoForm from './TodoForm';

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
    },
    {
        id: 3,
        description:'third',
        status:'pending'
    }
]

function TodoApp() {

    const [todoItems, setTodoItems] = useState(initialState);
  
    function addTodoItem(item) {
        item.id = todoItems.length+1;
        setTodoItems(
            [... todoItems, item]
        );
    }

    function removeTodoItem(item) {
        let newItems = todoItems.filter(i => i.id !== item.id);

        setTodoItems(
            newItems
        );
    }

    function changeItemStatus(item) {
        item.status === 'pending' ? item.status='completed' : item.status='pending';
        let otherItems = todoItems.filter(i => i.id !== item.id);
        
        setTodoItems(
            [... otherItems, item].sort((a,b) => a.id - b.id)
        );
    }

    return (
    <div className="TodoApp">
        <TodoForm onAddItem={addTodoItem}/>
        <Summary todoItems={todoItems}/>
        <TodoList todoItems={todoItems} changeItemStatus={changeItemStatus} removeTodoItem={removeTodoItem}/>
    </div>
    );
}

export default TodoApp;
