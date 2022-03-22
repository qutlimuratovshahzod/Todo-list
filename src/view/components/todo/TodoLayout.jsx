import React from 'react'
import { TodoForm } from './TodoForm'
import { TodoList } from './TodoList'

export const TodoLayout = () => {
  return (
    <div className='w-2/6 bg-base-200 p-10 rounded-lg shadow-md'>
        <TodoForm/>
        <div className='divider'></div>
        <TodoList/>
    </div>
  )
}
