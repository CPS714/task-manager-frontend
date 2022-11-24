/* eslint-disable */
import '../../Stylings/mainPage.css'
import { FaRegLightbulb } from 'react-icons/fa'
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
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
  const {tasks} = props;

  const events = tasks?.map((task) => (
    {
      title:task.name, 
      start: new Date(task.schedule_date), 
      end: new Date(task.schedule_date)
    })
  );


    return(
        <div>
        <div className='myDay-header-Container'>
          <FaRegLightbulb className='myDay-BulbIcon'></FaRegLightbulb>
          <span className='myDay-Header'> Calendar View </span>
          <span className='pi pi-ellipsis-h'></span>
        </div>
        <Calendar localizer={localizer} events={events} 
        startAccessor="start" endAccessor="end" style={{height: 500, margin:"50px"}} />
      </div>    
      )
}

export default CalendarView