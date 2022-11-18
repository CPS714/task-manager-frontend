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
    <div>
      <div className='myDay-header-Container'>
        <FaRegLightbulb className='myDay-BulbIcon'></FaRegLightbulb>
        <span className='myDay-Header'> Completed </span>
        <span className='pi pi-ellipsis-h'></span>

        
      <div className='myDay-tasks' >
        <h5 className='completedTasks-header' style={{ marginTop: '40px' }}>Completed Tasks </h5>
        {props?.tasks.map((i) => i.is_completed && i.is_completed !== null ? <Tasks key= {i.id} task={ i } onDelete={deleteTask} onCheck={completeTask} /> : null)}
      </div>
      
      </div>
    </div>
  )
}

export default CompletedView
