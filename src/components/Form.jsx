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
            let date = new Date();
            let hours = date.getHours() < 9 ? '0' + date.getHours() : date.getHours();
            let minutes = date.getMinutes() < 9 ? '0' + date.getMinutes() : date.getMinutes();
            let day = date.getDate() < 9 ? '0' + date.getDate() : date.getDate();
            let month = (date.getMonth() + 1) < 9 ? '0' + (date.getMonth() + 1) : date.getMonth();
            let time = `${hours}:${minutes} ${day}/${month}`
            setTodos([...todos, {id: uuidv4(), title: input, checked: false, completed: false, time: time}])
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
            add_circle
            </span>
            </button>
        </form>
    )
}

export default Form;