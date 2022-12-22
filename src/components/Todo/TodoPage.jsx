import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import TodoList from './TodoList'

import '../../css/styles.css'

const LOCAL_STORAGE_KEY = 'todoApp.todos'

export default function TodoPage() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find((todo) => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  function handleAddTodo(e) {
    e.preventDefault()

    const formData = new FormData(e.target)
    const { name, description, date, fromTime, toTime } = Object.fromEntries(
      formData.entries()
    )

    if (name.replace(/ /g, '') === '') return

    const dateOfCreation = new Date().toLocaleDateString('ru-ru', {
      calendar: true,
    })

    const newTodos = [
      ...todos,
      {
        id: uuidv4(),
        info: {
          name: name,
          description: description,
          dates: {
            creationDate: dateOfCreation,
            date: date,
            time: {
              from: fromTime,
              to: toTime,
            },
          },
        },
        reward: 4,
        complete: false,
      },
    ]

    setTodos(newTodos)
  }

  return (
    <>
      <form onSubmit={handleAddTodo}>
        <input type='text' name='name' maxLength={35} />
        <br />
        <textarea cols='20' rows='7' name='description' maxLength={150} />

        <div>
          <input type='date' name='date' />
          <input type='time' name='fromTime' />
          <input type='time' name='toTime' />
        </div>

        <button type='submit'>Add Task</button>
      </form>
      <button onClick={() => setTodos(todos.filter((todo) => !todo.complete))}>
        Clear Complete
      </button>

      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  )
}
