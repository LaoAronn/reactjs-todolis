import { useState } from "react"
import TodoInput from "./component/TodoInput"
import TodoList from "./component/TodoList"

function App() {
  
  /*w User interaction STATEFUL VARIABLE*/
  const [todos, setTodos] = useState([
    /* To do list comes here */
  ]) 

  /* reinstantialising state */
  const [todoValue, setTodoValue] = useState('')

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index){
    /* as long as its not equal to index param, it stays  */
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })

    setTodos(newTodoList)
  }

  function handleEditTodo(index){
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)
  }

  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />
      <TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos} />
    </>
  )
}

export default App
