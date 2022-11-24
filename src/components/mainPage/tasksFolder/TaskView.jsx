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
import { User } from '@auth0/auth0-react'
import { useAuth0 } from '@auth0/auth0-react'
function TaskView (props) {
  const {tasks, setTasks, getCall, deleteTask, completeTask} = props;
  console.log(tasks)
  const [openPop, setOpenPop] = useState(false)
  const [taskdData, setTaskData] = useState()
  const [isHover, setIsHover] = useState(false)
  const { user, logout } = useAuth0()
  const addTask = async (task) => {
  // const [tasks, setTasks] = useState(data)
  // const [tempTask, setTempTask] = useState('');
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
      email: user.email
    }])
  })
    const data = await res.json()
    .catch(err => console.log(err))
    console.log(data?.code)
    if(data?.code.toString() === '200'){
      getCall()
    }
    
  }

  const closing = () => {
    setOpenPop(false)
  }

  const opening = (e) => {
    setTaskData(e)
    setOpenPop(true)
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

      <i className='pi pi-globe' style={{'fontSize': '2em'}}></i>
      <h2 className = 'task-type-header'>All Tasks</h2>


      <AddTask className='MyDay-AddTask-Container' onAdd = {addTask}/>

      <h5 className='task-subtitle'>Your Tasks</h5>

      <div className='myDay-tasks'>
        <>
        {tasks?.map((i) => !i.is_completed && i?.is_completed !== null ? <div className='myDay-tasks'> 
        <Tasks key= {i.id} task={ i } onDelete={deleteTask} onCheck={completeTask} opening={opening} /> </div> : null)}
        </>
        <h5>Completed Tasks</h5>
        {tasks.map((i) => i.is_completed && i.is_completed !== null ? <Tasks opening={opening} key= {i.id} task={ i } onDelete={deleteTask} onCheck={completeTask} /> : null)}
      </div>
      {openPop ? <CustomPopup closeTab={closing} data={taskdData} getCall={getCall}/>: ""}
    </div>
  )
}

export default TaskView
