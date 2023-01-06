import React from "react";

const ToolList = ({todos, setTodos, input, setInput, setEditTodo}) => {

    function removeHandle(){
        let newTodo = todos.filter(todo => todo.checked == false);
        setTodos(newTodo)
    }

    function renameHandle(){
        let todosCheckedQuantity = todos.filter(todo => todo.checked);
        
        if(todosCheckedQuantity.length > 1){
            alert('Select just 1 todo to rename')
        }

        setEditTodo(todosCheckedQuantity[0])
    }

    function completedHandle(){
        let newTodo = []
        for(var todo of todos){
            switch(true){
                case todo.checked && !todo.completed:
                    newTodo.push({
                        ...todo, completed: true, checked: false
                    })
                    break;
                case !todo.checked && todo.completed:
                    newTodo.push({
                        ...todo, completed: true, checked: false
                    })
                    break;
                case todo.checked && todo.completed:
                    newTodo.push({
                        ...todo, completed: false, checked: false
                    })
                    break;
                default:
                    newTodo.push({
                        ...todo, checked: false
                    })
            }
            
        }
        setTodos(newTodo)
    };

    return(
        <div className="tool-list">
            <p>Actions: </p>
           <div className="tool">
            <button className="remove" onClick={removeHandle}>
                <span class="material-symbols-outlined">
                    delete
                </span> 
                    <span className="tool-name">
                    Remove todo(s)
                    </span>
                </button>
           </div>
           <div className="tool">
            <button className="rename" onClick={renameHandle}>
            <span class="material-symbols-outlined">
                edit_note
            </span>
            <span className="tool-name">
                Rename Todo
            </span>
            </button>
           </div>
           <div className="tool">
            <button className="done" onClick={completedHandle}>
            <span class="material-symbols-outlined">
            check_circle
            </span>
            <span className="tool-name">
                Set to (un)done
            </span>
                </button>
           </div>
        </div>
    )
}

export default ToolList;