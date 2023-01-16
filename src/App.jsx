import { useState } from 'react'
import Form from './components/Form'
import TodosList from './components/TodosList'
import ToolList from './components/ToolList'
import Draggable from 'react-draggable';
import './App.css'

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null)

  return (
    <>
      <div className='banner'></div>
      <div className='app'>
        <h1 className='title'>Todo app (React + Vite)</h1>
        <Form 
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
          className="form"
        />
        <TodosList
          todos={todos}
          setTodos={setTodos}
        />
        <ToolList
          todos={todos}
          setTodos={setTodos}
          input={input}
          setEditTodo={setEditTodo}
          setInput={setInput}
        />
      </div>
      <Draggable>
          <a href='https://gabrielmeiradev.github.io' target="_blank">
            <div className='creator-tag'>
              <img src='tag.svg' className='creator-tag-tag'></img>
              <p>Gabriel Meira</p>
            </div>
          </a>
      </Draggable>
    </>
  )
}

export default App
