import React from 'react'
import { useSelector } from '../../../logic/store'
import { Todo } from './Todo'

export const TodoList = () => {
   const {todos} =useSelector()
  return (
    <ul>
    {todos.map((todo, index) =>{
        return <Todo key={index} todo={todo}/>
    })}
    </ul>
  )
}
