import React from 'react'
import './CreateTodoButton.css'
import { TodoContext } from '../TodoContext';

function CreateTodoButton() {

    const {openModal, setOpenModal} = React.useContext(TodoContext)


    const handleClick = () => {
        if(!openModal){
            setOpenModal(true)
        }else{
            setOpenModal(false)
        }        
    }
    
    return (
        <button className="CreateTodoButton" type="button" onClick={handleClick}>
            +
        </button>
    )
}
export {CreateTodoButton}
