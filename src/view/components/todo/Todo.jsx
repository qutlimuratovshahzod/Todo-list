import React, { useState } from 'react'
import {BiTrash} from 'react-icons/bi'
import { useSelector } from '../../../logic/store'
export const Todo = ({ todo }) => {
    const[check, setCheck] =useState(false)
    const { toggleTodo, removeTodo } =useSelector()

    const toggleTodos = (id) => {
        toggleTodo(id)
        setCheck(todo.completed)
    }

    return (
        <li className='flex justify-between  items-center'>
            <div className='flex items-center gap-3'>
                <div className="form-control">
                    <label className="cursor-pointer label">
                     <input type="checkbox" checked={check} onChange={event=> toggleTodos(todo.id)} className="checkbox checkbox-secondary"/>
                    </label>
                </div>
                <span className='text-lg'>{todo.title}</span>
            </div>
            <button onClick={() =>removeTodo(todo.id) } className='btn btn-ghost text-error btn-square btn-sm text-lg'><BiTrash/></button>
        </li>
    )
}
