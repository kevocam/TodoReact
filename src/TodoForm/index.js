import React from 'react'
import { TodoContext } from '../TodoContext'
import './TodoForm.css'
function TodoForm() {
const [newTodoValue, setNewTodoValue] = React.useState("")
const {saveTodos, addTodo, setOpenModal} =React.useContext(TodoContext)


    const onCancel = ()=> {
        setOpenModal(false);
    }
    const onChange= (e) => {
        setNewTodoValue(e.target.value)    
    }
    const onSubmit = (e)=> {
        e.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false);

    }    
    return (
        <form onSubmit={onSubmit} className="form">            
            <textarea 
            value={newTodoValue} 
            onChange={onChange} placeholder="Nueva tarea..." />            
            
            <div className="butttons">
                <button type="button"
                onClick={onCancel}
                >
                    Cancelar
                </button>
                <button type="submit"               
                >
                    Guardar
                </button>
            </div>
        </form>
    )
}

export {TodoForm}
