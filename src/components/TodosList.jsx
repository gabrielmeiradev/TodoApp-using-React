import React from "react";

const TodosList = ({todos, setTodos}) => {

    function checkboxChange(event, todo){
        let newTodo = []
        for(var to of todos){
            if(to.id === todo.id){
                newTodo.push({
                    ...to, checked: !to.checked
                })
            }
            else {
                newTodo.push(to)
            }
        }
        setTodos(newTodo);
    }

    const todoClickHandle = (e, todo) => {
        if(e.target.type === "checkbox"){
            return;
        }
        const checkbox = e.target.children[0];

        checkboxChange(checkbox, todo);
    }

    return(
        <div className={todos.length > 0 ? "todo-list" : "todo-list no-todos"}>
            {todos.length > 0 ? todos.map((todo) => 
                {
                    return(
                        <div className={
                            todos
                                .find(thisTodo => thisTodo.id === todo.id)
                                .completed
                                ? "todo completed" : "todo" 
                            }

                            key={todo.id}
                            onClick={
                                (e) => todoClickHandle(e, todo)
                            }
                        >
                            <input 
                            type="checkbox" 
                            onChange={
                                (e) => checkboxChange(e, todo)
                            } 
                            checked={
                                todos
                                    .find(thisTodo => thisTodo.id === todo.id)
                                    .checked
                            }/>
                            <p className="todo-title">{todo.title}</p>
                            <span className="todo-details">{todo.time}</span>
                        </div>
                    )
                }) : <p className="nothing">Nothing here... Add an item</p>
            }
        </div>
    )
}

export default TodosList;