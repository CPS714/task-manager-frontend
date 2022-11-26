/* eslint-disable */
import '../../Stylings/mainPage.css'
import { FaRegLightbulb } from 'react-icons/fa'
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { useAuth0 } from '@auth0/auth0-react'
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const locales = {
  "en-US": require("date-fns/locale/en-US")
}
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});



function CalendarView(props){
  const {tasks, setTasks} = props;
  const { user } = useAuth0()
  console.log(tasks)
  

  const fetchTasks = async() => {
    const tasksResp = await fetch(`http://localhost:5000/api/tasks/user/${user.email}`);
    return tasksResp;
  }

  useEffect(() => {
    console.log("in use Effect")
    fetchTasks()
    .then(resp => resp.json())
    .then(data => setTasks(data))
    .catch(err => console.log(err))
  }, [])

// jason's version end: new Date(task.schedule_date)

  const events = tasks.map(({created_on, schedule_date, ...item}) => {
    return ({start: new Date(Date.parse(created_on)),
             end: new Date(Date.parse(schedule_date)),
             ...item})
            })

    return(
        <div>
        <div className='myDay-header-Container'>
          <FaRegLightbulb className='myDay-BulbIcon'></FaRegLightbulb>
          <span className='myDay-Header'> Calendar View </span>
          <span className='pi pi-ellipsis-h'></span>
        </div>
        <Calendar localizer={localizer} events={events} 
        startAccessor="start" endAccessor="end" titleAccessor="name" allDayAccessor="is_completed" style={{height: "600px", margin:"50px", width:"1000px"}} />
      </div>    
      )
}

export default CalendarView