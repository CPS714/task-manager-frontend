/* eslint-disable */
import React from 'react'
import { useEffect, useState } from 'react'
import './CustomPopup.css'
import Dropdown from 'react-bootstrap/Dropdown'
import { Calendar } from 'primereact/calendar'
import { addLocale } from 'primereact/api';
import 'primereact/resources/themes/tailwind-light/theme.css'    

function CustomPopup(props) {
    const [edit, setEdit] = useState(true)
    const [id, setId] = useState(props?.data?.id)
    const [task, setTask] = useState(props?.data?.task)
    const [desc, setDec] = useState(props?.data?.desc)
    const [priority, setPriority] = useState(props?.data?.priority)
    const [onSave, SetOnSave] = useState(true)
    const [date3, setDate3] = useState(null);
    
    //Declaring date variables 
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = (month === 0) ? 11 : month - 1;
    let prevYear = (prevMonth === 11) ? year - 1 : year;
    let nextMonth = (month === 11) ? 0 : month + 1;
    let nextYear = (nextMonth === 0) ? year + 1 : year;


    useEffect(() => {
        if(task !== props?.data?.task || desc !== props?.data?.desc || priority !== props?.data?.priority){
            SetOnSave(false)
        }
    }, [task, desc, priority])

    

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
            <div className='priority' style={{marginTop: "1rem"}}>
                <h1 style={{marginLeft: "1rem", fontSize: "30px"}}><b> Status: </b></h1>
                <p style={{marginRight: '2rem', fontSize: "24px"}}>{props?.data?.status ? "Completed" : "Incomplete"} </p>
            </div>
        </div>
        <div className='descreption-container'>
            <h1 style={{marginLeft: '1rem'}} > Description </h1>
            <textarea 
            style = {{marginLeft: '1rem'}}
            type='text'
            value={desc}
            name='descreption'
            className='descreption'
            onChange={(event) => setDec(event.target.value)}
            disabled={edit}/>
        </div>
        <div className="field col-12 md:col-4">
            <Calendar id="icon" value={date3} onChange={(e) => setDate3(e.value)}  appendTo={'self'} showIcon />
        </div>
        <div className="footer" >
            <button className='edit' disabled={onSave} style={onSave ? {color: 'grey'} : {color: 'blue'}} onClick={()=>{console.log("Hello")}}> Save  </button>
        </div>
    </div>
  )
}

export default CustomPopup