/* eslint-disable */
import React, { useState } from 'react'
import { useEffect } from 'react'
import '../../Stylings/sideBar.css'
function SideBar (props) {
  const [options, setOptions] = useState({ all: false, completed: false })

  const [test, setTest] = useState(true);

  return (
    <div className='SideBar-containier'>
      <p> Add Image here</p>
      <div className = { props.options?.all ? 'navbar-container-selected' : 'navbar-container' } style={{marginTop: '0.3rem'}}>
      <button className='navbar' onClick={() => props.changeOpt('all')}> All</button>
      </div>

      <div className = { props.options?.completed ? 'navbar-container-selected' : 'navbar-container' } >
      <button className='navbar' onClick={() => props.changeOpt('completed')}>Completed</button>
      </div>
    </div>
  )
}

export default SideBar