import { useState } from "react"
import TodoInput from "./component/TodoInput"
import TodoList from "./component/TodoList"

function App() {
  
  /*w User interaction STATEFUL VARIABLE*/
  const [todos, setTodos] = useState([
    /* To do list comes here */
  ]) 

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    setTodos(newTodoList)
  }

  return (
    <>
      <TodoInput handleAddTodos={handleAddTodos} />
      <TodoList todos={todos} />
    </>
  )
}

export default App
