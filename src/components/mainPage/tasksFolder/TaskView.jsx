/* eslint-disable */
import React, { useState, useEffect } from 'react'
import { FaRegLightbulb } from 'react-icons/fa'
import Tasks from './Tasks'
import AddTask from './AddTask'
import 'primeicons/primeicons.css'
import '../../../Stylings/mainPage.css'
import CustomPopup from '../../../Reusable/CustomPopup'

function TaskView (props) {

  const {tasks, setTasks} = props;

  const [openPop, setOpenPop] = useState(false)
  const [taskdData, setTaskData] = useState()
  const [isHover, setIsHover] = useState(false)
  
  const closing = () => {
    setOpenPop(false)
  }

  const opening = (e) => {
    setTaskData(e)
    setOpenPop(true)
  }

  function addTask (data) {
    setTasks(prev => [...prev, { id: prev.length + 1, task: data, status: false, desc: null, priority: 3 }])
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
    <div>
    <div className='myDay-header-Container'>
        <FaRegLightbulb className='myDay-BulbIcon'></FaRegLightbulb>
        <span className='myDay-Header'> My Day </span>
        <span className='pi pi-ellipsis-h'></span>
      </div>

      <AddTask className='MyDay-AddTask-Container' onAdd = {addTask}/>

      <div className='myDay-tasks' >
        <h5 className='tasks-header' style={{ marginBottom: '20px' }}>Your tasks for the Day</h5>
        <>
        {tasks.map((i) => !i.is_completed && i?.is_completed !== null ? <div className='myDay-tasks' onClick={() => opening(i)}> <Tasks key= {i.id} task={ i } onDelete={deleteTask} onCheck={completeTask} /> </div> : null)}
        </>
        <h5 className='completedTasks-header' style={{ marginTop: '40px' }}>Completed Tasks </h5>
        {tasks.map((i) => i.is_completed && i.is_completed !== null ? <Tasks key= {i.id} task={ i } onDelete={deleteTask} onCheck={completeTask} /> : null)}
      </div>
      {openPop ? <CustomPopup closeTab={closing} data={taskdData}/>: ""}
    </div>
  )
}

export default TaskView
