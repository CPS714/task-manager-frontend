/* eslint-disable */
import React, { useState, useEffect } from 'react'
import { FaRegLightbulb } from 'react-icons/fa'
import Tasks from './Tasks'
import AddTask from './AddTask'
import 'primeicons/primeicons.css'
import '../../../Stylings/mainPage.css'
import CustomPopup from '../../../Reusable/CustomPopup'
import { Chip } from 'primereact/chip';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button'

function TaskView (props) {
  const {tasks, setTasks} = props;
  console.log(tasks)
  const [openPop, setOpenPop] = useState(false)
  const [taskdData, setTaskData] = useState()
  const [isHover, setIsHover] = useState(false)
  
  const addTask = async (task) => {

  const [tasks, setTasks] = useState(data)
  const [tempTask, setTempTask] = useState('');

    const data = await res.json()
    console.log(data)
    setTasks([...tasks, {name: task}])
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

  setTasks(tasks.filter((task) => task.id !== id ))
  }

  const completeTask = (id, isComplete) => {
    const newState = tasks?.map(obj => {
      // 👇️ if id equals 2, update country property
      if (obj.id === id) {
        return { ...obj, status: isComplete }
      }

      // 👇️ otherwise return object as is
      return obj
    })

    setTasks(newState)
  }


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
        {tasks?.map((i) => !i.is_completed && i?.is_completed !== null ? <div className='myDay-tasks' onClick={() => opening(i)}> <Tasks key= {i.id} task={ i } onDelete={deleteTask} onCheck={completeTask} /> </div> : null)}
        </>
        <h5>Completed Tasks</h5>
        {tasks.map((i) => i.status && i.status !== null ? <Tasks key= {i.id} task={ i } onDelete={deleteTask} onCheck={completeTask} /> : null)}
      </div>
      {openPop ? <CustomPopup closeTab={closing} data={taskdData}/>: ""}
    </div>
  )
}

export default TaskView
