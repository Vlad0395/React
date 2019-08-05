import React from "react"
function TodoItem(props) {
    const businessCompleted = {
                color:'grey',
                fontStyle: 'italic',
                textDecoration: 'line-through'
    }
    return (
        <div className="todo-item">
            <input  
                type="checkbox" 
                onChange={()=>props.handleChange(props.item.id)}
                checked={props.item.completed}
            />
            <p style = {props.item.completed ? businessCompleted : null}>{props.item.text}</p>
        </div>
    )
}

export default TodoItem