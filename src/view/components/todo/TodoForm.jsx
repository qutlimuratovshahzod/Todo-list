import React, { useState } from 'react'
import { useSelector } from '../../../logic/store'


export const TodoForm = () => {
  const [title, setTitle] = useState('')
  const { addTodo } = useSelector()
  const submitHandler = (event) => {
    event.preventDefault()
    if(!title.trim())return
    addTodo(title)
    setTitle('')
  }

  return (
    <form onSubmit={(event) => submitHandler(event)}>
      <div className="form-control">
        <div className="input-group">
          <input value={title} onChange={event => setTitle(event.target.value)} type="text" placeholder="Add your task here…" className="input input-bordered w-full input-lg" />
          <button className="btn btn-square btn-lg">
            +
          </button>
        </div>
      </div>
    </form>
  )
}
