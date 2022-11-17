/* eslint-disable */
import React, { useState } from 'react'

import { useEffect } from 'react'
import { ListBox } from 'primereact/listbox';
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import '../../Stylings/sideBar.css'
function SideBar (props) {
  const [options, setOptions] = useState({ all: false, completed: false, calendarView: false })

  const [test, setTest] = useState(true);

  const [selectedTaskView, setSelectedTaskView] = useState(null);

  const tasks = [
    { name: 'All', code: 'ALL' , icon: 'pi-globe'},
    { name: 'Completed', code: 'COMPL', icon: 'pi-check-circle' },
    { name: 'Today', code: 'TDAY' , icon: 'pi-sun'},
    { name: 'Weekly', code: 'WEEK', icon: 'pi-calendar' },
    { name: 'Monthly', code: 'MNTH', icon: 'pi-calendar' }
  ];

  const taskTemplate = (option) => {
    return (
        <div className="country-item">
            <i className={`pi ${option.icon}`}></i>
            <div> {option.name}</div>
        </div>
    );
}



  return (
    <div className='SideBar-containier'>
      <div className='pi pi-bolt'> Tasks </div>

 

      <ListBox value={selectedTaskView} options={tasks} onChange={(e) => setSelectedTaskView(e.value)} itemTemplate={taskTemplate} optionLabel="name" style={{margin: '20px 0px',height: '100%'}}/>

      {/* <div className = { props.options?.all ? 'navbar-container-selected' : 'navbar-container' } style={{marginTop: '0.3rem'}}>
      <button className='navbar' onClick={() => props.changeOpt('all')}> All</button>
      </div>

      <div className = { props.options?.completed ? 'navbar-container-selected' : 'navbar-container' } >
      <button className='navbar' onClick={() => props.changeOpt('completed')}>Completed</button>
      </div> */}
    </div>
  )
}

export default SideBar
