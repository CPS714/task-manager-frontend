/* eslint-disable */
import React, { useState, useEffect } from 'react'
import { FaRegLightbulb } from 'react-icons/fa'
import Tasks from './Tasks'
import AddTask from './AddTask'
import 'primeicons/primeicons.css'
import '../../../Stylings/mainPage.css'

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

  return (
    <div className='task-view-background'>
      <div className='myDay-header-Container'>
        <FaRegLightbulb className='myDay-BulbIcon'></FaRegLightbulb>
        <span className='myDay-Header'> My Day </span>
        <span className='pi pi-ellipsis-h'></span>
      </div>

      <AddTask className='MyDay-AddTask-Container' onAdd = {addTask}/>

      <div className='myDay-tasks'>
        <h5 className='tasks-header' style={{ marginBottom: '20px' }}>Your tasks for the Day</h5>
        <>
        {tasks.map((i) => !i.status && i?.status !== null ? <Tasks key= {i.id} task={ i } onDelete={deleteTask} onCheck={completeTask} /> : null)}
        </>
        <h5 className='completedTasks-header' style={{ marginTop: '40px' }}>Completed Tasks </h5>
        {tasks.map((i) => i.status && i.status !== null ? <Tasks key= {i.id} task={ i } onDelete={deleteTask} onCheck={completeTask} /> : null)}
      </div>
    </div>
  )
}

export default TaskView
