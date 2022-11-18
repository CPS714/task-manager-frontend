/* eslint-disable */
import React, { useState, useEffect } from 'react'
import { FaRegLightbulb } from 'react-icons/fa'
import Tasks from './Tasks'
import AddTask from './AddTask'
import 'primeicons/primeicons.css'
import '../../../Stylings/mainPage.css'
import { Chip } from 'primereact/chip';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button'

const data = [{
  id: 1,
  task: 'Give dog a bath',
  status: false
}, {
  id: 2,
  task: 'bark bark',
  status: false
}]

function TaskView () {
  const [tasks, setTasks] = useState(data)
  const [tempTask, setTempTask] = useState('');

  function addTask (data) {
    setTasks(prev => [...prev, { id: prev.length + 1, task: data, status: false }])
    console.log(tasks)
  }

  function deleteTask (id) {
    console.log(tasks)
    const newState = tasks.map(obj => {
      if (obj.id === id) {
        return { ...obj, status: null }
      }

      // 👇️ otherwise return object as is
      return obj
    })
    setTasks(newState)
  }

  const completeTask = (id, isComplete) => {
    const newState = tasks.map(obj => {
      // 👇️ if id equals 2, update country property
      if (obj.id === id) {
        return { ...obj, status: isComplete }
      }

      // 👇️ otherwise return object as is
      return obj
    })

    setTasks(newState)
  }

  useEffect(() => {
    // Updates the data in session storage when
    sessionStorage.setItem('TMA_Tasks', JSON.stringify(tasks))
  }, [tasks])

  const taskTemplate = (option) => {
    return (
        <div className="inline-task-add-container" >
        <Button icon="pi pi-check" className="p-button-rounded p-button-outlined p-button-success" aria-label="User" />

            <span>
              Text Display
            </span>

            <i className='pi pi-trash'></i>
        </div>
    );
}


  return (
    <div className='task-view-background'>

      <i className='pi pi-sun' style={{'fontSize': '2em'}}></i>
      <h2 className = 'task-type-header'>My Day</h2>


      <AddTask className='MyDay-AddTask-Container' onAdd = {addTask}/>

      <h5 className='task-subtitle'>Your Tasks For The Day</h5>

      <div className='myDay-tasks'>
        <>
        {tasks.map((i) => !i.status && i?.status !== null ? <Tasks key= {i.id} task={ i } onDelete={deleteTask} onCheck={completeTask} /> : null)}
        </>
        <h5>Completed Tasks</h5>
        {tasks.map((i) => i.status && i.status !== null ? <Tasks key= {i.id} task={ i } onDelete={deleteTask} onCheck={completeTask} /> : null)}
      </div>
    </div>
  )
}

export default TaskView
