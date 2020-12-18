import React, { useState } from 'react'
import { uuid } from 'uuidv4'

const TodoList = () => {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')
  const submit = e => {
    e.preventDefault()
    const newTodos = { id: uuid(), content: inputValue }
    setTodos([...todos, newTodos])
    setInputValue('')
  }

  const deleteTodo = id => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <div>
      <span>Todo</span>
      <form onSubmit={submit}>
        <input
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          type='text'
        ></input>
        <input type='submit'></input>
      </form>
      {todos.map(todo => (
        <div key={todo.id}>
          <p>{todo.content}</p>
          <button onClick={() => deleteTodo(todo.id)}>supprimer</button>
        </div>
      ))}
    </div>
  )
}

export default TodoList
