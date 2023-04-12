import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <>
    <div className="todos">
          {todos.length === 0 && "No Todos added yet!!!"}
          {
            todos.map((todo, i) => {
              return (
                // <TodoItem id={todo.id} completed={todo.completed} title={todo.title} key={todo.id}/>
                // It will pass the whole object
                <TodoItem {...todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
              )    
            })
          }

        </div>
    </>
  )
}
