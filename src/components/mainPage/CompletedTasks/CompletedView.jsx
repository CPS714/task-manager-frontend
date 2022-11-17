/* eslint-disable */
import React, { useEffect, useState } from 'react'
import '../../../Stylings/mainPage.css'
import { FaRegLightbulb } from 'react-icons/fa'
import Tasks from '../tasksFolder/Tasks'

function CompletedView () {
    const [tasks, setTasks] = useState({})
    const [cnt, setCnt] = useState(0);
    
    useEffect(() => {
        if(cnt < 1){
            var temp = JSON.parse(sessionStorage?.getItem('TMA_Tasks'))
            setTasks(temp)
            console.log(temp)
        }
        setCnt(1)
    },[cnt])
  return (
    <div className="task-view-container">
      <div className='myDay-header-Container'>
        <FaRegLightbulb className='myDay-BulbIcon'></FaRegLightbulb>
        <span className='myDay-Header'> Completed </span>
        <span className='pi pi-ellipsis-h'></span>
      </div>
    </div>
  )
}

export default CompletedView
