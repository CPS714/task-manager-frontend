import React from 'react'
import { BsPersonCircle } from 'react-icons/bs';
import {FaLock} from 'react-icons/fa';
import "./login.css";

export default function login() {
  return (
    <div className="login-container">
      <BsPersonCircle size={80} style={{marginBottom: "30px", marginTop: '60px'}}/>

      <p style={{marginBottom: '10px', marginRight: "140px"}}>Userame: </p>

      <div className="username-container">
        <BsPersonCircle size={20}/>
        <input type='text' name='username' placeholder='Username'/>
      </div>

      <span style={{marginBottom: '10px', marginRight: "140px"}}>Password: </span>

      <div className='password-container'>
        <FaLock size={20} />
        <input type='password' name='username' placeholder="Password"/>
      </div>
    </div>
  )
}
