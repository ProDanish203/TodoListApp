import React from 'react'

export const TodoItem = ({ id, title, completed, toggleTodo, deleteTodo }) => {
  return (
    <>
    <div className="todo">
        <label>
        <input type="checkbox" 
        checked={completed} 
        onChange={e => toggleTodo(id, e.target.checked)}
        />
        {title}
        </label>
        <button className="btn del-btn" 
      onClick={() => deleteTodo(id)}
        >Delete</button>
    </div>
    </>
  )
}
