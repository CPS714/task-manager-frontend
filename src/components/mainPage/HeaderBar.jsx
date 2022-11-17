import React from 'react'
import { BsPersonCircle } from 'react-icons/bs'
import 'primeicons/primeicons.css'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import '../../Stylings/headerbar.css'
import Dropdown from 'react-bootstrap/Dropdown'
import { useAuth0 } from '@auth0/auth0-react'

function HeaderBar () {
  const { user, logout } = useAuth0()
  return (
<div className='headerbar' >
        <div className="header-container" >
            <div className="col-12 md:col-4" style={{ flexDirection: 'row', display: 'flex', justifyContent: 'flex-end', width: '100%', alignItems: 'center' }} >
                <div className="p-inputgroup" style={{ marginRight: '30%' }}>
                    <Button icon="pi pi-search" className="p-button-warning"/>
                    <InputText placeholder="Keyword"/>
                </div>
                <h3>{user.name}</h3>
                <Dropdown style={{ left: '0%', marginRight: '3%' }}>
                    <Dropdown.Toggle variant="success" id="dropdown-basic" className='logout-toggle'style={{ backgroundColor: 'transparent', borderColor: 'transparent' }}>
                        <BsPersonCircle size={40} style={{ color: 'black' }}/>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => logout({ returnTo: window.location.origin })}>Log Out</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
        </div>
    </div>

    </div>
  )
}

export default HeaderBar
