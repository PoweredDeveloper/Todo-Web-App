import React from 'react'
import Todo from './Todo'
import '../../css/styles.css'
import './TodoStyles/todos.css'

export default function TodoList({ todos, toggleTodo, deleteTodo }) {
  return todos.map((todo) => {
    return (
      <Todo
        key={todo.id}
        todo={todo}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    )
  })
}
