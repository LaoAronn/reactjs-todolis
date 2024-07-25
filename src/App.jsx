import { useState, useEffect } from "react"
import TodoInput from "./component/TodoInput"
import TodoList from "./component/TodoList"

function App() {
  
  /*w User interaction STATEFUL VARIABLE*/
  const [todos, setTodos] = useState([
    /* To do list comes here */
  ]) 

  /* reinstantialising state */
  const [todoValue, setTodoValue] = useState('')

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }))
  }

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index){
    /* as long as its not equal to index param, it stays  */
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })

    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleEditTodo(index){
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)
  }

  /* listen to diff event and run code based on when the event happen */
  /* => {} = arrow function [] = dependency array*/
  useEffect(() => {
    /* if local storage doesnt exist*/
    if (!localStorage){
      return
    } 


    let localTodos = localStorage.getItem('todos')
    if (!localTodos){ /* if doesnt exist before */
      return
    }

    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)

  }, [])

  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />
      <TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos} />
    </>
  )
}

export default App
