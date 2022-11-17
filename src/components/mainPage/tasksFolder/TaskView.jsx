/* eslint-disable */
import React, { useState, useEffect } from 'react'
import { FaRegLightbulb } from 'react-icons/fa'
import Tasks from './Tasks'
import AddTask from './AddTask'
import 'primeicons/primeicons.css'
import '../../../Stylings/mainPage.css'
import CustomPopup from '../../../Reusable/CustomPopup'

// const data = [{
//   id: 1,
//   task: 'Give dog a bath',
//   status: false
// }, {
//   id: 2,
//   task: 'bark bark',
//   status: false
// }]

function TaskView (props) {
  const {tasks, setTasks} = props;
  const [openPop, setOpenPop] = useState(false)
  const [taskdData, setTaskData] = useState()
  const [isHover, setIsHover] = useState(false)
  
  const addTask = async (task) => {

    const res = await fetch('http://localhost:5000/api/tasks/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify([{
        name: task,
        is_completed: false,
        description: task,
        priority: 2,
        schedule_date: '2022-10-21'
      }])
    })

    const data = await res.json()
    setTasks([...tasks, data])
  }

  const closing = () => {
    setOpenPop(false)
  }

  const opening = (e) => {
    setTaskData(e)
    setOpenPop(true)
  }

  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/api/tasks/${id}`, { method: 'DELETE' })
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
