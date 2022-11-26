/* eslint-disable */
import React, { useState } from 'react'
import '../../../Stylings/tasks.css'
import propTypes from 'prop-types'
import { RiDeleteBinLine } from 'react-icons/ri'
import 'primeicons/primeicons.css';
import { Chip } from 'primereact/chip'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { Checkbox } from 'primereact/checkbox';

function Tasks ({ task, onDelete, onCheck, opening }) {
  const [checked, setChecked] = useState(false)
  const [tempTask, setTempTask] = useState('');

  function handleCheckbox () {
    console.log(checked)
    setChecked(!task?.is_completed)
    if (task?.is_completed) {
      onCheck(task.id, false)
    } else {
      onCheck(task.id, true)
    }
  }

  const taskScheduleDate = new Date(Date.parse(task.schedule_date))

  const taskTemplate = (option) => {
    return (

        <div className="inline-task-add-container" >
        <Checkbox onChange={handleCheckbox} checked={task?.is_completed}></Checkbox>
            <span className="task-name-container" onClick={() => opening(task)}>
              {task.name}
              {!task?.is_completed && <p className='pi pi-calendar' style={{color:"grey", fontSize:"10px"}}> {task.schedule_date?.slice(0,10)} </p>}
              {task?.is_completed && <p className='pi pi-calendar' style={{color:"grey", fontSize:"10px", textDecoration: "line-through" }}> {task.schedule_date?.slice(0,10)} </p>}
            </span>
            <i className='pi pi-trash' onClick={() => onDelete(task.id)} ></i>
        </div>
    );
}


  return (
    <Chip style={{padding:'1em', width: '80%', justifyContent: 'space-evenly', background: 'white', margin: '1em 0'}} template={taskTemplate} />
    // <div className='myDay-tasks-container'>

      
      
    //   <div className='myDay-task'>
    //     <span><input type='checkbox' checked={task?.status} onChange={handleCheckbox}></input></span>
    //     {task.task}

    //     <span>

    //       <button className='deleteTask-button' onClick={() => onDelete(task.id)}>

    //         <RiDeleteBinLine />

    //       </button>

    //     </span>

    //   </div>

    // </div>
  )
}

Tasks.defaultProps = {
  task: 'test'
}

Tasks.propTypes = {
  task: propTypes.any,
  id: propTypes.any,
  onDelete: propTypes.any,
  onCheck: propTypes.any
}

export default Tasks
