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
  const [options, setOptions] = useState({ all: true, completed: false, calendarView: false })

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

  return (
    <div className='mainpagecontainer'>
      <HeaderBar />
      <div className = "tasks-container">
        <SideBar options={options} changeOpt={changeOpt}/>
        {options?.all ? <TaskView/> : options.completed? <CompletedView /> : <CalendarView/>}        
      </div>
    </div>
  )
}

export default MainPage
