import React, { useState } from 'react'
import '../../../Stylings/tasks.css'
import propTypes from 'prop-types'
import { RiDeleteBinLine } from 'react-icons/ri'

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

  return (
    <div className='myDay-tasks-container'>
      <div className='myDay-task'>
        <span><input type='checkbox' checked={task?.status} onChange={handleCheckbox}></input></span>
        {task.task}

        <span>

          <button className='deleteTask-button' onClick={() => onDelete(task.id)}>

            <RiDeleteBinLine />

          </button>

        </span>

      </div>

    </div>
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
