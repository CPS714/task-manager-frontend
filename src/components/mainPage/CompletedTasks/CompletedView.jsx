/* eslint-disable */
import React, { useEffect, useState } from 'react'
import '../../../Stylings/mainPage.css'
import { FaRegLightbulb } from 'react-icons/fa'
import Tasks from '../tasksFolder/Tasks'


function CompletedView (props) {
    const [tasks, setTasks] = useState({})
    const [cnt, setCnt] = useState(0);

    
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
    
  return (

    <div className='task-view-background'>
      <div className="task-view-container">
        <i className='pi pi-sun' style={{'fontSize': '2em'}}></i>
        <h2 className = 'task-type-header'>Completed</h2>
      </div>
    </div>
  )
}

export default CompletedView
