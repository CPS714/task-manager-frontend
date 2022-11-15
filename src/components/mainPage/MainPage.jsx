/* eslint-disable */
import React, { useState } from 'react'
import TaskView from './tasksFolder/TaskView'
import HeaderBar from './HeaderBar'
import SideBar from './SideBar'
import CompletedView from './CompletedTasks/CompletedView'
import { useEffect } from 'react';

function MainPage (props) {
  const [option, setOption] = useState();
  const [options, setOptions] = useState({ all: true, completed: false })
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
    .catch(err => console.log(err))
  }, [])


  return (
    <div className='mainpagecontainer'>
      <HeaderBar />
      <div className = "tasks-container">
        <SideBar options={options} changeOpt={changeOpt}/>
        {options?.all ? <TaskView tasks={tasks} setTasks={setTasks} /> : <CompletedView />}
        
      </div>
    </div>
  )
}

export default MainPage
