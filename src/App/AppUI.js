import React from 'react'
import { TodoContext } from '../TodoContext';
import {TodoCounter} from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton'
import { Modal } from '../Modal'
import { TodoForm } from '../TodoForm'
import './App.css';

const AppUI = () => {

    const {error, loading, searchTodos,completeTodos,deleteTodos, openModal, setOpenModal
    } = React.useContext(TodoContext)

    return (        
    <React.Fragment>  
        <TodoCounter />
        <TodoSearch  /> 
        
            <TodoList>
            {error && <p>hubo un error</p>}
            {loading && <p>Estamos cargando</p>}
            {(!loading && !searchTodos.length) && <p>Crea tu primer Todo</p>}
            
            {searchTodos.map(todo => (
            <TodoItem 
            text={todo.text} 
            key={todo.text} 
            completed={todo.completed}
            onCompleted={()=>completeTodos(todo.text)}
            onDelete= {()=>deleteTodos(todo.text) }
            />
            ))}
        </TodoList >
        {/* {openModal && (
            <Modal>
                {searchTodos[0]?.text}
            </Modal>
        )} */}
        {!!openModal && (
            <Modal>
                
                <TodoForm />
            </Modal>
        )}
          
        <CreateTodoButton setOpenModal={()=>setOpenModal()}/>      
    </React.Fragment>
        
    )
}

export {AppUI}
