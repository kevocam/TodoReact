import { findAllByDisplayValue } from '@testing-library/react';
import React from 'react'
import { useLocalStorage } from './useLocalStorage'
const TodoContext = React.createContext()

function TodoProvider(props){
    const{
      item:todos,
      saveItem:saveTodos,
      loading,
      error,
    } = useLocalStorage("TODOS_V1", [])
    
    const [searchValue, setSearchValue] = React.useState("");
    const [openModal, setOpenModal] =React.useState(false);
    const completedTodos = todos.filter(todo => todo.completed === true).length //!!todo.completed
    const totalTodos = todos.length
  
    let searchTodos = [];
  
  
     
    // si no escribio mandamos todo, sie scribio mandamos coincidencias
  
    if(!searchValue.length >= 1){    
      searchTodos = todos
    } else {
      searchTodos = todos.filter( todo => {
        const todoText = todo.text.toLowerCase()
        const searchText = searchValue.toLowerCase()      
        return todoText.includes(searchText)
      })     
    }
    const addTodo = (text) => {
      
      const newTodos = [...todos]
  
        newTodos.push({
          completed:false,
          text
        })
      
       saveTodos(newTodos)
    }
  
    const completeTodos = (text) => {
      const todoIndex = todos.findIndex(toto=> toto.text === text);
      const newTodos = [...todos]
  
        newTodos[todoIndex].completed=true
      /* todos[todoIndex] ={
        text:todos[todoIndex].text,
        completed:true
      } */
       saveTodos(newTodos)
    }
  
    const deleteTodos = (text) => {
      const todoIndex = todos.findIndex(todo=> todo.text === text)
      const newItem = [...todos]    
      newItem.splice(todoIndex,1)
      saveTodos(newItem)
    }


    return(
        <TodoContext.Provider value={{
            error,
            loading,
            deleteTodos,
            completeTodos,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchTodos,
            openModal,
            setOpenModal,
            addTodo
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}


export { TodoContext, TodoProvider };