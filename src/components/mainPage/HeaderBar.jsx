import React from 'react'
import { BsPersonCircle } from 'react-icons/bs'
import 'primeicons/primeicons.css'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import '../../Stylings/headerbar.css'
import Dropdown from 'react-bootstrap/Dropdown'

function HeaderBar () {
  return (
<div className='headerbar' >
        <div className="header-container" >
            <div className="col-12 md:col-4" style={{ flexDirection: 'row', display: 'flex', justifyContent: 'flex-end', width: '100%', alignItems: 'center' }} >
                <div className="p-inputgroup" style={{ marginRight: '30%' }}>
                    <Button icon="pi pi-search" className="p-button-warning"/>
                    <InputText placeholder="Keyword"/>
                </div>
                <Dropdown style={{ left: '0%', marginRight: '3%' }}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic" className='logout-toggle'style={{ backgroundColor: 'transparent', borderColor: 'transparent' }}>
                        <BsPersonCircle size={40} style={{ color: 'black' }}/>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="/">Log Out</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
        </div>
    </div>

    </div>
  )
}

export default HeaderBar
