import { useEffect, useState } from 'react';
import './App.css';
import { Form } from './Components/Form';
import { TodoList } from './Components/TodoList';

function App() {

  //Normal Method
  // const [todos, setTodos] = useState([])
  
  //Local Storage Method
  const [todos, setTodos] = useState(() => {

    const localVal = localStorage.getItem("ITEMS");

    if(localVal == null) return [];

    return JSON.parse(localVal);
    
  })



  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  const addTodo = (title) => {
    setTodos(curr => {
      return [
        ...curr,
        {
          id: crypto.randomUUID(),
          title: title,
          completed: false
        }
      ]
    })
  }

  const toggleTodo = (id, completed) => {

    setTodos(curr => {
      return curr.map(todo => {

        if(todo.id == id){
          return { ...todo, completed}
        }

        return todo;

      })
    })

  }

  const deleteTodo = (id) => {
    setTodos(curr => {
      return curr.filter(todo => todo.id !== id );
    })
  }

  return (
    <>
    <div className="container">

      <Form onSubmit={addTodo}/>

      <div className="list">
        <h2 className='heading'>Todos: </h2>

        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>

      </div>
      
    </div>
    </>
  );
}

export default App;
