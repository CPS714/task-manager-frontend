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
    const { user, logout } = useAuth0()
    console.log(user)
    const items = [
        {
           label: user.name,
           icon:'pi pi-fw pi-user',
           items:[
              {
                 label:'Account',
                 icon:'pi pi-fw pi-user',
              },
              {
                label:'Logout',
                icon:'pi pi-fw pi-power-off',
                url: ()=> logout({ returnTo: window.location.origin }),
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
  return (

        <Menubar model={items} start={start} end={searchBar} style={{width: '100vw', height:'5em'}}/>
  )
}

export default HeaderBar
