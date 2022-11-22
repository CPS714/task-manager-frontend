/* eslint-disable */
import React from 'react'
import { BsPersonCircle } from 'react-icons/bs'
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import { InputText } from 'primereact/inputtext'
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button'
import '../../Stylings/headerbar.css'
import Dropdown from 'react-bootstrap/Dropdown'
import { useAuth0 } from '@auth0/auth0-react'

function HeaderBar () {


    const items = [
        {
           label:'Users',
           icon:'pi pi-fw pi-user',
           items:[
              {
                 label:'Account',
                 icon:'pi pi-fw pi-user',
              },
              {
                label:'Logout',
                icon:'pi pi-fw pi-power-off',
                url:'/',
             }
           ]
        },
     ];

     const start = <img alt="logo" src="showcase/images/logo.png" onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} height="40" className="mr-2"></img>;
     const searchBar = ( 
        <div className="p-inputgroup" >
            <Button icon="pi pi-search" className="p-button-warning"/>
            <InputText placeholder="Keyword"/>
        </div>
     );

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

        <Menubar model={items} start={start} end={searchBar} style={{width: '100vw', height:'5em'}}/>
    </div>
    );
}

export default HeaderBar
