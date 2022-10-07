import React, { useState } from 'react'
import { BsPlusLg } from 'react-icons/bs'
import propTypes from 'prop-types'

function AddTask ({ onAdd }) {
  const [text, setText] = useState('')

  const submit = (e) => {
    e.preventDefault()

    if (!text) {
      console.log(" you can't add a blank task")
      return
    }

    onAdd(text)

    setText('')
  }

  return (
    <form className='add-form' onSubmit={submit}>
        <div className='MyDay-AddTask-Container'>
            <button className='addTask-button' type='submit'><BsPlusLg></BsPlusLg></button>
            <input className='addTask-input' type="text" placeholder='Add task' value = {text} onChange = { (e) => setText(e.target.value) }></input>
        </div>
    </form>
  )
}

export default AddTask

AddTask.propTypes = {
  onAdd: propTypes.any
}
