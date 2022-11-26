/* eslint-disable */
import React from 'react'
import { useEffect, useState } from 'react'
import './CustomPopup.css'
import Dropdown from 'react-bootstrap/Dropdown'
import { Calendar } from 'primereact/calendar'
import { addLocale } from 'primereact/api';
import { Dialog } from 'primereact/dialog';
import 'primereact/resources/themes/tailwind-light/theme.css'    

function CustomPopup(props) {
    const [displayBasic, setDisplayBasic] = useState(false);
    const [edit, setEdit] = useState(true)
    const [id, setId] = useState(props?.data?.id)
    const [task, setTask] = useState(props?.data?.name)
    const [desc, setDec] = useState(props?.data?.description)
    const [priority, setPriority] = useState(props?.data?.priority)
    const [onSave, SetOnSave] = useState(true)
    const [date, setDate] = useState(props?.data?.schedule_date);
    
    //Declaring date variables 
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = (month === 0) ? 11 : month - 1;
    let prevYear = (prevMonth === 11) ? year - 1 : year;
    let nextMonth = (month === 11) ? 0 : month + 1;
    let nextYear = (nextMonth === 0) ? year + 1 : year;


    useEffect(() => {
        if(task !== props?.data?.name || desc !== props?.data?.desc || priority !== props?.data?.priority){
            SetOnSave(false)
        }
    }, [task, desc, priority])

    const updateTask =  async () => {
        const requestOptions = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: task,
            description: desc,
            priority: priority,
            schedule_date: date

          })
      };
      await fetch(`http://localhost:5000/api/tasks/${props?.data?.id}`, requestOptions)
          //.then(response => response.json())
          .catch(err => console.log(err))
          props.getCall()
          //setTasks([...tasks, {is_completed: isComplete}])
        
      }

  return (
    <div className='popup-box'>

        
        <div className="header-bar" >
            <button className="btn-close" onClick={props.closeTab} style={{marginLeft: '0.5rem', paddingTop: '0.5rem'}}> </button>
            <button className='edit' onClick={() => setEdit(!edit)}> {edit? "Edit" : "Close" }  </button>
        </div>
        <div className='box'>
            <input type='text'
            value={task}
            name='taskName'
            className='headerName'
            onChange={(event) => setTask(event.target.value)}
            disabled={edit}/>
        </div>
        <div className='info'>
            <div className='priority'>
            <h1 style={{marginLeft: "1rem", fontSize: "30px"}}><b> Priority: </b></h1>
            <Dropdown style={{ left: '0%', marginRight: '2rem' }} >
                    <Dropdown.Toggle variant="success" id="dropdown-basic" className='logout-toggle'style={{borderColor: 'transparent' }}>
                        {priority}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={ () => setPriority(1)}> 1 </Dropdown.Item>
                        <Dropdown.Item onClick={ () => setPriority(2)}> 2 </Dropdown.Item>
                        <Dropdown.Item onClick={ () => setPriority(3)}> 3 </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div className='status' style={{marginTop: "1rem"}}>
                <h1 style={{marginLeft: "1rem", fontSize: "30px"}}><b> Status: </b></h1>
                <p style={{marginRight: '2rem', fontSize: "24px"}}>{props?.data?.is_completed ? "Completed" : "Incomplete"} </p>
            </div>

            <div div className='date' style={{marginTop: "1rem"}}>
                <h1 style={{marginLeft: "1rem", fontSize: "30px"}}><b> Date: </b></h1>
                <Calendar style={{ left: '0%', marginRight: '2rem' }} id="icon" value={date ? new Date(date) : null} onChange={(e) => setDate(e.value)}  appendTo={'self'} showIcon />
            </div>
        </div>
        <div className='descreption-container'>
            <h1 className='descriptionClass'  > Description </h1>
            <textarea 
            style = {{marginLeft: '1rem'}}
            type='text'
            value={desc}
            name='descreption'
            className='descreption'
            onChange={(event) => setDec(event.target.value)}
            disabled={edit}/>
        </div>
        
        <div className="footer" >
            <button className='edit' disabled={onSave} style={onSave ? {color: 'grey'} : {color: 'blue'}} onClick={updateTask}> Save  </button>
        </div>
    </div>
  )
}

export default CustomPopup
