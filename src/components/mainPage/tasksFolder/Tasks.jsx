/* eslint-disable */
import React, { useState } from 'react'
import '../../../Stylings/tasks.css'
import propTypes from 'prop-types'
import { RiDeleteBinLine } from 'react-icons/ri'
import { Chip } from 'primereact/chip'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import { Checkbox } from 'primereact/checkbox';

function Tasks ({ task, onDelete, onCheck }) {
  const [checked, setChecked] = useState(false)
  function handleCheckbox () {
    console.log(checked)
    setChecked(!task?.status)
    if (task?.status) {
      onCheck(task.id, false)
    } else {
      onCheck(task.id, true)
    }
  }

  const [tempTask, setTempTask] = useState('');


  const taskTemplate = (option) => {
    return (
        <div className="inline-task-add-container" >
        <Checkbox onChange={handleCheckbox} checked={task?.status}></Checkbox>
            <span>
              {task.task}
            </span>

            <i className='pi pi-trash'></i>
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
