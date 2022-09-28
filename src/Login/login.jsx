import React, { useState } from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import {FaLock} from 'react-icons/fa';
import "../Stylings/login.css";

function Login(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({isLoading: false, status: ''});
  const [isLoading, setIsLoading] = useState(false)
  const onSearch = (event) => {
    if(event.key === 'Enter'){
      if(userName === 'username' && password === 'password'){
        setIsLoading(true)
        console.log("You are in")
      }
      else{
        console.log("No")
      }
    }
  }
  return (
    <div className='login-background'>
      <div className="login-container">
        <BsPersonCircle size={80} style={{marginBottom: "30px", marginTop: '40px'}}/>

        <p style={{marginBottom: '10px', marginRight: "140px"}}>Username: </p>

        <div className="field-container">
          <BsPersonCircle size={20}/>
          <input type='text' 
          value={userName} 
          onChange={(event) => setUserName(event.target.value)}
          name='username' 
          placeholder='Username'/>
        </div>

        <span style={{marginBottom: '10px', marginRight: "140px"}}>Password: </span>

        <div className='field-container'>
          <FaLock size={20} />
          <input type='password' 
          value={password} 
          onChange={(event) => setPassword(event.target.value)}
          onKeyPress={onSearch} 
          name='password' 
          placeholder="Password"/>
        </div>
        <div>
          {!isLoading ? 
            <p className="login-signin" onClick={props.switchOpt} >Sign in</p> :  
            <img style={{width: '60%', height: '20%'}} src={require('../Images/loading.gif')} alt="loading-gif" />
            }
          
        </div>
        
        
      </div>
    </div>
  )
}

export default Login
