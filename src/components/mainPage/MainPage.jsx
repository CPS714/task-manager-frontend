/* eslint-disable */
import React, { useState } from 'react'
import TaskView from './tasksFolder/TaskView'
import HeaderBar from './HeaderBar'
import SideBar from './SideBar'
import CompletedView from './CompletedTasks/CompletedView'
import CalendarView from './CalendarView'
import { useEffect } from 'react';

function MainPage (props) {
  const [option, setOption] = useState();
  const [options, setOptions] = useState({ all: true, completed: false, error: false, calendarView: false })
  const [isLoading, setIsLoading] = useState(true)
  const [tasks, setTasks] = useState([]);

  const changeOpt = (opt) => {
    const placeholder = options;
    Object.keys(placeholder).forEach(key => {
      if (opt === key) {
        placeholder[key] = true
      } else {
        placeholder[key] = false
      }
    })
    setOptions({...placeholder});
    console.log(options)
  }

  useEffect(() => {
    
    const fetchTasks = async() => {
      const tasksResp = await fetch('http://localhost:5000/api/tasks');
      return tasksResp;
    }
    fetchTasks()
    .then(resp => resp.json())
    .then(data => setTasks(data))
    .catch(err => setTasks("err"))
    setIsLoading(false)
  }, [])


  return (
    <div className='mainpagecontainer'>
      <HeaderBar />
      <div className = "tasks-container">
        <SideBar options={options} changeOpt={changeOpt}/>
        <div style={{flex: 1, overflow: 'auto'}}>
        {isLoading ?
        <img style={{ width: '80%', height: '80%' }} src={require('../../Images/Turtle_Loading.gif')} alt="loading-gif" /> : null }
        {(options?.all & !isLoading)? <TaskView tasks={tasks} setTasks={setTasks} /> : null}
        {(options?.completed & !isLoading) ? <CompletedView tasks={tasks}/> : null}
        {(options?.calendarView & !isLoading) ? <CalendarView/> : null}
        </div>
        
      </div>
    </div>
  )
}


export default MainPage
