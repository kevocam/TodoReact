import React from 'react'
import './TodoItem.css'

function TodoItem(props) {

   
    return (
        <li className="TodoItem flip-in-hor-bottom">
            <span className={`Ìcon Icon-check ${props.completed && 'Icon-check--active'}`}
            onClick={props.onCompleted}
            >
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="72" height="72" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M5 12l5 5l10 -10" />
            </svg>
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <span className="Icon Icon-delete"
            onClick={props.onDelete}
            >
                X
            </span>
        </li>
    )
}

export {TodoItem}
