import React from 'react'
import { Todo } from './Todo'

export const TodoList = () => {
    const fakeTodos = [
        {
            id: '0',
            title:'Todo 1',
            completed: false
        },
        {
            id: '1',
            title:'Todo 2',
            completed: false
        }
    ]
  return (
    <ul>
    {fakeTodos.map((todo, index) =>{
        return <Todo key={index} todo={todo}/>
    })}
    </ul>
  )
}
