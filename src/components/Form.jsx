import React from 'react';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
const Form = ({input, setInput, todos, setTodos, editTodo, setEditTodo}) => {
    const onInputChange = (e) => {
        setInput(e.target.value)
    }

    const updateTodo = (title, id) => {
        const newTodo = todos.map((todo) => {
            todo.id == id ? todo.title=title : todo
        })

        console.log(newTodo)
        setEditTodo("")
        setInput("")
    }

    useEffect(() => {
        if(editTodo){
            setInput(editTodo.title)
        } else {
            setInput("")
        }
    }, [setInput, editTodo])

    const onSubmitForm = (e) => {
        e.preventDefault();
        if(!editTodo){
            setTodos([...todos, {id: uuidv4(), title: input, checked: false, completed: false}])
            setInput("");
        } else {
            updateTodo(input, editTodo.id)
        }
    }
    return (
        <form onSubmit={onSubmitForm} className="add-todo-form">
            <input 
                type="text" 
                placeholder="Enter a Todo" 
                value={input}
                required
                className='add-todo'
                onChange={onInputChange}
            />
            <button type="submit">
            <span class="material-symbols-outlined">
            send
            </span>
            </button>
        </form>
    )
}

export default Form;