import React from 'react'
import { TodoContext } from '../TodoContext'
import './TodoSearch.css'

 function TodoSearch() {
    const {searchValue,setSearchValue} = React.useContext(TodoContext)
    const handleSearch = (event) => {
        setSearchValue(event.target.value)   
     }

    return (
        <input className="TodoSearch" type="text" placeholder="Buscar...." 
        onChange={ handleSearch }
        value={searchValue}
        />
    )
}
export {TodoSearch}