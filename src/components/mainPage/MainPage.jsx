/* eslint-disable */
import React, { useState } from 'react'
import TaskView from './tasksFolder/TaskView'
import HeaderBar from './HeaderBar'
import SideBar from './SideBar'
import CompletedView from './CompletedTasks/CompletedView'
import CalendarView from './CalendarView'
import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react'

function MainPage (props) {
  const [option, setOption] = useState();
  const [options, setOptions] = useState({ all: true, completed: false, error: false, calendarView: false })
  const [isLoading, setIsLoading] = useState(true)
  const [tasks, setTasks] = useState([]);
  const { user, logout } = useAuth0()
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

  //API calls used by all classes

  const getCall = () => {
    const fetchTasks = async() => {
      const tasksResp = await fetch(`http://localhost:5000/api/tasks/user/${user.email}`);
      return tasksResp;
    }
    fetchTasks()
    .then(resp => resp.json())
    .then(data => setTasks(data))
    .catch(err => setTasks("err"))
  }

  // Delete Task
  const deleteTask = async (id) => {
    const res = await fetch(`http://localhost:5000/api/tasks/${id}`, { method: 'DELETE' })
    const data = await res.json()
    if(data?.code.toString() === '200'){
      setTasks(tasks.filter((task) => task.id !== id ))
    }
  }


  const completeTask =  async (id, isComplete) => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        is_completed: isComplete

      })
  };
  await fetch(`http://localhost:5000/api/tasks/${id}`, requestOptions)
      //.then(response => response.json())
      .catch(err => console.log(err))
      getCall()
      //setTasks([...tasks, {is_completed: isComplete}])
    
  }

  useEffect(() => {
    
    const fetchTasks = async() => {
      const tasksResp = await fetch(`http://localhost:5000/api/tasks/user/${user.email}`);
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
        {(options?.all & !isLoading)? <TaskView tasks={tasks} setTasks={setTasks} getCall={getCall} deleteTask={deleteTask} completeTask={completeTask} /> : null}
        {(options?.completed & !isLoading) ? <CompletedView tasks={tasks} completeTask={completeTask} deleteTask={deleteTask} getCall={getCall}/> : null}
        {(options?.calendarView & !isLoading) ? <CalendarView/> : null}
        </div>
        
      </div>
    </div>
  )
}


export default MainPage
