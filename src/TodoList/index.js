import React from 'react'
import './TodoList.css'
 const TodoList = (props) => {
    return (
        
            <section className="todolist">
                <ul>
                    {props.children}
                </ul>
            </section>
        
    )
}
export {TodoList}
