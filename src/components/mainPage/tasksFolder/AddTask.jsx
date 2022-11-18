/* eslint-disable */
import React, { useState } from 'react'
import { BsPlusLg } from 'react-icons/bs'
import { Chip } from 'primereact/chip'
import { Button } from 'primereact/button'
import 'primeicons/primeicons.css'
import '../../../Stylings/mainPage.css'
import { InputText } from 'primereact/inputtext'
import propTypes from 'prop-types'

function AddTask ({ onAdd }) {
  const [text, setText] = useState('')

  const submit = (e) => {
    e.preventDefault()

    if (!tempTask) {
      console.log(" you can't add a blank task")
      return
    }
    onAdd(tempTask)

    setText('')

    setTempTask('');
  }

  const [tempTask, setTempTask] = useState('');

    const taskTemplate = (option) => {
      return (
          <div className="inline-task-add-container">
          <Button icon="pi pi-plus" className="p-button-rounded p-button-info" aria-label="User" />


             <InputText 
                style={{width:'80%'}} 
                value={tempTask} 
                placeholder="Task for the day is..."
                onChange={(e) => setTempTask(e.target.value)} />   
              <i className="pi pi-trash"></i>
          </div>
      );
  }
  

  return (
    <form className='add-form' onSubmit={submit}>

      <Chip style={{padding:'1em', width: '80%', justifyContent: 'space-evenly'}} template={taskTemplate} />
        {/* <div className='MyDay-AddTask-Container'>
            <button className='addTask-button' type='submit'><BsPlusLg></BsPlusLg></button>
            <input className='addTask-input' type="text" placeholder='Add task' value = {text} onChange = { (e) => setText(e.target.value) }></input>
        </div> */}
    </form>
  )
}

export default AddTask

AddTask.propTypes = {
  onAdd: propTypes.any,
  tasks: propTypes.any,
  setTasks: propTypes.any
}
